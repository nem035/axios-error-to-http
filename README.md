# Axios Error to Http

Handle annoying gigantic axios errors:

```ts
const httpError = (error as AxiosError)?.isAxiosError
  ? axiosErrorToHttp(error as AxiosError)
  : error;
console.error(httpError);
```

Peer dependcies are [axios](https://www.npmjs.com/package/axios) and [http-errors](https://www.npmjs.com/package/http-errors).