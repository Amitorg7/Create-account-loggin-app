var firebaseConfig = {
  apiKey: "AIzaSyCbsYRX1nIKtSu18oySnRnJkAcD4uc6HCk",
  authDomain: "registrationform-e60c9.firebaseapp.com",
  databaseURL: "https://registrationform-e60c9.firebaseio.com",
  projectId: "registrationform-e60c9",
  storageBucket: "registrationform-e60c9.appspot.com",
  messagingSenderId: "875705142171",
  appId: "1:875705142171:web:c70a3b7d6ef4f05472af3e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var submitBtn = document.getElementById("signInForm");

function checkLogin() {
  if (window.localStorage.getItem("loginInfo")) {
    window.location.href = "./home.html";
  }
}
function checkLogin2() {
  if (!window.localStorage.getItem("loginInfo")) {
    window.location.href = "./index.html";
  }
}
function redirectToRegis() {
  window.location.href = "./createAccount.html";
}
function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        window.location.href = "./index.html";
        alert("User has been added.");
      })
      .catch(function(error) {
        alert(error.message);
      });

  

}
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "./home.html";
      window.localStorage.setItem("loginInfo", "yes");
      alert("Login successfully.");
    })
    .catch(function(error) {
      alert(error.message);
    });
}
function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.localStorage.setItem("loginInfo", "");
      window.location.href = "./index.html";
      alert("Logout successfully.");
    })
    .catch(function(error) {
      alert(error.message);
    });
}
function saveData() {
  var name = document.getElementById("name").value;
  var number = document.getElementById("number").value;
  var batch = document.getElementById("batch").value;
  var id = document.getElementById("id").value;

  if(name&&number&&batch&&id){
    firebase.database().ref("user").set({
      name: name,
      number: number,
      batch: batch,
      ID: id
  }).then(function(){
    document.getElementById("name").value="";
    document.getElementById("number").value="";
    document.getElementById("batch").value="";
    document.getElementById("id").value="";
  });
}
else{
  alert("Please fill all the input");
}

}
