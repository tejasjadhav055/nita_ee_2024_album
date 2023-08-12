import React,{useEffect, useState} from 'react'
import './Main.css';
import Player from './Player';


const Main = () => {
  

  const [datas, setData]=useState([{
    fullName: '',
    enrollmentNo: '',
    link: ''
  }])
 
  useEffect(() =>{
    fetch("https://nita-ee2024-album-backend.onrender.com/app/link").then(res=>{
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes=>setData(jsonRes))
  })
  datas.reverse()
  
   return (
    <div id='main'>
      <din id="main__images">
     {
      datas.map(data =>
        <div id="main__images__image">
        <img src={"https://drive.google.com/uc?export=view&id="+data.link.substring(32,65)} alt="image" />
        {/* <small>Contributed by {data.enrollmentNo}_{data.fullName} on {data.date}</small> */}
        </div>
      )}
        
        
      </din>
      <div id="main__player">
        <Player></Player>
      </div>
    </div>
  )
}

export default Main
