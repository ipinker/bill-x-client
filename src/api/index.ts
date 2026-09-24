/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from '../../yapi/yapiRequest.uts'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_0 = 'http://192.168.143.129:3001/mock/11' as any
const devUrl_0_0_0_0 = '' as any
const prodUrl_0_0_0_0 = '' as any
const dataKey_0_0_0_0 = undefined as any

/**
 * 接口 [修改账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16973) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/username`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserUsernameReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  password?: string
  oldUsername?: string
  newUsername?: string
}

/**
 * 接口 [修改账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16973) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/username`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserUsernameRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [修改账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16973) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/username`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiUserUsernameRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/username', undefined, string, string, false>
>

/**
 * 接口 [修改账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16973) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/username`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiUserUsernameRequestConfig: ApiPutApiUserUsernameRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/username',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiUserUsername',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '修改账号(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/16973',
    author: 11,
  },
}

/**
 * 接口 [修改账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16973) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/username`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiUserUsername = /*#__PURE__*/ (requestData: IApiUserUsernameReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserUsernameRes>(prepare(apiPutApiUserUsernameRequestConfig, requestData), ...args)
}

apiPutApiUserUsername.requestConfig = apiPutApiUserUsernameRequestConfig

/**
 * 接口 [更新个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16982) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserUpdateReq {
  /**
   * 用户唯一ID
   */
  userId?: string
  /**
   * 手机号
   */
  phone?: string
  /**
   * 邮箱
   */
  email?: string
  /**
   * 用户名
   */
  username?: string
  /**
   * 密码
   */
  password?: string
  /**
   * 昵称
   */
  nickname?: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 个人介绍
   */
  introduction?: string
  /**
   * 性别
   */
  sex?: number
  /**
   * 个人积分
   */
  integral?: number
  sessionKey?: string
  /**
   * 第三方登录id
   */
  openid?: string
  unionId?: string
  wxOpenid?: string
  wxUnionId?: string
  wxMiniOpenid?: string
  wxMiniUnionId?: string
  qqOpenid?: string
  qqUnionId?: string
  aliOpenid?: string
  aliUnionId?: string
  sinaOpenid?: string
  sinaUnionId?: string
  baiduOpenid?: string
  baiduUnionId?: string
  appleId?: string
  /**
   * 是否冻结
   */
  isFreeze?: number
  /**
   * 设备标识用于指纹
   */
  imei?: string
  createTime?: string
  updateTime?: string
  /**
   * 注册数据来源
   */
  dataSource?: number
  /**
   * 是否删除
   */
  isDelete?: number
}

/**
 * 接口 [更新个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16982) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16982) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiUserUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/update', undefined, string, string, false>
>

/**
 * 接口 [更新个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16982) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiUserUpdateRequestConfig: ApiPutApiUserUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiUserUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新个人信息(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/16982',
    author: 11,
  },
}

/**
 * 接口 [更新个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16982) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiUserUpdate = /*#__PURE__*/ (requestData: IApiUserUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserUpdateRes>(prepare(apiPutApiUserUpdateRequestConfig, requestData), ...args)
}

apiPutApiUserUpdate.requestConfig = apiPutApiUserUpdateRequestConfig

/**
 * 接口 [修改手机号码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16991) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/phone`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserPhoneReq {
  phone?: string
  code?: string
}

/**
 * 接口 [修改手机号码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16991) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/phone`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserPhoneRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [修改手机号码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16991) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/phone`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiUserPhoneRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/phone', undefined, string, string, false>
>

/**
 * 接口 [修改手机号码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16991) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/phone`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiUserPhoneRequestConfig: ApiPutApiUserPhoneRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/phone',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiUserPhone',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '修改手机号码(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/16991',
    author: 11,
  },
}

/**
 * 接口 [修改手机号码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/16991) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/phone`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiUserPhone = /*#__PURE__*/ (requestData: IApiUserPhoneReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserPhoneRes>(prepare(apiPutApiUserPhoneRequestConfig, requestData), ...args)
}

apiPutApiUserPhone.requestConfig = apiPutApiUserPhoneRequestConfig

/**
 * 接口 [修改密码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17000) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserPasswordReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  oldPassword?: string
  username?: string
  newPassword?: string
}

/**
 * 接口 [修改密码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17000) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserPasswordRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [修改密码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17000) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiUserPasswordRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/password', undefined, string, string, false>
>

/**
 * 接口 [修改密码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17000) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiUserPasswordRequestConfig: ApiPutApiUserPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/password',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiUserPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '修改密码(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17000',
    author: 11,
  },
}

/**
 * 接口 [修改密码(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17000) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiUserPassword = /*#__PURE__*/ (requestData: IApiUserPasswordReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserPasswordRes>(prepare(apiPutApiUserPasswordRequestConfig, requestData), ...args)
}

apiPutApiUserPassword.requestConfig = apiPutApiUserPasswordRequestConfig

/**
 * 接口 [更新绑定的指纹信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17009) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/fingerPrint`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserFingerPrintReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  password?: string
  username?: string
  imei?: string
}

/**
 * 接口 [更新绑定的指纹信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17009) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/fingerPrint`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserFingerPrintRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新绑定的指纹信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17009) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/fingerPrint`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiUserFingerPrintRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/user/fingerPrint',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新绑定的指纹信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17009) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/fingerPrint`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiUserFingerPrintRequestConfig: ApiPutApiUserFingerPrintRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/fingerPrint',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiUserFingerPrint',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新绑定的指纹信息(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17009',
    author: 11,
  },
}

/**
 * 接口 [更新绑定的指纹信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17009) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/fingerPrint`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiUserFingerPrint = /*#__PURE__*/ (
  requestData: IApiUserFingerPrintReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiUserFingerPrintRes>(prepare(apiPutApiUserFingerPrintRequestConfig, requestData), ...args)
}

apiPutApiUserFingerPrint.requestConfig = apiPutApiUserFingerPrintRequestConfig

/**
 * 接口 [修改邮箱(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17018) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/email`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserEmailReq {
  email?: string
  code?: string
}

/**
 * 接口 [修改邮箱(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17018) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/email`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserEmailRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [修改邮箱(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17018) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/email`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiUserEmailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/email', undefined, string, string, false>
>

/**
 * 接口 [修改邮箱(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17018) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/email`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiUserEmailRequestConfig: ApiPutApiUserEmailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/email',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiUserEmail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '修改邮箱(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17018',
    author: 11,
  },
}

/**
 * 接口 [修改邮箱(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17018) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `PUT /api/user/email`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiUserEmail = /*#__PURE__*/ (requestData: IApiUserEmailReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserEmailRes>(prepare(apiPutApiUserEmailRequestConfig, requestData), ...args)
}

apiPutApiUserEmail.requestConfig = apiPutApiUserEmailRequestConfig

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17027) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `PUT /api/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiThemeUpdateReq {
  /**
   * 主题id
   */
  id?: number
  /**
   * 主题名字
   */
  name?: string
  /**
   * 主题描述
   */
  description?: string
  /**
   * 主题内容
   */
  content?: string
  /**
   * 主题下载路径
   */
  url?: string
  /**
   * 所需积分
   */
  integral?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17027) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `PUT /api/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiThemeUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17027) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `PUT /api/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiThemeUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/theme/update', undefined, string, string, false>
>

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17027) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `PUT /api/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiThemeUpdateRequestConfig: ApiPutApiThemeUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/theme/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiThemeUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17027',
    author: 11,
  },
}

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17027) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `PUT /api/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiThemeUpdate = /*#__PURE__*/ (requestData: IApiThemeUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IApiThemeUpdateRes>(prepare(apiPutApiThemeUpdateRequestConfig, requestData), ...args)
}

apiPutApiThemeUpdate.requestConfig = apiPutApiThemeUpdateRequestConfig

/**
 * 接口 [更新提醒↗](http://192.168.143.129:3001/project/11/interface/api/17036) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `PUT /api/reminder/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiReminderUpdateReq {
  id?: number
  /**
   * 提醒标题
   */
  title?: string
  /**
   * 提醒内容
   */
  content?: string
  /**
   * 标签
   */
  tag?: string
  /**
   * 颜色
   */
  color?: string
  /**
   * 提醒类型
   */
  type?: number
  /**
   * 历法
   */
  yearType?: number
  /**
   * 提醒时间集合
   */
  times?: string
  /**
   * 循环提醒开始时间
   */
  startTime?: string
  /**
   * 循环间隔
   */
  timeStep?: number
  /**
   * 循环间隔单位
   */
  timeStepUnit?: number
  /**
   * 提醒方式
   */
  methods?: number
  /**
   * 是否开启
   */
  enable?: number
  /**
   * 提醒目标信息
   */
  mail?: string
  dd?: string
  openid?: string
  wxopenid?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [更新提醒↗](http://192.168.143.129:3001/project/11/interface/api/17036) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `PUT /api/reminder/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiReminderUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新提醒↗](http://192.168.143.129:3001/project/11/interface/api/17036) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `PUT /api/reminder/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiReminderUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/reminder/update', undefined, string, string, false>
>

/**
 * 接口 [更新提醒↗](http://192.168.143.129:3001/project/11/interface/api/17036) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `PUT /api/reminder/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiReminderUpdateRequestConfig: ApiPutApiReminderUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/reminder/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiReminderUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新提醒',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17036',
    author: 11,
  },
}

/**
 * 接口 [更新提醒↗](http://192.168.143.129:3001/project/11/interface/api/17036) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `PUT /api/reminder/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiReminderUpdate = /*#__PURE__*/ (
  requestData: IApiReminderUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiReminderUpdateRes>(prepare(apiPutApiReminderUpdateRequestConfig, requestData), ...args)
}

apiPutApiReminderUpdate.requestConfig = apiPutApiReminderUpdateRequestConfig

/**
 * 接口 [更新贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17045) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `PUT /api/property/loan/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiPropertyLoanUpdateReq {
  id?: number
  /**
   * 贷款机构ID
   */
  lenderId?: number
  /**
   * 带看记录名称
   */
  name?: string
  /**
   * 贷款金额
   */
  amount?: number
  /**
   * 贷款利率
   */
  lendingRate?: number
  /**
   * 贷款期数
   */
  count?: number
  /**
   * 贷款方式(1: 等额本息, 2: 等额本金)
   */
  lendingType?: number
  /**
   * 还款日
   */
  repaymentDay?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 还款类型: 1:还款日, 2: 出账日后
   */
  repaymentType?: number
  /**
   * 剩余待还本金
   */
  principal?: number
}

/**
 * 接口 [更新贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17045) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `PUT /api/property/loan/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiPropertyLoanUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17045) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `PUT /api/property/loan/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiPropertyLoanUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/loan/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17045) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `PUT /api/property/loan/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiPropertyLoanUpdateRequestConfig: ApiPutApiPropertyLoanUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/loan/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiPropertyLoanUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新贷款记录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17045',
    author: 11,
  },
}

/**
 * 接口 [更新贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17045) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `PUT /api/property/loan/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiPropertyLoanUpdate = /*#__PURE__*/ (
  requestData: IApiPropertyLoanUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLoanUpdateRes>(prepare(apiPutApiPropertyLoanUpdateRequestConfig, requestData), ...args)
}

apiPutApiPropertyLoanUpdate.requestConfig = apiPutApiPropertyLoanUpdateRequestConfig

/**
 * 接口 [更新贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17054) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `PUT /api/property/lender/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiPropertyLenderUpdateReq {
  id?: number
  /**
   * 贷款关联用户
   */
  userId?: string
  /**
   * 贷款机构名称
   */
  name?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17054) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `PUT /api/property/lender/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiPropertyLenderUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17054) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `PUT /api/property/lender/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiPropertyLenderUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/lender/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17054) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `PUT /api/property/lender/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiPropertyLenderUpdateRequestConfig: ApiPutApiPropertyLenderUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/lender/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiPropertyLenderUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新贷款结构',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17054',
    author: 11,
  },
}

/**
 * 接口 [更新贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17054) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `PUT /api/property/lender/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiPropertyLenderUpdate = /*#__PURE__*/ (
  requestData: IApiPropertyLenderUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLenderUpdateRes>(prepare(apiPutApiPropertyLenderUpdateRequestConfig, requestData), ...args)
}

apiPutApiPropertyLenderUpdate.requestConfig = apiPutApiPropertyLenderUpdateRequestConfig

/**
 * 接口 [更新个人配置 不存在则创建↗](http://192.168.143.129:3001/project/11/interface/api/17063) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `PUT /api/config/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiConfigUserUpdateReq {
  id?: number
  /**
   * 归属用户ID
   */
  userId?: string
  /**
   * 配置内容
   */
  config?: string
  /**
   * 支付方式
   */
  payMethod?: string
  /**
   * 功能点
   */
  func?: string
  /**
   * 个人主题配置
   */
  theme?: string
  /**
   * 月限额设置
   */
  monthQuota?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新个人配置 不存在则创建↗](http://192.168.143.129:3001/project/11/interface/api/17063) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `PUT /api/config/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiConfigUserUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新个人配置 不存在则创建↗](http://192.168.143.129:3001/project/11/interface/api/17063) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `PUT /api/config/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiConfigUserUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/config/user/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新个人配置 不存在则创建↗](http://192.168.143.129:3001/project/11/interface/api/17063) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `PUT /api/config/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiConfigUserUpdateRequestConfig: ApiPutApiConfigUserUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/config/user/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiConfigUserUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新个人配置 不存在则创建',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17063',
    author: 11,
  },
}

/**
 * 接口 [更新个人配置 不存在则创建↗](http://192.168.143.129:3001/project/11/interface/api/17063) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `PUT /api/config/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiConfigUserUpdate = /*#__PURE__*/ (
  requestData: IApiConfigUserUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiConfigUserUpdateRes>(prepare(apiPutApiConfigUserUpdateRequestConfig, requestData), ...args)
}

apiPutApiConfigUserUpdate.requestConfig = apiPutApiConfigUserUpdateRequestConfig

/**
 * 接口 [更新账单↗](http://192.168.143.129:3001/project/11/interface/api/17072) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `PUT /api/bill/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillUpdateReq {
  /**
   * 账单id
   */
  id?: number
  /**
   * 关联用户
   */
  userId?: string
  /**
   * 账单名称
   */
  name?: string
  /**
   * 金额
   */
  amount?: {}
  /**
   * 是否是收入
   */
  isIncome?: number
  /**
   * 是否收藏
   */
  isCollect?: number
  /**
   * 地址
   */
  address?: string
  /**
   * 扩展信息JSON
   */
  expandInfo?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 订单号: 内部订单号, 外部订单号
   */
  orderNo?: string
  /**
   * 支付宝或微信订单交易ID
   */
  transactionId?: string
  /**
   * 支付方式
   */
  methodId?: number
  /**
   * 账单分类ID
   */
  billTypeId?: number
  /**
   * 账本ID
   */
  ledgerId?: number
  /**
   * 便捷操作时间 2020/02/20
   */
  dateStr?: string
  /**
   * 消费时间 2020/02/20
   */
  spendTime?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  img?: string
  repaymentId?: number
}

/**
 * 接口 [更新账单↗](http://192.168.143.129:3001/project/11/interface/api/17072) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `PUT /api/bill/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新账单↗](http://192.168.143.129:3001/project/11/interface/api/17072) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `PUT /api/bill/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiBillUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/update', undefined, string, string, false>
>

/**
 * 接口 [更新账单↗](http://192.168.143.129:3001/project/11/interface/api/17072) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `PUT /api/bill/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiBillUpdateRequestConfig: ApiPutApiBillUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiBillUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新账单',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17072',
    author: 11,
  },
}

/**
 * 接口 [更新账单↗](http://192.168.143.129:3001/project/11/interface/api/17072) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `PUT /api/bill/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiBillUpdate = /*#__PURE__*/ (requestData: IApiBillUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillUpdateRes>(prepare(apiPutApiBillUpdateRequestConfig, requestData), ...args)
}

apiPutApiBillUpdate.requestConfig = apiPutApiBillUpdateRequestConfig

/**
 * 接口 [更新账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17081) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `PUT /api/bill/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillTypeUpdateReq {
  /**
   * 分类id
   */
  id?: number
  pid?: number
  /**
   * 关联用户
   */
  userId?: string
  /**
   * 是否是支出, 1: 收入
   */
  isIncome?: number
  /**
   * 分类名称
   */
  label?: string
  /**
   * 分类图标icon
   */
  icon?: string
  /**
   * 分类颜色
   */
  color?: string
  /**
   * 是否显示
   */
  isShow?: number
  /**
   * 分类图标img
   */
  img?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17081) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `PUT /api/bill/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillTypeUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17081) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `PUT /api/bill/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiBillTypeUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/type/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17081) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `PUT /api/bill/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiBillTypeUpdateRequestConfig: ApiPutApiBillTypeUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/type/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiBillTypeUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新账单分类',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17081',
    author: 11,
  },
}

/**
 * 接口 [更新账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17081) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `PUT /api/bill/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiBillTypeUpdate = /*#__PURE__*/ (
  requestData: IApiBillTypeUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillTypeUpdateRes>(prepare(apiPutApiBillTypeUpdateRequestConfig, requestData), ...args)
}

apiPutApiBillTypeUpdate.requestConfig = apiPutApiBillTypeUpdateRequestConfig

/**
 * 接口 [更新支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17090) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `PUT /api/bill/method/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillMethodUpdateReq {
  /**
   * id
   */
  id?: number
  /**
   * 支付名称
   */
  label?: string
  /**
   * 支付图标icon
   */
  icon?: string
  /**
   * 支付颜色
   */
  color?: string
  /**
   * 支付图标img
   */
  img?: string
  /**
   * 分组1,2,3,4
   */
  type?: number
  /**
   * 1: 逻辑显示
   */
  isShow?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  code?: string
}

/**
 * 接口 [更新支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17090) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `PUT /api/bill/method/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillMethodUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17090) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `PUT /api/bill/method/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiBillMethodUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/method/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17090) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `PUT /api/bill/method/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiBillMethodUpdateRequestConfig: ApiPutApiBillMethodUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/method/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiBillMethodUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新支付方法',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17090',
    author: 11,
  },
}

/**
 * 接口 [更新支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17090) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `PUT /api/bill/method/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiBillMethodUpdate = /*#__PURE__*/ (
  requestData: IApiBillMethodUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillMethodUpdateRes>(prepare(apiPutApiBillMethodUpdateRequestConfig, requestData), ...args)
}

apiPutApiBillMethodUpdate.requestConfig = apiPutApiBillMethodUpdateRequestConfig

/**
 * 接口 [更新账本↗](http://192.168.143.129:3001/project/11/interface/api/17099) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `PUT /api/bill/ledger/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillLedgerUpdateReq {
  /**
   * 分类id
   */
  id?: number
  /**
   * 分类名称
   */
  label?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 分类描述
   */
  description?: string
  /**
   * 账本封面
   */
  cover?: string
  /**
   * 账本封面背景色
   */
  color?: string
}

/**
 * 接口 [更新账本↗](http://192.168.143.129:3001/project/11/interface/api/17099) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `PUT /api/bill/ledger/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBillLedgerUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新账本↗](http://192.168.143.129:3001/project/11/interface/api/17099) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `PUT /api/bill/ledger/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiBillLedgerUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/ledger/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新账本↗](http://192.168.143.129:3001/project/11/interface/api/17099) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `PUT /api/bill/ledger/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiBillLedgerUpdateRequestConfig: ApiPutApiBillLedgerUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/ledger/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiBillLedgerUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新账本',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17099',
    author: 11,
  },
}

/**
 * 接口 [更新账本↗](http://192.168.143.129:3001/project/11/interface/api/17099) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `PUT /api/bill/ledger/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiBillLedgerUpdate = /*#__PURE__*/ (
  requestData: IApiBillLedgerUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillLedgerUpdateRes>(prepare(apiPutApiBillLedgerUpdateRequestConfig, requestData), ...args)
}

apiPutApiBillLedgerUpdate.requestConfig = apiPutApiBillLedgerUpdateRequestConfig

/**
 * 接口 [更新用户信息↗](http://192.168.143.129:3001/project/11/interface/api/17117) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `PUT /admin/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminUserUpdateReq {
  userId?: string
  username?: string
  nickname?: string
  avatar?: string
  introduction?: string
  sex?: number
  integral?: number
  dataSource?: number
  createTime?: string
  updateTime?: string
  phone?: string
  phoneAes?: string
  email?: string
  emailAes?: string
  /**
   * 用户的 userId, 原userId保留字段为操作者使用
   */
  id?: string
  password?: string
  oldPassword?: string
  roleList?: number[]
}

/**
 * 接口 [更新用户信息↗](http://192.168.143.129:3001/project/11/interface/api/17117) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `PUT /admin/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminUserUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新用户信息↗](http://192.168.143.129:3001/project/11/interface/api/17117) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `PUT /admin/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminUserUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/update', undefined, string, string, false>
>

/**
 * 接口 [更新用户信息↗](http://192.168.143.129:3001/project/11/interface/api/17117) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `PUT /admin/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminUserUpdateRequestConfig: ApiPutAdminUserUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminUserUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新用户信息',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17117',
    author: 11,
  },
}

/**
 * 接口 [更新用户信息↗](http://192.168.143.129:3001/project/11/interface/api/17117) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `PUT /admin/user/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminUserUpdate = /*#__PURE__*/ (requestData: IAdminUserUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IAdminUserUpdateRes>(prepare(apiPutAdminUserUpdateRequestConfig, requestData), ...args)
}

apiPutAdminUserUpdate.requestConfig = apiPutAdminUserUpdateRequestConfig

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17126) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `PUT /admin/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminThemeUpdateReq {}

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17126) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `PUT /admin/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminThemeUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17126) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `PUT /admin/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminThemeUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/theme/update', undefined, string, string, true>
>

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17126) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `PUT /admin/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminThemeUpdateRequestConfig: ApiPutAdminThemeUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/theme/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminThemeUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17126',
    author: 11,
  },
}

/**
 * 接口 [更新主题↗](http://192.168.143.129:3001/project/11/interface/api/17126) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `PUT /admin/theme/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminThemeUpdate = /*#__PURE__*/ (
  requestData?: IAdminThemeUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminThemeUpdateRes>(prepare(apiPutAdminThemeUpdateRequestConfig, requestData), ...args)
}

apiPutAdminThemeUpdate.requestConfig = apiPutAdminThemeUpdateRequestConfig

/**
 * 接口 [更新角色↗](http://192.168.143.129:3001/project/11/interface/api/17135) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `PUT /admin/role/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminRoleUpdateReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  /**
   * 权限角色管理
   */
  data?: {
    /**
     * 权限角色I
     */
    id?: number
    /**
     * 角色名称
     */
    label?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
}

/**
 * 接口 [更新角色↗](http://192.168.143.129:3001/project/11/interface/api/17135) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `PUT /admin/role/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminRoleUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新角色↗](http://192.168.143.129:3001/project/11/interface/api/17135) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `PUT /admin/role/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminRoleUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/role/update', undefined, string, string, false>
>

/**
 * 接口 [更新角色↗](http://192.168.143.129:3001/project/11/interface/api/17135) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `PUT /admin/role/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminRoleUpdateRequestConfig: ApiPutAdminRoleUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/role/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminRoleUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新角色',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17135',
    author: 11,
  },
}

/**
 * 接口 [更新角色↗](http://192.168.143.129:3001/project/11/interface/api/17135) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `PUT /admin/role/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminRoleUpdate = /*#__PURE__*/ (requestData: IAdminRoleUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IAdminRoleUpdateRes>(prepare(apiPutAdminRoleUpdateRequestConfig, requestData), ...args)
}

apiPutAdminRoleUpdate.requestConfig = apiPutAdminRoleUpdateRequestConfig

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17144) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /admin/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminPublicPasswordReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  oldPassword?: string
  username?: string
  newPassword?: string
}

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17144) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /admin/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminPublicPasswordRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17144) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /admin/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminPublicPasswordRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/password',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17144) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /admin/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminPublicPasswordRequestConfig: ApiPutAdminPublicPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/password',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminPublicPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新密码',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17144',
    author: 11,
  },
}

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17144) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /admin/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminPublicPassword = /*#__PURE__*/ (
  requestData: IAdminPublicPasswordReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicPasswordRes>(prepare(apiPutAdminPublicPasswordRequestConfig, requestData), ...args)
}

apiPutAdminPublicPassword.requestConfig = apiPutAdminPublicPasswordRequestConfig

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17153) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /api/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiPublicPasswordReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  oldPassword?: string
  username?: string
  newPassword?: string
}

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17153) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /api/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiPublicPasswordRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17153) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /api/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiPublicPasswordRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/password', undefined, string, string, false>
>

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17153) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /api/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiPublicPasswordRequestConfig: ApiPutApiPublicPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/password',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiPublicPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新密码',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17153',
    author: 11,
  },
}

/**
 * 接口 [更新密码↗](http://192.168.143.129:3001/project/11/interface/api/17153) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `PUT /api/public/password`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiPublicPassword = /*#__PURE__*/ (
  requestData: IApiPublicPasswordReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicPasswordRes>(prepare(apiPutApiPublicPasswordRequestConfig, requestData), ...args)
}

apiPutApiPublicPassword.requestConfig = apiPutApiPublicPasswordRequestConfig

/**
 * 接口 [更新配置↗](http://192.168.143.129:3001/project/11/interface/api/17162) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `PUT /admin/public/config/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminPublicConfigUpdateReq {
  id?: number
  /**
   * 配置内容
   */
  config?: string
  /**
   * 配置名称
   */
  name?: string
  phone?: string
  email?: string
  code?: string
}

/**
 * 接口 [更新配置↗](http://192.168.143.129:3001/project/11/interface/api/17162) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `PUT /admin/public/config/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminPublicConfigUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新配置↗](http://192.168.143.129:3001/project/11/interface/api/17162) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `PUT /admin/public/config/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminPublicConfigUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/config/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新配置↗](http://192.168.143.129:3001/project/11/interface/api/17162) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `PUT /admin/public/config/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminPublicConfigUpdateRequestConfig: ApiPutAdminPublicConfigUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/config/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminPublicConfigUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新配置',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17162',
    author: 11,
  },
}

/**
 * 接口 [更新配置↗](http://192.168.143.129:3001/project/11/interface/api/17162) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `PUT /admin/public/config/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminPublicConfigUpdate = /*#__PURE__*/ (
  requestData: IAdminPublicConfigUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicConfigUpdateRes>(prepare(apiPutAdminPublicConfigUpdateRequestConfig, requestData), ...args)
}

apiPutAdminPublicConfigUpdate.requestConfig = apiPutAdminPublicConfigUpdateRequestConfig

/**
 * 接口 [更新权限↗](http://192.168.143.129:3001/project/11/interface/api/17171) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `PUT /admin/permission/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminPermissionUpdateReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  /**
   * 权限管理
   */
  data?: {
    /**
     * 权限ID
     */
    id?: number
    /**
     * 父权限ID
     */
    pid?: number
    /**
     * 重定向URL
     */
    redirect?: string
    /**
     * 路径
     */
    path?: string
    /**
     * 唯一标识
     */
    name?: string
    /**
     * 组件路径
     */
    component?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 权限类型
     */
    type?: number
    /**
     * 扩展数据
     */
    meta?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
}

/**
 * 接口 [更新权限↗](http://192.168.143.129:3001/project/11/interface/api/17171) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `PUT /admin/permission/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminPermissionUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新权限↗](http://192.168.143.129:3001/project/11/interface/api/17171) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `PUT /admin/permission/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminPermissionUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/permission/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新权限↗](http://192.168.143.129:3001/project/11/interface/api/17171) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `PUT /admin/permission/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminPermissionUpdateRequestConfig: ApiPutAdminPermissionUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/permission/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminPermissionUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新权限',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17171',
    author: 11,
  },
}

/**
 * 接口 [更新权限↗](http://192.168.143.129:3001/project/11/interface/api/17171) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `PUT /admin/permission/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminPermissionUpdate = /*#__PURE__*/ (
  requestData: IAdminPermissionUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPermissionUpdateRes>(prepare(apiPutAdminPermissionUpdateRequestConfig, requestData), ...args)
}

apiPutAdminPermissionUpdate.requestConfig = apiPutAdminPermissionUpdateRequestConfig

/**
 * 接口 [更新IP内容↗](http://192.168.143.129:3001/project/11/interface/api/17180) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `PUT /admin/ip/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminIpUpdateReq {
  /**
   * IP档案ID
   */
  id?: number
  /**
   * IP
   */
  ip?: string
  /**
   * 国家
   */
  country?: string
  /**
   * 省份
   */
  province?: string
  /**
   * 城市
   */
  city?: string
  /**
   * 运营商
   */
  isp?: string
  /**
   * 归属地完整描述
   */
  address?: string
  /**
   * 最近关联用户ID
   */
  userId?: string
  /**
   * 状态: 1正常 2异常 3黑名单
   */
  status?: string
  /**
   * 风险原因
   */
  riskReason?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 累计访问次数
   */
  accessCount?: number
  /**
   * 首次访问时间
   */
  firstAccessTime?: string
  /**
   * 最近访问时间
   */
  lastAccessTime?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新IP内容↗](http://192.168.143.129:3001/project/11/interface/api/17180) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `PUT /admin/ip/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminIpUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新IP内容↗](http://192.168.143.129:3001/project/11/interface/api/17180) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `PUT /admin/ip/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminIpUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/ip/update', undefined, string, string, false>
>

/**
 * 接口 [更新IP内容↗](http://192.168.143.129:3001/project/11/interface/api/17180) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `PUT /admin/ip/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminIpUpdateRequestConfig: ApiPutAdminIpUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/ip/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminIpUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新IP内容',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17180',
    author: 11,
  },
}

/**
 * 接口 [更新IP内容↗](http://192.168.143.129:3001/project/11/interface/api/17180) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `PUT /admin/ip/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminIpUpdate = /*#__PURE__*/ (requestData: IAdminIpUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IAdminIpUpdateRes>(prepare(apiPutAdminIpUpdateRequestConfig, requestData), ...args)
}

apiPutAdminIpUpdate.requestConfig = apiPutAdminIpUpdateRequestConfig

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17189) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /api/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBooksUpdateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 用户id
   */
  userId?: string
  /**
   * 书名
   */
  title?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17189) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /api/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBooksUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17189) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /api/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiBooksUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/books/update', undefined, string, string, false>
>

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17189) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /api/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiBooksUpdateRequestConfig: ApiPutApiBooksUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/books/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiBooksUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17189',
    author: 11,
  },
}

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17189) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /api/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiBooksUpdate = /*#__PURE__*/ (requestData: IApiBooksUpdateReq, ...args: UserRequestRestArgs) => {
  return request<IApiBooksUpdateRes>(prepare(apiPutApiBooksUpdateRequestConfig, requestData), ...args)
}

apiPutApiBooksUpdate.requestConfig = apiPutApiBooksUpdateRequestConfig

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17198) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /admin/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminBooksUpdateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 用户id
   */
  userId?: string
  /**
   * 书名
   */
  title?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17198) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /admin/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminBooksUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17198) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /admin/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminBooksUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/books/update', undefined, string, string, false>
>

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17198) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /admin/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminBooksUpdateRequestConfig: ApiPutAdminBooksUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/books/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminBooksUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17198',
    author: 11,
  },
}

/**
 * 接口 [更新书册↗](http://192.168.143.129:3001/project/11/interface/api/17198) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `PUT /admin/books/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminBooksUpdate = /*#__PURE__*/ (
  requestData: IAdminBooksUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBooksUpdateRes>(prepare(apiPutAdminBooksUpdateRequestConfig, requestData), ...args)
}

apiPutAdminBooksUpdate.requestConfig = apiPutAdminBooksUpdateRequestConfig

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17207) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /admin/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminBookCatalogUpdateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 书册id
   */
  bookId?: number
  /**
   * 文章id
   */
  articleId?: number
  /**
   * 父目录id
   */
  parentId?: number
  /**
   * 目录标题
   */
  title?: string
  /**
   * 目录描述
   */
  description?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17207) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /admin/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminBookCatalogUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17207) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /admin/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminBookCatalogUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/bookCatalog/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17207) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /admin/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminBookCatalogUpdateRequestConfig: ApiPutAdminBookCatalogUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/bookCatalog/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminBookCatalogUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新书册目录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17207',
    author: 11,
  },
}

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17207) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /admin/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminBookCatalogUpdate = /*#__PURE__*/ (
  requestData: IAdminBookCatalogUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBookCatalogUpdateRes>(prepare(apiPutAdminBookCatalogUpdateRequestConfig, requestData), ...args)
}

