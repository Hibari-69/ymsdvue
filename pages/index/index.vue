<template>

	<view class="content">
		<button @click="tologin" v-show="isLogin">登录</button>
		<button @click="logout" v-show="!isLogin">退出登录</button>
		<custom-swiper :image-list="imageList"></custom-swiper>
		<view class="box" @click="toProduct">
			<view>
				<image src="../../static/mendian.png" mode=""></image>
				<view class="text">门店自取</view>
				<view>点单无需排队</view>
			</view>
			<view>
				<image src="../../static/waimai.png" mode=""></image>
				<view class="text">外卖</view>
				<view>配送到家</view>
			</view>
		</view>
		<view class="info">
					<view>
						<view>积分商城</view>
						<view>点击了解详情》</view>
						<image src="../../static/sc.png"></image>
					</view>
					<view>
						<view>积分签到</view>
						<view>点击了解详情》</view>
						<image src="../../static/qd.png"></image>
					</view>
					<view>
						<view>我的优惠券</view>
						<view>点击了解详情》</view>
						<image src="../../static/yhj.png"></image>
					</view>
				</view>



	</view>
</template>

<script>
	import {
		url
	} from '@/utils/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				//定义变量
				id: "",
				//定义一个数组
				bannerList: [],
				imageList: [],
				isLogin: false
			}
		},
		onShow() {
			//this指向问题
			console.log(this)
			var flag = false
			console.log("onShow被触发")
			uni.getStorage({
				key: "ymsdUserInfo",
				success: (res) => {
					console.log(res.data)
					//用户登录不展示登录按钮
					this.isLogin = false
				},
				fail: (res) => {
					//没有找到值
					console.log(res)
					//用户登录没登录展示登录按钮
					this.isLogin = true
				}
			})
		},

		methods: {
			tologin() {
							uni.navigateTo({
								url: "/pages/login/login"
							})
						},
						logout() {
							//清除缓存，给出提示 重定向
							uni.clearStorage()
			
							uni.showToast({
								title: "退出成功",
								icon: "none"
							})
			
							setTimeout(() => {
								uni.navigateTo({
									url: "/pages/login/login"
								})
							}, 3000)
						},
			
						toProduct() {
							uni.switchTab({
								url: "/pages/product/product"
							})
						},
			
			onLoad() {
				// 控制台打印
				uni.request({
					url: "http://localhost:8888/image/queryByIType?itype=1",
					success: (reseponse) => {
						console.log(reseponse)
						// 获取传递过来的数据
						this.imageList = reseponse.data.data
					}
				})
			},


			// goto() {
			// 	//普通的页面跳转  跳转到index界面

			// 	uni.navigateTo({
			// 		// ../表示的是上一层路径 ./表示的是同级路径 ../../表示的是上上级的路径
			// 		// 定义了一个id为：999的参数
			// 		url: "/pages/login/login"

			// 	})

			// }

		}
	}
</script>

<style>
	.content {
		background: rgb(245, 245, 245);
		height: 100%;
	}

	uni-page-body {
		height: 100%;
	}

	.box {
		display: flex;
		/* 横轴 */
		justify-content: space-around;
		/* 纵轴 */
		align-items: center;
		text-align: center;
		padding: 50rpx;
		margin: 10rpx;
		background: #fff;
		border-radius: 35rpx;
	}

	.text {
		font-weight: bold;
		font-size: 37rpx;
		margin: 15rpx auto;
	}

	.box image {
		width: 150rpx;
		height: 150rpx;
	}

	.box>view {
		width: 50%;
	}

	.box>view:nth-child(1) {
		border-right: 1px solid #000
	}
	.info {
			display: flex;
			/* 横轴 */
			justify-content: space-around;
			align-items: center;
			text-align: center;
			padding: 50rpx;
			margin: 10rpx;
			background: #fff;
			border-radius: 35rpx;
		}
		.info image {
			width: 150rpx;
			height: 150rpx;
		}
		.info>view:nth-child(1)>view:nth-child(1) {
			font-size: 22px;
			font-weight: bold;
		}
		.info>view:nth-child(1)>view:nth-child(2) {
			font-size: 15px;
			color: rgb(196, 166, 153);
			font-weight: bold;
		}
		.info>view:nth-child(2)>view:nth-child(1) {
			font-size: 22px;
			font-weight: bold;
		}
		.info>view:nth-child(2)>view:nth-child(2) {
			font-size: 15px;
			color: rgb(196, 166, 153);
			font-weight: bold;
		}
		.info>view:nth-child(3)>view:nth-child(1) {
			font-size: 22px;
			font-weight: bold;
		}
		.info>view:nth-child(3)>view:nth-child(2) {
			font-size: 15px;
			color: rgb(196, 166, 153);
			font-weight: bold;
		}
</style>
