/**
 * Storage封装
 */
const STORAGE_KEY = "mall";
export default {
  getStroage() {
    return JSON.parse(winow.sessionStorage(STORAGE_KEY) || "{}");
  },
  // 存储值
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      let val = this.getStroage();
      val[key] = value;
      window.sessionStorage.setItem(module_name, value);
    }
  },
  // 获取存储值
  getItem(key, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    } else {
      return this.getStroage()[key];
    }
  },
  // clear
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (!val[module_name]) return;
      delete val[module_name][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
};
