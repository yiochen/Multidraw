// Create a Paper.js Path to draw a line into it:
var path = new Path();
path.strokeColor="black";
path.add(new Point(30,75), new Point(30,25), new Point(80,25), new Point(80,75));
path.closed=true;

path.fullySelected=true;
tool.minDistance=20;
var copy=path.clone();
copy.fullySelected=true;
copy.position.x+=100;

copy.smooth();

var circle=new Path.Circle(new Point(100,70),50);
circle.fillColor='black';
circle.fullySelected=true;

var rect=new Rectangle(new Point(50,50), new Point(150,100));
var rectangle=new Path.Rectangle(rect);
rectangle.fillColor="#e9e9ff";
rectangle.selected=true;
var cornerSize=new Size(20,20);
var cornerRect=new Path.RoundRectangle(rect,cornerSize);
cornerRect.fillColor="red";
cornerRect.selected=true;
cornerRect.removeSegment(1);

var triangle=new Path.RegularPolygon(new Point(80,70),3,50);
triangle.fillColor="green";
triangle.remove();

var myPath=new Path();
myPath.add(new Point(200,10),new Point(300,50),new Point(350,10));
myPath.strokeColor=new Color(0.5,0.5,0);
myPath.strokeWidth=10;
myPath.strokeCap="round";//or square or butt
myPath.strokeJoin="round";//or miter or bevel
myPath.dashArray=[10,12];
myPath.smooth();
function onMouseDrag(event){
    myPath.add(event.point);
}
function onMouseUp(event){
    myPath.simplify();
    myPath.smooth();
}
var fullRect=new Rectangle(new Point(0,0), view.size);
var fullRectangle=new Path.Rectangle(fullRect);
fullRectangle.fillColor="blue";
//myPath.fullySelected=true;
//path.smooth();
	// Give the stroke a color
//	path.strokeColor = 'black';
//	var start = new Point(100, 100);
//	// Move to start and draw a line from there
//	path.moveTo(start);
//	// Note the plus operator on Point objects.
//	// PaperScript does that for us, and much more!
//	path.lineTo(start + [ 100, -50 ]);
//    
//    var path2=new Path.Circle({
//        center: view.center,
//        radius: 30,
//        strokeColor: 'black'
//    });
//    function onResize(event){
//        path2.position=view.center;
//    }