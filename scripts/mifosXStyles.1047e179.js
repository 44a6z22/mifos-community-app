define(['underscore'], function () {
    var styles = {
        css: [
            'fontawesome.a912fc97.css',
            'styles.1b4d1592.css'
            ]
    };

    require(_.reduce(_.keys(styles), function (list, pluginName) {
        return list.concat(_.map(styles[pluginName], function (stylename) {
            return pluginName + '!styles/' + stylename;
        }));
    }, []));
});
