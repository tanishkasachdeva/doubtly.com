//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name: user_name,
  message:msg,
  like:0
});

}