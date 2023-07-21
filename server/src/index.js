// express
const express = require('express');
const routers = require('./router');
const cors = require('cors');
const timeout = require('express-timeout');
const { 
    corsOptions, 
    PORT, 
    TIMEOUT  
} = require('./configs/configs');

require('dotenv').config();


const app = express();

// Cors configuration

cors(corsOptions);

// Body parser configuration
app.use(express.json());

// Cors configuration
app.use(cors());

// timeout
app.use(timeout(TIMEOUT));

// Api routes
app.use('/api', routers);

console.log("quan nulo qua dihh");

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
