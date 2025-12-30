import z from "zod";

export const RegisterFormSchema = z.object({
    name: z.string()
           .max(50,{ message: "ادخل اقل من 50 حرف"})
           .min(5 , { message: "ادخل اسمك ثنائي علي الاقل"}),

    phoneNumber: z.string()
                 .trim()
                 .regex(/^01[0-2,5][0-9]{8}$/ , {message:  "ادخل رقم مصري صحيح" }), 

    Password: z.string()
           .max(20,{ message: "ادخل اقل من 20 "})
           .min(1 , { message: "لا يمكن ان لا تضع كلمة سر"})
           .regex(/[a-zA-Z]/ ,  { message: "يجب ان تحتوي كلمة السر علي حرف علي الاقل"})
           .regex(/[0-9]/ ,  { message: "يجب ان تحتوي كلمة السر علي أرقام"})
           .regex(/[^a-zA-Z0-9]/ ,  { message: "يجب ان تحتوي كلمة السر علي احد التالي (*,&,%,$,#,@)ء"})
           .trim() ,

     confirmPassword:  z.string()
           .max(20,{ message: "ادخل اقل من 20 "})
           .min(1 , { message: "لا يمكن ان لا تضع كلمة سر"})
           .regex(/[a-zA-Z]/ ,  { message: "يجب ان تحتوي كلمة السر علي حرف علي الاقل"})
           .regex(/[0-9]/ ,  { message: "يجب ان تحتوي كلمة السر علي أرقام"})
           .regex(/[^a-zA-Z0-9]/ ,  { message: "يجب ان تحتوي كلمة السر علي احد التالي (*,&,%,$,#,@)ء"})
           .trim(),

       RememberAcc: z.boolean()

}).refine( (data) => data.Password === data.confirmPassword, {
              message : "كلمة السر ليست متطابقة",
              path: ["confirmPassword"]
           })
           

export const LoginSchema = z.object({
       phoneNumber: z.string()
                 .trim()
                 .regex(/^01[0-2,5][0-9]{8}$/ , {message:  "ادخل رقم مصري صحيح" }), 

    Password: z.string()
           .max(20,{ message: "ادخل اقل من 20 "})
           .min(1 , { message: "لا يمكن ان لا تضع كلمة سر"})
           .regex(/[a-zA-Z]/ ,  { message: "يجب ان تحتوي كلمة السر علي حرف علي الاقل"})
           .regex(/[0-9]/ ,  { message: "يجب ان تحتوي كلمة السر علي أرقام"})
           .regex(/[^a-zA-Z0-9]/ ,  { message: "يجب ان تحتوي كلمة السر علي احد التالي (*,&,%,$,#,@)ء"})
           .trim()
})
