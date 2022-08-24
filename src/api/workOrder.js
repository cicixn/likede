import request from "@/utiles/request";

/**
 * 工单搜索
 * @param {*} pageIndex 当前页数
 * @param {*} pageSize 获取数据条数
 * @param {*} isRepair 是否是维修工单
 * @returns
 */
export const workOrderSearchApi = (params) => {
  return request({
    url: "/task-service/task/search",
    params,
  });
};
