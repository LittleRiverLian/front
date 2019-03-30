 /**
 * 公共方法
 * 2017/2/6
 */
 
 //应用相关路径
var contextPath = "analyse";
//var pathUrl = "http://localhost:8080/"+contextPath+"/";
//var pathUrl = "http://39.106.34.227/";
var pathUrl = "http://www.finaceo.com/";
var restUrl = pathUrl+"rest";
var payUrl = pathUrl+"alipay/payment.jsp";

$(document).ready(function (){
	//navInit();//导航栏的二级标题的变化
	header();//导航栏
	footer();//底部信息
	sideMenu();//侧边菜单栏
})

////实例化导航栏的下拉框二级标题  
//function navInit(){
//	layui.use('layer', function(){
//		var $ = layui.$ //由于layer弹层依赖jQuery，所以可以直接得到
//				,layer = layui.layer;
//
//		$(".content").hover(
//			function(){
//				$(this).find(".content-icon").addClass("layui-anim layui-anim-scale");
//			},
//			function(){
//				$(this).find(".content-icon").removeClass("layui-anim layui-anim-scale");
//			}
//		)
//
//		$(".nav-item").hover(
//			function(){
//				$(this).find(".nav-menu").stop().slideDown();
//			},
//			function(){
//				$(this).find(".nav-menu").stop().hide();
//			}
//		)
//	});
//}

