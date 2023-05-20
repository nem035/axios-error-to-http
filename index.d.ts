import { AxiosError } from 'axios';
import { HttpError } from 'http-errors';

export function coerceAxiosErrorToHttpError(
  error: AxiosError
): HttpError;