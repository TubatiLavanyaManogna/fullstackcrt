import logo from './logo.svg';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import axios from "axios";
import { useEffect,useState } from 'react';
import Post from './Components/Post';

function App() {
  let [data,setData] =useState("my application")
  let[name,setName]=useState(null)


const fetchData =async() =>{
  const response =await axios.get('https://jsonplaceholder.typicode.com/users');
  setData(response.data);
}
useEffect(()=>{
  fetchData();
},[])

  return (
     //{JSON.stringify(data)}
    <div className="App">
      <Post userId={"123"} id={"id"} title={"title"} body={"body"}/>
      {
        data.localeCompare((post,index)=>
        {
            return <Post userId={post.userId} id={post.id} title={post.title} body={post.body}/>
        }
        )
      }
    </div>
  );
  
}

export default App;
