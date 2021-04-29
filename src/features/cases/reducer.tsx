import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeOfOutput } from './../../store/cases/types';
import { CasesByCountryState, Cases } from '../../store/cases/types';

export const initialState: CasesByCountryState = {
  items: [],
  selectedType: TypeOfOutput.cases,
};

const casesByCountrySlice = createSlice({
  name: 'cases',
  initialState,
  reducers: {
    fetchCasesByCountryRequest(state) {
      state.items = [];
    },
    fetchCasesByCountrySuccess(state, action: PayloadAction<Cases>) {
      state.items = action.payload;
    },
    fetchCasesByCountryFailure(state, action: PayloadAction<any>) {
      state.items = [];
    },
    changeTypeByCountry(state, action: PayloadAction<string>) {
      state.selectedType = action.payload;
    },
  },
});

export const { name, actions, reducer } = casesByCountrySlice;
