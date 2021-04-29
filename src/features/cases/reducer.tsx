import { createSlice } from '@reduxjs/toolkit';
import { TypeOfOutput } from './../../store/cases/types';
import { CasesByCountryState } from '../../store/cases/types';

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
    fetchCasesByCountrySuccess(state, action) {
      state.items = action.payload;
    },
    fetchCasesByCountryFailure(state, action) {
      state.items = [];
    },
    changeTypeByCountry(state, action) {
      state.selectedType = action.payload;
    },
  },
});

export const { name, actions, reducer } = casesByCountrySlice;
