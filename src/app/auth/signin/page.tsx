import SignIn from "./SignIn";

export default function Page() {
  return <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 " >
    <section className="w-1/2 h-1/2 rounded-lg bg-zinc-900 shadow-lg flex flex-col items-center justify-center p-4 gap-4 " >
      <h1 className="font-sans text-2xl" >Login</h1>
      <SignIn />
    </section>
  </main>
}
