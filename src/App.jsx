import { useState, useEffect  } from 'react'
import './App.css'
import TrophyList from './components/TrophyList'
import TrophyForm from './components/TrophyForm'
import TrophySearch from './components/TrophySearch'
import TrophyFilter from './components/TrophyFilter'
import TrophyChart from './components/TrophyChart'


function App() {

  const [trophys, setTrophys] = useState(() => {
    const savedTrophys = localStorage.getItem("trophys");// Search for the trophies saved in localStorage
    return savedTrophys ? JSON.parse(savedTrophys) : [];// If they exist, convert them from string to object. If not, return an empty array.
  });

  const [search, setSearch]=useState("");

  const [filter, setFilter]=useState("All");//sets the first value to "All",this way all the trophies appear when you start the application.
  const [sort, setSort] = useState("Asc");

  useEffect(() => {
    localStorage.setItem("trophys", JSON.stringify(trophys));// Save the trophies as string in localStorage
  }, [trophys]);// Run whenever `trophys` changes


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
    const newTrophies = [...trophys]//Creates a copy of the current array of trophies
    newTrophies.map((trophy) => trophy.id === id ? trophy.isCompleted = !trophy.isCompleted : trophy)
    /*
    For each "trophy", checks if the trophy's id is equal to the one passed as an argument.
    If so, inverts the value of isCompleted using !trophy.isCompleted.
    Otherwise, just returns the trophy unchanged.
    */
    setTrophys(newTrophies)//Updates the state with the new list
  }

  //Add the editingTrophy state to store the trophy being edited:
  const [editingTrophy, setEditingTrophy] = useState(null);

  //editTrophy function to define which trophy is being edited:
  const editTrophy = (trophy) => {
    setEditingTrophy(trophy);
  };

  const updateTrophy = (id, updatedTrophy) => {
    const updatedTrophies = trophys.map((trophy) =>
      trophy.id === id ? { ...trophy, ...updatedTrophy } : trophy
    );
    setTrophys(updatedTrophies);
    setEditingTrophy(null); // Sai do modo de edição
  };
  
  
    

  return (
    <div className='app'>
      <h1>List of Trophies</h1>
      <TrophySearch search={search} setSearch={setSearch}></TrophySearch>
      <TrophyFilter filter={filter} setFilter={setFilter} setSort={setSort}></TrophyFilter>
      <div className='trophy-list'>
        {trophys
          .filter((trophy)=> filter === "All" ? true : filter === "Completed" ? trophy.isCompleted : !trophy.isCompleted)
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
