import React from 'react'
import BasicSelect from './Select'
import SelectPrice from './SelectPrice'

const CatalogFilter = () => {
  return (
    <div className='filter'>
        <div className="filter__select">
            <BasicSelect/>
        </div>
        <div className="filter__select">
            <SelectPrice/>
        </div>
        <div className="filter__select">
            <BasicSelect/>
        </div>
        <div className="filter__select">
            <BasicSelect/>
        </div>
    </div>
  )
}

export default CatalogFilter