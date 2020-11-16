class RegisterService {
    register = function (userObj) {
      console.log(userObj)
      var usersTemp = JSON.parse(localStorage.getItem("USERS"));
      var users = usersTemp ? usersTemp : [];
      //validating emailaddress if already exists
      let emailAlreadyExists = false;
      console.log(users)
      if (users.length == 0) {
        console.log("inside if")
        users.push(userObj);
        localStorage.setItem("USERS", JSON.stringify(users));
        let result = "success";
        return result;
      }
  
      let isPresent = false;
  
      for (let obj of users) {
        console.log("insidefor")
        if (userObj.email == obj.email) {
          console.log(emailAlreadyExists)
          emailAlreadyExists = true;
          alert("Email already registered");
          isPresent = true;
          break;
        }
      }
  
      if (isPresent == false) {
        console.log("inside else")
        users.push(userObj);
        localStorage.setItem("USERS", JSON.stringify(users));
        let result = "success";
        return result;
  
      }
      else if(isPresent == true) {
        let result = "fail";
        return result;
      }
    }
  }