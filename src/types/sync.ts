import { MessageNewPayload } from "../playload";
import { Community, CommunityMemberStatus } from "./communities";
import { User } from "./users";

export interface MemberStatusChangesDto {
  communityId: string;
  userId: string;
  status: CommunityMemberStatus;
  updated_at: string;
}

export interface SyncResponseDto {
  userChanges: User[];
  communityChanges: Omit<Community, "members" | "owner">[];
  messageChanges: MessageNewPayload[];
  memberStatusChanges: MemberStatusChangesDto[];
  lastSyncAt: string;
}

export class SyncRequestDto {
  lastSyncAt?: string;
  limit?: string;
}
