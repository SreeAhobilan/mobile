import { useState,useEffect } from "react";
import { useHistory,useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export function EditMobile(){
  const { id } = useParams();
  const [list,setMobile]=useState(null);
  const getList=()=>{
    fetch(`https://619dc51f131c600017089034.mockapi.io/mobiles/${id}`,{
        method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMobile(mvs));
};
useEffect(getList,[]);
return list? <UpdateMobiles list={list}/>:"";
}

function UpdateMobiles({list}) {
  const [name, setName] = useState(list.name);
  const [poster, setPoster] = useState(list.poster);
  const [rating, setRating] = useState(list.rating);
  const [trailer, setTrailer] = useState(list.trailer);
  const editMobile=() => {
    const updatedMobile = {
      name,
      poster,
      rating,
      trailer
    };

    fetch(`https://619dc51f131c600017089034.mockapi.io/mobiles/${list.id}`,{
            method:"PUT",
            body:JSON.stringify(updatedMobile),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((data)=>data.json())
        .then(()=>history.push('/mobile'))
      }
  const history = useHistory();
  return (
    <div className='edit-mobile'>
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
      <Button onClick={editMobile}>Save</Button>
    </div>
  );
}
