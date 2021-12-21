
import { v4 as uuid } from 'uuid';

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import firebaseStorage from '../firebase/storage';

function FirebaseUploadFile(
  file, 
  folder,
  user
  ){

  const metadata = {
    contentType: 'image/jpeg'
  };

  const fileName = `${uuid()}}===>${file.name}`

  var storageRef = ref(
    firebaseStorage, 
    `${user}/${folder}/` + fileName
  );

  const uploadTask = uploadBytesResumable(
    storageRef, 
    file,
    metadata
  );

  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        default:
          console.log('Upload is running');
      }
    }, 
    (error) => {console.log(error)}, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );

}

function firebaseUploadFiles(
  files=[], 
  folder=`${uuid()}`,
  user=`${uuid()}`
) {
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      FirebaseUploadFile(files[i], folder, user)
    }
}

export default firebaseUploadFiles;