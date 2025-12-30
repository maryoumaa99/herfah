import { RegisterFormSchema } from "@/lib/rules";


 interface FormProps {
  formData: FormData
}

export async function Register({formData} : FormProps){
    const validatedFields = RegisterFormSchema.safeParse({
        name : formData.get("name"),
        phoneNumber : formData.get("phone"),
        password : formData.get("password")
        
    })

     console.log(validatedFields)
    if(!validatedFields.success){
       console.log(validatedFields.error.flatten().fieldErrors)
        return{
            errors: validatedFields.error.flatten().fieldErrors
        }
    }
}