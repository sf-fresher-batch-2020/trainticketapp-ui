class DeleteTrainService{
    delete = function(trainnumber){
       var trainlist = JSON.parse(localStorage.getItem("TRAINSLIST"));
       console.log(trainlist);
       var removeObj;
       trainlist.forEach((trainObj , index) => {
         if(trainObj.trainnumber == trainnumber){
           removeObj = trainObj;
           console.log(removeObj);
         }
       });
       var removeIndex = trainlist.indexOf(removeObj);
       let result;
       if(removeIndex > -1){
         trainlist.splice(removeIndex, 1);
         result = "success"
       }
       else{
         result = "fail";
       }
       localStorage.setItem("TRAINSLIST", JSON.stringify(trainlist));
       return result;
     }
    
   }
   