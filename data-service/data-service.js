const express = require('express');
const dataService = express.Router();

var queryService = require('../query-service/query-service');

var budgetHomeSchema = require('../schema/budget-home.json');
var ageHomeSchema = require('../schema/age-home.json');
var sqftHomeSchema = require('../schema/sqft-home.json');

var Validator = require('jsonschema').Validator;
var validator = new Validator();

dataService.get('/budgetHomes', async (req, res) => {

    try {

        /* Validate the request body */
        validator.validate(req.body, budgetHomeSchema, {throwError: true} );
        
        var service = new queryService(req, res);

        /* Request to query database */
        let result = await service.budgetHomes();

        res.status(200).send({ message: "Data Fetched Successfully.", data:result });

    } catch (error) {
        res.status(401).send({message:error?.message});
        
        return;
    }
    
});

dataService.get('/sqftHomes', async (req, res) => { 
    try {
        
        /* Validate the request body */
        validator.validate(req.body, sqftHomeSchema, {throwError: true} );
        
        
        var service = new queryService(req, res);

        /* Request to query database */
        let result = await service.sqftHomes();

        res.status(200).send({ message: "Data Fetched Successfully.", data:result });

    } catch (error) {
        res.status(401).send({message:error?.message});
        
        return;
    }
});

dataService.get('/ageHomes', async (req, res) => {
    try {
        
        /* Validate the request body */
        validator.validate(req.body, ageHomeSchema, {throwError: true} );
        
        var service = new queryService(req, res);
        
        /* Request to query database */
        let result = await service.ageHomes();

        res.status(200).send({ message: "Data Fetched Successfully.", data:result });

    } catch (error) {
        res.status(401).send({message:error?.message});
        
        return;
    }
});







module.exports = dataService