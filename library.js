const Plugin = {}

// 当 {"hook": "action:user.loggedIn"} 触发时调用的方法
Plugin.log = function (data) {
  // 使用 hook 传入的数据中的 uid
  const { uid } = data
  console.log('------------------- 欢迎登录,用户号:', uid)
}

module.exports = Plugin
