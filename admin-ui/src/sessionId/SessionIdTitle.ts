import { SessionId as TSessionId } from "../api/sessionId/SessionId";

export const SESSIONID_TITLE_FIELD = "id";

export const SessionIdTitle = (record: TSessionId): string => {
  return record.id?.toString() || String(record.id);
};
