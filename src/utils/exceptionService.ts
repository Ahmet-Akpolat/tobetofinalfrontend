import { store } from "../store/configureStore";
import { Logout } from "./logout";

const ExceptionService = () => {
  const errorSelector = (errorMessage: string) => {
    if (errorMessage.includes("ValidationException")) {
      return ValidationExceptionOperations(errorMessage);
    } else if (errorMessage.includes("BusinessException:")) {
      return BusinessExceptionOperations(errorMessage);
    } else if (errorMessage.includes("AuthorizationException:")) {
      return AuthorizationExceptionOperations();
    } else {
      return "Bir Sorun Oluştu";
    }
  };

  const BusinessExceptionOperations = (message: string) => {
    var firstIndex = message.indexOf("BusinessException:");
    var endIndex = message.indexOf("\\r");

    var extractedError = message.substring(firstIndex, endIndex).trim();
    extractedError = extractedError.replace("BusinessException:", "");
    return extractedError;
  };

  const AuthorizationExceptionOperations = () => {
    var extractedError =
      "Oturumunuzun süresi doldu lütfen tekrar giriş yapınız";
    Logout(store.dispatch);
    return extractedError;
  };

  const ValidationExceptionOperations = (message: string) => {
    let desiredSubstring;
    let validationFailedIndex = message.indexOf("Validation failed:");

    if (validationFailedIndex !== -1) {
      let thirdColonIndex = message.indexOf(
        ":",
        validationFailedIndex + "Validation failed:".length
      );
      if (thirdColonIndex !== -1) {
        desiredSubstring = message.substring(thirdColonIndex + 1).trim();
        var endIndex = desiredSubstring.indexOf("\\r");
        desiredSubstring = desiredSubstring.substring(0, endIndex).trim();
      }
    }
    return desiredSubstring;
  };

  return { errorSelector };
};

export default ExceptionService();
