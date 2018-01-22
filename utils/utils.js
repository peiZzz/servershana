const SMSClient = require('@alicloud/sms-sdk');

const crypto = require('crypto');

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	host:'smtp.163.com',//主机地址
	port:25,
	auth:{
		user:'13113407350@163.com',
		pass:'5769113wpz'
	}
});

class Utils{
	constructor(){}

	//短信验证功能
	sendMessage(phone,code){
		// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
		console.log(1);
	    const accessKeyId = 'LTAIgGcj1eqss3LS';
	    const secretAccessKey = 'E9SWfn9QZax5uVZL0hbJUNYO5W7OfF';
	    //初始化sms_client
	    let smsClient = new SMSClient({accessKeyId, secretAccessKey})
	    //发送短信
	    return smsClient.sendSMS({
	      PhoneNumbers: phone, //接收短信手机号
	      SignName: 'dachui锤', //签名名称
	      TemplateCode: 'SMS_119092284', //模板号
	      TemplateParam: '{"code":' + code +'}' //模板验证码

	  	});
	}
	//加密功能
	addCrypto(o, field) {
	    //使用md5方式加密
	    let md5 = crypto.createHash('md5');

	    //指定加密字段
	    md5.update(o[field]);

	    o[field] = md5.digest('hex');
	  }

	//发邮件
	sendEmail(options,fn){
		transporter.sendMail(options,fn);
	}
}
	

module.exports = new Utils();
