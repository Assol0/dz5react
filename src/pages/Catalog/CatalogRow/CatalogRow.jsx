import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomContext } from '../../../utils/Context'

const CatalogRow = () => {
    const {i, i18n} = useTranslation()

    const {products} = useContext(CustomContext)
  return (
    <div className='catalog__row'>
        {
            products.data.map((item) =>(
            <div className="catalog__card">
                <img className='catalog__card-img' src={`../${item.img}`} alt={item.title} />
                <h3 className='catalog__card-title'>{item.title}</h3>
                <p className='catalog__card-category'>{item.category}</p>
                <p className='catalog__card-brand'>{item.brand}</p>
                <p className='catalog__card-price'>
                    {i18n.language === 'en' ? item.price : item.price * 84 }
                    {i18n.language === 'ru' ? 'руб.' : '$'}
                </p>
            </div>
            ))
        }
    </div>
  )
}

export default CatalogRow