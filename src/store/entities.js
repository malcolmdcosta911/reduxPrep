import { combineReducers } from 'redux';
import bugsReducer from './bugs';
import projectsReducer from './projects';
import usersReducer from './users';

export default combineReducers({
    bugss: bugsReducer,
    projects: projectsReducer,
    users:usersReducer
});