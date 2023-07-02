<template>
 <view>
    <swiper class="container" style="height:250px" circular autoplay="true" interval="1000" indicator-dots="true">
     <swiper-item v-for="(item,i) in imageList" :key="i">
      <image :src="imgPath+item.iurl" mode=""></image>
     </swiper-item>
    </swiper>
 </view>
</template>

<script>
 export default {
  name:"customSwiper",
  data() {
   return {
   };
  },
  props: ['imageList'],
  onLoad() {

  },
 }
</script>

<style>
.container {
   /* //margin-top:1000px; 错误示例  //注释不适用于css样式注释*/
   /* 添加注释 ctrl+/ */
   /* margin-top: 1000px; */
  }
 
  .container image {
   /* 让图片和父级一样大 */
   width: 100%;
   height: 100%;
 
   /* height: ; */
  }
</style>