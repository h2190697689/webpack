const path =require("path");
module.exports={
    entry: "./js/index.js",
    output: {
        path: path.join(__dirname,"./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }]
    }
}