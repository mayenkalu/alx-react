# Webpack

## Setting up Webpack for a Basic Project

Webpack is a powerful tool that helps bundle and manage assets for web projects. Here's a step-by-step guide to setting up Webpack for a basic project:

1. Entry Points and Output:
An entry point is the starting file that Webpack uses to build the dependency graph. The output is the resulting bundled file that Webpack generates. To set up entry points and output, initialise this:

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace 'index.js' with the name of your main entry file.
  output: {
    filename: 'bundle.js', // Name your output bundle file.
    path: path.resolve(__dirname, 'dist'), // Choose the output directory path.
  },
};
```

2. Loaders:
Loaders allow Webpack to process different file types and convert them into valid modules. For instance, transforming ES6+ JavaScript with Babel or processing CSS with CSS loaders. To set up loaders, install the necessary loaders via npm and configure them in `webpack.config.js`:

```javascript
// webpack.config.js
module.exports = {
  // ... (entry and output configuration)

  module: {
    rules: [
      {
        test: /\.js$/, // Use the loader for .js files
        exclude: /node_modules/, // Don't apply it to files in the node_modules folder
        use: 'babel-loader', // Replace 'babel-loader' with the appropriate loader for your needs
      },
      {
        test: /\.css$/, // Use the loader for .css files
        use: ['style-loader', 'css-loader'], // The order is important; loaders are applied from right to left
      },
      // Add more loaders for other file types as needed
    ],
  },
};
```

3. Plugins:
Plugins extend Webpack's capabilities, allows performing a wide range of tasks like code optimization, asset management, and environment configuration. To add plugins, install them via npm and add them to `webpack.config.js`:

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Example plugin

module.exports = {
  // ... (entry, output, and module configuration)

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Replace 'index.html' with your HTML template file
    }),
    // Add more plugins as needed
  ],
};
```

4. Code Splitting:
Code splitting allows splitting bundle into smaller chunks, which can improve the initial loading time and cacheability. Webpack supports various code-splitting methods. To set it up, implement this:

```javascript
module.exports = {
  // ... (entry, output, module, and plugin configuration)

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

5. Development Server:
Webpack comes with a built-in development server, allows to serve the project during development with hot module replacement (HMR) for faster updates. To set up the dev server:

```javascript
// webpack.config.js
module.exports = {
  // ... (entry, output, module, and plugin configuration)

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Set the path to your output directory
    port: 8080, // Choose your preferred port number
    hot: true, // Enable Hot Module Replacement for faster updates
  },
};
```

The above is a basic Webpack configuration set up for a project, ready to bundle and optimize assets efficiently.
