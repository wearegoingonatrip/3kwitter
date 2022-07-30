// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvVkUBCBF96fPfl1nzvV6cncsutJ3PrMI",
    authDomain: "kwitter-253df.firebaseapp.com",
    projectId: "kwitter-253df",
    storageBucket: "kwitter-253df.appspot.com",
    messagingSenderId: "885584648149",
    appId: "1:885584648149:web:b0feecdbf3af4547db8f5c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome"+ user_name +"!";

  function addroom(
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"

    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";

  )