apiPutAdminBookCatalogUpdate.requestConfig = apiPutAdminBookCatalogUpdateRequestConfig

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17216) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /api/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBookCatalogUpdateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 书册id
   */
  bookId?: number
  /**
   * 文章id
   */
  articleId?: number
  /**
   * 父目录id
   */
  parentId?: number
  /**
   * 目录标题
   */
  title?: string
  /**
   * 目录描述
   */
  description?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17216) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /api/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiBookCatalogUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17216) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /api/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiBookCatalogUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bookCatalog/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17216) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /api/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiBookCatalogUpdateRequestConfig: ApiPutApiBookCatalogUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bookCatalog/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiBookCatalogUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新书册目录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17216',
    author: 11,
  },
}

/**
 * 接口 [更新书册目录↗](http://192.168.143.129:3001/project/11/interface/api/17216) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `PUT /api/bookCatalog/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiBookCatalogUpdate = /*#__PURE__*/ (
  requestData: IApiBookCatalogUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBookCatalogUpdateRes>(prepare(apiPutApiBookCatalogUpdateRequestConfig, requestData), ...args)
}

apiPutApiBookCatalogUpdate.requestConfig = apiPutApiBookCatalogUpdateRequestConfig

/**
 * 接口 [撤回软删除的账号的删除(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17252) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/undelete`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserUndeleteReq {}

/**
 * 接口 [撤回软删除的账号的删除(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17252) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/undelete`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserUndeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [撤回软删除的账号的删除(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17252) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/undelete`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPostApiUserUndeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/undelete', undefined, string, string, true>
>

/**
 * 接口 [撤回软删除的账号的删除(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17252) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/undelete`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPostApiUserUndeleteRequestConfig: ApiPostApiUserUndeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/undelete',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiUserUndelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '撤回软删除的账号的删除(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17252',
    author: 11,
  },
}

/**
 * 接口 [撤回软删除的账号的删除(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17252) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/undelete`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPostApiUserUndelete = /*#__PURE__*/ (
  requestData?: IApiUserUndeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiUserUndeleteRes>(prepare(apiPostApiUserUndeleteRequestConfig, requestData), ...args)
}

apiPostApiUserUndelete.requestConfig = apiPostApiUserUndeleteRequestConfig

/**
 * 接口 [合并账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17261) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/merge`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserMergeReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  password?: string
  username?: string
}

/**
 * 接口 [合并账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17261) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/merge`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserMergeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [合并账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17261) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/merge`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPostApiUserMergeRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/merge', undefined, string, string, false>
>

/**
 * 接口 [合并账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17261) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/merge`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPostApiUserMergeRequestConfig: ApiPostApiUserMergeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/merge',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiUserMerge',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '合并账号(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17261',
    author: 11,
  },
}

/**
 * 接口 [合并账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17261) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/merge`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPostApiUserMerge = /*#__PURE__*/ (requestData: IApiUserMergeReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserMergeRes>(prepare(apiPostApiUserMergeRequestConfig, requestData), ...args)
}

apiPostApiUserMerge.requestConfig = apiPostApiUserMergeRequestConfig

/**
 * 接口 [冻结账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17270) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/freeze`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserFreezeReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  password?: string
  username?: string
}

/**
 * 接口 [冻结账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17270) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/freeze`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiUserFreezeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [冻结账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17270) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/freeze`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPostApiUserFreezeRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/freeze', undefined, string, string, false>
>

/**
 * 接口 [冻结账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17270) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/freeze`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPostApiUserFreezeRequestConfig: ApiPostApiUserFreezeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/freeze',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiUserFreeze',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '冻结账号(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17270',
    author: 11,
  },
}

/**
 * 接口 [冻结账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/17270) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `POST /api/user/freeze`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPostApiUserFreeze = /*#__PURE__*/ (requestData: IApiUserFreezeReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserFreezeRes>(prepare(apiPostApiUserFreezeRequestConfig, requestData), ...args)
}

apiPostApiUserFreeze.requestConfig = apiPostApiUserFreezeRequestConfig

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17279) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `POST /api/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiThemeAddReq {
  /**
   * 主题id
   */
  id?: number
  /**
   * 主题名字
   */
  name?: string
  /**
   * 主题描述
   */
  description?: string
  /**
   * 主题内容
   */
  content?: string
  /**
   * 主题下载路径
   */
  url?: string
  /**
   * 所需积分
   */
  integral?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17279) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `POST /api/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiThemeAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17279) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `POST /api/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiThemeAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/theme/add', undefined, string, string, false>
>

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17279) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `POST /api/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiThemeAddRequestConfig: ApiPostApiThemeAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/theme/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiThemeAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17279',
    author: 11,
  },
}

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17279) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `POST /api/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiThemeAdd = /*#__PURE__*/ (requestData: IApiThemeAddReq, ...args: UserRequestRestArgs) => {
  return request<IApiThemeAddRes>(prepare(apiPostApiThemeAddRequestConfig, requestData), ...args)
}

apiPostApiThemeAdd.requestConfig = apiPostApiThemeAddRequestConfig

/**
 * 接口 [获取提醒列表↗](http://192.168.143.129:3001/project/11/interface/api/17288) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiReminderListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取提醒列表↗](http://192.168.143.129:3001/project/11/interface/api/17288) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiReminderListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      /**
       * 提醒标题
       */
      title?: string
      /**
       * 提醒内容
       */
      content?: string
      /**
       * 标签
       */
      tag?: string
      /**
       * 颜色
       */
      color?: string
      /**
       * 提醒类型
       */
      type?: number
      /**
       * 历法
       */
      yearType?: number
      /**
       * 提醒时间集合
       */
      times?: string
      /**
       * 循环提醒开始时间
       */
      startTime?: string
      /**
       * 循环间隔
       */
      timeStep?: number
      /**
       * 循环间隔单位
       */
      timeStepUnit?: number
      /**
       * 提醒方式
       */
      methods?: number
      /**
       * 是否开启
       */
      enable?: number
      /**
       * 提醒目标信息
       */
      mail?: string
      dd?: string
      openid?: string
      wxopenid?: string
      /**
       * 更新时间
       */
      updateTime?: string
      /**
       * 创建时间
       */
      createTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取提醒列表↗](http://192.168.143.129:3001/project/11/interface/api/17288) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiReminderListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/reminder/list', undefined, string, string, false>
>

/**
 * 接口 [获取提醒列表↗](http://192.168.143.129:3001/project/11/interface/api/17288) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiReminderListRequestConfig: ApiPostApiReminderListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/reminder/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiReminderList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取提醒列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17288',
    author: 11,
  },
}

/**
 * 接口 [获取提醒列表↗](http://192.168.143.129:3001/project/11/interface/api/17288) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiReminderList = /*#__PURE__*/ (
  requestData: IApiReminderListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiReminderListRes>(prepare(apiPostApiReminderListRequestConfig, requestData), ...args)
}

apiPostApiReminderList.requestConfig = apiPostApiReminderListRequestConfig

/**
 * 接口 [添加提醒↗](http://192.168.143.129:3001/project/11/interface/api/17297) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiReminderAddReq {
  id?: number
  /**
   * 提醒标题
   */
  title?: string
  /**
   * 提醒内容
   */
  content?: string
  /**
   * 标签
   */
  tag?: string
  /**
   * 颜色
   */
  color?: string
  /**
   * 提醒类型
   */
  type?: number
  /**
   * 历法
   */
  yearType?: number
  /**
   * 提醒时间集合
   */
  times?: string
  /**
   * 循环提醒开始时间
   */
  startTime?: string
  /**
   * 循环间隔
   */
  timeStep?: number
  /**
   * 循环间隔单位
   */
  timeStepUnit?: number
  /**
   * 提醒方式
   */
  methods?: number
  /**
   * 是否开启
   */
  enable?: number
  /**
   * 提醒目标信息
   */
  mail?: string
  dd?: string
  openid?: string
  wxopenid?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [添加提醒↗](http://192.168.143.129:3001/project/11/interface/api/17297) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiReminderAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加提醒↗](http://192.168.143.129:3001/project/11/interface/api/17297) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiReminderAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/reminder/add', undefined, string, string, false>
>

/**
 * 接口 [添加提醒↗](http://192.168.143.129:3001/project/11/interface/api/17297) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiReminderAddRequestConfig: ApiPostApiReminderAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/reminder/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiReminderAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加提醒',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17297',
    author: 11,
  },
}

/**
 * 接口 [添加提醒↗](http://192.168.143.129:3001/project/11/interface/api/17297) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `POST /api/reminder/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiReminderAdd = /*#__PURE__*/ (requestData: IApiReminderAddReq, ...args: UserRequestRestArgs) => {
  return request<IApiReminderAddRes>(prepare(apiPostApiReminderAddRequestConfig, requestData), ...args)
}

apiPostApiReminderAdd.requestConfig = apiPostApiReminderAddRequestConfig

/**
 * 接口 [获取还款记录↗](http://192.168.143.129:3001/project/11/interface/api/17306) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `POST /api/property/repayment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyRepaymentAddReq {
  id?: number
  /**
   * 贷款机构ID
   */
  loanId?: number
  /**
   * 关联billID
   */
  billId?: number
  /**
   * 还款记录名称
   */
  name?: string
  /**
   * 还款金额
   */
  amount?: number
  /**
   * 还款本金
   */
  principal?: number
  /**
   * 还款期数
   */
  no?: number
  /**
   * 还款日期
   */
  repaymentTime?: string
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [获取还款记录↗](http://192.168.143.129:3001/project/11/interface/api/17306) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `POST /api/property/repayment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyRepaymentAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取还款记录↗](http://192.168.143.129:3001/project/11/interface/api/17306) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `POST /api/property/repayment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPropertyRepaymentAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/repayment/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取还款记录↗](http://192.168.143.129:3001/project/11/interface/api/17306) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `POST /api/property/repayment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPropertyRepaymentAddRequestConfig: ApiPostApiPropertyRepaymentAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/repayment/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPropertyRepaymentAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取还款记录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17306',
    author: 11,
  },
}

/**
 * 接口 [获取还款记录↗](http://192.168.143.129:3001/project/11/interface/api/17306) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `POST /api/property/repayment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPropertyRepaymentAdd = /*#__PURE__*/ (
  requestData: IApiPropertyRepaymentAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyRepaymentAddRes>(
    prepare(apiPostApiPropertyRepaymentAddRequestConfig, requestData),
    ...args,
  )
}

apiPostApiPropertyRepaymentAdd.requestConfig = apiPostApiPropertyRepaymentAddRequestConfig

/**
 * 接口 [添加贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17315) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `POST /api/property/loan/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLoanAddReq {
  id?: number
  /**
   * 贷款机构ID
   */
  lenderId?: number
  /**
   * 带看记录名称
   */
  name?: string
  /**
   * 贷款金额
   */
  amount?: number
  /**
   * 贷款利率
   */
  lendingRate?: number
  /**
   * 贷款期数
   */
  count?: number
  /**
   * 贷款方式(1: 等额本息, 2: 等额本金)
   */
  lendingType?: number
  /**
   * 还款日
   */
  repaymentDay?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 还款类型: 1:还款日, 2: 出账日后
   */
  repaymentType?: number
  /**
   * 剩余待还本金
   */
  principal?: number
}

/**
 * 接口 [添加贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17315) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `POST /api/property/loan/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLoanAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17315) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `POST /api/property/loan/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPropertyLoanAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/loan/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [添加贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17315) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `POST /api/property/loan/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPropertyLoanAddRequestConfig: ApiPostApiPropertyLoanAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/loan/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPropertyLoanAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加贷款记录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17315',
    author: 11,
  },
}

/**
 * 接口 [添加贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/17315) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `POST /api/property/loan/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPropertyLoanAdd = /*#__PURE__*/ (
  requestData: IApiPropertyLoanAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLoanAddRes>(prepare(apiPostApiPropertyLoanAddRequestConfig, requestData), ...args)
}

apiPostApiPropertyLoanAdd.requestConfig = apiPostApiPropertyLoanAddRequestConfig

/**
 * 接口 [获取贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17324) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `POST /api/property/lender/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLenderAddReq {
  id?: number
  /**
   * 贷款关联用户
   */
  userId?: string
  /**
   * 贷款机构名称
   */
  name?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [获取贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17324) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `POST /api/property/lender/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLenderAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17324) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `POST /api/property/lender/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPropertyLenderAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/lender/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17324) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `POST /api/property/lender/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPropertyLenderAddRequestConfig: ApiPostApiPropertyLenderAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/lender/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPropertyLenderAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取贷款结构',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17324',
    author: 11,
  },
}

/**
 * 接口 [获取贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/17324) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `POST /api/property/lender/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPropertyLenderAdd = /*#__PURE__*/ (
  requestData: IApiPropertyLenderAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLenderAddRes>(prepare(apiPostApiPropertyLenderAddRequestConfig, requestData), ...args)
}

apiPostApiPropertyLenderAdd.requestConfig = apiPostApiPropertyLenderAddRequestConfig

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17333) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiNotifyListReq {
  page?: string
  size?: string
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17333) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiNotifyListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      /**
       * 通知用户ID
       */
      userId?: string
      /**
       * 通知标题
       */
      title?: string
      /**
       * 通知内容
       */
      content?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 图标
       */
      icon?: string
      /**
       * 通知类型
       */
      type?: number
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17333) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiNotifyListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/notify/list',
    undefined,
    string,
    'page' | 'size',
    false
  >
>

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17333) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiNotifyListRequestConfig: ApiGetApiNotifyListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/notify/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['page', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiNotifyList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取通知列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17333',
    author: 11,
  },
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17333) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiNotifyList = /*#__PURE__*/ (requestData: IApiNotifyListReq, ...args: UserRequestRestArgs) => {
  return request<IApiNotifyListRes>(prepare(apiGetApiNotifyListRequestConfig, requestData), ...args)
}

apiGetApiNotifyList.requestConfig = apiGetApiNotifyListRequestConfig

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17342) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `POST /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiNotifyListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17342) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `POST /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiNotifyListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      /**
       * 通知用户ID
       */
      userId?: string
      /**
       * 通知标题
       */
      title?: string
      /**
       * 通知内容
       */
      content?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 图标
       */
      icon?: string
      /**
       * 通知类型
       */
      type?: number
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17342) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `POST /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiNotifyListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/notify/list', undefined, string, string, false>
>

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17342) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `POST /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiNotifyListRequestConfig: ApiPostApiNotifyListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/notify/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiNotifyList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取通知列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17342',
    author: 11,
  },
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17342) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `POST /api/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiNotifyList = /*#__PURE__*/ (requestData: IApiNotifyListReq, ...args: UserRequestRestArgs) => {
  return request<IApiNotifyListRes>(prepare(apiPostApiNotifyListRequestConfig, requestData), ...args)
}

apiPostApiNotifyList.requestConfig = apiPostApiNotifyListRequestConfig

/**
 * 接口 [合并账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17351) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/merge`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeMergeReq {
  id?: number
  list?: number[]
}

/**
 * 接口 [合并账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17351) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/merge`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeMergeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [合并账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17351) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/merge`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillTypeMergeRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/type/merge', undefined, string, string, false>
>

/**
 * 接口 [合并账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17351) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/merge`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillTypeMergeRequestConfig: ApiPostApiBillTypeMergeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/type/merge',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillTypeMerge',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '合并账单分类',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17351',
    author: 11,
  },
}

/**
 * 接口 [合并账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17351) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/merge`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillTypeMerge = /*#__PURE__*/ (
  requestData: IApiBillTypeMergeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillTypeMergeRes>(prepare(apiPostApiBillTypeMergeRequestConfig, requestData), ...args)
}

apiPostApiBillTypeMerge.requestConfig = apiPostApiBillTypeMergeRequestConfig

/**
 * 接口 [添加账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17360) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeAddReq {
  /**
   * 分类id
   */
  id?: number
  pid?: number
  /**
   * 关联用户
   */
  userId?: string
  /**
   * 是否是支出, 1: 收入
   */
  isIncome?: number
  /**
   * 分类名称
   */
  label?: string
  /**
   * 分类图标icon
   */
  icon?: string
  /**
   * 分类颜色
   */
  color?: string
  /**
   * 是否显示
   */
  isShow?: number
  /**
   * 分类图标img
   */
  img?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [添加账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17360) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17360) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillTypeAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/type/add', undefined, string, string, false>
>

/**
 * 接口 [添加账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17360) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillTypeAddRequestConfig: ApiPostApiBillTypeAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/type/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillTypeAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加账单分类',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17360',
    author: 11,
  },
}

/**
 * 接口 [添加账单分类↗](http://192.168.143.129:3001/project/11/interface/api/17360) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillTypeAdd = /*#__PURE__*/ (requestData: IApiBillTypeAddReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillTypeAddRes>(prepare(apiPostApiBillTypeAddRequestConfig, requestData), ...args)
}

apiPostApiBillTypeAdd.requestConfig = apiPostApiBillTypeAddRequestConfig

/**
 * 接口 [添加账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/17369) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeAddListReq {
  id?: number
  list?: {
    /**
     * 分类id
     */
    id?: number
    pid?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 是否是支出, 1: 收入
     */
    isIncome?: number
    /**
     * 分类名称
     */
    label?: string
    /**
     * 分类图标icon
     */
    icon?: string
    /**
     * 分类颜色
     */
    color?: string
    /**
     * 是否显示
     */
    isShow?: number
    /**
     * 分类图标img
     */
    img?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
}

/**
 * 接口 [添加账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/17369) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeAddListRes {
  code?: number
  data?: {
    /**
     * 分类id
     */
    id?: number
    pid?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 是否是支出, 1: 收入
     */
    isIncome?: number
    /**
     * 分类名称
     */
    label?: string
    /**
     * 分类图标icon
     */
    icon?: string
    /**
     * 分类颜色
     */
    color?: string
    /**
     * 是否显示
     */
    isShow?: number
    /**
     * 分类图标img
     */
    img?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [添加账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/17369) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillTypeAddListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/type/addList',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [添加账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/17369) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillTypeAddListRequestConfig: ApiPostApiBillTypeAddListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/type/addList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillTypeAddList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加账单分类列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17369',
    author: 11,
  },
}

/**
 * 接口 [添加账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/17369) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `POST /api/bill/type/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillTypeAddList = /*#__PURE__*/ (
  requestData: IApiBillTypeAddListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillTypeAddListRes>(prepare(apiPostApiBillTypeAddListRequestConfig, requestData), ...args)
}

apiPostApiBillTypeAddList.requestConfig = apiPostApiBillTypeAddListRequestConfig

/**
 * 接口 [添加支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17378) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `POST /api/bill/method/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillMethodAddReq {
  /**
   * id
   */
  id?: number
  /**
   * 支付名称
   */
  label?: string
  /**
   * 支付图标icon
   */
  icon?: string
  /**
   * 支付颜色
   */
  color?: string
  /**
   * 支付图标img
   */
  img?: string
  /**
   * 分组1,2,3,4
   */
  type?: number
  /**
   * 1: 逻辑显示
   */
  isShow?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  code?: string
}

/**
 * 接口 [添加支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17378) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `POST /api/bill/method/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillMethodAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17378) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `POST /api/bill/method/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillMethodAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/method/add', undefined, string, string, false>
>

/**
 * 接口 [添加支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17378) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `POST /api/bill/method/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillMethodAddRequestConfig: ApiPostApiBillMethodAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/method/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillMethodAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加支付方法',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17378',
    author: 11,
  },
}

/**
 * 接口 [添加支付方法↗](http://192.168.143.129:3001/project/11/interface/api/17378) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `POST /api/bill/method/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillMethodAdd = /*#__PURE__*/ (
  requestData: IApiBillMethodAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillMethodAddRes>(prepare(apiPostApiBillMethodAddRequestConfig, requestData), ...args)
}

apiPostApiBillMethodAdd.requestConfig = apiPostApiBillMethodAddRequestConfig

/**
 * 接口 [获取账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17387) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillListReq {
  startTime?: string
  endTime?: string
  minAmount?: number
  maxAmount?: number
  billTypeId?: number
  billTypeIdList?: number[]
  methodId?: number
  ledgerId?: number
  isIncome?: number
  keyword?: string
  code?: string
  page?: number
  size?: number
  skip?: number
  id?: number
}

/**
 * 接口 [获取账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17387) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillListRes {
  code?: number
  data?: {
    id?: number
    billTypeId?: number
    methodId?: number
    ledgerId?: number
    amount?: number
    dateStr?: string
    name?: string
    remark?: string
    address?: string
    isIncome?: number
    isCollect?: number
    updateTime?: string
    spendTime?: string
    createTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17387) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/list', undefined, string, string, false>
>

/**
 * 接口 [获取账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17387) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillListRequestConfig: ApiPostApiBillListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账单列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17387',
    author: 11,
  },
}

/**
 * 接口 [获取账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17387) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillList = /*#__PURE__*/ (requestData: IApiBillListReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillListRes>(prepare(apiPostApiBillListRequestConfig, requestData), ...args)
}

apiPostApiBillList.requestConfig = apiPostApiBillListRequestConfig

/**
 * 接口 [获取账单ID列表↗](http://192.168.143.129:3001/project/11/interface/api/17396) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list/id`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillListIdReq {
  startTime?: string
  endTime?: string
  minAmount?: number
  maxAmount?: number
  billTypeId?: number
  billTypeIdList?: number[]
  methodId?: number
  ledgerId?: number
  isIncome?: number
  keyword?: string
  code?: string
  page?: number
  size?: number
  skip?: number
  id?: number
}

/**
 * 接口 [获取账单ID列表↗](http://192.168.143.129:3001/project/11/interface/api/17396) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list/id`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillListIdRes {
  code?: number
  data?: number[]
  msg?: string
}

/**
 * 接口 [获取账单ID列表↗](http://192.168.143.129:3001/project/11/interface/api/17396) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list/id`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillListIdRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/list/id', undefined, string, string, false>
>

/**
 * 接口 [获取账单ID列表↗](http://192.168.143.129:3001/project/11/interface/api/17396) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list/id`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillListIdRequestConfig: ApiPostApiBillListIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/list/id',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillListId',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账单ID列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17396',
    author: 11,
  },
}

/**
 * 接口 [获取账单ID列表↗](http://192.168.143.129:3001/project/11/interface/api/17396) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/list/id`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillListId = /*#__PURE__*/ (requestData: IApiBillListIdReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillListIdRes>(prepare(apiPostApiBillListIdRequestConfig, requestData), ...args)
}

apiPostApiBillListId.requestConfig = apiPostApiBillListIdRequestConfig

/**
 * 接口 [获取账本↗](http://192.168.143.129:3001/project/11/interface/api/17405) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `POST /api/bill/ledger/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillLedgerAddReq {
  /**
   * 分类id
   */
  id?: number
  /**
   * 分类名称
   */
  label?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 分类描述
   */
  description?: string
  /**
   * 账本封面
   */
  cover?: string
  /**
   * 账本封面背景色
   */
  color?: string
}

/**
 * 接口 [获取账本↗](http://192.168.143.129:3001/project/11/interface/api/17405) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `POST /api/bill/ledger/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillLedgerAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取账本↗](http://192.168.143.129:3001/project/11/interface/api/17405) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `POST /api/bill/ledger/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillLedgerAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/ledger/add', undefined, string, string, false>
>

/**
 * 接口 [获取账本↗](http://192.168.143.129:3001/project/11/interface/api/17405) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `POST /api/bill/ledger/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillLedgerAddRequestConfig: ApiPostApiBillLedgerAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/ledger/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillLedgerAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账本',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17405',
    author: 11,
  },
}

/**
 * 接口 [获取账本↗](http://192.168.143.129:3001/project/11/interface/api/17405) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `POST /api/bill/ledger/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillLedgerAdd = /*#__PURE__*/ (
  requestData: IApiBillLedgerAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillLedgerAddRes>(prepare(apiPostApiBillLedgerAddRequestConfig, requestData), ...args)
}

apiPostApiBillLedgerAdd.requestConfig = apiPostApiBillLedgerAddRequestConfig

/**
 * 接口 [收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/17414) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillCollectReq {
  startTime?: string
  endTime?: string
  minAmount?: number
  maxAmount?: number
  billTypeId?: number
  billTypeIdList?: number[]
  methodId?: number
  ledgerId?: number
  isIncome?: number
  keyword?: string
  code?: string
  page?: number
  size?: number
  skip?: number
  id?: number
}

/**
 * 接口 [收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/17414) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillCollectRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/17414) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillCollectRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/collect', undefined, string, string, false>
>

/**
 * 接口 [收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/17414) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillCollectRequestConfig: ApiPostApiBillCollectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/collect',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillCollect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '收藏账单',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17414',
    author: 11,
  },
}

/**
 * 接口 [收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/17414) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillCollect = /*#__PURE__*/ (requestData: IApiBillCollectReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillCollectRes>(prepare(apiPostApiBillCollectRequestConfig, requestData), ...args)
}

apiPostApiBillCollect.requestConfig = apiPostApiBillCollectRequestConfig

/**
 * 接口 [添加账单↗](http://192.168.143.129:3001/project/11/interface/api/17423) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillAddReq {
  /**
   * 账单id
   */
  id?: number
  /**
   * 关联用户
   */
  userId?: string
  /**
   * 账单名称
   */
  name?: string
  /**
   * 金额
   */
  amount?: {}
  /**
   * 是否是收入
   */
  isIncome?: number
  /**
   * 是否收藏
   */
  isCollect?: number
  /**
   * 地址
   */
  address?: string
  /**
   * 扩展信息JSON
   */
  expandInfo?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 订单号: 内部订单号, 外部订单号
   */
  orderNo?: string
  /**
   * 支付宝或微信订单交易ID
   */
  transactionId?: string
  /**
   * 支付方式
   */
  methodId?: number
  /**
   * 账单分类ID
   */
  billTypeId?: number
  /**
   * 账本ID
   */
  ledgerId?: number
  /**
   * 便捷操作时间 2020/02/20
   */
  dateStr?: string
  /**
   * 消费时间 2020/02/20
   */
  spendTime?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  img?: string
  repaymentId?: number
}

/**
 * 接口 [添加账单↗](http://192.168.143.129:3001/project/11/interface/api/17423) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillAddRes {
  code?: number
  /**
   * 账单
   */
  data?: {
    /**
     * 账单id
     */
    id?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 账单名称
     */
    name?: string
    /**
     * 金额
     */
    amount?: {}
    /**
     * 是否是收入
     */
    isIncome?: number
    /**
     * 是否收藏
     */
    isCollect?: number
    /**
     * 地址
     */
    address?: string
    /**
     * 扩展信息JSON
     */
    expandInfo?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 订单号: 内部订单号, 外部订单号
     */
    orderNo?: string
    /**
     * 支付宝或微信订单交易ID
     */
    transactionId?: string
    /**
     * 支付方式
     */
    methodId?: number
    /**
     * 账单分类ID
     */
    billTypeId?: number
    /**
     * 账本ID
     */
    ledgerId?: number
    /**
     * 便捷操作时间 2020/02/20
     */
    dateStr?: string
    /**
     * 消费时间 2020/02/20
     */
    spendTime?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    img?: string
    repaymentId?: number
  }
  msg?: string
}

/**
 * 接口 [添加账单↗](http://192.168.143.129:3001/project/11/interface/api/17423) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/add', undefined, string, string, false>
>

/**
 * 接口 [添加账单↗](http://192.168.143.129:3001/project/11/interface/api/17423) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillAddRequestConfig: ApiPostApiBillAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加账单',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17423',
    author: 11,
  },
}

/**
 * 接口 [添加账单↗](http://192.168.143.129:3001/project/11/interface/api/17423) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillAdd = /*#__PURE__*/ (requestData: IApiBillAddReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillAddRes>(prepare(apiPostApiBillAddRequestConfig, requestData), ...args)
}

apiPostApiBillAdd.requestConfig = apiPostApiBillAddRequestConfig

/**
 * 接口 [添加账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17432) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillAddListReq {
  id?: number
  list?: {
    /**
     * 账单id
     */
    id?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 账单名称
     */
    name?: string
    /**
     * 金额
     */
    amount?: {}
    /**
     * 是否是收入
     */
    isIncome?: number
    /**
     * 是否收藏
     */
    isCollect?: number
    /**
     * 地址
     */
    address?: string
    /**
     * 扩展信息JSON
     */
    expandInfo?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 订单号: 内部订单号, 外部订单号
     */
    orderNo?: string
    /**
     * 支付宝或微信订单交易ID
     */
    transactionId?: string
    /**
     * 支付方式
     */
    methodId?: number
    /**
     * 账单分类ID
     */
    billTypeId?: number
    /**
     * 账本ID
     */
    ledgerId?: number
    /**
     * 便捷操作时间 2020/02/20
     */
    dateStr?: string
    /**
     * 消费时间 2020/02/20
     */
    spendTime?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    img?: string
    repaymentId?: number
  }[]
}

/**
 * 接口 [添加账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17432) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillAddListRes {
  code?: number
  data?: {
    /**
     * 账单id
     */
    id?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 账单名称
     */
    name?: string
    /**
     * 金额
     */
    amount?: {}
    /**
     * 是否是收入
     */
    isIncome?: number
    /**
     * 是否收藏
     */
    isCollect?: number
    /**
     * 地址
     */
    address?: string
    /**
     * 扩展信息JSON
     */
    expandInfo?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 订单号: 内部订单号, 外部订单号
     */
    orderNo?: string
    /**
     * 支付宝或微信订单交易ID
     */
    transactionId?: string
    /**
     * 支付方式
     */
    methodId?: number
    /**
     * 账单分类ID
     */
    billTypeId?: number
    /**
     * 账本ID
     */
    ledgerId?: number
    /**
     * 便捷操作时间 2020/02/20
     */
    dateStr?: string
    /**
     * 消费时间 2020/02/20
     */
    spendTime?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    img?: string
    repaymentId?: number
  }[]
  msg?: string
}

/**
 * 接口 [添加账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17432) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBillAddListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/addList', undefined, string, string, false>
>

/**
 * 接口 [添加账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17432) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBillAddListRequestConfig: ApiPostApiBillAddListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/addList',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBillAddList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加账单列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17432',
    author: 11,
  },
}

/**
 * 接口 [添加账单列表↗](http://192.168.143.129:3001/project/11/interface/api/17432) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `POST /api/bill/addList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBillAddList = /*#__PURE__*/ (requestData: IApiBillAddListReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillAddListRes>(prepare(apiPostApiBillAddListRequestConfig, requestData), ...args)
}

apiPostApiBillAddList.requestConfig = apiPostApiBillAddListRequestConfig

/**
 * 接口 [用户登录↗](http://192.168.143.129:3001/project/11/interface/api/17486) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserLoginReq {
  type?: number
  username?: string
  password?: string
  phone?: string
  email?: string
  key?: string
  code?: string
  nickname?: string
  imei?: string
}

/**
 * 接口 [用户登录↗](http://192.168.143.129:3001/project/11/interface/api/17486) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserLoginRes {
  code?: number
  data?: {
    data?: {
      username?: string
      nickname?: string
      avatar?: string
      introduction?: string
      sex?: number
      integral?: number
      dataSource?: number
      createTime?: string
      updateTime?: string
      phone?: string
      phoneAes?: string
      email?: string
      emailAes?: string
    }
    token?: string
  }
  msg?: string
}

/**
 * 接口 [用户登录↗](http://192.168.143.129:3001/project/11/interface/api/17486) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminUserLoginRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/login', undefined, string, string, false>
>

/**
 * 接口 [用户登录↗](http://192.168.143.129:3001/project/11/interface/api/17486) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminUserLoginRequestConfig: ApiPostAdminUserLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminUserLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '用户登录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17486',
    author: 11,
  },
}

/**
 * 接口 [用户登录↗](http://192.168.143.129:3001/project/11/interface/api/17486) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminUserLogin = /*#__PURE__*/ (requestData: IAdminUserLoginReq, ...args: UserRequestRestArgs) => {
  return request<IAdminUserLoginRes>(prepare(apiPostAdminUserLoginRequestConfig, requestData), ...args)
}

apiPostAdminUserLogin.requestConfig = apiPostAdminUserLoginRequestConfig

/**
 * 接口 [用户列表↗](http://192.168.143.129:3001/project/11/interface/api/17495) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [用户列表↗](http://192.168.143.129:3001/project/11/interface/api/17495) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      userId?: string
      /**
       * 被操作用户的 真实userId, 原userId保留字段为操作者使用
       */
      id?: string
      username?: string
      nickname?: string
      avatar?: string
      introduction?: string
      sex?: number
      integral?: number
      dataSource?: number
      isFreeze?: number
      roleList?: string[]
      phoneAes?: string
      emailAes?: string
      createTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [用户列表↗](http://192.168.143.129:3001/project/11/interface/api/17495) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminUserListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/list', undefined, string, string, false>
>

/**
 * 接口 [用户列表↗](http://192.168.143.129:3001/project/11/interface/api/17495) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminUserListRequestConfig: ApiPostAdminUserListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminUserList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '用户列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17495',
    author: 11,
  },
}

/**
 * 接口 [用户列表↗](http://192.168.143.129:3001/project/11/interface/api/17495) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminUserList = /*#__PURE__*/ (requestData: IAdminUserListReq, ...args: UserRequestRestArgs) => {
  return request<IAdminUserListRes>(prepare(apiPostAdminUserListRequestConfig, requestData), ...args)
}

apiPostAdminUserList.requestConfig = apiPostAdminUserListRequestConfig

/**
 * 接口 [新增用户↗](http://192.168.143.129:3001/project/11/interface/api/17504) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserAddReq {
  userId?: string
  username?: string
  nickname?: string
  avatar?: string
  introduction?: string
  sex?: number
  integral?: number
  dataSource?: number
  createTime?: string
  updateTime?: string
  phone?: string
  phoneAes?: string
  email?: string
  emailAes?: string
  /**
   * 用户的 userId, 原userId保留字段为操作者使用
   */
  id?: string
  password?: string
  oldPassword?: string
  roleList?: number[]
}

/**
 * 接口 [新增用户↗](http://192.168.143.129:3001/project/11/interface/api/17504) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserAddRes {
  code?: number
  data?: {
    username?: string
    password?: string
    phone?: string
    email?: string
  }
  msg?: string
}

/**
 * 接口 [新增用户↗](http://192.168.143.129:3001/project/11/interface/api/17504) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminUserAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/add', undefined, string, string, false>
>

/**
 * 接口 [新增用户↗](http://192.168.143.129:3001/project/11/interface/api/17504) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminUserAddRequestConfig: ApiPostAdminUserAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminUserAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '新增用户',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17504',
    author: 11,
  },
}

/**
 * 接口 [新增用户↗](http://192.168.143.129:3001/project/11/interface/api/17504) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `POST /admin/user/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminUserAdd = /*#__PURE__*/ (requestData: IAdminUserAddReq, ...args: UserRequestRestArgs) => {
  return request<IAdminUserAddRes>(prepare(apiPostAdminUserAddRequestConfig, requestData), ...args)
}

apiPostAdminUserAdd.requestConfig = apiPostAdminUserAddRequestConfig

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17513) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `POST /admin/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminThemeAddReq {}

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17513) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `POST /admin/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminThemeAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17513) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `POST /admin/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminThemeAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/theme/add', undefined, string, string, true>
>

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17513) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `POST /admin/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminThemeAddRequestConfig: ApiPostAdminThemeAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/theme/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminThemeAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17513',
    author: 11,
  },
}

/**
 * 接口 [添加主题↗](http://192.168.143.129:3001/project/11/interface/api/17513) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `POST /admin/theme/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminThemeAdd = /*#__PURE__*/ (requestData?: IAdminThemeAddReq, ...args: UserRequestRestArgs) => {
  return request<IAdminThemeAddRes>(prepare(apiPostAdminThemeAddRequestConfig, requestData), ...args)
}

apiPostAdminThemeAdd.requestConfig = apiPostAdminThemeAddRequestConfig

/**
 * 接口 [获取角色列表↗](http://192.168.143.129:3001/project/11/interface/api/17522) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取角色列表↗](http://192.168.143.129:3001/project/11/interface/api/17522) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * 权限角色I
       */
      id?: number
      /**
       * 角色名称
       */
      label?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取角色列表↗](http://192.168.143.129:3001/project/11/interface/api/17522) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminRoleListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/role/list', undefined, string, string, false>
>

/**
 * 接口 [获取角色列表↗](http://192.168.143.129:3001/project/11/interface/api/17522) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminRoleListRequestConfig: ApiPostAdminRoleListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/role/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminRoleList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取角色列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17522',
    author: 11,
  },
}

/**
 * 接口 [获取角色列表↗](http://192.168.143.129:3001/project/11/interface/api/17522) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminRoleList = /*#__PURE__*/ (requestData: IAdminRoleListReq, ...args: UserRequestRestArgs) => {
  return request<IAdminRoleListRes>(prepare(apiPostAdminRoleListRequestConfig, requestData), ...args)
}

apiPostAdminRoleList.requestConfig = apiPostAdminRoleListRequestConfig

/**
 * 接口 [给用户绑定角色↗](http://192.168.143.129:3001/project/11/interface/api/17531) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleBindReq {
  ridList?: number[]
  pidList?: number[]
  /**
   * 被操作用户的 真实userId, 原userId保留字段为操作者使用
   */
  id?: string
}

/**
 * 接口 [给用户绑定角色↗](http://192.168.143.129:3001/project/11/interface/api/17531) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleBindRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [给用户绑定角色↗](http://192.168.143.129:3001/project/11/interface/api/17531) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminRoleBindRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/role/bind', undefined, string, string, false>
>

/**
 * 接口 [给用户绑定角色↗](http://192.168.143.129:3001/project/11/interface/api/17531) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminRoleBindRequestConfig: ApiPostAdminRoleBindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/role/bind',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminRoleBind',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '给用户绑定角色',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17531',
    author: 11,
  },
}

/**
 * 接口 [给用户绑定角色↗](http://192.168.143.129:3001/project/11/interface/api/17531) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminRoleBind = /*#__PURE__*/ (requestData: IAdminRoleBindReq, ...args: UserRequestRestArgs) => {
  return request<IAdminRoleBindRes>(prepare(apiPostAdminRoleBindRequestConfig, requestData), ...args)
}

apiPostAdminRoleBind.requestConfig = apiPostAdminRoleBindRequestConfig

/**
 * 接口 [添加角色↗](http://192.168.143.129:3001/project/11/interface/api/17540) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleAddReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  /**
   * 权限角色管理
   */
  data?: {
    /**
     * 权限角色I
     */
    id?: number
    /**
     * 角色名称
     */
    label?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
}

/**
 * 接口 [添加角色↗](http://192.168.143.129:3001/project/11/interface/api/17540) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加角色↗](http://192.168.143.129:3001/project/11/interface/api/17540) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminRoleAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/role/add', undefined, string, string, false>
>

/**
 * 接口 [添加角色↗](http://192.168.143.129:3001/project/11/interface/api/17540) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminRoleAddRequestConfig: ApiPostAdminRoleAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/role/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminRoleAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加角色',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17540',
    author: 11,
  },
}

/**
 * 接口 [添加角色↗](http://192.168.143.129:3001/project/11/interface/api/17540) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `POST /admin/role/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminRoleAdd = /*#__PURE__*/ (requestData: IAdminRoleAddReq, ...args: UserRequestRestArgs) => {
  return request<IAdminRoleAddRes>(prepare(apiPostAdminRoleAddRequestConfig, requestData), ...args)
}

apiPostAdminRoleAdd.requestConfig = apiPostAdminRoleAddRequestConfig

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17549) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicUploadFilesReq {
  files: string
}

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17549) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicUploadFilesRes {
  code?: number
  data?: {
    key?: string
    url?: string
    domain?: string
    errMsg?: string
  }[]
  msg?: string
}

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17549) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicUploadFilesRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/uploadFiles',
    undefined,
    string,
    'files',
    false
  >
>

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17549) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicUploadFilesRequestConfig: ApiPostAdminPublicUploadFilesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/uploadFiles',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['files'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicUploadFiles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上传多个文件',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17549',
    author: 11,
  },
}

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17549) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicUploadFiles = /*#__PURE__*/ (
  requestData: IAdminPublicUploadFilesReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicUploadFilesRes>(prepare(apiPostAdminPublicUploadFilesRequestConfig, requestData), ...args)
}

apiPostAdminPublicUploadFiles.requestConfig = apiPostAdminPublicUploadFilesRequestConfig

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17558) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicUploadFilesReq {
  files: string
}

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17558) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicUploadFilesRes {
  code?: number
  data?: {
    key?: string
    url?: string
    domain?: string
    errMsg?: string
  }[]
  msg?: string
}

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17558) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPublicUploadFilesRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/public/uploadFiles',
    undefined,
    string,
    'files',
    false
  >
>

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17558) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPublicUploadFilesRequestConfig: ApiPostApiPublicUploadFilesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/uploadFiles',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['files'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicUploadFiles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上传多个文件',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17558',
    author: 11,
  },
}

/**
 * 接口 [上传多个文件↗](http://192.168.143.129:3001/project/11/interface/api/17558) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFiles`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPublicUploadFiles = /*#__PURE__*/ (
  requestData: IApiPublicUploadFilesReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicUploadFilesRes>(prepare(apiPostApiPublicUploadFilesRequestConfig, requestData), ...args)
}

apiPostApiPublicUploadFiles.requestConfig = apiPostApiPublicUploadFilesRequestConfig

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17567) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicUploadFileReq {}

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17567) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicUploadFileRes {
  code?: number
  data?: {
    key?: string
    url?: string
    domain?: string
    errMsg?: string
  }
  msg?: string
}

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17567) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPublicUploadFileRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/public/uploadFile',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17567) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPublicUploadFileRequestConfig: ApiPostApiPublicUploadFileRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/uploadFile',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicUploadFile',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上传单个文件',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17567',
    author: 11,
  },
}

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17567) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPublicUploadFile = /*#__PURE__*/ (
  requestData?: IApiPublicUploadFileReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicUploadFileRes>(prepare(apiPostApiPublicUploadFileRequestConfig, requestData), ...args)
}

apiPostApiPublicUploadFile.requestConfig = apiPostApiPublicUploadFileRequestConfig

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17576) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicUploadFileReq {}

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17576) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicUploadFileRes {
  code?: number
  data?: {
    key?: string
    url?: string
    domain?: string
    errMsg?: string
  }
  msg?: string
}

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17576) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicUploadFileRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/uploadFile',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17576) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicUploadFileRequestConfig: ApiPostAdminPublicUploadFileRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/uploadFile',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicUploadFile',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上传单个文件',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17576',
    author: 11,
  },
}

/**
 * 接口 [上传单个文件↗](http://192.168.143.129:3001/project/11/interface/api/17576) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/uploadFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicUploadFile = /*#__PURE__*/ (
  requestData?: IAdminPublicUploadFileReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicUploadFileRes>(prepare(apiPostAdminPublicUploadFileRequestConfig, requestData), ...args)
}

apiPostAdminPublicUploadFile.requestConfig = apiPostAdminPublicUploadFileRequestConfig

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17585) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicTokenReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
}

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17585) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicTokenRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17585) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicTokenRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/public/token', undefined, string, string, false>
>

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17585) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicTokenRequestConfig: ApiPostAdminPublicTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/token',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicToken',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '刷新Token',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17585',
    author: 11,
  },
}

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17585) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicToken = /*#__PURE__*/ (
  requestData: IAdminPublicTokenReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicTokenRes>(prepare(apiPostAdminPublicTokenRequestConfig, requestData), ...args)
}

apiPostAdminPublicToken.requestConfig = apiPostAdminPublicTokenRequestConfig

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17594) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicTokenReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
}

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17594) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicTokenRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17594) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPublicTokenRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/token', undefined, string, string, false>
>

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17594) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPublicTokenRequestConfig: ApiPostApiPublicTokenRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/token',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicToken',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '刷新Token',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17594',
    author: 11,
  },
}

/**
 * 接口 [刷新Token↗](http://192.168.143.129:3001/project/11/interface/api/17594) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/token`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPublicToken = /*#__PURE__*/ (requestData: IApiPublicTokenReq, ...args: UserRequestRestArgs) => {
  return request<IApiPublicTokenRes>(prepare(apiPostApiPublicTokenRequestConfig, requestData), ...args)
}

apiPostApiPublicToken.requestConfig = apiPostApiPublicTokenRequestConfig

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17603) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicRegisterReq {
  type?: number
  username?: string
  password?: string
  code?: string
  key?: string
  phone?: string
  email?: string
  nickname?: string
  avatar?: string
  /**
   * 性别 1男0女
   */
  sex?: number
  unionId?: string
  openid?: string
  accessToken?: string
  wxOpenid?: string
  wxUnionId?: string
  sessionKey?: string
  wxMiniOpenid?: string
  wxMiniUnionId?: string
  aliOpenid?: string
  aliUnionId?: string
  qqOpenid?: string
  qqUnionId?: string
  sinaOpenid?: string
  sinaUnionId?: string
  baiduOpenid?: string
  baiduUnionId?: string
  appleId?: string
}

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17603) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicRegisterRes {
  code?: number
  data?: {
    username?: string
    password?: string
    phone?: string
    email?: string
  }
  msg?: string
}

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17603) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPublicRegisterRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/register', undefined, string, string, false>
>

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17603) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPublicRegisterRequestConfig: ApiPostApiPublicRegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/register',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicRegister',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '注册用户',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17603',
    author: 11,
  },
}

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17603) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPublicRegister = /*#__PURE__*/ (
  requestData: IApiPublicRegisterReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicRegisterRes>(prepare(apiPostApiPublicRegisterRequestConfig, requestData), ...args)
}

apiPostApiPublicRegister.requestConfig = apiPostApiPublicRegisterRequestConfig

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17612) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicRegisterReq {
  type?: number
  username?: string
  password?: string
  code?: string
  key?: string
  phone?: string
  email?: string
  nickname?: string
  avatar?: string
  /**
   * 性别 1男0女
   */
  sex?: number
  unionId?: string
  openid?: string
  accessToken?: string
  wxOpenid?: string
  wxUnionId?: string
  sessionKey?: string
  wxMiniOpenid?: string
  wxMiniUnionId?: string
  aliOpenid?: string
  aliUnionId?: string
  qqOpenid?: string
  qqUnionId?: string
  sinaOpenid?: string
  sinaUnionId?: string
  baiduOpenid?: string
  baiduUnionId?: string
  appleId?: string
}

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17612) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicRegisterRes {
  code?: number
  data?: {
    username?: string
    password?: string
    phone?: string
    email?: string
  }
  msg?: string
}

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17612) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicRegisterRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/register',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17612) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicRegisterRequestConfig: ApiPostAdminPublicRegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/register',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicRegister',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '注册用户',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17612',
    author: 11,
  },
}

/**
 * 接口 [注册用户↗](http://192.168.143.129:3001/project/11/interface/api/17612) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/register`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicRegister = /*#__PURE__*/ (
  requestData: IAdminPublicRegisterReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicRegisterRes>(prepare(apiPostAdminPublicRegisterRequestConfig, requestData), ...args)
}

apiPostAdminPublicRegister.requestConfig = apiPostAdminPublicRegisterRequestConfig

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17621) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicParseFileReq {}

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17621) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicParseFileRes {
  code?: number
  data?: {}[]
  msg?: string
}

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17621) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPublicParseFileRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/parseFile', undefined, string, string, true>
>

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17621) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPublicParseFileRequestConfig: ApiPostApiPublicParseFileRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/parseFile',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicParseFile',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '解析文件',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17621',
    author: 11,
  },
}

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17621) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPublicParseFile = /*#__PURE__*/ (
  requestData?: IApiPublicParseFileReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicParseFileRes>(prepare(apiPostApiPublicParseFileRequestConfig, requestData), ...args)
}

apiPostApiPublicParseFile.requestConfig = apiPostApiPublicParseFileRequestConfig

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17630) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicParseFileReq {}

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17630) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicParseFileRes {
  code?: number
  data?: {}[]
  msg?: string
}

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17630) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicParseFileRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/parseFile',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17630) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicParseFileRequestConfig: ApiPostAdminPublicParseFileRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/parseFile',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicParseFile',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '解析文件',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17630',
    author: 11,
  },
}

/**
 * 接口 [解析文件↗](http://192.168.143.129:3001/project/11/interface/api/17630) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/parseFile`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicParseFile = /*#__PURE__*/ (
  requestData?: IAdminPublicParseFileReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicParseFileRes>(prepare(apiPostAdminPublicParseFileRequestConfig, requestData), ...args)
}

apiPostAdminPublicParseFile.requestConfig = apiPostAdminPublicParseFileRequestConfig

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17639) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicLoginReq {
  username?: string
  oldPassword?: string
  password?: string
  code?: string
  key?: string
  type?: number
  phone?: string
  email?: string
  imei?: string
  needAuth?: boolean
  unionId?: string
  openid?: string
  accessToken?: string
  wxOpenid?: string
  wxUnionId?: string
  sessionKey?: string
  wxMiniOpenid?: string
  wxMiniUnionId?: string
  aliOpenid?: string
  aliUnionId?: string
  qqOpenid?: string
  qqUnionId?: string
  sinaOpenid?: string
  sinaUnionId?: string
  baiduOpenid?: string
  baiduUnionId?: string
  appleId?: string
}

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17639) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicLoginRes {
  code?: number
  data?: {
    data?: {
      username?: string
      nickname?: string
      avatar?: string
      introduction?: string
      sex?: number
      integral?: number
      dataSource?: number
      createTime?: string
      updateTime?: string
      phone?: string
      phoneAes?: string
      email?: string
      emailAes?: string
    }
    token?: string
  }
  msg?: string
}

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17639) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicLoginRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/public/login', undefined, string, string, false>
>

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17639) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicLoginRequestConfig: ApiPostAdminPublicLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '登录接口',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17639',
    author: 11,
  },
}

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17639) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /admin/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicLogin = /*#__PURE__*/ (
  requestData: IAdminPublicLoginReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicLoginRes>(prepare(apiPostAdminPublicLoginRequestConfig, requestData), ...args)
}

apiPostAdminPublicLogin.requestConfig = apiPostAdminPublicLoginRequestConfig

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17648) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicLoginReq {
  username?: string
  oldPassword?: string
  password?: string
  code?: string
  key?: string
  type?: number
  phone?: string
  email?: string
  imei?: string
  needAuth?: boolean
  unionId?: string
  openid?: string
  accessToken?: string
  wxOpenid?: string
  wxUnionId?: string
  sessionKey?: string
  wxMiniOpenid?: string
  wxMiniUnionId?: string
  aliOpenid?: string
  aliUnionId?: string
  qqOpenid?: string
  qqUnionId?: string
  sinaOpenid?: string
  sinaUnionId?: string
  baiduOpenid?: string
  baiduUnionId?: string
  appleId?: string
}

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17648) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicLoginRes {
  code?: number
  data?: {
    data?: {
      username?: string
      nickname?: string
      avatar?: string
      introduction?: string
      sex?: number
      integral?: number
      dataSource?: number
      createTime?: string
      updateTime?: string
      phone?: string
      phoneAes?: string
      email?: string
      emailAes?: string
    }
    token?: string
  }
  msg?: string
}

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17648) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPublicLoginRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/login', undefined, string, string, false>
>

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17648) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPublicLoginRequestConfig: ApiPostApiPublicLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '登录接口',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17648',
    author: 11,
  },
}

/**
 * 接口 [登录接口↗](http://192.168.143.129:3001/project/11/interface/api/17648) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `POST /api/public/login`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPublicLogin = /*#__PURE__*/ (requestData: IApiPublicLoginReq, ...args: UserRequestRestArgs) => {
  return request<IApiPublicLoginRes>(prepare(apiPostApiPublicLoginRequestConfig, requestData), ...args)
}

apiPostApiPublicLogin.requestConfig = apiPostApiPublicLoginRequestConfig

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17657) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IApiPublicLogReportReq {
  /**
   * 操作ID
   */
  id?: number
  /**
   * 链路追踪ID
   */
  traceId?: string
  /**
   * 请求ID
   */
  requestId?: string
  /**
   * 操作IP
   */
  ip?: string
  /**
   * 请求路径URL
   */
  url?: string
  /**
   * 请求URI
   */
  uri?: string
  /**
   * 请求方法
   */
  method?: string
  /**
   * 操作用户ID
   */
  userId?: string
  /**
   * 操作用户昵称
   */
  nickname?: string
  /**
   * 操作功能模块
   */
  module?: string
  /**
   * 操作名称
   */
  operation?: string
  /**
   * 操作类型: 1登录 2新增 3修改 4删除 5查询 6导出 7导入 8审核 9封禁 10其他
   */
  operateType?: number
  /**
   * 操作对象类型
   */
  targetType?: string
  /**
   * 操作对象ID
   */
  targetId?: string
  /**
   * 操作对象名称
   */
  targetName?: string
  /**
   * 操作描述
   */
  description?: string
  /**
   * 是否成功: 1成功 0失败
   */
  success?: number
  /**
   * 错误信息
   */
  errorMsg?: string
  /**
   * 请求参数摘要
   */
  requestParam?: string
  /**
   * 响应结果摘要
   */
  responseData?: string
  /**
   * 请求耗时(ms)
   */
  duration?: number
  /**
   * 操作时间
   */
  createTime?: string
}

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17657) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IApiPublicLogReportRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17657) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
type ApiPostApiPublicLogReportRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/public/log/report',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17657) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
const apiPostApiPublicLogReportRequestConfig: ApiPostApiPublicLogReportRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/log/report',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicLogReport',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上传日志',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17657',
    author: 11,
  },
}

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17657) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
export const apiPostApiPublicLogReport = /*#__PURE__*/ (
  requestData: IApiPublicLogReportReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicLogReportRes>(prepare(apiPostApiPublicLogReportRequestConfig, requestData), ...args)
}

apiPostApiPublicLogReport.requestConfig = apiPostApiPublicLogReportRequestConfig

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17666) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IAdminPublicLogReportReq {
  /**
   * 操作ID
   */
  id?: number
  /**
   * 链路追踪ID
   */
  traceId?: string
  /**
   * 请求ID
   */
  requestId?: string
  /**
   * 操作IP
   */
  ip?: string
  /**
   * 请求路径URL
   */
  url?: string
  /**
   * 请求URI
   */
  uri?: string
  /**
   * 请求方法
   */
  method?: string
  /**
   * 操作用户ID
   */
  userId?: string
  /**
   * 操作用户昵称
   */
  nickname?: string
  /**
   * 操作功能模块
   */
  module?: string
  /**
   * 操作名称
   */
  operation?: string
  /**
   * 操作类型: 1登录 2新增 3修改 4删除 5查询 6导出 7导入 8审核 9封禁 10其他
   */
  operateType?: number
  /**
   * 操作对象类型
   */
  targetType?: string
  /**
   * 操作对象ID
   */
  targetId?: string
  /**
   * 操作对象名称
   */
  targetName?: string
  /**
   * 操作描述
   */
  description?: string
  /**
   * 是否成功: 1成功 0失败
   */
  success?: number
  /**
   * 错误信息
   */
  errorMsg?: string
  /**
   * 请求参数摘要
   */
  requestParam?: string
  /**
   * 响应结果摘要
   */
  responseData?: string
  /**
   * 请求耗时(ms)
   */
  duration?: number
  /**
   * 操作时间
   */
  createTime?: string
}

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17666) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IAdminPublicLogReportRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17666) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
type ApiPostAdminPublicLogReportRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/log/report',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17666) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
const apiPostAdminPublicLogReportRequestConfig: ApiPostAdminPublicLogReportRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/log/report',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicLogReport',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上传日志',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17666',
    author: 11,
  },
}

/**
 * 接口 [上传日志↗](http://192.168.143.129:3001/project/11/interface/api/17666) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/report`
 * @更新时间 `2026-04-18 21:46:01`
 */
export const apiPostAdminPublicLogReport = /*#__PURE__*/ (
  requestData: IAdminPublicLogReportReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicLogReportRes>(prepare(apiPostAdminPublicLogReportRequestConfig, requestData), ...args)
}

apiPostAdminPublicLogReport.requestConfig = apiPostAdminPublicLogReportRequestConfig

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17675) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IAdminPublicLogListReq {
  type?: number
  beginDate?: string
  endDate?: string
  keyword?: string
  module?: string
  method?: string
  page?: number
  skip?: number
  size?: number
}

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17675) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IAdminPublicLogListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * 操作ID
       */
      id?: number
      /**
       * 链路追踪ID
       */
      traceId?: string
      /**
       * 请求ID
       */
      requestId?: string
      /**
       * 操作IP
       */
      ip?: string
      /**
       * 请求路径URL
       */
      url?: string
      /**
       * 请求URI
       */
      uri?: string
      /**
       * 请求方法
       */
      method?: string
      /**
       * 操作用户ID
       */
      userId?: string
      /**
       * 操作用户昵称
       */
      nickname?: string
      /**
       * 操作功能模块
       */
      module?: string
      /**
       * 操作名称
       */
      operation?: string
      /**
       * 操作类型: 1登录 2新增 3修改 4删除 5查询 6导出 7导入 8审核 9封禁 10其他
       */
      operateType?: number
      /**
       * 操作对象类型
       */
      targetType?: string
      /**
       * 操作对象ID
       */
      targetId?: string
      /**
       * 操作对象名称
       */
      targetName?: string
      /**
       * 操作描述
       */
      description?: string
      /**
       * 是否成功: 1成功 0失败
       */
      success?: number
      /**
       * 错误信息
       */
      errorMsg?: string
      /**
       * 请求参数摘要
       */
      requestParam?: string
      /**
       * 响应结果摘要
       */
      responseData?: string
      /**
       * 请求耗时(ms)
       */
      duration?: number
      /**
       * 操作时间
       */
      createTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17675) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
type ApiPostAdminPublicLogListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/log/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17675) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
const apiPostAdminPublicLogListRequestConfig: ApiPostAdminPublicLogListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/log/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicLogList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取日志',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17675',
    author: 11,
  },
}

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17675) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
export const apiPostAdminPublicLogList = /*#__PURE__*/ (
  requestData: IAdminPublicLogListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicLogListRes>(prepare(apiPostAdminPublicLogListRequestConfig, requestData), ...args)
}

apiPostAdminPublicLogList.requestConfig = apiPostAdminPublicLogListRequestConfig

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17684) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IApiPublicLogListReq {
  type?: number
  beginDate?: string
  endDate?: string
  keyword?: string
  module?: string
  method?: string
  page?: number
  skip?: number
  size?: number
}

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17684) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
export interface IApiPublicLogListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * 操作ID
       */
      id?: number
      /**
       * 链路追踪ID
       */
      traceId?: string
      /**
       * 请求ID
       */
      requestId?: string
      /**
       * 操作IP
       */
      ip?: string
      /**
       * 请求路径URL
       */
      url?: string
      /**
       * 请求URI
       */
      uri?: string
      /**
       * 请求方法
       */
      method?: string
      /**
       * 操作用户ID
       */
      userId?: string
      /**
       * 操作用户昵称
       */
      nickname?: string
      /**
       * 操作功能模块
       */
      module?: string
      /**
       * 操作名称
       */
      operation?: string
      /**
       * 操作类型: 1登录 2新增 3修改 4删除 5查询 6导出 7导入 8审核 9封禁 10其他
       */
      operateType?: number
      /**
       * 操作对象类型
       */
      targetType?: string
      /**
       * 操作对象ID
       */
      targetId?: string
      /**
       * 操作对象名称
       */
      targetName?: string
      /**
       * 操作描述
       */
      description?: string
      /**
       * 是否成功: 1成功 0失败
       */
      success?: number
      /**
       * 错误信息
       */
      errorMsg?: string
      /**
       * 请求参数摘要
       */
      requestParam?: string
      /**
       * 响应结果摘要
       */
      responseData?: string
      /**
       * 请求耗时(ms)
       */
      duration?: number
      /**
       * 操作时间
       */
      createTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17684) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
type ApiPostApiPublicLogListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/log/list', undefined, string, string, false>
>

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17684) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
const apiPostApiPublicLogListRequestConfig: ApiPostApiPublicLogListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/log/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicLogList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取日志',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17684',
    author: 11,
  },
}

/**
 * 接口 [获取日志↗](http://192.168.143.129:3001/project/11/interface/api/17684) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/log/list`
 * @更新时间 `2026-04-18 21:46:01`
 */
export const apiPostApiPublicLogList = /*#__PURE__*/ (
  requestData: IApiPublicLogListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicLogListRes>(prepare(apiPostApiPublicLogListRequestConfig, requestData), ...args)
}

apiPostApiPublicLogList.requestConfig = apiPostApiPublicLogListRequestConfig

/**
 * 接口 [添加配置↗](http://192.168.143.129:3001/project/11/interface/api/17693) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `POST /admin/public/config/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicConfigAddReq {
  id?: number
  /**
   * 配置内容
   */
  config?: string
  /**
   * 配置名称
   */
  name?: string
  phone?: string
  email?: string
  code?: string
}

/**
 * 接口 [添加配置↗](http://192.168.143.129:3001/project/11/interface/api/17693) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `POST /admin/public/config/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicConfigAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加配置↗](http://192.168.143.129:3001/project/11/interface/api/17693) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `POST /admin/public/config/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicConfigAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/config/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [添加配置↗](http://192.168.143.129:3001/project/11/interface/api/17693) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `POST /admin/public/config/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicConfigAddRequestConfig: ApiPostAdminPublicConfigAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/config/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicConfigAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加配置',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17693',
    author: 11,
  },
}

/**
 * 接口 [添加配置↗](http://192.168.143.129:3001/project/11/interface/api/17693) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `POST /admin/public/config/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicConfigAdd = /*#__PURE__*/ (
  requestData: IAdminPublicConfigAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicConfigAddRes>(prepare(apiPostAdminPublicConfigAddRequestConfig, requestData), ...args)
}

apiPostAdminPublicConfigAdd.requestConfig = apiPostAdminPublicConfigAddRequestConfig

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17702) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicCacheSetReq {
  key?: string
  value?: string
  expire?: number
}

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17702) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicCacheSetRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17702) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiPublicCacheSetRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/public/cache/set',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17702) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiPublicCacheSetRequestConfig: ApiPostApiPublicCacheSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/cache/set',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiPublicCacheSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '设置网络缓存',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17702',
    author: 11,
  },
}

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17702) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /api/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiPublicCacheSet = /*#__PURE__*/ (
  requestData: IApiPublicCacheSetReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicCacheSetRes>(prepare(apiPostApiPublicCacheSetRequestConfig, requestData), ...args)
}

apiPostApiPublicCacheSet.requestConfig = apiPostApiPublicCacheSetRequestConfig

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17711) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicCacheSetReq {
  key?: string
  value?: string
  expire?: number
}

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17711) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicCacheSetRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17711) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPublicCacheSetRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/cache/set',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17711) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPublicCacheSetRequestConfig: ApiPostAdminPublicCacheSetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/cache/set',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPublicCacheSet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '设置网络缓存',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17711',
    author: 11,
  },
}

/**
 * 接口 [设置网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/17711) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `POST /admin/public/cache/set`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPublicCacheSet = /*#__PURE__*/ (
  requestData: IAdminPublicCacheSetReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicCacheSetRes>(prepare(apiPostAdminPublicCacheSetRequestConfig, requestData), ...args)
}

apiPostAdminPublicCacheSet.requestConfig = apiPostAdminPublicCacheSetRequestConfig

/**
 * 接口 [给角色绑定权限↗](http://192.168.143.129:3001/project/11/interface/api/17720) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPermissionBindReq {
  ridList?: number[]
  pidList?: number[]
  /**
   * 被操作用户的 真实userId, 原userId保留字段为操作者使用
   */
  id?: string
}

/**
 * 接口 [给角色绑定权限↗](http://192.168.143.129:3001/project/11/interface/api/17720) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPermissionBindRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [给角色绑定权限↗](http://192.168.143.129:3001/project/11/interface/api/17720) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPermissionBindRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/permission/bind',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [给角色绑定权限↗](http://192.168.143.129:3001/project/11/interface/api/17720) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPermissionBindRequestConfig: ApiPostAdminPermissionBindRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/permission/bind',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPermissionBind',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '给角色绑定权限',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17720',
    author: 11,
  },
}

/**
 * 接口 [给角色绑定权限↗](http://192.168.143.129:3001/project/11/interface/api/17720) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/bind`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPermissionBind = /*#__PURE__*/ (
  requestData: IAdminPermissionBindReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPermissionBindRes>(prepare(apiPostAdminPermissionBindRequestConfig, requestData), ...args)
}

apiPostAdminPermissionBind.requestConfig = apiPostAdminPermissionBindRequestConfig

/**
 * 接口 [添加权限↗](http://192.168.143.129:3001/project/11/interface/api/17729) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPermissionAddReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  /**
   * 权限管理
   */
  data?: {
    /**
     * 权限ID
     */
    id?: number
    /**
     * 父权限ID
     */
    pid?: number
    /**
     * 重定向URL
     */
    redirect?: string
    /**
     * 路径
     */
    path?: string
    /**
     * 唯一标识
     */
    name?: string
    /**
     * 组件路径
     */
    component?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 权限类型
     */
    type?: number
    /**
     * 扩展数据
     */
    meta?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
}

/**
 * 接口 [添加权限↗](http://192.168.143.129:3001/project/11/interface/api/17729) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPermissionAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加权限↗](http://192.168.143.129:3001/project/11/interface/api/17729) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminPermissionAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/permission/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [添加权限↗](http://192.168.143.129:3001/project/11/interface/api/17729) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminPermissionAddRequestConfig: ApiPostAdminPermissionAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/permission/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminPermissionAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加权限',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17729',
    author: 11,
  },
}

/**
 * 接口 [添加权限↗](http://192.168.143.129:3001/project/11/interface/api/17729) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `POST /admin/permission/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminPermissionAdd = /*#__PURE__*/ (
  requestData: IAdminPermissionAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPermissionAddRes>(prepare(apiPostAdminPermissionAddRequestConfig, requestData), ...args)
}

