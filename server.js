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

  app.get("/api", function(req, res) {
    res.status(200).json({"error": 'get registered'});
  });

    app.post("/api", function(req, res) {
    if (1==2) {
      handleError(res, "Invalid user input", "All fields must contain data", 400);
    } else {
        res.status(200).json(nedbetalingsplan(req.body))
     }
  });

  /*Beregne lån - test */
  
  
  
  function rente(pResterendeGjeld,pRente){
    return (pResterendeGjeld*(pRente/100)/12)
  }
  
  
  /* 2000000*0.03*(1.03^20)/((1.03^20)-1)/12 */
  function terminbelop(pLaan,pRente,pAr){
  var prosent = pRente/100
  return pLaan*prosent*(Math.pow(prosent+1,pAr))/((Math.pow(prosent+1,pAr))-1)/12
  }
   
   
  function increaseDate(pDate){
    year=parseInt(pDate.slice(0,4))
    month=parseInt(pDate.slice(5,7))
    day=parseInt(pDate.slice(8,10))
var vResult;
         if(month<12){
		month++
        return vResult = year+'-'+(month)+'-'+day
     }
    else{
		year++
        return vResult = (year)+'-'+'01'+'-'+day
    }
        }
   
  
  function nedbetalingsplan(pBody){
    var gResult={
        "nedbetalingsplan": {
          "innbetalinger": []
            }
        }
    var vTemp={
        "restgjeld": null,
        "dato": null,
        "innbetaling": null,
        "gebyr": null,
        "renter": null,
        "total": null

    }

    vTemp.restgjeld=pBody.
    vTemp.dato=increaseDate()
    vTemp.innbetaling=i;
    vTemp.gebyr=i;
    vTemp.renter=i;
    vTemp.total=i;
    gResult.nedbetalingsplan.innbetalinger.push(vTemp)

  for (i = 0; i <= pTerminer; i++) {
    vTemp.restgjeld=i;
    vTemp.dato=increaseDate()
    vTemp.innbetaling=i;
    vTemp.gebyr=i;
    vTemp.renter=i;
    vTemp.total=i;
    gResult.nedbetalingsplan.innbetalinger.push(vTemp)
  }
  return gResult
   }

 

   const port = process.env.PORT || 8000;

   app.listen(port, () => {
    console.log("Server is listening on port 8000");
});
   
