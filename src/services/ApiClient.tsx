import * as superagent from 'superagent';

const methods = ['get', 'post', 'put', 'delete'];

interface HttpErrorResponse extends Error {
  response: any;
}

class ApiClient {
  defaults = {
    'Content-Type': 'application/json',
  };

  constructor() {
    methods.forEach(method =>
      this[method] = (
        path: string,
        { headers, query, data, type }: any = {},
        isDHeadersWanted = true
      ): Promise<object> =>
        new Promise((resolve, reject) => {
          const request = superagent[method](path);

          // set default headers
          if (isDHeadersWanted) {
            request.set(this.defaults);
          }

          if (type) {
            request.type(type);
          }

          if (headers) {
            request.set(headers);
          }

          if (query) {
            request.query(query);
          }

          if (data) {
            request.send(data);
          }

          request.end(
            (err: HttpErrorResponse, res: superagent.Response) =>
              err ? reject(err.response) : resolve(res.body || res),
          );
        }),
    );
  }

  get(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  post(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  put(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  delete(path: string, params?: any, defaultHeaders?: boolean): Promise<object> {
    // Overrided in constructor
    return new Promise(resolve => resolve({}));
  }

  set(key: string, value: string) {
    this.defaults[key] = value;
  }
}

export default new ApiClient();