// 封装ajax请求，方便统一处理接口返回值

import Vue from "vue";
import axios from "axios";
import appConfig from "./appConfig";

/**
* 根据api key获取完整的api 路径
* @param  {[type]} key [description]
* @return {[type]}     [description]
*/
function getApi(key){
	var uri = appConfig.apis[key];
	if(!uri) return "";

	if(uri.indexOf('mock') < 0)
	{
	    return appConfig.apiBaseUrl + uri;
	}else{
	    return uri;
	}
}

//需要统一处理的error
const erroCode = [-2];
const qs = require('qs');
const apphttps = function(params, success, error) {
	if(params === undefined) {
		console.error("必须传递参数");
		return false;
	}
	// console.log('params.url-1',params.url)
	//去配置文件查找uri  增加筛选条件http--如果没有http 就进行封装方法修饰链接，有就直接用-用于直接填写api的控件
	if (params.url.toLocaleLowerCase().indexOf('http')<0) {
		params.url = getApi(params.url);
	}
	// console.log('params.url-2',params.url)
	//console.log('params.url',params)
	params.withCredentials = true;

	//设置默认header
	let defaultHeaders = {'Content-Type': 'application/x-www-form-urlencoded'};
	if(params.headers) {
		params.headers = {
			...defaultHeaders,
			...params.headers
		};		
	} else {
		params.headers = defaultHeaders;
	}
	

	//参数统一用data,syf修改
	if(params.method.toLowerCase() == 'get')
	{
		params.params = params.data;
		delete params.data
	}
	
	if(params.data)
	{
		params.data = qs.stringify(params.data);
	}

	return axios(params)
	.then(function(response) {
		success(response.data);
	})
	.catch(function(err) {
		console.log(err);
		error && error(err);
	});
}

Vue.prototype.apphttps = apphttps;

export { apphttps };
