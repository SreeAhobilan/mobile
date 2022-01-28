import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export function AddMobiles({ mobileList, setMobileList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMobile=() => {
    const newMobile = {
      name,
      poster,
      rating,
      trailer
    };

    fetch(`https://619dc51f131c600017089034.mockapi.io/mobiles`,{
            method:"POST",
            body:JSON.stringify(newMobile),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((data)=>data.json())
        .then(()=>history.push('/mobile'))
      }
  const history = useHistory();
  return (
    <div className='add-mobile'>
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder='Enter the Name' />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder='Enter the Poster URL' />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder='Enter the Rating' />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        placeholder='Enter the trailer url' />
      <Button onClick={addMobile}>Add Mobile</Button>
    </div>
  );
}
