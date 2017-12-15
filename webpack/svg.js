module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'svg-sprite-loader',
                    options: {
                        extract: true,
                        spriteFileName: svgPath => `sprite${svgPath.substr(-4)}`
                    }
                }
            ],
        },
    };
};