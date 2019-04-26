// 处理非JS文件
module.exports = (source) => {
    // console.log(source)
    return "module.exports = `" + source + "`;"
}