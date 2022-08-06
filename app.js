
const express = require("express");
const bodyParser = require("body-parser");



const app = express();
var items = [];
var workItems = [];


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req, res){

var today = new Date();
var options = {
  weekday:"long",
  day: "numeric",
  month:"long"
}
var day = today.toLocaleDateString("en-US", options);

res.render("list" , {
  listTitle:day,
  listNewItem: items
});
});

app.post("/",function(req, res){

    var item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item)
    res.redirect("/work");
  }
  else{
    items.push(item);
      res.redirect("/");
  }

});
app.get("/work",function(req, res){

res.render("list",{
  listTitle:"Work List",
  listNewItem:workItems
})
});

//   var today = new Date();
//   var currentDay = today.getDay();
//   var day = "";
//
//   switch (currentDay) {
//
//     case 0:
//     day = "Sunday";
//       break;
//
//     case 1:
//     day = "Monday";
//       break;
//
//     case 2:
//     day = "Tuesday";
//       break;
//
//     case 3:
//     day = "Wednesday";
//       break;
//
//     case 4:
//     day = "Thursday";
//       break;
//
//     case 5:
//     day = "Friday";
//       break;
//
//     case 6:
//     day = "Saturday";
//       break;
//
//     default:
//     console.log("There is an error occured");
//   }
//
  // res.render("list", {kindofDay: day});
// });
app.listen(3000);
