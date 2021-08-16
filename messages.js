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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room-name");

function send() {
    msg = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
        like: 0,
        message: msg,
        name: user_name
    });

    document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room-name");

    window.location = "index.html";
}
