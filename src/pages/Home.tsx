import React from "react";
import Table from "../components/Table";

const Home: React.FC = () => {
  return (
    
      <section>
        <div className="flex flex-col justify-center items-center p-20 h-[100vh]">
      <Table />
    </div>

  <div className='air air1'></div>
  <div className='air air2'></div>
  <div className='air air3'></div>
  <div className='air air4'></div>
</section>
  );
};

export default Home;
