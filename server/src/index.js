const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Hi there Is it me you are looking for this is me and who I meant to be');
    
});





app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
