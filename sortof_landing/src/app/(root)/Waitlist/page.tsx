"use client";

import CustomCursor from "@/components/customcursor";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/schemas";
import {send} from "@/lib/email";
import {Button} from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
export default function Waitlist() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });


const scatteredImages = [
  // Top-left
  { src: "/img/people-5.png", className: "top-[1%] left-[1%] rotate-12 motion-translate-x-in-[-60%] motion-translate-y-in-[-60%]" },

  // Top-right
  { src: "/img/people-6.png", className: "top-[1%] right-[1%] -rotate-6 motion-translate-x-in-[60%] motion-translate-y-in-[-60%]" },

  // Bottom-left
  { src: "/img/people-7.png", className: "bottom-[1%] left-1%] rotate-3 motion-translate-x-in-[-60%] motion-translate-y-in-[60%]" },

  // Bottom-right
  { src: "/img/people-8.png", className: "bottom-[1%] right-[1%] -rotate-3 motion-translate-x-in-[60%] motion-translate-y-in-[60%]" },

  // Top-center
  { src: "/img/people-9.png", className: "top-[1%] left-[40%] -translate-x-1/2 rotate-6 motion-translate-y-in-[-60%]" },

  // Bottom-center
  { src: "/img/people-10.png", className: "bottom-[1%] left-1/2 -translate-x-1/2 -rotate-6 motion-translate-y-in-[60%]" },

  // Left-center
  { src: "/img/people-11.png", className: "top-1/2 left-[1%] -translate-y-1/2 rotate-2 motion-translate-x-in-[-60%]" },

  // Right-center
  { src: "/img/people-12.png", className: "top-1/2 right-[100%] -translate-y-1/2 -rotate-2 motion-translate-x-in-[60%]" },

  // Center-left-ish
  { src: "/img/people-13.png", className: "top-[25%] left-[20%] rotate-3 motion-translate-x-in-[-40%] motion-translate-y-in-[40%]" },

  // Center-right-ish
  { src: "/img/people-16.png", className: "top-[10%] right-[50%] -rotate-3 motion-translate-x-in-[40%] motion-translate-y-in-[40%]" },
];

function onSubmit(values: z.infer<typeof formSchema>) {
  send(values);
}

  return (
    <div id="app">
      <CustomCursor />
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">
      {/* Scattered Images */}
      {scatteredImages.map(({ src, className }, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`person-${idx}`}
          width={400}
          height={400}
          className={`absolute opacity-30 ${className}`}
        />
      ))}

      {/* Waitlist Form */}
      <div className="z-10 max-w-lg w-full bg-black/70 p-8 rounded-xl shadow-lg backdrop-blur-md text-center">
        <h1 className="text-5xl font-bold mb-4">Join the Waitlist</h1>
        <p className="text-lg text-gray-300 mb-6">
          Be the first to try <strong>SORTEDOF</strong> — your one-hand solution for everyday notes.
        </p>

          
      
          
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  name="username"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="text-gray-300">Name</FormLabel>
                      <Input 
                        {...field} 
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-400"
                      />
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="text-gray-300">Email</FormLabel>
                      <Input 
                        {...field} 
                        type="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-400"
                      />
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Notify Me
                </Button>
              </form>
            </Form>
          <Link href="/">
            <button className="mt-6 text-sm text-gray-300 underline hover:text-white transition-colors">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}