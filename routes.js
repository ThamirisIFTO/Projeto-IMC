const express = require("express");
const router = express.Router();
const knex = require("./database/connection");

router.get("/pessoas", async (req, res) => {
    const pessoas = await knex("pessoas");
    res.json(pessoas);
});

router.get("/medicoes", async (req, res) => {
    const medicoes = await knex("medicoes");
    res.json(medicoes);
});

modulo.express = router;