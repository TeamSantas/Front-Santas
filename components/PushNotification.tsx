import { useEffect } from "react";
import SettingService from "../api/SettingService";
import { onMessage, getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORABEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const PushNotification = () => {
  const onMessageFCM = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") return;

      // Initialize Firebase Cloud Messaging and get a reference to the service
      const firebaseApp = initializeApp(firebaseConfig);
      const messaging = getMessaging(firebaseApp);

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
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    onMessageFCM();
  }, []);

  return <></>;
};
export default PushNotification;
