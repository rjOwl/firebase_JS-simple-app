# firebase_JS-simple-app
Using firebase with JS for a simple coffe app; listing types of coffes and their prices through a simple interface
![alt text](screen3.PNG "Product Screenshot")


# Firebase basic setup
There are two parts:
#### 1- Adding the following to your index.html in the <head> TAG
        <script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-firestore.js"></script>
#### 2- Adding the config to,
- Either to the end of your index.html like this:

        <script>
        var firebaseConfig = {
        apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        appId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        measurementId: "xxxxxxxxxxxxxxxxxxxxxxxxxx"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        </script>

- Or for better design, create a firebaseConfig.js then use the variable:

        var firebaseConfig = {
        apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        authDomain: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        appId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
        measurementId: "xxxxxxxxxxxxxxxxxxxxxxxxxx"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);




[For GitHub readme tricks visit this cool cheatsheet.](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

