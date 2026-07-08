import { NextResponse } from "next/server";
import { getQuestions, getTotalQuestions, getCategoryBreakdown } from "@/lib/quiz-data";

export async function GET() {
  return NextResponse.json({
    questions: getQuestions(),
    total: getTotalQuestions(),
    categories: getCategoryBreakdown(),
  });
}
