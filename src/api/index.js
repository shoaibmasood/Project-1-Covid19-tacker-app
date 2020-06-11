import axios from 'axios';

const url = 'https://corona-api.com/timeline';

export const fetchedCardData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(url);
    // console.log(data);
    return data;
  } catch (error) {}
};
