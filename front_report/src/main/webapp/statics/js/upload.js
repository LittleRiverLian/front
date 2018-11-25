$("#file-input").fileinput({
    uploadUrl: "/front/file",
    uploadAsync: true,
    maxFileCount: 100,
    allowedFileExtensions: ['jpg', 'png', 'gif'],
    previewFileType: ['image', 'html', 'text', 'video', 'audio', 'flash'],
    uploadExtraData: function () {
        return {
            categoryId: '123',
            tag: '人',
            description: '任务'
        };
    },
    maxFilePreviewSize: 51200
}).on('fileuploaded', function (event, data, previewId, index) {
    var json = data.response;
    if (json.status === "success") {
        alerts("上传成功");
    } else {
        alerts("上传失败，文件不合法");
    }
});

$(document).on('ready', function () {
    $("#file-input").fileinput({
        maxFilePreviewSize: 10240
    });
});
