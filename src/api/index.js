import base from "./base";
import axios from '../utils/http.js'

const getData = {
  //获取推荐歌曲
  getTodayRecommend(params) {
    return axios.get(base.baseUrl + base.type, {
      params: params
    })
  }
}
export default getData
