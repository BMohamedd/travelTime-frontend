import React from 'react'

function Error({msg}) {
  return (
    <div className=' h-100 d-flex justify-content-center align-items-center flex-column text-center'>
        <div className='alert alert-danger' role="alert">{msg}</div>
    </div>
  )
}

export default Error