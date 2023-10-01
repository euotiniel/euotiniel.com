import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useState } from "react"; // Importe useState

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

  // Adicione um estado local para controlar o texto e a desabilitação do botão de envio
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmitting(true); // Defina submitting como true ao iniciar o envio

      const webhookUrl =
        "https://discord.com/api/webhooks/1158046821982146601/8igdjW-NPo2hoEqE3AOuQCOHJ-vxt0zzSjnBl58dyv6FPMWHakqTV_ijS8zxfLcJBcv-";

      // Construa a mensagem a ser enviada para o Discord.
      const author = `Autor: ${data.username}`;
      const mensagem = `Mensagem: ${data.message}`;

      // Enviar mensagem para o Discord via webhook.
      await axios.post(webhookUrl, { content: `${author}\n${mensagem}` });

      // Limpar o formulário após o envio bem-sucedido.
      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem para o Discord:", error);
    } finally {
      setSubmitting(false); // Defina submitting como false após o envio ou em caso de erro
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-5">
        <Label>Nome:</Label>
        <Input
          type="text"
          id="username"
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

      {/* Use a variável "submitting" para desabilitar o botão durante o envio */}
      <Button className="w-full sm:" type="submit" disabled={submitting} data-cursor="block">
        {submitting ? "A enviar..." : "Enviar"}
      </Button>
    </form>
  );
}
