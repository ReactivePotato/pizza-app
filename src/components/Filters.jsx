import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Filters.scss'

const Filters = () => {
  return (
    <div className='filters'>
      
      <Link to="#"><div className='filter-button'>фильтр 1</div></Link>
      <Link to="#"><div className='filter-button'>фильтр 2</div></Link>
      <Link to="#"><div className='filter-button'>фильтр 3</div></Link>
      <Link to="#"><div className='filter-button'>фильтр 4</div></Link>
    </div>
  )
}

export default Filters