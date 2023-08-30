const Employees = require ('../Models/employeesModel')

exports.getAllEmployee = async (req, res) => {
    const employees = await Employees.find()
    return res.status(200).json(employees)
};

exports.getOneEmployee = async (req, res) => {
    const {id} = req.params;
    const employee = await Employees.findById(id)
    return res.status(200).json(employee)
};

exports.createEmployee = async (req, res) => {
    const newEmployee = new Employees ({...req.body})
    const insertedEmployee = await newEmployee.save()
    return res.status(201).json(insertedEmployee)
};

exports.updateEmployee = (req, res) => {
    const {id} = req.params
    const toEdit = req.body
    Employees.findByIdAndUpdate ({_id:id}, toEdit, {new:true})
    .then ((updateEmployee) => {
        return res.status(200).json(updateEmployee)
    })
};

exports.deleteEmployee = async (req, res) => {
    const {id} = req.params
    const employeeToDelete = await Employees.findByIdAndDelete(id)
    return res.status(200).json(employeeToDelete)
};