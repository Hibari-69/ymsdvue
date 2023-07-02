<template>
	<view>
		<view class="container">
			<swiper class="swiper" style="height:200px" circular :indicator-dots="true" :autoplay="true"
				:interval="interval" :duration="duration">
				<swiper-item>
					<image class="swiper-image" src="/static/11.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper-image" src="/static/22.jpg"></image>
				</swiper-item>
			</swiper>
			<!-- 定义了一个点击事件 v-on 跳转界面 -->
			<button type="default" @click="goto()">通过button跳转到about页面</button>
			test
			
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
			}
		},

		methods: {


			//goto:Function(){

			//}
			goto() {
				//普通的页面跳转  跳转到index界面

				// uni.navigateTo({
				// 	//../表示的是上一层路径 ./表示的是同级路径 ../../表示的是上上级的路径
				// 	//定义了一个id为：999的参数
				// 	//url:"/pages/index/index?id=999"


				// })
				//跳转到底部导航页
				//通过switchTab 跳转 无法传递参数
				uni.switchTab({
					url: "/pages/index/index"
				})
			}
		}
	}
</script>
<!--scoped 表示样式只在当前页面生效-->
<style scoped>
	.container {}

	/* // 注释不适用于css  */
	.container image {
		/* 让图片和父级一样大 */
		width: 100%;
		height: 100%;
	}
</style>
