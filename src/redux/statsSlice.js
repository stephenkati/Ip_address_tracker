import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchLocation = createAsyncThunk('stats/fetchLocation', async (ipAddress = "", { rejectWithValue }) => {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_LqvZb0xjATcBPhCOuMBNIn6dLXRqv&ipAddress=${ipAddress}`);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  stats: null,
  isLoading: false,
  error: null
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.stats = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.stats = action.payload;
        state.isLoading = false; 
        state.error = null;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.stats = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export { fetchLocation };
export default statsSlice.reducer;
