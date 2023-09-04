import Configs from "./types";

export interface ConfigsProvider {
  get(): Promise<Configs>;
}

class ConfigsProviderImp implements ConfigsProvider {
  async get(): Promise<Configs> {
    let module: Configs = null!;
    if (process.env.NODE_ENV == "development") {
      module = (await import("./local.json")) as any;
    } else if (process.env.NODE_ENV == "test") {
      module = (await import("./test.json")) as any;
    } else {
      // Lazy Import Dummy file, this will make visible to post build script.
      module = (await import("./dummy.json")) as any;
    }
    return module;
  }
}
const getConfigsProvider = function () {
  let instance: ConfigsProvider = null!;
  if (instance) return;
  instance = new ConfigsProviderImp();
  return instance;
};
export default getConfigsProvider;
