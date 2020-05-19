app.get('/profile', isLoggedIn, function(req, res) {
  db.collection('users').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('profile.ejs', {
      user: req.user,
      postedItem: result
    })
  })
});
