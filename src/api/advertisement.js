import request from '@/utils/request'
/**
 *
 * @param {*} params
 * @returns 游戏分析
 */

export function GetAdvList(params) {
  return request({
    url: '/hou_tai/advertising/getAdvList',
    method: 'post',
    data:params
  })
}
