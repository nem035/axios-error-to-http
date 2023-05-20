import { AxiosError } from 'axios';
import { HttpError } from 'http-errors';

export default function coerceAxiosErrorToHttpError(
  error: AxiosError
): HttpError;