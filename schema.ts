import { NextResponse } from "next/server";
import { db } from "@/db";
import { quizSessions } from "@/db/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { responses, report } = body;

    const [session] = await db
      .insert(quizSessions)
      .values({
        status: "completed",
        currentStep: Object.keys(responses || {}).length,
        totalSteps: 55,
        responses: responses || {},
        completedAt: new Date(),
        aiReport: report || {},
      })
      .returning();

    return NextResponse.json({ success: true, sessionId: session.id });
  } catch (error) {
    console.error("Error saving quiz session:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save session" },
      { status: 500 }
    );
  }
}
