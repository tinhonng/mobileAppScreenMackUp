/**
 * Created by tinhonng on 12/18/14.
 */
document.addEventListener('DOMContentLoaded', function(){
    drawReportsIcon();
    drawMonitorIcon();
});

function drawReportsIcon(){
    var reportsCanvas = document.getElementById('reports-canvas');
    var reportsContext = reportsCanvas.getContext('2d');

    //drawing the line-chart-icon
    reportsContext.beginPath();
    reportsContext.moveTo(60, 60);
    reportsContext.lineTo(100, 30);
    reportsContext.moveTo(100, 30);
    reportsContext.lineTo(140, 60);
    reportsContext.moveTo(140, 60);
    reportsContext.lineTo(200, 20);

    reportsContext.moveTo(60,  70);
    reportsContext.lineTo(100, 70);
    reportsContext.moveTo(110, 70);
    reportsContext.lineTo(150, 70);
    reportsContext.moveTo(160, 70);
    reportsContext.lineTo(200, 70);

    reportsContext.moveTo(60,  80);
    reportsContext.lineTo(100, 80);
    reportsContext.moveTo(110, 80);
    reportsContext.lineTo(150, 80);
    reportsContext.moveTo(160, 80);
    reportsContext.lineTo(200, 80);

    reportsContext.lineWidth = '3';
    reportsContext.strokestyle = 'black';

    reportsContext.stroke();
    reportsContext.closePath();

    reportsContext.beginPath();
    reportsContext.arc(60, 60, 4, 0,  2* Math.PI, false);
    reportsContext.stroke();
    reportsContext.closePath();
    reportsContext.fill();

    reportsContext.beginPath();
    reportsContext.arc(100, 30, 4, 0,  2* Math.PI, false);
    reportsContext.stroke();
    reportsContext.closePath();
    reportsContext.fill();

    reportsContext.beginPath();
    reportsContext.arc(140, 60, 4, 0,  2* Math.PI, false);
    reportsContext.stroke();
    reportsContext.closePath();
    reportsContext.fill();

    reportsContext.beginPath();
    reportsContext.arc(200, 20, 4, 0,  2* Math.PI, false);
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
    monitorContext.moveTo(70, 60);
    monitorContext.lineTo(100, 50);
    monitorContext.moveTo(100, 50);
    monitorContext.lineTo(110, 40);
    monitorContext.moveTo(110, 40);
    monitorContext.lineTo(120, 60);
    monitorContext.moveTo(120, 60);
    monitorContext.lineTo(130, 20);
    monitorContext.moveTo(130, 20);
    monitorContext.lineTo(140, 75);
    monitorContext.moveTo(140, 75);
    monitorContext.lineTo(155, 40);
    monitorContext.moveTo(155, 40);
    monitorContext.lineTo(165, 55);
    monitorContext.moveTo(165, 55);
    monitorContext.lineTo(175, 50);
    monitorContext.moveTo(175, 50);
    monitorContext.lineTo(195, 50);
    monitorContext.lineWidth = '3';
    monitorContext.strokestyle = 'black';

    monitorContext.stroke();
    monitorContext.closePath();



}