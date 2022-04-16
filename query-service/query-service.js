const executeStmt = require('../common/sql-query');
const LIMIT = 50;

module.exports = class queryService{
    constructor(req, res)
    {
        this.req = req;
        this.res = res;
    }

    async budgetHomes()
    {
        try 
        {
            var {minPrice, maxPrice, pageNumber} = this.req?.body;

            pageNumber = pageNumber ? pageNumber : 1;

            var skip = (pageNumber - 1) * LIMIT;

            var query = 'SELECT * FROM `home-lane-db` WHERE `price`>= ? AND `price` <= ? LIMIT ? OFFSET ?';

            return await executeStmt(query, [minPrice, maxPrice, LIMIT, skip]);

        } 
        catch (error)
        {
            return [];
        }
    }

    async sqftHomes()
    {
        try 
        {
            var {minSqft, pageNumber} = this.req?.body;

            pageNumber = pageNumber ? pageNumber : 1;

            var skip = (pageNumber - 1) * LIMIT;

            var query = 'SELECT * FROM `home-lane-db` WHERE sqft_living >= ? LIMIT ? OFFSET ?';

            return await executeStmt(query, [minSqft, LIMIT, skip]);

        } 
        catch (error)
        {
            return [];
        }
    }

    async ageHomes()
    {
        try 
        {
            var {year, pageNumber} = this.req?.body;

            pageNumber = pageNumber ? pageNumber : 1;

            var skip = (pageNumber - 1) * LIMIT;

            var query = 'SELECT * FROM `home-lane-db` WHERE `yr_built`>= ? OR `yr_renovated` >= ? LIMIT ? OFFSET ?';

            return await executeStmt(query, [year, year, LIMIT, skip]);

        } 
        catch (error)
        {
            return [];
        }
    }

    async standardPrices()
    {
        try 
        {
            var {pageNumber} = this.req?.body;

            pageNumber = pageNumber ? pageNumber : 1;

            var skip = (pageNumber - 1) * LIMIT;

            var query = 'SELECT * FROM `home-lane-db` LIMIT ? OFFSET ?';

            return await executeStmt(query, [LIMIT, skip]);

        } 
        catch (error)
        {
            return [];
        }
    }
}