import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged as _onAuthStateChanged,
    updateProfile,
    updateEmail,
  } from "firebase/auth";
import { Auth, DB, Storage } from "./config";
import { User,updatePassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";

export function onAuthStateChanged(cb: (user: User | null) => void) {
    return _onAuthStateChanged(Auth, cb);
  }
  
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(Auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}
  
export async function signInEmail(email:string,password:string) {
    await signInWithEmailAndPassword(Auth,email,password);
  }

export async function CreateUser(email:string,password:string) {
    try {
        await createUserWithEmailAndPassword(Auth,email,password);
    } catch (error) {
        console.error("Error signing in with Email", error);
    }
}

export async function signOut() {
    try {
      return Auth.signOut();
    } catch (error) {
      console.error("Error signing out with Google", error);
    }
  }

export async function passwordChange(auth:User, pass:string) {
  updatePassword(auth,pass)
}

export  async function UpdateUseProfile(user:User,url:string) {
  updateProfile(user,{
    photoURL:url
  })
}

export  async function UpdateDisplayName(user:User,name:string) {
  updateProfile(user,{
   displayName:name
  })
}
export  async function UpdateEmail(user:User,Email:string) {
  await updateEmail(user,Email)
}


//---------------Docs Functions-------------------- 

export  async function CreateFaqQuestion(data:any) {
  const docRef = doc(collection(DB, 'docs/_faq/questions'));
  await setDoc(docRef,data)
}

export  async function GetFaqQuestions() {
  const querySnapshot = await getDocs(collection(DB, "docs", "_faq", "questions"))
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
export async function DeleteFaqQuestions(docId: string): Promise<void> {
  try {
    await deleteDoc(doc(DB, 'docs', '_faq', 'questions', docId));
    alert('Deleted')
  } catch (error) {
    alert('Delete Failed')
    console.log(error)
  }
}
export async function saveContent(content:string,ref:any) {
  const docRef = doc(collection(DB,'docs'),ref)
    setDoc(docRef,
        {
            content,             // Store the content
            createdAt: serverTimestamp(), // Timestamp when created
            modifiedAt: serverTimestamp() // Timestamp when created (initially the same as createdAt)
          }
        ).then((s)=>{
            console.log(s)
        }).catch((e)=>{
            console.log('this is errro',e)
        })
}

export async function GetDoc(ref:any) {
  const docRef = doc(collection(DB,'docs'),ref) 
  const data = (await getDoc(docRef)).data()
  return data
}

//---------------Upload Images--------------------
export async function uploadImage(Path: string, image: File): Promise<string> {
	const filePath = `images/${Path}/${image.name}`;
	const newImageRef = ref(Storage, filePath);
	await uploadBytesResumable(newImageRef, image);
	return await getDownloadURL(newImageRef);
}
