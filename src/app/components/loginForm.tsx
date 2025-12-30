import Image from "next/image"


interface FormProps {
  onSwitch: () => void
}

export default function LoginForm({onSwitch} : FormProps){



    return(
        <>
            <div className="flex flex-col justify-center sm:h-screen p-4 bg-[var(--background)]">
                    <div className="max-w-md w-full mx-auto  p-8">

                    {/* Logo */}
                    <div className="text-center  ">
                    
                    <Image width={100} height={100}
                        src="/logo/Vlogo.png"
                        alt="logo"
                        className="w-10 mx-auto mb-4"
                    />

                    <p className="text-[var(--text)] text-3xl block" >  تسجيل دخول </p>
                    </div>

                    

                    <form>
                    <div className="space-y-6 text-right text-amber-50 mt-5">

                            {/* Phone */}
                            <div>
                            <label className="text-[var(--text)] text-2xl mb-2 block">
                                رقم الهاتف
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="ادخل رقم الهاتف"
                                className="text-[var(--accent)] bg-white border text-right border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[var(--accent)]"
                            />
                            </div>

                            {/* Password */}
                            <div>
                            <label className="text-[var(--text)] text-2xl mb-2 block">
                                كلمة السر
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="ادخل كلمة السر"
                                className="text-[var(--accent)] bg-white border text-right border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[var(--accent)]"
                            />
                            </div>

                            {/* Terms */}
                            <div className="flex items-center justify-end gap-2 ">
                                            <label htmlFor="terms" className="text-[var(--text)] mr-3 block text-md">
                            تذكر حسابي
                            
                            </label>
                            <input
                                id="terms"
                                type="checkbox"
                                className="h-4 w-4 cursor-pointer shrink-0 text-[var(--background)] focus:ring-[via-red-400] border-gray-300 rounded"
                            />

                            </div>
                        </div>

                        {/* Submit */}
                        <div className="mt-12">
                            <button
                            type="submit"
                            className="w-full py-3 px-4 text-sm tracking-wider text-[19px] rounded-md cursor-pointer text-white bg-[var(--accent)]  focus:outline-none"
                            >
                                تسجيل دخول
                            </button>
                        </div>

                        {/* Login */}
                        <p className="text-[var(--text)] text-sm mt-6 text-center">
                            <button type="button" className="text-[var(--accent)] font-medium text-[18px] hover:underline mr-1" onClick={onSwitch}>
                            انشاء حساب
                            </button>
                           ليس لديك حساب ؟
                            
                        </p>
                        </form>
                    </div>
            </div>
        </>
    )
}