function header(){
	var header = '<div class="layui-container"><div class="layui-row">'
				 +'<div class="layui-col-md3 layui-col-xs3 nav-logo">'
				 +'<img id="logo" src="image/3.jpg" height="60" alt="智泽华" /></div>'
				 +'<div class="layui-col-md1 layui-col-xs1 layui-col-md-offset1">'
				 /*+'<div class="layui-col-md1 layui-col-xs1">'*/
				 +'<a href="index.html" target="_self">平台首页</a></div>'
				 +'<div class="nav-item layui-col-md1 layui-col-xs1">'
		         +'<a href="#" target="_self" >宏观资源</a>'
		         +'<div class="nav-menu"><a href="hgsj.html" target="_self">宏观数据</a>'
		         +'<a href="hgfx.html" target="_self">宏观报告</a></div></div>'
		         +'<div class="nav-item layui-col-md1 layui-col-xs1">'
		         +'<a href="#" target="_self" >行业资源</a>'
		         +'<div class="nav-menu"><a href="hysj.html" target="_self">行业数据</a>'
		         +'<a href="hyfx.html" target="_self">行业报告</a>'
		         +'<a href="hyjxbz.html" target="_self">绩效标准值</a></div></div>'
		         +'<div class="nav-item layui-col-md1 layui-col-xs1">'
		         +'<a href="#" target="_self" >上市企业</a>'
		         +'<div class="nav-menu"><a href="ssqysj.html" target="_self">企业数据</a>'
		         +'<a href="ssqy.html" target="_self">企业报告</a></div></div>'
		         /*我的资源相关内容start*/
		         +'<div class="nav-item layui-col-md1 layui-col-xs2"><a href="#" target="_self">我的分析</a>'
		         +'<div class="nav-menu">'
		         +'<a href="znfxyjNew.html" target="_self">报表粉饰评价</a>'
		         +'<a href="kmyd.html" target="_self">科目异动分析</a>'
		         +'<a href="znfxyj.html" target="_self">风险预警评价</a>'
				 +'<a href="zncwfx.html" target="_self">深度指标分析</a>'
			     +'<a href="hybj.html" target="_self">行业比较分析</a>'
		         +'<a href="qydb.html" target="_self">企业对标分析</a>'
		         +'<a href="cwfx.html" target="_self">财务分析报告</a>'
		         +'<a href="fxyj.html" target="_self">风险预警报告</a>'
		         +'<a href="clientManage.html">客户管理</a>'
		         +'<a href="statementManage.html" target="_self">报表管理</a></div></div>'
		         /*我的资源相关内容end*/
		         /*智能报告分析start
		         +'<div class="nav-item layui-col-md1 layui-col-xs1"><a href="#" target="_self">智能报告</a>'
		         +'<div class="nav-menu">'
		         +'<a href="" target="_self">智能财务分析</a>'
		         +'<a href="" target="_self">智能风险预警</a><a href="" target="_self">智能行业对比</a>'
		         +'<a href="" target="_self">自定义模型</a><a href="" target="_self">自定义报告</a>'
		         +'<a href="" target="_self">分析模型工具</a></div></div>'
		         	智能报告分析end*/

				+'<div class="nav-item layui-col-md1 layui-col-xs1">'
		         +'<a href="#" target="_self" >大数据</a>'
		         +'<div class="nav-menu"><a href="dsj1.html" target="_blank">企业视图</a>'
		         + '<a href="news.html?typeId=2" target="_self">市场头条</a>'
		         +'<a href="news.html?typeId=1" target="_self">公司头条</a></div></div>'
				 /*
		         +'<div class="nav-item layui-col-md1 layui-col-xs1">'
		         +'<a href="#" target="_self" >市场热点</a>'
		         +'<div class="nav-menu"><a href="news.html?typeId=2" target="_self">市场头条</a>'
		         +'<a href="news.html?typeId=1" target="_self">公司新闻</a></div></div>'
				 */
	var normal = '<div class="layui-col-md layui-col-xs nav-btn">'
    			 +'<a href="login.html" target="_self"> 登录</a>'
    			 +'<a href="register.html" target="_self"> 注册</a>'
    			 +'</div></div></div>'
	var generalUser = '<div class="layui-col-md1 layui-col-xs1 nav-item">'
        			  +'<a href="#" target="_self" >账户管理</a>'
        			  +'<div class="nav-menu"><a href="account.html" target="_self">我的账户</a>'
        			  +'<a href="javascript:void(0)" onclick="logout()">退出</a></div></div>' 
        			  +'</div></div></div>'         
	var admin = '<div class="layui-col-md1 layui-col-xs1 nav-item">'
		  		+'<a href="#" target="_self" >后台管理</a>'
		  		+'<div class="nav-menu"><a href="account.html" target="_self">我的账户</a>'
		  		+'<a href="reportPrice.html" target="_self">价格管理</a>'
		  		+'<a href="userManage.html" target="_self">管理用户</a>'
		         +'<a href="excel_data_import.html" target="_self">数据导入</a>'
		         +'<a href="data_make_standard.html" target="_self">标准值生成</a>'
				 +'<a href="createItem.html" target="_self">报告条目创建</a>'
		  		+'<a href="javascript:void(0)" onclick="logout()">退出</a></div></div>' 
		  		+'</div></div></div>'
	$.ajax({
		url : restUrl+'/user/current',
		type:'GET',
		async: false,
		beforeSend: function(xmlHttp){ 
	        xmlHttp.setRequestHeader("If-Modified-Since","0"); 
	        xmlHttp.setRequestHeader("Cache-Control","no-cache");
	    }, //清除浏览器的缓存
	}).then(function(result) {
		//alert(1); flagadmin 是否是管理员 需要判断是否是管理员 管理员的参数是 "0"
		
		if(result.success == "false"){
			$(".nav-box").html(header+normal);
		}else if(result.user.flagadmin == "0"){
			//alert("success:"+result.success + "userAdmin:" + result.user.flagadmin);
			$(".nav-box").html(header+admin);
		}else{
			//alert("success:"+result.success + "userAdmin:" + result.user.flagadmin);
			$(".nav-box").html(header+generalUser);
		}
		
		$(".nav-item").hover(
			function(){
				$(this).find(".nav-menu").stop().slideDown();
			},
			function(){
				$(this).find(".nav-menu").stop().hide();
			}
		)
	});
}

