// Import the functions you need from the SDKs you need


import {
  initializeApp
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import {
  getDocs,
  addDoc,
  collection,
  getFirestore
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADksypjllFU9TnEi8YOgY103lv6I0eF-A",
  authDomain: "messageboard-37e6c.firebaseapp.com",
  projectId: "messageboard-37e6c",
  storageBucket: "messageboard-37e6c.appspot.com",
  messagingSenderId: "761979222884",
  appId: "1:761979222884:web:19380766f2d4600c57d871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


new Vue({
  el: '#messages',
  data: {
    messageList: [],
    newMessage: {
      user: "",
      msg: "",
      create_time: 0,
    }
  },
  methods: {
    getMessages: function () {
      console.log("message.js is loaded in the browser");
      let obj = this;
      getDocs(collection(db, "messages")).then(docs => {
        docs.forEach((doc) => {
          console.log(doc.data());
          let data = {
            user: doc.data().user,
            msg: doc.data().msg,
            create_time: doc.data().create_time
          };
          if (!data.user || data.user.length === 0) {
            data.user = "Anonymous";
          }
          obj.messageList.push(data);
        });
        obj.messageList.sort(function (a, b) {
          return a.create_time - b.create_time;
        });
        console.log(obj.messageList);
      }).catch(e => {
        console.error("Error reading document: ", e);
      });

    },
    addMessage: function () {
      let obj = this;
      let currentTime = new Date().getTime();
      console.log("user " + obj.newMessage.user + " | msg " + obj.newMessage.msg + " | timestamp" + currentTime);
      addDoc(collection(db, "messages"), {
        user: obj.newMessage.user,
        msg: obj.newMessage.msg,
        create_time: currentTime
      }).then(docRef => {
        console.log("Document written with ID: ", docRef.id);
        obj.messageList = [];
        obj.getMessages();
      }).catch(e => {
        console.error("Error adding document: ", e);
      });
    }
  },
  beforeMount() {
    this.getMessages();
  }
});