import api from "./api";
// 获取详情的数据
export const productList = ({}, params) => {
  return api.get(`/products`, { params });
};