//注销登陆
function logout(){
 	$.ajax({
 		url : restUrl+'/user/logout',
 		type:'GET',
 		cache:false,
 		ifModified:true
 	}).then(function(result){
 		if (result.success == "true") {//注销成功
 			window.location.href = pathUrl + "web/index.html";
 		}
 	});
 }
 
 
function footer(){
	var footer = '<div class="layui-fluid footer-nav">'
				 +'<div class="layui-container">'
				 +'<div class="layui-row">'
//				 +'<div class="layui-col-md5"><ul class="footer-list">'
//				 +'<li><a href="" target="_self"><i class="layui-icon">&#xe623;</i>首页</a></li>'
//				 +'<li><a href="" target="_self"><i class="layui-icon">&#xe623;</i>宏观资源</a></li>'
//				 +'<li><a href="" target="_self"><i class="layui-icon">&#xe623;</i>行业资源</a></li>'
//				 +'<li><a href="" target="_self"><i class="layui-icon">&#xe623;</i>上市企业</a></li>'
//				 +'<li><a href="" target="_self"><i class="layui-icon">&#xe623;</i>我的资源</a></li>'
//				 +'<li><a href="" target="_self"><i class="layui-icon">&#xe623;</i>市场热点</a></li>'
//				 +'</ul></div>'
				 +'<div class="layui-col-md8">'
				 +'<div class="contact-box">'
				 +'<div class="contact-ico"><i class="layui-icon">&#xe624;</i></div>'
				 +'<div class="contact-info">675369272@qq.com</div>'
				 +'</div>'
				 +'<div class="contact-box">'
				 +'<div class="contact-ico"><i class="layui-icon">&#xe63a;</i></div>'
				 +'<div class="contact-info">010 - 51659980  或  18612110093</div>'
				 +'</div>'
				 +'<div class="contact-box">'
				 +'<div class="contact-ico"><i class="layui-icon">&#xe715;</i></div>'
				 +'<div class="contact-info">北京市 海淀区 上地信息路</div>'
				 +'</div></div>'
				 +'<div class="layui-col-md4">'
				 +'<div class="footer-map" style="background-image: url(image/footer.jpg);"></div>'
				 +'</div></div></div></div>'
				 +'<div class="layui-fluid footer-icp">'
				 +'<div class="layui-container">© 2018 北京智泽华软件有限责任公司</div>'
				 +'</div>'
	$(".layui-footer").html(footer);
}

//侧边菜单
function sideMenu(){
	var curPath = window.location.href;
	var pageName = curPath.substring(curPath.lastIndexOf("/") + 1);
	if((pageName.indexOf("clientManage.html")==-1)&&(pageName.indexOf("statementManage.html")==-1)
		&&(pageName.indexOf("cwfx.html")==-1)&&(pageName.indexOf("fxyj.html")==-1)
		&&(pageName.indexOf("qydb.html")==-1)&&(pageName.indexOf("hybj.html")==-1)){
		return;
	}
	var sideMenu = '';
	if(pageName.indexOf("qydb.html")==-1){
		sideMenu += '<a href="qydb.html" target="_self" class="news-menu"><i class="layui-icon">&#xe622;</i> 企业对标分析</a>';
	}else{
		sideMenu += '<a href="#" target="_self" class="news-menu active"><i class="layui-icon">&#xe622;</i> 企业对标分析</a>';
	}
	if(pageName.indexOf("cwfx.html")==-1){
		sideMenu += '<a href="cwfx.html" target="_self" class="news-menu"><i class="layui-icon">&#xe622;</i> 财务分析报告</a>';
	}else{
		sideMenu += '<a href="#" target="_self" class="news-menu active"><i class="layui-icon">&#xe622;</i> 财务分析报告</a>';
	}
	if(pageName.indexOf("fxyj.html")==-1){
		sideMenu += '<a href="fxyj.html" target="_self" class="news-menu"><i class="layui-icon">&#xe622;</i> 风险预警报告</a>';
	}else{
		sideMenu += '<a href="#" target="_self" class="news-menu active"><i class="layui-icon">&#xe622;</i> 风险预警报告</a>';
	}

	if(pageName.indexOf("clientManage.html")==-1){
		sideMenu += '<a href="clientManage.html" target="_self" class="news-menu"><i class="layui-icon">&#xe622;</i> 客户管理</a>';
	}else{
		sideMenu += '<a href="#" target="_self" class="news-menu active"><i class="layui-icon">&#xe622;</i> 客户管理</a>';
	}
	if(pageName.indexOf("statementManage.html")==-1){
		sideMenu += '<a href="statementManage.html" target="_self" class="news-menu"><i class="layui-icon">&#xe622;</i> 报表管理</a>';
	}else{
		sideMenu += '<a href="#" target="_self" class="news-menu active"><i class="layui-icon">&#xe622;</i> 报表管理</a>';
	}
	//alert(sideMenu);
	$(".news-box").html(sideMenu);
}

