import axios, { AxiosError } from 'axios';

export const SetAxiosHeaders = async (): Promise<void> => {
  try {
    const response = await axios.get(
      'https://0kadddxyh3.execute-api.us-east-1.amazonaws.com/auth/token'
    );

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
