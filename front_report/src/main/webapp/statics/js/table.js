$("#table").bootstrapTable({ // 对应table标签的id
    url: "<%=request.getContextPath()%>/api/getDataList.do", // 获取表格数据的url
    cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
    striped: true,  //表格显示条纹，默认为false
    pagination: true, // 在表格底部显示分页组件，默认false
    pageList: [10, 20], // 设置页面可以显示的数据条数
    pageSize: 10, // 页面数据条数
    pageNumber: 1, // 首页页码
    sidePagination: 'server', // 设置为服务器端分页
    queryParams: function (params) { // 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求

        return {
            pageSize: params.limit, // 每页要显示的数据条数
            offset: params.offset, // 每页显示数据的开始行号
            sort: params.sort, // 要排序的字段
            sortOrder: params.order, // 排序规则
            dataId: $("#dataId").val() // 额外添加的参数
        }
    },
    sortName: 'id', // 要排序的字段
    sortOrder: 'desc', // 排序规则
    columns: [
        {
            checkbox: true, // 显示一个勾选框
            align: 'center' // 居中显示
        }, {
            field: 'code', // 返回json数据中的name
            title: '编号', // 表格表头显示文字
            align: 'center', // 左右居中
            valign: 'middle' // 上下居中
        }, {
            field: 'name',
            title: '名称',
            align: 'center',
            valign: 'middle'
        }, {
            field: 'calcMode',
            title: '计算方式',
            align: 'center',
            valign: 'middle',
            formatter: function (value, row, index){ // 单元格格式化函数
                var text = '-';
                if (value == 1) {
                    text = "方式一";
                } else if (value == 2) {
                    text = "方式二";
                } else if (value == 3) {
                    text = "方式三";
                } else if (value == 4) {
                    text = "方式四";
                }
                return text;
            }
        }, {
            title: "操作",
            align: 'center',
            valign: 'middle',
            width: 160, // 定义列的宽度，单位为像素px
            formatter: function (value, row, index) {
                return '<button class="btn btn-primary btn-sm" onclick="del(\'' + row.stdId + '\')">删除</button>';
            }
        }
    ],
    onLoadSuccess: function(){  //加载成功时执行
        console.info("加载成功");
    },
    onLoadError: function(){  //加载失败时执行
        console.info("加载数据失败");
    }

})


jQuery(document).ready(function ($) {


    $("#inner-content").slimScroll({
        height: '300px'
    });

    $("#testSpan").mouseover(function () {
        console.log(1234)
        var explain_data = $("#testSpan").data("explain_data"); //'home'
        console.log(explain_data.status)

        layer.open({
            type: 1,
            content: $("#table").html() //这里content是一个普通的String
        });
    });
    $("#testSpan").addClass("label-default");
    $.ajax({
        url: "http://localhost:8081/front/hello/test",
        type: "POST",
        dataType : "json",
        contentType: "application/json", // 指定这个协议很重要
        success: function (data) {

            if (data.status === "success") {
                $("#testSpan").removeClass("label-default");
                $("#testSpan").addClass("label-primary");
                $("#testSpan").data("explain_data",data)

                $("#testDiv").remove();
                // $("#testSpan").removeClass("displaynone")
                $("#testSpan").show()
                // alerts("保存成功");
            } else {
                alerts(data.message);
            }
        }
    })


});