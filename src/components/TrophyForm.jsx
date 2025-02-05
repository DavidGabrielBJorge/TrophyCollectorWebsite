import React from 'react'
import { useState } from 'react'

const TrophyForm = ({addTrophy}) => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Verify if every camp is occupy
        if(!name || !text ||  !category){
            console.log("one of the fields are empty ")
            return;
        }
        else{
            console.log(name, text, category);
        }
        addTrophy(name, text, category);
        setName("");
        setText("");
        setCategory("");
    }
  return (
    <div className='trophy-form'>
        <h2>Criar tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter the name of the game" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="Enter the details of the game" value={text} onChange={(e) => setText(e.target.value)}></input>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
            </select>
            <button type='submit'>Create Task</button>
        </form>
        

    </div>
  )
}

export default TrophyForm