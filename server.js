const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const BUMBOX_APP = express();
const BUMBOX_PORT = 9800;

BUMBOX_APP.use(serveStatic(path.join(__dirname, 'dist')));
BUMBOX_APP.listen(process.env.PORT || BUMBOX_PORT);