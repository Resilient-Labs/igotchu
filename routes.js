
app.get('/sold', isLoggedIn, function(req, res) {
  db.collection('postedItem').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('soldItems.ejs', {
      postedItem: 'sold'
    })
  })
});

app.get('/bought', isLoggedIn, function(req, res) {
  db.collection('postedItem').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('boughtItems.ejs', {
      postedItem: 'bought'
    })
  })
});
