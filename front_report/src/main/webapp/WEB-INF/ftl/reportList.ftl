<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="${request.contextPath}/static/css/bootstrap.min.css">
    <link rel="stylesheet" href="${request.contextPath}/static/css/fileinput.min.css">
    <link rel="stylesheet" href="${request.contextPath}/static/css/layer.css">
    <link rel="stylesheet" href="${request.contextPath}/static/css/loading.css">
    <script type="text/javascript" src="${request.contextPath}/static/js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/fileinput.min.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/bootstrap-table.min.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/layer.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/utils.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/table.js"></script>
    <script type="text/javascript" src="${request.contextPath}/static/js/jquery.slimscroll.min.js"></script>
</head>
<body>

<br>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch Modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="file-loading">
                <#--<input id="input-b2" name="input-b2" type="file" class="file" data-show-preview="false">-->

                    <input id="file-input" class="form-control file" multiple data-max-file-count="100" name="file"
                           type="file"/><br/>

                </div>
                <div id="kartik-file-errors"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" title="Your custom upload logic">Save</button>
            </div>
        </div>
    </div>
</div>
<div class="table-responsive">
    <table class="table table-bordered" ,id="table">
        <thead>
        <tr>
            <th data-field="id">序号</th>
            <th data-field="name">名称</th>
            <th data-field="price">价格</th>

            <th data-field="id1">序号</th>
            <th data-field="name1">名称</th>
            <th data-field="price1">价格</th>

            <th data-field="id2">序号</th>
            <th data-field="name2">名称</th>
            <th data-field="price2">价格</th>

            <th data-field="id3">序号</th>
            <th data-field="name3">名称</th>
            <th data-field="price3">价格</th>
        </tr>
        </thead>
    </table>


    <div id="inner-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus, felis interdum condimentum consectetur,
            nisl libero elementum eros, vehicula congue lacus eros non diam. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vivamus mauris lorem, lacinia id tempus non, imperdiet et leo.
            Cras sit amet erat sit amet lacus egestas placerat. Aenean ultricies ultrices mauris ac congue. In vel
            tortor vel velit tristique tempus ac id nisi. Proin quis lorem velit. Nunc dui dui, blandit a ullamcorper
            vitae, congue fringilla lectus. Aliquam ultricies malesuada feugiat. Vestibulum placerat turpis et eros
            lobortis vel semper sapien pulvinar.

            Pellentesque rhoncus aliquet porta. Sed vel magna eu turpis pharetra consequat ut vitae lectus. In molestie
            sollicitudin mi sit amet convallis. Aliquam erat volutpat. Nullam feugiat placerat ipsum eget malesuada.
            Nulla facilisis nunc non dolor vehicula pretium. Sed dui magna, sodales id pharetra non, ullamcorper eu
            sapien. Mauris ac consectetur leo. Mauris consequat, lectus ut bibendum pulvinar, leo magna feugiat enim, eu
            commodo lacus sem vel ante. Sed tempus metus eget leo mollis vulputate. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
    </div>
</div>

<#--${message}: <input type="text" name="${message}" value="AI模型" style="background: ${color};text-align: center" readonly/>-->

<#--<h1>Example Heading <span class="label label-default">Label</span></h1>-->

<div style="display: flex;width: 60px">
    <div class="spinner" id="testDiv">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
    </div>
    <span id="testSpan" style="margin: auto" class="label label-default displaynone">Label</span>
</div>


<script src="${request.contextPath}/static/js/upload.js"></script>

</body>
</html>