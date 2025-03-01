importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAHwnYs4s9aALUkTttyursd2l3zoBbHr04",
    authDomain: "fir-d5f88.firebaseapp.com",
    projectId: "fir-d5f88",
    storageBucket: "fir-d5f88.firebasestorage.app",
    messagingSenderId: "640512630602",
    appId: "1:640512630602:web:2fb7a49b1589b02864ebb3",
    measurementId: "G-0W7WWS6H3N"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Xử lý thông báo khi app ở chế độ background
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
