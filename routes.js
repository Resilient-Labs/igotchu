module.exports = function(app, passport, db) {
// normal routes ===============================================================
    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });
        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });
        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// user is login and stores data into the database
app.get('/createItemPage', isLoggedIn, function(req, res) {
  console.log(req)
    db.collection('itemPosts').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('createItemPage', {
        user : req.user,
        itemPosts: result
      })
    })
});

  //Create Post =========================================================================
  app.post('/postItem', upload.single('file-to-upload'), (req, res, next) => {
    let uId = ObjectId(req.session.passport.user)
    db.collection('itemPosts').save({posterId: uId, description: req.body.description, status: req.body.status, price: req.body.price imgPath: 'images/uploads/' + req.file.filename}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/createItemPage')
    })
  }
};
