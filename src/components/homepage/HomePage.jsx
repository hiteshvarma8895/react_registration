
import React from 'react';
import './homepage.scss';

function HomePage() {
  
  return (
    <>
    <div className='homepage-container'>
      <div className='left-container'>
        <h1 className='text'>Buy, trade cryptocurrencies on Cosmic Trades</h1>
      
        <div className='search-box'>
        <input className='search' type="text" placeholder="currencies"></input>
        <button className='button' >Search</button>
        </div>
     
      </div>
    </div>

    </>
    
  )
}

export default HomePage