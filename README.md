#Leap.as前端框架 Leap.js

##简介：

Leap.js是[Leap AS Console](https://console.leap.as)反复迭代开发后的产物，主要用于解决前端组件化以及复杂多变的数据及需求的问题。  
Leap.js不是一套写demo的框架，更适合用于快速开发产品，解决的更多的是实际开发中可能遇到的问题。  
我们不重复造轮子,我们用的轮子有Backbone, Marionette, Requirejs以及各种jQuery插件等。

如果你也:
  
- 需要一个非侵入式开箱即用的单页webapp框架
- 页面足够复杂,传统MVC里的Model不够用，需要数据仓库管理你的各种数据,以进行聚合等操作,并且保持代码的独立性,可复用性
- 你的后端同学不支持join,甚至不支持分页,排序,搜索等操作,需要在前端处理,或给出的是中间结果而非最终结果需要跨Model处理等
- 需要内存级别的 HTTP 缓存,自动合并请求,数据格式化,重用数据及数据的多态展示
- 灵活管理链式请求,标准化错误处理系统
- 想要在服务器不稳定的情况下仍然保持较好的用户体验
- 组件化,保证组件间的解耦与可复用性
- 页面结构分层,以适应设计上不可预知的变化
- 需要一个功能较全面的 event-bus 模型(如包含 channel),用于对模块进行解耦和复用
- 希望像REST API 标准化资源一样标准化前端逻辑
- 兼容各种UI插件/框架，如jQuery plugins, React, Bootstrap, SemanticUI等
- 希望写配置而不是写代码
- 其他:自由的数据绑定,灵活的错误处理...   
...

So, Just have a try!


##计划：
- 去掉Marionette或换成更简单的框架
- 增加对用户交互事件对管理整合两套事件机制，逐步接近FLUX的设计
- 进一步拓展UI组件库，动画库


##文档：
[文档](https://gitcafe.com/Potato/Cube.js/wiki/pages)

 
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
加载 submodule: [core](https://github.com/LeapAppServices/leap.js-core)  
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
同时欢迎众大神帮忙扩展，希望 Leap.js 能够不用学习新的"语法"，真正解决一些不值得浪费青春的问题。   

## License

MIT