apiPostAdminPermissionAdd.requestConfig = apiPostAdminPermissionAddRequestConfig

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17738) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminNotifyListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17738) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminNotifyListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      /**
       * 通知用户ID
       */
      userId?: string
      /**
       * 通知标题
       */
      title?: string
      /**
       * 通知内容
       */
      content?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 图标
       */
      icon?: string
      /**
       * 通知类型
       */
      type?: number
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17738) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminNotifyListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/notify/list', undefined, string, string, false>
>

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17738) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminNotifyListRequestConfig: ApiPostAdminNotifyListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/notify/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminNotifyList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取通知列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17738',
    author: 11,
  },
}

/**
 * 接口 [获取通知列表↗](http://192.168.143.129:3001/project/11/interface/api/17738) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminNotifyList = /*#__PURE__*/ (
  requestData: IAdminNotifyListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminNotifyListRes>(prepare(apiPostAdminNotifyListRequestConfig, requestData), ...args)
}

apiPostAdminNotifyList.requestConfig = apiPostAdminNotifyListRequestConfig

/**
 * 接口 [添加通知↗](http://192.168.143.129:3001/project/11/interface/api/17747) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminNotifyAddReq {
  id?: number
  /**
   * 通知用户ID
   */
  userId?: string
  /**
   * 通知标题
   */
  title?: string
  /**
   * 通知内容
   */
  content?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 通知类型
   */
  type?: number
}

/**
 * 接口 [添加通知↗](http://192.168.143.129:3001/project/11/interface/api/17747) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminNotifyAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加通知↗](http://192.168.143.129:3001/project/11/interface/api/17747) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminNotifyAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/notify/add', undefined, string, string, false>
>

/**
 * 接口 [添加通知↗](http://192.168.143.129:3001/project/11/interface/api/17747) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminNotifyAddRequestConfig: ApiPostAdminNotifyAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/notify/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminNotifyAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加通知',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17747',
    author: 11,
  },
}

/**
 * 接口 [添加通知↗](http://192.168.143.129:3001/project/11/interface/api/17747) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `POST /admin/notify/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminNotifyAdd = /*#__PURE__*/ (requestData: IAdminNotifyAddReq, ...args: UserRequestRestArgs) => {
  return request<IAdminNotifyAddRes>(prepare(apiPostAdminNotifyAddRequestConfig, requestData), ...args)
}

apiPostAdminNotifyAdd.requestConfig = apiPostAdminNotifyAddRequestConfig

/**
 * 接口 [获取IP列表↗](http://192.168.143.129:3001/project/11/interface/api/17756) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminIpListReq {
  page?: number
  size?: number
  skip?: number
  /**
   * 操作用户ID
   */
  userId?: string
  /**
   * 状态: 1正常 2异常 3黑名单
   */
  status?: string
  /**
   * 操作IP
   */
  ip?: string
  /**
   * 开始时间
   */
  beginTime?: string
  /**
   * 结束时间
   */
  endTime?: string
}

/**
 * 接口 [获取IP列表↗](http://192.168.143.129:3001/project/11/interface/api/17756) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminIpListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * ip的id
       */
      id?: number
      /**
       * IP
       */
      ip?: string
      /**
       * 归属地
       */
      address?: string
      /**
       * 1, 正常.  2, 标记为异常. 3, 标记为黑名单
       */
      status?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取IP列表↗](http://192.168.143.129:3001/project/11/interface/api/17756) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminIpListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/ip/list', undefined, string, string, false>
>

/**
 * 接口 [获取IP列表↗](http://192.168.143.129:3001/project/11/interface/api/17756) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminIpListRequestConfig: ApiPostAdminIpListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/ip/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminIpList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取IP列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17756',
    author: 11,
  },
}

/**
 * 接口 [获取IP列表↗](http://192.168.143.129:3001/project/11/interface/api/17756) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminIpList = /*#__PURE__*/ (requestData: IAdminIpListReq, ...args: UserRequestRestArgs) => {
  return request<IAdminIpListRes>(prepare(apiPostAdminIpListRequestConfig, requestData), ...args)
}

apiPostAdminIpList.requestConfig = apiPostAdminIpListRequestConfig

/**
 * 接口 [添加IP↗](http://192.168.143.129:3001/project/11/interface/api/17765) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminIpAddReq {
  /**
   * IP档案ID
   */
  id?: number
  /**
   * IP
   */
  ip?: string
  /**
   * 国家
   */
  country?: string
  /**
   * 省份
   */
  province?: string
  /**
   * 城市
   */
  city?: string
  /**
   * 运营商
   */
  isp?: string
  /**
   * 归属地完整描述
   */
  address?: string
  /**
   * 最近关联用户ID
   */
  userId?: string
  /**
   * 状态: 1正常 2异常 3黑名单
   */
  status?: string
  /**
   * 风险原因
   */
  riskReason?: string
  /**
   * 备注
   */
  remark?: string
  /**
   * 累计访问次数
   */
  accessCount?: number
  /**
   * 首次访问时间
   */
  firstAccessTime?: string
  /**
   * 最近访问时间
   */
  lastAccessTime?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [添加IP↗](http://192.168.143.129:3001/project/11/interface/api/17765) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminIpAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加IP↗](http://192.168.143.129:3001/project/11/interface/api/17765) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminIpAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/ip/add', undefined, string, string, false>
>

/**
 * 接口 [添加IP↗](http://192.168.143.129:3001/project/11/interface/api/17765) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminIpAddRequestConfig: ApiPostAdminIpAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/ip/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminIpAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加IP',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17765',
    author: 11,
  },
}

/**
 * 接口 [添加IP↗](http://192.168.143.129:3001/project/11/interface/api/17765) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `POST /admin/ip/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminIpAdd = /*#__PURE__*/ (requestData: IAdminIpAddReq, ...args: UserRequestRestArgs) => {
  return request<IAdminIpAddRes>(prepare(apiPostAdminIpAddRequestConfig, requestData), ...args)
}

apiPostAdminIpAdd.requestConfig = apiPostAdminIpAddRequestConfig

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17774) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminFeedbackListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17774) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminFeedbackListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * 用户反馈管理ID
       */
      id?: number
      /**
       * 用户唯一ID
       */
      userId?: string
      /**
       * 回复微信
       */
      wx?: string
      /**
       * 回复手机号
       */
      phone?: string
      /**
       * 返回内容
       */
      feedback?: string
      /**
       * 状态
       */
      status?: number
      /**
       * 是否需要回复
       */
      isReply?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17774) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminFeedbackListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/feedback/list', undefined, string, string, false>
>

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17774) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminFeedbackListRequestConfig: ApiPostAdminFeedbackListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/feedback/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminFeedbackList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取用户反馈列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17774',
    author: 11,
  },
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17774) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminFeedbackList = /*#__PURE__*/ (
  requestData: IAdminFeedbackListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminFeedbackListRes>(prepare(apiPostAdminFeedbackListRequestConfig, requestData), ...args)
}

apiPostAdminFeedbackList.requestConfig = apiPostAdminFeedbackListRequestConfig

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17783) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiFeedbackListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17783) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiFeedbackListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * 用户反馈管理ID
       */
      id?: number
      /**
       * 用户唯一ID
       */
      userId?: string
      /**
       * 回复微信
       */
      wx?: string
      /**
       * 回复手机号
       */
      phone?: string
      /**
       * 返回内容
       */
      feedback?: string
      /**
       * 状态
       */
      status?: number
      /**
       * 是否需要回复
       */
      isReply?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17783) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiFeedbackListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/feedback/list', undefined, string, string, false>
>

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17783) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiFeedbackListRequestConfig: ApiPostApiFeedbackListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/feedback/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiFeedbackList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取用户反馈列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17783',
    author: 11,
  },
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/17783) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiFeedbackList = /*#__PURE__*/ (
  requestData: IApiFeedbackListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiFeedbackListRes>(prepare(apiPostApiFeedbackListRequestConfig, requestData), ...args)
}

apiPostApiFeedbackList.requestConfig = apiPostApiFeedbackListRequestConfig

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17792) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiFeedbackAddReq {
  /**
   * 用户反馈管理ID
   */
  id?: number
  /**
   * 用户唯一ID
   */
  userId?: string
  /**
   * 回复微信
   */
  wx?: string
  /**
   * 回复手机号
   */
  phone?: string
  /**
   * 返回内容
   */
  feedback?: string
  /**
   * 状态
   */
  status?: number
  /**
   * 是否需要回复
   */
  isReply?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17792) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiFeedbackAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17792) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiFeedbackAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/feedback/add', undefined, string, string, false>
>

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17792) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiFeedbackAddRequestConfig: ApiPostApiFeedbackAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/feedback/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiFeedbackAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加用户反馈',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17792',
    author: 11,
  },
}

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17792) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /api/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiFeedbackAdd = /*#__PURE__*/ (requestData: IApiFeedbackAddReq, ...args: UserRequestRestArgs) => {
  return request<IApiFeedbackAddRes>(prepare(apiPostApiFeedbackAddRequestConfig, requestData), ...args)
}

apiPostApiFeedbackAdd.requestConfig = apiPostApiFeedbackAddRequestConfig

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17801) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminFeedbackAddReq {
  /**
   * 用户反馈管理ID
   */
  id?: number
  /**
   * 用户唯一ID
   */
  userId?: string
  /**
   * 回复微信
   */
  wx?: string
  /**
   * 回复手机号
   */
  phone?: string
  /**
   * 返回内容
   */
  feedback?: string
  /**
   * 状态
   */
  status?: number
  /**
   * 是否需要回复
   */
  isReply?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17801) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminFeedbackAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17801) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminFeedbackAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/feedback/add', undefined, string, string, false>
>

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17801) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminFeedbackAddRequestConfig: ApiPostAdminFeedbackAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/feedback/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminFeedbackAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加用户反馈',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17801',
    author: 11,
  },
}

/**
 * 接口 [添加用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/17801) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `POST /admin/feedback/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminFeedbackAdd = /*#__PURE__*/ (
  requestData: IAdminFeedbackAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminFeedbackAddRes>(prepare(apiPostAdminFeedbackAddRequestConfig, requestData), ...args)
}

apiPostAdminFeedbackAdd.requestConfig = apiPostAdminFeedbackAddRequestConfig

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17918) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksUnavailableReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17918) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksUnavailableRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17918) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminBooksUnavailableRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/books/unavailable',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17918) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminBooksUnavailableRequestConfig: ApiPostAdminBooksUnavailableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/books/unavailable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminBooksUnavailable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '下架书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17918',
    author: 11,
  },
}

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17918) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminBooksUnavailable = /*#__PURE__*/ (
  requestData: IAdminBooksUnavailableReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBooksUnavailableRes>(prepare(apiPostAdminBooksUnavailableRequestConfig, requestData), ...args)
}

apiPostAdminBooksUnavailable.requestConfig = apiPostAdminBooksUnavailableRequestConfig

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17927) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksUnavailableReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17927) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksUnavailableRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17927) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBooksUnavailableRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/books/unavailable',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17927) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBooksUnavailableRequestConfig: ApiPostApiBooksUnavailableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/books/unavailable',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBooksUnavailable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '下架书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17927',
    author: 11,
  },
}

/**
 * 接口 [下架书册↗](http://192.168.143.129:3001/project/11/interface/api/17927) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/unavailable`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBooksUnavailable = /*#__PURE__*/ (
  requestData: IApiBooksUnavailableReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBooksUnavailableRes>(prepare(apiPostApiBooksUnavailableRequestConfig, requestData), ...args)
}

apiPostApiBooksUnavailable.requestConfig = apiPostApiBooksUnavailableRequestConfig

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17936) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17936) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksListRes {
  code?: number
  data?: {
    /**
     * 主键id
     */
    id?: number
    /**
     * 用户id
     */
    userId?: string
    /**
     * 书名
     */
    title?: string
    /**
     * 封面
     */
    cover?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否删除
     */
    isDelete?: boolean
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17936) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminBooksListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/books/list', undefined, string, string, false>
>

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17936) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminBooksListRequestConfig: ApiPostAdminBooksListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/books/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminBooksList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '查询书册列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17936',
    author: 11,
  },
}

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17936) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminBooksList = /*#__PURE__*/ (requestData: IAdminBooksListReq, ...args: UserRequestRestArgs) => {
  return request<IAdminBooksListRes>(prepare(apiPostAdminBooksListRequestConfig, requestData), ...args)
}

apiPostAdminBooksList.requestConfig = apiPostAdminBooksListRequestConfig

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17945) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17945) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksListRes {
  code?: number
  data?: {
    /**
     * 主键id
     */
    id?: number
    /**
     * 用户id
     */
    userId?: string
    /**
     * 书名
     */
    title?: string
    /**
     * 封面
     */
    cover?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否删除
     */
    isDelete?: boolean
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17945) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBooksListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/books/list', undefined, string, string, false>
>

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17945) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBooksListRequestConfig: ApiPostApiBooksListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/books/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBooksList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '查询书册列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17945',
    author: 11,
  },
}

/**
 * 接口 [查询书册列表↗](http://192.168.143.129:3001/project/11/interface/api/17945) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBooksList = /*#__PURE__*/ (requestData: IApiBooksListReq, ...args: UserRequestRestArgs) => {
  return request<IApiBooksListRes>(prepare(apiPostApiBooksListRequestConfig, requestData), ...args)
}

apiPostApiBooksList.requestConfig = apiPostApiBooksListRequestConfig

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17954) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksCreateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 用户id
   */
  userId?: string
  /**
   * 书名
   */
  title?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17954) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksCreateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17954) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminBooksCreateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/books/create', undefined, string, string, false>
>

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17954) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminBooksCreateRequestConfig: ApiPostAdminBooksCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/books/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminBooksCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '创建书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17954',
    author: 11,
  },
}

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17954) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminBooksCreate = /*#__PURE__*/ (
  requestData: IAdminBooksCreateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBooksCreateRes>(prepare(apiPostAdminBooksCreateRequestConfig, requestData), ...args)
}

apiPostAdminBooksCreate.requestConfig = apiPostAdminBooksCreateRequestConfig

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17963) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksCreateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 用户id
   */
  userId?: string
  /**
   * 书名
   */
  title?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 描述
   */
  description?: string
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17963) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksCreateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17963) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBooksCreateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/books/create', undefined, string, string, false>
>

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17963) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBooksCreateRequestConfig: ApiPostApiBooksCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/books/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBooksCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '创建书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17963',
    author: 11,
  },
}

/**
 * 接口 [创建书册↗](http://192.168.143.129:3001/project/11/interface/api/17963) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBooksCreate = /*#__PURE__*/ (requestData: IApiBooksCreateReq, ...args: UserRequestRestArgs) => {
  return request<IApiBooksCreateRes>(prepare(apiPostApiBooksCreateRequestConfig, requestData), ...args)
}

apiPostApiBooksCreate.requestConfig = apiPostApiBooksCreateRequestConfig

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17972) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksAvailableReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17972) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBooksAvailableRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17972) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminBooksAvailableRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/books/available',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17972) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminBooksAvailableRequestConfig: ApiPostAdminBooksAvailableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/books/available',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminBooksAvailable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上架书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17972',
    author: 11,
  },
}

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17972) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /admin/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminBooksAvailable = /*#__PURE__*/ (
  requestData: IAdminBooksAvailableReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBooksAvailableRes>(prepare(apiPostAdminBooksAvailableRequestConfig, requestData), ...args)
}

apiPostAdminBooksAvailable.requestConfig = apiPostAdminBooksAvailableRequestConfig

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17981) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksAvailableReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17981) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBooksAvailableRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17981) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBooksAvailableRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/books/available', undefined, string, string, false>
>

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17981) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBooksAvailableRequestConfig: ApiPostApiBooksAvailableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/books/available',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBooksAvailable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '上架书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17981',
    author: 11,
  },
}

/**
 * 接口 [上架书册↗](http://192.168.143.129:3001/project/11/interface/api/17981) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `POST /api/books/available`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBooksAvailable = /*#__PURE__*/ (
  requestData: IApiBooksAvailableReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBooksAvailableRes>(prepare(apiPostApiBooksAvailableRequestConfig, requestData), ...args)
}

apiPostApiBooksAvailable.requestConfig = apiPostApiBooksAvailableRequestConfig

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17990) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBookCatalogListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17990) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBookCatalogListRes {
  code?: number
  data?: {
    /**
     * 主键id
     */
    id?: number
    /**
     * 书册id
     */
    bookId?: number
    /**
     * 文章id
     */
    articleId?: number
    /**
     * 父目录id
     */
    parentId?: number
    /**
     * 目录标题
     */
    title?: string
    /**
     * 目录描述
     */
    description?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 是否删除
     */
    isDelete?: boolean
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17990) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBookCatalogListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bookCatalog/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17990) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBookCatalogListRequestConfig: ApiPostApiBookCatalogListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bookCatalog/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBookCatalogList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '查询书册目录列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17990',
    author: 11,
  },
}

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17990) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBookCatalogList = /*#__PURE__*/ (
  requestData: IApiBookCatalogListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBookCatalogListRes>(prepare(apiPostApiBookCatalogListRequestConfig, requestData), ...args)
}

apiPostApiBookCatalogList.requestConfig = apiPostApiBookCatalogListRequestConfig

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17999) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBookCatalogListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17999) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBookCatalogListRes {
  code?: number
  data?: {
    /**
     * 主键id
     */
    id?: number
    /**
     * 书册id
     */
    bookId?: number
    /**
     * 文章id
     */
    articleId?: number
    /**
     * 父目录id
     */
    parentId?: number
    /**
     * 目录标题
     */
    title?: string
    /**
     * 目录描述
     */
    description?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 是否删除
     */
    isDelete?: boolean
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17999) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminBookCatalogListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/bookCatalog/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17999) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminBookCatalogListRequestConfig: ApiPostAdminBookCatalogListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/bookCatalog/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminBookCatalogList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '查询书册目录列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17999',
    author: 11,
  },
}

/**
 * 接口 [查询书册目录列表↗](http://192.168.143.129:3001/project/11/interface/api/17999) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminBookCatalogList = /*#__PURE__*/ (
  requestData: IAdminBookCatalogListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBookCatalogListRes>(prepare(apiPostAdminBookCatalogListRequestConfig, requestData), ...args)
}

apiPostAdminBookCatalogList.requestConfig = apiPostAdminBookCatalogListRequestConfig

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18008) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBookCatalogCreateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 书册id
   */
  bookId?: number
  /**
   * 文章id
   */
  articleId?: number
  /**
   * 父目录id
   */
  parentId?: number
  /**
   * 目录标题
   */
  title?: string
  /**
   * 目录描述
   */
  description?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18008) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminBookCatalogCreateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18008) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminBookCatalogCreateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/bookCatalog/create',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18008) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminBookCatalogCreateRequestConfig: ApiPostAdminBookCatalogCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/bookCatalog/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminBookCatalogCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '创建书册目录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18008',
    author: 11,
  },
}

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18008) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /admin/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminBookCatalogCreate = /*#__PURE__*/ (
  requestData: IAdminBookCatalogCreateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBookCatalogCreateRes>(prepare(apiPostAdminBookCatalogCreateRequestConfig, requestData), ...args)
}

apiPostAdminBookCatalogCreate.requestConfig = apiPostAdminBookCatalogCreateRequestConfig

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18017) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBookCatalogCreateReq {
  /**
   * 主键id
   */
  id?: number
  /**
   * 书册id
   */
  bookId?: number
  /**
   * 文章id
   */
  articleId?: number
  /**
   * 父目录id
   */
  parentId?: number
  /**
   * 目录标题
   */
  title?: string
  /**
   * 目录描述
   */
  description?: string
  /**
   * 排序
   */
  sort?: number
  /**
   * 是否删除
   */
  isDelete?: boolean
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18017) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBookCatalogCreateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18017) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiBookCatalogCreateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bookCatalog/create',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18017) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiBookCatalogCreateRequestConfig: ApiPostApiBookCatalogCreateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bookCatalog/create',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiBookCatalogCreate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '创建书册目录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18017',
    author: 11,
  },
}

/**
 * 接口 [创建书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18017) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `POST /api/bookCatalog/create`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiBookCatalogCreate = /*#__PURE__*/ (
  requestData: IApiBookCatalogCreateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBookCatalogCreateRes>(prepare(apiPostApiBookCatalogCreateRequestConfig, requestData), ...args)
}

apiPostApiBookCatalogCreate.requestConfig = apiPostApiBookCatalogCreateRequestConfig

/**
 * 接口 [获取个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18107) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `GET /api/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiUserDetailReq {}

/**
 * 接口 [获取个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18107) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `GET /api/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiUserDetailRes {
  code?: number
  data?: {
    userId?: string
    username?: string
    nickname?: string
    avatar?: string
    introduction?: string
    sex?: number
    integral?: number
    dataSource?: number
    createTime?: string
    updateTime?: string
    phone?: string
    phoneAes?: string
    email?: string
    emailAes?: string
  }
  msg?: string
}

/**
 * 接口 [获取个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18107) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `GET /api/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiUserDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/detail', undefined, string, string, true>
>

/**
 * 接口 [获取个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18107) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `GET /api/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiUserDetailRequestConfig: ApiGetApiUserDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiUserDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取个人信息(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18107',
    author: 11,
  },
}

/**
 * 接口 [获取个人信息(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18107) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `GET /api/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiUserDetail = /*#__PURE__*/ (requestData?: IApiUserDetailReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserDetailRes>(prepare(apiGetApiUserDetailRequestConfig, requestData), ...args)
}

apiGetApiUserDetail.requestConfig = apiGetApiUserDetailRequestConfig

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18116) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiThemeListReq {}

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18116) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiThemeListRes {
  code?: number
  data?: {
    /**
     * 主题id
     */
    id?: number
    /**
     * 主题名字
     */
    name?: string
    /**
     * 主题描述
     */
    description?: string
    /**
     * 主题内容
     */
    content?: string
    /**
     * 主题下载路径
     */
    url?: string
    /**
     * 所需积分
     */
    integral?: string
    /**
     * 封面
     */
    cover?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18116) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiThemeListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/theme/list', undefined, string, string, true>
>

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18116) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiThemeListRequestConfig: ApiGetApiThemeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/theme/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiThemeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取主题列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18116',
    author: 11,
  },
}

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18116) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiThemeList = /*#__PURE__*/ (requestData?: IApiThemeListReq, ...args: UserRequestRestArgs) => {
  return request<IApiThemeListRes>(prepare(apiGetApiThemeListRequestConfig, requestData), ...args)
}

apiGetApiThemeList.requestConfig = apiGetApiThemeListRequestConfig

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18125) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiThemeDetailReq {
  id: string
}

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18125) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiThemeDetailRes {
  code?: number
  /**
   * 主题管理
   */
  data?: {
    /**
     * 主题id
     */
    id?: number
    /**
     * 主题名字
     */
    name?: string
    /**
     * 主题描述
     */
    description?: string
    /**
     * 主题内容
     */
    content?: string
    /**
     * 主题下载路径
     */
    url?: string
    /**
     * 所需积分
     */
    integral?: string
    /**
     * 封面
     */
    cover?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18125) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiThemeDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/theme/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18125) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiThemeDetailRequestConfig: ApiGetApiThemeDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/theme/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiThemeDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取单个主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18125',
    author: 11,
  },
}

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18125) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `GET /api/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiThemeDetail = /*#__PURE__*/ (requestData: IApiThemeDetailReq, ...args: UserRequestRestArgs) => {
  return request<IApiThemeDetailRes>(prepare(apiGetApiThemeDetailRequestConfig, requestData), ...args)
}

apiGetApiThemeDetail.requestConfig = apiGetApiThemeDetailRequestConfig

/**
 * 接口 [获取提醒详情↗](http://192.168.143.129:3001/project/11/interface/api/18134) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `GET /api/reminder/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiReminderDetailReq {
  id: string
}

/**
 * 接口 [获取提醒详情↗](http://192.168.143.129:3001/project/11/interface/api/18134) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `GET /api/reminder/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiReminderDetailRes {
  code?: number
  /**
   * 提醒列表
   */
  data?: {
    id?: number
    /**
     * 提醒标题
     */
    title?: string
    /**
     * 提醒内容
     */
    content?: string
    /**
     * 标签
     */
    tag?: string
    /**
     * 颜色
     */
    color?: string
    /**
     * 提醒类型
     */
    type?: number
    /**
     * 历法
     */
    yearType?: number
    /**
     * 提醒时间集合
     */
    times?: string
    /**
     * 循环提醒开始时间
     */
    startTime?: string
    /**
     * 循环间隔
     */
    timeStep?: number
    /**
     * 循环间隔单位
     */
    timeStepUnit?: number
    /**
     * 提醒方式
     */
    methods?: number
    /**
     * 是否开启
     */
    enable?: number
    /**
     * 提醒目标信息
     */
    mail?: string
    dd?: string
    openid?: string
    wxopenid?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 创建时间
     */
    createTime?: string
  }
  msg?: string
}

/**
 * 接口 [获取提醒详情↗](http://192.168.143.129:3001/project/11/interface/api/18134) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `GET /api/reminder/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiReminderDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/reminder/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取提醒详情↗](http://192.168.143.129:3001/project/11/interface/api/18134) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `GET /api/reminder/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiReminderDetailRequestConfig: ApiGetApiReminderDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/reminder/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiReminderDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取提醒详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18134',
    author: 11,
  },
}

/**
 * 接口 [获取提醒详情↗](http://192.168.143.129:3001/project/11/interface/api/18134) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `GET /api/reminder/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiReminderDetail = /*#__PURE__*/ (
  requestData: IApiReminderDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiReminderDetailRes>(prepare(apiGetApiReminderDetailRequestConfig, requestData), ...args)
}

apiGetApiReminderDetail.requestConfig = apiGetApiReminderDetailRequestConfig

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18143) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP应用配置`
 * @请求头 `GET /api/public/config`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicConfigReq {}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18143) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP应用配置`
 * @请求头 `GET /api/public/config`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicConfigRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18143) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP应用配置`
 * @请求头 `GET /api/public/config`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPublicConfigRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/config', undefined, string, string, true>
>

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18143) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP应用配置`
 * @请求头 `GET /api/public/config`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPublicConfigRequestConfig: ApiGetApiPublicConfigRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/config',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPublicConfig',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取配置列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18143',
    author: 11,
  },
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18143) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP应用配置`
 * @请求头 `GET /api/public/config`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPublicConfig = /*#__PURE__*/ (
  requestData?: IApiPublicConfigReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicConfigRes>(prepare(apiGetApiPublicConfigRequestConfig, requestData), ...args)
}

apiGetApiPublicConfig.requestConfig = apiGetApiPublicConfigRequestConfig

/**
 * 接口 [获取还款计划↗](http://192.168.143.129:3001/project/11/interface/api/18152) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/plan`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyRepaymentPlanReq {
  loanId: string
}

/**
 * 接口 [获取还款计划↗](http://192.168.143.129:3001/project/11/interface/api/18152) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/plan`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyRepaymentPlanRes {
  code?: number
  data?: {}[]
  msg?: string
}

/**
 * 接口 [获取还款计划↗](http://192.168.143.129:3001/project/11/interface/api/18152) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/plan`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPropertyRepaymentPlanRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/repayment/plan',
    undefined,
    string,
    'loanId',
    false
  >
>

/**
 * 接口 [获取还款计划↗](http://192.168.143.129:3001/project/11/interface/api/18152) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/plan`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPropertyRepaymentPlanRequestConfig: ApiGetApiPropertyRepaymentPlanRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/repayment/plan',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['loanId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPropertyRepaymentPlan',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取还款计划',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18152',
    author: 11,
  },
}

/**
 * 接口 [获取还款计划↗](http://192.168.143.129:3001/project/11/interface/api/18152) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/plan`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPropertyRepaymentPlan = /*#__PURE__*/ (
  requestData: IApiPropertyRepaymentPlanReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyRepaymentPlanRes>(
    prepare(apiGetApiPropertyRepaymentPlanRequestConfig, requestData),
    ...args,
  )
}

apiGetApiPropertyRepaymentPlan.requestConfig = apiGetApiPropertyRepaymentPlanRequestConfig

/**
 * 接口 [获取还款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18161) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyRepaymentListReq {
  loanId: string
}

/**
 * 接口 [获取还款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18161) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyRepaymentListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 贷款机构ID
     */
    loanId?: number
    /**
     * 关联billID
     */
    billId?: number
    /**
     * 还款记录名称
     */
    name?: string
    /**
     * 还款金额
     */
    amount?: number
    /**
     * 还款本金
     */
    principal?: number
    /**
     * 还款期数
     */
    no?: number
    /**
     * 还款日期
     */
    repaymentTime?: string
    /**
     * 创建时间
     */
    createTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取还款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18161) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPropertyRepaymentListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/repayment/list',
    undefined,
    string,
    'loanId',
    false
  >
>

/**
 * 接口 [获取还款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18161) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPropertyRepaymentListRequestConfig: ApiGetApiPropertyRepaymentListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/repayment/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['loanId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPropertyRepaymentList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取还款记录列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18161',
    author: 11,
  },
}

/**
 * 接口 [获取还款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18161) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `GET /api/property/repayment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPropertyRepaymentList = /*#__PURE__*/ (
  requestData: IApiPropertyRepaymentListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyRepaymentListRes>(
    prepare(apiGetApiPropertyRepaymentListRequestConfig, requestData),
    ...args,
  )
}

apiGetApiPropertyRepaymentList.requestConfig = apiGetApiPropertyRepaymentListRequestConfig

/**
 * 接口 [获取贷款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18170) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLoanListReq {
  lenderId?: string
}

/**
 * 接口 [获取贷款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18170) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLoanListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 贷款机构ID
     */
    lenderId?: number
    /**
     * 带看记录名称
     */
    name?: string
    /**
     * 贷款金额
     */
    amount?: number
    /**
     * 贷款利率
     */
    lendingRate?: number
    /**
     * 贷款期数
     */
    count?: number
    /**
     * 贷款方式(1: 等额本息, 2: 等额本金)
     */
    lendingType?: number
    /**
     * 还款日
     */
    repaymentDay?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 还款类型: 1:还款日, 2: 出账日后
     */
    repaymentType?: number
    /**
     * 剩余待还本金
     */
    principal?: number
  }[]
  msg?: string
}

/**
 * 接口 [获取贷款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18170) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPropertyLoanListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/loan/list',
    undefined,
    string,
    'lenderId',
    false
  >
>

/**
 * 接口 [获取贷款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18170) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPropertyLoanListRequestConfig: ApiGetApiPropertyLoanListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/loan/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['lenderId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPropertyLoanList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取贷款记录列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18170',
    author: 11,
  },
}

/**
 * 接口 [获取贷款记录列表↗](http://192.168.143.129:3001/project/11/interface/api/18170) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPropertyLoanList = /*#__PURE__*/ (
  requestData: IApiPropertyLoanListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLoanListRes>(prepare(apiGetApiPropertyLoanListRequestConfig, requestData), ...args)
}

apiGetApiPropertyLoanList.requestConfig = apiGetApiPropertyLoanListRequestConfig

/**
 * 接口 [获取贷款记录详情↗](http://192.168.143.129:3001/project/11/interface/api/18179) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLoanDetailReq {
  id: string
}

/**
 * 接口 [获取贷款记录详情↗](http://192.168.143.129:3001/project/11/interface/api/18179) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLoanDetailRes {
  code?: number
  /**
   * 贷款记录
   */
  data?: {
    id?: number
    /**
     * 贷款机构ID
     */
    lenderId?: number
    /**
     * 带看记录名称
     */
    name?: string
    /**
     * 贷款金额
     */
    amount?: number
    /**
     * 贷款利率
     */
    lendingRate?: number
    /**
     * 贷款期数
     */
    count?: number
    /**
     * 贷款方式(1: 等额本息, 2: 等额本金)
     */
    lendingType?: number
    /**
     * 还款日
     */
    repaymentDay?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 还款类型: 1:还款日, 2: 出账日后
     */
    repaymentType?: number
    /**
     * 剩余待还本金
     */
    principal?: number
  }
  msg?: string
}

/**
 * 接口 [获取贷款记录详情↗](http://192.168.143.129:3001/project/11/interface/api/18179) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPropertyLoanDetailRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/loan/detail',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 [获取贷款记录详情↗](http://192.168.143.129:3001/project/11/interface/api/18179) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPropertyLoanDetailRequestConfig: ApiGetApiPropertyLoanDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/loan/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPropertyLoanDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取贷款记录详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18179',
    author: 11,
  },
}

/**
 * 接口 [获取贷款记录详情↗](http://192.168.143.129:3001/project/11/interface/api/18179) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `GET /api/property/loan/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPropertyLoanDetail = /*#__PURE__*/ (
  requestData: IApiPropertyLoanDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLoanDetailRes>(prepare(apiGetApiPropertyLoanDetailRequestConfig, requestData), ...args)
}

