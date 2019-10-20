var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

 
 
var app = express();
app.use(cors());

app.use(bodyParser.json());

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  }

  // define a simple route used for fast testing
  app.get("/api", function(req, res) {
    res.status(200).json({"error": 'get registered'});
  });

    app.post("/api", function(req, res) {
    if (1==2) {
      handleError(res, "Invalid user input", "All fields must contain data", 400);
    } else {
        res.status(200).json(
          {
            "nedbetalingsplan": {
              "innbetalinger": [
                  {
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
                  },
                  {
                      "restgjeld": 1988046.4244412559,
                      "dato": "2020-02-01",
                      "innbetaling": 5991.3335173408395,
                      "gebyr": 30.0,
                      "renter": 5066.920997052006,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1981713.5637908422,
                      "dato": "2020-03-01",
                      "innbetaling": 6332.8606504136205,
                      "gebyr": 30.0,
                      "renter": 4725.393863979225,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1975690.9140569698,
                      "dato": "2020-04-01",
                      "innbetaling": 6022.649733872401,
                      "gebyr": 30.0,
                      "renter": 5035.604780520444,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1969490.8164184014,
                      "dato": "2020-05-01",
                      "innbetaling": 6200.097638568475,
                      "gebyr": 30.0,
                      "renter": 4858.15687582437,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1963437.1082479192,
                      "dato": "2020-06-01",
                      "innbetaling": 6053.70817048219,
                      "gebyr": 30.0,
                      "renter": 5004.546343910655,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1957206.8789169274,
                      "dato": "2020-07-01",
                      "innbetaling": 6230.229330991969,
                      "gebyr": 30.0,
                      "renter": 4828.025183400877,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1951121.9568235371,
                      "dato": "2020-08-01",
                      "innbetaling": 6084.922093390257,
                      "gebyr": 30.0,
                      "renter": 4973.3324210025885,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1945021.5727262818,
                      "dato": "2020-09-01",
                      "innbetaling": 6100.384097255213,
                      "gebyr": 30.0,
                      "renter": 4957.870417137632,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1938746.060218716,
                      "dato": "2020-10-01",
                      "innbetaling": 6275.512507565737,
                      "gebyr": 30.0,
                      "renter": 4782.7420068271085,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1932614.2285271944,
                      "dato": "2020-11-01",
                      "innbetaling": 6131.831691521687,
                      "gebyr": 30.0,
                      "renter": 4926.422822871158,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1926308.2067815172,
                      "dato": "2020-12-01",
                      "innbetaling": 6306.021745677148,
                      "gebyr": 30.0,
                      "renter": 4752.232768715698,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1920144.7700612103,
                      "dato": "2021-01-01",
                      "innbetaling": 6163.436720306959,
                      "gebyr": 30.0,
                      "renter": 4894.817794085887,
                      "total": 11088.254514392846
                  },
                  {
                      "restgjeld": 1913979.0563959065,
                      "dato": "2021-02-01",
                      "innbetaling": 6165.713665303872,
                      "gebyr": 30.0,
                      "renter": 4892.540849088973,
                      "total": 11088.254514392846
                  }
                ]
                }
          }
          );
    }
  });


 

   const port = process.env.PORT || 8000;

   app.listen(port, () => {
    console.log("Server is listening on port 8000");
});
   
