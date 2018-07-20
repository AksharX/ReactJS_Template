// routes/note_routes.js

module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        console.log(req.body)
        // You'll create your note here.
        res.send('Hello')
      });
};