apiGetApiPropertyLoanDetail.requestConfig = apiGetApiPropertyLoanDetailRequestConfig

/**
 * 接口 [获取贷款结构列表↗](http://192.168.143.129:3001/project/11/interface/api/18188) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLenderListReq {}

/**
 * 接口 [获取贷款结构列表↗](http://192.168.143.129:3001/project/11/interface/api/18188) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLenderListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 贷款关联用户
     */
    userId?: string
    /**
     * 贷款机构名称
     */
    name?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取贷款结构列表↗](http://192.168.143.129:3001/project/11/interface/api/18188) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPropertyLenderListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/lender/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取贷款结构列表↗](http://192.168.143.129:3001/project/11/interface/api/18188) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPropertyLenderListRequestConfig: ApiGetApiPropertyLenderListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/lender/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPropertyLenderList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取贷款结构列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18188',
    author: 11,
  },
}

/**
 * 接口 [获取贷款结构列表↗](http://192.168.143.129:3001/project/11/interface/api/18188) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPropertyLenderList = /*#__PURE__*/ (
  requestData?: IApiPropertyLenderListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLenderListRes>(prepare(apiGetApiPropertyLenderListRequestConfig, requestData), ...args)
}

apiGetApiPropertyLenderList.requestConfig = apiGetApiPropertyLenderListRequestConfig

/**
 * 接口 [获取贷款结构详情↗](http://192.168.143.129:3001/project/11/interface/api/18197) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLenderDetailReq {
  id: string
}

/**
 * 接口 [获取贷款结构详情↗](http://192.168.143.129:3001/project/11/interface/api/18197) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPropertyLenderDetailRes {
  code?: number
  /**
   * 贷款机构
   */
  data?: {
    id?: number
    /**
     * 贷款关联用户
     */
    userId?: string
    /**
     * 贷款机构名称
     */
    name?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [获取贷款结构详情↗](http://192.168.143.129:3001/project/11/interface/api/18197) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPropertyLenderDetailRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/lender/detail',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 [获取贷款结构详情↗](http://192.168.143.129:3001/project/11/interface/api/18197) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPropertyLenderDetailRequestConfig: ApiGetApiPropertyLenderDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/lender/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPropertyLenderDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取贷款结构详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18197',
    author: 11,
  },
}

/**
 * 接口 [获取贷款结构详情↗](http://192.168.143.129:3001/project/11/interface/api/18197) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `GET /api/property/lender/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPropertyLenderDetail = /*#__PURE__*/ (
  requestData: IApiPropertyLenderDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLenderDetailRes>(prepare(apiGetApiPropertyLenderDetailRequestConfig, requestData), ...args)
}

apiGetApiPropertyLenderDetail.requestConfig = apiGetApiPropertyLenderDetailRequestConfig

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18206) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiNotifyDetailReq {
  id: string
}

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18206) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiNotifyDetailRes {
  code?: number
  /**
   * 客户端通知
   */
  data?: {
    id?: number
    /**
     * 通知用户ID
     */
    userId?: string
    /**
     * 通知标题
     */
    title?: string
    /**
     * 通知内容
     */
    content?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 图标
     */
    icon?: string
    /**
     * 通知类型
     */
    type?: number
  }
  msg?: string
}

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18206) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiNotifyDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/notify/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18206) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiNotifyDetailRequestConfig: ApiGetApiNotifyDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/notify/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiNotifyDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取通知详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18206',
    author: 11,
  },
}

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18206) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP系统通知`
 * @请求头 `GET /api/notify/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiNotifyDetail = /*#__PURE__*/ (requestData: IApiNotifyDetailReq, ...args: UserRequestRestArgs) => {
  return request<IApiNotifyDetailRes>(prepare(apiGetApiNotifyDetailRequestConfig, requestData), ...args)
}

apiGetApiNotifyDetail.requestConfig = apiGetApiNotifyDetailRequestConfig

/**
 * 接口 [获取个人配置↗](http://192.168.143.129:3001/project/11/interface/api/18215) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `GET /api/config/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiConfigUserDetailReq {}

/**
 * 接口 [获取个人配置↗](http://192.168.143.129:3001/project/11/interface/api/18215) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `GET /api/config/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiConfigUserDetailRes {
  code?: number
  /**
   * 用户私人配置
   */
  data?: {
    id?: number
    /**
     * 归属用户ID
     */
    userId?: string
    /**
     * 配置内容
     */
    config?: string
    /**
     * 支付方式
     */
    payMethod?: string
    /**
     * 功能点
     */
    func?: string
    /**
     * 个人主题配置
     */
    theme?: string
    /**
     * 月限额设置
     */
    monthQuota?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [获取个人配置↗](http://192.168.143.129:3001/project/11/interface/api/18215) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `GET /api/config/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiConfigUserDetailRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/config/user/detail',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取个人配置↗](http://192.168.143.129:3001/project/11/interface/api/18215) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `GET /api/config/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiConfigUserDetailRequestConfig: ApiGetApiConfigUserDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/config/user/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiConfigUserDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取个人配置',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18215',
    author: 11,
  },
}

/**
 * 接口 [获取个人配置↗](http://192.168.143.129:3001/project/11/interface/api/18215) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户个人配置`
 * @请求头 `GET /api/config/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiConfigUserDetail = /*#__PURE__*/ (
  requestData?: IApiConfigUserDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiConfigUserDetailRes>(prepare(apiGetApiConfigUserDetailRequestConfig, requestData), ...args)
}

apiGetApiConfigUserDetail.requestConfig = apiGetApiConfigUserDetailRequestConfig

/**
 * 接口 [获取账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18224) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeListReq {}

/**
 * 接口 [获取账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18224) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeListRes {
  code?: number
  data?: {
    /**
     * 分类id
     */
    id?: number
    pid?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 是否是支出, 1: 收入
     */
    isIncome?: number
    /**
     * 分类名称
     */
    label?: string
    /**
     * 分类图标icon
     */
    icon?: string
    /**
     * 分类颜色
     */
    color?: string
    /**
     * 是否显示
     */
    isShow?: number
    /**
     * 分类图标img
     */
    img?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18224) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiBillTypeListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/type/list', undefined, string, string, true>
>

/**
 * 接口 [获取账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18224) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiBillTypeListRequestConfig: ApiGetApiBillTypeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/type/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBillTypeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账单分类列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18224',
    author: 11,
  },
}

/**
 * 接口 [获取账单分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18224) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiBillTypeList = /*#__PURE__*/ (
  requestData?: IApiBillTypeListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillTypeListRes>(prepare(apiGetApiBillTypeListRequestConfig, requestData), ...args)
}

apiGetApiBillTypeList.requestConfig = apiGetApiBillTypeListRequestConfig

/**
 * 接口 [获取账单分类详情↗](http://192.168.143.129:3001/project/11/interface/api/18233) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeDetailReq {
  id: string
}

/**
 * 接口 [获取账单分类详情↗](http://192.168.143.129:3001/project/11/interface/api/18233) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillTypeDetailRes {
  code?: number
  /**
   * 支付类型
   */
  data?: {
    /**
     * 分类id
     */
    id?: number
    pid?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 是否是支出, 1: 收入
     */
    isIncome?: number
    /**
     * 分类名称
     */
    label?: string
    /**
     * 分类图标icon
     */
    icon?: string
    /**
     * 分类颜色
     */
    color?: string
    /**
     * 是否显示
     */
    isShow?: number
    /**
     * 分类图标img
     */
    img?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [获取账单分类详情↗](http://192.168.143.129:3001/project/11/interface/api/18233) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiBillTypeDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/type/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取账单分类详情↗](http://192.168.143.129:3001/project/11/interface/api/18233) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiBillTypeDetailRequestConfig: ApiGetApiBillTypeDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/type/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBillTypeDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账单分类详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18233',
    author: 11,
  },
}

/**
 * 接口 [获取账单分类详情↗](http://192.168.143.129:3001/project/11/interface/api/18233) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `GET /api/bill/type/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiBillTypeDetail = /*#__PURE__*/ (
  requestData: IApiBillTypeDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillTypeDetailRes>(prepare(apiGetApiBillTypeDetailRequestConfig, requestData), ...args)
}

apiGetApiBillTypeDetail.requestConfig = apiGetApiBillTypeDetailRequestConfig

/**
 * 接口 [获取账单支付方法列表↗](http://192.168.143.129:3001/project/11/interface/api/18242) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `GET /api/bill/method/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillMethodListReq {}

/**
 * 接口 [获取账单支付方法列表↗](http://192.168.143.129:3001/project/11/interface/api/18242) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `GET /api/bill/method/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillMethodListRes {
  code?: number
  data?: {
    /**
     * id
     */
    id?: number
    /**
     * 支付名称
     */
    label?: string
    /**
     * 支付图标icon
     */
    icon?: string
    /**
     * 支付颜色
     */
    color?: string
    /**
     * 支付图标img
     */
    img?: string
    /**
     * 分组1,2,3,4
     */
    type?: number
    /**
     * 1: 逻辑显示
     */
    isShow?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取账单支付方法列表↗](http://192.168.143.129:3001/project/11/interface/api/18242) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `GET /api/bill/method/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiBillMethodListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/method/list', undefined, string, string, true>
>

/**
 * 接口 [获取账单支付方法列表↗](http://192.168.143.129:3001/project/11/interface/api/18242) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `GET /api/bill/method/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiBillMethodListRequestConfig: ApiGetApiBillMethodListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/method/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBillMethodList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账单支付方法列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18242',
    author: 11,
  },
}

/**
 * 接口 [获取账单支付方法列表↗](http://192.168.143.129:3001/project/11/interface/api/18242) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `GET /api/bill/method/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiBillMethodList = /*#__PURE__*/ (
  requestData?: IApiBillMethodListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillMethodListRes>(prepare(apiGetApiBillMethodListRequestConfig, requestData), ...args)
}

apiGetApiBillMethodList.requestConfig = apiGetApiBillMethodListRequestConfig

/**
 * 接口 [获取账本列表↗](http://192.168.143.129:3001/project/11/interface/api/18251) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillLedgerListReq {}

/**
 * 接口 [获取账本列表↗](http://192.168.143.129:3001/project/11/interface/api/18251) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillLedgerListRes {
  code?: number
  data?: {
    /**
     * 分类id
     */
    id?: number
    /**
     * 分类名称
     */
    label?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类描述
     */
    description?: string
    /**
     * 账本封面
     */
    cover?: string
    /**
     * 账本封面背景色
     */
    color?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取账本列表↗](http://192.168.143.129:3001/project/11/interface/api/18251) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiBillLedgerListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/ledger/list', undefined, string, string, true>
>

/**
 * 接口 [获取账本列表↗](http://192.168.143.129:3001/project/11/interface/api/18251) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiBillLedgerListRequestConfig: ApiGetApiBillLedgerListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/ledger/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBillLedgerList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账本列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18251',
    author: 11,
  },
}

/**
 * 接口 [获取账本列表↗](http://192.168.143.129:3001/project/11/interface/api/18251) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiBillLedgerList = /*#__PURE__*/ (
  requestData?: IApiBillLedgerListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillLedgerListRes>(prepare(apiGetApiBillLedgerListRequestConfig, requestData), ...args)
}

apiGetApiBillLedgerList.requestConfig = apiGetApiBillLedgerListRequestConfig

/**
 * 接口 [获取账本详情↗](http://192.168.143.129:3001/project/11/interface/api/18260) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillLedgerDetailReq {
  id: string
}

/**
 * 接口 [获取账本详情↗](http://192.168.143.129:3001/project/11/interface/api/18260) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillLedgerDetailRes {
  code?: number
  /**
   * 账本
   */
  data?: {
    /**
     * 分类id
     */
    id?: number
    /**
     * 分类名称
     */
    label?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类描述
     */
    description?: string
    /**
     * 账本封面
     */
    cover?: string
    /**
     * 账本封面背景色
     */
    color?: string
  }
  msg?: string
}

/**
 * 接口 [获取账本详情↗](http://192.168.143.129:3001/project/11/interface/api/18260) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiBillLedgerDetailRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/ledger/detail',
    undefined,
    string,
    'id',
    false
  >
>

/**
 * 接口 [获取账本详情↗](http://192.168.143.129:3001/project/11/interface/api/18260) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiBillLedgerDetailRequestConfig: ApiGetApiBillLedgerDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/ledger/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBillLedgerDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账本详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18260',
    author: 11,
  },
}

/**
 * 接口 [获取账本详情↗](http://192.168.143.129:3001/project/11/interface/api/18260) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `GET /api/bill/ledger/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiBillLedgerDetail = /*#__PURE__*/ (
  requestData: IApiBillLedgerDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillLedgerDetailRes>(prepare(apiGetApiBillLedgerDetailRequestConfig, requestData), ...args)
}

apiGetApiBillLedgerDetail.requestConfig = apiGetApiBillLedgerDetailRequestConfig

/**
 * 接口 [获取账单详情↗](http://192.168.143.129:3001/project/11/interface/api/18269) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillDetailReq {
  id: string
}

/**
 * 接口 [获取账单详情↗](http://192.168.143.129:3001/project/11/interface/api/18269) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillDetailRes {
  code?: number
  /**
   * 账单
   */
  data?: {
    /**
     * 账单id
     */
    id?: number
    /**
     * 关联用户
     */
    userId?: string
    /**
     * 账单名称
     */
    name?: string
    /**
     * 金额
     */
    amount?: {}
    /**
     * 是否是收入
     */
    isIncome?: number
    /**
     * 是否收藏
     */
    isCollect?: number
    /**
     * 地址
     */
    address?: string
    /**
     * 扩展信息JSON
     */
    expandInfo?: string
    /**
     * 备注
     */
    remark?: string
    /**
     * 订单号: 内部订单号, 外部订单号
     */
    orderNo?: string
    /**
     * 支付宝或微信订单交易ID
     */
    transactionId?: string
    /**
     * 支付方式
     */
    methodId?: number
    /**
     * 账单分类ID
     */
    billTypeId?: number
    /**
     * 账本ID
     */
    ledgerId?: number
    /**
     * 便捷操作时间 2020/02/20
     */
    dateStr?: string
    /**
     * 消费时间 2020/02/20
     */
    spendTime?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    img?: string
    repaymentId?: number
  }
  msg?: string
}

/**
 * 接口 [获取账单详情↗](http://192.168.143.129:3001/project/11/interface/api/18269) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiBillDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取账单详情↗](http://192.168.143.129:3001/project/11/interface/api/18269) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiBillDetailRequestConfig: ApiGetApiBillDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBillDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取账单详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18269',
    author: 11,
  },
}

/**
 * 接口 [获取账单详情↗](http://192.168.143.129:3001/project/11/interface/api/18269) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiBillDetail = /*#__PURE__*/ (requestData: IApiBillDetailReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillDetailRes>(prepare(apiGetApiBillDetailRequestConfig, requestData), ...args)
}

apiGetApiBillDetail.requestConfig = apiGetApiBillDetailRequestConfig

/**
 * 接口 [获取已收藏的账单列表↗](http://192.168.143.129:3001/project/11/interface/api/18278) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/collectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillCollectListReq {
  page?: string
  size?: string
}

/**
 * 接口 [获取已收藏的账单列表↗](http://192.168.143.129:3001/project/11/interface/api/18278) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/collectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiBillCollectListRes {
  code?: number
  data?: {
    id?: number
    billTypeId?: number
    methodId?: number
    ledgerId?: number
    amount?: number
    dateStr?: string
    name?: string
    remark?: string
    address?: string
    isIncome?: number
    isCollect?: number
    updateTime?: string
    spendTime?: string
    createTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取已收藏的账单列表↗](http://192.168.143.129:3001/project/11/interface/api/18278) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/collectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiBillCollectListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/collectList',
    undefined,
    string,
    'page' | 'size',
    false
  >
>

/**
 * 接口 [获取已收藏的账单列表↗](http://192.168.143.129:3001/project/11/interface/api/18278) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/collectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiBillCollectListRequestConfig: ApiGetApiBillCollectListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/collectList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['page', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBillCollectList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取已收藏的账单列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18278',
    author: 11,
  },
}

/**
 * 接口 [获取已收藏的账单列表↗](http://192.168.143.129:3001/project/11/interface/api/18278) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `GET /api/bill/collectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiBillCollectList = /*#__PURE__*/ (
  requestData: IApiBillCollectListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillCollectListRes>(prepare(apiGetApiBillCollectListRequestConfig, requestData), ...args)
}

apiGetApiBillCollectList.requestConfig = apiGetApiBillCollectListRequestConfig

/**
 * 接口 [用户详情↗](http://192.168.143.129:3001/project/11/interface/api/18341) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `GET /admin/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserDetailReq {
  id: string
}

/**
 * 接口 [用户详情↗](http://192.168.143.129:3001/project/11/interface/api/18341) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `GET /admin/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminUserDetailRes {
  code?: number
  data?: {
    userId?: string
    /**
     * 被操作用户的 真实userId, 原userId保留字段为操作者使用
     */
    id?: string
    username?: string
    nickname?: string
    avatar?: string
    introduction?: string
    sex?: number
    integral?: number
    dataSource?: number
    isFreeze?: number
    roleList?: string[]
    phoneAes?: string
    emailAes?: string
    createTime?: string
    phone?: string
    email?: string
  }
  msg?: string
}

/**
 * 接口 [用户详情↗](http://192.168.143.129:3001/project/11/interface/api/18341) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `GET /admin/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetAdminUserDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/detail', undefined, string, 'id', false>
>

/**
 * 接口 [用户详情↗](http://192.168.143.129:3001/project/11/interface/api/18341) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `GET /admin/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetAdminUserDetailRequestConfig: ApiGetAdminUserDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminUserDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '用户详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18341',
    author: 11,
  },
}

/**
 * 接口 [用户详情↗](http://192.168.143.129:3001/project/11/interface/api/18341) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `GET /admin/user/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetAdminUserDetail = /*#__PURE__*/ (requestData: IAdminUserDetailReq, ...args: UserRequestRestArgs) => {
  return request<IAdminUserDetailRes>(prepare(apiGetAdminUserDetailRequestConfig, requestData), ...args)
}

apiGetAdminUserDetail.requestConfig = apiGetAdminUserDetailRequestConfig

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18350) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminThemeListReq {}

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18350) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminThemeListRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18350) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetAdminThemeListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/theme/list', undefined, string, string, true>
>

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18350) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetAdminThemeListRequestConfig: ApiGetAdminThemeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/theme/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminThemeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取主题列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18350',
    author: 11,
  },
}

/**
 * 接口 [获取主题列表↗](http://192.168.143.129:3001/project/11/interface/api/18350) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetAdminThemeList = /*#__PURE__*/ (requestData?: IAdminThemeListReq, ...args: UserRequestRestArgs) => {
  return request<IAdminThemeListRes>(prepare(apiGetAdminThemeListRequestConfig, requestData), ...args)
}

apiGetAdminThemeList.requestConfig = apiGetAdminThemeListRequestConfig

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18359) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminThemeDetailReq {}

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18359) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminThemeDetailRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18359) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetAdminThemeDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/theme/detail', undefined, string, string, true>
>

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18359) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetAdminThemeDetailRequestConfig: ApiGetAdminThemeDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/theme/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminThemeDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取单个主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18359',
    author: 11,
  },
}

/**
 * 接口 [获取单个主题↗](http://192.168.143.129:3001/project/11/interface/api/18359) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `GET /admin/theme/detail`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetAdminThemeDetail = /*#__PURE__*/ (
  requestData?: IAdminThemeDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminThemeDetailRes>(prepare(apiGetAdminThemeDetailRequestConfig, requestData), ...args)
}

apiGetAdminThemeDetail.requestConfig = apiGetAdminThemeDetailRequestConfig

/**
 * 接口 [获取用户绑定的角色列表↗](http://192.168.143.129:3001/project/11/interface/api/18368) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `GET /admin/role/listByUser`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleListByUserReq {
  uId: string
}

/**
 * 接口 [获取用户绑定的角色列表↗](http://192.168.143.129:3001/project/11/interface/api/18368) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `GET /admin/role/listByUser`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminRoleListByUserRes {
  code?: number
  data?: {
    /**
     * 权限角色I
     */
    id?: number
    /**
     * 角色名称
     */
    label?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取用户绑定的角色列表↗](http://192.168.143.129:3001/project/11/interface/api/18368) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `GET /admin/role/listByUser`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetAdminRoleListByUserRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/role/listByUser',
    undefined,
    string,
    'uId',
    false
  >
>

/**
 * 接口 [获取用户绑定的角色列表↗](http://192.168.143.129:3001/project/11/interface/api/18368) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `GET /admin/role/listByUser`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetAdminRoleListByUserRequestConfig: ApiGetAdminRoleListByUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/role/listByUser',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['uId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminRoleListByUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取用户绑定的角色列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18368',
    author: 11,
  },
}

/**
 * 接口 [获取用户绑定的角色列表↗](http://192.168.143.129:3001/project/11/interface/api/18368) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `GET /admin/role/listByUser`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetAdminRoleListByUser = /*#__PURE__*/ (
  requestData: IAdminRoleListByUserReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminRoleListByUserRes>(prepare(apiGetAdminRoleListByUserRequestConfig, requestData), ...args)
}

apiGetAdminRoleListByUser.requestConfig = apiGetAdminRoleListByUserRequestConfig

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18377) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicVersionReq {
  name?: string
  appid?: string
  widgetInfo?: string
}

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18377) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicVersionRes {
  code?: number
  data?: {
    type?: string
    contents?: string
    url?: string
    platform?: string
    is_silently?: boolean
    version?: string
    min_version?: string
    update?: boolean
    appstore?: string
    msg?: string
  }
  msg?: string
}

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18377) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPublicVersionRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/public/version',
    undefined,
    string,
    'name' | 'appid' | 'widgetInfo',
    false
  >
>

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18377) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPublicVersionRequestConfig: ApiGetApiPublicVersionRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/version',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['name', 'appid', 'widgetInfo'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPublicVersion',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取应用最新版本',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18377',
    author: 11,
  },
}

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18377) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPublicVersion = /*#__PURE__*/ (
  requestData: IApiPublicVersionReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicVersionRes>(prepare(apiGetApiPublicVersionRequestConfig, requestData), ...args)
}

apiGetApiPublicVersion.requestConfig = apiGetApiPublicVersionRequestConfig

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18386) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicVersionReq {
  name?: string
  appid?: string
  widgetInfo?: string
}

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18386) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminPublicVersionRes {
  code?: number
  data?: {
    type?: string
    contents?: string
    url?: string
    platform?: string
    is_silently?: boolean
    version?: string
    min_version?: string
    update?: boolean
    appstore?: string
    msg?: string
  }
  msg?: string
}

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18386) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetAdminPublicVersionRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/version',
    undefined,
    string,
    'name' | 'appid' | 'widgetInfo',
    false
  >
>

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18386) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetAdminPublicVersionRequestConfig: ApiGetAdminPublicVersionRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/version',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['name', 'appid', 'widgetInfo'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPublicVersion',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取应用最新版本',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18386',
    author: 11,
  },
}

/**
 * 接口 [获取应用最新版本↗](http://192.168.143.129:3001/project/11/interface/api/18386) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/version`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetAdminPublicVersion = /*#__PURE__*/ (
  requestData: IAdminPublicVersionReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicVersionRes>(prepare(apiGetAdminPublicVersionRequestConfig, requestData), ...args)
}

apiGetAdminPublicVersion.requestConfig = apiGetAdminPublicVersionRequestConfig

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18395) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /api/public/loginout`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicLoginoutReq {}

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18395) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /api/public/loginout`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiPublicLoginoutRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18395) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /api/public/loginout`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiPublicLoginoutRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/loginout', undefined, string, string, true>
>

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18395) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /api/public/loginout`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiPublicLoginoutRequestConfig: ApiGetApiPublicLoginoutRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/loginout',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPublicLoginout',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '用户登出',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18395',
    author: 11,
  },
}

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18395) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /api/public/loginout`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiPublicLoginout = /*#__PURE__*/ (
  requestData?: IApiPublicLoginoutReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicLoginoutRes>(prepare(apiGetApiPublicLoginoutRequestConfig, requestData), ...args)
}

apiGetApiPublicLoginout.requestConfig = apiGetApiPublicLoginoutRequestConfig

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18404) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /admin/public/loginout`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicLoginoutReq {}

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18404) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /admin/public/loginout`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicLoginoutRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18404) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /admin/public/loginout`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminPublicLoginoutRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/loginout',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18404) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /admin/public/loginout`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminPublicLoginoutRequestConfig: ApiGetAdminPublicLoginoutRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/loginout',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPublicLoginout',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '用户登出',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18404',
    author: 11,
  },
}

/**
 * 接口 [用户登出↗](http://192.168.143.129:3001/project/11/interface/api/18404) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户登录/注册体系`
 * @请求头 `GET /admin/public/loginout`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminPublicLoginout = /*#__PURE__*/ (
  requestData?: IAdminPublicLoginoutReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicLoginoutRes>(prepare(apiGetAdminPublicLoginoutRequestConfig, requestData), ...args)
}

apiGetAdminPublicLoginout.requestConfig = apiGetAdminPublicLoginoutRequestConfig

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18413) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicConfigListReq {
  names?: string
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18413) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicConfigListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 配置内容
     */
    config?: string
    /**
     * 配置名称
     */
    name?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18413) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminPublicConfigListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/config/list',
    undefined,
    string,
    'names',
    false
  >
>

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18413) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminPublicConfigListRequestConfig: ApiGetAdminPublicConfigListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/config/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['names'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPublicConfigList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取配置列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18413',
    author: 11,
  },
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18413) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminPublicConfigList = /*#__PURE__*/ (
  requestData: IAdminPublicConfigListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicConfigListRes>(prepare(apiGetAdminPublicConfigListRequestConfig, requestData), ...args)
}

apiGetAdminPublicConfigList.requestConfig = apiGetAdminPublicConfigListRequestConfig

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18422) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPublicConfigListReq {
  names?: string
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18422) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPublicConfigListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 配置内容
     */
    config?: string
    /**
     * 配置名称
     */
    name?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18422) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiPublicConfigListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/public/config/list',
    undefined,
    string,
    'names',
    false
  >
>

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18422) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiPublicConfigListRequestConfig: ApiGetApiPublicConfigListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/config/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['names'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPublicConfigList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取配置列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18422',
    author: 11,
  },
}

/**
 * 接口 [获取配置列表↗](http://192.168.143.129:3001/project/11/interface/api/18422) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiPublicConfigList = /*#__PURE__*/ (
  requestData: IApiPublicConfigListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicConfigListRes>(prepare(apiGetApiPublicConfigListRequestConfig, requestData), ...args)
}

apiGetApiPublicConfigList.requestConfig = apiGetApiPublicConfigListRequestConfig

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18431) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPublicConfigDetailReq {
  name?: string
}

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18431) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPublicConfigDetailRes {
  code?: number
  data?: {
    id?: number
    /**
     * 配置内容
     */
    config?: string
    /**
     * 配置名称
     */
    name?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18431) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiPublicConfigDetailRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/public/config/detail',
    undefined,
    string,
    'name',
    false
  >
>

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18431) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiPublicConfigDetailRequestConfig: ApiGetApiPublicConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/config/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPublicConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取单个配置',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18431',
    author: 11,
  },
}

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18431) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /api/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiPublicConfigDetail = /*#__PURE__*/ (
  requestData: IApiPublicConfigDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicConfigDetailRes>(prepare(apiGetApiPublicConfigDetailRequestConfig, requestData), ...args)
}

apiGetApiPublicConfigDetail.requestConfig = apiGetApiPublicConfigDetailRequestConfig

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18440) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicConfigDetailReq {
  name?: string
}

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18440) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicConfigDetailRes {
  code?: number
  data?: {
    id?: number
    /**
     * 配置内容
     */
    config?: string
    /**
     * 配置名称
     */
    name?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18440) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminPublicConfigDetailRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/config/detail',
    undefined,
    string,
    'name',
    false
  >
>

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18440) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminPublicConfigDetailRequestConfig: ApiGetAdminPublicConfigDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/config/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['name'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPublicConfigDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取单个配置',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18440',
    author: 11,
  },
}

/**
 * 接口 [获取单个配置↗](http://192.168.143.129:3001/project/11/interface/api/18440) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `GET /admin/public/config/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminPublicConfigDetail = /*#__PURE__*/ (
  requestData: IAdminPublicConfigDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicConfigDetailRes>(prepare(apiGetAdminPublicConfigDetailRequestConfig, requestData), ...args)
}

apiGetAdminPublicConfigDetail.requestConfig = apiGetAdminPublicConfigDetailRequestConfig

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18449) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPublicCacheGetReq {
  key: string
}

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18449) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPublicCacheGetRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18449) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiPublicCacheGetRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/public/cache/get', undefined, string, 'key', false>
>

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18449) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiPublicCacheGetRequestConfig: ApiGetApiPublicCacheGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/public/cache/get',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['key'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiPublicCacheGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取网络缓存',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18449',
    author: 11,
  },
}

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18449) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /api/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiPublicCacheGet = /*#__PURE__*/ (
  requestData: IApiPublicCacheGetReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPublicCacheGetRes>(prepare(apiGetApiPublicCacheGetRequestConfig, requestData), ...args)
}

apiGetApiPublicCacheGet.requestConfig = apiGetApiPublicCacheGetRequestConfig

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18458) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicCacheGetReq {
  key: string
}

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18458) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicCacheGetRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18458) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminPublicCacheGetRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/cache/get',
    undefined,
    string,
    'key',
    false
  >
>

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18458) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminPublicCacheGetRequestConfig: ApiGetAdminPublicCacheGetRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/cache/get',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['key'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPublicCacheGet',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取网络缓存',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18458',
    author: 11,
  },
}

/**
 * 接口 [获取网络缓存↗](http://192.168.143.129:3001/project/11/interface/api/18458) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `其他公共方法`
 * @请求头 `GET /admin/public/cache/get`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminPublicCacheGet = /*#__PURE__*/ (
  requestData: IAdminPublicCacheGetReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicCacheGetRes>(prepare(apiGetAdminPublicCacheGetRequestConfig, requestData), ...args)
}

apiGetAdminPublicCacheGet.requestConfig = apiGetAdminPublicCacheGetRequestConfig

/**
 * 接口 [获取权限列表↗](http://192.168.143.129:3001/project/11/interface/api/18467) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionListReq {}

/**
 * 接口 [获取权限列表↗](http://192.168.143.129:3001/project/11/interface/api/18467) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionListRes {
  code?: number
  data?: {
    /**
     * 权限ID
     */
    id?: number
    /**
     * 父权限ID
     */
    pid?: number
    /**
     * 重定向URL
     */
    redirect?: string
    /**
     * 路径
     */
    path?: string
    /**
     * 唯一标识
     */
    name?: string
    /**
     * 组件路径
     */
    component?: string
    /**
     * 排序
     */
    sort?: number
    /**
     * 权限类型
     */
    type?: number
    /**
     * 扩展数据
     */
    meta?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取权限列表↗](http://192.168.143.129:3001/project/11/interface/api/18467) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminPermissionListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/permission/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取权限列表↗](http://192.168.143.129:3001/project/11/interface/api/18467) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminPermissionListRequestConfig: ApiGetAdminPermissionListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/permission/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPermissionList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取权限列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18467',
    author: 11,
  },
}

/**
 * 接口 [获取权限列表↗](http://192.168.143.129:3001/project/11/interface/api/18467) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/list`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminPermissionList = /*#__PURE__*/ (
  requestData?: IAdminPermissionListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPermissionListRes>(prepare(apiGetAdminPermissionListRequestConfig, requestData), ...args)
}

apiGetAdminPermissionList.requestConfig = apiGetAdminPermissionListRequestConfig

/**
 * 接口 [获取权限列表ByUserId↗](http://192.168.143.129:3001/project/11/interface/api/18476) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByUser`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionListByUserReq {}

/**
 * 接口 [获取权限列表ByUserId↗](http://192.168.143.129:3001/project/11/interface/api/18476) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByUser`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionListByUserRes {
  code?: number
  data?: {
    id?: number
    component?: string
    sort?: number
    type?: number
    meta?: string
    name?: string
    path?: string
    redirect?: string
    pid?: number
    createTime?: string
    updateTime?: string
    roleId?: number
  }[]
  msg?: string
}

/**
 * 接口 [获取权限列表ByUserId↗](http://192.168.143.129:3001/project/11/interface/api/18476) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByUser`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminPermissionListByUserRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/permission/listByUser',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取权限列表ByUserId↗](http://192.168.143.129:3001/project/11/interface/api/18476) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByUser`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminPermissionListByUserRequestConfig: ApiGetAdminPermissionListByUserRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/permission/listByUser',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPermissionListByUser',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取权限列表ByUserId',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18476',
    author: 11,
  },
}

/**
 * 接口 [获取权限列表ByUserId↗](http://192.168.143.129:3001/project/11/interface/api/18476) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByUser`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminPermissionListByUser = /*#__PURE__*/ (
  requestData?: IAdminPermissionListByUserReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPermissionListByUserRes>(
    prepare(apiGetAdminPermissionListByUserRequestConfig, requestData),
    ...args,
  )
}

