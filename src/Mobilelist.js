import { Mobile } from "./Mobile";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

export function Mobilelist() {
  const [list,setMobileList]=useState([]);
  const getList=()=>{
      fetch("https://619dc51f131c600017089034.mockapi.io/mobiles",{
          method:"GET",
      })
      .then((data)=>data.json())
      .then((mvs)=>setMobileList(mvs));
  };
  useEffect(getList,[]);
  const deleteMobile=(id)=>{
  // const deleteIndex=index;
  // const remainingMobiles=list.filter((mv,idx)=>{
  //         return deleteIndex!==idx});
  //         setMobileList(remainingMobiles)

          fetch(`https://619dc51f131c600017089034.mockapi.io/mobiles/${id}`,{
          method:"DELETE",
          })
          .then((data)=>data.json())
          .then(()=>getList())
          // .then((mvs)=>setMobileList(mvs))
  };
  const history=useHistory();


    return (
    <div className='mobile-list'>
      <h1>welcome to the mobile collections</h1>
      <div className="mobile-head">
      {list.map(({ name, poster, rating,id},index) => (
        <Mobile
          key={id}

          editButton={
            <ModeEditOutlineRoundedIcon  color="primary" onClick={()=>
              history.push(`/mobile/edit/${id}`)}>
            </ModeEditOutlineRoundedIcon>}

          deleteButton={
          <RemoveCircleRoundedIcon color="error" onClick={()=>
            deleteMobile(id)}>
          </RemoveCircleRoundedIcon>}
          
          id={id}
          name={name}
          poster={poster}
          rating={rating}/>
      ))}
      </div>
    </div>
  );
}
