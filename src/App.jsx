import { useState, useEffect  } from 'react'
import './App.css'
import TrophyList from './components/TrophyList'
import TrophyForm from './components/TrophyForm'
import TrophySearch from './components/TrophySearch'
import TrophyFilter from './components/TrophyFilter'
import TrophyChart from './components/TrophyChart'


function App() {


  const [trophys, setTrophys] = useState(() => {
    const savedTrophys = localStorage.getItem("trophys");
    return savedTrophys ? JSON.parse(savedTrophys) : [];
  });

  const [search, setSearch]=useState("");

  const [filter, setFilter]=useState("All");
  const [sort, setSort] = useState("Asc");

  useEffect(() => {
    localStorage.setItem("trophys", JSON.stringify(trophys));
  }, [trophys]);


  const addTrophy = (nameGame, title, text,  category) =>{

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("pt-BR");

    const newTrophies=[...trophys,{
      id: Math.floor(Math.random()*10000),
      nameGame,
      title,
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
    const newTrophies = [...trophys]
    newTrophies.map((trophy) => trophy.id === id ? trophy.isCompleted = !trophy.isCompleted : trophy)

    setTrophys(newTrophies)
  }

  const [editingTrophy, setEditingTrophy] = useState(null);

  const editTrophy = (trophy) => {
    setEditingTrophy(trophy);
  };

  const updateTrophy = (id, updatedTrophy) => {
    const updatedTrophies = trophys.map((trophy) =>
      trophy.id === id ? { ...trophy, ...updatedTrophy } : trophy
    );
    setTrophys(updatedTrophies);
    setEditingTrophy(null); 
  };

  return (
    <div className='app'>
      <h1>List of Trophies</h1>

      <TrophySearch search={search} setSearch={setSearch}></TrophySearch>

      <TrophyFilter filter={filter} setFilter={setFilter} setSort={setSort}></TrophyFilter>
      
      <div className='trophy-list'>
        {trophys
          .filter((trophy)=> filter === "All" ? true : filter === "Completed" ? trophy.isCompleted : !trophy.isCompleted )
          .filter((trophy)=>
            trophy.nameGame.toLowerCase().includes(search.toLowerCase())
          ).sort((a, b) => sort === "Asc" ? a.nameGame.localeCompare(b.nameGame) : b.nameGame.localeCompare(a.nameGame))
          .map((trophy) => (
          <TrophyList key ={trophy.id} trophy={trophy} removeTrophy={removeTrophy} completeTrophy={completeTrophy}  editTrophy={editTrophy} ></TrophyList>
        ))}

      </div>
      <TrophyForm addTrophy={addTrophy} updateTrophy={updateTrophy} editingTrophy={editingTrophy}></TrophyForm>
      <TrophyChart trophies={trophys} />
    </div>
  )
}

export default App
