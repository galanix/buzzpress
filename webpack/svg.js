module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: iconPlugin.extract()
                }
            ],
        },
    };
};