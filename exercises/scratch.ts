/**
 * 
 * This is basically my notes section where I will be adding keywords and notes during my learning process.
 * 
 * -    use mongod to start the mongo db service on your machine after installation
 * -    use mongo to get into the interactive mongo shell
 * -    use <some_db_name> creates a db and switches to it if it doesnt exist
 * -    db.help() -> gives you helper commands in the shell
 * -    collection in mongo is similar to table in SQL
 * -    db.createCollection('<collection_name>') -> creates a collection
 * -    First question to answer - how do you connect mongodb to node app?
 *          - either the mongoDB driver OR mongoose(ORM for mongoDB)
 * -    The object you get after creating a record is called a 'mongoose document'
 *      Mongo takes in and spits out JSON. Its mongoose which sits on top of mongo which enriches 
 *      the json by appending properties and methods onto it.
 * -    'required' is validation; 'unique' is used to index that field in the DB
 * -    There are many methods available on the mongoose model that you can use
 *          - find
 *          - findById
 *          - findByIdAndUpdate
 * 
 * -    Notes on nested schema, ref tables, populate()
 *          If you want a field to refer to another field, we can either do
 *              (1) Nested schema(never do it in prod)
 *              (2) Create a differnt schema and add a ref where needed
 *      
 *          If you are referring to a field from another collection,
 *          eg:
 *              school:{
 *                  type: mongoose.Schema.Types.ObjectId,
 *                  ref: 'school'
 *              }
 * 
 * -        findOneAndUpdate()
 *              - Update or create an entry
 *              eg: School.findOneAndUpdate({name: 'Loyola'}, {name: 'Loyola'}, {upsert: true, new: true}).exec()
 * -        findOne()
 *              - Find one based on filter 
 * 
 * -        Hooks, Virtuals & Indexes
 *           
 */