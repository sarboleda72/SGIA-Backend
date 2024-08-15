const Router = require('express');
const router = Router();

// Import routes
const authRoutes = require('./modules/auth/routes/auth.routes.js');
const toolsRoutes = require('./modules/tools/routes/tools.routes.js');

// status api endpoint
router.get('/api-status', (req, res) => {
  return res.send({ 'Status': 'on' })
})

// User routes
router.use(authRoutes);
router.use(toolsRoutes);

module.exports = router;