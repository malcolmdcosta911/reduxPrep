import { createAction, createReducer, createSlice } from '@reduxjs/toolkit'

import {createSelector} from 'reselect';

//action creators
// export const bugAdded = createAction("bugs/bugAdded");
// export const bugRemoved = createAction("bugs/bugRemoved");
// export const bugResolved = createAction("bugs/bugResolved");



//reducer
let lastId = 0;

const initialState = [];

const bugsSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers: {
        bugAssignedToUser(state, action) {
            const index = state.findIndex(bug => bug.id === action.payload.bugId);
            state[index].userId = action.payload.userId;
        },
        bugAdded(state, action) {

            state.push(
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            )
        },
        bugResolved(state, action) {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state[index].resolved=true;
        },
        bugRemoved(state, action) {
            const index = state.findIndex(bug => bug.id === action.payload.id);
            state.splice(index, 1);
        }


    }
});


export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser } = bugsSlice.actions
export default bugsSlice.reducer;




//selectors

// export const getUnresolvedBugs = (state) =>
//  state.entities.bugss.filter(bugs => bugs.resolved === false)

export const getUnresolvedBugs=createSelector(
    state => state.entities.bugss,
   // state => state.entities.projects,
    ( bugss) => bugss.filter(bugs => bugs.resolved === false)

);


export const getBugByUser = userId=> createSelector(
    state => state.entities.bugss,
    bugss => bugss.filter(bug => bug.userId===userId)
)




// const reducer=createReducer([], (builder)=>{
// builder
// .addCase(bugAdded, (state, action)=>{
//     state.push(
//              {
//                  id: ++lastId,
//                  description: action.payload.description,
//                  resolved: false
//              }
//     )
// })
// .addCase(bugResolved, (state, action)=>{
//     const index = state.findIndex(bug=>bug.id===action.payload.id);
//     state[index].resolved = true;
// })
// .addCase(bugRemoved, (state, action)=>{
//     const index = state.findIndex(bug => bug.id === action.payload.id);
// state.splice(index, 1);
// })
// })





//normal reducer
// const reducer = (state = [], action) => {

//     switch (action.type) {
//         case (bugAdded.type): {
//             return [...state,
//             {
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false
//             }
//             ]
//         }

//         case (bugRemoved.type): {
//             return state.filter(bug => bug.id !== action.payload.id)

//         }

//         case (bugResolved.type): {
//             return state.map(bug => bug.id === action.payload.id ?
//                 { ...bug, resolved: true } : bug
//                 )
//         }

//         default:
//             return state;
//     }
// }

//export default reducer;



