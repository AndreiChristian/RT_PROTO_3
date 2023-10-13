import prisma from "@/prisma"

export default async function Page() {

  const templates = await prisma.template.findMany({
    orderBy: {
      id: "asc"
    }
  })

  return <main>
    {templates.length === 0 ? <h1>No Templates Yet</h1> : <h2>Hello</h2>}
  </main>
}
