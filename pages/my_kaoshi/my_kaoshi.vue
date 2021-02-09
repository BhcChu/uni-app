<template>
	<view class="kaoshi-all-wrap">
		<!-- <uni-nav-bar :border="false" style="margin-bottom: 20rpx;" @clickLeft="back" left-icon="back" left-text="" title="我的考试">
		</uni-nav-bar> -->
		<!-- 试题类型标签 -->
		<view class="exam-type-wrap">
			<view class="flex align-center font-weight-bold course-tab">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view class="tab-item" @click="changeTab(index,item.id)" v-for="(item, index) in tabBars" :key="index" :class="tabIndex === index ? 'text-main' : 'text-light-muted'">
						{{item.title}}
					</view>
				</scroll-view>
			</view>

			<swiper :current="tabIndex" class="swiper-box" :style="{height:scrollH+'px'}" @change="onChangeTab">
				<!-- 全部  XXX XXX XXX -->
				<swiper-item v-for="(item, index) in tabBars" :key="index">
					<scroll-view scroll-y :style="'height:' + scrollH+'px;'">
						<block v-for="(item, index) in tiListByTab" :key="index">
							<!-- 考试列表 -->
							<view @click="viewExamDetail(item.id)" class="exam-item">
								<image class="exam-item-img" :src="item.thumb" mode="aspectFill"></image>
								<view class="exam-item-right">
									<view class="exam-item-title">
										{{item.title}}
									</view>
									<view class="exam-item-num">{{item.nums_t}}</view>
									<view class="exam-item-end-num">
										{{item.ans_nums_t}}
									</view>
								</view>
							</view>

						</block>
					</scroll-view>
				</swiper-item>
			</swiper>

		</view>


	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
	import uniIcons from '@/components/uni-ui/uni-icons/uni-icons.vue';
	const app = getApp();

	export default {
		components: {
			uniNavBar,
			uniIcons
		},
		data() {
			return {
				scrollH: 500,
				tabIndex: 0,
				tabBars: [], //标签数组
				list: [],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				tiList: [], //试题列表 所有
				tiListByTab: [], //试题列表, 分标签
				userinfo: '', //用户信息
			}
		},
		onReady() {
			let userInfoBySto = uni.getStorageSync('userinfo');
			if (!userInfoBySto) {
				uni.navigateTo({
					url: '../login/login',
				});
			}
			this.userinfo = userInfoBySto;
			// 获取标签分类
			this.getCategoryTab();
			// 获取试题列表
			this.getTiList(0);
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 查看试题详情
			viewExamDetail(tid) {
				if (!uni.getStorageSync('userinfo')) {
					uni.navigateTo({
						url: '../login/login',
					});
					return;
				}

				let gData = app.globalData;
				uni.navigateTo({
					url: '../kaoshi_detail/kaoshi_detail?tid=' + tid,
				});
			},
			// 获取我的考试列表
			getTiList(type = 0) {

				let gData = app.globalData;
				let that = this;
				uni.request({
					url: gData.site_url + 'Tests.GetMyTests',
					method: 'GET',
					data: {
						'uid': that.userinfo.id,
						'token': that.userinfo.token,
						'catid': type,
						'p': '0'
					},
					success: res => {
						console.log(res);
						if (res.data.data.code != '0') {
							return;
						}
						this.tiList = res.data.data.info; //默认全部试题
						this.tiListByTab = res.data.data.info;
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});
			},
			// 获取标签分类
			getCategoryTab() {
				let gData = app.globalData;
				uni.request({
					url: gData.site_url + 'Tests.GetClass',
					method: 'GET',
					data: {
						// 暂时不需要登录
						'uid':getApp().globalData.userinfo.id,
						'token':getApp().globalData.userinfo.token
					},
					success: res => {
						let info = res.data.data.info;
						info.unshift({
							'id': '',
							'title': '全部'
						});
						this.tabBars = info;
					},
					fail: () => {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					},
				});

			},
			//切换选项卡
			changeTab(index, cid) {
				this.tabIndex = index;
				// if((cid == null) || (cid == '')) {
				// 	this.tiListByTab = this.tiList;
				// 	return;
				// }
				// // 展示对应分类的课程列表
				// let arr = new Array();
				// for (let idx in this.tiList) {
				// 	if(this.tiList[idx].catid == cid){
				// 		arr.push(this.tiList[idx]);
				// 	}
				// }
				this.getTiList(cid);
				this.tiListByTab = arr;
			},
			//滑动
			onChangeTab(e) {
				let current = e.detail.current;
				//切换当前索引
				this.tabIndex = current;

				let cid = this.tabBars[current].id;
				this.getTiList(cid);
				// if((cid == null) || (cid == '')) {
				// 	this.tiListByTab = this.tiList;
				// 	return;
				// }
				// let arr = new Array();
				// for (let idx in this.tiList) {
				// 	if(this.tiList[idx].catid == cid) {
				// 		arr.push(this.tiList[idx]);
				// 	}
				// }
				this.tiListByTab = arr;
			},
			//官方滚动方法
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			// 打开在线刷题
			openOnlineTi() {
				uni.navigateTo({
					url: '../check_tiku/check_tiku',
				});
			}
		}
	}
</script>

<style>
	.kaoshi-all-wrap {
		width: 92%;
		margin: 0 auto;
	}

	.left-page-title {
		width: 300rpx !important;
		font-size: 32rpx;
		display: inline-block;
		font-weight: bold;
	}

	/* 在线刷题框 */
	.online-brush-topic {
		height: 170rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		border-radius: 10rpx;
		color: #FFFFFF;
		background: linear-gradient(to right, #38E1AB, #1BD1B1);
	}

	.online-brush-img {
		width: 48rpx;
		height: 52rpx;
		margin-right: 25rpx;
	}

	.online-brush-txt {
		display: inline-block;
		width: 74%;
	}

	/* 考试区域 */
	.exam-type-wrap {
		margin-top: 24rpx;
	}

	/* 滑动标签 */
	.course-tab {
		margin-bottom: 36rpx;
		width: 100%;
		overflow: hidden;
	}

	.tab-item {
		width: 140rpx;
		height: 54rpx;
		line-height: 54rpx;
		margin-right: 48rpx;
		display: inline-block;
		border-radius: 30rpx;
		text-align: center;
		background-color: #F5F5F5;
		font-size: 20rpx;
	}

	.tab-item:last-child {
		margin-right: 0;
	}

	.scroll-view_H {
		width: 100%;
		white-space: nowrap;
	}

	/deep/.uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	}


	.text-main {
		color: #FFFFFF !important;
		background: linear-gradient(to right,#3D98FF ,#7A76FA );
	}

	.text-main::after {
		/* 隐藏下划线 */
		bottom: -9999rpx !important;
	}

	.exam-item {
		margin-bottom: 25rpx;
	}

	.exam-item::after {
		content: "";
		height: 0;
		line-height: 0;
		display: block;
		clear: both;
		visibility: hidden;
	}

	.exam-item-img {
		width: 200rpx;
		height: 150rpx;
		border-radius: 10rpx;
		float: left;
	}

	.exam-item-right {
		float: left;
		width: 65%;
		margin-left: 10rpx;
	}

	.exam-item-title {
		line-height: 30rpx;
		margin-bottom: 10rpx;
		font-size: 28rpx;
		color: #323232;
	}

	.exam-item-num {
		color: #969696;
		font-size: 20rpx;
	}

	.exam-item-end-num {
		color: #969696;
		font-size: 20rpx;
	}
</style>
