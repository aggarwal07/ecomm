import { createSlice } from '@reduxjs/toolkit';

interface TabSelected{
    selectedTab: number;
}
let initialState:TabSelected= {
   selectedTab : 0
};

if (typeof window !== 'undefined') {
initialState = {
  selectedTab: localStorage.getItem('selectedTab') ? Number(localStorage.getItem('selectedTab')) : 0,
};
}

const tabSelectedSlice = createSlice({
  name: 'tabSelected',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.selectedTab = action.payload;
      localStorage.setItem('selectedTab', action.payload);
    },
  },
});

export const { setTab } = tabSelectedSlice.actions;
export default tabSelectedSlice.reducer;
