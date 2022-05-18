import * as axios from "axios";
const key = "8456fdd8beb84ee3a833ad163bf8bb03";
const search = "samsung";

export const news = {
  getNews(search) {
    return axios
      .get(
        `https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=8456fdd8beb84ee3a833ad163bf8bb03`
      )
      .then((response) => response.data);
  },
};
