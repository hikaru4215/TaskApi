import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';
import taskReduser from "../features/task/taskSlice";


export default configureStore({
  reducer: {
    login: loginReducer,
    task: taskReduser,
  },
});
