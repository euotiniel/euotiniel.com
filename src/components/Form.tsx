import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react"; 

import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";

type FormData = {
  username: string;
  message: string;
};

export default function SimpleForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmitting(true); 

      const webhookUrl =
        "https://discord.com/api/webhooks/1158046821982146601/8igdjW-NPo2hoEqE3AOuQCOHJ-vxt0zzSjnBl58dyv6FPMWHakqTV_ijS8zxfLcJBcv-";

      const author = `Autor: ${data.username}`;
      const mensagem = `Mensagem: ${data.message}`;

      await axios.post(webhookUrl, { content: `${author}\n${mensagem}` });

      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem para o Discord:", error);
    } finally {
      setSubmitting(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-5">
        <Label>Nome:</Label>
        <Input
          type="text"
          id="username"
          placeholder="anonimo"
          {...register("username", {
            required: "Este campo é obrigatório.",
            minLength: {
              value: 3,
              message: "O nome deve conter pelo menos 3 caracteres.",
            },
          })}
        />
        {errors.username && (
          <small className="text-red-600">{errors.username.message}</small>
        )}
      </div>
      <div className="flex flex-col gap-5">
        <Label>Mensagem:</Label>
        <Textarea
          id="message"
          placeholder="Queria poder trabalhar com você e tomar um café..."
          {...register("message", {
            required: "Este campo é obrigatório.",
            minLength: {
              value: 3,
              message: "A mensagem deve conter pelo menos 3 caracteres.",
            },
          })}
        />
        {errors.message && (
          <small className="text-red-600">{errors.message.message}</small>
        )}
      </div>

      <Button className="w-full sm:" type="submit" disabled={submitting} data-cursor="block">
        {submitting ? "A enviar..." : "Enviar"}
      </Button>
    </form>
  );
}
