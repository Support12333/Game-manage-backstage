import request from '@/utils/request'

/**
 *
 * @param {*} params
 * @returns 语言
 */

export function GetLanguage() {
  return request({
    url: '/hou_tai/game/numerical/listByLanguage',
    method: 'get',
  })
}
/**
 *
 * @param {*} params
 * @returns 游戏类型
 */

export function GetGameType() {
  return request({
    url: '/hou_tai/game/numerical/listByGameType',
    method: 'get',
  })
}
/**
 *
 * @param {*} params
 * @returns 载体
 */

export function GetCarrier() {
  return request({
    url: '/hou_tai/game/numerical/listByCarrier',
    method: 'get',
  })
}
/**
 *
 * @param {*} params
 * @returns 广告位置
 */

export function GetADPosition() {
  return request({
    url: '/hou_tai/game/numerical/listByAdvPosition',
    method: 'get',
  })
}
