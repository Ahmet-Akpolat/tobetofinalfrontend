import { store } from "../store/configureStore";
import { Logout } from "./logout";

let lastErrorTime = 0;
const errorInterval = 5000;

const ExceptionService = () => {
  const errorSelector = (errorData: any) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastErrorTime > errorInterval) {
      lastErrorTime = currentTime;
      if (
        (errorData.type.includes("business")) 
      ) {
        return errorData.detail;
      }
      else if (errorData.type.includes("validation") ){
        return errorData.Errors[0].Errors[0]
      }
      else if (
        errorData.title.includes("authorization") ||
        errorData.title.includes("Authorization")
      ) {
        return AuthorizationExceptionOperations();
      } else {
        return "Bir Sorun Oluştu";
      }
    }
  };

  const AuthorizationExceptionOperations = () => {
    var extractedError =
      "Oturumunuzun süresi doldu lütfen tekrar giriş yapınız";
    Logout(store.dispatch);
    return extractedError;
  };

  return { errorSelector };
};

export default ExceptionService();
