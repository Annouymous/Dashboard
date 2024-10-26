'use client'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";
import { CreateFaqQuestion, DeleteFaqQuestions, GetFaqQuestions } from "@/library/Firebase/Services";
import { collection, doc, Firestore, getDoc, getDocs, onSnapshot, serverTimestamp } from "firebase/firestore";
import { DB } from "@/library/Firebase/config";
import { DataTable } from "@/library/faq table/data-table";
import { columns } from "@/library/faq table/columns";

interface Document {
  id?: string;       // Optional
  question?: string; // Optional
  answer?: string;   // Optional
  createdAt?: string; // Optional
  pid: string;       // Required
}

export default function DemoPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [question,setQuestion] = useState('')
  const [Answer,setAnswer] = useState('')
  const [Loading,setLoading] = useState(true)

  const HandleQuestion = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuestion(event.target.value)
    },
    [question],)

  const HandleAnswer = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAnswer(event.target.value)
    },
    [Answer],)
  
    function generateRandomId(): string {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomId = '';
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        randomId += chars[randomIndex];
      }
      return randomId;
    }
    
  const CreateQuestion = () =>{
    let obj = {
      id:generateRandomId(),
      question:question,
      answer:Answer,
      createdAt:serverTimestamp()
    }
    try {
      CreateFaqQuestion(obj)
      alert('Question Created Success')
    } catch (error) {
      alert('Question Creation Failed')
    }
    GetDocuments()
  }

 const GetDocuments = async() =>{
    setLoading(true)
    const querySnapshot = await getDocs(collection(DB, "docs","_faq","questions"))
    const questionsList: Document[] = querySnapshot.docs.map(doc => {
      const data = doc.data() as Partial<Document>; // Use Partial<Document> for optional fields
      return {
        pid: doc.id,
        ...data
      };
    });
    console.log(questionsList)
    setDocuments(questionsList);
    setLoading(false)
  }

  useEffect(() => {
    console.log('Start')
    GetDocuments()
    console.log('Ending')
    }, [])
  

  return (
    <div className="flex flex-col mx-2 rounded-md">
      <div className="flex justify-end mb-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-sky-500 hover:bg-sky-700" variant="default">Add New FAQ Question</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Question</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Question
              </Label>
              <Input
              onChange={HandleQuestion}
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Answer
              </Label>
              <Textarea
                onChange={HandleAnswer}
                id="username"
                className="p-4 border border-gray-300 rounded-md col-span-3 min-h-[100px]"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" onClick={CreateQuestion}>Create</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
      <div className="container mx-auto bg-white">
        <DataTable Loading={Loading} columns={columns} data={documents} />
      </div>
    </div>
  );
}
