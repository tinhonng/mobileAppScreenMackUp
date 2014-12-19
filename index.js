/**
 * Created by tinhonng on 12/18/14.
 */
document.addEventListener('DOMContentLoaded', function(){
    drawReportsIcon();
    drawMonitorIcon();
    drawMeIcon();
    drawCheckInIcon();
    drawSetUp();
});

function drawReportsIcon(){
    var reportsCanvas = document.getElementById('reports-canvas');
    var reportsContext = reportsCanvas.getContext('2d');
    reportsContext.scale(2,1);
    //drawing the line-chart-icon
    reportsContext.beginPath();
    reportsContext.moveTo(20, 60);
    reportsContext.lineTo(60, 30);
    reportsContext.moveTo(60, 30);
    reportsContext.lineTo(80, 60);
    reportsContext.moveTo(80, 60);
    reportsContext.lineTo(120, 20);

    reportsContext.moveTo(20, 70);
    reportsContext.lineTo(45, 70);
    reportsContext.moveTo(60, 70);
    reportsContext.lineTo(85, 70);
    reportsContext.moveTo(100, 70);
    reportsContext.lineTo(125, 70);

    reportsContext.moveTo(20,  80);
    reportsContext.lineTo(45, 80);
    reportsContext.moveTo(60, 80);
    reportsContext.lineTo(85, 80);
    reportsContext.moveTo(100, 80);
    reportsContext.lineTo(125, 80);

    reportsContext.lineWidth = '1';
    reportsContext.strokestyle = 'black';

    reportsContext.stroke();
    reportsContext.closePath();

    reportsContext.beginPath();
    reportsContext.arc(20, 60, 4, 0,  2* Math.PI, false);
    reportsContext.stroke();
    reportsContext.closePath();
    reportsContext.fill();

    reportsContext.beginPath();
    reportsContext.arc(60, 30, 4, 0,  2* Math.PI, false);
    reportsContext.stroke();
    reportsContext.closePath();
    reportsContext.fill();

    reportsContext.beginPath();
    reportsContext.arc(80, 60, 4, 0,  2* Math.PI, false);
    reportsContext.stroke();
    reportsContext.closePath();
    reportsContext.fill();

    reportsContext.beginPath();
    reportsContext.arc(120, 20, 4, 0,  2* Math.PI, false);
    reportsContext.stroke();
    reportsContext.closePath();
    reportsContext.fill();
    //reportsContext.font = "0.5px Georgia";
    //reportsContext.fillText("Reports", 1, 1);

}

function drawMonitorIcon(){
    var monitorCanvas = document.getElementById('monitor-canvas');
    var monitorContext = monitorCanvas.getContext('2d');

    monitorContext.beginPath();
    monitorContext.moveTo(70, 70);
    monitorContext.lineTo(120, 55);
    monitorContext.moveTo(120, 55);
    monitorContext.lineTo(140, 50);
    monitorContext.moveTo(140, 50);
    monitorContext.lineTo(140, 70);
    monitorContext.moveTo(140, 70);
    monitorContext.lineTo(160, 30);
    monitorContext.moveTo(160, 30);
    monitorContext.lineTo(170, 85);
    monitorContext.moveTo(170, 85);
    monitorContext.lineTo(185, 50);
    monitorContext.moveTo(185, 50);
    monitorContext.lineTo(195, 65);
    monitorContext.moveTo(195, 65);
    monitorContext.lineTo(205, 60);
    monitorContext.moveTo(205, 60);
    monitorContext.lineTo(225, 60);
    monitorContext.lineWidth = '3';
    monitorContext.strokestyle = 'black';

    monitorContext.stroke();
    monitorContext.closePath();

}

function drawMeIcon(){
    var meCanvas = document.getElementById('me-canvas');
    var meContext = meCanvas.getContext('2d');
    meContext.scale(2,1);
    meContext.beginPath();
    meContext.arc(80, 70, 15, 0,  2* Math.PI, false);
    meContext.stroke();
    meContext.fill();
    meContext.closePath();

    meContext.beginPath();
    meContext.moveTo(60,80);
    meContext.bezierCurveTo(60, 80, 80, 100, 100, 80);
    meContext.bezierCurveTo(100, 80, 110, 95, 105, 115);
    meContext.bezierCurveTo(105,115, 80, 115, 55,115);
    meContext.bezierCurveTo(55,115, 45,95, 60, 80)
    meContext.fill();
    meContext.stroke();

    meContext.closePath();
}

function drawCheckInIcon(){
    var checkInCanvas = document.getElementById('check-in-canvas');
    var checkInContext = checkInCanvas.getContext('2d');
    checkInContext.lineWidth = '8';
    checkInContext.scale(2,1);
    checkInContext.beginPath();
    checkInContext.arc(75, 75, 40, 0,  2* Math.PI, false);
    checkInContext.stroke();
    checkInContext.closePath();

    checkInContext.beginPath();
    checkInContext.moveTo(62,62);
    checkInContext.bezierCurveTo(62, 62, 65, 65, 75, 85);
    checkInContext.bezierCurveTo(75, 85, 78, 78, 110, 40);
    checkInContext.stroke();
    checkInContext.closePath();
}

function drawSetUp(){
    var setUpCanvas = document.getElementById('set-up-canvas');
    var setUpContext = setUpCanvas.getContext('2d');
    setUpContext.lineWidth = '2';
    setUpContext.scale(2,1);
    setUpContext.beginPath();
    setUpContext.arc(70, 60, 15, 0,  2* Math.PI, false);
    setUpContext.stroke();
    setUpContext.closePath();

    setUpContext.beginPath();
    setUpContext.arc(40, 40, 10, 0,  2* Math.PI, false);
    setUpContext.stroke();
    setUpContext.closePath();

    setUpContext.beginPath();
    setUpContext.arc(40, 80, 10, 0,  2* Math.PI, false);
    setUpContext.stroke();
    setUpContext.closePath();
}