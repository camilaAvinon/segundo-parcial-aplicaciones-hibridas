import React from 'react'
import { Link } from 'react-router-dom';
const Form_delete = () => {
  return (
    <div>
        <form action="">
            <button type='submit'>Borrar posteo</button>
            <Link to={`/panel_posts`}  className='text-xl text-tertiary'>Back</Link>
        </form>
    </div>
  )
}

export default Form_delete