import axios, { AxiosError } from 'axios';
import { BASEURL } from 'src/redux/Constants';

export const SetAxiosHeaders = async (): Promise<void> => {
  try {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    const response = await axios.get(BASEURL + '/auth/token');

    const { token } = response.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } catch (e: Error | AxiosError) {
    if (axios.isAxiosError(e)) {
      console.log('AxiosError ------------------');
      console.log(e);
    } else {
      console.log('Error ------------------');
      console.log(e);
    }
  }
};
