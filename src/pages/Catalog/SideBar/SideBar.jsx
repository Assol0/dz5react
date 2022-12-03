import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/Context'
import SideBaritem from '../SideBaritem/SideBaritem'

const SideBar = () => {

  const {gender, changeGender} = useContext(CustomContext)
  return (
    <aside className='sideBar'>
        <div className="sideBar__lang">
            <p onClick={() => changeGender('women') } className={`sideBar__lang-item ${gender === 'women' ? 'active' : ''}`}>Женщины</p>
            <p onClick={() => changeGender('men') } className={`sideBar__lang-item ${gender === 'men' ? 'active' : ''}`}>Мужчины</p>
        </div>
        <ul className='sideBar__menu'>
          <SideBaritem value={'t-short'} text='Футболки'/>
          <SideBaritem value={'sweatshort'} text='Кофты'/>
          <SideBaritem value={'pants'} text='Штаны'/>
          <SideBaritem value={'shoes'} text='Обувь'/>
        </ul>
    </aside>
  )
}

export default SideBar