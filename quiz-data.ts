"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface SessionSummary {
  id: string;
  status: string;
  currentStep: number;
  totalSteps: number;
  completedAt: string | null;
  startedAt: string;
}

export default function DashboardPage() {
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard/sessions")
      .then((r) => r.json())
      .then((data) => {
        setSessions(data.sessions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    { label: "Assessments Taken", value: sessions.length.toString(), icon: "📊" },
    { label: "Questions Answered", value: sessions.reduce((a, s) => a + s.currentStep, 0).toString(), icon: "✅" },
    { label: "Last Assessment", value: sessions[0]?.startedAt ? new Date(sessions[0].startedAt).toLocaleDateString() : "—", icon: "📅" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      {/* Header */}
      <header className="glass sticky top-0 z-40" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-xs">P</div>
            <span className="font-semibold text-sm">CareerPilot</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/quiz" className="btn-primary text-sm !py-2 !px-5">New Assessment</Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Dashboard</h1>
          <p className="text-dark-muted">Track your career exploration journey.</p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{s.icon}</span>
                <span className="text-dark-muted text-sm">{s.label}</span>
              </div>
              <div className="text-2xl font-bold">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "🎯", title: "Take Assessment", desc: "Start a new AI assessment", href: "/quiz" },
            { icon: "📊", title: "View Results", desc: "See your latest report", href: "/results" },
            { icon: "🔄", title: "Retake Quiz", desc: "Update your recommendations", href: "/quiz" },
            { icon: "🏠", title: "Back to Home", desc: "Return to landing page", href: "/" },
          ].map((action) => (
            <Link key={action.title} href={action.href} className="glass-card rounded-xl p-5 hover:scale-[1.02] transition-transform block">
              <span className="text-2xl">{action.icon}</span>
              <h3 className="font-semibold text-sm mt-3">{action.title}</h3>
              <p className="text-dark-muted text-xs mt-1">{action.desc}</p>
            </Link>
          ))}
        </div>

        {/* Session History */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-4">Assessment History</h2>
          {loading ? (
            <div className="py-8 text-center text-dark-muted text-sm">Loading...</div>
          ) : sessions.length === 0 ? (
            <div className="py-12 text-center">
              <span className="text-4xl mb-4 block">🎯</span>
              <p className="text-dark-muted text-sm mb-4">No assessments yet. Take your first one!</p>
              <Link href="/quiz" className="btn-primary text-sm !py-2 !px-5 inline-block">Start Assessment</Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sessions.map((s) => (
                <div key={s.id} className="flex items-center justify-between p-4 rounded-xl border border-dark-border hover:border-dark-muted transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${s.status === "completed" ? "bg-green-400" : "bg-amber-400"}`} />
                    <div>
                      <div className="text-sm font-medium">Assessment</div>
                      <div className="text-dark-muted text-xs">
                        {new Date(s.startedAt).toLocaleDateString()} • {s.currentStep}/{s.totalSteps} questions
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${s.status === "completed" ? "bg-green-500/10 text-green-400" : "bg-amber-500/10 text-amber-400"}`}>
                    {s.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
