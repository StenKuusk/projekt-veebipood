const express = require('express');
const app = express();

// Define the directory where your static files are located
app.use(express.static('public'));

// Define the route for the homepage
app.get('/', (req, res) => {
    // Render the homepage.html file
    res.sendFile(__dirname + '/public/homepage.html');
});

// Start the server
const PORT = 3020;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});