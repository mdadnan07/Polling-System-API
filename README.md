# Polling System APIs

## HOSTING LINK : 
## https://polling-system-api-xid6.onrender.com 

## API DOCUMENTATION LINK :
## https://documenter.getpostman.com/view/27448741/2s93kz65ko

## BUILT WITH :
* NODEJS
* EXPRESS JS
* MONGODB
* MONGOOSE

## FEATURES :
* Create a question (you can add as many questions as you want)
* Add options to a question
* Add a vote to an option of question
* Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
* Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
* View a question with it’s options and all the votes given to it

## Required Routes (Remember, in a real test, you won’t be given routes mostly) :
*  /questions/create (To create a question)✅ 
 
* /questions/:id/options/create (To add options to a specific question)
 
* /questions/:id/delete (To delete a question)✅
 
* /options/:id/delete (To delete an option)

* /options/:id/add_vote (To increment the count of votes)

* /questions/:id (To view a question and it’s options)✅

## SCREENSHOTS OF PROJECT :

![pollingsystemAPI](https://github.com/mdadnan07/Polling-System-API/assets/131695481/98806347-4fd7-4616-ad1f-f40a6d1aa9eb)
![createQue](https://github.com/mdadnan07/Polling-System-API/assets/131695481/ef9eb6b7-5c38-4228-accd-8a4a0a6349de)
![optionCreate](https://github.com/mdadnan07/Polling-System-API/assets/131695481/9f3b094e-b5aa-49b2-a7dc-753b411978f7)
![optionShow](https://github.com/mdadnan07/Polling-System-API/assets/131695481/8b0dae0e-587d-4392-b751-3a4f7cba6e65)
![addVote](https://github.com/mdadnan07/Polling-System-API/assets/131695481/bedfc6ae-4d4c-45ad-bd44-dd4afaad9cfa)
![optionDelete](https://github.com/mdadnan07/Polling-System-API/assets/131695481/748f56f1-2b72-4f3f-a0df-76c471d725f0)
![queDelte](https://github.com/mdadnan07/Polling-System-API/assets/131695481/6f9269f9-3fce-464f-831e-f33deaaba1db)
