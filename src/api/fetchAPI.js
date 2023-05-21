import axios from "axios";

const base_url = "https://opentdb.com/api.php?";

export async function getQuestions(url) {
  try {
    return await axios.get(`${base_url}${url}`);
  } catch (error) {
    console.error(error);
  }
}
