// require these modules for our user model
let mongoose = require("mongoose");

let AnswerType1Schema = mongoose.Schema({
    q1answer: [Number],
    q2answer: [Number],
    q3answer: [Number],
    q4answer: [Number],
    q5answer: [Number]
},
{
  collection: "answer"
});

module.exports = mongoose.model('AnswerType1', AnswerType1Schema);
