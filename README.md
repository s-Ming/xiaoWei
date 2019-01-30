# xiao-wei

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





### 模块划分

### 搭建项目

使用脚手架搭建项目后还需要做的事情

安装less和less-loader
在index.html页面设置根字体大小

在main.js中引入字体图标并
在main.js引入全局重置样式

在main.js中引入router并挂载到实例上
安装Vue-router模块







### 一些处理方法

#### 如何给元素添加类型hover效果

给元素绑定两个点击事件@touchstart="touchstart($event)" @touchend="touchend($event)"，在方法里给该元素添加高亮类名

~~~
//给事件源对象添加类名来设置点击高亮效果
    touchstart(e) {
      console.log(e.target);
      e.target.classList.add("gaoliang");
    },
    touchend(e) {
      e.target.classList.remove("gaoliang");
    }
~~~




#### 路由配置好，但是页面显示空白

~~~
const router = new VueRouter({
  routes: []  //该单词写成了router，导致空白
  }]
~~~



#### 为什么在img中直接使用路径就可以正常显示图片，而v-for后则图片不能正常显示？

 url: require("../../../assets/imgs/4.jpg"), 

在assets文件夹下需要使用require获取该路径

[http://www.php.cn/js-tutorial-379068.html]关于assets文件与static文件的分析



### 动画的使用

安装animate.css动画

~~~
npm i animate.css
~~~

