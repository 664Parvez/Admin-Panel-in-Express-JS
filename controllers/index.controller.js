
const year_date = new Date().getFullYear()

const home = (req, res) => {

    res.render("index", {title: "Home", year: year_date})
}


module.exports = home