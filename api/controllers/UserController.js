/**
           * UserController
           *
           * @description :: Server-side logic for managing users
           * @help        :: See http://links.sailsjs.org/docs/controllers
           */

          module.exports = {
            'edit': function (req, res) {

               User.find(function foundUser (err, user) {
              
                    res.redirect('/user/edit/' + user.id);

              });
            },
            'new': function (req, res) {
              res.view();
            },
            index: function (req, res) {
              User.find(function foundUser (err, users) {
                if(err) return res.redirect('/user/new');
                console.log('users:' );
                console.log( users);
                res.view({
                  users: users
                });
              });
            },
            create: function(req, res) {
                User.create(req.params.all(), function userCreated(err, user) {
                  if (err) return res.redirect('/user/new');
                  res.redirect('/user/show/' + user.id); 
                });
              }
          };