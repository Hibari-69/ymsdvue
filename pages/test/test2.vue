<template>
	<view>
		
		<view class="container">
			<swiper class="swiper" style="height:200px" circular :indicator-dots="true" :autoplay="true" :interval="interval"
						:duration="duration">
						<swiper-item v-for="item in bannerList" :key="item.img">
							<image :src="item.img" mode=""></image>
						</swiper-item>
						
						<!-- <swiper-item>
							<image class="swiper-image" src="/static/11.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image class="swiper-image" src="/static/22.jpg"></image>
						</swiper-item> -->
					</swiper>
					
					<swiper class="swiper" style="height:200px" circular autoplay="true" interval="3000" indicator-dots="true">
					    <swiper-item v-for="(item,i) in imageList" :key="i">
					     <image :src="imgPath+item.iurl" mode=""></image>
					    </swiper-item>
					   </swiper>
		</view>
		<button type="default" @click="goto()">通过button跳转到about页面</button>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//定义一个数组
				bannerList:[],
				imageList:[]
			}
		},
		onLoad(option) {
			//在控制台打印输出语句
			console.log(option)
			//赋值操作
			this.id=option.id
			
			uni.request({
				url:"http://localhost:8888/banner",
				success: (reseponse) => {
					console.log(reseponse)
					this.bannerList=reseponse.data
				}
			})
			this.getImageList()
		},
		methods: {
			getImageList() {
				uni.request({
					url: "http://localhost:8888/imageList",
					success: (reseponse) => {
						console.log(reseponse)
						//获取后端传过来的数据
						this.imageList = reseponse.data
					}
				})
			},
		
		}
	}
</script>

<!--scoped 表示样式只在当前页面生效-->
<style scoped>
	.box1{
		/* 750rpx== 100%*/
		width:750rpx;
		height: 300px;
		background-color: blue;
	}
	
	.box2{
		width:750rpx;
		height: 300px;
		background-color: pink;
	}
	
	
	
.container{
	
}
	/* // 注释不适用于css  */
.container image{
	/* 让图片和父级一样大 */
	width: 100%;
	height:100%;
}

</style>
