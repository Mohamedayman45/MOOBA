const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('675d535407fc633b787db9fa')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://mohamedaymanfayz944:KJPDVbwNDV9SSQPo@cluster0.gs4ti.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    console.log('Connected to MongoDB!');
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'mohamed',
          email: 'mohamed@test.com',
          cart: { items: [] },
        });
        user.save();
      }
    });
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
