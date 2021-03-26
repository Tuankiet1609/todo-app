import React, { useContext, createContext, useState }  from 'react';
import Login from './src/login';
import Rootnavi from './src/navigations';
import Context from '../app-todo/src/todo/Context';

        export default function App(){
            const [context, setContext] = useState([])
            return(
                <Context.Provider value={[context, setContext]}>
            <Rootnavi></Rootnavi>
            </Context.Provider>
            );
  }