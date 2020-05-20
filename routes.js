module.exports = function(app, passport, db) {
// normal routes (Sebastian) ===============================================================
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

        // (abbey, get user ID)
        app.get("/user/:id", function(req, res) {
          let userId = ObjectId(req.params.zebra)
          // the let userID attain the unique userID number in order to get the specfic profile
          db.collection("postedItem").find({_id: userId , itemType: itemsSold}).toArray((err, result) => {
            // this will go to the postedItem database, find the user and only what has been sold, not sold AND BOUGHT
            if (err) return console.log(err)
            res.render("sellerPage.ejs", {
              items: result,
              users : req.user,
              // show you the user is selling
            })
          })
        });

        // user is login and stores data into the database (Victor)
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

  //Create Post (Victor) =========================================================================
  app.post('/postItem', upload.single('file-to-upload'), (req, res, next) => {
    let uId = ObjectId(req.session.passport.user)
    db.collection('itemPosts').save({posterId: uId, description: req.body.description, status: req.body.status, price: req.body.price imgPath: 'images/uploads/' + req.file.filename}, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/createItemPage')
    })
  }

  // PUT for updating Items , ORSON TICKET #25
  app.put('/updateItem', (req, res) => {
  var itemId = ObjectId(req.body.itemId.trim());
  db.collection('itemPosts')
  // Our idea is that the front end team renders the posts or itemID for every Post so we can update
  //  How do we find the postId to update it?
  .findOneAndUpdate({
    _id: itemID
  }, {
    $set: {
      accepted: "sold"
    }
  }, {
    sort: {
      _id: -1,
    },
    upsert: false
  }, (err, result) => {
    if (err) return res.send(err)
  })
});

// =========================

  // DELETE
  // Orson delete ticket 26
  app.delete('/deletePost', (req, res) => {
      db.collection('itemPosts').findOneAndDelete({itemId: req.body.itemId}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })
};
