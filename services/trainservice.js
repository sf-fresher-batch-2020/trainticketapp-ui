class TrainService{
    pass = function (trainNamepass, trainNumberpass) {
      console.log(trainNamepass, trainNumberpass);
      let obj = { "trainName": trainNamepass, "trainNumber": trainNumberpass };
      localStorage.setItem("TRAIN_DETAILS",JSON.stringify(obj));
    }
  
    get = function(caseone){
      var trainTemp = JSON.parse(localStorage.getItem("TRAIN_DETAILS"));
      let trainName = trainTemp.trainName;
      let trainNumber = trainTemp.trainNumber;
      if(caseone=="trainName"){
        console.log(caseone);
        return trainName
      }
      else if(caseone=="trainNumber"){
        console.log(caseone);
        return trainNumber
      }
    }
  }