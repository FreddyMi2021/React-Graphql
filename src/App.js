import './App.css';
import {ApolloProvider} from '@apollo/client';
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import client from './services/Client';
import Main from './Main';

function App() {
  let admin = JSON.parse(localStorage.getItem('currentAdmin'));
  if(admin){
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navbar/>
          <Switch>
              <Main/>         
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
  return(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
            <Main/>         
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
