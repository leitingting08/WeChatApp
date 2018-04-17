const app = getApp()

Page({
	data:{
		current:0
	},
	onReady:function(){

	},
	startgame:function(){
		wx.navigateTo({
			url:'../2048/2048'
		})
	}
})