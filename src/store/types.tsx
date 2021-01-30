import { CasesByCountryState } from '../store/cases/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Payload = any;

export interface AppState {
  casesByCountry: CasesByCountryState;
}

export interface AnyAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
  payload?: Payload;
  error?: string;
}

export interface RequestAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

export interface SuccessAction {
  type: string;
  payload: Payload;
}

export interface FailureAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

export interface AsyncActions {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
}
