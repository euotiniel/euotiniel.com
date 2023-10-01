"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { useForm } from 'react-hook-form';


import { Button } from "@/src/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "O nome deve conter mais de 2 caracteres.",
  }),
  secretmessage: z.string().min(5, {
    message: "Escreve um pouco mais...",
  }),
})

export default function GuestBookForm() {
  
        // 1. Define your form.
        const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {
            username: "",
            secretmessage: "",
          },
        })
       
        // 2. Define a submit handler.
        function onSubmit(values: z.infer<typeof formSchema>) {
          console.log(values)
        }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="euotiniel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secretmessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Eu gosto do teu trabalho..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}
