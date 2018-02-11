// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4k1ZZKG7RcB9y7pYz_6ft7hKYad01ByU",
    authDomain: "invoker-81031.firebaseapp.com",
    databaseURL: "https://invoker-81031.firebaseio.com",
    projectId: "invoker-81031",
    storageBucket: "invoker-81031.appspot.com",
    messagingSenderId: "781096294736"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
database=firebase.database();

var ref=database.ref('Head Ache');
ref.on('value', gotData,errData);

function gotData(data){
  //console.log(data.val());
  var Tablet=data.val();
  var keys=Object.keys(Tablet);
  var Syrup=data.val();
  var keys2=Object.keys(Syrup);
  console.log(keys);
    console.log(keys2);

  for(var i=0;i<keys.length; i++)
  {
    var k=keys[i];
    var inititials=Tablet[k].inititials;
    var Tab=Tablet[k].Tab;
    console.log(inititials,Tab);
  }
  for(var i=0;i<keys2.length; i++)
  {
    var k=keys[i];
    var inititials=Syrup[k].inititials;
    var Syr=Syrup[k].Tab;
    console.log(inititials,Syr);
  }
}
function errData(err){
  console.log('Error!')
  console.log(err);
}
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var Age = getInputVal('Age');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, Age, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, Age, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    Age:Age,
    email:email,
    phone:phone,
    message:message
  });
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


 // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
