// 'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';
// import { signIn } from 'next-auth/react';
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useToast } from '@/components/ui/use-toast';
// import { signInSchema } from '@/schemas/signInSchema';
// import CustomCursor from "@/components/customcursor";
// import Image from "next/image";

// export default function SignInForm() {
//   const router = useRouter();

//   const form = useForm<z.infer<typeof signInSchema>>({
//     resolver: zodResolver(signInSchema),
//     defaultValues: {
//       identifier: '',
//       password: '',
//     },
//   });

//   const { toast } = useToast();
  
//   const onSubmit = async (data: z.infer<typeof signInSchema>) => {
//     const result = await signIn('credentials', {
//       redirect: false,
//       identifier: data.identifier,
//       password: data.password,
//     });

//     if (result?.error) {
//       if (result.error === 'CredentialsSignin') {
//         toast({
//           title: 'Login Failed',
//           description: 'Incorrect username or password',
//           variant: 'destructive',
//         });
//       } else {
//         toast({
//           title: 'Error',
//           description: result.error,
//           variant: 'destructive',
//         });
//       }
//     }

//     if (result?.url) {
//       router.replace('/dashboard');
//     }
//   };

//   const scatteredImages = [
//     // Top-left
//     { src: "/img/people-5.png", className: "top-[1%] left-[1%] rotate-12 motion-translate-x-in-[-60%] motion-translate-y-in-[-60%]" },

//     // Top-right
//     { src: "/img/people-6.png", className: "top-[1%] right-[1%] -rotate-6 motion-translate-x-in-[60%] motion-translate-y-in-[-60%]" },

//     // Bottom-left
//     { src: "/img/people-7.png", className: "bottom-[1%] left-[1%] rotate-3 motion-translate-x-in-[-60%] motion-translate-y-in-[60%]" },

//     // Bottom-right
//     { src: "/img/people-8.png", className: "bottom-[1%] right-[1%] -rotate-3 motion-translate-x-in-[60%] motion-translate-y-in-[60%]" },

//     // Top-center
//     { src: "/img/people-9.png", className: "top-[1%] left-[40%] -translate-x-1/2 rotate-6 motion-translate-y-in-[-60%]" },

//     // Bottom-center
//     { src: "/img/people-10.png", className: "bottom-[1%] left-1/2 -translate-x-1/2 -rotate-6 motion-translate-y-in-[60%]" },

//     // Left-center
//     { src: "/img/people-11.png", className: "top-1/2 left-[1%] -translate-y-1/2 rotate-2 motion-translate-x-in-[-60%]" },

//     // Right-center
//     { src: "/img/people-12.png", className: "top-1/2 right-[1%] -translate-y-1/2 -rotate-2 motion-translate-x-in-[60%]" },

//     // Center-left-ish
//     { src: "/img/people-13.png", className: "top-[25%] left-[20%] rotate-3 motion-translate-x-in-[-40%] motion-translate-y-in-[40%]" },

//     // Center-right-ish
//     { src: "/img/people-16.png", className: "top-[10%] right-[20%] -rotate-3 motion-translate-x-in-[40%] motion-translate-y-in-[40%]" },
//   ];

//   return (
//     <div id="app">
//       <CustomCursor />
//       <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden">
//         {/* Scattered Images */}
//         {scatteredImages.map(({ src, className }, idx) => (
//           <Image
//             key={idx}
//             src={src}
//             alt={`person-${idx}`}
//             width={400}
//             height={400}
//             className={`absolute opacity-30 ${className}`}
//           />
//         ))}

//         {/* Sign In Form */}
//         <div className="z-10 max-w-lg w-full bg-black/70 p-8 rounded-xl shadow-lg backdrop-blur-md text-center">
//           <h1 className="text-5xl font-bold mb-4">Welcome Back</h1>
//           <p className="text-lg text-gray-300 mb-6">
//             Sign in to continue your journey with <strong>SORTEDOF</strong>
//           </p>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               <FormField
//                 name="identifier"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem className="text-left">
//                     <FormLabel className="text-gray-300">Email/Username</FormLabel>
//                     <Input 
//                       {...field} 
//                       className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-400"
//                       placeholder="Enter your email or username"
//                     />
//                     <FormMessage className="text-red-400" />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 name="password"
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem className="text-left">
//                     <FormLabel className="text-gray-300">Password</FormLabel>
//                     <Input 
//                       type="password" 
//                       {...field} 
//                       className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder-gray-400"
//                       placeholder="Enter your password"
//                     />
//                     <FormMessage className="text-red-400" />
//                   </FormItem>
//                 )}
//               />
//               <Button 
//                 type="submit" 
//                 className="w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-200 transition-colors"
//               >
//                 Sign In
//               </Button>
//             </form>
//           </Form>

//           <div className="mt-6 space-y-2">
//             <p className="text-gray-300">
//               Not a member yet?{' '}
//               <Link href="/sign-up" className="text-white underline hover:text-gray-300 transition-colors">
//                 Sign up
//               </Link>
//             </p>
//             <Link href="/">
//               <button className="text-sm text-gray-300 underline hover:text-white transition-colors">
//                 ← Back to Home
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }