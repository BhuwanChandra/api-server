var express = require("express");
var app = express();


var api = {
    "goals": {
        "calories": 1800
    },
    "foodPlan": {
        "intensity": "MEDIUM",
        "estimatedDate": "2014-12-31",
        "personalized": true
    }
}

app.get('/',(req, res) => {
    res.redirect('/api');
})

app.get('/api',(req, res) => {
    res.send(api);
})

app.listen(1234, function () {
    console.log("The API Server Has Started on the port 1234 !!");
});

