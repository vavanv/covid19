import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoverageInfoState, Coverage } from '../../store/coverage/types';

export const initialState: CoverageInfoState = {
  items: [],
  selectedCountry: '',
};

const coverageInfoSlice = createSlice({
  name: 'coverage',
  initialState,
  reducers: {
    fetchCoverageRequest(state) {
      state.items = [];
    },
    fetchCoverageSuccess(state, action: PayloadAction<Coverage>) {
      state.items = action.payload;
    },
    fetchCasesByCountryFailure(state, action: PayloadAction<any>) {
      state.items = [];
    },
    changeSelectedCountry(state, action: PayloadAction<string>) {
      state.selectedCountry = action.payload;
    },
  },
});

export const { name, actions, reducer } = coverageInfoSlice;
