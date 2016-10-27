class EnvService {
  constructor() {}

  isDevelopment() { return process.env.ENV === "development"; }
  
  getApiUrl() { return this.isDevelopment() ? process.env.API_URL : ''; }
}

export default EnvService