import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBug } from '@fortawesome/free-solid-svg-icons'
import './codeAndBug.css'

function CodeAndBugReport() {
  return (
    <div className='w-100 d-flex gap-3 mb-5'>
        <a id="github" className='w-50 card shadow-lg text-center width-auto py-5' href='https://github.com/BMohamedd?tab=repositories' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faCode}  size='2x'/>  
            <h3>View source code</h3>      
        </a>
        <a id='bugFix' className='w-50 card shadow-lg text-center width-auto py-5' href='https://forms.gle/sDPYw1aJqjJ6U1zr5' target='_blank' rel="noreferrer">
        <FontAwesomeIcon icon={faBug}  size='2x'/> 
        <h3>Report a bug</h3>
        </a>

    </div>
  )
}

export default CodeAndBugReport