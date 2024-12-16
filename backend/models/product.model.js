import mongoose, { mongo } from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
    }
},{
    timestamps: true, // get access to created and updated at times
}
);

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;