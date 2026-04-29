import { MediaMessageContent } from "../types";

export interface ProfileUpdatePlayload {
  username?: string;
  picture?: MediaMessageContent;
}
