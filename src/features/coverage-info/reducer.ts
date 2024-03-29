import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoverageInfoState, Coverage } from '../../store/coverage-info/types';

export const initialState: CoverageInfoState = {
  items: [],
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
  },
});

export const { name, actions, reducer } = coverageInfoSlice;
