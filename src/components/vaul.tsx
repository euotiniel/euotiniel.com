"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Drawer } from "vaul";
import { toast } from 'sonner'
import Links from "./links";

const contactFormSchema = z.object({
  name: z.string().min(2, "O nome é obrigatório"),
  message: z.string().min(3, "A mensagem é obrigatória"),
});

type contactFormData = z.infer<typeof contactFormSchema>;

export default function VaulDrawer() {
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: contactFormData) => {
    if (!WEBHOOK_URL) {
      // console.error("A URL do webhook não está definida.");
      // setSuccessMessage("Erro: URL do webhook não definida.");
      return;
    }

    try {
      await axios.post(WEBHOOK_URL, {
        content: `Nome: ${data.name}\nMensagem: ${data.message}`,
      });
      toast.success(`Olá, ${data.name}. `, {
        description: `A sua mensagem foi enviada com sucesso.Muito obrigado por partilhar isso comigo!`,
      });
      reset();
    } catch (error) {
      toast.error(`Lamento, ${data.name}. Ocorreu um erro ao enviar a sua mensagem...`);
    } finally {
    }
  };

  return (
    <Drawer.Root>
      <Drawer.Trigger>
      <span
        className="transition-all border-b border-dashed border-neutral-900 text-neutral-800 dark:border-neutral-300 dark:text-neutral-400 duration-500 hover:border-gray-300"
      >
        Escreva para mim!
      </span>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="font-sans fixed inset-0 bg-black/70" />
        <Drawer.Content className="dark:bg-black bg-white border-t border-neutral-800 flex flex-col fixed bottom-0 left-0 right-0 max-h-[82vh] rounded-t-[10px]">
          <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
            <Drawer.Handle />
            <Drawer.Title className="mt-5 text-[16.5px] font-semibold leading-7 text-neutral-800 dark:text-neutral-300">
              Escreva para mim!
            </Drawer.Title>
            <Drawer.Description className="text-[14.5px] leading-7 text-neutral-600 dark:text-neutral-400">
              Olá! Deixe a sua mensagem — um pensamento, um feedback, ou qualquer coisa que queira compartilhar comigo.
            </Drawer.Description>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                htmlFor="name"
                className="text-neutral-600 dark:text-neutral-400 text-[14.5px] mt-8 mb-2 block"
              >
                Nome
              </label>
              <input
                id="name"
                {...register("name")}
                className="text-sm border border-neutral-300 dark:border-neutral-800 bg-transparent w-full px-3 h-[2.4rem] dark:text-neutral-300 text-neutral-800 rounded-lg outline-none "
              />
              {errors.name && (
                <span className="text-red-500 text-xs">
                  {errors.name.message}
                </span>
              )}

              <label
                htmlFor="message"
                className="text-neutral-600 dark:text-neutral-400 text-[14.5px] mt-8 mb-2 block"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={2}
                {...register("message")}
                className="text-sm border border-neutral-300 dark:border-neutral-800 bg-transparent w-full resize-none rounded-lg p-3 pt-2.5 dark:text-neutral-300 text-neutral-800 outline-none"
              />
              {errors.message && (
                <span className="text-red-500 text-xs">
                  {errors.message.message}
                </span>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-9 rounded-md bg-gradient-to-t from-gray-500 to-gray-400 mt-4 mb-5 w-full font-medium disabled:opacity-50 disabled:cursor-not-allowed opacity-80 text-neutral-50 duration-700 dark:from-gray-600 dark:to-gray-700"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}