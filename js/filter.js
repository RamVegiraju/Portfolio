$(document).ready(function(){
    
    function addRemoveClass(theRows){

        theRows.removeClass("odd even");
        theRows.filter(":odd").addClass("odd");
        theRows.filter(":even").addClass("even");
    }
});