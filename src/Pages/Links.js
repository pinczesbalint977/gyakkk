import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Email from '../Components/Email'

const Links = () => {

    const [link,setLink] = useState([]);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then (res => setLink(res.data))

        

    },[])

  return (
    <div>
        <h1>Linkek</h1>

        {
            link.map((links,idx) => {
                return <Email key={idx} email={links.email}/>
            })
        }
    </div>
  )
}

export default Links