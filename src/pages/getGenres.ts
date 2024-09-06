import axios, { AxiosError } from 'axios';
import { BASEURL } from 'src/redux/Constants';

export const GetMovieGenres = async (): Promise<void> => {
  try {
    const response = await axios.get(BASEURL + '/genres/movies');
    const { token } = response.data;

    console.log(response);
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
