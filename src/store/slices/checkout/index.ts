import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddressState {
  orderId: string;
  name: string;
  mobile: string;
  postal: string;
  address: string;
  city : string;
  state: string;
  cart: any[];
}

const initialState: AddressState = {
  orderId: '',
  name: '',
  mobile: '',
  postal: '',
  address: '',
  state: '',
  city: '',
  cart: [],
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setOrderId(state, action: PayloadAction<string>) {
      state.orderId = action.payload;
    },
    setNames(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setMobiles(state, action: PayloadAction<string>) {
      state.mobile = action.payload;
    },
    setPostals(state, action: PayloadAction<string>) {
      state.postal = action.payload;
    },
    setAddresss(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setStates(state, action: PayloadAction<string>) {
      state.state = action.payload;
    },
    setCitys(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setCarts(state, action: PayloadAction<any[]>) {
      state.cart = action.payload;
    },
  },
});

export const { setNames, setMobiles, setPostals, setAddresss, setStates, setCarts,setCitys,setOrderId } = addressSlice.actions;
export default addressSlice.reducer;
