//tab切换插件
(function ($) {
    $.fn.tab = function () {
        let prev = '1'
        this.children('.tab-labels').on('click', 'li', function () {
            let that = $(this)
            let contentID = that.attr('tab-id')
            if (contentID !== prev) {
                let tabContent = that.parents('.tab-labels').siblings('.tab-content')
                that.siblings('[tab-id=' + prev + ']').removeClass('active')
                that.addClass('active')
                tabContent.children('[content-id=' + contentID + ']').show(100)
                tabContent.children('[content-id=' + prev + ']').hide(100)
                prev = contentID;
            }
        })
    }
})(jQuery)