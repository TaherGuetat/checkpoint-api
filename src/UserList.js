import React, { useEffect, useState } from 'react'
import axios from "axios"
import UserCard from './UserCard';
const UserList = () => {
    const [data, setData] = useState([]);
    const getData=async()=>{
        const{data}=await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setData(data);
    };
    useEffect(() => {
      getData();
    
    }, [])
    
  return (
    <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around'}}>
    {
     data.map(
         (el)=><UserCard el={el} key={el.id}/>
     )
    }
 </div>
  )
}

export default UserList