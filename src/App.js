
import './App.css';
import Formcreatepost from './component/Formcreatepost';
import Header from './component/Header';
import Post from './component/Post';

function App() {

  return (

    <div className="App">
    <Header/>
    <Formcreatepost />
    <Post/>
    <Formcreatepost />  

    </div>
  );
}

export default App;
