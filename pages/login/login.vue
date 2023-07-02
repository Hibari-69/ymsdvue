<template>
	<view class="container">

		<!-- <customSwiper></customSwiper> -->
		<custom-swiper :image-list="imageList"></custom-swiper>

		<input type="number" placeholder="请输入你的电话号码" v-model="formData.utell">
		<!-- 密码属性 -->
		<input type="password" placeholder="请输入你的密码" v-model="formData.upwd">
		<button @click="login">立即登录</button>
		<button @click="toRegister">跳转注册</button>
	</view>
</template>

<script>
	import {login} from '@/utils/api'
	
	export default {
		data() {
			return {
				formData: {
					utell: "",
					upwd: "",
				},
				imageList: []
			}
		},
		onLoad() {
			uni.request({
				url: "http://localhost:8888/image/queryByIType?itype=1",
				success: (reseponse) => {
					console.log(reseponse)
					//获取后端传过来的数据
					this.imageList = reseponse.data.data
				}
			})
		},
		methods: {
			login() {
				//登录
				login(this.formData).then(response => {

					uni.showToast({
						title: response.msg,
						icon: "none"
					})

					console.log(response)
					uni.setStorage({
						key: "ymsdUserInfo",
						data: response.data
					})

					setTimeout(() => {
						uni.switchTab({
							url: "/pages/index/index"
						})
					}, 3000)


				})
				console.log(this.formData)

			},
			// 跳转方法
			toRegister() {
				uni.navigateTo({
					url: "/pages/register/register"
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 20rpx;
	}

	input {
		border: 1px solid #ccc;
		height: 80rpx;
		padding: 0 20rpx;
	}

	input,
	button {
		margin-bottom: 20rpx;
		border-radius: 50rpx;
	}
</style>
