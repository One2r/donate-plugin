require('../css/donate.css');
var $ = require('jquery');
var defaults = require('./donate-config');
var layer = require('layer-ce');

$.extend({
    DonatePlugin: function(options) {
        var originalOptions = options = options || {};
		options = $.extend(true, {}, defaults, options);
		var id = options.id;
		if (id == undefined){
			return;
		}
		console.log(options)
		var payObj = [];
		if(options.wxpay){
			payObj.push({
					title: '微信赞赏',
					content: '<div style="text-align: center; width: 90%;"><img class="reward-qrcode" src="'+options.wxpay_qrcode+'"/><div>微信扫一扫</div><div>'
			})
		}
		if(options.alipay){
			payObj.push({
					title: '支付宝赞赏',
					content: '<div style="text-align: center; width: 90%;"><img class="reward-qrcode" src="'+options.alipay_qrcode+'"/><div>支付宝扫一扫</div><div>'
			})
		}
		if(payObj.length == 0 ){
			return;
		}
		$(id).html(options.donateUI);
		$(id+" .reward-btn").on('click', function () {
			layer.tab({
				type: 1,
				shadeClose: true,
				area: ['350px', '270px'],
				tab: payObj
			});
		})
    }
})
