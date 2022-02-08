const express = require('express');
const serveStatic = require('serve-static');

const BUMBOX_APP = express();
const BUMBOX_PORT = 9800;

BUMBOX_APP.listen(process.env.PORT || BUMBOX_PORT);