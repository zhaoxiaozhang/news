import axios from 'axios'
// http://api.jisuapi.com/news/get?&num=10&appkey=272f8fcb40a13a6e&channel=头条&start=0
export default function(opt) {
  if (opt) {
    return axios(opt).then((res) => {
      return res.data;
    }).catch(err => {
      console.error(err)
    })
  }
}