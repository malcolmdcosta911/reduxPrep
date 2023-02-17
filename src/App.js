

import React from 'react';
import { bugAdded, bugResolved, bugRemoved, getUnresolvedBugs, bugAssignedToUser, getBugByUser } from './store/bugs';
import configureStore from './store/configureStore'
import { projectAdded } from './store/projects';
import {userAdded} from './store/users';
import {Provider} from 'react-redux';
import Bugs from './components/Bugs';
import BugsList from './components/BugsList';

const store=configureStore();

const App = () => {


// React.useEffect(()=>{

//   const unsubscribe = store.subscribe(() => console.log(store.getState()));
// //getUnresolvedBugs(store.getState())
// store.dispatch(bugAdded({ description:"Bug1"}));
// // store.dispatch(bugAdded({ description: "Bug2" }));
// // store.dispatch(bugAdded({ description: "Bug3" }));

// // store.dispatch(bugResolved({id:1}));
// // store.dispatch(bugRemoved({id:1}));

// // store.dispatch(projectAdded({description:"Project 1"}));

//   store.dispatch(userAdded({ name:"Malcolm"}));
//   store.dispatch(bugAssignedToUser({ userId: 1, bugId:1 }));
//   const bug = getBugByUser(1)(store.getState());
//   console.log(bug);
  

// return ()=>{
//   unsubscribe();
// }

// },[]);


// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log(x===y);









 

  return ( 
    <Provider store={store}>
<Bugs/>
    </Provider>
     );
}
 
export default App;