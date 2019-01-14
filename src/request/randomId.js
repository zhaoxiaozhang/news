  
function randomId(){
    var  list =  ["头条", "新闻", "财经", "体育", "娱乐","军事","教育","科技", "NBA","股票","星座",
    "女性","健康", "育儿"]
    var len = Math.floor(Math.random()*list.length)
    var catid = list[len]
    return catid
}
export {
  randomId
}