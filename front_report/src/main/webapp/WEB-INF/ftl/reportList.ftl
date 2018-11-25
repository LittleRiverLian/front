<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="${request.contextPath}/static/css/bootstrap.min.css">
    <link rel="stylesheet" href="${request.contextPath}/static/css/fileinput.min.css">
    <script src="${request.contextPath}/static/js/jquery-3.3.1.js"></script>
    <script src="${request.contextPath}/static/js/fileinput.min.js"></script>
    <script src="${request.contextPath}/static/js/bootstrap.min.js"></script>

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
                           type="file" data-show-preview="false"/><br/>

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

<script src="${request.contextPath}/static/js/upload.js"></script>

</body>
</html>