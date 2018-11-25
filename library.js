const Plugin = {}

Plugin.log = function(data) {
  const {
    uid,
    req
  } = data
  console.log('------------------- 欢迎登录,用户号:', uid)
}

module.exports = Plugin
