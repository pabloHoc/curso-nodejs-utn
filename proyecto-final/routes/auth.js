/**
 * ================================================================
 *  1. Importar conexión a mongodb en constante db
 *  2. Importar colecciones en constante COLLECTIONS
 * ================================================================
 */

const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

// route for when user logs out, session is destroyed and user redirected to login
router.get("/logout", (request, response) => {
  console.log(`[Auth] ${request.session.user} has logged out`)

  request.session.destroy()
  response.redirect("/login")
});

// route for when user views register page
router.get("/register", (request, response) => {
  if (request.isAuthenticated()) {
    response.redirect("../")
  } else {
    response.render("./auth/auth_register", {
      message: undefined
    });
  }
});


// route for when user submits register details
router.post("/register", async (request, response) => {
  try {
      const hash = await bcrypt.hash(request.body.password, 10);
      let collection = await db.getCollection(COLLECTIONS.ACCOUNTS);
      let result = await collection.findOne({username: request.body.username});

      if (result) {
        return response.render("./auth/auth_register", {
          message: "Username already exists."
        });
      }

      let account = await collection.insertOne({
        username: request.body.username,
        password: hash,
        created: Date.now()
      });

      collection = await db.getCollection(COLLECTIONS.PROFILES);

      let profile = await collection.insertOne({
        username: request.body.username,
        subscribed: []
      });

      // create session using passport js
      await request.login(profile.insertedId.toString(), (error) => {
        if (error) throw error

        request.session.user = request.body.username
        console.log(`[Auth] ${request.session.user} has registered`)
      })
      
      response.redirect("../")
  } catch (error) {
    throw error;
  }
})

// route for when user views login page
router.get("/login", (request, response) => {
  if (request.isAuthenticated()) {
    response.redirect("../")
  } else {
    response.render("./auth/auth_login", {
      message: undefined
    })
  }
})

// route for when user submits login details
router.post("/login", async (request, response) => {
  // make input not case sensitive
  request.body.username = request.body.username.toLowerCase()
  request.body.password = request.body.password.toLowerCase()

  try {
    let collection = await db.getCollection(COLLECTIONS.ACCOUNTS);

    let account = await collection.findOne({
      username: request.body.username
    });

    if (!account) {
      response.render("./auth/auth_login", {
        message: "Username or password is incorrect."
      });
    } else {
      let match = await bcrypt.compare(request.body.password, account.password);

      if (match) {
        request.login(account._id, (error) => {
          if (error) throw error;
          request.session.user = request.body.username

          console.log(`[Auth] ${request.session.user} has logged in`)
          response.redirect("../")
        });
      } else {
        console.log(`${request.session.user} failed to login`)
        response.render("./auth/auth_login", {
          message: "Username or password is incorrect."
        });
      }
    }
  } catch(error) {
    throw error;
  }
})



module.exports = router;