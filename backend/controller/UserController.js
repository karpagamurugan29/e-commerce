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