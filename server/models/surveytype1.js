// require these modules for our user model
let mongoose = require("mongoose");

let SurveyType1Schema = mongoose.Schema({
  user_id: String,
  user_name: String,
  name: String,
  type: String,
  question1: { 
      question: String,
      Option1: String,
      Option2: String,
      Option3: String,
      Option4: String,
    },
  question2: { 
      question: String,
      Option1: String,
      Option2: String,
      Option3: String,
      Option4: String,
    },
  question3: { 
      question: String,
      Option1: String,
      Option2: String,
      Option3: String,
      Option4: String,
    },
  question4: { 
      question: String,
      Option1: String,
      Option2: String,
      Option3: String,
      Option4: String,
    },
  question5: { 
      question: String,
      Option1: String,
      Option2: String,
      Option3: String,
      Option4: String,
    }
},
{
  collection: "survey"
});

module.exports = mongoose.model('SurveyType1', SurveyType1Schema);
