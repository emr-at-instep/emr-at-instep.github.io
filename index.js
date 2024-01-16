// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import {
  getFirestore,
  addDoc,
  collection
} from 'firebase/firestore';

// Document elements
const likeButton = document.getElementById('like');
const dislikeButton = document.getElementById('dislike');

const likeContainer = document.getElementById('like-dislike');
const feedbackContainer = document.getElementById('message-submission');
const thankyouContainer = document.getElementById('thankyou-message');

const sectionA = document.getElementById('section-a');
const sectionB = document.getElementById('section-b');
const sectionC = document.getElementById('section-c');
const labelA = document.getElementById('label-a');
const labelB = document.getElementById('label-b');
const labelC = document.getElementById('label-c');
const submitButton = document.getElementById('submit');
var submissionText = "";

let db;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {
    apiKey: "AIzaSyAuQVLwJdBiRrCqY3GZkx-qVJxHyfPgLoU",
    authDomain: "likebutton-a159c.firebaseapp.com",
    projectId: "likebutton-a159c",
    storageBucket: "likebutton-a159c.appspot.com",
    messagingSenderId: "834805696834",
    appId: "1:834805696834:web:12d20c80bf9886b96a60db"
  };

  initializeApp(firebaseConfig);
  db = getFirestore();

  // FirebaseUI config
  const uiConfig = {};

  // likeButton, dislikeButton
  likeButton.addEventListener('click', () => {
    likeButton.style.backgroundColor = '#0D102F';
    likeButton.style.color = 'white';
    dislikeButton.style.backgroundColor = 'white';
    dislikeButton.style.color = '#0D102F';
    addDoc(collection(db, "ratings"), {
      text: "LIKE",
      timestamp: Date.now()
    });
  });
  dislikeButton.addEventListener('click', () => {
    dislikeButton.style.backgroundColor = '#0D102F';
    dislikeButton.style.color = 'white';
    likeButton.style.backgroundColor = 'white';
    likeButton.style.color = '#0D102F';

    likeContainer.style.display = 'none';
    feedbackContainer.style.display = 'block';
  });

  // aButton, bButton, cButton
  sectionA.addEventListener('click', () => {
    sectionA.style.backgroundColor = '#0D102F';
    sectionA.style.color = 'white';
    submissionText += labelA.textContent + '; ';
  }, {once:true});
  sectionB.addEventListener('click', () => {
    sectionB.style.backgroundColor = '#0D102F';
    sectionB.style.color = 'white';
    submissionText += labelB.textContent + '; ';
  }, {once:true});
  sectionC.addEventListener('click', () => {
    sectionC.style.backgroundColor = '#0D102F';
    sectionC.style.color = 'white';
    submissionText += labelC.textContent + '; ';
  }, {once:true});

  // submitButton
  submitButton.addEventListener('click', () => {
    likeContainer.style.display = 'none';
    feedbackContainer.style.display = 'none';
    thankyouContainer.style.display = 'block';

    addDoc(collection(db, 'ratings'), {
      text: submissionText,
      timestamp: Date.now(),
      url: document.referrer
    })
  })

}
main();
