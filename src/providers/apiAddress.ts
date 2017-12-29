const address = 'http://121.43.101.20:8099/v1/display/';

export const api = {
  userRegister: address + 'userregister',//注册
  userlogin: address + 'userlogin',//登录
  getTtends: address + 'gettrends',//当前所有流信息概况
  namespacelist: address + 'namespacelist',//机构列表
  roomlist: address + 'roomlist',//房间列表
  getstreamtrend: address + 'getstreamtrend',//单个流走向查询
  getstreaminfo: address + 'getstreaminfo',//单个节点信息详情
}
