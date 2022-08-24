import request from "@/utiles/request";

/**
 * 获取图片验证码
 * @param {*} clientToken 随机数
 * @returns
 */
export const getCodeApi = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
};

/**
 * 后台登录接口
 * @param {*} loginName 登录账户名
 * @param {*} password 登录密码
 * @param {*} clientToken 获取验证码随机数
 * @param {*} code 验证码输入
 * @param {*} loginType 登录类型 0：后台；
 * @returns
 */
export const loginApi = (data) => {
  return request({
    url: "/user-service/user/login",
    method: "POST",
    data,
  });
};

// api/user-service/user/:id

export const getUserInfoApi = (id) => {
  return request({
    url: `/user-service/user/${id}`,
    method: "GET",
  });
};