# MessageBoard-Flux
React+Flux to MessageBoard

打开dist/html/index.html即可查看效果

以下是详细说明：

程序功能：
查看留言列表；
新增留言；
页面置顶。

程序亮点：
React+Flux实现；
Mock.js假数据填充，无需任何后台，即开即用；
手打超多注释。

文件结构（代码在src中）：
/assets 下放置依赖文件（jquery以及bootstrap）；
/css 下index.css自定义样式，/img放置的是置顶图片；
/html 下index.html界面；
/js：
    /react（依赖react.js文件）：
        /actions下 动作；
        /dispatcher下 分发器；
        /stores下 存储；
        /index.js 视图。
    mock.value.js 假数据填充。

具体实现：
js（React）文件:src/js/react/index.js是视图代码文件;
       src/js/react/*除了index.js文件之外的其他文件是flux结构的文件。
Bootstrap实现总体样式；
CSS3实现消息提示隐藏（src/css/index.css）；
Mock.js拦截请求填充假数据。


其他说明：
如果想尝试修改重新压缩，请先使用npm install下载安装package.json中的依赖，而后使用gulp指令拷贝文件；
gulpfile.js实现功能是文件拷贝以及src/js/react下js文件的转码（es6转换）压缩，如有更多需求还自行修改此文件。
