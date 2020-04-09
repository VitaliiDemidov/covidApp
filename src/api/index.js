import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  const response = await axios.get(url);
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};
export const fetchDailyDate = async () => {};
