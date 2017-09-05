// define的第一个参数统一为数组，用来声明该模块的依赖
// 第一个参数为回调，里面用来书写模块化的代码
// requirejs会保证依赖先执行，回调后执行
define([],function(){
    var a = '特大新闻';
    return{};
});