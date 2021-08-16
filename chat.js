var firebaseConfig = {
    apiKey: "AIzaSyBoGzP0I7Eyy0dLNFVPpfHNNMY24O3zyYI",
    authDomain: "kwitter-83a11.firebaseapp.com",
    databaseURL: "https://kwitter-83a11-default-rtdb.firebaseio.com",
    projectId: "kwitter-83a11",
    storageBucket: "kwitter-83a11.appspot.com",
    messagingSenderId: "666103998186",
    appId: "1:666103998186:web:0eba54d977f34c5074d993",
    measurementId: "G-XGJR8RKS51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var names = localStorage.getItem('user_name');
document.getElementById("user-names").innerHTML = "Welcome " + names;

function addRoom() {
    var input = document.getElementById("roomI").value;

    firebase.database().ref("/").child(input).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room-name" , input);
    window.location = "message.html";
}

function getData(){
    firebase.database().ref("/").on("value", function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(child => {
            childKey = child.key;

            room_name = childKey;
            console.log(room_name);

            html = "<h2 id='"+room_name+"' class='room-name' onclick='redirect(this.id)'>"+room_name+"</h2> <hr>";
            document.getElementById("output").innerHTML += html;
        });
    });
}

function redirect(name) {
    localStorage.setItem("room-name", name);
    window.location = "message.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room-name");

    window.location = "index.html";
}

getData();