const Router = require('express');
const router = Router();

// Import routes

// status api endpoint
router.get('/api-status',(req,res)=>{
    return res.send({'Status':'on'})
})

// User routes

module.exports= router;