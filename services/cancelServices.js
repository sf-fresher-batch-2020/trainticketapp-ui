class CancelService{
 cancels = function(ticketID){
    var ticketBooking = JSON.parse(localStorage.getItem("BOOKINGS"));
    console.log(ticketBooking);
    var removeObj;
    ticketBooking.forEach((ticketObj , index) => {
      if(ticketObj.ticketId == ticketID){
        removeObj = ticketObj;
        console.log(removeObj);
      }
    });
    var removeIndex = ticketBooking.indexOf(removeObj);
    let result;
    if(removeIndex > -1){
      ticketBooking.splice(removeIndex, 1);
      result = "success"
    }
    else{
      result = "fail";
    }
    localStorage.setItem("BOOKINGS", JSON.stringify(ticketBooking));
    return result;
  }
 
}
