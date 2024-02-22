import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { useToast } from "@/src/components/ui/use-toast"
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";

const contactFormSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  mensagem: z.string().min(1, { message: "A mensagem não pode estar vazia" }),
});

type contactFormData = z.infer<typeof contactFormSchema>;

export default function GuestBookForm() {
  const { toast } = useToast()

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: contactFormData) => {
    try {
      setSubmitting(true);
      await axios.post("/api", data);
      toast({
        title: `Mensagem enviada com sucesso! 🎉`,
        description: `Olá, ${data.nome}. Obrigado pela sua mensagem.`,
      })
      reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem.", error);
      toast({
        title: "Erro ao enviar a sua mensagem!",
        description: `Por favor, tente novamente...`,
      })
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-5">
        <Label htmlFor="nome">Nome:</Label>

        <Input
          type="text"
          id="nome"
          {...register("nome")}
          placeholder="anônimo"
        />
        {errors.nome && (
          <small className="text-red-500">{errors.nome.message}</small>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <Label>Mensagem:</Label>
        <Textarea
          spellCheck={false}
          {...register("mensagem")}
          placeholder="Deixe sua mensagem aqui..."
        />
        {errors.mensagem && (
          <small className="text-red-500">{errors.mensagem.message}</small>
        )}
      </div>

      <Button
        className="w-full"
        type="submit"
        disabled={isSubmitting}
        data-cursor="block"
      >
        {submitting ? "A enviar..." : "Enviar"}
      </Button>
    </form>
  );
}
