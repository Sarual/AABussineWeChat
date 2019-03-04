# AA 连锁酒店商家小程序

## 依赖

- Vue
- Babel
- Webpack
- Nodejs v7.9.0
- [WePY](https://tencent.github.io/wepy/)

## 常用操作

#### 如何运行？

```
执行如下命令：
$ npm install
```

#### 开启实时编译

```
$ wepy build --watch
```

#### 如何开发一个功能页面

- 整体目录结构如下：

```
├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置
```

- 组件：

```
├── LoadingX               窗口加载条
├── TitleBar               自定义头部
├── TabBar                 自定义tabBar-top
├── Placeholder            noData展示
├── AreaPicker             地区选择器
```

- 工具方法：

```
├── base                   综合工具类
├── http                   请求接口类
```

- 页面

```
├── login                  登录页
```

具体代码参照已实现的 WePY

### wepy 开发文档地址

    https://tencent.github.io/wepy/

### 小程序开发文档

    http://mp.weixin.qq.com/debug/wxadoc/dev/

### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择 dist 目录。

2、微信开发者工具-->项目-->关闭 ES6 转 ES5。 <font color=red>重要：漏掉此项会运行报错。</font>

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。 <font color=red>重要：某些情况下漏掉此项也会运行报错。</font>

4、微信开发者工具-->项目-->关闭代码压缩上传。 <font color=red>重要：开启后，会导致真机 computed, props.sync 等等属性失效。</font>

### 演示地址

打开微信扫一扫

## 常见问题（收集中）
