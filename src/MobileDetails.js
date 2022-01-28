import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";

export function MobileDetails() {
  const { id } = useParams();
  const [list,setMobile]=useState([]);
  const getList=()=>{
    fetch(`https://619dc51f131c600017089034.mockapi.io/mobiles/${id}`,{
        method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMobile(mvs));
};
useEffect(getList,[]);
  // const lists = list[id];
  // console.log(lists);
  const history=useHistory();
  return (
    <div className='mobile-details-container'>
      <iframe
        width="100%"
        height="523"
        src={list.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
      <Button onClick={() => history.push(`/mobile`)} variant="contained">Back</Button>
    </div>
  );
}
