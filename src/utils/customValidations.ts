import { AnyObject, TestContext } from "yup"

export const passwordValidator = (
    value:string, 
    context: TestContext<AnyObject>, ) => {
        return (
            /[a-zçöşüğı]/.test(value) && 
            /[A-ZÇÖŞÜĞİ]/.test(value) && 
            /[0-9]/.test(value)
        )
}