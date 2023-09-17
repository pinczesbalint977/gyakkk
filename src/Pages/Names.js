import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Name from '../Components/Name'


const Names = () => {

  const [names,setNames] = useState([]);

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setNames(res.data))
    .catch(err => console.log(err))

  },[])

  return (
    <div>

      {
        names.map((name,idx) => {
          return <Name key={idx} username={name.username} name={name.name}/>
        })
      }
    </div>
  )
}

export default Names