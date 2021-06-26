module.exports = {
    devServer: {
        proxy: {
            "^/exhibit": {
                target: "http://localhost:8980",
                ws: false,
                pathRewrite: {
                    "^/exhibit": "/exhibit"
                }
            }
        }
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'curator_agent',
        }
    }
};