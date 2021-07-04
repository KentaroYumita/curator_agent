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
            entry: 'src/main.ts',
            title: 'curator_agent',
        }
    }
};