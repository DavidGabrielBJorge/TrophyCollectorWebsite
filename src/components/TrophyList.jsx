import React from 'react'

const TrophyList = ({todo}) => {
  return (
    <div className='todo'>

    <div className="content">
      <p>{todo.nameGame}</p>
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>

    <div>
      <button className='complete'>Complete</button>
      <button className='remove'>Delete</button>
    </div>

  </div>
  )
}

export default TrophyList