//弹出选择客户的页面
function selectClient(){
	layer.open({
	title:'客户信息',
	type:2,
	offset:'t',
	shade:0,
	skin:'layui-layer-lan',
	area:['800px','500px'],
	shadeClose:true, //点击遮罩关闭
	content:pathUrl+'web/clientInfo.html'
	});
};
//选择国标行业
function choosegb(){
	layer.open({
	title:'国标行业树',
	type:2,
	shade:0,
	skin:'layui-layer-lan',
	area:['300px','400px'],
	shadeClose:true, //点击遮罩关闭
	content:pathUrl+'web/treeView.jsp?param=corpgb'
	});
}

function choosegzw(){
	layer.open({
	title:'国资委行业树',
	type:2,
	shade:0,
	skin:'layui-layer-lan',
	area:['300px','400px'],
	shadeClose:true, //点击遮罩关闭
	content:pathUrl+'web/treeView.jsp?param=corpgzw'
	});
}

//选择机构名称
function chooseBranch(orgSearchType){
	//alert("aaaa");
	layer.open({
	title:'机构',
	type:2,
	skin:'layui-layer-lan',
	area:['240px','300px'],
	shadeClose:true, //点击遮罩关闭
	content:pathUrl+'web/treeView.jsp?param=branch&orgSearchType='+orgSearchType+''
	});
}

/**
* 生成报告通用方法
* viewMode:0:直接下载 1:在线swf预览 2:在线pdf预览
* id:报告Id
* reportType:报告类型 0:行业报告 1:宏观经济报告  2:上市企业分析报告
* title:报告标题
*
**/
function createReport(viewMode,id,reportType,title){
	//初始化form表单参数
	var data = {};

	data.reportId = id;
	data.reportType = reportType;
	data.viewMode = viewMode;

	var params = {};
	params.url = restUrl+"/zzhIndex/createReport";
	params.data = data;

	//初始化订单参数
	var order = {};
	if(reportType=="0"){
		order.cost = orderCostParams.IndustryCost;
	}else if(reportType=="1"){
		order.cost = orderCostParams.HongguanReport;
	}else if(reportType=="2"){
		order.cost = orderCostParams.FinanceCost;
	}else{
	}
	order.subject = title;
	order.body = title;
	order.reportId = id;

	if(viewMode=="0"){
		//用户下载
		checkVIP(order,params,reportDownload);
	}else if(viewMode=="1"){
		//swf预览页面
		swfView(params);
	}else{
		//pdf预览页面
		pdfView(params);
	}
}

/**
* 生成行业分析报告
* outMode:0:生成doc格式 1:其它(pdf格式)
* viewMode:0:直接下载 1:在线预览
* industryid:行业Id
* yeardate:分析时间
* title:报告标题
*
**/
function createIndustryReport(outMode,viewMode,industryid,yeardate,title){
	//初始化form表单参数
	var data = {};
	data.industryid = industryid;
	data.yeardate = yeardate;
	data.outMode = outMode;
	data.viewMode = viewMode;

	var params = {};
	params.url = restUrl+"/hyfx/createIndustry";
	params.data = data;

	//初始化订单参数
	var order = {};
	order.cost = orderCostParams.IndustryCost;
	order.subject = title;
	order.body = title;

	if(outMode=="0"){
		if(viewMode=="0"){
			//用户下载
			checkVIP(order,params,reportDownload);
		}else if(viewMode=="1"){
			//swf预览页面
			swfView(params);
		}else{
			//pdf预览页面
			pdfView(params);
		}
	}else{
	}
}

