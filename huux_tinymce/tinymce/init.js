// 这个是配置文件, 请参考备注，问题反馈请到www.huux.cc
tinymce.init({
    selector: '#message',
    content_css: 'plugin/huux_tinymce/tinymce/style.css', // 编辑内容区附加css文件
    language_url: 'plugin/huux_tinymce/tinymce/langs/zh_CN.js', // 本地化中文语言包
    language: 'zh_CN', // 默认语言简体中文
    menubar: false, // 隐藏菜单栏，显示请设置为true
    statusbar: true, // 显示状态栏，隐藏请设置为false
    resize: true, // 仅允许改变高度
    toolbar_mode: 'scrolling', // 工具栏抽屉模式 取值：floating / sliding / scrolling / wrap
    toolbar_sticky: true, // 停靠工具栏到顶部
    branding: false, // 隐藏标示，防止误点
    min_height: 500, // 最小高度
    draggable_modal: true, // 模态框允许拖动（主要针对后续插件应用）
    image_uploadtab: false, // 不展示默认的上传标签，用xiunoimgup就可以，支持多文件/单文件上传。--powerpaste启用后会导致粘贴时卡顿，这和计算有关，好处是可以同时粘贴文字和图片。
    plugins: ['jzk_shortcodes','jzk_appinfo', 'autolink', 'autoresize', 'charmap', 'code', '-directionality', 'emoticons','fullscreen', 'help', 'hr', 'image', '-insertdatetime', 'link', 'lists', 'media', 'paste', '-powerpaste', '-preview', 'quickbars', 'table', 'textpattern', '-toc', '-visualblocks', '-visualchars', 'xiunoimgup', 'wordcount'], // 加载的插件，-为禁用
    //toolbar: ['fontformats code | undo redo | styleselect | formatting fontcolor removeformat | alignment blockquote indentation list | imgup link media codesample table | anchor hr toc preview | other | fullscreen', t_external_toolbar.join(' ')], // 界面按钮
    toolbar: ['formatselect bold italic strikethrough link bullist numlist blockquote aligncenter alignright | emoticons spoiler hide_login hide_reply appinfo | imgup removeformat other | fullscreen', t_external_toolbar.join(' ')],
    toolbar_groups: { //按钮分组，节省空间，方便使用
        imgup: {
            icon: 'gallery',
            tooltip: '上传图片',
            items: 'image media'
        },
        indentation: {
            icon: 'indent',
            tooltip: '缩进',
            items: 'indent outdent'
        },
        fontcolor: {
            icon: 'color-levels',
            tooltip: '文字颜色',
            items: 'forecolor backcolor'
        },
        other: {
            icon: 'more-drawer',
            tooltip: '更多按钮',
            items: 'superscript subscript table hr charmap | undo redo | code help'
        }
    },
    fontsize_formats: '0.8em 1em 1.2em 1.4em 1.6em 1.8em 2em 2.4em 2.8em',
    font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;知乎配置=BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;小米配置=Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif',
    paste_data_images: true, // 粘贴图片必须开启
    quickbars_selection_toolbar: 'bold italic blockquote link | H2 H3 H4', // pc端可禁用快速工具栏填写false
    quickbars_insert_toolbar: false, // pc端禁用回车工具栏
    media_live_embeds: true, // 让媒体编辑时可观看（但实际测试中无用）
    contextmenu: false, // 禁用编辑器的右键菜单@c
    external_plugins: t_external_plugins, // 附加插件
    images_upload_handler: function(blobInfo, success, failure) {
        // 此方法来自xiuno.js，图片粘贴上传使用
        xn.upload_file(blobInfo.blob(), xn.url('attach-create'), {
            is_image: 1
        }, function(code, json) {
            if (code == 0) {
                success(json.url);
            } else {
                $.alert(json);
            }
        });
    },
    // 下面为2.0版本后加配置项
    mobile: {
        toolbar_sticky: true // 固定工具栏到顶部
    },
    convert_fonts_to_spans: true, // 不强制font转换为span
    extended_valid_elements: 'span[style|class],b,i', // 保留span/b/i标签
    paste_remove_styles_if_webkit: true, // 禁用webkit粘贴过滤器，保留style样式，如果不想保留可选择后点击【清除样式】
    // forced_root_block : '', // 去掉换行自动加P（可以确保非块元素包含在块元素中），改为使用br换行
    // skin: 'oxide-dark',  // 设置深色皮肤，默认为oxide
    // cache_suffix: '?v=1.0.3',// 缓存css/js url自动添加后缀
});