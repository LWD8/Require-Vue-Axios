require(['config'], function () {
	require(['vue','jquery', 'path', 'api/promise'], function (Vue, $, apidata, promise) {
		new Vue({
			el: '#app',
			data: {
				songs: 'Vue双向绑定数据',
				msg: ''
			},
			methods: {
				onButton() {
					this.msg = 'You have access Jquery by using require'

					promise(apidata.GetLoginCode).then(res => {
						console.log(res)
					})
				}
			}
		})
	})
})