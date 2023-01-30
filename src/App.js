
import { useState } from 'react';
import './App.scss';
import Header from './component/Header'
import RecipeList from './component/RecipeList'
import Tabs from './component/Tabs'

function App() {
  const[loader,setLoader]=useState(true)
  return (
    <div className="main">
     
      <Header />
      <Tabs setLoader={setLoader}/>
      <RecipeList setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>
        }
    </div>
  );
}

export default App;
