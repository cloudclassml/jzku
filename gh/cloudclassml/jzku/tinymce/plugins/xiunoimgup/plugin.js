tinymce.PluginManager.add("xiunoimgup", function(editor, url) {
    var pluginName = '多图片上传';
    var upimg = function() {
        var input = document.createElement('input');
        var postform = document.getElementById("form");
        input.setAttribute('type', 'file');
        input.setAttribute('multiple', 'multiple');
        input.setAttribute('accept', 'image/*');
        input.setAttribute('style', 'display:none');
        postform.appendChild(input); 
        input.addEventListener("change", function(e) {
            var files = this.files;
            $.each_sync(files, function(i, callback) {
                var file = files[i];
                xn.upload_file(file, xn.url("imageupload-imgur"), {
                    is_image: 1
                }, function(code, json) {
                    if (code == 0) {
<<<<<<< HEAD
                        var s = '<img src="' + json.url + '" width="' + json.width + '" height=\"' + json.height + '\" /><br>';
=======
                        var s = '<img src="' + json.url + '" width="' + json.width + '" height=\"' + json.height + '\" /><p>&nbsp;<\/p>';
>>>>>>> 3442b937b0ce25001d69e19e76d4cfe17e5e1b9e
                        editor.insertContent(s);
                    } else {
                        console.log('上传失败\n');
                        editor.insertContent(json);
                        alert('上传失败，错误信息详见编辑器。');
                    }
                    callback();
                });
            });
        }, false);
        input.click();
    }
    editor.ui.registry.addButton("xiunoimgup", {
        icon: "gallery",
        tooltip: pluginName,
        onAction: function() {
            upimg();
        }
    });
    editor.ui.registry.addMenuItem("xiunoimgup", {
        icon: "gallery",
        text: "多图片上传",
        onAction: function() {
            upimg();
        }
    });
    return {
        getMetadata: function() {
            return {
                name: "多图片上传",
                url: "http://www.huux.cc",
            }
        }
    }
});
