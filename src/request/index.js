import loadNews from "./loadNews.js";
// http://api.jisuapi.com/news/get?&num=10&appkey=272f8fcb40a13a6e&channel=头条&start=0
const getList = ({ params }) => {
  return loadNews({
    url: "http://api.jisuapi.com/news/get?",
    method: "get",
    params
  })
};

export default getList