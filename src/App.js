import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Cpu,
  Zap,
  Lock,
  ChevronRight,
  Activity,
  Database,
  Shield,
  Fingerprint,
  Loader2,
  ShieldCheck,
  Mail,
  CreditCard,
  X,
  FileText,
  AlertTriangle,
  RefreshCcw,
  Eye,
  Gauge,
  Network,
  Code,
  GitCommit,
} from "lucide-react";

// --- 1. THE LEGAL CENTER MODAL ---
export function LegalModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("terms");

  if (!isOpen) return null;

  const tabs = [
    { id: "terms", label: "Terms of Service", icon: FileText },
    { id: "refunds", label: "Refund Policy", icon: RefreshCcw },
    { id: "privacy", label: "Privacy Policy", icon: Eye },
    { id: "earnings", label: "Earnings Disclaimer", icon: AlertTriangle },
  ];

  const content = {
    terms: (
      <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
        <h3 className="text-xl font-bold text-white mb-4">
          Software License Agreement
        </h3>
        <p>
          By accessing LogicStream AI, you are purchasing a non-exclusive,
          non-transferable license to utilize our proprietary logic and
          execution environment. You are not purchasing the underlying
          intellectual property, source code, or distribution rights.
        </p>
        <p>
          Users are strictly prohibited from reverse-engineering, reselling, or
          redistributing the LogicStream AI architecture. This tool is provided
          "as is" for the explicit purpose of high-frequency data synthesis and
          automated logic processing.
        </p>
        <p>
          We reserve the right to terminate access to the execution environment
          immediately if a violation of these terms, or malicious use of the
          platform, is detected by our automated security protocols.
        </p>
      </div>
    ),
    refunds: (
      <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
        <h3 className="text-xl font-bold text-white mb-4">
          Digital Goods Return Policy
        </h3>
        <p>
          Because LogicStream AI is a digital software license and access is
          granted immediately upon transaction completion,{" "}
          <strong className="text-white">all sales are strictly final.</strong>
        </p>
        <p>
          In accordance with international digital goods standards, once the
          digital delivery mechanism has fired and the product link or access
          key has been generated and sent to your email, we cannot process
          refunds, exchanges, or cancellations.
        </p>
        <p>
          By initializing the transaction, you explicitly waive your right to a
          cooling-off period, acknowledging that the digital nature of the
          execution environment means it cannot be "returned." Please ensure
          this architecture meets your requirements prior to purchase.
        </p>
      </div>
    ),
    privacy: (
      <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
        <h3 className="text-xl font-bold text-white mb-4">
          Data Privacy & Processing
        </h3>
        <p>
          LogicStream AI complies with standard GDPR and CCPA requirements. We
          collect only the minimum necessary telemetry required to facilitate
          your transaction and deliver your digital software license (e.g.,
          email address, standard analytics).
        </p>
        <p>
          All payment processing is handled off-site by secured, verified
          third-party gateways. LogicStream AI does not store, process, or have
          access to your raw credit card data or financial credentials.
        </p>
        <p>
          Your email address will be used exclusively for product delivery,
          critical system updates, and security patches. We do not sell user
          data to third-party brokers.
        </p>
      </div>
    ),
    earnings: (
      <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
        <h3 className="text-xl font-bold text-white mb-4">
          Performance & Results Disclaimer
        </h3>
        <p>
          LogicStream AI provides a high-performance execution environment and
          automated logic retrieval system. However, we make no guarantees
          regarding specific financial earnings, competitive outcomes, or
          leaderboard placements resulting from the use of this software.
        </p>
        <p>
          The effectiveness of this tool is entirely dependent on the user's
          input, configuration, and the specific third-party platforms it is
          applied to. Any performance metrics or throughput speeds referenced on
          this site are based on optimal testing environments and may vary.
        </p>
        <p>
          The user assumes all risk associated with deploying automated
          solutions in competitive environments. LogicStream AI is not liable
          for account suspensions or penalties incurred on third-party
          platforms.
        </p>
      </div>
    ),
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl bg-[#020202] border border-white/10 rounded-2xl shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)] overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-[600px] animate-fade-in">
        <div className="w-full md:w-64 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/10 p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-8 text-white">
            <ShieldCheck className="w-6 h-6 text-indigo-500" />
            <span className="font-bold tracking-widest text-sm uppercase">
              Legal Center
            </span>
          </div>
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-white bg-black/50 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-8 md:p-10">
            <div className="max-w-2xl">{content[activeTab]}</div>
          </div>
          <div className="bg-white/[0.02] border-t border-white/10 p-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <Mail className="w-4 h-4 text-cyan-500" /> Instant Digital
                Delivery
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <Lock className="w-4 h-4 text-cyan-500" /> 256-bit SSL
                Encryption
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <CreditCard className="w-4 h-4 text-cyan-500" /> Verified
                Merchant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- 2. THE MAIN APPLICATION ---
export default function LogicStreamApp() {
  const [terminalLines, setTerminalLines] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const sequence = [
      "[INIT] Booting LogicStream Kernel v2.4.1...",
      "[SYS] Connecting to trivia data streams...",
      "[AUTH] Bypassing standard protocol delays...",
      "[NET] Establishing secure WebSockets connection...",
      "[OK] System Nominal. Awaiting live match.",
    ];
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < sequence.length) {
        setTerminalLines((prev) => [...prev, sequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInitializeTransaction = () => {
    setIsInitializing(true);
    console.log("[SYS] Initiating secure handshake...");
    setTimeout(() => {
      console.log("[OK] Transaction ready. Redirecting...");
      setIsInitializing(false);
      alert(
        "UI MOCK: The user would instantly teleport to the Shopify checkout screen here."
      );
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-indigo-500/30 font-sans">
      {/* AMBIENT EFFECTS */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[100] w-8 h-8 rounded-full border border-indigo-500/50 bg-indigo-500/10 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_20px_rgba(99,102,241,0.4)] hidden md:block"
      />
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      {/* NAV */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[90%] max-w-2xl rounded-full border ring-1 ring-white/10 ${
          scrolled
            ? "bg-[#020202]/80 backdrop-blur-2xl py-3 px-6"
            : "bg-transparent border-transparent py-4 px-2"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-500" />
            <span className="font-bold tracking-widest text-sm uppercase">
              LogicStream AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#engine" className="hover:text-white transition-colors">
              The Engine
            </a>
            <a
              href="#developers"
              className="hover:text-white transition-colors"
            >
              Developers
            </a>
            <a
              href="#transaction"
              className="hover:text-white transition-colors"
            >
              Licensing
            </a>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("transaction")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="text-xs font-bold uppercase tracking-wider bg-white text-black px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-900 transition-all"
          >
            Initialize
          </button>
        </div>
      </nav>

      {/* HERO */}
      <main className="relative pt-40 pb-20 px-6 flex flex-col items-center justify-center min-h-screen">
        <div className="w-[85%] max-w-5xl mx-auto flex flex-col items-center text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-white/70">
              Engine v2.4.1 Online
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-8 leading-tight">
            Algorithmic precision. <br className="hidden md:block" />
            Instant resolution.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 font-light leading-relaxed">
            LogicStream is the underlying architecture for high-frequency data
            synthesis. Automate responses, maximize time-bonuses, and dominate
            the leaderboard with zero friction.
          </p>

          {/* Live Terminal */}
          <div className="w-full max-w-3xl rounded-xl border border-white/10 bg-black/50 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(99,102,241,0.5)] text-left mb-16">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-white/40">
                logic_kernel.exe
              </span>
            </div>
            <div className="p-6 font-mono text-sm h-64 overflow-y-auto flex flex-col gap-2">
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className={`${
                    line?.includes("[OK]")
                      ? "text-cyan-400"
                      : "text-indigo-300/80"
                  } animate-fade-in`}
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center gap-2 text-white/50 animate-pulse">
                <Terminal className="w-4 h-4" />
                <span>_</span>
              </div>
            </div>
          </div>

          {/* NEW: TELEMETRY DASHBOARD */}
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Avg Query Latency", value: "12ms", icon: Zap },
              { label: "Stream Interception", value: "99.9%", icon: Network },
              { label: "Uptime (90d)", value: "100%", icon: Activity },
              { label: "Database Cross-Ref", value: "0.4s", icon: Gauge },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors hover:border-indigo-500/30"
              >
                <stat.icon className="w-5 h-5 text-indigo-400 mb-2" />
                <span className="text-2xl font-bold text-white tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40 font-mono uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* NEW: API PREVIEW */}
      <section
        id="developers"
        className="py-24 px-6 relative z-10 border-y border-white/5 bg-white/[0.01]"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6">
              <Code className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono text-indigo-300">
                Developer API
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tighter mb-4">
              Integrates in 3 lines of code.
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              You don't need to rebuild your stack. LogicStream acts as a silent
              middleware layer, intercepting the websocket feed and injecting
              the optimized payload instantly.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl font-mono text-sm">
              <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex gap-4 text-xs text-white/40">
                <span className="text-white">init_bot.py</span>
                <span>config.json</span>
              </div>
              <div className="p-6 text-gray-300 overflow-x-auto">
                <span className="text-indigo-400">import</span> logicstream{" "}
                <span className="text-indigo-400">from</span> '@core'
                <br />
                <br />
                <span className="text-gray-500">
                  # 1. Hook into the live match stream
                </span>
                <br />
                client = logicstream.
                <span className="text-cyan-400">connect</span>(target_url=
                <span className="text-green-400">
                  "wss://live-trivia.app/socket"
                </span>
                )<br />
                <br />
                <span className="text-gray-500">
                  # 2. Set auto-solve threshold
                </span>
                <br />
                client.<span className="text-cyan-400">configure</span>
                (delay_ms=<span className="text-orange-400">450</span>,
                accuracy_target=<span className="text-orange-400">0.99</span>)
                <br />
                <br />
                <span className="text-gray-500"># 3. Deploy interceptor</span>
                <br />
                client.<span className="text-cyan-400">listen_and_execute</span>
                ()
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID (ENGINE) */}
      <section id="engine" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter mb-4">
              The Engine
            </h2>
            <p className="text-white/50 text-lg max-w-md">
              Proprietary architecture designed for maximum throughput and
              sub-second answer retrieval.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors ring-1 ring-transparent hover:ring-indigo-500/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-500" />
              <Cpu className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">
                WebSocket Interception
              </h3>
              <p className="text-white/50 leading-relaxed max-w-sm">
                Hooks directly into the target platform's data stream to parse
                questions milliseconds before they render on-screen.
              </p>
            </div>
            <div className="group relative col-span-1 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors ring-1 ring-transparent hover:ring-cyan-500/30">
              <Zap className="w-10 h-10 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Points Maximizer</h3>
              <p className="text-white/50 leading-relaxed">
                Calculates and triggers the submit payload instantly to
                guarantee maximum time-based points.
              </p>
            </div>
            <div className="group relative col-span-1 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors ring-1 ring-transparent hover:ring-indigo-500/30">
              <Fingerprint className="w-10 h-10 text-indigo-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Anti-Detection</h3>
              <p className="text-white/50 leading-relaxed">
                Humanized delay algorithms and randomized request headers ensure
                your connection remains unflagged.
              </p>
            </div>
            <div className="group relative col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors ring-1 ring-transparent hover:ring-cyan-500/30 flex items-center justify-between">
              <div>
                <Database className="w-10 h-10 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold mb-3">Deep Knowledge Base</h3>
                <p className="text-white/50 leading-relaxed max-w-sm">
                  Cross-references inputs against a live, massive dataset to
                  guarantee high accuracy across all categories.
                </p>
              </div>
              <div className="hidden md:block w-32 h-32 border-4 border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: CHANGELOG TIMELINE */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GitCommit className="w-6 h-6 text-white/50" />
            <h2 className="text-2xl font-bold text-white">System Changelog</h2>
          </div>
          <div className="border-l border-white/10 pl-6 space-y-10 relative">
            {[
              {
                v: "v2.4.1",
                date: "Last week",
                text: "Optimized payload headers to bypass new randomized delay checks on primary trivia platforms.",
              },
              {
                v: "v2.3.9",
                date: "2 weeks ago",
                text: "Expanded deep knowledge base cross-referencing capabilities for lightning-round timed constraints.",
              },
              {
                v: "v2.2.0",
                date: "Last month",
                text: "Rewrote underlying websocket interceptor logic to drop average query latency below 15ms.",
              },
            ].map((log, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-4 ring-[#020202]" />
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono font-bold text-white">
                    {log.v}
                  </span>
                  <span className="text-xs text-white/40">{log.date}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {log.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKOUT */}
      <section
        id="transaction"
        className="py-32 px-6 relative z-10 flex justify-center"
      >
        <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-2xl p-10 shadow-[0_0_80px_-20px_rgba(99,102,241,0.3)] relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_10px_rgba(99,102,241,1)]" />
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                LogicStream Core License
              </h3>
              <p className="text-sm text-white/50">
                Full tool access & continuous updates
              </p>
            </div>
            <div className="flex items-center gap-1 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-mono font-bold">
              <Shield className="w-3 h-3" /> SECURE
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
            <span className="text-5xl font-black tracking-tighter">$29.99</span>
            <span className="text-white/50 text-sm font-medium">
              / one-time protocol fee
            </span>
          </div>
          <ul className="space-y-4 mb-10 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Unlimited
              execution environment access
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />{" "}
              Source-code delivery mechanism
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Bypass
              standard queuing protocols
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />{" "}
              <span className="text-white/40">Enterprise SLA (Locked)</span>
            </li>
          </ul>
          <button
            onClick={handleInitializeTransaction}
            disabled={isInitializing}
            className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-indigo-50 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isInitializing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Establishing Secure
                Link...
              </>
            ) : (
              <>
                Initialize Transaction{" "}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg pt-16 pb-8 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-indigo-500" />
              <span className="font-bold tracking-widest text-sm uppercase">
                LogicStream AI
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/50">
              <span className="w-2 h-2 rounded-full bg-green-500" /> System
              Status: Nominal
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white mb-2">Protocol</h4>
            <a
              href="#"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Setup Guide
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white mb-2">Legal</h4>
            <button
              onClick={() => setIsLegalModalOpen(true)}
              className="text-sm text-left text-white/50 hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setIsLegalModalOpen(true)}
              className="text-sm text-left text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex justify-between items-center text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} LogicStream AI. All rights reserved.
          </p>
          <p className="font-mono">v2.4.1</p>
        </div>
      </footer>

      {/* MODAL & STYLES */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `,
        }}
      />
    </div>
  );
}
