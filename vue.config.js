module.exports = {
    productionSourceMap: false,
    // 关闭eslint
    lintOnSave: false,
    // 代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
            },
        },
    },
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "尚品汇-购物商城";
                args[0].keywords = "keywords内容";
                args[0].description = "description内容";
                return args;
            })
    },
}