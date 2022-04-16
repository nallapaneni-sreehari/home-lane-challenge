<h5>API LIVE DEPLOYED URL : https://home-lane-challenge.herokuapp.com/</h5>

STEPS TO SET UP THIS PROJECT IN LOCAL :

1. Clone the Repository https://github.com/sreeharinallapaneni149/home-lane-challenge.git
2. run `npm install`
3. Use post man to test APIs.


API DOCUMENTATION

First You'll need the token to Access APIs.
So,
API - Generate Token
    URL : https://home-lane-challenge.herokuapp.com/generate-token
    METHOD : GET

*Note : copy the Token, You'll need it later.

API - Budget Homes
    URL : https://home-lane-challenge.herokuapp.com/data-service/budgetHomes
    METHOD : POST
    HEADERS : {Authorization: Bearer <token>}
    BODY : {minPrice: <price>, maxPrice:<price>, pageNumber:<number>}

API - Sqft Homes
    URL : https://home-lane-challenge.herokuapp.com/data-service/sqftHomes
    METHOD : POST
    HEADERS : {Authorization: Bearer <token>}
    BODY : {minSqft: <sqft_living> pageNumber:<number>}
    
API - Age Homes
    URL : https://home-lane-challenge.herokuapp.com/data-service/ageHomes
    METHOD : POST
    HEADERS : {Authorization: Bearer <token>}
    BODY : {year: <year>, pageNumber:<number>}

API - Standard Price Predictor
    URL : https://home-lane-challenge.herokuapp.com/data-service/standardPrices
    METHOD : POST
    HEADERS : {Authorization: Bearer <token>}