/**
* 生成财务分析报告
* outMode:0:生成doc格式 1:其它(pdf格式)
* viewMode:0:直接下载 1:在线预览
* corpCode:客户代码
* corpName:客户名称
* analyseDate:分析时间
* analyseType:财务报告类型
* title:报告标题
*
**/
function createFinanceReport(outMode,viewMode,corpCode,corpName,analyseDate,analyseType,title){
	var year="";
	var month="";
	var reptypecode="";
	if(analyseDate.length==8){
		year = analyseDate.substring(0,4);
		month = analyseDate.substring(4,6);
		reptypecode = analyseDate.substring(6,8);
	}

	//初始化form表单参数
	var currencyUnit = "3"; //万元
	var data = {};
	data.corpCode = corpCode;
	data.corpName = corpName;
	data.analyseType = analyseType;
	data.repTypeCode = reptypecode;
	data.strYear = year;
	data.strMonth = month+","+reptypecode;
	data.currencyUnit = currencyUnit;
	data.viewMode = viewMode;
	data.outMode = outMode;

	var params = {};
	params.url = restUrl+"/report/createDoc";
	params.data = data;

	//初始化订单参数
	var order = {};
	order.cost = orderCostParams.FinanceCost;
	order.subject = title;
	order.body = title;

	if(outMode=="0"){
		if(viewMode=="0"){
			//用户下载
			checkVIP(order,params,reportDownload);
		}else if(viewMode=="1"){
			//预览页面
			swfView(params);
		}else{
			//预览页面
			pdfView(params);
		}
	}else{
	}
}

//报告下载
function reportDownload(params){
	//layer.msg('正在生成报告，请稍候...', {icon: 16,shade: 0.01});
	var index = layer.load(1, {shade: [0.1,'#fff']}); //0.1透明度的白色背景
	$.ajax({
		url:params.url,
		type:'post',
		data:params.data,
		dataType:'json',
		success: function(result) {
			layer.close(index);
			if (result.success == "true") {
				var reportPath = result.reportPath;
				var reportName = result.reportName;
				var url = restUrl+"/zzhIndex/downloadReport";
				var data = "reportPath="+reportPath+"&reportName="+reportName;
				$.download(url,data,'post');

			}else{
				layer.msg(result.msg);
			}
		}
	});
}

//swf报告预览
function swfView(params){
	//layer.msg('正在生成报告预览，请稍候...', {icon: 16,shade: 0.01});
	var index = layer.load(1, {shade: [0.1,'#fff']}); //0.1透明度的白色背景
	$.ajax({
		url:params.url,
		type:'post',
		data:params.data,
		dataType:'json',
		success: function(result) {
			layer.close(index);
			if (result.success == "true") {
				//报告预览
				var url = pathUrl+"pdf/swfview.jsp";
				layer.open({
					title:'报告预览',
					type:2,
					offset:'t',
					skin:'layui-layer-lan',
					area:['820px','620px'],
					shadeClose:true, //点击遮罩关闭
					content:url
				});
			} else {
				layer.msg(result.msg);
			}
		}
	});
}

