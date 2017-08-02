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
		$(id).html(options.donateUI);
		$(id+" .reward-btn").on('click', function () {
			layer.tab({
				type: 1,
				shadeClose: true,
				area: ['350px', '270px'],
				tab: [{
					title: '微信赞赏',
					content: options.wxDonate
				}, {
					title: '支付宝赞赏',
					content: '内容2'
				}]
			});
		})
    }
})
