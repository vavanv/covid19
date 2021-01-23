import { ERROR_TYPES } from '../../utils/api/constants';

export class TimeoutError extends Error {
  public constructor(statusText?: string) {
    super(statusText || 'Timeout Error');
    this.name = ERROR_TYPES.TimeoutError;
  }
}
