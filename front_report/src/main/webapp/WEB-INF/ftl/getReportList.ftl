<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="${request.contextPath}/static/css/layer.css">
    <link rel="stylesheet" href="${request.contextPath}/static/css/all.css">
    <link rel="stylesheet" href="${request.contextPath}/static/css/hxlayui.css">

    <script type="text/javascript" src="${request.contextPath}/static/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/layui.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/echarts.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/drillDown.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/public.js"></script>

    <style type="text/css">
        .survey {
            background-image: url(image/news.jpg);
        }

        .site-dir {
            display: none;
        }

        .site-dir li {
            line-height: 26px;
            margin-left: 20px;
            margin-right: 20px;
            overflow: visible;
            list-style-type: disc;
        }

        .site-dir li a {
            display: block;
        }

        .site-dir li a:active {
            color: #01AAED;
        }

        .site-dir li a.layui-this {
            color: #01AAED;
        }

        body .layui-layer-dir {
            box-shadow: none;
            border: 1px solid #d2d2d2;
        }

        body .layui-layer-dir .layui-layer-content {
            padding: 10px;
        }

        .site-dir a em {
            padding-left: 5px;
            font-size: 12px;
            color: #c2c2c2;
            font-style: normal;
        }

        .mtable {
            padding-top: 10px;
            padding-bottom: 5px
        }

        .thechart {
            padding-top: 20px;
            padding-bottom: 5px
        }

        .jielun {
            margin: 50px 20px;
            line-height: 50px
        }

        p {
            text-indent: 2em;
        }

        p1 {
            font-size: 25px;
        }

        p21 {
            font-size: 30px;
            color: #C23531
        }

        p22 {
            font-size: 30px;
            color: #E9C090
        }

        p23 {
            font-size: 30px;
            color: #F6EFA6
        }

        p24 {
            font-size: 30px;
            color: #63869E
        }

        p25 {
            font-size: 30px;
            color: #91C7AE
        }

        p3 {
            font-size: 25px;
        }

        p4 {
            font-size: 25px;
        }
    </style>

</head>
<body>

<!--图表的模块化start-->

<div class="layui-tab layui-tab-brief" lay-filter="fengxian">
    <div style="float: left;width:20%">&nbsp;</div>
    <div style="float:left;width:80%;">
        <div style="width:900px;" id="fenshi">
        </div>
    </div>

    <div class="layui-layer layui-layer-page layui-layer-dir" id="mulu"
         style="z-index: 19891015; margin-left: 100px;margin-top: 80px;display:none">
        <div class="layui-layer-title" style="cursor: move;">目录</div>
        <div id="" class="layui-layer-content">
            <ul class="site-dir layui-layer-wrap" style="display: block;" id="muluList">
                <li><a href="#first"><cite>结论</cite></a></li>
                <li><a href="#second"><cite>概览</cite></a></li>
                <li><a href="#third"><cite>深度解读</cite></a></li>
            </ul>
        </div>
    </div>

</div>
<!--图表的模块化end-->
<div class="layui-input-inline">
    <button class="layui-btn"  onclick="getResult2()">生成报告</button>
</div>

<script src="${request.contextPath}/static/js/zzh.js"></script>
</body>
</html>