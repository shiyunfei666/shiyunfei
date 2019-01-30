let path = "/";

const appConfig = {

    //端口
    port: "8080",

    //域名
    domainName: "dajiang.jiangpr.com",

    //网站根目录
    baseUrl: "",

    //接口根目录
    apiBaseUrl: "http://dajiang.jiangpr.com",

    //文件重命名地址
    upFileUrl: "",

    //静态文件域名
    staticBaseUrl: path,

    //静态文件根目录
    staticUrl: "/static/",

    staticCssUrl: "",

    //应用在域名下基础路径，如在域名根目录下是"/"，在域名app路径下是"/app/"
    routeBasePath: path,

    //当前根本域
    domain: "dajiang.jiangpr.com",

    //接口列表
    apis: {
        adminlogin: '/admin/usey/login',  //登陆验证 code:    pd:    us: 
    	admindlsend: '/admin/usey/dlsend',  //发送验证码 参数 phone: 
    }
}

module.exports = appConfig;