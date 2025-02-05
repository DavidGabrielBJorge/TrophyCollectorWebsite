import { useState } from 'react'
import './App.css'
import TrophyList from './components/TrophyList'
import TrophyForm from './components/TrophyForm'


function App() {
  const [trophys, setTrophys] = useState([
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

  const addTrophy = (nameGame, text, category) =>{
    const newTrophies=[...trophys,{
      id: Math.floor(Math.random()*10000),
      nameGame,
      text,
      category,
      isCompleted:false,
    },
  ];
  setTrophys(newTrophies);

  }

  const removeTrophy =(id)=>{
    const newTrophies = [...trophys]
    const filteredTrophies = trophys.filter(trophy => trophy.id !== id);
    setTrophys(filteredTrophies);
  }
    

  return (
    <div className='app'>
      <h1>List of Trophies</h1>
      <div className='trophy-list'>
        {trophys.map((trophy) => (
          <TrophyList key ={trophy.id} trophy={trophy} removeTrophy={removeTrophy}></TrophyList>
        ))}

      </div>
      <TrophyForm addTrophy={addTrophy}></TrophyForm>
    </div>
  )
}

export default App
