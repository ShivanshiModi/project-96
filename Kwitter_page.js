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

    user_id = localStorage.getItem("user_name");
    room_id = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_id).push({
                name:user_id,
                message:msg,
                like:0
                
          });

          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_id).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+ name + "<img class='user_tick'src='tick.png'> </h4>";
      message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
      like_button = "<button class='btn btn-warning' id="+ firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like+ "</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("like button cliked" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_Like = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({ 
            like : updated_Likes });

}

function logout()
{
      localStorage.removeItem("user_id");
      localStorage.removeItem("room_id");
      window.location = "index.html";
}