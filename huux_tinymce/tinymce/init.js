// 这个是配置文件, 请参考备注，问题反馈请到www.huux.cc
tinymce.init({
    selector: '#message',
    content_css: 'plugin/huux_tinymce/tinymce/style.css', // 编辑内容区附加css文件
    language_url: 'plugin/huux_tinymce/tinymce/langs/zh_CN.js', // 本地化中文语言包
    language: 'zh_CN', // 默认语言简体中文
    menubar: false, // 隐藏菜单栏，显示请设置为true
    statusbar: true, // 显示状态栏，隐藏请设置为false
    resize: true, // 仅允许改变高度
    toolbar_mode: 'floating', // 工具栏抽屉模式 取值：floating / sliding / scrolling / wrap
    toolbar_sticky: true, // 停靠工具栏到顶部
    branding: false, // 隐藏标示，防止误点
    min_height: 500, // 最小高度
    draggable_modal: true, // 模态框允许拖动（主要针对后续插件应用）
    image_uploadtab: false, // 不展示默认的上传标签，用xiunoimgup就可以，支持多文件/单文件上传。--powerpaste启用后会导致粘贴时卡顿，这和计算有关，好处是可以同时粘贴文字和图片。
    plugins: ['jzk_shortcodes','jzk_appinfo', 'autolink', 'autoresize', 'charmap', 'code', '-directionality', 'emoticons','fullscreen', 'help', 'hr', 'image', '-insertdatetime', 'link', 'lists', 'media', 'paste', '-powerpaste', '-preview', 'quickbars', 'table', 'textpattern', '-toc', '-visualblocks', '-visualchars', 'xiunoimgup', 'wordcount'], // 加载的插件，-为禁用
    //toolbar: ['fontformats code | undo redo | styleselect | formatting fontcolor removeformat | alignment blockquote indentation list | imgup link media codesample table | anchor hr toc preview | other | fullscreen', t_external_toolbar.join(' ')], // 界面按钮
    toolbar: ['formatselect bold italic strikethrough link bullist numlist blockquote aligncenter alignright | emoticons spoiler hide_login hide_reply hide_ttpay appinfo | imgup removeformat fontcolor  other | fullscreen', t_external_toolbar.join(' ')],
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

    /* 自定义颜色组 */
    color_map: [
        '#ff9b8a', 'Red',
        '#f58738', 'Orange',
        '#ffc107', 'Yellow',
        '#00d169', 'Green',
        '#20c997', 'Turquoise',
        '#14d2eb', '青色',
        '#50b5ff', 'Blue',
        '#4652f6', 'Medium Blue',
        '#6610f2', '靛蓝',
        '#6f42c1', 'Medium Purple',
        '#d592ff', 'Purple',
        '#ff87c5', '粉色',
        '#8c91b6', 'Gray',
        '#fafafb', 'White',
    
        'rgba(80, 181, 255, 0.2)', 'Blue'+'（背景）',
        'rgba(255, 186, 104, 0.2)', 'Orange'+'（背景）',
        'rgba(255, 155, 138, 0.2)', 'Red'+'（背景）',
        'rgba(213, 146, 255, 0.2)', 'Purple'+'（背景）',
    ],
    
    
    textpattern_patterns: [
        /* 类似WordPress的快捷格式（Markdown风格） */
        { start: '*', end: '*', format: 'italic' },
        { start: '**', end: '**', format: 'bold' },
        { start: '~~', end: '~~', format: 'strikethrough' },
        { start: '#', format: 'h1' },
        { start: '##', format: 'h2' },
        { start: '###', format: 'h3' },
        { start: '####', format: 'h4' },
        { start: '#####', format: 'h5' },
        { start: '######', format: 'h6' },
        { start: '> ', format: 'blockquote' },
        { start: '1. ', cmd: 'InsertOrderedList' },
        { start: '* ', cmd: 'InsertUnorderedList' },
        { start: '- ', cmd: 'InsertUnorderedList' },
        { start: '· ', cmd: 'InsertUnorderedList' },
        { start: '-----', replacement: '<hr/>' },
        { start: '————', replacement: '<hr/>' },
        /* 简单的表情替换 */
        { start: '（笑）', replacement: '🙂' },
        { start: '（笑哭）', replacement: '😂' },
        { start: 'ROFL', replacement: '🤣' },
        { start: '（哭）', replacement: '😭' },
        { start: '（半恼）', replacement: '😠' },
        { start: '（恼）', replacement: '😡' },
        { start: '（怒）', replacement: '💢' },
        { start: '（尴尬）', replacement: '😓' },
        { start: '😅', replacement: '🙃' },
        { start: '流汗黄豆', replacement: '🙃' },
        { start: '差不多得了', replacement: '🙃' },
        { start: '（无语）', replacement: '🤦' },
        /* 简单的单词替换 */
        { start: '卧槽', replacement: '😦' },
        { start: '我草', replacement: '😲' },
        { start: '我操', replacement: '😮' },
        { start: '我勒个去', replacement: '😱' },
        { start: '你妈', replacement: '我妈' },
        { start: 'fuck', replacement: 'firetruck' },
        { start: 'Fuck', replacement: 'Firetruck' },
        { start: 'shit', replacement: 'shift' },
        { start: 'Shit', replacement: 'Shift' },
        { start: '就这', replacement: '🤬' },
        { start: '他急了', replacement: '🤬' }
    ],
    
    fontsize_formats: '0.8em 1em 1.2em 1.4em 1.6em 1.8em 2em 2.4em 2.8em',
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
        toolbar_sticky: true, // 固定工具栏到顶部
        toolbar_mode: 'scrolling',
        toolbar: ['formatselect bold italic forecolor link bullist blockquote | emoticons spoiler hide_login hide_reply hide_ttpay appinfo | image media undo redo other | fullscreen', t_external_toolbar.join(' ')],

    },
    convert_fonts_to_spans: true, // 不强制font转换为span
    extended_valid_elements: 'span[style|class],b,i', // 保留span/b/i标签
    paste_remove_styles_if_webkit: true, // 禁用webkit粘贴过滤器，保留style样式，如果不想保留可选择后点击【清除样式】
    // forced_root_block : '', // 去掉换行自动加P（可以确保非块元素包含在块元素中），改为使用br换行
    // skin: 'oxide-dark',  // 设置深色皮肤，默认为oxide
    // cache_suffix: '?v=1.0.3',// 缓存css/js url自动添加后缀
});