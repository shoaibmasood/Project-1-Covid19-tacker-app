import axios from 'axios';

const url = 'https://corona-api.com/timeline';
// const url = 'https://covid19.mathdro.id/api';

export const fetchedCardData = async () => {
  try {
    const response = await axios.get(url);
    // console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

// export const fetchedGraphData = async () => {
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };
