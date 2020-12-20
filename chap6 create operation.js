use contactData

//[] array
db.person.insertOne({name: "Max", age: 30, hobbies: ["Sports", "Cooking"]})

db.person.insertOne({name: "Manual", age: 32, hobbies: ["Cars", "Cooking"]})

db.person.insertMany([{name: "Anna", age: 29, hobbies: ["Sports", "Yoga"]}])


//Using insert can be used both single and multiple insertation

db.persons.insert({name: "phil", age:35})


/*
Ordered
-------
Note: When multiple insert (insertMany) case, if we set "ordered: false" then 
   it will show error for any duplicate id but will go through all recored and insert only non mathcing
   But in case of ordered: true or defaul, it will stop at first error of duplicate id
*/
db.hobbies.insertMany([{_id: "Yoga", name: "Yoga"}, {_id: "cooking", name: "cooking"}, {_id: "hiking", name: "hiking"}], {ordered: false})

db.hobbies.insertMany([{_id: "Yoga", name: "Yoga"}, {_id: "soccer", name: "soccer"}, {_id: "hiking", name: "hiking"}], {ordered: false})

/*
Ordered and Unordered insert
----------------------------
When we set ordered: false, it will insert docs that are not in the collection but through error only for duplicate one, but benefit over Ordered: true, 
which is default, is, in case of true if insert commands finds any duplicate id, it will show error and stop there, but in case of ordered: false, 
it will go to next on and try to insert
*/

/*
WriteConcern (see ppt file) #72 Udemy
w = write
j = journal
w: 1 means it will write to Memory and then send reply
j: true means it will create a journal in case power outage system will read from journal
{w: 1, j: undefined }
{w: 1, j: true }
{w: 1, wtimeout: 200, j: true }
*/
//This wil save without giving object id since haven't had enough time to create object 
db.persons.insertOne({name: "Chrissy", age: 41}, {writeConcern: {w:0}})  //super fast
db.persons.find()

//default
db.persons.insertOne({name: "Alex", age: 41}, {writeConcern: {w:1}})

//Journal

db.persons.insertOne({name: "Michale", age: 41}, {writeConcern: {w:1, j:false}})

//Journal true higher security

db.persons.insertOne({name: "Michale", age: 41}, {writeConcern: {w:1, j: true}})

//wtimeout when shaky connection, will give error to client

db.persons.insertOne({name: "Aliya", age: 41}, {writeConcern: {w:1, j: true, wtimeout: 1}})


//C:\Users\cziau_jdqllc2\Desktop\InterviewPrep\Mongo\

//cd C:\Users\cziau_jdqllc2\Desktop\InterviewPrep\Mongo\
///Users/cziau_jdqllc2/Desktop/InterviewPrep/Mongo/tv-shows.json

mongoimport -d movieData -c movies --jsonArray --drop  /Users/cziau_jdqllc2/Desktop/InterviewPrep/Mongo/tv-shows.json













