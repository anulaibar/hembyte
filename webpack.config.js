module.exports = {
    entry: './src/app.js',                          // Source file entry point
    output: {
        path: __dirname + '/build',                 // Production bundle destination directory
        filename: 'bundle.js',                      // Destination file name
        publicPath: '/public'                       // Dev server public directory
    },
    module: {
        loaders: [
            {
                test: /\.js$/,                      // Process js files
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']    // Use jsx and es6 transpilers
                }
            },
            {
                test: /\.css$/,                     // Process css files
                loader: "style!css?modules"         // Pipe css > style loader
            }
        ]
    }
}
