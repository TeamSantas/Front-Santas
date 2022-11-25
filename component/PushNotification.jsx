import { useEffect } from 'react';
import firebase from "firebase";

const PushNotification = () => {
  const onMessageFCM = async () => {
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') return 
    
    const firebaseApp = {
      apiKey : process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORABEBUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseApp);  
    } else {
      firebase.app();
    }

    const messaging = firebase.messaging()
 
    messaging.getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID }).then((currentToken) => {
      if (currentToken) {
        console.log(currentToken)
      } else {
        console.log('No registration token available. Request permission to generate one.')
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
    })
 
    messaging.onMessage((payload) => {
      console.log('Message received. ', payload)
      const title = payload.notification.title;
      const body = payload.notification.body;
      const icon = "https://cdn.mkhealth.co.kr/news/photo/202102/52163_52859_5928.jpg";
      const options = { body, icon };

      new Notification(title, options);
    })
  }
 
  useEffect(() => {
    onMessageFCM()
  }, [])
  
  return(
    <></>
  )
}
export default PushNotification;