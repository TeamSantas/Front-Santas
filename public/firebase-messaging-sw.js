importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCastD4wzjzV_ABpqjpaPiX1t2d2pkWDiM",
  authDomain: "ddac-e6757.firebaseapp.com",
  databaseURL:
    "https://ddac-e6757-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ddac-e6757",
  storageBucket: "ddac-e6757.appspot.com",
  messagingSenderId: "50350895067",
  appId: "1:50350895067:web:559369e927aac45508c1fe",
  measurementId: "G-478S8PF211",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(firebaseApp);

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification.title;
  const body = payload.notification.body;
  const icon =
    "https://merry-christmas.site/asset_ver2/image/common/title-logo.png";
  const link = "https://merry-christmas.site/";
  const options = { body, icon, link };

  self.registration.showNotification(title, options);
});
