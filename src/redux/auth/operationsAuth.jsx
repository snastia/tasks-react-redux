import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
    'auth/register',
    async (newUser, thunkAPI) => {
     try {
       const res = await axios.post('/users/signup', newUser)
       return res.data
     } catch (error) {
       thunkAPI.rejectWithValue('oops!')
     }
    }
  );