apiGetAdminPermissionListByUser.requestConfig = apiGetAdminPermissionListByUserRequestConfig

/**
 * 接口 [获取权限列表ByRole↗](http://192.168.143.129:3001/project/11/interface/api/18485) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByRole`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionListByRoleReq {
  rid: string
}

/**
 * 接口 [获取权限列表ByRole↗](http://192.168.143.129:3001/project/11/interface/api/18485) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByRole`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionListByRoleRes {
  code?: number
  data?: {
    id?: number
    pid?: number
  }[]
  msg?: string
}

/**
 * 接口 [获取权限列表ByRole↗](http://192.168.143.129:3001/project/11/interface/api/18485) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByRole`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminPermissionListByRoleRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/permission/listByRole',
    undefined,
    string,
    'rid',
    false
  >
>

/**
 * 接口 [获取权限列表ByRole↗](http://192.168.143.129:3001/project/11/interface/api/18485) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByRole`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminPermissionListByRoleRequestConfig: ApiGetAdminPermissionListByRoleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/permission/listByRole',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['rid'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminPermissionListByRole',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取权限列表ByRole',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18485',
    author: 11,
  },
}

/**
 * 接口 [获取权限列表ByRole↗](http://192.168.143.129:3001/project/11/interface/api/18485) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `GET /admin/permission/listByRole`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminPermissionListByRole = /*#__PURE__*/ (
  requestData: IAdminPermissionListByRoleReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPermissionListByRoleRes>(
    prepare(apiGetAdminPermissionListByRoleRequestConfig, requestData),
    ...args,
  )
}

apiGetAdminPermissionListByRole.requestConfig = apiGetAdminPermissionListByRoleRequestConfig

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18494) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `GET /admin/notify/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminNotifyDetailReq {
  id: string
}

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18494) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `GET /admin/notify/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminNotifyDetailRes {
  code?: number
  /**
   * 客户端通知
   */
  data?: {
    id?: number
    /**
     * 通知用户ID
     */
    userId?: string
    /**
     * 通知标题
     */
    title?: string
    /**
     * 通知内容
     */
    content?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 图标
     */
    icon?: string
    /**
     * 通知类型
     */
    type?: number
  }
  msg?: string
}

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18494) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `GET /admin/notify/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminNotifyDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/notify/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18494) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `GET /admin/notify/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminNotifyDetailRequestConfig: ApiGetAdminNotifyDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/notify/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminNotifyDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取通知详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18494',
    author: 11,
  },
}

/**
 * 接口 [获取通知详情↗](http://192.168.143.129:3001/project/11/interface/api/18494) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `GET /admin/notify/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminNotifyDetail = /*#__PURE__*/ (
  requestData: IAdminNotifyDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminNotifyDetailRes>(prepare(apiGetAdminNotifyDetailRequestConfig, requestData), ...args)
}

apiGetAdminNotifyDetail.requestConfig = apiGetAdminNotifyDetailRequestConfig

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18503) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /api/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiFeedbackDetailReq {
  id: string
}

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18503) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /api/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiFeedbackDetailRes {
  code?: number
  /**
   * 用户反馈管理
   */
  data?: {
    /**
     * 用户反馈管理ID
     */
    id?: number
    /**
     * 用户唯一ID
     */
    userId?: string
    /**
     * 回复微信
     */
    wx?: string
    /**
     * 回复手机号
     */
    phone?: string
    /**
     * 返回内容
     */
    feedback?: string
    /**
     * 状态
     */
    status?: number
    /**
     * 是否需要回复
     */
    isReply?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18503) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /api/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiFeedbackDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/feedback/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18503) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /api/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiFeedbackDetailRequestConfig: ApiGetApiFeedbackDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/feedback/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiFeedbackDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取用户反馈',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18503',
    author: 11,
  },
}

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18503) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /api/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiFeedbackDetail = /*#__PURE__*/ (
  requestData: IApiFeedbackDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiFeedbackDetailRes>(prepare(apiGetApiFeedbackDetailRequestConfig, requestData), ...args)
}

apiGetApiFeedbackDetail.requestConfig = apiGetApiFeedbackDetailRequestConfig

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18512) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /admin/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminFeedbackDetailReq {
  id: string
}

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18512) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /admin/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminFeedbackDetailRes {
  code?: number
  /**
   * 用户反馈管理
   */
  data?: {
    /**
     * 用户反馈管理ID
     */
    id?: number
    /**
     * 用户唯一ID
     */
    userId?: string
    /**
     * 回复微信
     */
    wx?: string
    /**
     * 回复手机号
     */
    phone?: string
    /**
     * 返回内容
     */
    feedback?: string
    /**
     * 状态
     */
    status?: number
    /**
     * 是否需要回复
     */
    isReply?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18512) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /admin/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminFeedbackDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/feedback/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18512) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /admin/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminFeedbackDetailRequestConfig: ApiGetAdminFeedbackDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/feedback/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminFeedbackDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取用户反馈',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18512',
    author: 11,
  },
}

/**
 * 接口 [获取用户反馈↗](http://192.168.143.129:3001/project/11/interface/api/18512) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `GET /admin/feedback/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminFeedbackDetail = /*#__PURE__*/ (
  requestData: IAdminFeedbackDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminFeedbackDetailRes>(prepare(apiGetAdminFeedbackDetailRequestConfig, requestData), ...args)
}

apiGetAdminFeedbackDetail.requestConfig = apiGetAdminFeedbackDetailRequestConfig

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18557) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /admin/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminBooksDetailReq {
  id: string
}

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18557) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /admin/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminBooksDetailRes {
  code?: number
  /**
   * 书册
   */
  data?: {
    /**
     * 主键id
     */
    id?: number
    /**
     * 用户id
     */
    userId?: string
    /**
     * 书名
     */
    title?: string
    /**
     * 封面
     */
    cover?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否删除
     */
    isDelete?: boolean
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18557) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /admin/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminBooksDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/books/detail', undefined, string, 'id', false>
>

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18557) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /admin/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminBooksDetailRequestConfig: ApiGetAdminBooksDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/books/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminBooksDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '查询书册详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18557',
    author: 11,
  },
}

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18557) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /admin/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminBooksDetail = /*#__PURE__*/ (
  requestData: IAdminBooksDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBooksDetailRes>(prepare(apiGetAdminBooksDetailRequestConfig, requestData), ...args)
}

apiGetAdminBooksDetail.requestConfig = apiGetAdminBooksDetailRequestConfig

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18566) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /api/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBooksDetailReq {
  id: string
}

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18566) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /api/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBooksDetailRes {
  code?: number
  /**
   * 书册
   */
  data?: {
    /**
     * 主键id
     */
    id?: number
    /**
     * 用户id
     */
    userId?: string
    /**
     * 书名
     */
    title?: string
    /**
     * 封面
     */
    cover?: string
    /**
     * 描述
     */
    description?: string
    /**
     * 是否删除
     */
    isDelete?: boolean
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }
  msg?: string
}

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18566) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /api/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiBooksDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/books/detail', undefined, string, 'id', false>
>

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18566) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /api/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiBooksDetailRequestConfig: ApiGetApiBooksDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/books/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiBooksDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '查询书册详情',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18566',
    author: 11,
  },
}

/**
 * 接口 [查询书册详情↗](http://192.168.143.129:3001/project/11/interface/api/18566) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `GET /api/books/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiBooksDetail = /*#__PURE__*/ (requestData: IApiBooksDetailReq, ...args: UserRequestRestArgs) => {
  return request<IApiBooksDetailRes>(prepare(apiGetApiBooksDetailRequestConfig, requestData), ...args)
}

apiGetApiBooksDetail.requestConfig = apiGetApiBooksDetailRequestConfig

/**
 * 接口 [注销账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18593) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `DELETE /api/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiUserDeleteReq {
  type?: number
  phone?: string
  email?: string
  code?: string
  password?: string
  username?: string
}

/**
 * 接口 [注销账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18593) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `DELETE /api/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiUserDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [注销账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18593) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `DELETE /api/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiUserDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/user/delete', undefined, string, string, false>
>

/**
 * 接口 [注销账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18593) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `DELETE /api/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiUserDeleteRequestConfig: ApiDeleteApiUserDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/user/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiUserDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '注销账号(已登录)',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18593',
    author: 11,
  },
}

/**
 * 接口 [注销账号(已登录)↗](http://192.168.143.129:3001/project/11/interface/api/18593) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP用户管理`
 * @请求头 `DELETE /api/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiUserDelete = /*#__PURE__*/ (requestData: IApiUserDeleteReq, ...args: UserRequestRestArgs) => {
  return request<IApiUserDeleteRes>(prepare(apiDeleteApiUserDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiUserDelete.requestConfig = apiDeleteApiUserDeleteRequestConfig

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18602) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `DELETE /api/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiThemeDeleteReq {
  /**
   * 主题id
   */
  id?: number
  /**
   * 主题名字
   */
  name?: string
  /**
   * 主题描述
   */
  description?: string
  /**
   * 主题内容
   */
  content?: string
  /**
   * 主题下载路径
   */
  url?: string
  /**
   * 所需积分
   */
  integral?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18602) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `DELETE /api/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiThemeDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18602) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `DELETE /api/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiThemeDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/theme/delete', undefined, string, string, false>
>

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18602) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `DELETE /api/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiThemeDeleteRequestConfig: ApiDeleteApiThemeDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/theme/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiThemeDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18602',
    author: 11,
  },
}

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18602) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP主题管理`
 * @请求头 `DELETE /api/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiThemeDelete = /*#__PURE__*/ (
  requestData: IApiThemeDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiThemeDeleteRes>(prepare(apiDeleteApiThemeDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiThemeDelete.requestConfig = apiDeleteApiThemeDeleteRequestConfig

/**
 * 接口 [删除提醒↗](http://192.168.143.129:3001/project/11/interface/api/18611) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `DELETE /api/reminder/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiReminderDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [删除提醒↗](http://192.168.143.129:3001/project/11/interface/api/18611) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `DELETE /api/reminder/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiReminderDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除提醒↗](http://192.168.143.129:3001/project/11/interface/api/18611) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `DELETE /api/reminder/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiReminderDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/reminder/delete', undefined, string, string, false>
>

/**
 * 接口 [删除提醒↗](http://192.168.143.129:3001/project/11/interface/api/18611) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `DELETE /api/reminder/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiReminderDeleteRequestConfig: ApiDeleteApiReminderDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/reminder/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiReminderDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除提醒',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18611',
    author: 11,
  },
}

/**
 * 接口 [删除提醒↗](http://192.168.143.129:3001/project/11/interface/api/18611) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `APP消息提醒`
 * @请求头 `DELETE /api/reminder/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiReminderDelete = /*#__PURE__*/ (
  requestData: IApiReminderDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiReminderDeleteRes>(prepare(apiDeleteApiReminderDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiReminderDelete.requestConfig = apiDeleteApiReminderDeleteRequestConfig

/**
 * 接口 [删除还款记录↗](http://192.168.143.129:3001/project/11/interface/api/18620) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `DELETE /api/property/repayment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPropertyRepaymentDeleteReq {
  id?: number
  /**
   * 贷款机构ID
   */
  loanId?: number
  /**
   * 关联billID
   */
  billId?: number
  /**
   * 还款记录名称
   */
  name?: string
  /**
   * 还款金额
   */
  amount?: number
  /**
   * 还款本金
   */
  principal?: number
  /**
   * 还款期数
   */
  no?: number
  /**
   * 还款日期
   */
  repaymentTime?: string
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [删除还款记录↗](http://192.168.143.129:3001/project/11/interface/api/18620) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `DELETE /api/property/repayment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPropertyRepaymentDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除还款记录↗](http://192.168.143.129:3001/project/11/interface/api/18620) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `DELETE /api/property/repayment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiPropertyRepaymentDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/repayment/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除还款记录↗](http://192.168.143.129:3001/project/11/interface/api/18620) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `DELETE /api/property/repayment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiPropertyRepaymentDeleteRequestConfig: ApiDeleteApiPropertyRepaymentDeleteRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/api/property/repayment/delete',
    method: Method.DELETE,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'apiDeleteApiPropertyRepaymentDelete',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {
      name: '删除还款记录',
      category: '默认分类',
      project: 'ipink',
      url: 'http://192.168.143.129:3001/project/11/interface/api/18620',
      author: 11,
    },
  }

/**
 * 接口 [删除还款记录↗](http://192.168.143.129:3001/project/11/interface/api/18620) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户还款记录`
 * @请求头 `DELETE /api/property/repayment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiPropertyRepaymentDelete = /*#__PURE__*/ (
  requestData: IApiPropertyRepaymentDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyRepaymentDeleteRes>(
    prepare(apiDeleteApiPropertyRepaymentDeleteRequestConfig, requestData),
    ...args,
  )
}

apiDeleteApiPropertyRepaymentDelete.requestConfig = apiDeleteApiPropertyRepaymentDeleteRequestConfig

/**
 * 接口 [删除贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/18629) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `DELETE /api/property/loan/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPropertyLoanDeleteReq {
  id?: number
  /**
   * 贷款机构ID
   */
  lenderId?: number
  /**
   * 带看记录名称
   */
  name?: string
  /**
   * 贷款金额
   */
  amount?: number
  /**
   * 贷款利率
   */
  lendingRate?: number
  /**
   * 贷款期数
   */
  count?: number
  /**
   * 贷款方式(1: 等额本息, 2: 等额本金)
   */
  lendingType?: number
  /**
   * 还款日
   */
  repaymentDay?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 还款类型: 1:还款日, 2: 出账日后
   */
  repaymentType?: number
  /**
   * 剩余待还本金
   */
  principal?: number
}

/**
 * 接口 [删除贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/18629) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `DELETE /api/property/loan/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPropertyLoanDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/18629) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `DELETE /api/property/loan/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiPropertyLoanDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/loan/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/18629) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `DELETE /api/property/loan/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiPropertyLoanDeleteRequestConfig: ApiDeleteApiPropertyLoanDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/loan/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiPropertyLoanDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除贷款记录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18629',
    author: 11,
  },
}

/**
 * 接口 [删除贷款记录↗](http://192.168.143.129:3001/project/11/interface/api/18629) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款记录`
 * @请求头 `DELETE /api/property/loan/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiPropertyLoanDelete = /*#__PURE__*/ (
  requestData: IApiPropertyLoanDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLoanDeleteRes>(prepare(apiDeleteApiPropertyLoanDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiPropertyLoanDelete.requestConfig = apiDeleteApiPropertyLoanDeleteRequestConfig

/**
 * 接口 [删除贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/18638) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `DELETE /api/property/lender/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPropertyLenderDeleteReq {
  id?: number
  /**
   * 贷款关联用户
   */
  userId?: string
  /**
   * 贷款机构名称
   */
  name?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [删除贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/18638) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `DELETE /api/property/lender/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiPropertyLenderDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/18638) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `DELETE /api/property/lender/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiPropertyLenderDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/property/lender/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/18638) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `DELETE /api/property/lender/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiPropertyLenderDeleteRequestConfig: ApiDeleteApiPropertyLenderDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/property/lender/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiPropertyLenderDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除贷款结构',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18638',
    author: 11,
  },
}

/**
 * 接口 [删除贷款结构↗](http://192.168.143.129:3001/project/11/interface/api/18638) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户贷款管理`
 * @请求头 `DELETE /api/property/lender/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiPropertyLenderDelete = /*#__PURE__*/ (
  requestData: IApiPropertyLenderDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiPropertyLenderDeleteRes>(
    prepare(apiDeleteApiPropertyLenderDeleteRequestConfig, requestData),
    ...args,
  )
}

apiDeleteApiPropertyLenderDelete.requestConfig = apiDeleteApiPropertyLenderDeleteRequestConfig

/**
 * 接口 [取消收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/18647) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/unCollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillUnCollectReq {
  startTime?: string
  endTime?: string
  minAmount?: number
  maxAmount?: number
  billTypeId?: number
  billTypeIdList?: number[]
  methodId?: number
  ledgerId?: number
  isIncome?: number
  keyword?: string
  code?: string
  page?: number
  size?: number
  skip?: number
  id?: number
}

/**
 * 接口 [取消收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/18647) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/unCollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillUnCollectRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [取消收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/18647) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/unCollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiBillUnCollectRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/unCollect', undefined, string, string, false>
>

/**
 * 接口 [取消收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/18647) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/unCollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiBillUnCollectRequestConfig: ApiDeleteApiBillUnCollectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/unCollect',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiBillUnCollect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '取消收藏账单',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18647',
    author: 11,
  },
}

/**
 * 接口 [取消收藏账单↗](http://192.168.143.129:3001/project/11/interface/api/18647) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/unCollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiBillUnCollect = /*#__PURE__*/ (
  requestData: IApiBillUnCollectReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillUnCollectRes>(prepare(apiDeleteApiBillUnCollectRequestConfig, requestData), ...args)
}

apiDeleteApiBillUnCollect.requestConfig = apiDeleteApiBillUnCollectRequestConfig

/**
 * 接口 [删除账单分类↗](http://192.168.143.129:3001/project/11/interface/api/18656) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `DELETE /api/bill/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillTypeDeleteReq {
  /**
   * 分类id
   */
  id?: number
  pid?: number
  /**
   * 关联用户
   */
  userId?: string
  /**
   * 是否是支出, 1: 收入
   */
  isIncome?: number
  /**
   * 分类名称
   */
  label?: string
  /**
   * 分类图标icon
   */
  icon?: string
  /**
   * 分类颜色
   */
  color?: string
  /**
   * 是否显示
   */
  isShow?: number
  /**
   * 分类图标img
   */
  img?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
}

/**
 * 接口 [删除账单分类↗](http://192.168.143.129:3001/project/11/interface/api/18656) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `DELETE /api/bill/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillTypeDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除账单分类↗](http://192.168.143.129:3001/project/11/interface/api/18656) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `DELETE /api/bill/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiBillTypeDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/type/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除账单分类↗](http://192.168.143.129:3001/project/11/interface/api/18656) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `DELETE /api/bill/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiBillTypeDeleteRequestConfig: ApiDeleteApiBillTypeDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/type/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiBillTypeDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除账单分类',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18656',
    author: 11,
  },
}

/**
 * 接口 [删除账单分类↗](http://192.168.143.129:3001/project/11/interface/api/18656) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单类型`
 * @请求头 `DELETE /api/bill/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiBillTypeDelete = /*#__PURE__*/ (
  requestData: IApiBillTypeDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillTypeDeleteRes>(prepare(apiDeleteApiBillTypeDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiBillTypeDelete.requestConfig = apiDeleteApiBillTypeDeleteRequestConfig

/**
 * 接口 [删除支付方法↗](http://192.168.143.129:3001/project/11/interface/api/18665) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `DELETE /api/bill/method/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillMethodDeleteReq {
  /**
   * id
   */
  id?: number
  /**
   * 支付名称
   */
  label?: string
  /**
   * 支付图标icon
   */
  icon?: string
  /**
   * 支付颜色
   */
  color?: string
  /**
   * 支付图标img
   */
  img?: string
  /**
   * 分组1,2,3,4
   */
  type?: number
  /**
   * 1: 逻辑显示
   */
  isShow?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  code?: string
}

/**
 * 接口 [删除支付方法↗](http://192.168.143.129:3001/project/11/interface/api/18665) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `DELETE /api/bill/method/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillMethodDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除支付方法↗](http://192.168.143.129:3001/project/11/interface/api/18665) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `DELETE /api/bill/method/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiBillMethodDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/method/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除支付方法↗](http://192.168.143.129:3001/project/11/interface/api/18665) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `DELETE /api/bill/method/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiBillMethodDeleteRequestConfig: ApiDeleteApiBillMethodDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/method/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiBillMethodDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除支付方法',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18665',
    author: 11,
  },
}

/**
 * 接口 [删除支付方法↗](http://192.168.143.129:3001/project/11/interface/api/18665) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单支付类型`
 * @请求头 `DELETE /api/bill/method/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiBillMethodDelete = /*#__PURE__*/ (
  requestData: IApiBillMethodDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillMethodDeleteRes>(prepare(apiDeleteApiBillMethodDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiBillMethodDelete.requestConfig = apiDeleteApiBillMethodDeleteRequestConfig

/**
 * 接口 [删除账本↗](http://192.168.143.129:3001/project/11/interface/api/18674) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `DELETE /api/bill/ledger/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillLedgerDeleteReq {
  /**
   * 分类id
   */
  id?: number
  /**
   * 分类名称
   */
  label?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 分类描述
   */
  description?: string
  /**
   * 账本封面
   */
  cover?: string
  /**
   * 账本封面背景色
   */
  color?: string
}

/**
 * 接口 [删除账本↗](http://192.168.143.129:3001/project/11/interface/api/18674) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `DELETE /api/bill/ledger/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillLedgerDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除账本↗](http://192.168.143.129:3001/project/11/interface/api/18674) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `DELETE /api/bill/ledger/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiBillLedgerDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bill/ledger/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除账本↗](http://192.168.143.129:3001/project/11/interface/api/18674) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `DELETE /api/bill/ledger/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiBillLedgerDeleteRequestConfig: ApiDeleteApiBillLedgerDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/ledger/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiBillLedgerDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除账本',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18674',
    author: 11,
  },
}

/**
 * 接口 [删除账本↗](http://192.168.143.129:3001/project/11/interface/api/18674) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账本管理`
 * @请求头 `DELETE /api/bill/ledger/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiBillLedgerDelete = /*#__PURE__*/ (
  requestData: IApiBillLedgerDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBillLedgerDeleteRes>(prepare(apiDeleteApiBillLedgerDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiBillLedgerDelete.requestConfig = apiDeleteApiBillLedgerDeleteRequestConfig

/**
 * 接口 [删除账单↗](http://192.168.143.129:3001/project/11/interface/api/18683) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillDeleteReq {
  startTime?: string
  endTime?: string
  minAmount?: number
  maxAmount?: number
  billTypeId?: number
  billTypeIdList?: number[]
  methodId?: number
  ledgerId?: number
  isIncome?: number
  keyword?: string
  code?: string
  page?: number
  size?: number
  skip?: number
  id?: number
}

/**
 * 接口 [删除账单↗](http://192.168.143.129:3001/project/11/interface/api/18683) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBillDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除账单↗](http://192.168.143.129:3001/project/11/interface/api/18683) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiBillDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/bill/delete', undefined, string, string, false>
>

/**
 * 接口 [删除账单↗](http://192.168.143.129:3001/project/11/interface/api/18683) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiBillDeleteRequestConfig: ApiDeleteApiBillDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bill/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiBillDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除账单',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18683',
    author: 11,
  },
}

/**
 * 接口 [删除账单↗](http://192.168.143.129:3001/project/11/interface/api/18683) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户账单中心`
 * @请求头 `DELETE /api/bill/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiBillDelete = /*#__PURE__*/ (requestData: IApiBillDeleteReq, ...args: UserRequestRestArgs) => {
  return request<IApiBillDeleteRes>(prepare(apiDeleteApiBillDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiBillDelete.requestConfig = apiDeleteApiBillDeleteRequestConfig

/**
 * 接口 [撤销软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18746) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/undelete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserUndeleteReq {
  /**
   * 用户的 userId, 原userId保留字段为操作者使用
   */
  id?: string
}

/**
 * 接口 [撤销软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18746) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/undelete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserUndeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [撤销软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18746) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/undelete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminUserUndeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/undelete', undefined, string, string, false>
>

/**
 * 接口 [撤销软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18746) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/undelete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminUserUndeleteRequestConfig: ApiDeleteAdminUserUndeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/undelete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminUserUndelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '撤销软删除用户',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18746',
    author: 11,
  },
}

/**
 * 接口 [撤销软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18746) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/undelete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminUserUndelete = /*#__PURE__*/ (
  requestData: IAdminUserUndeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminUserUndeleteRes>(prepare(apiDeleteAdminUserUndeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminUserUndelete.requestConfig = apiDeleteAdminUserUndeleteRequestConfig

/**
 * 接口 [解禁用户↗](http://192.168.143.129:3001/project/11/interface/api/18755) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/enable`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserEnableReq {
  /**
   * 用户的 userId, 原userId保留字段为操作者使用
   */
  id?: string
}

/**
 * 接口 [解禁用户↗](http://192.168.143.129:3001/project/11/interface/api/18755) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/enable`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserEnableRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [解禁用户↗](http://192.168.143.129:3001/project/11/interface/api/18755) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/enable`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminUserEnableRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/enable', undefined, string, string, false>
>

/**
 * 接口 [解禁用户↗](http://192.168.143.129:3001/project/11/interface/api/18755) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/enable`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminUserEnableRequestConfig: ApiDeleteAdminUserEnableRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/enable',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminUserEnable',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '解禁用户',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18755',
    author: 11,
  },
}

/**
 * 接口 [解禁用户↗](http://192.168.143.129:3001/project/11/interface/api/18755) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/enable`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminUserEnable = /*#__PURE__*/ (
  requestData: IAdminUserEnableReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminUserEnableRes>(prepare(apiDeleteAdminUserEnableRequestConfig, requestData), ...args)
}

apiDeleteAdminUserEnable.requestConfig = apiDeleteAdminUserEnableRequestConfig

/**
 * 接口 [禁用用户↗](http://192.168.143.129:3001/project/11/interface/api/18764) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/disabled`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserDisabledReq {
  /**
   * 用户的 userId, 原userId保留字段为操作者使用
   */
  id?: string
}

/**
 * 接口 [禁用用户↗](http://192.168.143.129:3001/project/11/interface/api/18764) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/disabled`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserDisabledRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [禁用用户↗](http://192.168.143.129:3001/project/11/interface/api/18764) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/disabled`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminUserDisabledRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/disabled', undefined, string, string, false>
>

/**
 * 接口 [禁用用户↗](http://192.168.143.129:3001/project/11/interface/api/18764) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/disabled`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminUserDisabledRequestConfig: ApiDeleteAdminUserDisabledRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/disabled',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminUserDisabled',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '禁用用户',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18764',
    author: 11,
  },
}

/**
 * 接口 [禁用用户↗](http://192.168.143.129:3001/project/11/interface/api/18764) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/disabled`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminUserDisabled = /*#__PURE__*/ (
  requestData: IAdminUserDisabledReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminUserDisabledRes>(prepare(apiDeleteAdminUserDisabledRequestConfig, requestData), ...args)
}

apiDeleteAdminUserDisabled.requestConfig = apiDeleteAdminUserDisabledRequestConfig

/**
 * 接口 [软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18773) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserDeleteReq {
  /**
   * 用户的 userId, 原userId保留字段为操作者使用
   */
  id?: string
}

/**
 * 接口 [软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18773) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminUserDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18773) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminUserDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/user/delete', undefined, string, string, false>
>

/**
 * 接口 [软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18773) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminUserDeleteRequestConfig: ApiDeleteAdminUserDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/user/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminUserDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '软删除用户',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18773',
    author: 11,
  },
}

/**
 * 接口 [软删除用户↗](http://192.168.143.129:3001/project/11/interface/api/18773) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户管理`
 * @请求头 `DELETE /admin/user/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminUserDelete = /*#__PURE__*/ (
  requestData: IAdminUserDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminUserDeleteRes>(prepare(apiDeleteAdminUserDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminUserDelete.requestConfig = apiDeleteAdminUserDeleteRequestConfig

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18782) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `DELETE /admin/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminThemeDeleteReq {}

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18782) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `DELETE /admin/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminThemeDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18782) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `DELETE /admin/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminThemeDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/theme/delete', undefined, string, string, true>
>

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18782) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `DELETE /admin/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminThemeDeleteRequestConfig: ApiDeleteAdminThemeDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/theme/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.raw,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminThemeDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除主题',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18782',
    author: 11,
  },
}

/**
 * 接口 [删除主题↗](http://192.168.143.129:3001/project/11/interface/api/18782) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-主题管理`
 * @请求头 `DELETE /admin/theme/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminThemeDelete = /*#__PURE__*/ (
  requestData?: IAdminThemeDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminThemeDeleteRes>(prepare(apiDeleteAdminThemeDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminThemeDelete.requestConfig = apiDeleteAdminThemeDeleteRequestConfig

/**
 * 接口 [删除角色↗](http://192.168.143.129:3001/project/11/interface/api/18791) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `DELETE /admin/role/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminRoleDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
}

/**
 * 接口 [删除角色↗](http://192.168.143.129:3001/project/11/interface/api/18791) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `DELETE /admin/role/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminRoleDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除角色↗](http://192.168.143.129:3001/project/11/interface/api/18791) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `DELETE /admin/role/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminRoleDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/role/delete', undefined, string, string, false>
>

/**
 * 接口 [删除角色↗](http://192.168.143.129:3001/project/11/interface/api/18791) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `DELETE /admin/role/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminRoleDeleteRequestConfig: ApiDeleteAdminRoleDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/role/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminRoleDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除角色',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18791',
    author: 11,
  },
}

/**
 * 接口 [删除角色↗](http://192.168.143.129:3001/project/11/interface/api/18791) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-角色管理`
 * @请求头 `DELETE /admin/role/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminRoleDelete = /*#__PURE__*/ (
  requestData: IAdminRoleDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminRoleDeleteRes>(prepare(apiDeleteAdminRoleDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminRoleDelete.requestConfig = apiDeleteAdminRoleDeleteRequestConfig

/**
 * 接口 [删除配置↗](http://192.168.143.129:3001/project/11/interface/api/18800) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `DELETE /admin/public/config/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicConfigDeleteReq {
  id?: number
  /**
   * 配置内容
   */
  config?: string
  /**
   * 配置名称
   */
  name?: string
  phone?: string
  email?: string
  code?: string
}

/**
 * 接口 [删除配置↗](http://192.168.143.129:3001/project/11/interface/api/18800) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `DELETE /admin/public/config/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPublicConfigDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除配置↗](http://192.168.143.129:3001/project/11/interface/api/18800) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `DELETE /admin/public/config/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminPublicConfigDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/public/config/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除配置↗](http://192.168.143.129:3001/project/11/interface/api/18800) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `DELETE /admin/public/config/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminPublicConfigDeleteRequestConfig: ApiDeleteAdminPublicConfigDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/public/config/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminPublicConfigDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除配置',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18800',
    author: 11,
  },
}

/**
 * 接口 [删除配置↗](http://192.168.143.129:3001/project/11/interface/api/18800) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `系统公共配置`
 * @请求头 `DELETE /admin/public/config/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminPublicConfigDelete = /*#__PURE__*/ (
  requestData: IAdminPublicConfigDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPublicConfigDeleteRes>(
    prepare(apiDeleteAdminPublicConfigDeleteRequestConfig, requestData),
    ...args,
  )
}

apiDeleteAdminPublicConfigDelete.requestConfig = apiDeleteAdminPublicConfigDeleteRequestConfig

/**
 * 接口 [删除权限↗](http://192.168.143.129:3001/project/11/interface/api/18809) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `DELETE /admin/permission/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
}

/**
 * 接口 [删除权限↗](http://192.168.143.129:3001/project/11/interface/api/18809) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `DELETE /admin/permission/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminPermissionDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除权限↗](http://192.168.143.129:3001/project/11/interface/api/18809) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `DELETE /admin/permission/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminPermissionDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/permission/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除权限↗](http://192.168.143.129:3001/project/11/interface/api/18809) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `DELETE /admin/permission/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminPermissionDeleteRequestConfig: ApiDeleteAdminPermissionDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/permission/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminPermissionDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除权限',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18809',
    author: 11,
  },
}

/**
 * 接口 [删除权限↗](http://192.168.143.129:3001/project/11/interface/api/18809) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-权限管理`
 * @请求头 `DELETE /admin/permission/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminPermissionDelete = /*#__PURE__*/ (
  requestData: IAdminPermissionDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminPermissionDeleteRes>(prepare(apiDeleteAdminPermissionDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminPermissionDelete.requestConfig = apiDeleteAdminPermissionDeleteRequestConfig

/**
 * 接口 [删除通知↗](http://192.168.143.129:3001/project/11/interface/api/18818) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `DELETE /admin/notify/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export type IAdminNotifyDeleteReq = number

/**
 * 接口 [删除通知↗](http://192.168.143.129:3001/project/11/interface/api/18818) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `DELETE /admin/notify/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminNotifyDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除通知↗](http://192.168.143.129:3001/project/11/interface/api/18818) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `DELETE /admin/notify/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminNotifyDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/notify/delete', undefined, string, string, false>
>

/**
 * 接口 [删除通知↗](http://192.168.143.129:3001/project/11/interface/api/18818) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `DELETE /admin/notify/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminNotifyDeleteRequestConfig: ApiDeleteAdminNotifyDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/notify/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminNotifyDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除通知',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18818',
    author: 11,
  },
}

/**
 * 接口 [删除通知↗](http://192.168.143.129:3001/project/11/interface/api/18818) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-系统通知`
 * @请求头 `DELETE /admin/notify/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminNotifyDelete = /*#__PURE__*/ (
  requestData: IAdminNotifyDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminNotifyDeleteRes>(prepare(apiDeleteAdminNotifyDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminNotifyDelete.requestConfig = apiDeleteAdminNotifyDeleteRequestConfig

/**
 * 接口 [删除IP↗](http://192.168.143.129:3001/project/11/interface/api/18827) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `DELETE /admin/ip/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminIpDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
}

/**
 * 接口 [删除IP↗](http://192.168.143.129:3001/project/11/interface/api/18827) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `DELETE /admin/ip/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminIpDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除IP↗](http://192.168.143.129:3001/project/11/interface/api/18827) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `DELETE /admin/ip/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminIpDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/ip/delete', undefined, string, string, false>
>

/**
 * 接口 [删除IP↗](http://192.168.143.129:3001/project/11/interface/api/18827) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `DELETE /admin/ip/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminIpDeleteRequestConfig: ApiDeleteAdminIpDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/ip/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminIpDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除IP',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18827',
    author: 11,
  },
}

/**
 * 接口 [删除IP↗](http://192.168.143.129:3001/project/11/interface/api/18827) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `后台-IP管理`
 * @请求头 `DELETE /admin/ip/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminIpDelete = /*#__PURE__*/ (requestData: IAdminIpDeleteReq, ...args: UserRequestRestArgs) => {
  return request<IAdminIpDeleteRes>(prepare(apiDeleteAdminIpDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminIpDelete.requestConfig = apiDeleteAdminIpDeleteRequestConfig

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18836) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /admin/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminFeedbackDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18836) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /admin/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminFeedbackDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18836) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /admin/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminFeedbackDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/feedback/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18836) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /admin/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminFeedbackDeleteRequestConfig: ApiDeleteAdminFeedbackDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/feedback/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminFeedbackDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取用户反馈列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18836',
    author: 11,
  },
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18836) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /admin/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminFeedbackDelete = /*#__PURE__*/ (
  requestData: IAdminFeedbackDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminFeedbackDeleteRes>(prepare(apiDeleteAdminFeedbackDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminFeedbackDelete.requestConfig = apiDeleteAdminFeedbackDeleteRequestConfig

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18845) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /api/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiFeedbackDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18845) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /api/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiFeedbackDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18845) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /api/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiFeedbackDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/feedback/delete', undefined, string, string, false>
>

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18845) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /api/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiFeedbackDeleteRequestConfig: ApiDeleteApiFeedbackDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/feedback/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiFeedbackDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取用户反馈列表',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18845',
    author: 11,
  },
}

/**
 * 接口 [获取用户反馈列表↗](http://192.168.143.129:3001/project/11/interface/api/18845) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `用户反馈管理`
 * @请求头 `DELETE /api/feedback/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiFeedbackDelete = /*#__PURE__*/ (
  requestData: IApiFeedbackDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiFeedbackDeleteRes>(prepare(apiDeleteApiFeedbackDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiFeedbackDelete.requestConfig = apiDeleteApiFeedbackDeleteRequestConfig

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18854) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /admin/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminBooksDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18854) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /admin/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminBooksDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18854) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /admin/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminBooksDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/books/delete', undefined, string, string, false>
>

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18854) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /admin/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminBooksDeleteRequestConfig: ApiDeleteAdminBooksDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/books/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminBooksDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18854',
    author: 11,
  },
}

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18854) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /admin/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminBooksDelete = /*#__PURE__*/ (
  requestData: IAdminBooksDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBooksDeleteRes>(prepare(apiDeleteAdminBooksDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminBooksDelete.requestConfig = apiDeleteAdminBooksDeleteRequestConfig

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18863) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /api/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBooksDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18863) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /api/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBooksDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18863) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /api/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiBooksDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/books/delete', undefined, string, string, false>
>

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18863) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /api/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiBooksDeleteRequestConfig: ApiDeleteApiBooksDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/books/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiBooksDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除书册',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18863',
    author: 11,
  },
}

/**
 * 接口 [删除书册↗](http://192.168.143.129:3001/project/11/interface/api/18863) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册管理`
 * @请求头 `DELETE /api/books/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiBooksDelete = /*#__PURE__*/ (
  requestData: IApiBooksDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBooksDeleteRes>(prepare(apiDeleteApiBooksDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiBooksDelete.requestConfig = apiDeleteApiBooksDeleteRequestConfig

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18872) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /admin/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminBookCatalogDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18872) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /admin/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminBookCatalogDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18872) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /admin/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminBookCatalogDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/bookCatalog/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18872) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /admin/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminBookCatalogDeleteRequestConfig: ApiDeleteAdminBookCatalogDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/admin/bookCatalog/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminBookCatalogDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除书册目录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18872',
    author: 11,
  },
}

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18872) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /admin/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminBookCatalogDelete = /*#__PURE__*/ (
  requestData: IAdminBookCatalogDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminBookCatalogDeleteRes>(
    prepare(apiDeleteAdminBookCatalogDeleteRequestConfig, requestData),
    ...args,
  )
}

apiDeleteAdminBookCatalogDelete.requestConfig = apiDeleteAdminBookCatalogDeleteRequestConfig

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18881) 的 **请求类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /api/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBookCatalogDeleteReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18881) 的 **返回类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /api/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiBookCatalogDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18881) 的 **请求配置的类型**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /api/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiBookCatalogDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/bookCatalog/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18881) 的 **请求配置**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /api/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiBookCatalogDeleteRequestConfig: ApiDeleteApiBookCatalogDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_0,
  devUrl: devUrl_0_0_0_0,
  prodUrl: prodUrl_0_0_0_0,
  path: '/api/bookCatalog/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_0,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiBookCatalogDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除书册目录',
    category: '默认分类',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18881',
    author: 11,
  },
}

/**
 * 接口 [删除书册目录↗](http://192.168.143.129:3001/project/11/interface/api/18881) 的 **请求函数**
 *
 * @分类 [默认分类↗](http://192.168.143.129:3001/project/11/interface/api/cat_195)
 * @标签 `书册目录管理`
 * @请求头 `DELETE /api/bookCatalog/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiBookCatalogDelete = /*#__PURE__*/ (
  requestData: IApiBookCatalogDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiBookCatalogDeleteRes>(prepare(apiDeleteApiBookCatalogDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiBookCatalogDelete.requestConfig = apiDeleteApiBookCatalogDeleteRequestConfig

const mockUrl_0_0_0_1 = 'http://192.168.143.129:3001/mock/11' as any
const devUrl_0_0_0_1 = '' as any
const prodUrl_0_0_0_1 = '' as any
const dataKey_0_0_0_1 = undefined as any

/**
 * 接口 [修改文章分类↗](http://192.168.143.129:3001/project/11/interface/api/17243) 的 **请求类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `PUT /admin/article/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminArticleTypeUpdateReq {
  /**
   * id
   */
  id?: number
  /**
   * 支付名称
   */
  label?: string
  /**
   * 父ID
   */
  pid?: number
  /**
   * 图标icon
   */
  icon?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  code?: string
}

/**
 * 接口 [修改文章分类↗](http://192.168.143.129:3001/project/11/interface/api/17243) 的 **返回类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `PUT /admin/article/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminArticleTypeUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [修改文章分类↗](http://192.168.143.129:3001/project/11/interface/api/17243) 的 **请求配置的类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `PUT /admin/article/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminArticleTypeUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/article/type/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [修改文章分类↗](http://192.168.143.129:3001/project/11/interface/api/17243) 的 **请求配置**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `PUT /admin/article/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminArticleTypeUpdateRequestConfig: ApiPutAdminArticleTypeUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/admin/article/type/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminArticleTypeUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '修改文章分类',
    category: '文章分类管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17243',
    author: 11,
  },
}

/**
 * 接口 [修改文章分类↗](http://192.168.143.129:3001/project/11/interface/api/17243) 的 **请求函数**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `PUT /admin/article/type/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminArticleTypeUpdate = /*#__PURE__*/ (
  requestData: IAdminArticleTypeUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleTypeUpdateRes>(prepare(apiPutAdminArticleTypeUpdateRequestConfig, requestData), ...args)
}

apiPutAdminArticleTypeUpdate.requestConfig = apiPutAdminArticleTypeUpdateRequestConfig

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18026) 的 **请求类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /api/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleTypeListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18026) 的 **返回类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /api/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleTypeListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * id
       */
      id?: number
      /**
       * 支付名称
       */
      label?: string
      /**
       * 父ID
       */
      pid?: number
      /**
       * 图标icon
       */
      icon?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18026) 的 **请求配置的类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /api/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleTypeListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/type/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18026) 的 **请求配置**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /api/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleTypeListRequestConfig: ApiPostApiArticleTypeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/api/article/type/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleTypeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取文章分类列表',
    category: '文章分类管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18026',
    author: 11,
  },
}

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18026) 的 **请求函数**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /api/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleTypeList = /*#__PURE__*/ (
  requestData: IApiArticleTypeListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleTypeListRes>(prepare(apiPostApiArticleTypeListRequestConfig, requestData), ...args)
}

