import instance from "./interceptor";

const apiList = {
  get(url, configs) {
    return instance({
      url,
      method: "get",
      ...configs
    });
  },
  post(url, data, configs) {
    return instance({
      url,
      data,
      method: "post",
      ...configs
    });
  },
  postFile(url, data, configs) {
    const config = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    const mixConfigs = Object.assign({}, config, configs);

    return instance({
      method: "post",
      url,
      data,
      ...mixConfigs
    });
  }
};

export default apiList;
