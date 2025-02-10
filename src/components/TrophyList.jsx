import React from 'react'

const TrophyList = ({trophy, removeTrophy, completeTrophy}) => {
  return (
    <div className='trophy' style={{textDecoration: trophy.isCompleted ? "line-through":""}}>

    <div className="content">
      <p>{trophy.nameGame}</p>
      <p>{trophy.text}</p>
      <p className="category">({trophy.category})</p>
    </div>

    <div>
      <button className='complete' onClick={()=>completeTrophy(trophy.id)}>Complete</button>
      <button className='remove' onClick={()=>removeTrophy(trophy.id)}>Delete</button>
    </div>

  </div>
  )
}

export default TrophyList