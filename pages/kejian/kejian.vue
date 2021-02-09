<template>
	<view :class="{xiangziwrap : (kongkong == true)}">
		<image class="xiangzi" src="../../static/images/xiangzi.png" mode="aspectFill"></image>
		<text class="xiangzi_txt">暂无课件</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				kongkong:true
			}
		}
	}
</script>

<style>
	.xiangziwrap {
		position: absolute;
		left: calc(50% - 80px);
		top: calc(50% - 100px);
		width: 300rpx;
		height: 100rpx;
	}
	.xiangzi {
		margin-left: 100rpx;
		width: 100rpx;
		height: 100rpx;
	}
	.xiangzi_txt {
		width: 100%;
		display: block;
		text-align: center;
		font-size: 18rpx;
		color: #C7C7C7;
	}
</style>
