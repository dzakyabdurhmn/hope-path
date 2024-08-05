"use client";
// FetchText.tsx
import React, { useEffect, useState } from "react";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: "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",
});

function FetchText(data: { data: any }) {
  const [text, setText] = useState<string>();

  const fetchAndGenerateText = async () => {
    try {
      setText("Loading...");
      const { text } = await generateText({
        model: groq("llama3-8b-8192"),
        prompt: `Saya adalah seorang mantan penjudi yang kini telah bertaubat. Saat ini, saya sedang mengkategorikan dan menganalisis pengeluaran saya. Mohon berikan analisis data berikut ini dalam bentuk rangkuman yang mudah di pahami dan nasehat hal apa yang bersifat konsumtif ataupun produktif apabila ada pengeluaran yang bersifat hal buruk seperti berjudi atau seks mohon berikan nasehat sesuai dengan negara Indonesia dan mohon jangan memberikan data berupa table ataupun code: ${JSON.stringify(
          data
        )} untuk mempermudah user tolong jangan berikan output id tapi berikan note nya`,
      });
      setText(text);
    } catch (error) {
      console.error("Error generating text:", error);
      setText("An error occurred.");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          className={buttonVariants({
            className: "bg-violet-500 rounded-2xl mt-6",
          })}
          onClick={fetchAndGenerateText}
        >
          Generate AI Analysis
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Result generate</DialogTitle>
            <DialogDescription className="mt-10 max-h-96 overflow-y-auto">
              <ReactMarkdown className="pt-6">{text}</ReactMarkdown>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FetchText;
