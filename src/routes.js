const Router = require('express');
const router = Router();

// Import routes
const authRoutes = require('./modules/auth/routes/auth.routes');

// status api endpoint
router.get('/api-status', (req, res) => {
  return res.send({ 'Status': 'on' })
})

// User routes
router.use(authRoutes);

module.exports = router;