function globalInit() {
    if ($('form').length) {
        $('form').each(function () {
            $(this).removeAttr('novalidate');
        });
    }
}