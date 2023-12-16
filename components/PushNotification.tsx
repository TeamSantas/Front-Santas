import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import SettingService from "../api/SettingService";

const PushNotification = () => {
  const onMessageFCM = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

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
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Cloud Messaging and get a reference to the service
    const messaging = getMessaging(app);

    getToken(messaging, {
      vapidKey:
        "BBPJBtEDFqPTdSaHAPZKnM0JikkLXLIfW9ax7qH3UvTe-RtxNK-6aNQv0N_-zqg1Y9l1IhM7q6Vi2qL9ZoMhEng",
    })
      .then((currentToken) => {
        if (currentToken) {
          SettingService.setFcmtoken(currentToken);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    onMessage(messaging, (payload) => {
      const title = payload.notification.title;
      const body = payload.notification.body;
      const icon =
        "https://merry-christmas.site/asset_ver2/image/common/title-logo.png";
      const link = "https://merry-christmas.site/";
      const options = { body, icon, link };

      new Notification(title, options);
    });
  };

  useEffect(() => {
    onMessageFCM();
  }, []);

  return <></>;
};
export default PushNotification;
