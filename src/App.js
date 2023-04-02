
import './App.css';
import Formcreatepost from './component/Formcreatepost';
import Header from './component/Header';
import Postcard1 from './component/Postcard1';
import Post from './component/Post';

function App() {

  return (

    <div className="App">
    <Header/>
    <Postcard1 />
    <Formcreatepost />
    <Post/>
    <Formcreatepost />  

    </div>
  );
}

export default App;
