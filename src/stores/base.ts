import axios from 'axios';


interface ConnectResponse<T> {
  result: T;
  error: string | null;
}

export class BaseStore {
  private _ankiUrl = 'http://127.0.0.1:8765';
  private _apiVersion = 6;

  async send<T, R>(action: string, params?: T): Promise<R | null> {
    try {
      const data = JSON.stringify({
        version: this._apiVersion,
        action,
        params,
      });
      const resp = await axios.post(this._ankiUrl, data, {});
      const respData: ConnectResponse<R> = resp.data;
      if (respData.error) {
        throw new Error(respData.error);
      }
      return respData.result;
    } catch (err) {
      console.error(`${this.constructor.name}#send has failed: `, err);
      return null;
    }
  }
}
