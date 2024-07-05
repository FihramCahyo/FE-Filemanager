import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
  selectedFolder: [],
};

const apiUrl = 'http://localhost:8000/api/folder';

export const fetchFolders = createAsyncThunk('folders/fetchFolders', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});
// export const selectFolders = createAsyncThunk('folders/selectFolders', async (id) => {
//   const response = await axios.get(`${apiUrl}/${id}`);
//   return response.data;
// });

const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    selectFolder: (state, action) => {
      state.selectedFolder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFolders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFolders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFolders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectFolder } = foldersSlice.actions;

export default foldersSlice.reducer;
