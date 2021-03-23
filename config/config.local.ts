import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.vitePlugin = {
    devServer: true,
    targets: [/^(\/node_modules)/g, /.(gif|png|svg|jpg)$/g],
  };

  return config;
};
