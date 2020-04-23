# vue-ts-admin

## 结构

```
-project
  |script                                     脚本
  |public                                     静态文件
  |servers                                    node接口服务
  |src                                        source资源
    |app                                      app主模块
      |components                             组件(不能包含业务逻辑~)
      |element                                elementui 相关
      |icons                                  svg 相关(需要用script/svg.sh脚本添加，参考文件内的md文件)
      |interface                              interface相关
      |layout                                 全局的壳
      |pages                                  页面(包含业务逻辑~)
      |store                                  服务模块
      |utils                                  方法封装
      |api.service.ts                         接口服务层
      |auth.guard.ts                          验证服务层(router守卫在这里)
      |http-interceptors.service.ts           拦截服务层(拦截器列表)
      |http-service.ts                        请求服务层(注册拦截器)
      |store.state.service.ts                 cookie服务层
      |app.module.ts                          app的模块入口 ---(app入口文件)
      |app.module.scss                        app的全局样式
      |app.router.ts                          app的路由入口
      |app.vue                                app的vue入口
      |validate.ts                            校验规则列表
    |assets                                   静态资源(图片、文件....)
    |main.ts                                  项目的入口 ----(项目打包入口文件)
    |monitor.ts                               监控服务
    |setting.ts                               全局静态常量(标题、开关)
    |shims-tsx.d.ts
    |shims-vue.d.ts
    |tsconfig.app.json
    |tsconfig.spec.json
  |tests
  |.env.example
  |.babel.config.js
  |package.json
  |process.json
  |README.md
  |server.js
  |tsconfig.json
  |tslint.json
  |vue.config.js
  |yarn.lock
```

## 项目相关命令
```bash
// Project setup
yarn serve

// Compiles and hot-reloads for development
yarn build

// Compiles and minifies for production
yarn test:unit

// Run your end-to-end tests
yarn test:e2e

// Lints and fixes files
yarn lint

// 生成svg到components
sh ./script/svg.sh

// 检查vue.config.js
sh ./script/inspect.sh

// 上线
node deploy.js
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
