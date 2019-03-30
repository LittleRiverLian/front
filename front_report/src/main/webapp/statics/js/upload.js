$("#file-input").fileinput({
    uploadUrl: "/front/file",
    uploadAsync: true,
    maxFileCount: 100,
    allowedFileExtensions: ['txt'],
    previewFileType: ['text'],
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
        alert("上传成功");
    } else {
        alert("上传失败，文件不合法");
    }
});

$(document).on('ready', function () {
    $("#file-input").fileinput({
        maxFilePreviewSize: 10240
    });
});
