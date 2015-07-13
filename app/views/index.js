/* jshint devel:true */

window.PG.setConfig({
	mode:'dev',
	channel:'native',
	appName:'demo',
	debug:true
});

window.PG.ready().then(function(interfaces){

	$('#aliPay').click(function(){
		interfaces.aliPay({
			seller:'2088901408530365',
			partner:'2088901408530365',
			tradeNO:'13223424234',
			productName:'productName',
			productDescription:'商品描述',
			amount:'20',
			notifyURL:'www.baidu.com',
			service:'mobile.securitypay.pay',
			paymentType:'1',
			inputCharset:'utf-8',
			itBPay:'30m',
			showUrl:'m.alipay.com',
			privateKey:'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAKyzAlEDI/KACtXQH6F5/zR/L6IFh0REDtmWQ5+nXS1m57q6aBEkhbi0kM3iJnwdfoHNcbAyaj9a7G2XOBsSVfBOpYMBcrf/uyvpJEKr7W2b06DxyJZOvZrCa+e2iEHK7qFW/wGpqdpnzXS6ZfqRZyZDVCnG8mfQDM92+pobkzxdAgMBAAECgYBGQhVBLAvlzh2aWq9jnCQtEUkmyIqrZ10++LLAuWvYNwJZWiNANS+DgeTGtwZRk5/NDt6OShsWesxsoGK0ezPyTZ6tFlG5WhUBkURpzoHaPjtaZfxTH7z8ccTD6ENJuQfU1vknzAGAhPgog3FtmQ473971XdCrtfXxhYb72xiKQJBAOMv2nxZdFptpc+x6oZPaIwpJZ6tsfIdbgiMtKCu8LtTOoH16/r/GQpOcxMnI3fj9//9As0jeexY4XfVCHUrAcsCQQDCmhZ9Vzi2Yc7a7eFaJDnXdFgBMJBmiD47he8s7iURDePZ3O+09aMPtFPOUgbRhQfb6DiJq1z622fmeLgjV1V3AkBzhOWnzSSoxpBFZ8ZEvSQAAPwsD04oOma02jcObWXjGpLpek6ftg7ZesJwvrn+QGDePZyrCpr4Xslm0WAXk+K5AkEAgaaFW0aUGza4yTV5UUQXYUs7IrfHTPhydde6zLVw7pbReiHvdiG9XMYom6ocrtSxsrpZiKcp0FwDMhK1o54Y6wJAcWra/CHrJ+Pe/qT0K6vg+6lHGEkLs4lsm3zO2VIV6X+QrYEoJEYFUSiX6aFOGqNXkmK2DZ6STRhvoHhr8GH7Ag=='

		}).then(function(res){
			alert(JSON.stringify(res));
			PG.log(JSON.stringify(res));
		});
	});
});
