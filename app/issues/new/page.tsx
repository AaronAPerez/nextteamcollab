import IssueForm from "../_components/IssueForm"

<<<<<<< HEAD
=======
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import dynamic from "next/dynamic";

// interface IssueForm {
//     title: string;
//     description: string;
// }

const SimpleMDE = dynamic(() => import ("react-simplemde-editor"),
{ssr:false})

    type IssueForm = z.infer<typeof createIssueSchema>


>>>>>>> 835c5007b58c3975191dabeff4ef4c7d26a04933

const NewIssuePage = () => {
  return (
   <>
    <IssueForm/>
   </>
  )
}

export default NewIssuePage