import { Message } from "@/model/User";

export interface ApiResponse{
  success: boolean;
  message: string;
  isAlreadyInWaitlist?: boolean;
  messages?:  Array<Message>
}