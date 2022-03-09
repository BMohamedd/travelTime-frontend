import React from 'react'
import gif from "../../assets/loading.gif"

function Loading() {
  return (
        <div className=' h-100 d-flex justify-content-center align-items-center flex-column text-center'>
            <img src={gif} alt="LOADING..." />
        </div>
  )
}

export default Loading