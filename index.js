//var dragging = false;
//var pY=0;
//var cX=0;
//var cY=0;
//var degree = 0;
//
//$(function() {
//    var target = $('#circleTop');
//    target.mousedown(function() {
//        dragging = true;
//    });
//    $(document).mouseup(function() {
//        dragging = false;
//    });
//    $(document).mousemove(function(e) {
//        if (dragging) {
//            var cY = e.clientY;
//            if(cY > pY)
//                degree = degree + 2;
//            else
//                degree = degree - 2;
//            target.css('-moz-transform', 'rotate(' + degree + 'deg)');
//            target.css('-moz-transform-origin', '50% 50%');
//            target.css('-webkit-transform', 'rotate(' + degree + 'deg)');
//            target.css('-webkit-transform-origin', '50% 50%');
//            target.css('-o-transform', 'rotate(' + degree + 'deg)');
//            target.css('-o-transform-origin', '50% 50%');
//            target.css('-ms-transform', 'rotate(' + degree + 'deg)');
//            target.css('-ms-transform-origin', '50% 50%');
//            pY = cY;
//        }
//    });
//});
var circleTop = {id: 'circleTop', dragging:false, pY:0, degree: 0, direction: 1} ;
var circleBottom = {id: 'circleBottom', dragging:false, pY:0, degree:0, direction: -1};
var currentCircle;
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('mousedown', function(event){
       if(event.target.getAttribute('id') === "circleTop"){
           currentCircle = circleTop;
       }else if(event.target.getAttribute('id') === "circleBottom"){
           currentCircle = circleBottom;
       }
        currentCircle.dragging = true;
    });
    document.addEventListener('mouseup', function(event){
        currentCircle.dragging = false;
    })
    document.addEventListener('mousemove', function(e){
        if(currentCircle && currentCircle.dragging){
            var cY = e.clientY;
            if (cY > currentCircle.pY)
                currentCircle.degree = currentCircle.degree + 2 * currentCircle.direction;
            else
                currentCircle.degree = currentCircle.degree - 2 * currentCircle.direction;
            document.getElementById(currentCircle.id).style.transform = 'rotate(' + currentCircle.degree + 'deg)';
            currentCircle.pY = cY;
        }
    });
});