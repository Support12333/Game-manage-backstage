import request from '@/utils/request'
/**
 *
 * @param {*} params
 * @returns 游戏分析列表
 */

export function GetPageByGameAnalysis(params) {
  return request({
    url: '/hou_tai/game/pageByGameAnalysis',
    method: 'post',
    data:params
  })
}
/**
 *
 * @param {*} params
 * @returns 游戏列表
 */

export function GetpageByGame(params) {
  return request({
    url: '/hou_tai/game/pageByGame',
    method: 'post',
    data:params
  })
}
/**
 *
 * @param {*} params
 * @returns 游戏广告列表
 */

export function GetPageByGameAdv(params) {
  return request({
    url: '/hou_tai/game/adv/pageByGameAdv',
    method: 'post',
    data:params
  })
}
