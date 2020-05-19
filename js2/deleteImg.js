app.delete('/deletePost', (req, res) => {
      db.collection('itemPosts').findOneAndDelete({itemId: req.body.itemId}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })
