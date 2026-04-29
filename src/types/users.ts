import { MediaMessageContent } from "./messages";

export type UserProfilUrls = Pick<MediaMessageContent, "url" | "thumbnailUrl">;

export type PresenceUpdateEvent = {
  id: string;
  presence: Presence;
};

export type Presence =
  | {
      status: "online" | "typing" | "recording";
    }
  | {
      status: "offline";
      lastSeen?: number;
    };

export type ProfilUpdateEvent = {
  id: string;
  username?: string;
  picture?: UserProfilUrls;
};


export type User = {
  id: string;
  username: string;
  picture?: UserProfilUrls;
};

export type UserPresence =
  | {
      status: "online";
    }
  | {
      status: "offline";
      lastDisconnection?: number;
    };

export type UserWithPresence = User & {
  presence: UserPresence;
};

export type UserSearchResponse = {
  users: UserWithPresence[];
  hasMore: boolean;
  nextOffset?: number;
};