console.log('This would be the main JS file.');
 // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

var commentsRef = firebase.database().ref('post-comments/' + postId);
commentsRef.on('child_added', function(data) {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});

commentsRef.on('child_changed', function(data) {
  setCommentValues(postElement, data.key, data.val().text, data.val().author);
});

commentsRef.on('child_removed', function(data) {
  deleteComment(postElement, data.key);
});


function validateForm()
{
    if(document.frm.username.value=="srinu")
    {
        $.ajax({
            type: 'GET',
            url: 'validateuser?username=document.frm.username.value' + '&Pwd=' + document.frm.userpassword.value,
            success: function (data) {                   
                if (data=='Y')
                    alert('Valid User');
                else
                    alert('Invalid User');
            }, cache: false,
            error: function (xhr, ajaxOptions, thrownError) {
                alert('failed.');
            }
            });
    }
}

$.ajax({
     dataType: 'json',
     contentType: 'application/json; charset=utf-8',
     url: INSTANCE_HOST + '/api/v2/user/session',
     data: JSON.stringify({
          'email': email,
          'password': password
          }),
     method: 'POST',
     success: function (response) {
          // Handle success
     },
     error: function (response) {
          // Handle error
     }
 
 var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close; 
       
        <script>
    var objConnection = new ActiveXObject("adodb.connection");
    var strConn = "driver={sql server};server=QITBLRQIPL030;database=adventureworks;uid=sa;password=12345";
    objConnection.Open(strConn);
    var rs = new ActiveXObject("ADODB.Recordset");
    var strQuery = "SELECT * FROM  Person.Address";
    rs.Open(strQuery, objConnection);
    rs.MoveFirst();
    while (!rs.EOF) {
        document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(rs.fields(2) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
        document.write(rs.fields(3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
        document.write(rs.fields(4) + "<br/>");
        rs.movenext();
    }
</script>

<script>
var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("demo").innerHTML = days[d.getDay()];
</script>
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = " Vacation101";
} else {
    text = "Vacation101.";
}
document.getElementById("demo").innerHTML = text;



function addWorkout() {
	//search reading
	//if user has no database create database using writeUserData
	plan = document.getElementById("# of days").value;

	var activities = document.getElementById("# of activities").value;
	var meals = document.getElementById("# of meals").value;
	var seconds = document.getElementById("seconds").value;
	seconds =parseFloat(seconds);
	//seconds = parseInt(seconds);
	time = hours + minutes + seconds;
	
	var split = document.getElementById("splitLength").value;
	numOfSplit = distance/500;
	numOfSplit = time/numOfSplit;
	var i = parseInt(numOfSplit/60);
	var t = numOfSplit%60;
	t = Math.round(t * 10) / 10;

	if (t < 10) {
		t = "0" + t;
	}

	numOfSplit = i + ":" + t;


	
	//writeNewPost(date, distance, time, split);
	updateTable();
}
	
function updateTable() {
	var table = document.getElementById("wOuts");
	var row = table.insertRow(rowNum);
	rowNum++;
	var cellDate = row.insertCell(0);
	var cellDistance = row.insertCell(1);
	var cellTime = row.insertCell(2);
	var cellSplit = row.insertCell(3);

	cellDate.innerHTML = today;
	cellDistance.innerHTML = distance;
	cellTime.innerHTML = time;
	cellSplit.innerHTML = numOfSplit;
}
