/*
*************************************************************************************************************
Inside App.jsx is all the program logic, from CRUD logic to search methods, and it also contains the structure of the web page component.
*************************************************************************************************************
*/
import { useState, useEffect  } from 'react'
import './App.css'
import TrophyList from './components/TrophyList'
import TrophyForm from './components/TrophyForm'
import TrophySearch from './components/TrophySearch'
import TrophyFilter from './components/TrophyFilter'
import TrophyChart from './components/TrophyChart'


function App() {

  //This code initializes the trophies state with the data saved in localStorage, if any. Otherwise, it starts with an empty array.
  const [trophys, setTrophys] = useState(() => {
    const savedTrophys = localStorage.getItem("trophys");// Search for the trophies saved in localStorage
    return savedTrophys ? JSON.parse(savedTrophys) : [];// If they exist, convert them from string to object. If not, return an empty array.
  });

  const [search, setSearch]=useState("");//Stores and updates the program's search status

  const [filter, setFilter]=useState("All");//sets the first value to "All",this way all the trophies appear when you start the application.
  const [sort, setSort] = useState("Asc");//Stores or updates the display order of the list. It can be "Asc" (ascending) or "Desc" (descending).

  useEffect(() => {
    localStorage.setItem("trophys", JSON.stringify(trophys));// Save the trophies as string in localStorage
  }, [trophys]);// Run whenever `trophys` changes


  //Function to add trophy
  const addTrophy = (nameGame, title, text,  category) =>{

    const currentDate = new Date();// Get the current date
    const formattedDate = currentDate.toLocaleDateString("pt-BR");// Format the date to "dd/mm/yyyy"

    const newTrophies=[...trophys,{
      id: Math.floor(Math.random()*10000),// Generate a random ID
      nameGame,
      title,
      text,
      category,
      isCompleted:false,
      createdAt: formattedDate,
    },
  ];
  setTrophys(newTrophies);// Update the state with the new trophy

  }

  //Function to remove trophy
  const removeTrophy =(id)=>{
    const newTrophies = [...trophys]
    const filteredTrophies = trophys.filter(trophy => trophy.id !== id);
    setTrophys(filteredTrophies);
  }

  //Function to decide whether the trophy is complete or not
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

  //Function to decide whether the trophy is complete or not
  const updateTrophy = (id, updatedTrophy) => {
    const updatedTrophies = trophys.map((trophy) =>
      trophy.id === id ? { ...trophy, ...updatedTrophy } : trophy
    );
    setTrophys(updatedTrophies);
    setEditingTrophy(null); 
  };
  
  
    

  return (
    <div className='app'>
      {/*Main page title*/}
      <h1>List of Trophies</h1>

      {/*Search component to filter trophies by game name.Passes the 'search' state and the 'setSearch' function as props.*/}
      <TrophySearch search={search} setSearch={setSearch}></TrophySearch>

      {/*Filter component to filter trophies by status and set the sort order.Passes the states and functions to manipulate the filters.*/}
      <TrophyFilter filter={filter} setFilter={setFilter} setSort={setSort}></TrophyFilter>
      
      {/*Container to display the list of trophies*/}
      <div className='trophy-list'>
        {trophys
          //Filters the trophies according to the selected status
          .filter((trophy)=> filter === "All" ? true : filter === "Completed" ? trophy.isCompleted : !trophy.isCompleted )
          //Filters trophies that contain the text entered in the search bar (ignores case)
          .filter((trophy)=>
            trophy.nameGame.toLowerCase().includes(search.toLowerCase())
          //Sort trophies in ascending or descending alphabetical order
          ).sort((a, b) => sort === "Asc" ? a.nameGame.localeCompare(b.nameGame) : b.nameGame.localeCompare(a.nameGame))
          //Maps the filtered and sorted trophies to render the TrophyList component
          .map((trophy) => (
          <TrophyList key ={trophy.id} trophy={trophy} removeTrophy={removeTrophy} completeTrophy={completeTrophy}  editTrophy={editTrophy} ></TrophyList>
        ))}

      </div>
      {/*Form to add or edit a trophy. Receives the add and update functions, in addition to the trophy that is being edited.*/}
      <TrophyForm addTrophy={addTrophy} updateTrophy={updateTrophy} editingTrophy={editingTrophy}></TrophyForm>
      {/*Graph representing trophy data*/}
      <TrophyChart trophies={trophys} />
    </div>
  )
}

export default App
