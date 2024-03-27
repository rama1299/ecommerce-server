class ShipmentController {
    static async findAll(req, res, next) {
        try {
            console.log('masuk')
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ShipmentController