### 项目简介
Cube.js是基于backbone的基础上，反复迭代后成型的一套用于快速开发企业级单页应用，图表类应用，数据管理类应用的框架。Cube.js模板提供一套默认的样式，采用Bootstrsp-Sass开发，完整项目可参见以开发成型的AppCube。

### 快速开始

#### 安装：
安装 gulp 工具
```
$ npm install -g gulp
```
安装 框架依赖
```
$ npm install
```
安装 前端依赖
```
$ bower install
```
加载CubeCore
```
$ git submodule init & git submodule update
```
#### 新建项目：
新建一个应用 
```
$ cube new app_name
```
添加子模块
```
$ cube add layout_name -m app_name
```
编译并启动本地服务器
```
$ gulp
```

### 详细信息

阅读[Document](https://gitcafe.com/Potato/Cube.js/wiki/API%E6%96%87%E6%A1%A3#wiki)

### License

MIT