import { API_URL } from "../lib/constants";

async function getData(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

const spacexService = {
  getData
};

export default spacexService;