//pdf报告预览
function pdfView(params){
	//layer.msg('正在生成报告预览，请稍候...', {icon: 16,shade: 0.01});
	var index = layer.load(1, {shade: [0.1,'#fff']}); //0.1透明度的白色背景
	$.ajax({
		url:params.url,
		type:'post',
		data:params.data,
		dataType:'json',
		success: function(result) {
			layer.close(index);
			if (result.success == "true") {
				//报告预览
				//var url = pathUrl+"pdf/viewPdf.jsp";
				//window.location.href = url;
				//window.open(url);
				//var pdfPath = "/"+contextPath+"/rest/file/pdf/"+result.reportType+"/"+result.pdfName;
				//var url = pathUrl+"pdf/viewer.html?file="+encodeURIComponent(pdfPath);
				//var url = pathUrl+"pdf/viewer.html?file="+pdfPath;
				var url = pathUrl+"pdf/pdfview.jsp?type="+result.reportType+"&uuid="+result.pdfName;
				openUrl(url);

			} else {
				layer.msg(result.msg);
			}
		}
	});
}

function openUrl(url){
	var el = document.createElement("a");
	document.body.appendChild(el);
	el.href = url;
	el.target = "_blank";
	el.click();
	document.body.removeChild(el);
}

//国资委数据查看
function getGzwData(id){
	var index = layer.load(1, {shade: [0.1,'#fff']}); //0.1透明度的白色背景
	$.ajax({  
		url : restUrl+"/zzhIndex/getGzwDataList/"+id,  
		type : "GET",  
		dataType : "JSON",  
		success:function (data){
			var htmlContent = "";
			if(data == null || data == ''){
				htmlContent = "暂无数据";
			}else{
				htmlContent='<table class="layui-table"><thead>'+
						    '<tr><th>指标名称</th><th>规模</th><th>优秀</th><th>良好</th><th>一般</th><th>较差</th><th>极差</th></tr>'+
						    '</thead><tbody>';
				
				for(var i=0;i<data.list.length;i++){
					htmlContent+='<tr><td>'+data.list[i].indexName+'</td><td>'+data.list[i].guimoName+'</td>'
							     +'<td>'+data.list[i].you+'</td><td>'+data.list[i].liang+'</td><td>'+data.list[i].zhong+'</td>'
								 +'<td>'+data.list[i].di+'</td><td>'+data.list[i].cha+'</td></tr>';
				}
				htmlContent+='</tbody></table>';
			}
			layer.close(index);
			layer.open({
				title:'国资委数据',
				type:1,
				skin:'layui-layer-lan',
				area:['700px','400px'],
				shadeClose:true,
				content:htmlContent
			});
		},
		error:function (){
			layer.alert("发送请求失败");
		}
	}); 
}

//国资委数据下载
function createGzwData(id,title){
	//初始化form表单参数
	var params = {};
	params.reportId=id;

	//初始化订单参数
	var order = {};
	order.cost = 0;
	order.subject = title;
	order.body = title;
	order.reportId = id;

	//用户下载
	checkVIP(order,params,downGzwData);
}

//国资委数据下载
function downGzwData(params){
	var url = restUrl+"/zzhIndex/downGzwData";
	var data = "reportId="+params.reportId;
	$.download(url,data,'post');
}

/**
* ajax提交下载,动态渲染表单，提交表单后再删除
* 调用示例：$.download('download.do','params1=p1&param2=p2','post');
*
**/
jQuery.download = function(url, data, method) {
    // 获取url和data 
    if (url && data) {
        // data 是 string 或者 array/object 
        data = typeof data == 'string' ? data : jQuery.param(data);
        // 把参数组装成 form的 input 
        var inputs = '';
        jQuery.each(data.split('&'), function() {
            var pair = this.split('=');
            inputs += '<input type="hidden" name="' + pair[0] + '" value="' + pair[1] + '" />';
        });
		//alert(inputs);
        // request发送请求 
        jQuery('<form action="' + url + '" method="' + (method || 'post') + '">' + inputs + '</form>').appendTo('body').submit().remove();
    };
};
function current(){
	$.ajax({
		url : restUrl+'/user/current',
		type:'GET',
		async: false
	}).then(function(result) {
		if (result.success == "false") {
			location.href = pathUrl+"web/login.html";
		}
	});
}