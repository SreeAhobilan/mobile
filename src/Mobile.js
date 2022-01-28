import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@mui/material';

export function Mobile({ name, rating, poster,deleteButton,editButton,id}) {
  const history=useHistory();
  return (
    <Card className='mobile-container'>
      <img
        src={poster}
        alt=''
        className='mobile-poster' />
        < CardContent>
      <div className='mobile-specs'>
        <h3 className='mobile-name'>{name}</h3>
        <p className='mobile-rating'>{rating}</p>
        <IconButton onClick={()=>history.push(`/mobile/${id}`)}>
        <InfoIcon color='primary'/>
        </IconButton>
        {editButton}
        {deleteButton}
        
      </div>
      </CardContent>
    </Card>
  );
}
