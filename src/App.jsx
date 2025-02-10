import { useState } from 'react'
import './App.css'
import TrophyList from './components/TrophyList'
import TrophyForm from './components/TrophyForm'
import TrophySearch from './components/TrophySearch'


function App() {
  const [trophys, setTrophys] = useState([
    {
      id: 1,
      nameGame:"Game 1",
      text:"Test Text 1",
      category:"Category 1",
      isCompleted: false,
      createdAt: "01/01/2025"
    },
    {
      id: 2,
      nameGame:"Game 2",
      text:"Test Text 2",
      category:"Category 2",
      isCompleted: false,
      createdAt: "01/01/2025"
    },
    {
      id: 3,
      nameGame:"Game 3",
      text:"Test Text 3",
      category:"Category 3",
      isCompleted: false,
      createdAt: "01/01/2025"
    },
  ])

  const [search, setSearch]=useState("");

  const addTrophy = (nameGame, text, category) =>{

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("pt-BR");

    const newTrophies=[...trophys,{
      id: Math.floor(Math.random()*10000),
      nameGame,
      text,
      category,
      isCompleted:false,
      createdAt: formattedDate,
    },
  ];
  setTrophys(newTrophies);

  }

  const removeTrophy =(id)=>{
    const newTrophies = [...trophys]
    const filteredTrophies = trophys.filter(trophy => trophy.id !== id);
    setTrophys(filteredTrophies);
  }

  const completeTrophy =(id)=>{
    const newTrophies = [...trophys]//Creates a copy of the current array of trophies
    newTrophies.map((trophy) => trophy.id === id ? trophy.isCompleted = !trophy.isCompleted : trophy)
    /*
    For each "trophy", checks if the trophy's id is equal to the one passed as an argument.
    If so, inverts the value of isCompleted using !trophy.isCompleted.
    Otherwise, just returns the trophy unchanged.
    */
    setTrophys(newTrophies)//Updates the state with the new list
  }
    

  return (
    <div className='app'>
      <h1>List of Trophies</h1>
      <TrophySearch search={search} setSearch={setSearch}></TrophySearch>
      <div className='trophy-list'>
        {trophys.filter((trophy)=>
            trophy.nameGame.toLowerCase().includes(search.toLowerCase())
          ).map((trophy) => (
          <TrophyList key ={trophy.id} trophy={trophy} removeTrophy={removeTrophy} completeTrophy={completeTrophy}></TrophyList>
        ))}

      </div>
      <TrophyForm addTrophy={addTrophy}></TrophyForm>
    </div>
  )
}

export default App
