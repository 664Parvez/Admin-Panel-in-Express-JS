const loginform = (req, res) => {
    res.render("login", {title: "Login"})
}

const login = async (req, res) => {
    const user = {
        email: "parvez@gmail.com",
        password: "123"
    }

    if (user.email === req.body.email && user.password === req.body.password) {
        res.redirect("/dashboard")
    } else {
        alert("Something is wrong here")
    }

}

module.exports = {loginform, login}