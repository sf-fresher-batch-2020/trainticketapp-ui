class AddTrainService {
    add = function (trainObj) {
        console.log(trainObj)
        var trainsTemp = JSON.parse(localStorage.getItem("TRAINSLIST"));
        var trains = trainsTemp ? trainsTemp : [];
        //validating trainnumber if already exists
        let trainnumberAlreadyExists = false;
        console.log(trains)
        if (trains.length == 0) {
            console.log("inside if")
            trains.push(trainObj);
            localStorage.setItem("TRAINSLIST", JSON.stringify(trains));
            let result = "success";
            return result;
        }

        let isPresent = false;

        for (let obj of trains) {
            console.log("insidefor")
            if (trainObj.trainnumber == obj.trainnumber) {
                console.log(trainnumberAlreadyExists)
                trainnumberAlreadyExists = true;
                alert("This train already exists");
                isPresent = true;
                break;
            }
        }

        if (isPresent == false) {
            console.log("inside else")
            trains.push(trainObj);
            localStorage.setItem("TRAINSLIST", JSON.stringify(trains));
            let result = "success";
            return result;

        }
        else if (isPresent == true) {
            let result = "fail";
            return result;
        }
    }
}
