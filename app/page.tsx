export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visualize Your{" "}
          <span className="text-[#58a6ff]">Context Window</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Analyze prompt token usage in real-time, visualize consumption against model context windows, and get actionable optimization suggestions — built for AI engineers and LLM developers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Get Started — $25/mo
          </a>
          <a href="#features" className="text-[#58a6ff] hover:underline text-base">
            See how it works ↓
          </a>
        </div>
        {/* Visual mock */}
        <div id="features" className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">prompt-analyzer.tsx</span>
          </div>
          <div className="mb-4">
            <div className="text-xs text-[#8b949e] mb-2">Context Window Usage — GPT-4 (128k tokens)</div>
            <div className="w-full bg-[#0d1117] rounded-full h-5 overflow-hidden">
              <div className="h-5 rounded-full flex">
                <div className="bg-[#58a6ff] h-full" style={{width:"18%"}} title="System prompt"></div>
                <div className="bg-[#3fb950] h-full" style={{width:"34%"}} title="User messages"></div>
                <div className="bg-[#d29922] h-full" style={{width:"11%"}} title="Assistant turns"></div>
              </div>
            </div>
            <div className="flex gap-4 mt-2 text-xs">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#58a6ff] inline-block"></span>System (18%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#3fb950] inline-block"></span>User (34%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#d29922] inline-block"></span>Assistant (11%)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#30363d] inline-block"></span>Free (37%)</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-[#0d1117] rounded-lg p-3">
              <div className="text-[#58a6ff] text-xl font-bold">81,920</div>
              <div className="text-xs text-[#8b949e]">Tokens Used</div>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-3">
              <div className="text-[#3fb950] text-xl font-bold">$0.082</div>
              <div className="text-xs text-[#8b949e]">Est. Cost</div>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-3">
              <div className="text-[#d29922] text-xl font-bold">37%</div>
              <div className="text-xs text-[#8b949e]">Window Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time token counting (tiktoken)",
              "Visual context window breakdown",
              "Multi-model support (GPT-4, Claude, Gemini)",
              "Cost estimation per request",
              "Optimization suggestions",
              "Unlimited prompts",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Now — $25/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which AI models are supported?",
              a: "GPT-3.5, GPT-4, GPT-4o, Claude 3 (Haiku, Sonnet, Opus), and Gemini Pro/Ultra — with accurate tokenization for each.",
            },
            {
              q: "How accurate is the token counting?",
              a: "We use tiktoken (OpenAI's official tokenizer) and model-specific tokenizers to ensure counts match what you're billed for.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing portal — no questions asked, no lock-in.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} AI Prompt Context Window Visualizer. All rights reserved.
      </footer>
    </main>
  )
}
