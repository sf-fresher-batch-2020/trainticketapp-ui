class TrainListService {
  retrieve = function () {
    var trains = JSON.parse(localStorage.getItem('TRAINSLIST'));
    var trainList = trains ? trains : [];
    if (trainList.length == 0) {
      let trainsLIST = [
        { "trainnumber": "1239", "trainname": "Rajdhani", "departurestation": "delhi", "arrivalstation": "chennai", "duration": "28hrs" },
        { "trainnumber": "2784", "trainname": "Shatabdi", "departurestation": "madurai", "arrivalstation": "delhi", "duration": "41hrs" },
        { "trainnumber": "8763", "trainname": "chennai-madurai Express", "departurestation": "chennai", "arrivalstation": "madurai", "duration": "7hrs 40min" },
        { "trainnumber": "5407", "trainname": "chennai-mail", "departurestation": "pune", "arrivalstation": "chennai", "duration": "18hrs" },
        { "trainnumber": "3271", "trainname": "vaigai express", "departurestation": "trichy", "arrivalstation": "chennai", "duration": "5hrs 30mins" }];
      localStorage.setItem("TRAINSLIST", JSON.stringify(trainsLIST));
      var trainList = JSON.parse(localStorage.getItem('TRAINSLIST'));
    }
    return trainList;
  }
}