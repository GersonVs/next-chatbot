"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "ai/react";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/chat",
    });

    return (
        <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content] ">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>
                    Using Vercel SDK to create a chat bot.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {messages.map((message) => {
                    return (
                        <div
                            key={message.id}
                            className="flex gap-3 text-slate-600 text-sm"
                        >
                            {message.role === "user" && (
                                <Avatar>
                                    <AvatarFallback>GV</AvatarFallback>
                                    <AvatarImage src="https://avatars.githubusercontent.com/u/28390352?v=4"></AvatarImage>
                                </Avatar>
                            )}
                            {message.role === "assistant" && (
                                <Avatar>
                                    <AvatarFallback>NX</AvatarFallback>
                                    <AvatarImage src="https://static-00.iconduck.com/assets.00/next-js-icon-256x256-6j7ddke7.png"></AvatarImage>
                                </Avatar>
                            )}
                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-700">
                                    {message.role === "user" ? "User" : "AI"}
                                </span>
                                {message.content}
                            </p>
                        </div>
                    );
                })}
            </CardContent>
            <CardFooter>
                <form className="flex w-full gap-2" onSubmit={handleSubmit}>
                    <Input
                        placeholder="How can i help you?"
                        value={input}
                        onChange={handleInputChange}
                    ></Input>
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    );
}
