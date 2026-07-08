@import "tailwindcss";

@theme {
  --color-brand-50: #f0f4ff;
  --color-brand-100: #dbe4ff;
  --color-brand-200: #bac8ff;
  --color-brand-300: #91a7ff;
  --color-brand-400: #748ffc;
  --color-brand-500: #5c7cfa;
  --color-brand-600: #4c6ef5;
  --color-brand-700: #4263eb;
  --color-brand-800: #3b5bdb;
  --color-brand-900: #364fc7;

  --color-accent-400: #f783ac;
  --color-accent-500: #e64980;

  --color-surface-50: #fafbfc;
  --color-surface-100: #f1f3f5;
  --color-surface-200: #e9ecef;
  --color-surface-300: #dee2e6;
  --color-surface-400: #ced4da;
  --color-surface-500: #adb5bd;
  --color-surface-600: #868e96;
  --color-surface-700: #495057;
  --color-surface-800: #343a40;
  --color-surface-900: #212529;

  --color-dark-bg: #0a0a0f;
  --color-dark-surface: #141419;
  --color-dark-card: #1c1c24;
  --color-dark-border: #2a2a35;
  --color-dark-text: #e4e4e7;
  --color-dark-muted: #71717a;

  --font-sans: "Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-display: "Inter", "SF Pro Display", -apple-system, sans-serif;
}

/* Base Styles */
html {
  scroll-behavior: smooth;
}

body {
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Selection */
::selection {
  background-color: var(--color-brand-200);
  color: var(--color-brand-900);
}

.dark ::selection {
  background-color: var(--color-brand-800);
  color: white;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--color-surface-300);
  border-radius: 3px;
}

.dark ::-webkit-scrollbar-thumb {
  background: var(--color-dark-border);
}

/* Animations */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

/* Glass Effects */
.glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.dark .glass {
  background: rgba(28, 28, 36, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
}

.dark .glass-card {
  background: rgba(28, 28, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
}

/* Premium button */
.btn-primary {
  background: linear-gradient(135deg, var(--color-brand-500) 0%, var(--color-brand-700) 100%);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 14px rgba(76, 110, 245, 0.35);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(76, 110, 245, 0.45);
}

.btn-primary:active {
  transform: translateY(0);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--color-brand-500) 0%, var(--color-accent-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Progress bar */
.progress-bar {
  background: linear-gradient(90deg, var(--color-brand-500) 0%, var(--color-brand-400) 100%);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
