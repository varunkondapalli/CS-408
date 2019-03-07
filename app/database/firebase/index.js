import firebase from 'firebase';

<script src="https://www.gstatic.com/firebasejs/5.8.1/firebase.js"></script>
  // Initialize Firebase
  try {
  var config = {
    apiKey: "AIzaSyD8_EtFVwcx32LGYRZu0bguLZ9jOY59a-0",
    authDomain: "ball-r-leagues.firebaseapp.com",
    databaseURL: "https://ball-r-leagues.firebaseio.com",
    projectId: "ball-r-leagues",
    storageBucket: "ball-r-leagues.appspot.com",
    messagingSenderId: "1055794987233"
  };
  firebase.initializeApp(config);
}
catch (e) {

}
export var googleProvider = new firebase.auth.GoogleAuthProvider();
  export var firebaseRef = firebase.database().ref();
