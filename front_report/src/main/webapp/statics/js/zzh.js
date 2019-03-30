
function drawChart(originData, container) {
    var total = originData.strBarTitle.length + originData.strLineTitle.length;
    var thebottom = 50;
    //alert(total);

    if (total >= 10) {
        thebottom = 110;
    } else if (total >= 7) {
        thebottom = 90;
    } else if (total >= 5) {
        thebottom = 70;
    }
    //alert(thebottom);
    var option = {
        title: {
            text: '某地区蒸发量和降水量',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['蒸发量', '降水量'],
            bottom: '-5',
        },
        grid: {
            left: 100,
            right: 50,
            bottom: thebottom
            //	top:80
            //containLabel: true
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: []
        }],
        yAxis: [],
        series: []
    };
    var fxChart = originData;
    option.title.text = fxChart.strTitle;
    //alert(fxChart.strTitle);
    //alert(container);
    option.xAxis[0].data = fxChart.strDate;
    option.legend.data = [];
    option.series = [];
    option.yAxis = [];
    for (var m = 0; m < fxChart.strBarTitle.length; m++) {
        option.legend.data.push(fxChart.strBarTitle[m]);
        option.series.push({
            name: fxChart.strBarTitle[m],
            type: 'bar',
            data: fxChart.barValue[m]
        })
    }
    option.yAxis.push({
        type: 'value',
        axisLabel: {
            formatter: '{value} ' + fxChart.units[0]
        }
    });
    option.yAxis.push({
        type: 'value',
        axisLabel: {
            formatter: '{value} ' + fxChart.units[1]
        }
    });
    for (var m = 0; m < fxChart.strLineTitle.length; m++) {
        option.legend.data.push(fxChart.strLineTitle[m]);
        option.series.push({
            name: fxChart.strLineTitle[m],
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            //symbol:'circle',
            symbolSize: 8,//拐点大小
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,//折线宽度
                    }
                }
            },
            data: fxChart.lineValue[m]
        })
    }
    var myChart = echarts.init(document.getElementById(container));
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}


function drawLineChart(fxChart, container) {
    var option = {
        title: {
            text: '某地区蒸发量和降水量',
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            //left: 80,
            //right:80,
            //bottom: thebottom
            //	top:80
            //containLabel: true
        },
        legend: {
            data: ['蒸发量', '降水量'],
            bottom: '-5',
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: 'line'
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: []
        }],
        yAxis: [{
            type: 'value',
        }],
        series: []
    };
    option.title.text = fxChart.strTitle;
    option.xAxis[0].data = fxChart.strDate;
    option.legend.data = [];
    option.series = [];
    option.yAxis = [];

    option.yAxis.push({
        type: 'value',
        axisLabel: {
            formatter: '{value} ' + fxChart.units[0]
        }
    });

    for (var m = 0; m < fxChart.strLineTitle.length; m++) {
        option.legend.data.push(fxChart.strLineTitle[m]);
        option.series.push({
            name: fxChart.strLineTitle[m],
            type: 'line',
            yAxisIndex: 0,
            data: fxChart.lineValue[m]
        })
    }
    var myChart = echarts.init(document.getElementById("container"));
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawBarChart(fxChart, container) {
    var option = {
        title: {text: '某地区蒸发量和降水量',},
        tooltip: {trigger: 'axis'},
        legend: {
            data: [],
            bottom: '-5',
        },
        grid: {
            //left: 80,
            //right:80,
            // bottom: thebottom
            //	top:80
            //containLabel: true
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: 'line'
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: []
        }],
        yAxis: [],
        series: []
    };
    option.title.text = fxChart.strTitle;
    option.xAxis[0].data = fxChart.strDate;
    option.legend.data = [];
    option.series = [];
    option.yAxis = [];
    option.yAxis.push({
        type: 'value',
        axisLabel: {
            formatter: '{value} ' + fxChart.units[0]
        }
    });
    for (var m = 0; m < fxChart.strBarTitle.length; m++) {
        option.legend.data.push(fxChart.strBarTitle[m]);
        option.series.push({
            name: fxChart.strBarTitle[m],
            type: 'bar',
            yAxisIndex: 0,
            data: fxChart.barValue[m]
        })
    }
    var myChart = echarts.init(document.getElementById("container"));
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawPieChart(fxChart, container) {
    option = {
        title: {
            text: '某站点用户访问来源',
            //  subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        series: []
    };
    option.title.text = fxChart.strTitle;
    option.legend.data = [];

    var nums = [];
    for (var m = 0; m < fxChart.strPieTitle.length; m++) {
        option.legend.data.push(fxChart.strPieTitle[m]);
        var obj = new Object();
        obj.name = fxChart.strPieTitle[m];
        obj.value = fxChart.pieValue[m];
        nums.push(obj);
    }
    option.series.push({
        name: fxChart.strTitle,
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: nums,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    });


    var myChart = echarts.init(document.getElementById("container"));
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}


function drawPie(originData, values, container) {
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            //orient: 'vertical',
            bottom: 10,
            left: 'center',
            data: originData
        },
        series: [
            {
                name: '项目名',
                type: 'pie',
                radius: '40%',
                center: ['50%', '40%'],
                data: [],
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
    //alert(fxChart.strTitle);
    //alert(container);
    option.legend.data = [];
    option.series.data = [];
    for (var m = 0; m < originData.length; m++) {
        option.legend.data.push(originData[m]);
        option.series[0].data.push({
            value: values[m],
            name: originData[m]

        })
    }
    var myChart = echarts.init(document.getElementById(container));
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

function drawBiaopan(point, container, name) {
    var name = getName(point);
    gaugeFun(point, container, name)
}

function gaugeFun(reValue, container, name) {//reValue 是粉饰值，container是存放图片得div的id，name是对粉饰度的一个描述。
    option = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
        },

        series: [
            {
                name: name,
                type: 'gauge',
                title: {
                    textStyle: {
                        color: '#4169E1',
                        fontSize: 20,
                    },
                },
                detail: {formatter: '{value}'},
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.1, '#91C7AE'], [0.25, '#63869E'], [0.35, '#F6EFA6'], [0.45, '#E9C090'], [0.8, '#C23531'], [1, '#C23531']]
                    }
                },
                itemStyle: {
                    color: '#4169E1',
                },
                pointer: {
                    width: 8,
                    length: 100
                },
                data: [{value: reValue, name: '粉饰度'}],
                axisLabel: {
                    color: '#4169E1',
                    textStyle: {
                        fontSize: 15
                    }
                },
                axisTick: { //刻度样式
                    show: true,
                },

                splitNumber: 10,
            },
        ],
    };
    var myChart = echarts.init(document.getElementById(container));
    myChart.setOption(option);
}
function getName(reValue) {
    var name;
    if (reValue >= 0 && reValue < 10) {
        name = "0-10正常(绿色)";
    } else if (reValue >= 10 && reValue < 25) {
        name = "10-25不明显(蓝色)";
    } else if (reValue >= 25 && reValue < 35) {
        name = "25-35轻度(黄色)";
    } else if (reValue >= 35 && reValue < 45) {
        name = "35-45中度(橙色)";
    } else if (reValue >= 45) {
        name = "45以上严重(红色)";
    }
    return name;
}