apiPostApiArticleTypeList.requestConfig = apiPostApiArticleTypeListRequestConfig

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18035) 的 **请求类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleTypeListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18035) 的 **返回类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleTypeListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      /**
       * id
       */
      id?: number
      /**
       * 支付名称
       */
      label?: string
      /**
       * 父ID
       */
      pid?: number
      /**
       * 图标icon
       */
      icon?: string
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18035) 的 **请求配置的类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminArticleTypeListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/article/type/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18035) 的 **请求配置**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminArticleTypeListRequestConfig: ApiPostAdminArticleTypeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/admin/article/type/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminArticleTypeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取文章分类列表',
    category: '文章分类管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18035',
    author: 11,
  },
}

/**
 * 接口 [获取文章分类列表↗](http://192.168.143.129:3001/project/11/interface/api/18035) 的 **请求函数**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminArticleTypeList = /*#__PURE__*/ (
  requestData: IAdminArticleTypeListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleTypeListRes>(prepare(apiPostAdminArticleTypeListRequestConfig, requestData), ...args)
}

apiPostAdminArticleTypeList.requestConfig = apiPostAdminArticleTypeListRequestConfig

/**
 * 接口 [创建文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18044) 的 **请求类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleTypeAddReq {
  /**
   * id
   */
  id?: number
  /**
   * 支付名称
   */
  label?: string
  /**
   * 父ID
   */
  pid?: number
  /**
   * 图标icon
   */
  icon?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  code?: string
}

/**
 * 接口 [创建文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18044) 的 **返回类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleTypeAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [创建文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18044) 的 **请求配置的类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminArticleTypeAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/article/type/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [创建文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18044) 的 **请求配置**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminArticleTypeAddRequestConfig: ApiPostAdminArticleTypeAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/admin/article/type/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminArticleTypeAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '创建文章分类',
    category: '文章分类管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18044',
    author: 11,
  },
}

/**
 * 接口 [创建文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18044) 的 **请求函数**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `POST /admin/article/type/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminArticleTypeAdd = /*#__PURE__*/ (
  requestData: IAdminArticleTypeAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleTypeAddRes>(prepare(apiPostAdminArticleTypeAddRequestConfig, requestData), ...args)
}

apiPostAdminArticleTypeAdd.requestConfig = apiPostAdminArticleTypeAddRequestConfig

/**
 * 接口 [删除文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18890) 的 **请求类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `DELETE /admin/article/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminArticleTypeDeleteReq {
  /**
   * id
   */
  id?: number
  /**
   * 支付名称
   */
  label?: string
  /**
   * 父ID
   */
  pid?: number
  /**
   * 图标icon
   */
  icon?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  code?: string
}

/**
 * 接口 [删除文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18890) 的 **返回类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `DELETE /admin/article/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminArticleTypeDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18890) 的 **请求配置的类型**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `DELETE /admin/article/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminArticleTypeDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/article/type/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18890) 的 **请求配置**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `DELETE /admin/article/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminArticleTypeDeleteRequestConfig: ApiDeleteAdminArticleTypeDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_1,
  devUrl: devUrl_0_0_0_1,
  prodUrl: prodUrl_0_0_0_1,
  path: '/admin/article/type/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_1,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminArticleTypeDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除文章分类',
    category: '文章分类管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18890',
    author: 11,
  },
}

/**
 * 接口 [删除文章分类↗](http://192.168.143.129:3001/project/11/interface/api/18890) 的 **请求函数**
 *
 * @分类 [文章分类管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_198)
 * @标签 `文章分类管理`
 * @请求头 `DELETE /admin/article/type/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminArticleTypeDelete = /*#__PURE__*/ (
  requestData: IAdminArticleTypeDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleTypeDeleteRes>(
    prepare(apiDeleteAdminArticleTypeDeleteRequestConfig, requestData),
    ...args,
  )
}

apiDeleteAdminArticleTypeDelete.requestConfig = apiDeleteAdminArticleTypeDeleteRequestConfig

const mockUrl_0_0_0_2 = 'http://192.168.143.129:3001/mock/11' as any
const devUrl_0_0_0_2 = '' as any
const prodUrl_0_0_0_2 = '' as any
const dataKey_0_0_0_2 = undefined as any

/**
 * 接口 [点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/17450) 的 **请求类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentLikeReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/17450) 的 **返回类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentLikeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/17450) 的 **请求配置的类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleCommentLikeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/comment/like',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/17450) 的 **请求配置**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleCommentLikeRequestConfig: ApiPostApiArticleCommentLikeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/article/comment/like',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleCommentLike',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '点赞文章的评论',
    category: '文章评论管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17450',
    author: 11,
  },
}

/**
 * 接口 [点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/17450) 的 **请求函数**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleCommentLike = /*#__PURE__*/ (
  requestData: IApiArticleCommentLikeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleCommentLikeRes>(prepare(apiPostApiArticleCommentLikeRequestConfig, requestData), ...args)
}

apiPostApiArticleCommentLike.requestConfig = apiPostApiArticleCommentLikeRequestConfig

/**
 * 接口 [评论文章↗](http://192.168.143.129:3001/project/11/interface/api/17459) 的 **请求类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentAddReq {
  /**
   * 评论id
   */
  id?: number
  /**
   * 评论用户ID
   */
  userId?: string
  /**
   * 支付名称
   */
  content?: string
  /**
   * 父ID
   */
  pid?: number
  /**
   * 关联文章
   */
  aid?: number
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [评论文章↗](http://192.168.143.129:3001/project/11/interface/api/17459) 的 **返回类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [评论文章↗](http://192.168.143.129:3001/project/11/interface/api/17459) 的 **请求配置的类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleCommentAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/comment/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [评论文章↗](http://192.168.143.129:3001/project/11/interface/api/17459) 的 **请求配置**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleCommentAddRequestConfig: ApiPostApiArticleCommentAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/article/comment/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleCommentAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '评论文章',
    category: '文章评论管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17459',
    author: 11,
  },
}

/**
 * 接口 [评论文章↗](http://192.168.143.129:3001/project/11/interface/api/17459) 的 **请求函数**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleCommentAdd = /*#__PURE__*/ (
  requestData: IApiArticleCommentAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleCommentAddRes>(prepare(apiPostApiArticleCommentAddRequestConfig, requestData), ...args)
}

apiPostApiArticleCommentAdd.requestConfig = apiPostApiArticleCommentAddRequestConfig

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18071) 的 **请求类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18071) 的 **返回类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      content?: string
      parentContent?: string
      createTime?: string
      article?: {
        likeCount?: number
        readCount?: number
        id?: number
        createTime?: string
        title?: string
        author?: string
        cover?: string
        contentType?: number
        mdContent?: string
        content?: string
        url?: string
      }
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18071) 的 **请求配置的类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleCommentListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/comment/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18071) 的 **请求配置**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleCommentListRequestConfig: ApiPostApiArticleCommentListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/article/comment/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleCommentList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取评论列表',
    category: '文章评论管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18071',
    author: 11,
  },
}

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18071) 的 **请求函数**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /api/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleCommentList = /*#__PURE__*/ (
  requestData: IApiArticleCommentListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleCommentListRes>(prepare(apiPostApiArticleCommentListRequestConfig, requestData), ...args)
}

apiPostApiArticleCommentList.requestConfig = apiPostApiArticleCommentListRequestConfig

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18080) 的 **请求类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /admin/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleCommentListReq {
  phone?: string
  email?: string
  code?: string
  length?: number
  id?: number
  idList?: number[]
  username?: string
  type?: number
  startTime?: string
  endTime?: string
  keyword?: string
  page?: number
  size?: number
  skip?: number
}

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18080) 的 **返回类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /admin/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleCommentListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      content?: string
      parentContent?: string
      createTime?: string
      article?: {
        likeCount?: number
        readCount?: number
        id?: number
        createTime?: string
        title?: string
        author?: string
        cover?: string
        contentType?: number
        mdContent?: string
        content?: string
        url?: string
      }
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18080) 的 **请求配置的类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /admin/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminArticleCommentListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/article/comment/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18080) 的 **请求配置**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /admin/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminArticleCommentListRequestConfig: ApiPostAdminArticleCommentListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/admin/article/comment/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminArticleCommentList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取评论列表',
    category: '文章评论管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18080',
    author: 11,
  },
}

/**
 * 接口 [获取评论列表↗](http://192.168.143.129:3001/project/11/interface/api/18080) 的 **请求函数**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `POST /admin/article/comment/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminArticleCommentList = /*#__PURE__*/ (
  requestData: IAdminArticleCommentListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleCommentListRes>(
    prepare(apiPostAdminArticleCommentListRequestConfig, requestData),
    ...args,
  )
}

apiPostAdminArticleCommentList.requestConfig = apiPostAdminArticleCommentListRequestConfig

/**
 * 接口 [获取我的评论↗](http://192.168.143.129:3001/project/11/interface/api/18323) 的 **请求类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `GET /api/article/comment/getMyCommentList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentGetMyCommentListReq {
  page?: string
  size?: string
}

/**
 * 接口 [获取我的评论↗](http://192.168.143.129:3001/project/11/interface/api/18323) 的 **返回类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `GET /api/article/comment/getMyCommentList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCommentGetMyCommentListRes {
  code?: number
  data?: {
    id?: number
    content?: string
    parentContent?: string
    createTime?: string
    article?: {
      likeCount?: number
      readCount?: number
      id?: number
      createTime?: string
      title?: string
      author?: string
      cover?: string
      contentType?: number
      mdContent?: string
      content?: string
      url?: string
    }
  }[]
  msg?: string
}

/**
 * 接口 [获取我的评论↗](http://192.168.143.129:3001/project/11/interface/api/18323) 的 **请求配置的类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `GET /api/article/comment/getMyCommentList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiArticleCommentGetMyCommentListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/comment/getMyCommentList',
    undefined,
    string,
    'page' | 'size',
    false
  >
>

/**
 * 接口 [获取我的评论↗](http://192.168.143.129:3001/project/11/interface/api/18323) 的 **请求配置**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `GET /api/article/comment/getMyCommentList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiArticleCommentGetMyCommentListRequestConfig: ApiGetApiArticleCommentGetMyCommentListRequestConfig =
  /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/api/article/comment/getMyCommentList',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: ['page', 'size'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'apiGetApiArticleCommentGetMyCommentList',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {
      name: '获取我的评论',
      category: '文章评论管理',
      project: 'ipink',
      url: 'http://192.168.143.129:3001/project/11/interface/api/18323',
      author: 11,
    },
  }

/**
 * 接口 [获取我的评论↗](http://192.168.143.129:3001/project/11/interface/api/18323) 的 **请求函数**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `GET /api/article/comment/getMyCommentList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiArticleCommentGetMyCommentList = /*#__PURE__*/ (
  requestData: IApiArticleCommentGetMyCommentListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleCommentGetMyCommentListRes>(
    prepare(apiGetApiArticleCommentGetMyCommentListRequestConfig, requestData),
    ...args,
  )
}

apiGetApiArticleCommentGetMyCommentList.requestConfig = apiGetApiArticleCommentGetMyCommentListRequestConfig

/**
 * 接口 [取消点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/18719) 的 **请求类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleCommentUnlikeReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [取消点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/18719) 的 **返回类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleCommentUnlikeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [取消点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/18719) 的 **请求配置的类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiArticleCommentUnlikeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/comment/unlike',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [取消点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/18719) 的 **请求配置**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiArticleCommentUnlikeRequestConfig: ApiDeleteApiArticleCommentUnlikeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/article/comment/unlike',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiArticleCommentUnlike',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '取消点赞文章的评论',
    category: '文章评论管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18719',
    author: 11,
  },
}

/**
 * 接口 [取消点赞文章的评论↗](http://192.168.143.129:3001/project/11/interface/api/18719) 的 **请求函数**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiArticleCommentUnlike = /*#__PURE__*/ (
  requestData: IApiArticleCommentUnlikeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleCommentUnlikeRes>(
    prepare(apiDeleteApiArticleCommentUnlikeRequestConfig, requestData),
    ...args,
  )
}

apiDeleteApiArticleCommentUnlike.requestConfig = apiDeleteApiArticleCommentUnlikeRequestConfig

/**
 * 接口 [删除评论↗](http://192.168.143.129:3001/project/11/interface/api/18728) 的 **请求类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleCommentDeleteReq {
  /**
   * 评论id
   */
  id?: number
  /**
   * 评论用户ID
   */
  userId?: string
  /**
   * 支付名称
   */
  content?: string
  /**
   * 父ID
   */
  pid?: number
  /**
   * 关联文章
   */
  aid?: number
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [删除评论↗](http://192.168.143.129:3001/project/11/interface/api/18728) 的 **返回类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleCommentDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除评论↗](http://192.168.143.129:3001/project/11/interface/api/18728) 的 **请求配置的类型**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiArticleCommentDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/comment/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除评论↗](http://192.168.143.129:3001/project/11/interface/api/18728) 的 **请求配置**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiArticleCommentDeleteRequestConfig: ApiDeleteApiArticleCommentDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_2,
  devUrl: devUrl_0_0_0_2,
  prodUrl: prodUrl_0_0_0_2,
  path: '/api/article/comment/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_2,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiArticleCommentDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除评论',
    category: '文章评论管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18728',
    author: 11,
  },
}

/**
 * 接口 [删除评论↗](http://192.168.143.129:3001/project/11/interface/api/18728) 的 **请求函数**
 *
 * @分类 [文章评论管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_201)
 * @标签 `文章评论管理`
 * @请求头 `DELETE /api/article/comment/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiArticleCommentDelete = /*#__PURE__*/ (
  requestData: IApiArticleCommentDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleCommentDeleteRes>(
    prepare(apiDeleteApiArticleCommentDeleteRequestConfig, requestData),
    ...args,
  )
}

apiDeleteApiArticleCommentDelete.requestConfig = apiDeleteApiArticleCommentDeleteRequestConfig

const mockUrl_0_0_0_3 = 'http://192.168.143.129:3001/mock/11' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = '' as any
const dataKey_0_0_0_3 = undefined as any

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17225) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /admin/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminArticleUpdateReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17225) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /admin/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IAdminArticleUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17225) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /admin/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutAdminArticleUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/article/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17225) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /admin/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutAdminArticleUpdateRequestConfig: ApiPutAdminArticleUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/admin/article/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutAdminArticleUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17225',
    author: 11,
  },
}

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17225) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /admin/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutAdminArticleUpdate = /*#__PURE__*/ (
  requestData: IAdminArticleUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleUpdateRes>(prepare(apiPutAdminArticleUpdateRequestConfig, requestData), ...args)
}

apiPutAdminArticleUpdate.requestConfig = apiPutAdminArticleUpdateRequestConfig

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17234) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /api/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiArticleUpdateReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17234) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /api/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiArticleUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17234) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /api/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiArticleUpdateRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/update', undefined, string, string, false>
>

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17234) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /api/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiArticleUpdateRequestConfig: ApiPutApiArticleUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/article/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiArticleUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '更新文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17234',
    author: 11,
  },
}

/**
 * 接口 [更新文章↗](http://192.168.143.129:3001/project/11/interface/api/17234) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `PUT /api/article/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiArticleUpdate = /*#__PURE__*/ (
  requestData: IApiArticleUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleUpdateRes>(prepare(apiPutApiArticleUpdateRequestConfig, requestData), ...args)
}

apiPutApiArticleUpdate.requestConfig = apiPutApiArticleUpdateRequestConfig

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18053) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleListReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18053) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
      /**
       * 分类ID(文章类型)
       */
      typeId?: number
      /**
       * 栏目ID
       */
      columnId?: number
      /**
       * 标题
       */
      title?: string
      /**
       * 作者
       */
      author?: string
      /**
       * 音乐
       */
      music?: string
      /**
       * 封面图片
       */
      cover?: string
      /**
       * 摘录/引用
       */
      excerpt?: string
      /**
       * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
       */
      contentType?: number
      /**
       * Markdown文章
       */
      mdContent?: string
      /**
       * 文章内容 nullable ture 可为空
       */
      content?: string
      /**
       * 逻辑删除(0不显示,1显示)
       */
      isDelete?: number
      /**
       * 文章置顶(0不置顶,1置顶)
       */
      isTop?: number
      /**
       * 是否开启隐私(0不开启,1开启)
       */
      isPrivacy?: number
      /**
       * 文章内容是否为第三方链接
       */
      url?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18053) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminArticleListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/article/list', undefined, string, string, false>
>

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18053) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminArticleListRequestConfig: ApiPostAdminArticleListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/admin/article/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminArticleList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取文章列表',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18053',
    author: 11,
  },
}

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18053) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminArticleList = /*#__PURE__*/ (
  requestData: IAdminArticleListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleListRes>(prepare(apiPostAdminArticleListRequestConfig, requestData), ...args)
}

apiPostAdminArticleList.requestConfig = apiPostAdminArticleListRequestConfig

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18062) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleListReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18062) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleListRes {
  code?: number
  data?: {
    total?: number
    data?: {
      id?: number
      /**
       * 创建时间
       */
      createTime?: string
      /**
       * 更新时间
       */
      updateTime?: string
      /**
       * 分类ID(文章类型)
       */
      typeId?: number
      /**
       * 栏目ID
       */
      columnId?: number
      /**
       * 标题
       */
      title?: string
      /**
       * 作者
       */
      author?: string
      /**
       * 音乐
       */
      music?: string
      /**
       * 封面图片
       */
      cover?: string
      /**
       * 摘录/引用
       */
      excerpt?: string
      /**
       * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
       */
      contentType?: number
      /**
       * Markdown文章
       */
      mdContent?: string
      /**
       * 文章内容 nullable ture 可为空
       */
      content?: string
      /**
       * 逻辑删除(0不显示,1显示)
       */
      isDelete?: number
      /**
       * 文章置顶(0不置顶,1置顶)
       */
      isTop?: number
      /**
       * 是否开启隐私(0不开启,1开启)
       */
      isPrivacy?: number
      /**
       * 文章内容是否为第三方链接
       */
      url?: string
    }[]
  }
  msg?: string
}

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18062) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleListRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/list', undefined, string, string, false>
>

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18062) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleListRequestConfig: ApiPostApiArticleListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/article/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取文章列表',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18062',
    author: 11,
  },
}

/**
 * 接口 [获取文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18062) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleList = /*#__PURE__*/ (requestData: IApiArticleListReq, ...args: UserRequestRestArgs) => {
  return request<IApiArticleListRes>(prepare(apiPostApiArticleListRequestConfig, requestData), ...args)
}

apiPostApiArticleList.requestConfig = apiPostApiArticleListRequestConfig

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18089) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleAddReq {
  id?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 分类ID(文章类型)
   */
  typeId?: number
  /**
   * 栏目ID
   */
  columnId?: number
  /**
   * 标题
   */
  title?: string
  /**
   * 作者
   */
  author?: string
  /**
   * 音乐
   */
  music?: string
  /**
   * 封面图片
   */
  cover?: string
  /**
   * 摘录/引用
   */
  excerpt?: string
  /**
   * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
   */
  contentType?: number
  /**
   * Markdown文章
   */
  mdContent?: string
  /**
   * 文章内容 nullable ture 可为空
   */
  content?: string
  /**
   * 逻辑删除(0不显示,1显示)
   */
  isDelete?: number
  /**
   * 文章置顶(0不置顶,1置顶)
   */
  isTop?: number
  /**
   * 是否开启隐私(0不开启,1开启)
   */
  isPrivacy?: number
  /**
   * 文章内容是否为第三方链接
   */
  url?: string
}

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18089) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18089) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/add', undefined, string, string, false>
>

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18089) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleAddRequestConfig: ApiPostApiArticleAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/article/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18089',
    author: 11,
  },
}

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18089) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /api/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleAdd = /*#__PURE__*/ (requestData: IApiArticleAddReq, ...args: UserRequestRestArgs) => {
  return request<IApiArticleAddRes>(prepare(apiPostApiArticleAddRequestConfig, requestData), ...args)
}

apiPostApiArticleAdd.requestConfig = apiPostApiArticleAddRequestConfig

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18098) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleAddReq {
  id?: number
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 更新时间
   */
  updateTime?: string
  /**
   * 分类ID(文章类型)
   */
  typeId?: number
  /**
   * 栏目ID
   */
  columnId?: number
  /**
   * 标题
   */
  title?: string
  /**
   * 作者
   */
  author?: string
  /**
   * 音乐
   */
  music?: string
  /**
   * 封面图片
   */
  cover?: string
  /**
   * 摘录/引用
   */
  excerpt?: string
  /**
   * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
   */
  contentType?: number
  /**
   * Markdown文章
   */
  mdContent?: string
  /**
   * 文章内容 nullable ture 可为空
   */
  content?: string
  /**
   * 逻辑删除(0不显示,1显示)
   */
  isDelete?: number
  /**
   * 文章置顶(0不置顶,1置顶)
   */
  isTop?: number
  /**
   * 是否开启隐私(0不开启,1开启)
   */
  isPrivacy?: number
  /**
   * 文章内容是否为第三方链接
   */
  url?: string
}

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18098) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminArticleAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18098) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminArticleAddRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/article/add', undefined, string, string, false>
>

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18098) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminArticleAddRequestConfig: ApiPostAdminArticleAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/admin/article/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminArticleAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '添加文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18098',
    author: 11,
  },
}

/**
 * 接口 [添加文章↗](http://192.168.143.129:3001/project/11/interface/api/18098) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `POST /admin/article/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminArticleAdd = /*#__PURE__*/ (
  requestData: IAdminArticleAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleAddRes>(prepare(apiPostAdminArticleAddRequestConfig, requestData), ...args)
}

apiPostAdminArticleAdd.requestConfig = apiPostAdminArticleAddRequestConfig

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18575) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /admin/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminArticleDetailReq {
  id: string
}

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18575) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /admin/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminArticleDetailRes {
  code?: number
  /**
   * 文章管理
   */
  data?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  msg?: string
}

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18575) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /admin/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminArticleDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/admin/article/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18575) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /admin/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminArticleDetailRequestConfig: ApiGetAdminArticleDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/admin/article/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminArticleDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18575',
    author: 11,
  },
}

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18575) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /admin/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminArticleDetail = /*#__PURE__*/ (
  requestData: IAdminArticleDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleDetailRes>(prepare(apiGetAdminArticleDetailRequestConfig, requestData), ...args)
}

apiGetAdminArticleDetail.requestConfig = apiGetAdminArticleDetailRequestConfig

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18584) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /api/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleDetailReq {
  id: string
}

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18584) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /api/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleDetailRes {
  code?: number
  /**
   * 文章管理
   */
  data?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  msg?: string
}

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18584) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /api/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiArticleDetailRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/detail', undefined, string, 'id', false>
>

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18584) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /api/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiArticleDetailRequestConfig: ApiGetApiArticleDetailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/article/detail',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiArticleDetail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18584',
    author: 11,
  },
}

/**
 * 接口 [获取文章↗](http://192.168.143.129:3001/project/11/interface/api/18584) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `GET /api/article/detail`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiArticleDetail = /*#__PURE__*/ (
  requestData: IApiArticleDetailReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleDetailRes>(prepare(apiGetApiArticleDetailRequestConfig, requestData), ...args)
}

apiGetApiArticleDetail.requestConfig = apiGetApiArticleDetailRequestConfig

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18899) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /admin/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminArticleDeleteReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18899) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /admin/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminArticleDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18899) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /admin/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteAdminArticleDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/article/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18899) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /admin/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteAdminArticleDeleteRequestConfig: ApiDeleteAdminArticleDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/admin/article/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteAdminArticleDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18899',
    author: 11,
  },
}

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18899) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /admin/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteAdminArticleDelete = /*#__PURE__*/ (
  requestData: IAdminArticleDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminArticleDeleteRes>(prepare(apiDeleteAdminArticleDeleteRequestConfig, requestData), ...args)
}

