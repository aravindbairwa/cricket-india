import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import getPlayers, { TPlayer } from "../api-data/get-players";
import { Player } from "../interfaces";
import { getAgeFromTimestamp } from "../utils";

export const GlobalContext = createContext<any>(null);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [cricketers, setCricketers] = useState<TPlayer[]>([]);
  const [updatedPlayers, setUpdatedPlayers] = useState<Player[]>([]);
  const [activeCricketer, setActiveCricketer] = useState<Player>();
  const [playersOfSameType, setPlayersOfSameType] = useState<Player[]>();
  const [param, setParam] = useState<String>();
  const rows = useRef(null);

  const getPlayerDetailsByName = useCallback(
    (fullname: String) => {
      let finalObj = updatedPlayers.filter((item) => fullname === item.name)[0];
      setActiveCricketer(finalObj);
    },
    [updatedPlayers]
  );

  const getPlayersOfSameType = useCallback(
    (type: string) => {
      setPlayersOfSameType([
        ...updatedPlayers
          .filter((item) => type === item.type)
          .filter((item) => activeCricketer?.name !== item.name),
      ]);
    },
    [activeCricketer?.name, updatedPlayers]
  );

  useEffect(() => {
    const getAllCricketers = async () => {
      try {
        const fetchedData = await getPlayers();
        setCricketers(fetchedData);

        let a = fetchedData;
        let b = JSON.parse(JSON.stringify(a));
        const newData = b.map((cricketer: Player) => {
          const cricketersAge = getAgeFromTimestamp(cricketer.dob);
          return {
            ...cricketer,
            age: cricketersAge,
          };
        });

        setUpdatedPlayers(newData);
        rows.current = newData;
      } catch (error) {
        console.error(error);
      }
    };

    getAllCricketers();
  }, []);

  useEffect(() => {
    if (param) getPlayerDetailsByName(param);
    if (activeCricketer?.type) getPlayersOfSameType(activeCricketer?.type);
  }, [
    param,
    activeCricketer?.type,
    getPlayerDetailsByName,
    getPlayersOfSameType,
  ]);

  return (
    <GlobalContext.Provider
      value={{
        cricketers,
        getPlayerDetailsByName,
        getPlayersOfSameType,
        updatedPlayers,
        setUpdatedPlayers,
        playersOfSameType,
        setParam,
        activeCricketer,
        setActiveCricketer,
        rows,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
