import {  Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Database from './Pages/Database/Database'
import LanguagePro from './Pages/LanguagePro/LanguagePro';
import Framework from './Pages/Framework/Framework';
import Environnement from './Pages/Environnement/Environnement';
import Dependance from './Pages/Dependance/Dependance';
import { ProductOwner } from './Pages/ProductOwner/ProductOwner';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import PrivateRoute from './Auth/PrivateRoute';
import ContaintManagmentSystem from './Pages/ContaintManagmentSystem/ContaintManagmentSystem';

function Main() {
    let admin = JSON.parse(localStorage.getItem('currentAdmin'));
    return (
          
        <div className="ml-16 px-4 z-0">
            <PrivateRoute exact path='/' component={Dashboard}/>
            <PrivateRoute exact path='/language_programmation' component={LanguagePro}/>
            <PrivateRoute exact path='/database' component={Database}/>
            <PrivateRoute exact path='/framework' component={Framework}/>
            <PrivateRoute exact path='/environment' component={Environnement}/>
            <PrivateRoute exact path='/dependance' component={Dependance}/>
            <PrivateRoute exact path='/product_owner' component={ProductOwner}/>
            <PrivateRoute exact path='/cms' component={ContaintManagmentSystem}/>
            {
            admin ? '' : <Route exact path='/login_page' component={LoginPage} />
            }
            
        </div>
          
    );
}

export default Main;
