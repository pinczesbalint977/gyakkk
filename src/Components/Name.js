import React from 'react'

const Name = ({name,username}) => {
  return (
    <div id='name'>
        <h2>Név:{name}</h2>
        <h3>Felhasználónév:{username}</h3>
    </div>
  )
}

export default Name