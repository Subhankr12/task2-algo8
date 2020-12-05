// Async Functions
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data');
            resolve({ userEmail: email });
        }, 3000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
        }, 2000);
    })
}


//callbacks
const user = loginUser("subhankar@gmail.com", 123456, user => {
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
        videoDetails(videos[0], title => {
            console.log(title);
        })
    })
})


//Promise
loginUser('subhankar@gmail.com', 'hello1234')
        .then(user => getUserVideos(user.email))
        .then(videos => videoDetails(videos[0]))
        .then(details => console.log(details))
        .catch(err => console.log(err));