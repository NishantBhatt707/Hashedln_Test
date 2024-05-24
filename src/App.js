import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import StopWatch from './StopWatch';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const list =['Mango','Apple','banana','Apricot','Grapes','Guava','Kiwi']
  const handleSearch=(e)=>{
    setItemFound([])
    const searchValue=e.target.value
    console.log(e.target.value)
    list.map((item)=>{
      if(item.toUpperCase().startsWith(searchValue.toUpperCase())){
        console.log("items found",item)
        setItemFound((prev)=>[...prev,item])
      }
      
    })
      
  }
  const [itemFound,setItemFound]=useState(list)
  return (
 <>
    <div className="App m-5 p-3"> 
      <div className='search p-3'>
        <label className='heading mb-3'>Search Fruits</label>
      <input className='mx-3' onChange={(e)=>handleSearch(e)}></input>
      <div className='displayItems'>

        {itemFound.length ?
        <div className='sub-heading my-3'>
            Total Fruits found are {itemFound.length}
        {
        itemFound.map((item,key)=>{
          return(
            <>
            <ul className='items mt-2'>
              <li>
              {item}
              </li>
            </ul>
            </>

          )
        })}
        </div> :
        <div className='items'> Try searching with another keyword</div>
        }
      </div>
      </div>
    <StopWatch/>

    </div>
    </>
  );
}

export default App;
