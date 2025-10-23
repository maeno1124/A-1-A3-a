/*
  appRoutes.js
*/
const express = require('express');
const router = express.Router();

// The '/app' prefix will be added in App.js
// This route will handle GET requests for '/app/phone'
router.get('/phone', (req, res) => {
  res.render('app/phone');
});

// This will handle '/app/calendar'
router.get('/calendar', (req, res) => {
  res.render('/app/calendar');
});

// This will handle '/app/mail'
router.get('/mail', (req, res) => {
  res.render('app/mail');
});

// This will handle '/app/message' (TYPO FIXED)
router.get('/message', (req, res) => {
  res.render('app/message');
});

// This will handle '/app/search'
router.get('/search', (req, res) => {
  res.render('app/search');
});

// This will handle '/app/setting'
router.get('/setting', (req, res) => {
  res.render('app/setting');
});

module.exports = router;