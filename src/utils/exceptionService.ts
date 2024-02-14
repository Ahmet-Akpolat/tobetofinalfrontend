import { store } from "../store/configureStore";
import { Logout } from "./logout";

const ExceptionService = () => {
  const errorSelector = (errorData: any) => {
    if (
      (errorData.type.includes("validation") ||
        errorData.type.includes("business")) &&
        errorData.title !== "Validation error(s)"
    ) {
      return errorData.detail;
    } else if (errorData.title.includes("authorization")) {
      return AuthorizationExceptionOperations();
    } else {
      return "Bir Sorun Oluştu";
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
