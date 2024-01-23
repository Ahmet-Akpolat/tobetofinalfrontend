
import { GUID } from "../../abstracts/GuidModel";
import { RefreshTokenModel } from "./RefreshTokenModel";
import { TokenModel } from "./TokenModel";

export interface LoginResponseModel{
    accessToken?:TokenModel;
    refreshToken?:RefreshTokenModel;

}