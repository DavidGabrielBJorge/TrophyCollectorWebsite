import React from 'react'
import { useState, useEffect } from 'react'

const TrophyForm = ({addTrophy, updateTrophy, editingTrophy}) => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    
    

    useEffect(() => {
        if (editingTrophy) {// If there is a trophy selected for editing...
            setName(editingTrophy.nameGame);// Fills the "nameGame" field
            setTitle(editingTrophy.title);
            setText(editingTrophy.text);
            setCategory(editingTrophy.category);
        }
    }, [editingTrophy]);// This effect is triggered whenever 'editingTrophy' changes

    const handleSubmit = (e) =>{
        e.preventDefault();//Prevents the page from reloading when submitting the form

        //Verify if every camp is occupy
        if(!name || !text ||  !category || !title){
            setShowModal(true);//Displays error modal
            return;
        }
        
        //If editing an existing trophy, refreshes it
        if (editingTrophy) {
            //Updates existing trophy
            updateTrophy(editingTrophy.id, { nameGame: name, title, text, category });
        } else {
            //Add a new trophy
            addTrophy(name, title, text, category);
        }

        //Clears the form fields after adding/editing
        setName("");
        setText("");
        setCategory("");
        setTitle("");

        //Display success notification
        setShowSuccess(true);

        //After 4 seconds it starts to fade away
        setTimeout(() => {
            setShowSuccess(false);
        }, 4000);
        

    }

    const ErrorModal = () => (
        <div className="modal">
            <div className="modal-content">
                <p>Please fill in all fields before continuing.</p>
                <button className="modal-button" onClick={() => setShowModal(false)}>Close</button>
            </div>
        </div>
    );
    
  return (
    <div className='trophy-form'>
        <h2>{editingTrophy ? "Edit Trophy" : "Create Trophy"}</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter the name of the game" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="text" placeholder="Enter the title of the trophy" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input type="text" placeholder="Enter the details of the trophy" value={text} onChange={(e) => setText(e.target.value)}></input>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a category</option>
                <option value="Collectible">Collectibles</option>
                <option value="Boss">Boss</option>
                <option value="Item">Item</option>
            </select>
            <button type='submit'>{editingTrophy ? "Update Task" : "Create Task"}</button>
            {/*It dynamically changes the button text based on the existence of editingTrophy:

            If editingTrophy exists: The button displays "Update Task".
            If editingTrophy is null or undefined: The button displays "Create Task". */}
        </form>

        {showModal && <ErrorModal />}

        {showSuccess && (
                <div className="success-notification">
                    <i className="bi bi-check-circle-fill"></i> Trophy created successfully!
                </div>
        )}
        

    </div>
  )
}

export default TrophyForm