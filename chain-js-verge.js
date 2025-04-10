// Define main function (script entry)
function main(config, profileName) {
  // 确认 config.proxies 存在（校验是否有节点数据）
  if (config && config.proxies) {
    // 遍历所有代理节点
    config.proxies.forEach(proxy => {
      if (proxy.name === "ss") {
        proxy["dialer-proxy"] = "链式中间节点";
      }
      if (proxy.name === "233boy-reality-204.235.240.7") {
        proxy["dialer-proxy"] = "链式中间节点";
      }
    });
  }

  // 返回修改后的 config 对象，供 Clash Verge 使用
  return config;
}
