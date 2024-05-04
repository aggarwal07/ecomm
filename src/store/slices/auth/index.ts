// slices/authSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user: any; // Adjust the type according to your user object structure
    errors: string | null;
}

const initialState: AuthState = {
    user: null,
    errors: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.errors = null;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            state.errors = null;
        },
    },
});

export const { setUser, setErrors, clearUser } = authSlice.actions;

export default authSlice.reducer;
