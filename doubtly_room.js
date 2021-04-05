
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBvs2OUa9w9z9UFW8g3MqiyB0yY3Av4u-Y",
  authDomain: "let-s-chat-app-18f5d.firebaseapp.com",
  databaseURL: "https://let-s-chat-app-18f5d-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-app-18f5d",
  storageBucket: "let-s-chat-app-18f5d.appspot.com",
  messagingSenderId: "919069715263",
  appId: "1:919069715263:web:fd9a0bc349d086577c418a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose:"add room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location="doubtly_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log(Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
        document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="doubtly_page.html";
}
