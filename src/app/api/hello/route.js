import corsHeaders from "@/lib/cors";
import { NextResponse } from "next/server";
export async function OPTIONS(req) { 
 return new Response(null, { 
 status: 200, 
 headers: corsHeaders(req), 
 }); 
} 
export async function GET(req) { 
 const message = { 
 message: "hello world"
 }; 
 return NextResponse.json(message, { 
 headers: corsHeaders(req), 
 }); 
}
