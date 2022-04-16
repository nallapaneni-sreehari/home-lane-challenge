<h3>API LIVE DEPLOYED URL : https://home-lane-challenge.herokuapp.com/</h3>

<b>STEPS TO SET UP THIS PROJECT IN LOCAL :</b>

1. Clone the Repository https://github.com/sreeharinallapaneni149/home-lane-challenge.git
2. run `npm install`
3. Use post man to test APIs.

<br>

<b>API DOCUMENTATION</b>    <br>

First You'll need the token to Access APIs.
So,     <br>

API - Generate Token <br>
    URL : https://home-lane-challenge.herokuapp.com/generate-token      <br>
    METHOD : GET <br>

<strong>*Note : copy the Token, You'll need it later.</strong>       <br>

<b>API - Budget Homes</b> <br>
    URL : https://home-lane-challenge.herokuapp.com/data-service/budgetHomes<br>
    METHOD : POST<br>
    HEADERS : {Authorization: Bearer <token>}<br>
    BODY : {minPrice: <price>, maxPrice:<price>, pageNumber:<number>}<br>

<b>API - Sqft Homes</b>    <br>
    URL : https://home-lane-challenge.herokuapp.com/data-service/sqftHomes<br>
    METHOD : POST<br>
    HEADERS : {Authorization: Bearer <token>}<br>
    BODY : {minSqft: <sqft_living> pageNumber:<number>}<br>
    
<b>API - Age Homes</b>     <br>
    URL : https://home-lane-challenge.herokuapp.com/data-service/ageHomes<br>
    METHOD : POST<br>
    HEADERS : {Authorization: Bearer <token>}<br>
    BODY : {year: <year>, pageNumber:<number>}<br>
<br>
<b>API - Standard Price Predictor</b>      <br>
    URL : https://home-lane-challenge.herokuapp.com/data-service/standardPrices<br>
    METHOD : POST<br>
    HEADERS : {Authorization: Bearer <token>}<br>
