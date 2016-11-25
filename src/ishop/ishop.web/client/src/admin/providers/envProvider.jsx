class EnvProvider {
  constructor() {}

  $get() {
    return {
      isDevelopment: this.isDevelopment,
      getApiUrl: this.getApiUrl
    };
  }

  isDevelopment() { return process.env.ENV === "development"; }
  
  getApiUrl() { return this.isDevelopment() ? process.env.API_URL : ''; }
}

export default EnvProvider