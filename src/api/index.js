import axios from 'axios';

const url = 'https://corona-api.com/timeline';
// const url = 'https://covid19.mathdro.id/api';

export const fetchedCardData = async () => {
  try {
    const response = await axios.get(url);
    // console.log(response);
    return response.data.data[0];
  } catch (error) {
    return error;
  }
};
