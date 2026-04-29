import { MediaMessageContent } from "../types";

export interface CommunityCreatePayload {
    name: string;
    description: string;
    picture: Pick<MediaMessageContent, "url" | "thumbnailUrl">;
}

export interface CommunityJoinPayload {
    communityId: string;
}