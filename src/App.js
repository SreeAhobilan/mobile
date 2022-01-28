import './App.css';
import { Mobilelist } from './Mobilelist';
import{useState,useEffect} from "react";
import {Switch,Route} from "react-router-dom";
import { AddMobiles } from './AddMobiles';
import { NotFound } from './NotFound';
import { MobileDetails } from './MobileDetails';
import { AppBar, Toolbar } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { EditMobile } from './EditMobile';
import 'animate.css';

export default 
function App(){
  const [mode,setMode]=useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

//   const INITIAL_MOBILES=[
//     {
//     "name": "Iphone 13",
//     "trailer": "https://www.youtube.com/embed/xneM6b83KCA",
//     "poster": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
//     "rating":"10",
//     "id": "1"
//     },
//     {
//     "name": "Samsung S21",
//     "trailer": "https://www.youtube.com/embed/VYLzOakff2g",
//     "poster": "https://images.samsung.com/levant/smartphones/galaxy-s21/buy/s21_family_kv_mo_img.jpg",
//     "rating":"8",
//     "id": "2"
//     },
//     {
//     "name": "OnePlus 9T",
//     "trailer": "https://www.youtube.com/embed/vYQEUhkkJTE",
//     "poster": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
//     "rating":"7",
//     "id": "3"
//     },
//     {
//     "name": "Moto Razr",
//     "trailer": "https://www.youtube.com/embed/p4TMq6Rqiog",
//     "poster": "https://rukminim1.flixcart.com/image/416/416/k7nnrm80/mobile/c/q/y/motorola-razr-paht001-0in-original-imafpufaqywyygyk.jpeg?q=70",
//     "rating":"8",
//     "id": "4"
//     },
//     {
//     "name": "Iphone 11",
//     "trailer": "https://www.youtube.com/embed/ww3hnETvzLM",
//     "poster": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022219953",
//     "rating":"10",
//     "id": "5"
//     },
//     {
//     "name": "Redmi 12",
//     "trailer": "https://www.youtube.com/embed/TBd4mgvSoLc",
//     "poster": "https://specifications-pro.com/wp-content/uploads/2021/11/Xiaomi-Redmi-Note-12-600x600.jpg",
//     "rating":"9",
//     "id": "6"
//     },
//     {
//     "name": "Iphone SE",
//     "trailer": "https://www.youtube.com/embed/SQIbeAk-bFA",
//     "poster": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-family-select-2020?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1586794486444",
//     "rating":"6",
//     "id": "7"
//     }
// ];
const [mobileList,setMobileList]=useState([]);
const history=useHistory();

// useEffect(()=>{
//   fetch("https://619dc51f131c600017089034.mockapi.io/mobiles",{
//     method:"GET"
//   })
//   .then((data)=>data.json())
//   .then((mvs)=>setMobileList(mvs))
// },[]);

return(
    <ThemeProvider theme={theme}>
      <Paper sx={{minHeight:"100vh"}} elevation={0} >
          <div className='App'>
      
      <AppBar position="static">
          <Toolbar>
              <Button color='inherit' onClick={()=>history.push("/")}>Home</Button>
              <Button color='inherit' onClick={()=>history.push("/mobile")}>Mobiles</Button>
              <Button color='inherit' onClick={()=>history.push("/mobile/add")}>Add Mobiles</Button>
              <Button
              style={{marginLeft:"auto"}}
              startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} 
              color='inherit' 
              onClick={()=>setMode(mode==="light"?"dark":"light")}>
                {mode==="light"?"dark":"light"}Theme
              </Button>
          </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/mobile">
        <Mobilelist/>
      </Route>
      <Route exact path="/mobile/add">
        <AddMobiles/>
        </Route>
        <Route exact path="/mobile/:id">
        <MobileDetails/>
      </Route>
      <Route exact path="/mobile/edit/:id">
        <EditMobile/>
      </Route>
        <Route exact path="**">
          <NotFound/>
        </Route>
      </Switch>
          </div>
        </Paper>
    </ThemeProvider>
  );
}


function Home(){
  return (
      <div className='home'>
        <h1 className='home-text'>Your Ultimate Phone Destination</h1>
      </div>
    )
}
