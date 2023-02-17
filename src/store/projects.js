import { createSlice } from "@reduxjs/toolkit";

let  lastId=0;
const projectsSlice=createSlice({
    name:"projects",
    initialState:[],
    reducers:{
        projectAdded(state, action){
            state.push(
                {
                    id:++lastId,
                    name:action.payload.description,

                }
            )
        }
        
    }
});


export const {projectAdded} = projectsSlice.actions;
export default projectsSlice.reducer;