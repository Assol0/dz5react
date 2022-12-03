import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/Context'

const SideBaritem = ({text, value}) => {
    const {category, changeCategory} = useContext(CustomContext)
  return (
    <li onClick={() => changeCategory(value)} className={`sideBar__menu-item ${category === text ? 'active' : ''}`}>{text}</li>     
  )
}

export default SideBaritem