module.exports = {
    get: {
        home : (req,res) => res.render("home.ejs"),
        register : (req,res) => res.render("register.ejs"),
        login : (req,res) => res.render("login.ejs")
    },
    post:{
        registerForm: (req,res) => {
            try {
                const data = req.body
                
            } catch (error) {
                
            }
        },
        
        loginForm:(req,res) => {
            try {
                const data = req.body
                
            } catch (error) {
                
            }
        }

    }
}