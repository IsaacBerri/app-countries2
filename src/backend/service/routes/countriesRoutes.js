const express = require("express");
const CountryModel = require("../../db/countryModel");

const router = express.Router();

router.get("/", (req, res) => {
    CountryModel.find({})
        .then((data) => {
            res.json(data)
        })
})

router.get("/:code", (req, res) => {
    const { code } = req.params;
    CountryModel.findOne({ "code": code })
    .then((country) => {
        if (country) {
            res.status(200).json(country);
        } else {
            res.status(400).json({ error: "El país no existe" });
        }
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });
})

router.get("/continent/:code", (req, res) => {
    const { code } = req.params;
    CountryModel.find({ "continent.code": code })
        .then((data) => {
            res.json(data)
        })
})

router.post("/", (req, res) => {
    const body = req.body;
    CountryModel.create(body)
        .then((data) => {
            res.json(data)
        })
})

module.exports = router