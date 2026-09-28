import User from "../model/userModel.js"

export const UserController = async (req, res) => {
    try {
        req.send('fetch user')
    } catch (err) {
        res.send({
            status: 500,
            message: err
        })
    }
}

export const CreateUser = async (req, res) => {
    try {
        const reqBody = req.body
        const findIfExist = await User.findOne({
            email: reqBody.email
        })
        if (findIfExist) {
            return res.status(409).json({
                success: false,
                message: "Employee already exists.",
            });
        }
        const newEmp = new User(reqBody)

        await newEmp.save()
        const response = newEmp
        return res.status(201).json({
            success: true,
            message: "Employee added successfully.",
            data: response,
        })
    } catch (err) {
        res.send({
            status: 500,
            message: err
        })
    }
}