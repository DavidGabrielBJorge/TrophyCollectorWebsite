import { useState } from 'react'


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
          <div className='todo'>

            <div className="content">
              <p>{todo.nameGame}</p>
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>

            <div>
              <button>Complete</button>
              <button>Delete</button>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default App
