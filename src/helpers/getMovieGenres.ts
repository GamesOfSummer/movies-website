import axios, { AxiosError } from 'axios';
import { BASEURL } from 'src/redux/Constants';

const GetMovieGenres = async (): Promise<void> => {
  try {
    const response = await axios.get(BASEURL + '/genres/movies');
    const { data } = response.data;
    return data;
  } catch (e: any) {
    console.log('Error ------------------');
    console.log(e);
  }
};

export default GetMovieGenres;
