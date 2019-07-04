// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgVab2wUJkERIRCdQVLarTyHZlb3ty3mQ",
    authDomain: "trildb-ddca5.firebaseapp.com",
    databaseURL: "https://trildb-ddca5.firebaseio.com",
    projectId: "trildb-ddca5",
    storageBucket: "trildb-ddca5.appspot.com",
    messagingSenderId: "741857016385",
    appId: "1:741857016385:web:215d4139d7c95875"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference to storage method of Firebase
var storage = firebase.storage()

// Get element that is the input we will click to upload our profile photo file
const uploadProfilePhotoButton = document.getElementById(`upload-profile-photo-button`)

// Get element that shows the progress of the photo uploading action
const progressBar = document.getElementById(`progress-bar`)

// photoFile is global so we can access it after it uploads
let photoFile

// Event listener for if upload photo button is clicked
uploadProfilePhotoButton.addEventListener(`change`, (event) => {
    console.log(event);

    // Access the chosen file throught the event
    let file = event.target.files[0];
    // console.log(event.target.files[0].name);

    // Create a storage reference unique to the user using their UID
    const storageRef = storage.ref(event.target.files[0].name)

    // Upload file
    const photoUploadTask = storageRef.put(file)
    photoUploadTask.on("state_changed", snapshot => {
        let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100
        if (percentage < 10) {
            progressBar.style.width = `10%`
            progressBar.innerHTML = `${percentage.toFixed(0)}%`
        } else {
            progressBar.style.width = `${percentage}%`
            progressBar.innerHTML = `${percentage.toFixed(0)}%`
        }
    },
        error = (error) => {
            console.log(`error`, error.message)
        },
        complete = () => {
            photoUploadTask.snapshot.ref.getDownloadURL()
                .then((url) => {
                    console.log(url);

                    photoFile = url
                    localStorage.setItem('user_image', photoFile);
                    // push to db or something

                    // make a preview image of what was just uploaded
                    var newImage = $('<img>')
                    newImage.attr('src', url)
                    $('#preview-of-upload').html(newImage)

                    setTimeout(() => {
                        progressBar.style.width = `0%`
                    }, 1000)
                })
        })
})