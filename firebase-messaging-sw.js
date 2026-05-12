importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyAx1Tg2V-OSBfUAvw5-LxL-iyyWb5pbcRQ",
  authDomain: "mageri-uchumi-daima.firebaseapp.com",
  projectId: "mageri-uchumi-daima",
  storageBucket: "mageri-uchumi-daima.appspot.com",
  messagingSenderId: "670762770974",
  appId: "1:670762770974:web:32b326c8c6ef0a273f040f"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || "MAGERI UCHUMI";
  const notificationOptions = {
    body: payload.notification.body || "Una ujumbe mpya",
    icon: './icon-192.png',
    badge: './icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
