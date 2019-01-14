const doc = document;
var cache = {};

export default {
  // 保存滚动条位置
  save(path) {
    cache[path] = doc.querySelector('.wrap').scrollTop;
  },
  // 重置滚动条位置
  get() {
    const path = this.$route.path;
    this.$nextTick(function () {
      doc.querySelector('.wrap').scrollTop = cache[path] || 0;
    });
  },
  // 设置滚动条到顶部
  goTop() {
    this.$nextTick(function () {
      doc.querySelector('.wrap').scrollTop = 0;
    });
  }
}