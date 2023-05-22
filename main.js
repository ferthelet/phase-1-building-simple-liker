// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// js

// adds the .hidden class to the error modal 
const errorModal = document.querySelector("#modal")
errorModal.classList.add("hidden")

// collects all the hearts on the page
const hearts = document.querySelectorAll(".like-glyph")

// if the heart is empty, adds the activated-heart class and change the text to full heart
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART
          heart.classList.add("activated-heart")
        } else {
          heart.innerText = EMPTY_HEART
          heart.classList.remove("activated-heart")
        }
      })
      .catch(() => {
        errorModal.classList.remove("hidden")
        const errorMessage = document.querySelector("#modal-message")
        errorMessage.innerText = "Random server error. Try again."
        setTimeout(() => {
          errorModal.classList.add("hidden")
        }, 3000)
      })
  })
})

// if the heart is full, removes the activated-heart class and change the text to empty heart
// hearts.forEach(heart => {
//   heart.addEventListener("click", () => {
//     if (heart.innerText === FULL_HEART) {
//       heart.innerText = EMPTY_HEART
//       heart.classList.remove("activated-heart")
//     }
//   })
// })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
