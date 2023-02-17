import { createSlice } from "@reduxjs/toolkit";

let lastId=0;

const userSlice=createSlice({
    name:'users',
    initialState:[],
    reducers:{
        userAdded(state, action){
            state.push({
                name:action.payload.name,
                id:++lastId
            })
        },
    
    }
})


export const { addBugToUser, userAdded } = userSlice.actions
export default userSlice.reducer;







