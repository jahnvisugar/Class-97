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
//ADD YOUR FIREBASE LINKS HERE
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function add_room()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name: " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
