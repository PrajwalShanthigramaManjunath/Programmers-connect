const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//@route POST api/users
//@desc  Register user
//@access public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      //check if user is already present
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User is already present!' }] });
      }
      //get users avatar from gravatar module if user is not already present and I am passing the email to url method to get one with default settings
      const avatar = gravatar.url(email, {
        s: '150', //size
        r: 'pg', //rating
        d: 'mm', //default})
      });

      user = new User({ name, email, avatar, password }); // creating user instance

      //encrypting password using bcrypt
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save(); // saving user instance

      //return jsonwebtoken
      const payload = {
        user: {
          id: user.id, //mongodb generated
        },
      };
      jwt.sign(
        payload,
        config.get('jwttoken'),
        { expiresIn: 500000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.messasge);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
