// require these modules for our user model
let mongoose = require("mongoose");

let AnswerSchema = mongoose.Schema({
  questions: [{ 
      category: String,
      answers: [String]
    }]
},
{
  collection: "answer"
});

module.exports = mongoose.model('Answer', AnswerSchema);
