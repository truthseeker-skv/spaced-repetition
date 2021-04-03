import axios from 'axios';

const ANKI_URL = 'http://127.0.0.1:8765';
const API_VERSION = 6;

interface ConnectResponse<R> {
  result: R;
  error: string | null;
}

export const send = async <T, R>(action: string, params?: T): Promise<R> => {
  try {
    const data = JSON.stringify({
      version: API_VERSION,
      action,
      params,
    });

    const resp = await axios.post(ANKI_URL, data);
    const respData: ConnectResponse<R> = resp.data;

    if (respData.error) {
      throw new Error(`Anki response error: "${respData.error}"`);
    }

    return respData.result;
  } catch (err) {
    throw new Error(`Failed anki request "${action}"="${JSON.stringify(params || null, null, 2)}".\r\n ${err?.message || err}`);
  }
}
