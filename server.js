var express = require("express");
var bodyParser = require("body-parser");
 
 
var app = express();
app.use(bodyParser.json());

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

  // define a simple route
  app.get("/api", function(req, res) {
    res.status(200).json({"error": 'get registered'});
  });

    app.post("/api", function(req, res) {
    if (!req.body.laanebelop) {
      handleError(res, "Invalid user input", "All fields must contain data", 400);
    } else {
        res.status(200).json({
            "nedbetalingsplan": {
              "innbetalinger": [{
                  "restgjeld": 2000000.0,
                  "dato": "2020-01-01",
                  "innbetaling": 0.0,
                  "gebyr": 0.0,
                  "renter": 0.0,
                  "total": 0.0
                },
                {
                  "restgjeld": 1994037.7579585968,
                  "dato": "2020-01-01",
                  "innbetaling": 5962.242041403104,
                  "gebyr": 30.0,
                  "renter": 0.0,
                  "total": 5992.242041403104
                }
          
              ]
            }
          }
          );
    }
  });

/*
   
 app.listen(5001, () => {
    console.log("Server is listening on port 5001");
});
 */

  