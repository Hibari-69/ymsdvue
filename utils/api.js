import request from "./request.js"

/**
 * 定义一个登录方法
 * @param {Object} params
 */
export function login(params){
	return request({
		url:"/user/login",
		method:"POST",
		data:params
	})
}

export function register(params){
	return request({
		url:"/user/register",
		method:"POST",
		data:params
	})
	
	
}
