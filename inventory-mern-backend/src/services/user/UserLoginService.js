const CreateToken = require("../../utility/CreateToken");

const UserLoginService = async (Request, DataModel) => {
    try {

        let matchingStage = { $match: Request.body }
        let projectStage = { $project: { _id: 0, email: 1, firstName: 1, lastName: 1, mobile: 1, photo: 1 } }
        let data = await DataModel.aggregate(
            [
                matchingStage, projectStage
            ]
        )
        if (data.length > 0) {
            let token = await CreateToken(data[0]['email'])
            return { status: "success", token: token, data: data[0] }
        }
        else {
            return { status: "unauthorized" }
        }
    }
    catch (error) {
        return { status: "fail", data: error.toString() }
    }
}
module.exports = UserLoginService