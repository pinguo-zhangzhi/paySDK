/* jshint devel:true */

window.PG.setConfig({
	mode:'dev',
	channel:'native',
	appName:'demo',
	debug:true
});

var obj = {
	partner:"2088101568358171",
	seller_id:"xxx@alipay.com",
	out_trade_no:"0819145412-6177",
	subject:"测试",
	body:"测试测试",
	total_fee:"0.0.1",
	notify_url:"http://notify.msp.hk/notify.htm?orderId=123456789",
	service:"mobile.securitypay.pay",
	payment_type:"1",
	_input_charset:"utf-8",
	it_b_pay:"30m",
	sign:"lBBK%2F0w5LOajrMrji7DUgEqNjIhQbidR13GovA5r3TgIbNqv231yC1NksLdw%2Ba3JnfHXoXuet6XNNHtn7VE%2BeCoRO1O%2BR1KugLrQEZMtG5jmJIe2pbjm%2F3kb%2FuGkpG%2BwYQYI51%2BhA3YBbvZHVQBYveBqK%2Bh8mUyb7GM1HxWs9k4%3D",
	sign_type:"RSA"
};

var str = "",
	arr = [];

for(var key in obj){
	arr.push(key+'='+obj[key]);
}

str = arr.join('&');

window.PG.ready().then(function(interfaces){

	$('#aliPay').click(function(){
		interfaces.aliPay({
			packageValue:str
		}).then(function(res){
			alert(JSON.stringify(res));
			PG.log(JSON.stringify(res));
		});
	});
});






