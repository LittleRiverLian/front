//document.write('<script type="text/javascript" src="../js/zncwfx.js"></script>');
var drillDown = {
		
    getPieOption : function () {
        var option = null;
            option = {
//            	backgroundColor: '#FFF8DC',//背景色
            	title : {
//                    text: '流动资产构成图',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
//                        name: '流动资产构成图',
                        type: 'pie',
                        radius : '58%',
                        center: ['50%', '50%'],
//                        data:[
//                            {value:335, name:'直接访问'},
//                            {value:310, name:'邮件营销'},
//                            {value:234, name:'联盟广告'},
//                            {value:135, name:'视频广告'},
//                            {value:1548, name:'搜索引擎'}
//                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            return option;
    },
    getLineOption : function () {
        var option = null;
            option = {
//            	backgroundColor: '#E0EEE0',//背景色
                title: {
//                    text: '折线图下钻示例',
                	top: 20,
                  left: 'center'
                    //x: 'left'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}'
                },
                legend: {
                    //orient:'vertical',
                    x: 'center',
                    y:'bottom',
//                    top:'20%',
                    //data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                xAxis: {
                    type: 'category',
                    name: '年份',
                    splitLine: {show: false},
                    axisLabel:{interval: 0}//x轴全部显示
//                    data: ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609']
                },
               grid: {
                    left: 80,
                    right:80,
                    bottom: 50,
            	   	top:80
            	   	//containLabel: true
                },
                yAxis: {
                	type: 'value',
                	scale: true,
                    //type: 'log',
//                    name: 'y单位：亿元'
                },
                series: [
                    {
                        type:'line',
                        symbol:'star',//拐点样式
                        symbolSize: 8,//拐点大小
                        itemStyle : {
                            normal : {
                                lineStyle:{
                                    width:10,//折线宽度
                                }
                            }
                        },
                    },
//                    {
//                    	name : '非流动资产',
//                    	type : 'line',
//                    	data : [1, 2, 4, 8, 16, 32, 64, 128, 256]
//                    }
                ]
            };
            return option;
    },
    getBarOption : function () {
    	var option = null;
    	option = {
    			
    	};
    	 return option;
    },
    getBarpbOption : function () {
    	var option = null;
    	option = {
    			title: {
    				top: 20,
                    left: 'center',
    		        text: '利润增减因素分析图',
    		    },
    		    tooltip : {
    		        trigger: 'axis',
    		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    		        },
    		        formatter: function (params) {
    		            var tar;
    		            if (params[1].value != '-') {
    		                tar = params[1];
    		            }
    		            else {
    		                tar = params[0];
    		            }
    		            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    		        }
    		    },
    		    grid: {
    	             
                },
    		    legend: {
    		        data:['增加','减少'],
    		        x: 'center',
                    y:'bottom',
    		    },
    		    toolbox: {
    		        show : true,//显示策略
    		        feature : {
    		            mark : {show: true},
    		            dataView : {show: true, readOnly: false},
    		            restore : {show: true},
    		            saveAsImage : {show: true}
    		        }
    		    },
    		    xAxis : [
    		        {
    		            type : 'category',
    		            splitLine: {show:false},
    		            data : [] /*function (){
    		                var list = [];
    		                for (var i = 1; i <= 11; i++) {
    		                    list.push('11月' + i + '日');
    		                }
    		                return list;
    		            }()*/
    		        }
    		    ],
    		    yAxis : [
    		        {
    		            type : 'value'
    		        }
    		    ],
    		    series : [
    		        /*{
    		            name:'辅助',
    		            type:'bar',
    		            stack: '总量',
    		            itemStyle:{
    		                normal:{
    		                    barBorderColor:'rgba(0,0,0,0)',
    		                    color:'rgba(0,0,0,0)'
    		                },
    		                emphasis:{
    		                    barBorderColor:'rgba(0,0,0,0)',
    		                    color:'rgba(0,0,0,0)'
    		                }
    		            },
    		            data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
    		        },
    		        {
    		            name:'增加',
    		            type:'bar',
    		            stack: '总量',
    		            itemStyle : { normal: {label : {show: true, position: 'top'}}},
    		            data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
    		        },
    		         {
    		            name:'减少',
    		            type:'bar',
    		            stack: '总量',
    		            itemStyle : { normal: {label : {show: true, position: 'bottom'}}},
    		            data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
    		        } */
    		    ]
    	};
    	 return option;
    },
   
    
    initPieChart : function (option,params,dom,object) { 
    	var legendData = new Array();
    	var seriesData = new Array();
        // 初始化一个新的实例
        var myCharts = echarts.init(dom);
	    //object为当前的这个echart对象，大家可以自己打印出来看看
	    $.ajax({
	        type : 'POST',
	        url : params.url,
	        data : params.data,//这里应该放object中的数据
	        dataType : 'JSON',
	        success : function (data){
	        	console.log(params);
	        	option.title.text = data.list[0].chartName;		
				option.series[0].name = data.list[0].chartName;
//				option.series[0].radius = '10%';
				for(var i = 0; i < data.list.length; i++){
					legendData[i] = data.list[i].itemName;
					seriesData[i] = {name : data.list[i].itemName,
									value : data.list[i].itemValue[getXZ().fenxiTime],
									modelCode : data.list[i].code};
				}
				
				option.legend.data = legendData;
				option.series[0].data = seriesData;
				option.series[0].type = 'pie';
				myCharts.setOption(option, true);
				 //第二层下钻
				myCharts.on('click',function(obj31){
					var option31 = drillDown.getPieOption();
					var option32 = drillDown.getLineOption();
					var dom2 ;
					var ds ;
					if(obj31.data.modelCode.indexOf("A")!=-1){
						  ds = getDom("资产结构分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("B")!=-1){
						  ds = getDom("负债及权益结构模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("C")!=-1){
						  ds = getDom("实现利润分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("D")!=-1){
						  ds = getDom("成本费用分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("E")!=-1){
						  ds = getDom("现金流量分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("F")!=-1){
						  ds = getDom("偿债能力分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("G")!=-1){
						  ds = getDom("盈利能力分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("H")!=-1){
						  ds = getDom("营运能力分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("I")!=-1){
						  ds = getDom("发展能力分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("J")!=-1){
						  ds = getDom("经营协调性分析模块");
						  dom2 = ds.dom2;
				      }else if(obj31.data.modelCode.indexOf("K")!=-1){
						  ds = getDom("经营风险分析模块");
						  dom2 = ds.dom2;
				      }
					params.data = {modelCode : obj31.data.modelCode,corpCode:getXZ().corpCode,currencyUnit:getXZ().currencyUnit,fenxiTime : getXZ().fenxiTime};
					console.log(params);
					//=======判断是否是最底层数据======begin============================
					 $.ajax({
					        type : 'POST',
					        url : params.url,
					        data : params.data,//这里应该放object中的数据
					        dataType : 'JSON',
					        success : function (data){
					        	if(data.list.length != 0){
					  //------------有数据则继续执行--begin-------------------
					drillDown.clearEcharts(params.data.modelCode);//传入A01等清空
					drillDown.initPieChart2(option, params, dom,obj31);
					drillDown.initLineChart(option32, params, dom2,obj31);
					//---------------------------end--------------------	
					        	}else{
					        		layer.msg('已是最原始数据，不能下钻了！');
					        	}
					        }
					 });
					//======================end=======================
				 });
				
	        }
	    	
	    });
  },
  initLineChart:function (option,params,dom,object){
      
	  if(object.name=="毛利"){
		  params.data.modelCode='C01'
	  }
      // 初始化一个新的实例
      var myChart = echarts.init(dom);
      var legendarr = new Array();
      var xDataarr = new Array();
  	  var serarr = new Array();
  	  var bhtable2 = new Array();
  	  var mc = new Map();
	    //object为当前的这个echart对象，大家可以自己打印出来看看
	    //console.dir(object);
	    //我们可以看到name属性即为当前点击点的对应月份值，那么我们可以通过这个值去接口查询对应201609月份下的每一天的值.
	    //此处的201609月份数据可以通过接口读取
//  	console.log(option);
//  	console.log(params);
	    $.ajax({
	        type : 'POST',
	        url : params.url,
	        data : params.data,
	        dataType : 'JSON',
	        success : function (data){
	        	console.log(data);
	        	
	        	for(var i = 0; i < data.list.length; i++){
	        		bhtable2.push(data.list[i]);
	        		option.title.text = data.list[i].chartName;
	        		legendarr.push(data.list[i].itemName);
	        		mc.set(data.list[i].itemName,data.list[i].code);//如("不能直接使用的资产","A03")
	        		var tt = new Array();
	        		for(var key in data.list[0].itemValue){
		        	if(i==0){
		        		xDataarr.push(key.substr(0,6));
		        	}
		        	tt.push(data.list[i].itemValue[key]);//数值太大，转换成亿元
		        }
	        		serarr.push({name : data.list[i].itemName,type:'line',
						smooth:true,
						symbol:'circle', 
                        symbolSize: 10,//拐点大小
                        itemStyle : {
                            normal : {
                                lineStyle:{
                                    width:3,//折线宽度
                                }
                            }
                        },data : tt});
	        		var s = data.list[i].chartName.replace("结构图","").replace("构成图","").replace("变化图","")+"变化图";//标题
	        		console.log(s);
	        		option.title.text = "各类"+s;
	        	}
	        	
//	        	 console.log(data);
	        	option.legend.data = legendarr;
	        	option.grid.bottom=80;
	        	option.xAxis.data = xDataarr;
	        	option.yAxis.name = "单位："+getXZ().dwm;
				option.series = serarr;
	            myChart.setOption(option, true);
	            //第三层表
	            if(params.data.modelCode.indexOf("A")!=-1){
	            	$("#glzcbhtable table").remove();
		            $("#zcbhtable table").remove();
					$("#zcbhtable").html(drillDown.drawTablehead(getXZ().fenxiTime,"实际数","占比(%)",getXZ().currencyUnit));//表头
					drillDown.drawTablebody("#zcbhtable",getXZ().fenxiTime,bhtable2,getXZ().currencyUnit,"占比%");//表体
	            }else if(params.data.modelCode.indexOf("B")!=-1){
		            $("#fqgcbhtable table").remove();
		            $("#fqbhtable table").remove();
					$("#fqbhtable").html(drillDown.drawTablehead(getXZ().fenxiTime,"实际数","占比(%)",getXZ().currencyUnit));//表头
					drillDown.drawTablebody("#fqbhtable",getXZ().fenxiTime,bhtable2,getXZ().currencyUnit,"占比%");//表体
	            }else if(params.data.modelCode.indexOf("C")!=-1){
		            $("#lrbhtable table").remove();
		            $("#lrysbhtable table").remove();
					$("#lrysbhtable").html(drillDown.drawTablehead(getXZ().fenxiTime,"实际数","变化值%",getXZ().currencyUnit));//表头
					drillDown.drawTablebody("#lrysbhtable",getXZ().fenxiTime,bhtable2,getXZ().currencyUnit,"变化值%");//表体
	            }else if(params.data.modelCode.indexOf("D")!=-1){
		            $("#cbbhtable table").remove();
		            $("#cbzsrbhtable table").remove();
					$("#cbbhtable").html(drillDown.drawZbTableh(getXZ().fenxiTime));//表头
					drillDown.drawZbTableb("#cbbhtable",getXZ().fenxiTime,bhtable2,getXZ().currencyUnit,"变化值%");//表体
	            }else if(params.data.modelCode.indexOf("E")!=-1){
		            $("#hznltable table").remove();
					$("#hznltable").html(drillDown.drawTablehead(getXZ().fenxiTime,"实际值","增长率%",getXZ().currencyUnit));//表头
					drillDown.drawTablebody("#hznltable",getXZ().fenxiTime,bhtable2,getXZ().currencyUnit,"增长率%");//表体
	            }
	            myChart.on('click',function(obj){
	            	var drillParam = new Array();
	            	drillParam.url = getXZ().url;
					drillParam.data = {modelCode : mc.get(obj.seriesName)};
					drillParam.data.corpCode = getXZ().corpCode;
					drillParam.data.currencyUnit = getXZ().currencyUnit;
					drillParam.data.fenxiTime = getXZ().fenxiTime;
					var option12 = drillDown.getLineOption();
					console.log(drillParam);
					console.log(obj);
					 $.ajax({
					        type : 'POST',
					        url : drillParam.url,
					        data : drillParam.data,//这里应该放object中的数据
					        dataType : 'JSON',
					        success : function (data){
					        	console.log(data);
					        	if(data.list.length != 0){
					        		//销毁之前的图
					        		myChart.clear(); 
//									getRemove(mker);
									var option12 ;
									if(drillParam.data.modelCode=='E2042'){//这个要的是变化图
										option12  = drillDown.getLineOption();
										drillDown.initLineChart2(option12, drillParam, dom,obj);
									}else{
										option12 = drillDown.getPieOption();
										drillDown.initPieChart2(option12, drillParam, dom,obj);
									}
					        		
					        	}else{
					        		layer.msg('不能下钻了！');
					        	}
					        }
					 });
					
				 });
	        }
	    });
  },
  
  initLineChart2:function (option,params,dom,object){
	  var myChart = echarts.init(dom);
      var legendarr = new Array();
      var xDataarr = new Array();
  	  var serarr = new Array();
  	  var bhtable3 = new Array();
  	  var mc = new Map();
	    $.ajax({
	        type : 'POST',
	        url : params.url,
	        data : params.data,
	        dataType : 'JSON',
	        success : function (data){
	        	console.log(data);
	        	
	        	for(var i = 0; i < data.list.length; i++){
	        		bhtable3.push(data.list[i]);
	        		option.title.text = data.list[i].chartName;
	        		legendarr.push(data.list[i].itemName);
	        		mc.set(data.list[i].itemName,data.list[i].code);//如("不能直接使用的资产","A03")
	        		var tt = new Array();
	        		for(var key in data.list[0].itemValue){
		        	if(i==0){
		        		xDataarr.push(key.substr(0,6));
		        	}
		        	tt.push(data.list[i].itemValue[key]);//数值太大，转换成亿元
		        }
	        		serarr.push({name : data.list[i].itemName,type:'line',
						smooth:true,
						symbol:'circle', 
                        symbolSize: 10,//拐点大小
                        itemStyle : {
                            normal : {
                                lineStyle:{
                                    width:3,//折线宽度
                                }
                            }
                        },data : tt});
	        		var s = data.list[i].chartName.replace("结构图","").replace("构成图","").replace("变化图","")+"变化图";//标题
	        		console.log(s);
	        		option.title.text = "各类"+s;
	        	}
	        	
//	        	 console.log(data);
	        	option.legend.data = legendarr;
	        	option.grid.bottom=80;
	        	option.xAxis.data = xDataarr;
	        	option.yAxis.name = "单位："+getXZ().dwm;
				option.series = serarr;
	            myChart.setOption(option, true);
	            //第三层表
	            if(params.data.modelCode.indexOf("E")!=-1){
		            $("#hznltable table").remove();
					$("#hznltable").html(drillDown.drawTablehead(getXZ().fenxiTime,"实际值","增长率%",getXZ().currencyUnit));//表头
					drillDown.drawTablebody("#hznltable",getXZ().fenxiTime,bhtable3,getXZ().currencyUnit,"增长率%");//表体
	            }
	            myChart.on('click',function(obj){
	            	var drillParam = new Array();
	            	drillParam.url = getXZ().url;
					drillParam.data = {modelCode : mc.get(obj.seriesName)};
					drillParam.data.corpCode = getXZ().corpCode;
					drillParam.data.currencyUnit = getXZ().currencyUnit;
					drillParam.data.fenxiTime = getXZ().fenxiTime;
					var option12 = drillDown.getLineOption();
					console.log(drillParam);
					console.log(obj);
					 $.ajax({
					        type : 'POST',
					        url : drillParam.url,
					        data : drillParam.data,//这里应该放object中的数据
					        dataType : 'JSON',
					        success : function (data){
					        	console.log(data);
					        	if(data.list.length != 0){
					        		//销毁之前的图
					        		myChart.clear(); 
//									getRemove(mker);
									var option12 ;
									if(drillParam.data.modelCode=='E2042000000'){//这个要的是变化图
										option12  = drillDown.getLineOption();
										drillDown.initLineChart(option12, drillParam, dom,obj);
									}else{
										option12 = drillDown.getPieOption();
										drillDown.initPieChart2(option12, drillParam, dom,obj);
									}
					        		
					        	}else{
					        		layer.msg('不能下钻了！');
					        	}
					        }
					 });
					
				 });
	        }
	    });
  },
  
  
  initPieChart2 : function (option,params,dom,object) {
	  var legendDatas = new Array();
  	  var seriesDatas = new Array();
  	  var bhtable3 = new Array();
      // 初始化一个新的实例
      var myCharts1 = echarts.init(dom);
	    //object为当前的这个echart对象，大家可以自己打印出来看看
	   
	    $.ajax({
	        type : 'POST',
	        url : params.url,
	        data : params.data,//这里应该放object中的数据
	        dataType : 'JSON',
	        success : function (data){
//	        	if(data.list.length != 0){
//	        	drillDown.clearEcharts();
	        	option.title.text = data.list[0].chartName;		
				option.series[0].name = data.list[0].chartName;
//				option.series[0].radius = '10%';
				
				for(var i = 0; i < data.list.length; i++){
					bhtable3.push(data.list[i]);
					legendDatas[i] = data.list[i].itemName;
					seriesDatas[i] = {	name : data.list[i].itemName,
										value : data.list[i].itemValue[getXZ().fenxiTime],
										modelCode : data.list[i].code};
				}
				
				option.legend.data = legendDatas;
				option.series[0].data = seriesDatas;
				option.series[0].type = 'pie';
				myCharts1.setOption(option, true);
				if(params.data.modelCode.indexOf("E")!=-1){
		            $("#hznltable table").remove();
					$("#hznltable").html(drillDown.drawTablehead(getXZ().fenxiTime,"实际值","增长率%",getXZ().currencyUnit));//表头
					drillDown.drawTablebody("#hznltable",getXZ().fenxiTime,bhtable3,getXZ().currencyUnit,"增长率%");//表体
	            }
				myCharts1.on('click',function(obj){
//					layer.msg('已是最原始数据，不能下钻了！666');
					params.data = {modelCode : obj.data.modelCode,corpCode:getXZ().corpCode,currencyUnit:getXZ().currencyUnit,fenxiTime : getXZ().fenxiTime};
					console.log(params);
					//=======判断是否是最底层数据======begin============================
					 $.ajax({
					        type : 'POST',
					        url : params.url,
					        data : params.data,//这里应该放object中的数据
					        dataType : 'JSON',
					        success : function (data){
					        	if(data.list.length != 0){
					  //------------有数据则继续执行--begin-------------------
					var option4 ;
					if(obj.data.modelCode=="E10323"){
						option4  = drillDown.getLineOption();
						drillDown.initLineChart2(option4, params, dom,obj);
					}else{
						option4  = drillDown.getPieOption();
						drillDown.initPieChart2(option4, params, dom,obj);
					}
					//---------------------------end--------------------	
					        	}else{
					        		layer.msg('已是最原始数据，不能下钻了！');
					        	}
					        }
					 });
				 });
//				}
	        }
	    });
  },

 /* initLineChart2:function (option,params,dom,object){
	  
  },*/
  
  clearEcharts:function (mcs){
	  var dom10 ;
	  var dom20 ;
	  var dom30 ;
	  var ds ;
	  if(mcs.indexOf("A")!=-1){
		  ds = getDom("资产结构分析模块");
		  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("B")!=-1){
    	  ds = getDom("负债及权益结构模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("C")!=-1){
    	  ds = getDom("实现利润分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("D")!=-1){
    	  ds = getDom("成本费用分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("E")!=-1){
    	  ds = getDom("现金流量分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("F")!=-1){
    	  ds = getDom("偿债能力分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("G")!=-1){
    	  ds = getDom("盈利能力分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("H")!=-1){
    	  ds = getDom("营运能力分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("I")!=-1){
    	  ds = getDom("发展能力分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("J")!=-1){
    	  ds = getDom("经营协调性分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }else if(mcs.indexOf("K")!=-1){
    	  ds = getDom("经营风险分析模块");
    	  dom10 = ds.dom1;
		  dom20 = ds.dom2;
		  dom30 = ds.dom3;
      }
	  
		
		var myChart10 = echarts.init(dom10);//资产结构
		var myChart20 = echarts.init(dom20);//资产结构
		var myChart30 = echarts.init(dom30);//资产结构
		
		myChart10.clear(); 
		myChart20.clear(); 
		myChart30.clear();
		
  },
  
getLegendDatas:function (learr){
	var result = [];
	if(learr.length>4){
		for (var e = 0; e < learr.length; e+=4) {
			result.push(learr.slice(e,e+4));
		}
	}else{
		result.push(learr);
	}
		return result;
  },
  
  //制作表的通用表头（201612,"实际数","占比(%),4"）
  drawTablehead:function (tdate,tsjs,tzb,num){
	  if(num == 1){
			tsjs = tsjs + "(元)"; 
		}else if(num == 3){
			tsjs = tsjs + "(万元)"; 
		}else if(num == 4){
			tsjs = tsjs + "(亿元)"; 
		}
		var date1 = tdate.substring(0,4);
		var date2 = parseInt(date1)-1;
		var date3 = parseInt(date2)-1;
		
		var ts = '<table class="layui-table2"  border="1" lay-size="sm">';//lay-size="sm" lay-skin="line"
			ts += '<thead>';
			ts += '<tr>';
			ts += '<th></th>';
			ts += '<th colspan="2">'+date1+'年</th>';
			ts += '<th colspan="2">'+date2+'年</th>';
			ts += '<th colspan="2">'+date3+'年</th>';
			ts += '</tr>';
			ts += '<tr>';
			ts += '<th></th>';
			ts += '<th>'+tsjs+'</th>';
			ts += '<th>'+tzb+'</th>';
			ts += '<th>'+tsjs+'</th>';
			ts += '<th>'+tzb+'</th>';
			ts += '<th>'+tsjs+'</th>';
			ts += '<th>'+tzb+'</th>';
			ts += '</tr>';
			ts += '</thead>';
			ts += '<tbody>';
			//-------------------------
		
			//-----------------------
			ts += '</tbody>';
		return ts;
  },
  
  //制作表的通用表体（#glzcbhtable,"201612001",data",4,"占比%"）
  drawTablebody:function (divid,tdate,data,num,tzb){
		var did = divid + " table tbody";//div的id
		//------------获取日期 begin------------------------
		var datetail = tdate.substring(4,9);//12001
		var date1 = tdate.substring(0,4);//2016
		var date2 = parseInt(date1)-1;//2015
		var date3 = parseInt(date2)-1;//2014
		var date4 = parseInt(date3)-1;//2014
		//-----------------end-------------------
//		var v1;
		var tss= '';
		var tssl= '';
		var dates = [tdate,date2+datetail,date3+datetail];//时间数组
		//------------获取百分比  (%)begin----------------aa.toFixed(2)保留两位小数
		if(tzb == "占比%"){//		A值/(A值 + B值)
			var vallarr = new Array();//总体值数组
			for (var h = 0; h < dates.length; h++) {
				var vall = 0;
				for (var j = 0; j < data.length; j++) {
					vall = vall + data[j].itemValue[dates[h]];
//					v1 = data.itemValue[dates[h]];
				}
				vallarr.push(vall.toFixed(2));
			}
			for (var i = 0; i < data.length; i++) {
				var vall = 0;
				tssl += '<tr>';
				tssl += '<th>'+data[i].itemName+'</th>';
				for (var k = 0; k < dates.length; k++) {
					var v1 = data[i].itemValue[dates[k]];//当期数值
//					console.log(v1);
					if(v1 == null){
						tssl += '<th>NaN</th>';
						tssl += '<th>NaN</th>';//占比计算
					}else{
						tssl += '<th>'+v1.toFixed(2)+'</th>';
						tssl += '<th>'+(v1*100/vallarr[k]).toFixed(2)+'</th>';//占比计算
					}
					
				}
				vallarr.push(vall.toFixed(2));
				tssl += '</tr>';
			}
			tss += '<tr>';
			tss += '<th>总体值</th>';
			tss += '<th>'+vallarr[0]+'</th>';
			tss += '<th>100</th>';
			tss += '<th>'+vallarr[1]+'</th>';
			tss += '<th>100</th>';
			tss += '<th>'+vallarr[2]+'</th>';
			tss += '<th>100</th>';
			tss += tssl;
			
		}else if(tzb == "变化值%"||tzb == "增长率%"){	//(2016值 -2015值)/2015值
			for (var k = 0; k < data.length; k++) {
				tss += '<tr>';
				tss += '<th>'+data[k].itemName+'</th>';
				for (var i = 0; i < dates.length; i++) {
					var v1 = data[k].itemValue[dates[i]];//当期数值
					var v2 = (data[k].itemValue[dates[i]]-data[k].itemValue[drillDown.getDates(dates[i])])/data[k].itemValue[drillDown.getDates(dates[i])];//当期数值
					if (v1 == null) {
						tss += '<th>NaN</th>';
						tss += '<th>NaN</th>';
					} else {
						tss += '<th>'+v1.toFixed(2)+'</th>';
						tss += '<th>'+v2.toFixed(2)+'</th>';
					}
					
				}
				tss += '</tr>';
			}
		}else if(tzb == "qit%"){
			
		}
		//------------end------------------------
	
			
		$(did).html(tss);
  },
  //成本占收入比例表头
  drawZbTableh:function (tdate){
		var date1 = tdate.substring(0,4);
		var date2 = parseInt(date1)-1;
		var date3 = parseInt(date2)-1;
		
		var ts = '<table class="layui-table2"  border="1" lay-size="sm">';// lay-skin="line"
			ts += '<thead>';
			ts += '<tr>';
			ts += '<th></th>';
			ts += '<th>'+date1+'年</th>';
			ts += '<th>'+date2+'年</th>';
			ts += '<th>'+date3+'年</th>';
			ts += '</tr>';
			ts += '</thead>';
			ts += '<tbody>';
			//-------------------------
		
			//-----------------------
			ts += '</tbody>';
		return ts;
  },
  //成本占收入比例表体
  drawZbTableb:function (divid,tdate,data,num,tzb){
		var did = divid + " table tbody";//div的id
		//------------获取日期 begin------------------------
		var datetail = tdate.substring(4,9);//12001
		var date1 = tdate.substring(0,4);//2016
		var date2 = parseInt(date1)-1;//2015
		var date3 = parseInt(date2)-1;//2014
		var date4 = parseInt(date3)-1;//2013
		//-----------------end-------------------
		var yuan;
		 if(num == 1){
				yuan = "(元)"; 
			}else if(num == 3){
				yuan = "(万元)"; 
			}else if(num == 4){
				yuan = "(亿元)"; 
			}
		var tss= '';
		var dates = [tdate,date2+datetail,date3+datetail];//时间数组
		tss += '<tr>';
		tss += '<th>成本'+yuan+'</th>';
		tss += '<th>'+data[0].itemValue[dates[0]]+'</th>';
		tss += '<th>'+data[0].itemValue[dates[1]]+'</th>';
		tss += '<th>'+data[0].itemValue[dates[2]]+'</th>';
		tss += '</tr>';
		tss += '<tr>';
		tss += '<th>收入'+yuan+'</th>';
		tss += '<th>'+data[1].itemValue[dates[0]]+'</th>';
		tss += '<th>'+data[1].itemValue[dates[1]]+'</th>';
		tss += '<th>'+data[1].itemValue[dates[2]]+'</th>';
		tss += '</tr>';
		tss += '<tr>';
		tss += '<th>成本占收入比例（%）</th>';
		var v1 = (data[0].itemValue[dates[0]]*100/data[1].itemValue[dates[0]]).toFixed(2);
		var v2 = (data[0].itemValue[dates[1]]*100/data[1].itemValue[dates[1]]).toFixed(2);
		var v3 = (data[0].itemValue[dates[2]]*100/data[1].itemValue[dates[2]]).toFixed(2);
		var v4 = (data[0].itemValue[date4+datetail]*100/data[1].itemValue[date4+datetail]).toFixed(2)
		tss += '<th>'+v1+'</th>';
		tss += '<th>'+v2+'</th>';
		tss += '<th>'+v3+'</th>';
		tss += '</tr>';
		tss += '<tr>';
		tss += '<th>占比变化（百分点）</th>';
		tss += '<th>'+(v1-v2).toFixed(2)+'</th>';
		tss += '<th>'+(v2-v3).toFixed(2)+'</th>';
		tss += '<th>'+(v3-v4).toFixed(2)+'</th>';
		tss += '</tr>';
		
		
		$(did).html(tss);
  },
  
  //五、	偿债能力分析模块的部分公共表体
  drawCZTableb:function (divid,tdate,data,num,tzb){
	  var did = divid + " table tbody";//div的id
		//------------获取日期 begin------------------------
		var datetail = tdate.substring(4,9);//12001
		var date1 = tdate.substring(0,4);//2016
		var date2 = parseInt(date1)-1;//2015
		var date3 = parseInt(date2)-1;//2014
		var date4 = parseInt(date3)-1;//2013
		//-----------------end-------------------
		var yuan;
		 if(num == 1){
				yuan = "(元)"; 
			}else if(num == 3){
				yuan = "(万元)"; 
			}else if(num == 4){
				yuan = "(亿元)"; 
			}
		var v1 = new Array();//第三行比值数组
		var v2 = new Array();//第四行比值变化值数组
		var tss= '';
		var dates = [tdate,date2+datetail,date3+datetail];//时间数组
		for (var i = 0; i < data.length; i++) {
			tss += '<tr>';
			tss += '<th>'+data[i].itemName + yuan+'</th>';
			for (var h = 0; h < dates.length; h++) {
				tss += '<th>'+data[i].itemValue[dates[h]]+'</th>';
			}
			tss += '</tr>';
		}
		for (var j = 0; j < dates.length; j++) {
			v1.push((data[0].itemValue[dates[j]]/data[1].itemValue[dates[j]]).toFixed(2));
		}
		var last = (data[0].itemValue[date4+datetail]/data[1].itemValue[date4+datetail]).toFixed(2);//算变化值时最后一个需要减的比值
		v2.push((v1[0]-v1[1]).toFixed(2));//变化值数组
		v2.push((v1[1]-v1[2]).toFixed(2));
		v2.push((v1[2]-last).toFixed(2));
		//将最后两行循环显示一下
		for (var t = 0; t < 2; t++) {
			tss += '<tr>';
			if(t==0){//tr的第一个字段名
				tss += '<th>'+tzb+'</th>';
			}else{
				tss += '<th>'+tzb+'变化值</th>';
			}
			for (var k = 0; k < v1.length; k++) {//tr的最后两行数据显示
				if(t==0){
					tss += '<th>'+v1[k]+'</th>';
				}else{
					tss += '<th>'+v2[k]+'</th>';
				}
			}
			tss += '</tr>';
		}
		
		
		$(did).html(tss);
  },
  //进来201612001 出去 201512001
  getDates:function (tdate){
	  	var datetail = tdate.substring(4,9);//12001
		var date1 = tdate.substring(0,4);//2016
		var date2;
		if(date1>2008){
			date2 = parseInt(date1)-1;//2015
		}
		return date2+datetail;
  },
  
  
	  
};


