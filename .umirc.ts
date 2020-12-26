import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // cssLoaderOptions: { localIdentName: '[local]' },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
});
