import { useState } from 'react'
import './App.css'
import TrophyList from './components/TrophyList'
import TrophyForm from './components/TrophyForm'


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      nameGame:"Game 1",
      text:"Test Text 1",
      category:"Category 1",
      isCompleted: false
    },
    {
      id: 2,
      nameGame:"Game 2",
      text:"Test Text 2",
      category:"Category 2",
      isCompleted: false
    },
    {
      id: 3,
      nameGame:"Game 3",
      text:"Test Text 3",
      category:"Category 3",
      isCompleted: false
    },
  ])

  return (
    <div className='app'>
      <h1>List of Trophies</h1>
      <div className='trophy-list'>
        {todos.map((todo) => (
          <TrophyList todo={todo}></TrophyList>
        ))}

      </div>
      <TrophyForm></TrophyForm>
    </div>
  )
}

export default App
