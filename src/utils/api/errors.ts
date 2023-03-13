import { ERROR_TYPES } from './constants';

export class TimeoutError extends Error {
  public constructor(statusText?: string) {
    super(statusText || 'Timeout Error');
    this.name = ERROR_TYPES.TimeoutError;
  }
}

export class HttpError extends Error {
  private status: number;

  public constructor(status: number, statusText?: string) {
    super(statusText || 'Http Error');
    this.status = status;
    this.name = ERROR_TYPES.HttpError;
  }
}
