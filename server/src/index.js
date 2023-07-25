// express
const express = require('express');
const routers = require('./router');
const cors = require('cors');
const timeout = require('express-timeout');
const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");


const { 
    corsOptions, 
    PORT, 
    TIMEOUT,
    RATE_LIMITER
} = require('./configs/configs');

require('dotenv').config();


const app = express();

// Cors configuration

cors(corsOptions);

// Body parser configuration
app.use(express.json());

// Cors configuration
app.use(cors());

// Compression
app.use(compression());

// Helmet
app.use(helmet());

// Rate limiter
app.use(rateLimit(RATE_LIMITER));

app.use(express.static("public"))
// timeout
app.use(timeout(TIMEOUT));

// Api routes
app.use('/api', routers);

console.log("Backend is running");


app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

