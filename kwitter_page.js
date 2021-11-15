//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCRAMmxDn5xZUN1fpBXwnhWq_sHQs4MLG0",
      authDomain: "kwitter-66573.firebaseapp.com",
      databaseURL: "https://kwitter-66573-default-rtdb.firebaseio.com",
      projectId: "kwitter-66573",
      storageBucket: "kwitter-66573.appspot.com",
      messagingSenderId: "91959221894",
      appId: "1:91959221894:web:2b8460eb938caaf9c4bb07"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var username = localStorage.getItem("user_name");
    var room_name = localStorage.getItem("room_name");

    function send()
    {
          var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name: username, 
      message: msg, 
      likes:0
      });
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


console.log(firebase_message_id);
console.log(message_data);
var name = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button ="<button class ='btn btn-warning' id ="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up' > like:"+ like +"</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updatelike(message_id)
{
console.log("Clicked On Liked Button-"+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like: updated_likes
});
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

