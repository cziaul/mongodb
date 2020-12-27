
db.movies.find({})

//eq
db.movies.find({runtime: {$eq: 60}})

db.movies.find({runtime: 60})

//ne
db.movies.find({runtime: {$ne: 60}})

db.movies.find({runtime: {$lt: 40}}).pretty()

//lte

db.movies.find({runtime: {$lte: 40}}).pretty()

//gt

db.movies.find({runtime: {$gt: 40}}).pretty()

db.movies.find({runtime: {$gte: 40}}).pretty()

//query embadded doc
db.movies.find({"rating.average": {$gt: 7}}).pretty()

//query array and embadded doc within array

db.movies.find({genres: "Drama"}).pretty()

//exactly equal "Drama", will not show result if that array has other element

db.movies.find({genres: ["Drama"]}).pretty()

//in

db.movies.find({runtime: {$in: [30, 42]}}).pretty()

//nin not in

db.movies.find({runtime: {$nin: [30, 42]}}).pretty()


//count

db.movies.find({"rating.average": {$lt: 5}}).count()

//Logical Operator

db.movies.find({"rating.average": {$lt: 5}}).count()

//<5 and > 9.3 OR

db.movies.find({$or: [{"rating.average": {$lt: 5}}, {"rating.average": {$gt: 9.3}}]}).pretty()

//NOR
//Not lt 5 (means higher than 5) and <9.3
db.movies.find({$nor: [{"rating.average": {$lt: 5}}, {"rating.average": {$gt: 9.3}}]}).pretty()

//and

db.movies.find({$and: [{"rating.average": {$gt: 9}}, {genres: "Drama"}]}).pretty()

//and below will work but not for all driver

db.movies.find({"rating.average": {$gt: 9}, genres: "Drama"}).pretty

//Not

db.movies.find({"runtime": {$not: {$eq: 60}}}).count()

db.movies.find({"runtime": {$ne: 60}}).count()


//Exists
//{name: "Manuel", hobbies: [{title: "Cooking", frequency: 5}, {title: "Cars", frequency: 2}], phone: "012177972", age: 30}
//, 

db.users.find({age: {$exists: true}}).pretty()

db.users.find({age: {$exists: true, $gt: 30}}).pretty()

db.users.find({age: {$exists: true, $ne: null}}).pretty()

//TYPE: if we have a field which as text as well as number

db.users.find({phone: {$type: "number"}}).pretty()

db.users.find({phone: {$type: "double"}}).pretty()

db.users.find({phone: {$type: ["double", "string"]}}).pretty()

//regex

db.movies.find({summary: {$regex: /musical/}}).pretty()





db.movies.find().pretty()










db.users.insertMany([{name: "Max", hobbies: [{title: "Sports", frequency: 3}, {title: "Cooking", frequency: 6}], phone: 01711525897}, 
                     {name: "Manuel", hobbies: [{title: "Cooking", frequency: 5}, {title: "Cars", frequency: 2}], phone: 01711525899}])


db.users.insertOne({name: "Max", hobbies: [{title: "Sports", frequency: 3}, {title: "Cooking", frequency: 6}], phone: 01711525899})

db.users.insertMany([{name: "Max", hobbies: [{title: "Sports", frequency: 3}, {title: "Cooking", frequency: 6}], phone: 017525897}])



db.users.find().pretty()





















