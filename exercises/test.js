const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/todos')
}

const student = new mongoose.Schema({
    firstName: {
        type: String,
        //required: true,
        //unique: true
    },
    // info: {
    //     school: {
    //         type: String
    //     },
    //     shoeSize: {
    //         type: Number
    //     }
    // },
    // favFoods: [{type: String}]
})

const Student = mongoose.model('student', student)

connect()
    .then(async connection => {
        //const student = await Student.create({ firstName: 'Tim' })
        //const found = await Student.find({ firstName: 'Tim' })
        //const foundById = await Student.findById('dummy_id')
        const updated = await Student.findByIdAndUpdate(
          "606f8b41c59bb6c0dadd34d2",
          { firstName: "Tim_Updated" }
        );
        console.log(updated);
    })
    .catch(e => console.error(e))

