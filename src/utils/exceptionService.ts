import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ExceptionService = () => {

  const errorSelector = (errorMessage: string) => {
    if (errorMessage.includes("ValidationException")) {
      return "yapılacak";
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
    var extractedError = "Oturumunuzun süresi doldu lütfen tekrar giriş yapınız";
    return extractedError;
  };

  return { errorSelector };
};

export default ExceptionService();
