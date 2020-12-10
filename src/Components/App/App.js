
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Comments from '../Comments/Comments';

import Posts from '../Posts/Posts';


export default function App(){
  

   

 

    return(
        <div className="bg-dark text-black ">
            <BrowserRouter>
                <Switch>
                    
                    <Route
                    exact 
                    path="/"
                    component={Posts}
                    />
                    <Route
                    exact 
                    path="/comments/:id"
                    component={Comments}
                    />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}