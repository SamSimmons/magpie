import React from 'react'
import Logo from './logo.svg'
import Filter from '../Filter'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <Link to='/'>
        <Logo className='sidebar__logo' />
      </Link>
      <div className='divider' />
      <Filter />
    </div>
  )
}

export default Sidebar
