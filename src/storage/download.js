import { ref, getDownloadURL } from "firebase/storage";

import firebaseStorage from '../firebase/storage';


function FirebaseDownloadFile(
  file, 
  folder,
  user
  ){

    const fileName = `${file.name}`
    var storageRef = ref(
        firebaseStorage, 
        `${user}/${folder}/` + fileName
    );

    // Get the download URL
    getDownloadURL(storageRef)
    .then((url) => {
        // Insert url into an <img> tag to "download"
        console.log(url);
    })
    .catch((error) => {console.log(error)});
};

function firebaseDownloadFiles(
  files=[], 
  folder='',
  user=''
) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      FirebaseDownloadFile(files[i], folder, user)
    }
}

export default firebaseDownloadFiles;