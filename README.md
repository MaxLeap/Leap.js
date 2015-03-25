#Leap.as前端框架 Leap.js

Leap.js是[Leap AS Console](https://console.leap.as)反复迭代开发后的产物，主要用于解决前端组件化以及复杂多变的数据和需求的问题。

##简介：

Leap.js 是一套基于backbone, marionette 及 requirejs 为核心的轻量级框架，专注解决模型(数据)层适配的问题.

如果你也:
  
- 需要一个 非侵入式开箱即用的单页框架
- 需要数据仓库管理你的数据,以适应各种不同风格的后台 API,并且保持代码的独立性,可复用性
- 需要在前端进行 join,分页,排序,搜索,计算中间结果并得出最终结果等(NOSQL 环境下此需求更强强烈)
- 需要 内存级别的 HTTP 缓存,自动合并请求，数据格式化，重用数据及数据的多态展示
- 需要组件化,保证组件间的解耦与可复用性
- 需要页面结构分层,以适应设计上不可预知的变化
- 需要一个功能较全面的 event-bus 模型(如包含 channel),用于对模块进行解耦和复用
- 需要像 REST API 标准化资源一样标准化前端逻辑
- 兼容各种UI插件，如React,bootstrap,SemanticUI
- 写配置而不是写代码
...

那么, Just have a try!


##计划：
- 去掉marionette等换成更简单的框架
- 增加对用户交互事件对管理整合两套事件机制，逐步接近FLUX的设计
- 进一步拓展UI组件库，动画库


##文档：
[文档](https://gitcafe.com/Potato/Cube.js/wiki)

 
## 快速开始

### 安装：  
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
### 新建项目：  
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

##谁在用Leap：

Leap.as Console 前端开发组

##感谢：

感谢Leap.as默默耕耘的同学,感谢各位大神帮忙采坑.  
同时欢迎众大神帮忙扩展，希望这套 Leap 能够不用学习新的“语法”，同时真正解决一些不值得浪费青春的问题。   

## License

MIT