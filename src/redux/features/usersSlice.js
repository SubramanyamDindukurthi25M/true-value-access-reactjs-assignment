import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios';

// Initial State
const initialStateValue = {
    usersData: [],
    isLoading: false,
    errorMessage: null
}

// First, create the thunk
export const fetchUsersByUrl = createAsyncThunk(
    'users/fetchByUrl',
    // API Call
    async () => {
        const baseUrl = 'https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';
        const response = await axios.get(baseUrl);
        return response.data
    }
)

// Then, handle actions in your reducers:
const usersSlice = createSlice({
    name: 'usersList',
    initialState: initialStateValue,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersByUrl.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsersByUrl.fulfilled, (state, action) => {
                state.isLoading = false;
                state.usersData = action.payload;
            })
            .addCase(fetchUsersByUrl.rejected, (state) => {
                state.isLoading = false;
                state.errorMessage = 'network-issue';
            })
    }
})

// exporting reducer
export default usersSlice.reducer;