# Axios Error to Http

Handle annoying gigantic axios errors:

```ts
const httpError = (error as AxiosError)?.isAxiosError
  ? axiosErrorToHttp(error as AxiosError)
  : error;
console.error(httpError);
```