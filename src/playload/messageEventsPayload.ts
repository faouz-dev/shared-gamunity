import { MessageType } from "../types/messages";

export interface MessageSendPayload {
  conversationId: string;
  message: MessageType;
  messageId: string;
}

export interface MessageNewPayload {
  conversationId: string;
  message: MessageType;
  senderId: string;
  messageId?: string;
}
