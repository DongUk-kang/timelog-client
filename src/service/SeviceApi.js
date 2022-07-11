import axios from "axios";

export default class Service {
  constructor(config) {
    this.service = axios.create({
      baseURL: "http://localhost:4000",
      ...config,
    });
    this.service.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );
  }

  handleSuccess(response) {
    return response.data;
  }

  handleError(error) {
    switch (error?.response.status) {
      case 401:
        this.redirectTo("/");
        break;
      case 404:
        this.redirectTo("/404");
        break;
      default:
        this.redirectTo("/error");
        break;
    }
    return Promise.reject(error);
  }

  redirectTo = (path) => {
    document.location = path;
  };

  get(url, config) {
    return this.service.get(url, config);
  }

  delete(url, config) {
    return this.service.delete(url, config);
  }

  post(url, data, config) {
    return this.service.post(url, data, config);
  }

  put(url, data, config) {
    return this.service.put(url, data, config);
  }
}
