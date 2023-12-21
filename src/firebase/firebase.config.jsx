import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_qWipq6h13oOd1daw1ZvpLGUMIBjEmBg",
    authDomain: "tuhinshuvramovieworld.firebaseapp.com",
    projectId: "tuhinshuvramovieworld",
    storageBucket: "tuhinshuvramovieworld.appspot.com",
    messagingSenderId: "294567164961",
    appId: "1:294567164961:web:5c3614a32a6a44cca53760",
    measurementId: "G-E59Z9KCVQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;