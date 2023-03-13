import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VaccineInfoState, Vaccines } from '../../store/vaccine-info/types';

export const initialState: VaccineInfoState = {
  items: null,
};

const vaccineInfoSlice = createSlice({
  name: 'vaccine-info',
  initialState,
  reducers: {
    fetchVaccineInfoRequest(state) {
      state.items = null;
    },
    fetchVaccineInfoSuccess(state, action: PayloadAction<Vaccines>) {
      state.items = action.payload;
    },
    fetchVaccineInfoFailure(state, action: PayloadAction<any>) {
      state.items = null;
    },
  },
});

export const { name, actions, reducer } = vaccineInfoSlice;
