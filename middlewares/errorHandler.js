const errorHandler = (error, req, res, next) => {
    console.log(error.name)
    // console.log(error)
    if (error.name == 'ErrorNotFound') {
        res.status(404).json({message: 'Error not found!'})
    } else if (error.name == 'InvalidCredentials'){
        res.status(400).json({message: 'Invalid credentials!'})
    } else if (error.name == 'Unauthorized'){
        res.status(403).json({message: 'Unauthorized!'})
    } else {
        res.status(500).json({message: 'Internal server error!'})
    }
}

module.exports = errorHandler