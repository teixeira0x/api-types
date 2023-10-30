import { APICommonPayload } from "../../common";

/**
 * https://docs.squarecloud.app/api-reference/endpoint/apps/backup
 */
export interface APIApplicationBackup {
  downloadURL: string;
}

export type APIApplicationBackupPayload = APICommonPayload<APIApplicationBackup>;
