import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {

  const body = req.body;

  // stupid shit necessary for a very basic functionality
  let passedValue = await new Response(body).text();
  let valueToJson = JSON.parse(passedValue);

  console.log(valueToJson)

  return Response.json({ valueToJson })
}
