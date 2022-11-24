import React, { useEffect, useState } from 'react'
import axios from "axios"
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
    <div>{JSON.stringify(data)}</div>
  )
}

export default UserList