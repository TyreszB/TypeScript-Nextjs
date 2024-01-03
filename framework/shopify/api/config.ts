import { ApiConfig } from "@/framework/common/types/api";
import { fetchApi } from "../product/utils";

class Config {
  private config: ApiConfig;

  constructor(config: ApiConfig) {
    this.config = config;
  }

  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchApi,
});

export function getConfig() {
  return configWrapper.getConfig();
}
