var firebaseConfig = {
      apiKey: "AIzaSyCvtVfQWoV1ajYHdNQbK5SAQgnXkQ_uT1E",
      authDomain: "class-test-2258c.firebaseapp.com",
      projectId: "class-test-2258c",
      storageBucket: "class-test-2258c.appspot.com",
      messagingSenderId: "733411589347",
      appId: "1:733411589347:web:0021dac1aa59f2ccd759d6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update ({
        purpose : "adding user"
    }); 
}

const firebaseConfig = {
    apiKey: "AIzaSyAg8hrp0Q0NsvbfptF9b5vsw5ETfkyx6EM",
    authDomain: "classtest-7d7fa.firebaseapp.com",
    databaseURL: "https://classtest-7d7fa-default-rtdb.firebaseio.com",
    projectId: "classtest-7d7fa",
    storageBucket: "classtest-7d7fa.appspot.com",
    messagingSenderId: "576124603370",
    appId: "1:576124603370:web:22b66723acb3359c378093",
    measurementId: "G-082JLZ9Q21"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS