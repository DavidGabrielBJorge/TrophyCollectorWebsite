import React from 'react'
import { useState } from 'react'

const TrophyForm = ({addTrophy}) => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        //Verify if every camp is occupy
        if(!name || !text ||  !category){
            setShowModal(true);
            return;
        }
        else{
            addTrophy(name, text, category);
            setName("");
            setText("");
            setCategory("");

            setShowSuccess(true);//Display success notification

            //After 4 seconds it starts to fade away
            setTimeout(() => {
                setShowSuccess(false);
            }, 4000);
        }

    }

    const ErrorModal = () => (
        <div className="modal">
            <div className="modal-content">
                <p>Preencha todos os campos antes de continuar.</p>
                <button className="modal-button" onClick={() => setShowModal(false)}>Fechar</button>
            </div>
        </div>
    );
    
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