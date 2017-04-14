// require these modules for our user model
let mongoose = require("mongoose");

let SurveySchema = mongoose.Schema({
  user_id: String,
  user_name: String,
  name: String,
  questions: [{ 
      category: String,
      question: String,
      options: [String]
    }]
},
{
  collection: "survey"
});

module.exports = mongoose.model('Survey', SurveySchema);
