import { toast } from "react-toastify";

export default new class ExceptionService{
    
    errorSelector(errorMessage:string){
        
        if (errorMessage.includes("ValidationException")) {
            return "yapılacak";
        }
        else if (errorMessage.includes("BusinessException:")) {
           return  this.BusinessExceptionOperations(errorMessage);
        }else if (errorMessage.includes("AuthorizationException:")){
            return this.AuthorizationExceptionOperations(errorMessage);
        }else{
            return "Bir Sorun Oluştu"
        }
    }

    private BusinessExceptionOperations(message:string){
        var firstIndex = message.indexOf("BusinessException:");
        var endIndex = message.indexOf("at Application.Features");
        
        var extractedError = message.substring(firstIndex  ,endIndex).trim();
        extractedError =  extractedError.replace("BusinessException:","");
        return extractedError;
        
    }
    private AuthorizationExceptionOperations(message:string){
        var firstIndex = message.indexOf("AuthorizationException:");
        var endIndex = message.indexOf("at Core.Application");
        
        var extractedError = message.substring(firstIndex  ,endIndex).trim();
        extractedError =  extractedError.replace("AuthorizationException:","");
        return extractedError;
    }
    
}