# jsx

下面是一段jsx结构
```jsx
let template = <div>
    <p>你好</p>
    <button name="text">你也好</button>
</div>
```

# js函数

```js
let template = h("div", null,
    h("p", null, "你好"),
    h("button", { name: "text" }, "你也好")
);
```

# js对象

DOM 建模 就是把真实DOM转化为虚拟DOM（JS对象，而非选JS字符串）

经过babel处理jsx结构转化为js对象
```js
let jsxObj = {
    type:"div",
    props:{
        children:[
            {
                type:"p",
                props:{
                    children:"你好"
                }
            },
            {
                type:"button",
                props:{
                    children: "你也好"
                    name: "text"
                }
            },
        ]
    }
}
```
操作真实DOM，性能会很低，很昂贵，成本很高，转而操作对象（虚拟DOM）
现在处理的不是DOM结构，而是对象，一切的DOM操作都可以转化为JS对象的操作

# render方法

render接受的是一个js对象，只是对象描述的是一段html结构
```js
```

# JSX建模

- type : 元素类型
- props : 元素属性
- children : 子元素集合

```html
<p name="abc">text</p>

<p name="abc">
    <p name="abc"></p>
</p>
```
|||
|-|-|
|type|p标签名|
|props|name="abc"|
|children|text|

children如果是嵌套了其它子元素的话，那么它就是一个数组

把`<p name="abc">text</p>`这类型的字符串转化为对象`{type:'p',props:{name:abc},children:'text'}`


# diff差异更新

更新前的对象树
```js
let jsxObj = {
    type:"div",
    props:{
        children:[
            {
                type:"p",
                props:{
                    children:"你好"
                }
            },
            {
                type:"button",
                props:{
                    children: "你也好"
                    name: "text"
                }
            },
        ]
    }
}
```
更新后的对象树
```js
let jsxObj = {
    type:"div",
    props:{
        children:[
            {
                type:"p",
                props:{
                    children:"你好"
                }
            },
            {
                type:"button",
                props:{
                    children: "hello world",
                    name: "text"
                }
            },
        ]
    }
}
```
拿旧的树和新的树做对比，找出不同的地方进行`replaceChild,insertChild`增删查改，然后更新到真实DOM上面

以空间换时间，大量消耗内存

虚拟DOM的镜像（虚拟DOM）

读帧动画
