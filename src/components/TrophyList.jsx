import React from 'react'

const TrophyList = ({trophy, removeTrophy}) => {
  return (
    <div className='trophy'>

    <div className="content">
      <p>{trophy.nameGame}</p>
      <p>{trophy.text}</p>
      <p className="category">({trophy.category})</p>
    </div>

    <div>
      <button className='complete'>Complete</button>
      <button className='remove' onClick={()=>removeTrophy(trophy.id)}>Delete</button>
    </div>

  </div>
  )
}

export default TrophyList