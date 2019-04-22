// jsx
let template = <div>
    <p>你好</p>
    <button name="text">你也好</button>
</div>
// js对象
// React.createElement("div", null, 
//     React.createElement("p", null, "你好"), 
//     React.createElement("button", { name: "text" }, "你也好")
// )
h("div", null,
    h("p", null, "你好"),
    h("button", { name: "text" }, "你也好")
)
// 利用React.createElement函数转为js对象
