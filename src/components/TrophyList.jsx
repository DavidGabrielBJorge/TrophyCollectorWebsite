import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const TrophyList = ({trophy, removeTrophy, completeTrophy, editTrophy}) => {
  return (
    <div className='trophy' style={{textDecoration: trophy.isCompleted ? "line-through":""}}>

      <div className="content">
        <p> <i className={trophy.isCompleted ? "bi bi-award-fill" : "bi bi-award"}></i> {trophy.nameGame}</p>
        {/*If trophy.isCompleted is true than use "bi bi-award-fill" (filled icon). If trophy.isCompleted is false than use "bi bi-award" (empty icon).*/}
        <p>{trophy.title}</p>
        <p className="category"><i className="bi bi-caret-right-fill"></i>{trophy.category}</p>
        <p className='trophy-text'>{trophy.text}</p>
      
        <div className="trophy-created-date">{trophy.createdAt}</div>
      </div>

      <div className='option-button'>
        <button className='complete' onClick={()=>completeTrophy(trophy.id)}><i className="bi bi-check-lg"></i></button>
        <button className='edit' onClick={() => editTrophy(trophy)}><i className="bi bi-pencil-fill"></i></button>
        <button className='remove' onClick={()=>removeTrophy(trophy.id)}><i className="bi bi-trash3-fill"></i></button>
      </div>

    </div>
  )
}

export default TrophyList