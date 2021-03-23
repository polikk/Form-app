import React,{useState} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Header from '../components/Header';

const AppRouter = () =>{ 

    const [user,setUser] = useState({});
    const updateUser = (data) => {
        setUser((prevUser) => {
            return {
              ...prevUser,
              ...data
            };
          });
      };
      
      const resetUser = () => {
        setUser({});
      };
    
    return(
        <BrowserRouter>
            <div className='container'>
                <Header/>
                <Switch>
                    <Route render = {(props) =>{
                        return <FirstStep {...props} user ={user} updateUser={updateUser}/>
                    }} path='/' exact={true} />
                    <Route render = {(props)=>{
                        return <SecondStep {...props} user ={user} updateUser={updateUser}/>
                    }} path='/second' exact={true} />
                    <Route render = {(props)=>{
                        return <ThirdStep {...props} user ={user}/>
                    }} path='/third' exact={true} />
                </Switch>
            </div>
        </BrowserRouter>
     );
}
export default AppRouter;