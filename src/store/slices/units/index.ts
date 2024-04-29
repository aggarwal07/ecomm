// unitsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Unit {
  _id: string;
  name: string;
  price: string;
  description: string[];
  images: string[];
  type: {
    size: string;
    material: string;
    price: string;
    _id: string;
  }[];
  category: string;
  __v: number;
}

interface UnitState {
  unit: Unit | null;
}

const initialState: UnitState = {
  unit: null,
};

const unitsSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {
    setUnit(state, action: PayloadAction<Unit>) {
      state.unit = action.payload;
    },
    clearUnit(state) {
      state.unit = null;
    },
  },
});

export const { setUnit, clearUnit } = unitsSlice.actions;

export default unitsSlice.reducer;
