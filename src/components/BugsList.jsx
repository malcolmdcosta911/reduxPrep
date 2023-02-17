import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bugAdded, getUnresolvedBugs, bugResolved } from '../store/bugs'

const BugsList = () => {

    const dispatch = useDispatch();
    //const bugs = useSelector(state=>state.entities.bugss.filter(bug=>bug.resolved===false));
    const bugs = useSelector(getUnresolvedBugs)

useEffect(()=>{
    dispatch(bugAdded({ description: "Bug1" })) ;
    dispatch(bugAdded({ description: "Bug2" }));
    dispatch(bugAdded({ description: "Bug3" }));
}, [])


   // useEffect(() => {
//console.log("UseEffect");

  //  }, [bugs])




   
    console.log(bugs);

    return (
        bugs?.map((bug) =>
            <ul key={bug.id}>
                <li>{bug.description} 
                <button
                 style={{margin:'2px'}}
                 onClick={() => dispatch(bugResolved({id:bug.id}))}
                 >resolve</button>
                </li>
            </ul>
        )
    );
}
 
export default BugsList;