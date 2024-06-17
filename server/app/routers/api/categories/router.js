const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */

const { read, browse } = require("../../../controllers/categoryActions");

router.get("/", read);

router.get("/:id", browse);

/* ************************************************************************* */

module.exports = router;
