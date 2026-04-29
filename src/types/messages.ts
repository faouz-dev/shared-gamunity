export interface MessageType {
  message: AnyMessageContentType;
  quoted?: AnyMessageContentType; // TODO: add support for quoted messages
  timestamp: number;
}

export type AnyMessageContentType =
  | TextMessage
  | ImageMessage
  | VideoMessage
  | audioMessage;

export interface TextMessage {
  type: "textMessage";
  text: string;
}

export interface ImageMessage {
  type: "imageMessage";
  image: MediaMessageContent;
  caption?: string;
}

export interface VideoMessage {
  type: "videoMessage";
  video: MediaMessageContent;
  caption?: string;
}

export interface audioMessage {
  type: "audioMessage";
  audio: MediaMessageContent;
}

export interface MediaMessageContent {
  filepath: string;
  url: string;
  mimetype?: string;
  thumbnailUrl?: string;
}