apiDeleteAdminArticleDelete.requestConfig = apiDeleteAdminArticleDeleteRequestConfig

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18908) 的 **请求类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /api/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleDeleteReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18908) 的 **返回类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /api/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18908) 的 **请求配置的类型**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /api/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiArticleDeleteRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/delete', undefined, string, string, false>
>

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18908) 的 **请求配置**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /api/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiArticleDeleteRequestConfig: ApiDeleteApiArticleDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/article/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiArticleDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除文章',
    category: '文章管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18908',
    author: 11,
  },
}

/**
 * 接口 [删除文章↗](http://192.168.143.129:3001/project/11/interface/api/18908) 的 **请求函数**
 *
 * @分类 [文章管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_204)
 * @标签 `文章管理`
 * @请求头 `DELETE /api/article/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiArticleDelete = /*#__PURE__*/ (
  requestData: IApiArticleDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleDeleteRes>(prepare(apiDeleteApiArticleDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiArticleDelete.requestConfig = apiDeleteApiArticleDeleteRequestConfig

const mockUrl_0_0_0_4 = 'http://192.168.143.129:3001/mock/11' as any
const devUrl_0_0_0_4 = '' as any
const prodUrl_0_0_0_4 = '' as any
const dataKey_0_0_0_4 = undefined as any

/**
 * 接口 [修改收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17108) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `PUT /api/article/book/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiArticleBookUpdateReq {
  /**
   * 收藏集ID
   */
  id?: number
  /**
   * 用户ID
   */
  userId?: string
  /**
   * 收藏集标题
   */
  title?: string
  /**
   * 收藏集的描述
   */
  description?: string
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [修改收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17108) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `PUT /api/article/book/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export interface IApiArticleBookUpdateRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [修改收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17108) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `PUT /api/article/book/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
type ApiPutApiArticleBookUpdateRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/book/update',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [修改收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17108) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `PUT /api/article/book/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
const apiPutApiArticleBookUpdateRequestConfig: ApiPutApiArticleBookUpdateRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/book/update',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutApiArticleBookUpdate',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '修改收藏集',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17108',
    author: 11,
  },
}

/**
 * 接口 [修改收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17108) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `PUT /api/article/book/update`
 * @更新时间 `2026-04-19 18:05:00`
 */
export const apiPutApiArticleBookUpdate = /*#__PURE__*/ (
  requestData: IApiArticleBookUpdateReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleBookUpdateRes>(prepare(apiPutApiArticleBookUpdateRequestConfig, requestData), ...args)
}

apiPutApiArticleBookUpdate.requestConfig = apiPutApiArticleBookUpdateRequestConfig

/**
 * 接口 [点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/17441) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleLikeReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/17441) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleLikeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/17441) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleLikeRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/like', undefined, string, string, false>
>

/**
 * 接口 [点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/17441) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleLikeRequestConfig: ApiPostApiArticleLikeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/like',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleLike',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '点赞文章',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17441',
    author: 11,
  },
}

/**
 * 接口 [点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/17441) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/like`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleLike = /*#__PURE__*/ (requestData: IApiArticleLikeReq, ...args: UserRequestRestArgs) => {
  return request<IApiArticleLikeRes>(prepare(apiPostApiArticleLikeRequestConfig, requestData), ...args)
}

apiPostApiArticleLike.requestConfig = apiPostApiArticleLikeRequestConfig

/**
 * 接口 [收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/17468) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCollectReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/17468) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleCollectRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/17468) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleCollectRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/collect', undefined, string, string, false>
>

/**
 * 接口 [收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/17468) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleCollectRequestConfig: ApiPostApiArticleCollectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/collect',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleCollect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '收藏文章',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17468',
    author: 11,
  },
}

/**
 * 接口 [收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/17468) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/collect`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleCollect = /*#__PURE__*/ (
  requestData: IApiArticleCollectReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleCollectRes>(prepare(apiPostApiArticleCollectRequestConfig, requestData), ...args)
}

apiPostApiArticleCollect.requestConfig = apiPostApiArticleCollectRequestConfig

/**
 * 接口 [创建收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17477) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/book/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleBookAddReq {
  /**
   * 收藏集ID
   */
  id?: number
  /**
   * 用户ID
   */
  userId?: string
  /**
   * 收藏集标题
   */
  title?: string
  /**
   * 收藏集的描述
   */
  description?: string
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [创建收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17477) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/book/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleBookAddRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [创建收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17477) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/book/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiArticleBookAddRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/book/add',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [创建收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17477) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/book/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiArticleBookAddRequestConfig: ApiPostApiArticleBookAddRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/book/add',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiArticleBookAdd',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '创建收藏集',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17477',
    author: 11,
  },
}

/**
 * 接口 [创建收藏集↗](http://192.168.143.129:3001/project/11/interface/api/17477) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `POST /api/article/book/add`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiArticleBookAdd = /*#__PURE__*/ (
  requestData: IApiArticleBookAddReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleBookAddRes>(prepare(apiPostApiArticleBookAddRequestConfig, requestData), ...args)
}

apiPostApiArticleBookAdd.requestConfig = apiPostApiArticleBookAddRequestConfig

/**
 * 接口 [获取已读文章文章↗](http://192.168.143.129:3001/project/11/interface/api/18287) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getReadList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetReadListReq {
  page?: string
  size?: string
}

/**
 * 接口 [获取已读文章文章↗](http://192.168.143.129:3001/project/11/interface/api/18287) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getReadList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetReadListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取已读文章文章↗](http://192.168.143.129:3001/project/11/interface/api/18287) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getReadList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiArticleGetReadListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/getReadList',
    undefined,
    string,
    'page' | 'size',
    false
  >
>

/**
 * 接口 [获取已读文章文章↗](http://192.168.143.129:3001/project/11/interface/api/18287) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getReadList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiArticleGetReadListRequestConfig: ApiGetApiArticleGetReadListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/getReadList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['page', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiArticleGetReadList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取已读文章文章',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18287',
    author: 11,
  },
}

/**
 * 接口 [获取已读文章文章↗](http://192.168.143.129:3001/project/11/interface/api/18287) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getReadList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiArticleGetReadList = /*#__PURE__*/ (
  requestData: IApiArticleGetReadListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleGetReadListRes>(prepare(apiGetApiArticleGetReadListRequestConfig, requestData), ...args)
}

apiGetApiArticleGetReadList.requestConfig = apiGetApiArticleGetReadListRequestConfig

/**
 * 接口 [获取我创建文章↗](http://192.168.143.129:3001/project/11/interface/api/18296) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getMyList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetMyListReq {
  page?: string
  size?: string
}

/**
 * 接口 [获取我创建文章↗](http://192.168.143.129:3001/project/11/interface/api/18296) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getMyList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetMyListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取我创建文章↗](http://192.168.143.129:3001/project/11/interface/api/18296) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getMyList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiArticleGetMyListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/getMyList',
    undefined,
    string,
    'page' | 'size',
    false
  >
>

/**
 * 接口 [获取我创建文章↗](http://192.168.143.129:3001/project/11/interface/api/18296) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getMyList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiArticleGetMyListRequestConfig: ApiGetApiArticleGetMyListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/getMyList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['page', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiArticleGetMyList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取我创建文章',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18296',
    author: 11,
  },
}

/**
 * 接口 [获取我创建文章↗](http://192.168.143.129:3001/project/11/interface/api/18296) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getMyList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiArticleGetMyList = /*#__PURE__*/ (
  requestData: IApiArticleGetMyListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleGetMyListRes>(prepare(apiGetApiArticleGetMyListRequestConfig, requestData), ...args)
}

apiGetApiArticleGetMyList.requestConfig = apiGetApiArticleGetMyListRequestConfig

/**
 * 接口 [获取我点赞的文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18305) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getLikeList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetLikeListReq {
  page?: string
  size?: string
}

/**
 * 接口 [获取我点赞的文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18305) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getLikeList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetLikeListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取我点赞的文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18305) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getLikeList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiArticleGetLikeListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/getLikeList',
    undefined,
    string,
    'page' | 'size',
    false
  >
>

/**
 * 接口 [获取我点赞的文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18305) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getLikeList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiArticleGetLikeListRequestConfig: ApiGetApiArticleGetLikeListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/getLikeList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['page', 'size'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiArticleGetLikeList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取我点赞的文章列表',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18305',
    author: 11,
  },
}

/**
 * 接口 [获取我点赞的文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18305) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getLikeList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiArticleGetLikeList = /*#__PURE__*/ (
  requestData: IApiArticleGetLikeListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleGetLikeListRes>(prepare(apiGetApiArticleGetLikeListRequestConfig, requestData), ...args)
}

apiGetApiArticleGetLikeList.requestConfig = apiGetApiArticleGetLikeListRequestConfig

/**
 * 接口 [通过收藏册 ID 获取我的收藏文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18314) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getCollectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetCollectListReq {
  page?: string
  size?: string
  bookId?: string
}

/**
 * 接口 [通过收藏册 ID 获取我的收藏文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18314) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getCollectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleGetCollectListRes {
  code?: number
  data?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }[]
  msg?: string
}

/**
 * 接口 [通过收藏册 ID 获取我的收藏文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18314) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getCollectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiArticleGetCollectListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/getCollectList',
    undefined,
    string,
    'page' | 'size' | 'bookId',
    false
  >
>

/**
 * 接口 [通过收藏册 ID 获取我的收藏文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18314) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getCollectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiArticleGetCollectListRequestConfig: ApiGetApiArticleGetCollectListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/getCollectList',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['page', 'size', 'bookId'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiArticleGetCollectList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '通过收藏册 ID 获取我的收藏文章列表',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18314',
    author: 11,
  },
}

/**
 * 接口 [通过收藏册 ID 获取我的收藏文章列表↗](http://192.168.143.129:3001/project/11/interface/api/18314) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/getCollectList`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiArticleGetCollectList = /*#__PURE__*/ (
  requestData: IApiArticleGetCollectListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleGetCollectListRes>(
    prepare(apiGetApiArticleGetCollectListRequestConfig, requestData),
    ...args,
  )
}

apiGetApiArticleGetCollectList.requestConfig = apiGetApiArticleGetCollectListRequestConfig

/**
 * 接口 [获取收藏集列表↗](http://192.168.143.129:3001/project/11/interface/api/18332) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/book/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleBookListReq {}

/**
 * 接口 [获取收藏集列表↗](http://192.168.143.129:3001/project/11/interface/api/18332) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/book/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiArticleBookListRes {
  code?: number
  data?: {
    /**
     * 收藏集ID
     */
    id?: number
    /**
     * 用户ID
     */
    userId?: string
    /**
     * 收藏集标题
     */
    title?: string
    /**
     * 收藏集的描述
     */
    description?: string
    /**
     * 创建时间
     */
    createTime?: string
  }[]
  msg?: string
}

/**
 * 接口 [获取收藏集列表↗](http://192.168.143.129:3001/project/11/interface/api/18332) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/book/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiGetApiArticleBookListRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/book/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取收藏集列表↗](http://192.168.143.129:3001/project/11/interface/api/18332) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/book/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiGetApiArticleBookListRequestConfig: ApiGetApiArticleBookListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/book/list',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiArticleBookList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取收藏集列表',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18332',
    author: 11,
  },
}

/**
 * 接口 [获取收藏集列表↗](http://192.168.143.129:3001/project/11/interface/api/18332) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `GET /api/article/book/list`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiGetApiArticleBookList = /*#__PURE__*/ (
  requestData?: IApiArticleBookListReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleBookListRes>(prepare(apiGetApiArticleBookListRequestConfig, requestData), ...args)
}

apiGetApiArticleBookList.requestConfig = apiGetApiArticleBookListRequestConfig

/**
 * 接口 [删除已读文章记录 (仅自己不可见, 不影响文章的已读数量)↗](http://192.168.143.129:3001/project/11/interface/api/18692) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unread`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleUnreadReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [删除已读文章记录 (仅自己不可见, 不影响文章的已读数量)↗](http://192.168.143.129:3001/project/11/interface/api/18692) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unread`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleUnreadRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除已读文章记录 (仅自己不可见, 不影响文章的已读数量)↗](http://192.168.143.129:3001/project/11/interface/api/18692) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unread`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiArticleUnreadRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/unread', undefined, string, string, false>
>

/**
 * 接口 [删除已读文章记录 (仅自己不可见, 不影响文章的已读数量)↗](http://192.168.143.129:3001/project/11/interface/api/18692) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unread`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiArticleUnreadRequestConfig: ApiDeleteApiArticleUnreadRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/unread',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiArticleUnread',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除已读文章记录 (仅自己不可见, 不影响文章的已读数量)',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18692',
    author: 11,
  },
}

/**
 * 接口 [删除已读文章记录 (仅自己不可见, 不影响文章的已读数量)↗](http://192.168.143.129:3001/project/11/interface/api/18692) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unread`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiArticleUnread = /*#__PURE__*/ (
  requestData: IApiArticleUnreadReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleUnreadRes>(prepare(apiDeleteApiArticleUnreadRequestConfig, requestData), ...args)
}

apiDeleteApiArticleUnread.requestConfig = apiDeleteApiArticleUnreadRequestConfig

/**
 * 接口 [点赞\/取消点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/18701) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleUnlikeReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [点赞\/取消点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/18701) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleUnlikeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [点赞\/取消点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/18701) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiArticleUnlikeRequestConfig = Readonly<
  RequestConfig<'http://192.168.143.129:3001/mock/11', '', '', '/api/article/unlike', undefined, string, string, false>
>

/**
 * 接口 [点赞\/取消点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/18701) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiArticleUnlikeRequestConfig: ApiDeleteApiArticleUnlikeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/unlike',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiArticleUnlike',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '点赞/取消点赞文章',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18701',
    author: 11,
  },
}

/**
 * 接口 [点赞\/取消点赞文章↗](http://192.168.143.129:3001/project/11/interface/api/18701) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/unlike`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiArticleUnlike = /*#__PURE__*/ (
  requestData: IApiArticleUnlikeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleUnlikeRes>(prepare(apiDeleteApiArticleUnlikeRequestConfig, requestData), ...args)
}

apiDeleteApiArticleUnlike.requestConfig = apiDeleteApiArticleUnlikeRequestConfig

/**
 * 接口 [取消收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/18710) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/uncollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleUncollectReq {
  id?: number
  typeId?: number
  commentId?: number
  page?: number
  skip?: number
  size?: number
  keyword?: string
  startTime?: string
  endTime?: string
  /**
   * 文章管理
   */
  article?: {
    id?: number
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 更新时间
     */
    updateTime?: string
    /**
     * 分类ID(文章类型)
     */
    typeId?: number
    /**
     * 栏目ID
     */
    columnId?: number
    /**
     * 标题
     */
    title?: string
    /**
     * 作者
     */
    author?: string
    /**
     * 音乐
     */
    music?: string
    /**
     * 封面图片
     */
    cover?: string
    /**
     * 摘录/引用
     */
    excerpt?: string
    /**
     * 内容类型(0: 普通文本, 1: markdown文本, 2: Docx富文本, 3: 外链链接)
     */
    contentType?: number
    /**
     * Markdown文章
     */
    mdContent?: string
    /**
     * 文章内容 nullable ture 可为空
     */
    content?: string
    /**
     * 逻辑删除(0不显示,1显示)
     */
    isDelete?: number
    /**
     * 文章置顶(0不置顶,1置顶)
     */
    isTop?: number
    /**
     * 是否开启隐私(0不开启,1开启)
     */
    isPrivacy?: number
    /**
     * 文章内容是否为第三方链接
     */
    url?: string
  }
  status?: boolean
  bookId?: number
}

/**
 * 接口 [取消收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/18710) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/uncollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleUncollectRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [取消收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/18710) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/uncollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiArticleUncollectRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/uncollect',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [取消收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/18710) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/uncollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiArticleUncollectRequestConfig: ApiDeleteApiArticleUncollectRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/uncollect',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiArticleUncollect',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '取消收藏文章',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18710',
    author: 11,
  },
}

/**
 * 接口 [取消收藏文章↗](http://192.168.143.129:3001/project/11/interface/api/18710) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/uncollect`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiArticleUncollect = /*#__PURE__*/ (
  requestData: IApiArticleUncollectReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleUncollectRes>(prepare(apiDeleteApiArticleUncollectRequestConfig, requestData), ...args)
}

apiDeleteApiArticleUncollect.requestConfig = apiDeleteApiArticleUncollectRequestConfig

/**
 * 接口 [删除收藏集↗](http://192.168.143.129:3001/project/11/interface/api/18737) 的 **请求类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/book/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleBookDeleteReq {
  /**
   * 收藏集ID
   */
  id?: number
  /**
   * 用户ID
   */
  userId?: string
  /**
   * 收藏集标题
   */
  title?: string
  /**
   * 收藏集的描述
   */
  description?: string
  /**
   * 创建时间
   */
  createTime?: string
}

/**
 * 接口 [删除收藏集↗](http://192.168.143.129:3001/project/11/interface/api/18737) 的 **返回类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/book/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiArticleBookDeleteRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [删除收藏集↗](http://192.168.143.129:3001/project/11/interface/api/18737) 的 **请求配置的类型**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/book/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiDeleteApiArticleBookDeleteRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/article/book/delete',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [删除收藏集↗](http://192.168.143.129:3001/project/11/interface/api/18737) 的 **请求配置**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/book/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiDeleteApiArticleBookDeleteRequestConfig: ApiDeleteApiArticleBookDeleteRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/article/book/delete',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteApiArticleBookDelete',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '删除收藏集',
    category: '文章收藏管理',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18737',
    author: 11,
  },
}

/**
 * 接口 [删除收藏集↗](http://192.168.143.129:3001/project/11/interface/api/18737) 的 **请求函数**
 *
 * @分类 [文章收藏管理↗](http://192.168.143.129:3001/project/11/interface/api/cat_207)
 * @标签 `文章收藏管理`
 * @请求头 `DELETE /api/article/book/delete`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiDeleteApiArticleBookDelete = /*#__PURE__*/ (
  requestData: IApiArticleBookDeleteReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiArticleBookDeleteRes>(prepare(apiDeleteApiArticleBookDeleteRequestConfig, requestData), ...args)
}

apiDeleteApiArticleBookDelete.requestConfig = apiDeleteApiArticleBookDeleteRequestConfig

const mockUrl_0_0_0_5 = 'http://192.168.143.129:3001/mock/11' as any
const devUrl_0_0_0_5 = '' as any
const prodUrl_0_0_0_5 = '' as any
const dataKey_0_0_0_5 = undefined as any

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17810) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeVerifySmsCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17810) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeVerifySmsCodeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17810) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiCodeVerifySmsCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/verifySmsCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17810) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiCodeVerifySmsCodeRequestConfig: ApiPostApiCodeVerifySmsCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/verifySmsCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiCodeVerifySmsCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '验证短信验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17810',
    author: 11,
  },
}

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17810) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiCodeVerifySmsCode = /*#__PURE__*/ (
  requestData: IApiCodeVerifySmsCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeVerifySmsCodeRes>(prepare(apiPostApiCodeVerifySmsCodeRequestConfig, requestData), ...args)
}

apiPostApiCodeVerifySmsCode.requestConfig = apiPostApiCodeVerifySmsCodeRequestConfig

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17819) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeVerifySmsCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17819) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeVerifySmsCodeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17819) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminCodeVerifySmsCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/verifySmsCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17819) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminCodeVerifySmsCodeRequestConfig: ApiPostAdminCodeVerifySmsCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/verifySmsCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminCodeVerifySmsCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '验证短信验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17819',
    author: 11,
  },
}

/**
 * 接口 [验证短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17819) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifySmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminCodeVerifySmsCode = /*#__PURE__*/ (
  requestData: IAdminCodeVerifySmsCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeVerifySmsCodeRes>(prepare(apiPostAdminCodeVerifySmsCodeRequestConfig, requestData), ...args)
}

apiPostAdminCodeVerifySmsCode.requestConfig = apiPostAdminCodeVerifySmsCodeRequestConfig

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17828) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeVerifyMailCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17828) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeVerifyMailCodeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17828) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminCodeVerifyMailCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/verifyMailCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17828) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminCodeVerifyMailCodeRequestConfig: ApiPostAdminCodeVerifyMailCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/verifyMailCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminCodeVerifyMailCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '验证邮箱验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17828',
    author: 11,
  },
}

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17828) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminCodeVerifyMailCode = /*#__PURE__*/ (
  requestData: IAdminCodeVerifyMailCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeVerifyMailCodeRes>(
    prepare(apiPostAdminCodeVerifyMailCodeRequestConfig, requestData),
    ...args,
  )
}

apiPostAdminCodeVerifyMailCode.requestConfig = apiPostAdminCodeVerifyMailCodeRequestConfig

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17837) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeVerifyMailCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17837) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeVerifyMailCodeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17837) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiCodeVerifyMailCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/verifyMailCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17837) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiCodeVerifyMailCodeRequestConfig: ApiPostApiCodeVerifyMailCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/verifyMailCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiCodeVerifyMailCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '验证邮箱验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17837',
    author: 11,
  },
}

/**
 * 接口 [验证邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17837) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/verifyMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiCodeVerifyMailCode = /*#__PURE__*/ (
  requestData: IApiCodeVerifyMailCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeVerifyMailCodeRes>(prepare(apiPostApiCodeVerifyMailCodeRequestConfig, requestData), ...args)
}

apiPostApiCodeVerifyMailCode.requestConfig = apiPostApiCodeVerifyMailCodeRequestConfig

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17846) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSmsCallbackReq {}

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17846) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSmsCallbackRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17846) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminCodeSmsCallbackRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/sms/callback',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17846) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminCodeSmsCallbackRequestConfig: ApiPostAdminCodeSmsCallbackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/sms/callback',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminCodeSmsCallback',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '短信验证码回调',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17846',
    author: 11,
  },
}

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17846) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminCodeSmsCallback = /*#__PURE__*/ (
  requestData?: IAdminCodeSmsCallbackReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeSmsCallbackRes>(prepare(apiPostAdminCodeSmsCallbackRequestConfig, requestData), ...args)
}

apiPostAdminCodeSmsCallback.requestConfig = apiPostAdminCodeSmsCallbackRequestConfig

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17855) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSmsCallbackReq {}

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17855) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSmsCallbackRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17855) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiCodeSmsCallbackRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/sms/callback',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17855) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiCodeSmsCallbackRequestConfig: ApiPostApiCodeSmsCallbackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/sms/callback',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiCodeSmsCallback',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '短信验证码回调',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17855',
    author: 11,
  },
}

/**
 * 接口 [短信验证码回调↗](http://192.168.143.129:3001/project/11/interface/api/17855) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiCodeSmsCallback = /*#__PURE__*/ (
  requestData?: IApiCodeSmsCallbackReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeSmsCallbackRes>(prepare(apiPostApiCodeSmsCallbackRequestConfig, requestData), ...args)
}

apiPostApiCodeSmsCallback.requestConfig = apiPostApiCodeSmsCallbackRequestConfig

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17864) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSendSmsCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17864) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSendSmsCodeRes {
  code?: number
  data?: number
  msg?: string
}

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17864) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminCodeSendSmsCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/sendSmsCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17864) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminCodeSendSmsCodeRequestConfig: ApiPostAdminCodeSendSmsCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/sendSmsCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminCodeSendSmsCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '发送可指定长度短信验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17864',
    author: 11,
  },
}

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17864) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminCodeSendSmsCode = /*#__PURE__*/ (
  requestData: IAdminCodeSendSmsCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeSendSmsCodeRes>(prepare(apiPostAdminCodeSendSmsCodeRequestConfig, requestData), ...args)
}

apiPostAdminCodeSendSmsCode.requestConfig = apiPostAdminCodeSendSmsCodeRequestConfig

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17873) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSendSmsCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17873) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSendSmsCodeRes {
  code?: number
  data?: number
  msg?: string
}

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17873) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiCodeSendSmsCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/sendSmsCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17873) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiCodeSendSmsCodeRequestConfig: ApiPostApiCodeSendSmsCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/sendSmsCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiCodeSendSmsCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '发送可指定长度短信验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17873',
    author: 11,
  },
}

/**
 * 接口 [发送可指定长度短信验证码↗](http://192.168.143.129:3001/project/11/interface/api/17873) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSmsCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiCodeSendSmsCode = /*#__PURE__*/ (
  requestData: IApiCodeSendSmsCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeSendSmsCodeRes>(prepare(apiPostApiCodeSendSmsCodeRequestConfig, requestData), ...args)
}

apiPostApiCodeSendSmsCode.requestConfig = apiPostApiCodeSendSmsCodeRequestConfig

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17882) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSendSmsCallbackReq {}

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17882) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSendSmsCallbackRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17882) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminCodeSendSmsCallbackRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/sendSms/callback',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17882) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminCodeSendSmsCallbackRequestConfig: ApiPostAdminCodeSendSmsCallbackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/sendSms/callback',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminCodeSendSmsCallback',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '短信验证码回复回调',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17882',
    author: 11,
  },
}

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17882) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminCodeSendSmsCallback = /*#__PURE__*/ (
  requestData?: IAdminCodeSendSmsCallbackReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeSendSmsCallbackRes>(
    prepare(apiPostAdminCodeSendSmsCallbackRequestConfig, requestData),
    ...args,
  )
}

apiPostAdminCodeSendSmsCallback.requestConfig = apiPostAdminCodeSendSmsCallbackRequestConfig

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17891) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSendSmsCallbackReq {}

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17891) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSendSmsCallbackRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17891) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiCodeSendSmsCallbackRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/sendSms/callback',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17891) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiCodeSendSmsCallbackRequestConfig: ApiPostApiCodeSendSmsCallbackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/sendSms/callback',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiCodeSendSmsCallback',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '短信验证码回复回调',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17891',
    author: 11,
  },
}

/**
 * 接口 [短信验证码回复回调↗](http://192.168.143.129:3001/project/11/interface/api/17891) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendSms/callback`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiCodeSendSmsCallback = /*#__PURE__*/ (
  requestData?: IApiCodeSendSmsCallbackReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeSendSmsCallbackRes>(prepare(apiPostApiCodeSendSmsCallbackRequestConfig, requestData), ...args)
}

apiPostApiCodeSendSmsCallback.requestConfig = apiPostApiCodeSendSmsCallbackRequestConfig

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17900) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSendMailCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17900) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IAdminCodeSendMailCodeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17900) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostAdminCodeSendMailCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/sendMailCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17900) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostAdminCodeSendMailCodeRequestConfig: ApiPostAdminCodeSendMailCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/sendMailCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAdminCodeSendMailCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '发送可指定长度邮箱验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17900',
    author: 11,
  },
}

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17900) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /admin/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostAdminCodeSendMailCode = /*#__PURE__*/ (
  requestData: IAdminCodeSendMailCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeSendMailCodeRes>(prepare(apiPostAdminCodeSendMailCodeRequestConfig, requestData), ...args)
}

apiPostAdminCodeSendMailCode.requestConfig = apiPostAdminCodeSendMailCodeRequestConfig

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17909) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSendMailCodeReq {
  phone?: string
  email?: string
  code?: string
  length?: number
}

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17909) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export interface IApiCodeSendMailCodeRes {
  code?: number
  data?: boolean
  msg?: string
}

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17909) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
type ApiPostApiCodeSendMailCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/sendMailCode',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17909) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
const apiPostApiCodeSendMailCodeRequestConfig: ApiPostApiCodeSendMailCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/sendMailCode',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostApiCodeSendMailCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '发送可指定长度邮箱验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/17909',
    author: 11,
  },
}

/**
 * 接口 [发送可指定长度邮箱验证码↗](http://192.168.143.129:3001/project/11/interface/api/17909) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `POST /api/code/sendMailCode`
 * @更新时间 `2026-04-19 18:05:01`
 */
export const apiPostApiCodeSendMailCode = /*#__PURE__*/ (
  requestData: IApiCodeSendMailCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeSendMailCodeRes>(prepare(apiPostApiCodeSendMailCodeRequestConfig, requestData), ...args)
}

apiPostApiCodeSendMailCode.requestConfig = apiPostApiCodeSendMailCodeRequestConfig

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18521) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminCodeVerifyImgCodeReq {
  key?: string
  code: string
  type?: string
}

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18521) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminCodeVerifyImgCodeRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18521) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminCodeVerifyImgCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/verifyImgCode',
    undefined,
    string,
    'key' | 'code' | 'type',
    false
  >
>

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18521) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminCodeVerifyImgCodeRequestConfig: ApiGetAdminCodeVerifyImgCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/verifyImgCode',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['key', 'code', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminCodeVerifyImgCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '验证图形验证码的正确',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18521',
    author: 11,
  },
}

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18521) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminCodeVerifyImgCode = /*#__PURE__*/ (
  requestData: IAdminCodeVerifyImgCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeVerifyImgCodeRes>(prepare(apiGetAdminCodeVerifyImgCodeRequestConfig, requestData), ...args)
}

apiGetAdminCodeVerifyImgCode.requestConfig = apiGetAdminCodeVerifyImgCodeRequestConfig

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18530) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiCodeVerifyImgCodeReq {
  key?: string
  code: string
  type?: string
}

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18530) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiCodeVerifyImgCodeRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18530) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiCodeVerifyImgCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/verifyImgCode',
    undefined,
    string,
    'key' | 'code' | 'type',
    false
  >
>

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18530) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiCodeVerifyImgCodeRequestConfig: ApiGetApiCodeVerifyImgCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/verifyImgCode',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['key', 'code', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiCodeVerifyImgCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '验证图形验证码的正确',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18530',
    author: 11,
  },
}

/**
 * 接口 [验证图形验证码的正确↗](http://192.168.143.129:3001/project/11/interface/api/18530) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/verifyImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiCodeVerifyImgCode = /*#__PURE__*/ (
  requestData: IApiCodeVerifyImgCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeVerifyImgCodeRes>(prepare(apiGetApiCodeVerifyImgCodeRequestConfig, requestData), ...args)
}

apiGetApiCodeVerifyImgCode.requestConfig = apiGetApiCodeVerifyImgCodeRequestConfig

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18539) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminCodeGetImgCodeReq {
  key?: string
  type?: string
}

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18539) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IAdminCodeGetImgCodeRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18539) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetAdminCodeGetImgCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/admin/code/getImgCode',
    undefined,
    string,
    'key' | 'type',
    false
  >
>

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18539) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetAdminCodeGetImgCodeRequestConfig: ApiGetAdminCodeGetImgCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/admin/code/getImgCode',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['key', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAdminCodeGetImgCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取图形验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18539',
    author: 11,
  },
}

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18539) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /admin/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetAdminCodeGetImgCode = /*#__PURE__*/ (
  requestData: IAdminCodeGetImgCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IAdminCodeGetImgCodeRes>(prepare(apiGetAdminCodeGetImgCodeRequestConfig, requestData), ...args)
}

apiGetAdminCodeGetImgCode.requestConfig = apiGetAdminCodeGetImgCodeRequestConfig

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18548) 的 **请求类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiCodeGetImgCodeReq {
  key?: string
  type?: string
}

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18548) 的 **返回类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export interface IApiCodeGetImgCodeRes {
  code?: number
  data?: string
  msg?: string
}

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18548) 的 **请求配置的类型**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
type ApiGetApiCodeGetImgCodeRequestConfig = Readonly<
  RequestConfig<
    'http://192.168.143.129:3001/mock/11',
    '',
    '',
    '/api/code/getImgCode',
    undefined,
    string,
    'key' | 'type',
    false
  >
>

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18548) 的 **请求配置**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
const apiGetApiCodeGetImgCodeRequestConfig: ApiGetApiCodeGetImgCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/code/getImgCode',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: ['key', 'type'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetApiCodeGetImgCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {
    name: '获取图形验证码',
    category: '验证码公共模块',
    project: 'ipink',
    url: 'http://192.168.143.129:3001/project/11/interface/api/18548',
    author: 11,
  },
}

/**
 * 接口 [获取图形验证码↗](http://192.168.143.129:3001/project/11/interface/api/18548) 的 **请求函数**
 *
 * @分类 [验证码公共模块↗](http://192.168.143.129:3001/project/11/interface/api/cat_210)
 * @标签 `验证码公共模块`
 * @请求头 `GET /api/code/getImgCode`
 * @更新时间 `2026-04-19 18:05:02`
 */
export const apiGetApiCodeGetImgCode = /*#__PURE__*/ (
  requestData: IApiCodeGetImgCodeReq,
  ...args: UserRequestRestArgs
) => {
  return request<IApiCodeGetImgCodeRes>(prepare(apiGetApiCodeGetImgCodeRequestConfig, requestData), ...args)
}

apiGetApiCodeGetImgCode.requestConfig = apiGetApiCodeGetImgCodeRequestConfig

/* prettier-ignore-end */
