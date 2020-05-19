// ORSON
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
// O
