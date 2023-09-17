import React from 'react'

const Email = ({email}) => {
  return (
    <div id='email'>
        <h3>Email:<a href={email}>{email}</a></h3>
    </div>
  )
}

export default Email