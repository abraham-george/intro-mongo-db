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
 */