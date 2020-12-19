db.createCollection("posts", {
	validator: {
		$jsonSchema : {
			bsonType : "object",
			required : [ "title", "text", "creator", "comment" ],
			properties: {
				title: {
					bsonType: "string",
					description: "must be a string and is required"
						
				},
				text: {
					bsonType: "string",
					description: "must be a string and is required"
					
				},
				creator: {
					bsonType: "objectId",
					description: "must be a objectid and and is required"	
				},
				comments: {
					bsonType: "array",
					description: "must be a objectid and and is required",
					items: {
						bsonType: "object",
						required: ["text", "author"],
						properties: {
							text: {
								bsonType: "string",
								description: "must be a string and and is required"
							},
							author: {
								bsonType: "objectId",
								description: "must be an objectid and is required"
							}
						}
					}
						
				}
				
			}

		}
	}
});
