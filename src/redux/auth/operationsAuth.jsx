import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

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