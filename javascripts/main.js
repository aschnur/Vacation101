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
