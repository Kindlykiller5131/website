const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;


  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://JakePfaff:C0xSpB0GrwgNHbTj@cluster0.6br3t8e.mongodb.net/?retryWrites=true&w=majority";

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  if (username === 'user@gmail.com' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
