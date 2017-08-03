# donate-plugin [![Build Status](https://travis-ci.org/One2r/donate-plugin.svg?branch=master)](https://travis-ci.org/One2r/donate-plugin)
支持微信、支付宝扫码支付的打赏插件

## 编译安装
```
npm install && npm run build
```

## 使用
第一步：在页面中引入jquery和donate-plugin
```
<script src="path/to/jquery-3.2.1.min.js"></script>
<script src="path/to/donate-plugin-0.0.1.min.js"></script>
```

第二步：定义donate-plugin区域
```
<div id="donate-plugin"></div>
```

第三：创建donate-plugin
```
<script>
    $.DonatePlugin({
        "id":"#donate-plugin",  //通过id指定donate-plugin区域
        "wxpay":true,   //微信打赏
        "alipay":true,  //支付宝打赏
        //"wxpay_qrcode":"",    //微信支付二维码
        //"alipay_qrcode":"",   //支付宝支付二维码
        "strive_msg":"「真诚赞赏，手留余香」", //争取打赏语
        "think_msg":"您的支持将鼓励我继续创作 :)"   //感谢语
    });
</script>
```