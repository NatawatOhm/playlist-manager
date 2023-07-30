import axios from 'axios';
const BASE_URL = 'https://api.spotify.com/';
class BaseService {
  private url: string;
  private api: any;

  constructor(baseurl?: string) {
    this.url = baseurl || BASE_URL;
    this.api = axios.create({
      baseURL: this.url,
      timeout: 60 * 5 * 1000 /** 5 Mins */,
      validateStatus: (status: number) => {
        return status >= 200 && status <= 600;
      },
      headers: {
        common: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      },
    });
    this.api.interceptors.request.use((config: any) => {
      const configuration = {
        ...config,
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      };
      return new Promise((resolve) => resolve(configuration));
    });
    this.api.interceptors.response.use(
      (response: any) => {
        const data = response.data;
        if (data.status === 'fail') {
          console.error('error');
        }
        return Promise.resolve(response);
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );
  }

  getJSON(endPoint: string, configs = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.get(endPoint, configs).then(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          reject(err);
        },
      );
    });
  }

  postJSON(endPoint: string, params: any, configs = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.post(endPoint, params, configs).then(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          reject(err);
        },
      );
    });
  }
}

export const baseService = new BaseService();
