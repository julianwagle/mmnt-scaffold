
// import { ref, getDownloadURL } from "firebase/storage";
// import firebaseStorage from '../../firebase/storage';

export default function getGif () {
    var urlsMap = {
        
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F12.gif?alt=media&token=44f9b2f5-8eb0-44f2-b7bc-bc4df9f69f4e": 2820, // crane 2820*1
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F4.gif?alt=media&token=32721fd8-4ae7-4199-a9c0-10658fbceb3a": 2600, // thinking man 1300*2
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F8.gif?alt=media&token=67391a94-aeda-4a7d-96b0-4ea0645e9c8a": 2160, // flesh hand 720*3
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F6.gif?alt=media&token=8d6fb66b-17d3-4de0-9e00-af9e51420471": 2160, // whales 4320*0.5
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F2.gif?alt=media&token=646ebfc0-ebae-4441-96be-5ccda5f814c4": 2000, // code 4000*0.5
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F9.gif?alt=media&token=cec34c05-b869-45e1-ad72-ad29726170e9": 2000, // keltic o 3400*?
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F1.gif?alt=media&token=8809cdce-ae17-4bd8-93f9-ad8a73bc85ff": 2000, // one 940*?
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F13.gif?alt=media&token=03f6fff0-0178-4e60-a30c-6aa26498f2df": 2000, // dna 1800*?
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F14.gif?alt=media&token=1932253f-9b05-4f45-9c6c-c72ea9f97850": 1800, // 3dots 1800*1
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F5.gif?alt=media&token=9a24764c-d1d0-485a-8278-eaef5e7f3cf0": 1500, // homer 1500*1
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F11.gif?alt=media&token=badcc71b-0bf0-437f-adfb-685ce5617e31": 1500, // wood hand 1500*1
        "https://firebasestorage.googleapis.com/v0/b/fb-wagle-1.appspot.com/o/loaders%2F10.gif?alt=media&token=8993dd5c-ef51-482b-a95b-1c5b11083e30": 1440, // infinity 1440*1
    }
    var urlsArray = []
    Object.entries(urlsMap).forEach(function([k, v]) {
    urlsArray.push(k);
    });
    var i = Math.floor(Math.random() * (urlsArray.length - 1) + 1)
    var gifUrl = urlsArray[i]
    var gifTime = urlsMap[gifUrl]
    return [gifUrl, gifTime]
}


// import { ref, getDownloadURL } from "firebase/storage";
// import firebaseStorage from '../../firebase/storage';
// function getUrls() {
//           var urls = []
//           for (let i = 1; i < 15; i++) {
//               var storageRef = ref(firebaseStorage, `loaders/${i}.gif`);
//               getDownloadURL(storageRef)
//               .then((url) => {
//                 urls.push(url)
//                 console.log(urls);
//               }).catch((error) => {console.log(error)});
//             }
//           console.log(urls)
// }

// function getUrls() {
//           var urls = []
//           for (let i = 1; i < 41; i++) {
//               var storageRef = ref(firebaseStorage, `profile-gradients/${i}.png`);
//               getDownloadURL(storageRef)
//               .then((url) => {
//                 urls.push(url)
//                 console.log(urls);
//               }).catch((error) => {console.log(error)});
//             }
//           console.log(urls)
// }
// getUrls()
