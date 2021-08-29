module.exports = {
    admin: (req, res) => {
		return res.render('admin')
	},
	register: (req, res) => {
		return res.render('register')
	},
    login: (req, res) => {
		return res.render('login')
	}
};


