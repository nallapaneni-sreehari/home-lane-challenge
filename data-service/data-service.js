const express = require('express');
const dataService = express.Router();

var queryService = require('../query-service/query-service');

var budgetHomeSchema = require('../schema/budget-home.json');
var ageHomeSchema = require('../schema/age-home.json');
var sqftHomeSchema = require('../schema/sqft-home.json');

var Validator = require('jsonschema').Validator;
var validator = new Validator();

dataService.post('/budgetHomes', async (req, res) => {

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

dataService.post('/sqftHomes', async (req, res) => { 
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

dataService.post('/ageHomes', async (req, res) => {
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


dataService.get('/standardPrices', async (req, res) => {
    try {
        
        var service = new queryService(req, res);
        
        /* Request to query database */
        let result = await service.standardPrices();

        for(let item of result)
        {
            var newPrice = (((item.bedrooms * item.bathrooms * (item.sqft_living/item.sqft_lot)*item.floors) + item.waterfront + item.view) * item.condition *(item.sqft_above + item.sqft_basement)-10 * (2022 - Math.max(item.yr_built, item.yr_renovated)))*100;

            item.price = newPrice;
        }

        res.status(200).send({ message: "Data Fetched Successfully.", data:result });

    } catch (error) {
        res.status(401).send({message:error?.message});
        
        return;
    }
});





module.exports = dataService