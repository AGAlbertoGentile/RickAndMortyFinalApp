const myDataValidation = require('../utils/users');

function logValidation(req, res) {
    const { email, password } = req.query;
    console.log(email, password);
    return myDataValidation.some((user) => user.email === email && user.password === password) // el 'some' solo devuelve true or false
        ? res.status(200).json({ access: true })
        : res.status(404).json({ access: false })
};

module.exports = {
    logValidation,
}