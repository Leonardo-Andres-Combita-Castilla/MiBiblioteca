const express = require ('express');
const router = express.Router();
const bookRouter = require ('./bookRoutes')
const authorRouter = require ('./authorRoutes')
const userRoutes = require ('./userRoutes')
const employeeRoutes = require ('./employeeRoutes')

router.use ('/', bookRouter);
router.use ('/', authorRouter);
router.use ('/', userRoutes);
router.use ('/', employeeRoutes);

module.exports = router