import supabase from "@/app/utils/supabase/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = (await req.clone().json()) as { email: string };
  if (!email) {
    return NextResponse.json(
      { error: "Email Required" },
      {
        status: 400,
      },
    );
  }
  const already = await checkAlready(email);
  if (already) {
    return NextResponse.json(
      { error: "Email Already in our Records!" },
      {
        status: 409,
      },
    );
  }
  const inserted = await insertToDb(email);
  if (!inserted) {
    return NextResponse.json(
      { error: "Something Went Wrong!" },
      {
        status: 500,
      },
    );
  }
  return NextResponse.json({ email: email });
}

async function insertToDb(email: string): Promise<boolean> {
  const { error } = await supabase
    .from("Registrations")
    .insert([{ email: email }]);
  if (error) return false;
  return true;
}

async function checkAlready(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from("Registrations")
    .select()
    .eq("email", email);
  if (error || data?.length <= 0) {
    return false;
  }
  return true;
}
