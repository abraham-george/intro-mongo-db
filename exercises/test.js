const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/todos')
}

// const student = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     info: {
//         school: {
//             type: String
//         },
//         shoeSize: {
//             type: Number
//         }
//     },
//     favFoods: [{ type: String }],
//     school: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'school'
//     }
// }, {timestamps: true})

const school = new mongoose.Schema({
    name: String,
    openSince: Number,
    students: Number,
    isGreat: Boolean,
    staff: [{type: String}]
})

//const Student = mongoose.model('student', student)
const School = mongoose.model('school', school)

connect()
    .then(async connection => {
        const school1 = {
            name: 'Loyola',
            openSince: 1968,
            students: 2000,
            isGreat: true,
            staff: ['Padma', 'Soni']
        }
        const school2 = {
            name: 'STRS',
            openSince: 1984,
            students: 5000,
            isGreat: false,
            staff: ['Alpha', 'Beta']
        }

        const schools = await School.create([school1, school2])
        const schoolMatch = await School.find({
          students: { $gt: 500, $lt: 6000 }, //-> filtering based on student count
          openSince: { $gt: 1965, $lt: 2000 }, //-> filtering based on openSince count
          staff: 'Padma', //-> filtering based on staff name in the array
        })
            .sort('-openSince')
            .exec()

        console.log(schoolMatch);


        // const student = await Student.create({
        //     firstName: 'Abraham',
        //     school: school.id
        // })

        // const match = await Student.findById(student.id)
        //     .populate('school')
        //     .exec()
    
        // console.log(match)
    })
    .catch(e => console.error(e))

