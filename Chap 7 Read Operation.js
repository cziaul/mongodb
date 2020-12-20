
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







