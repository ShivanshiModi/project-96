
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDqWQQAGLClv9iTajPv_8knIkHSeZ7oM7Q",
      authDomain: "kwitter-ebace.firebaseapp.com",
      databaseURL: "https://kwitter-ebace-default-rtdb.firebaseio.com",
      projectId: "kwitter-ebace",
      storageBucket: "kwitter-ebace.appspot.com",
      messagingSenderId: "723692538128",
      appId: "1:723692538128:web:952beefc7f425eeb56fd95"
    };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function add_room()
      {function getData() 
            {
                  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
                  Room_names = childKey;
            //Start code
                  console.log("room names are" + Room_names );
                  row = "<div class='room_name' id =  " + Room_names + "onclick ='redirect_to_room_name(this.id)' ># " + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  room_name = document.getElementById("room_name").value;
                  firebase.database().ref("/").child(room_name).update({
                  purpose: "Room Name"
                  });
                   localStorage.setItem("room_name" , room_name);
                  window.location = "Kwitter_page.html";
            //End code
            });});}
            getData();
      }

      

function redirect_to_room_name(name)
{
      localStorage.setItem("room_name" , name);
      window.location = "Kwitter_page.html";
}

function log_out()
{
      localStorage.removeItem("user_id");
      localStorage.removeItem("room_id");
      window.location = "index.html";
}