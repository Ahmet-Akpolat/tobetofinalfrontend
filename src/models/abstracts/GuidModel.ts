export type GUID = string & { isGuid: true };
function guid(guid: string): GUID {
  return guid as GUID;
}