import React from 'react';
import Rapp from './bootc'

function App({name, age}) { 
  return <div>
              Hello my name is {name} and Age is {age}<br/>
              <Rapp fname={name}></Rapp>
            </div> 
}

export default App;
