import React from 'react'

const TrophyForm = () => {
  return (
    <div className='trophy-form'>
        <h2>Criar tarefa</h2>
        <form>
            <input type="text" placeholder="Enter the name of the game"></input>
            <input type="text" placeholder="Enter the details of the game"></input>
        </form>
        <select>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
        </select>
        <button type='submit'>Create Task</button>

    </div>
  )
}

export default TrophyForm