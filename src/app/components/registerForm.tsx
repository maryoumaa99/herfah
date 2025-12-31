import { RegisterFormSchema } from "@/lib/rules";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm , SubmitHandler } from "react-hook-form";

import z from "zod";
import Inputs from "./inputs";
import InputError from "./inputError";

interface FormProps {
  onSwitch: () => void;
}

export default function RegisterForm({ onSwitch }: FormProps) {

  type InputRegister = z.infer< typeof RegisterFormSchema>
  const { handleSubmit , register ,reset, formState: {errors , isSubmitting}} = useForm<InputRegister>({
    mode:"onChange",
    resolver: zodResolver(RegisterFormSchema),
  });
  const onSubmit : SubmitHandler<InputRegister> = (data) => {
    reset()
    console.log(data);
  };

  const registInputs = [
    {type : "text" , palceHolder : "ادخل الاسم" , register : register("name") , title : "الاسم" , errors : errors.name} ,
    {type : "tel" , palceHolder : "ادخل رقم الهاتف" , register : register("phoneNumber") , title : "رقم الهاتف" , errors : errors.phoneNumber} ,
    {type : "password" , palceHolder : "ادخل كلمة السر" , register : register("Password") , title : "كلمة السر" , errors : errors.Password} ,
    {type : "password" , palceHolder : "ادخل كلمة السر" , register : register("confirmPassword") , title : "اعد كتابة كلمة السر" ,errors : errors.confirmPassword}
  ]

  return (
    <div className="flex flex-col justify-center sm:h-screen p-2 bg-[var(--background)]">
      <div className="max-w-sm w-full mx-auto p-4">

        {/* Logo */}
        <div className="text-center mb-2">
          <Image
            width={50}
            height={50}
            src="/logo/Vlogo.png"
            alt="logo"
            className="mx-auto mb-6 transition-transform duration-300 "
          />
          <p className="text-[var(--text)] text-2xl  block">انشاء حساب جديد</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 text-right text-amber-50 mt-3">

            {registInputs.map((input , i ) => (
              <div key={i}>
                 <Inputs title ={input.title} 
                      type= {input.type} 
                      palceHolder={input.palceHolder} 
                      register={input.register}/>
                      <InputError errors={input.errors}/>
              </div>
              
            ))}

            {/* Terms */}
            <div className="flex items-center justify-end gap-2">
              <label htmlFor="terms" className="text-[var(--text)] block text-sm mr-2">
                تذكر حسابي
              </label>
              <input
                id="terms"
                type="checkbox"
                {...register("RememberAcc") }
                className="h-3 w-3 cursor-pointer border-gray-300 rounded"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-3 text-sm tracking-wide rounded-md cursor-pointer text-white bg-[var(--accent)] transition-transform duration-300 hover:scale-105"
            >
              إنشاء حساب
            </button>
          </div>


          {/* Login */}
            <p className="text-[var(--text)] text-sm mt-6 text-center">
                <button type="button" className="text-[var(--accent)] font-medium text-[18px] hover:underline mr-1" onClick={onSwitch}>
                سجل الدخول
                </button>
            لديك حساب بالفعل؟   
                
            </p>
        </form>
      </div>
    </div>
  );
}
