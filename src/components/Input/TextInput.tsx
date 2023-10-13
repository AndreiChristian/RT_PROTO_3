interface TextInputProps {
  label: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>
  type?: "text" | "email" | "password"
}

export default function TextInput({ type = "text", label, value, setValue }: TextInputProps) {
  return <label
    htmlFor="UserEmail"
    className=" w-full relative block overflow-hidden border-b border-zinc-600 bg-transparent pt-3 focus-within:border-zinc-200"
  >
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      type={type}
      id="UserEmail"
      placeholder="Email"
      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
      focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
    />

    <span
      className="absolute start-0 top-2 -translate-y-1/2 
      text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 
      peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
    >
      {label}
    </span>
  </label>
}
