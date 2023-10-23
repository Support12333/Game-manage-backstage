import request from '@/utils/request'

/**
 *
 * @param {*} params
 * @returns 用户管理
 */

export function GetUserInfoList(params) {
  return request({
    url: '/hou_tai/user_info/getUserInfoList',
    method: 'post',
    params
  })
}
