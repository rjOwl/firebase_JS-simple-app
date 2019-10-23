var firebaseConfig = {
  apiKey: "past your api-key here",
  authDomain: "your domain here",
  databaseURL: "database url here",
  projectId: "project id",
  storageBucket: "xxxx",
  messagingSenderId: "xxx",
  appId: "xxxx",
  measurementId: "xxxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//
// function get_image_name () {
//    var name = document.getElementById('file-input');
//    const acceptedImageTypes = ['image/jpeg', 'image/png'];
//    alert('Selected file: ' + name.files.item(0).name);
//
//    if (!acceptedImageTypes.includes(name.files.item(0).type)) {
//      alert('Bad file! please Choose a picture.');
//   }
// }
