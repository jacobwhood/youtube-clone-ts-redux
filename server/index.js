require('dotenv').config();
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackConfig = require('../webpack.config.js');
const app = express();
const port = process.env.PORT || 3000;
let compiler = webpack(webpackConfig);
const routes = require('./routes/routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.resolve(__dirname, 'dist')));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html'));
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