function getResult2() {
    console.log(12121)

    var corpCode = 594713581116;
    var corpName = "铁牛集团有限公司";
    var fenxiTime = "201712";
    var tableType = "01";
    var currencyUnit = "3";
    var standard = "3";

    var params = {};
    params.corpCode = corpCode;
    params.corpName = corpName;
    params.fenxiTime = fenxiTime;
    params.tableType = tableType;
    params.currencyUnit = currencyUnit;
    params.standard = standard;
    params.modelNo = "104";
    getTabContent(params);

}

function getTabContent(params) {
    var html = '';
    reportPath = "";
    reportName = "";
    downloadUrl = "";
    $.ajax({
        //url:"http://www.wanandroid.com/tools/mockapi/9485/createReport",
        url: "http://localhost:8081/front/static/json/zzh.json",
        type: "GET",
        dataType: "json",
        // data: params,
        // async: false,
        success: function (data) {
            // layer.close(index);
            if (data.success == 'true') {
                reportPath = data.reportPath;
                reportName = data.reportName;
                downloadUrl = pathUrl + 'tmp/' + data.reportName;
                //第一层
                html += '<blockquote class="layui-elem-quote2" id="first">结论</blockquote>';
                html += '<blockquote class="layui-elem-quote2 layui-quote-nm2">';
                html += '<div class="layui-row layui-col-space15"><div class="layui-col-md6">';
                html += '<div class="layui-card-body" id="yibiaopan" style="width:100%;height:370px">123</div>';
                html += '</div>';
                html += '<div class="layui-col-md6">';
                html += '<div class="layui-card-body" id="jielun" style="height:370px">';
                html += '<div class="jielun"><p1>该公司财务报表粉饰程度</p1><br>';

                html += '<p1>评价结果：</p1><br>';
                if (data.result.totalScore >= 45) {
                    html += '<p21>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data.result.evaluateResult + '</p21>';
                } else if (data.result.totalScore >= 35) {
                    html += '<p22>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data.result.evaluateResult + '</p22>';
                } else if (data.result.totalScore >= 25) {
                    html += '<p23>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data.result.evaluateResult + '</p23>';
                } else if (data.result.totalScore >= 10) {
                    html += '<p24>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data.result.evaluateResult + '</p24>';
                } else {
                    html += '<p25>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data.result.evaluateResult + '</p25ss>';
                }

                html += '<br><p3>得分：</p3><p4>' + data.result.totalScore + '</p4>';
                html += '</div></div>';
                html += '</div>';
                html += '</div></blockquote>';
                //第二层
                var table1 = '<table style="width:60%;margin:auto"  class="layui-table2" lay-size="sm">'
                table1 += '<thead><th>项目名</th><th>粉饰分数</th></thead>';
                table1 += '<tbody>';
                var jieluns = '';
                var arr1 = [];
                var arr2 = [];
                for (var i = 0; i < data.result.itemList.length; i++) {
                    var itemname = data.result.itemList[i].itemName;
                    arr1[i] = itemname;
                    var point = data.result.itemList[i].score;
                    arr2[i] = point;
                    table1 += '<tr><td>' + itemname + '</td><td>' + point + '</td></tr>';
                    jieluns += '<p>' + data.result.itemList[i].conclusion + '</p>';
                }

                table1 += '</tbody></table>';

                if (data.result.totalScore > 0) {
                    html += '<blockquote class="layui-elem-quote2" id="second">概览</blockquote>';
                    html += '<blockquote class="layui-elem-quote2 layui-quote-nm2">';
                    html += '<div class="layui-row">';

                    html += '<div style="width:50%;float:left">';
                    html += '<div class="layui-card">';
                    html += '<div class="layui-card-header">粉饰科目构成图</div>';
                    html += '<div class="layui-card-body" >';
                    html += '<div id="bingtu" style="width:400px;height:350px;position:relative">123';
                    html += '</div></div></div></div>';
                    html += '<div style="width:50%;float:left">';
                    html += '<div class="layui-card">';
                    html += '<div class="layui-card-header">粉饰科目</div>';
                    html += '<div class="layui-card-body" style="height:350px;overflow-y:scroll">';
                    html += table1;
                    html += '</div></div></div></div></div>';
                    html += '<div class="layui-row layui-col-space20">';
                    html += '<div class="layui-col-md12>';
                    html += '<div class="layui-card">';
                    html += '<div class="layui-card-body">';
                    html += jieluns + '</div>';
                    html += '</div></div>';
                    html += '</div></div></blockquote>';

                    html += '<blockquote class="layui-elem-quote2" id="third">深度解读</blockquote>';
                    html += '<blockquote class="layui-elem-quote2 layui-quote-nm2">';
                    html += '<div class="layui-col-md12>';
                    for (var i = 0; i < data.result.itemList.length; i++) {
                        var itemname = data.result.itemList[i].itemName;
                        var itemCode = data.result.itemList[i].itemCode;
                        var des = data.result.itemList[i].detailConclusion;
                        html += '<div class="layui-card">';
                        html += '<div class="layui-card-header">' + (i + 1) + '.' + itemname + '</div>';
                        html += '<div class="layui-card-body">';
                        html += '<div class="mingxi"><p>' + des + '</p></div>';
                        html += '<div class="mtable">';
                        html += '<table style="width:700px;margin:auto"  class="layui-table2" lay-size="sm" >'
                        for (var h = 0; h < data.result.itemList[i].arr.length; h++) {
                            var strs = data.result.itemList[i].arr[h];
                            if (h == 0) {
                                html += '<thead>'
                                for (var k = 0; k < strs.length; k++) {
                                    html += '<th>' + strs[k] + '</th>';
                                }
                                html += '</thead>'
                            } else {
                                html += '<tbody>'
                                for (var k = 0; k < strs.length; k++) {
                                    html += '<td>' + strs[k] + '</td>';
                                }
                                html += '</tbody>'
                            }
                        }
                        html += '</table>';
                        html += '</div>';
                        html += '<div class="thechart" id="chart' + itemCode + '" style="width:700px;height:350px;margin:auto"></div>';

                        html += '</div></div>';
                    }
                    html += '</div></blockquote>';
                }
                $("#fenshi").html(html);

                for (var i = 0; i < data.result.itemList.length; i++) {
                    var itemCode = data.result.itemList[i].itemCode;
                    var fxChart = data.result.itemList[i].fxChart;
                    var ele = document.getElementById("chart" + itemCode);
                    //alert(ele.html());
                    //var ele2 = document.getElementById("123");
                    //alert(ele2.html());
                    if (ele) {
                        if (fxChart.chartType == '3') {
                            drawChart(fxChart, "chart" + itemCode);
                        } else if (fxChart.chartType == '0') {
                            drawPieChart(fxChart, "chart" + itemCode);
                        } else if (fxChart.chartType == '1') {
                            drawLineChart(fxChart, "chart" + itemCode);
                        } else if (fxChart.chartType == '2') {
                            drawBarChart(fxChart, "chart" + itemCode);
                        } else if (fxChart.chartType == '4') {
                        }

                    }
                }
                drawBiaopan(data.result.totalScore, 'yibiaopan', data.result.evaluateResult)
                drawPie(arr1, arr2, 'bingtu');
            } else {
                layer.msg(data.msg);
            }
        }
    })
}