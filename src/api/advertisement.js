import request from '@/utils/request'
/**
 *
 * @param {*} params
 * @returns 游戏分析
 */

export function GetAdvList(params) {
  return request({
    url: '/houTai/advertising/getAdvList',
    method: 'post',
    data:params
  })
}
/**
 *
 * @param {*} params
 * @returns 新增广告
 */

export function AddAdv(params) {
  return request({
    url: '/houTai/advertising/addAdv',
    method: 'post',
    data:params
  })
}
