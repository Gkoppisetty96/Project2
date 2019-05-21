require("dotenv").config();
var express = require("express");
// var methodOverride = require('method-override');
// var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8000;
var app = express();
var db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// app.use(methodOverride('_method'));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

var syncOptions = { force: false };

if (process.env.NODE_ENV === "tasks") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
    console.log("App listening on PORT " + PORT);
  });
});