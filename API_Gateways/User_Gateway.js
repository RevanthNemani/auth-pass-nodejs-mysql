// Gateway for User routes
const express = require('express');
const router = express.Router();
const asyncHandler = require('../Helpers/asyncHandler');
const validate = require('validate.js');

// route to create a user
/*
@body
- firstName: string(45)
- lastName: string(45)
- username: string(20)
- password: string(128)
- expiryDt: date
- roles: [array]
*/
router.post(
  '/create',
  asyncHandler((req, res) => {
    const constraints = {
      firstName: {
        presence: true,
        length: { maximum: 45 }
      },
      lastName: {
        presence: true,
        length: { maximum: 45 }
      },
      username: {
        presence: true,
        length: { minimum: 6, maximum: 20 }
      },
      password: {
        presence: true,
        length: { minimum: 6, maximum: 128 }
      },
      expiryDt: {
        presence: true
      },
      roles: {
        presence: true
      }
    };
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
    const startDt = Date.now();
    const expiryDt = req.body.expiryDt;
    const roles = req.body.roles;

    const validation = validate(
      {
        firstName,
        lastName,
        username,
        password,
        expiryDt,
        roles
      },
      constraints
    );

    if (validation)
      return res.status(400).json({ error: validation });
  })
);

module.exports = router;
