# cboard-ui

## 1准备

## 2搭建项目框架
2.1 使用命令
  - windows+R 打开命令窗口
  - 全局安装 npm install -g @vue/cli
  - 在新文件夹下创建项目 vue create myshop (vue create 项目名字)
   
2.2 使用vue ui
  - windows+R 打开命令窗口
  - 全局安装 npm install -g @vue/cli
  - 输入 vue ui
  - 浏览器打开可视化页面，创建项目

## 3项目目录
```
|-- src                       - 源码目录
|   |---- components          - 非路由组件文件夹
|   |---- api                 - 与后台交互模块文件夹
|   |---- assets              - 通用资源文件夹，如fonts/img/stylus
|   |---- router              - vue的路由管理文件夹
|   |---- filters             - 自定义过滤器模块文件夹
|   |---- mock                - 模拟数据接口文件夹
|   |---- pages               - 路由组件文件夹
|   |---- store               - vuex相关模块文件夹
|   |---- views               - 项目布局相关文件夹
|   |---- App.vue             - 页面入口文件
|   |---- main.js             - 程序入口文件，加载各种公共组件
|-- public                    - 静态文件，比如一些图片，json数据等
|   |---- favicon.ico         - 图标文件
|   |---- index.html          - 入口页面
|-- .babelrc                  - ES6语法编译配置
|-- .editorconfig             - 定义代码格式
|-- .gitignore                - git上传需要忽略的文件格式
|-- .postcsssrc               - postcss配置文件
|-- README.md                 - 项目说明
|-- package.json              - 项目基本信息,包依赖信息等
```
## 4项目结构
```
|-- components                   - 非路由组件文件夹
     |---- MainFooter.vue           - 底部组件
     |---- MainHeader.vue           - 头部组件
     |---- MainSidebar.vue          - 侧边栏组件
     |---- MainContent.vue          - 内容组件
     
|-- views                       - 项目结构组件文件夹
     |---- board                    - 看板组件文件夹
            |---- Msite.vue             - 首页组件
     |---- config                   - 配置组件文件夹
            |---- Search.vue            - 搜索组件
     |---- management               - 管理组件文件夹
            |---- Order.vue             - 订单组件
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
