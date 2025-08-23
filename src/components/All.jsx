import React from 'react';
import { Link } from 'react-router-dom';
import { UseCutOff } from '../Context/StateContext';
import Card from './Card';
import './card.css';

const All = () => {
  const { data,setData } = UseCutOff();

  const handleDelete = (id) => {
    // Filter out the item with the matching 'num' (unique ID)
    const updatedData = data.filter(item => item.num !== id);
    setData(updatedData); // Update the state with the new filtered list
    localStorage.setItem("todos", JSON.stringify(updatedData)); // Update the data in localStorage
  };
  return (
    <div className='container' >
      <div className='nav'>
      <div className='title'>
      <h1>Students-Profile</h1>
      </div>
      <div className='link-tags'>
      {/* Links to the different courses */}
      <Link to="/Ece" className='link'>Ece</Link>
      <Link to="/Mech" className='link'>Mech</Link>
      <Link to="/Eee" className='link'>Eee</Link>
      <Link to="/Civil" className='link'>Civil</Link>
      <Link to="/Csc" className='link'>Csc</Link>
      </div>
      </div>
      <div className='all-container'>
      <div className="first">
        {data.map((item, index) => (
          <Card key={item.num || index} item={item}  onDelete={handleDelete}/>
        ))}
      </div>
      </div>
    </div>
    
  );
};

export default All;
