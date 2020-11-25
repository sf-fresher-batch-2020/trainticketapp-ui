class CheckLoginService {
    check = function () {
        let user = localStorage.getItem("LOGGED_IN_USER");
        let loggedInUser = user ? JSON.parse(user) : null;
        console.log("AuthGuard", user);
        //  If LoggedIn, check the role
        if (loggedInUser) {
            //If the role is "Admin" , allow to the page, else show message and block page navigation.
            if (loggedInUser.role == "admin") {
                return true;
            }
            else {
                return false;
            }
        }

        else {
            return false;
        }
    }
}