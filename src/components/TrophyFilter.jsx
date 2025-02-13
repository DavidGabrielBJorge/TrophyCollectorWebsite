import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const TrophyFilter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filter:</h2>
        <div className='filter-options'>
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>   
            <div>
                <p>Alphabetical Order</p>
                <button onClick={() => setSort("Asc")}><i className="bi bi-sort-alpha-down"></i></button>
                <button onClick={() => setSort("Desc")}><i className="bi bi-sort-alpha-down-alt"></i></button>
            </div>
        </div>    
    </div>
  )
}

export default TrophyFilter