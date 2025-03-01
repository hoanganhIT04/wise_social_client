import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHwnYs4s9aALUkTttyursd2l3zoBbHr04",
    authDomain: "fir-d5f88.firebaseapp.com",
    projectId: "fir-d5f88",
    storageBucket: "fir-d5f88.firebasestorage.app",
    messagingSenderId: "640512630602",
    appId: "1:640512630602:web:2fb7a49b1589b02864ebb3",
    measurementId: "G-0W7WWS6H3N"
};
  

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Cloud Messaging
const messaging = getMessaging(app);

// Request notification permission from user.
export const requestPermission = async () => {
    try {
        const currentToken = await getToken(messaging, {
            vapidKey: "BBMT7aFoB4JM2zfe2RvplCvbpHJ-noEFonjmyYpflBVoYOoMhf4Ofb_vilUyPlfjeSN3hIjyVVHQJ9C2OwtGTDQ",
          });
        return currentToken;
    } catch (error) {
        console.error("Cannot get token: :", error);
    }
};

// Listen for messages from FCM while the page is open
export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        console.log("Message received:", payload);
        resolve(payload);
      });
    });

// Export messing as use.
export { app, messaging };