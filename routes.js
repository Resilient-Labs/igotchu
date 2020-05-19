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
