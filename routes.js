


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
