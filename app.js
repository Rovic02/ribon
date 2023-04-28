const firebaseConfig = {
  apiKey: "AIzaSyDKo58Dul667GIPdm87TP0BV03rSavs_L4",
  authDomain: "act-1-923a7.firebaseapp.com",
  databaseURL: "https://act-1-923a7-default-rtdb.firebaseio.com",
  projectId: "act-1-923a7",
  storageBucket: "act-1-923a7.appspot.com",
  messagingSenderId: "718744439409",
  appId: "1:718744439409:web:6e4e0ead61fb9a107f69d0",
  measurementId: "G-P5CL27V1EB"
};
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Get a reference to the table
  var table = document.getElementById('table');
  
  // Function to fetch all data from Firebase and display it in the table
  function fetchData() {
    var ref = database.ref('users');
    ref.on('value', function(snapshot) {
      // Clear the table first
      table.innerHTML = '<thead><tr><th>First Name</th><th>Last Name</th><th>Username</th><th>Password</th><th>Favorite Subject</th></tr></thead><tbody>';
  
      // Loop through the data and add each row to the table
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        table.innerHTML += '<tr><td>' + childData.firstname + '</td><td>' + childData.lastname + '</td><td>' + childData.username + '</td><td>' + childData.password + '</td><td>' + childData.favourite_subject + '</td></tr>';
      });
  
      // Close the table body
      table.innerHTML += '</tbody>';
    });
  }
  
  // Call the fetchData function to display the data when the page loads
  fetchData();