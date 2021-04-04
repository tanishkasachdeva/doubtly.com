
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBvs2OUa9w9z9UFW8g3MqiyB0yY3Av4u-Y",
    authDomain: "let-s-chat-app-18f5d.firebaseapp.com",
    projectId: "let-s-chat-app-18f5d",
    storageBucket: "let-s-chat-app-18f5d.appspot.com",
    messagingSenderId: "919069715263",
    appId: "1:919069715263:web:b547cee00a970faf7c418a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
