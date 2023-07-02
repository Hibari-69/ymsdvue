<template>
	<view class="container">
		<custom-swiper :image-list="imageList"></custom-swiper>
		这是首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList: []
			}
		},
		methods: {
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
			}
		}
	}
</script>

<style>
	.container {}

	.container image {
		/* 让图片和父级一样大 */
		width: 100%;
		height: 100%;
	}

	/* .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 } */

	/* .logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
 }

 .text-area {
  display: flex;
  justify-content: center;
 }

 .title {
  font-size: 36rpx;
  color: #8f8f94;
 } */
</style>
