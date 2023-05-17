# Polling System API

This Polling API is made with NODEJS.You can create question on this API and add Options to it.You can vote for specific option. You can Delete question.  You can only Delete Question or Option only if it has not votes;

## Built With
NODEJS , ExpressJS , MongoDB , Mongoose

## Features
    - Create a question (you can add as many questions as you want)
    - Add options to a question
    - Add a vote to an option of question
    - Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
    - Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
    - View a question with it’s options and all the votes given to it

 ## Required Routes (Remember, in a real test, you won’t be given routes mostly)
    - /questions/create (To create a question)✅
    - /questions/:id/options/create (To add options to a specific question)
    - /questions/:id/delete (To delete a question)✅
    - /options/:id/delete (To delete an option)
    - /options/:id/add_vote (To increment the count of votes)
    - /questions/:id (To view a question and it’s options)✅


