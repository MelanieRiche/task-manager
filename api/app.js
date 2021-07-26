const express = require('express');
const app = express();

// Load in the mongoose models
const { List, Task } = require('./db/models');

/* ROUTE HANDLERS */

/* LIST ROUTES */

    
/**
 * GET /lists
 * Purpose: Get all lists
 */
app.get('/lists', (req, res) => {
     // We want to return an array of all the lists
});

/**
 * POST /lists
 * Purpose: Create a list
 */
app.post('/lists', (req, res) => {
    // We want to create a new list and return the new list doc back to the user (including the id)
    // The list information (fields) will be passed in via the JSON request body

});


/**
 * PATCH /lists/:id
 * Purpose: Update a specified list
 */
 app.patch('/lists/:id', (req, res) => {
    // We want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request

});


/**
 * DELETE /lists/:id
 * Purpose: Delete a list
 */
 app.delete('/lists/:id', (req, res) => {
    // We want to delete the specified list (document with id in the URL)

});

/**
 * POST /lists
 * Purpose: Create a list
 */



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})