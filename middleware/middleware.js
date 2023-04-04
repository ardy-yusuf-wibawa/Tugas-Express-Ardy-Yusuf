exports.myMiddleware = (req, res, next) => {
    req.model = ('<h1>test</h1>')
    next()
}

exports.isLoggedIn = (req, res, next) => {
    req.model = ('<h1>test</h1>')
    next()
}