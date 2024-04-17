import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  nome: z.string(),
  mensagem: z.string(),
});

const WENHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, mensagem } = bodySchema.parse(body);
  const messageData = {
    embeds: [
      {
        fields: [
          {
            name: "Autor:",
            value: nome,
            inline: true,
          },
          {
            name: "Mensagem:",
            value: mensagem,
          },
        ],
      },
    ],
  };

  await axios.post(WENHOOK_URL, messageData);
  return NextResponse.json({
    message: "Mensagem enviada com sucesso!",
  });
}
