var firebaseConfig = {
    apiKey: "AIzaSyAgVab2wUJkERIRCdQVLarTyHZlb3ty3mQ",
    authDomain: "trildb-ddca5.firebaseapp.com",
    databaseURL: "https://trildb-ddca5.firebaseio.com",
    projectId: "trildb-ddca5",
    storageBucket: "trildb-ddca5.appspot.com",
    messagingSenderId: "741857016385",
    appId: "1:741857016385:web:215d4139d7c95875"
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage()

const uploadProfilePhotoButton = document.getElementById(`upload-profile-photo-button`)
const progressBar = document.getElementById(`progress-bar`)
let photoFile

uploadProfilePhotoButton.addEventListener(`change`, (event) => {

    let file = event.target.files[0];

    const storageRef = storage.ref(event.target.files[0].name)
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

                    var newImage = $('<img>')
                    newImage.attr('src', url)
                    $('#preview-of-upload').html(newImage)

                    setTimeout(() => {
                        progressBar.style.width = `0%`
                    }, 1000)
                })
        })
})