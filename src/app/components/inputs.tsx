import { UseFormRegisterReturn } from "react-hook-form"

type inputProps  = {
    type : string,
    palceHolder : string,
    title :string,
    register : UseFormRegisterReturn<string>
}
const Inputs = ({type , palceHolder , register , title} : inputProps) => {
  return (
    <>
        <label className="text-[var(--text)] text-lg block mb-1">{title}</label>
              <input
                type={type}
                placeholder={palceHolder}
                className="text-[var(--accent)] mb-3 bg-white border  text-right border-gray-300 w-full text-sm px-3 py-2 rounded-md outline-[var(--accent)] transition-transform duration-300 hover:scale-105"
                {...register}
              />
    </>
              
           
  )
}

export default Inputs
