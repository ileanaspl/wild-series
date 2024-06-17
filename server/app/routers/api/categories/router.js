const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

const { read, browse } = require("../../../controllers/categoryActions");

router.get("/", browse);

router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
