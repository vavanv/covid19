import { ERROR_TYPES } from '../../utils/api/constants';

export class HttpError extends Error {
  private status: number;

  public constructor(status: number, statusText?: string) {
    super(statusText || 'Http Error');
    this.status = status;
    this.name = ERROR_TYPES.HttpError;
  }
}
