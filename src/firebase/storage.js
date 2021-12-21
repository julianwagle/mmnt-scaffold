import { getStorage} from "firebase/storage";
import firebaseApp from './firebase';
const firebaseStorage = getStorage(firebaseApp, `gs://${process.env.REACT_APP_FB_STORAGE_BUCKET}`);
export default firebaseStorage
