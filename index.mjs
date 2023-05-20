import httpErrors from 'http-errors';

export default function coerceAxiosErrorToHttpError(
  error
) {
  const httpError = new httpErrors[error?.response?.status || 500](
    error.message
  );
  httpError.stack = error.stack;

  const { config, isAxiosError, request, response, toJSON, ...rest } = error;

  Object.assign(httpError, rest);

  if (response) {
    Object.assign(httpError, response.data);
    httpError.statusText = response.statusText;
    httpError.headers = response.headers;
  } else {
    httpError.statusText = error.request ? 'No response received' : undefined;
  }

  return httpError;
}
