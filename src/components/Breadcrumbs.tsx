import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';

export default function BasicBreadcrumbs() {
    const { cricketer } = useParams<{ cricketer: string }>();

  return (
    <div role="presentation z-10">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="#efefef" href="/">
         Cricketers
        </Link>
        <Typography color="#efefef">{cricketer}</Typography>
      </Breadcrumbs>
    </div>
  );
}
