'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Form from "@components/Form";

const CreatePrompt = () => {
  const [post,setPost] = useState({
    prompt:'',
    tag:''
  });
  const [submitting,setSubmitting] = useState(false);
  const {data: session} = useSession();
  const router = useRouter();

  const createPrompt = async (e) =>{
    e.preventDefault();
    setSubmitting(true);

    try{
      const res = await fetch('/api/prompt/new',{
        method:'POST',
        body:JSON.stringify({
          prompt:post.prompt,
          userId:session?.user.id,
          tag:post.tag
        }),
      });

      if(res.ok){
        router.push('/')  
      }

      }catch(error){
        console.log(`error: ${error}`);
      }finally{
        setSubmitting(false)
      }

  }

  return (
    <Form
     type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt;