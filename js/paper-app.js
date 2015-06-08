var fb = new Firebase("https://multidraw.firebaseIO.com/path");
var path;
var pathRef;
var paths = [];
tool.minDistance = 10;
fb.on('child_added', function (snapshot) {
    var sPoint = snapshot.val();
    var nPath = new Path();
    var child = fb.child(snapshot.key());
//    nPath.add(new Point(sPoint.x, sPoint.y));
    nPath.strokeColor = "black";
    
    child.on("child_added", function (newSeg) {
        var newPoint = newSeg.val();
        if (newPoint.end) {
            console.log("new seg ends!");
            child.off();
        } else {
            nPath.add(new Point(newPoint.x, newPoint.y));
        }
    });
});

function onMouseDown(e) {
    //    path=new Path();
    //    path.strokeColor="black";
    //    path.add(e.point);
    pathRef = fb.push();

    pathRef.push({
        x: e.point.x,
        y: e.point.y
    });
}

function onMouseDrag(e) {
    //    path.add(e.point);
    pathRef.push({
        x: e.point.x,
        y: e.point.y
    });
}

function onMouseUp(e) {
    //    path.smooth();
    //    path= new Path();
    pathRef.push({
        end: true
    });
}