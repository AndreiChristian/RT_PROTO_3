import prisma from "@/prisma"

export default async function Home() {

  const count = await prisma.user.count()
  if(count === 0){
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
      <h2>User count: {count}</h2>

    </main>
  )
}
