class SearchService{
 search = function(userObj){
       var usersTemp = JSON.parse(localStorage.getItem("STATIONS"));
       var stations= usersTemp ? usersTemp:[];
       stations.push(userObj);
       localStorage.setItem("STATIONS",JSON.stringify(stations));
       let result="success";
       return result;
        }
}