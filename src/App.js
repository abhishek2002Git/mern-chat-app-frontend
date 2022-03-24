import './App.css';
import {Button} from "@chakra-ui/react"
import {Route} from"react-router-dom"
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className='App'>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/chats" component={ChatPage}/>
    </div>
  );
}

export default App;
