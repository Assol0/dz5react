import React from 'react'
import { useState } from 'react'

const Question = () => {

    const [status, setStatus] = useState(false)
  return (
    <div className="question">
        <div className="container">
            <h2 className='question__title'>Популярные вопросы</h2>
            <div className="question__purchases">
                <p className='question__p'>ПОКУПКИ</p>
            </div>
            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer ${status ? 'question__client-answer_active' : ''}`}>
                    Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.
                    Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.
            </div>
            </div>
            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer ${status ? 'question__client-answer_active' : ''}`}>
                    Сколько будет стоить доставка в другой город
            </div>
            </div>
            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer ${status ? 'question__client-answer_active' : ''}`}>
                    Акция длилась до 29 ноября , а вы приобрели товар на следующий день
            </div>
            </div>
            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer ${status ? 'question__client-answer_active' : ''}`}>
                    Подождите некоторое время
            </div>
            </div>
            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer ${status ? 'question__client-answer_active' : ''}`}>
                    Советуем не оплачивать покупки со сторонних сайтов
            </div>
            </div>




            
            <p className='question__refund'>ВОЗВРАТ И ОБМЕН</p>

            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer ${status ? 'question__client-answer_active' : ''}`}>
                    Доставка работает...
            </div>
            </div>
            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer ${status ? 'question__client-answer_active' : ''}`}>
                Подождите еще немного и ваш заказ к вам точно должен приехать
            </div>
            </div>
            <div  className='question__client'>
            <div className={`question__client-quest ${status ? 'question__client-quest_active' : ''}`}>
                <p className='question__client-h2'>Вопрос от покупателя</p>

                <div className='question__client-arrow'>

                    {
                        status
                        ? <span onClick={() => setStatus(false)} className='question__client-close'>
                            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1L10 1" stroke="#0F303F"/></svg>
                        </span>
                        : <span onClick={() => setStatus(true)}  className='question__client-open'>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.875 8.12305H8.125V11.873H6.875V8.12305H3.125V6.87305H6.875V3.12305H8.125V6.87305H11.875V8.12305Z" fill="#0F303F"/></svg>
                        </span>}
              

                </div>
        
            </div>
            <div className={`question__client-answer${status ? 'question__client-answer_active' : ''}`}>
                    Я не смогла придумать ответ ._.
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Question