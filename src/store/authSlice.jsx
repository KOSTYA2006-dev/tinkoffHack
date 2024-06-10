import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { removeAuthCookie, setAuthCookie, getAuthCookie } from '../utils/cookie';
import axios from 'axios';

export const authenticateUser = createAsyncThunk(
    'auth/authenticateUser',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8089/authenticate', formData);
            return response.data.jwt;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8089/register', formData);
            return response.data.jwt;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: getAuthCookie(),
        isAuthenticated: Boolean(getAuthCookie()),
        loading: false,
        error: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            setAuthCookie(action.payload);
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            removeAuthCookie();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authenticateUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
                state.isAuthenticated = true;
                setAuthCookie(action.payload);
            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Authentication failed';
            })
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
                state.isAuthenticated = true;
                setAuthCookie(action.payload);
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Registration failed';
            });
    },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
