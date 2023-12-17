importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js"
);

// const config = {
//   apiKey: "AIzaSyCastD4wzjzV_ABpqjpaPiX1t2d2pkWDiM",
//   authDomain: "ddac-e6757.firebaseapp.com",
//   databaseURL:
//     "https://ddac-e6757-default-rtdb.asia-southeast1.firebasedatabase.app/",
//   projectId: "ddac-e6757",
//   storageBucket: "ddac-e6757.appspot.com",
//   messagingSenderId: "50350895067",
//   appId: "1:50350895067:web:559369e927aac45508c1fe",
//   measurementId: "G-478S8PF211",
// };

// firebase.initializeApp(config);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   const title = payload.notification.title;
//   const body = payload.notification.body;
//   const icon =
//     "https://merry-christmas.site/asset_ver2/image/common/title-logo.png";
//   const link = "https://merry-christmas.site/";
//   const options = { body, icon, link };

//   self.registration.showNotification(title, options);
// });

self.addEventListener('push', (event) => {
  const payload = event.data?.json();

  const title = payload.notification.title;
  const body = payload.notification.body;
  const icon =
    "https://merry-christmas.site/asset_ver2/image/common/title-logo.png";
  const link = "https://merry-christmas.site/";
  const options = { body, icon, link };

  // new Notification(title, options);
  registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  self.clients.openWindow('https://merry-christmas.site/');
});

console.log(registration, "2");