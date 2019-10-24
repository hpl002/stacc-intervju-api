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


  /*check date format for day and month with leading zero */
    app.post("/api", function(req, res) {
    if (1==2) {
      handleError(res, "Invalid user input", "All fields must contain data", 400);
    } else {
        res.status(200).json(nedbetalingsplan(req.body))
     }
  });

  /*Beregne lån - test */
    function nedbetalingsplan(pBody){
    var gResult={
        "nedbetalingsplan": {
          "innbetalinger": []
            }
        }
    var vTemp={}
    var akkumulerte_innbetalinger=0;
    var pAr=parseInt(pBody.utlopsDato.slice(0,4)-pBody.datoForsteInnbetaling.slice(0,4))

    vTemp.restgjeld=pBody.laanebelop
    vTemp.dato=pBody.datoForsteInnbetaling
    vTemp.innbetaling=0.0
    vTemp.gebyr=0.0
    vTemp.renter=0.0
    vTemp.total=0.0
    gResult.nedbetalingsplan.innbetalinger.push(vTemp)

   

  for (i = 1; i <= (pAr*12); i++) {
    /*Have to declare a local reference to the object, otherwise we are simply rewwriting the same values over and over*/
    var vTemp={}
    /*variabel som holder styr på hvor some som er innbetalt
    betalt+=(terminbelop(gResult.nedbetalingsplan.innbetalinger[i-1].,pBody.nominellRente,pAr) + terminbelop(gResult.nedbetalingsplan.innbetalinger[i-1].,pBody.nominellRente,pAr))
    vTemp.restgjeld=parseInt(pBody.laanebelop)-betalt;
    vTemp.dato=increaseDate(gResult[i-1].nedbetalingsplan.innbetalinger.dato)
    vTemp.innbetaling=terminbelop(gResult.nedbetalingsplan.innbetalinger.[i-1].restgjeld,pBody.nominellRente,pAr)-rente(parseInt(pBody.laanebelop)-betalt,pBody.nominellRente)
    vTemp.gebyr=pBody.terminGebyr;
    vTemp.renter=rente(parseInt(pBody.laanebelop-betalt),pBody.nominellRente)
    vTemp.total=terminbelop(gResult[i-1].nedbetalingsplan.innbetalinger.restgjeld,pBody.nominellRente,pAr);
    gResult.nedbetalingsplan.innbetalinger.push(vTemp)
    */

    
   akkumulerte_innbetalinger+=terminbelop(parseInt(pBody.laanebelop),pBody.nominellRente,pAr)
   vTemp.restgjeld=parseInt(pBody.laanebelop)-akkumulerte_innbetalinger;
   vTemp.dato=increaseDate(gResult.nedbetalingsplan.innbetalinger[i-1].dato)
   vTemp.innbetaling=0
   vTemp.gebyr=pBody.terminGebyr;
   vTemp.renter=0
   vTemp.total=terminbelop(parseInt(pBody.laanebelop),pBody.nominellRente,pAr)
   gResult.nedbetalingsplan.innbetalinger.push(vTemp)
  }
  return gResult
   }

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
    day=pDate.slice(8)
var vResult;
        if(month<12){
        month++
      }
    else{
    year++
    month = 1
     }
     return year+'-'+addLeadingZero(month)+'-'+day
        }

        function addLeadingZero(p){
          p = p.toString()
          if(p.length<2){
          return p.padStart(2,'0')
          }
          return p
          }

 

   const port = process.env.PORT || 8000;

   app.listen(port, () => {
    console.log("Server is listening on port 8000");
});
   
