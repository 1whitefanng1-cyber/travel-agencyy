import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, User, Sparkles } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from "react-markdown";

let aiInstance: GoogleGenAI | null = null;
const getAI = () => {
  if (!aiInstance) {
    const apiKey = typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : undefined;
    if (!apiKey) {
      // In development/preview, we might want to warn instead of crash
      console.warn("GEMINI_API_KEY is not defined");
      return null;
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hello! I am your AI travel assistant. Looking to plan a luxury escape? Ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = getAI();
      if (!ai) {
        setMessages((prev) => [...prev, { role: "bot", text: "I'm sorry, I'm currently missing my API key to help you. Please set it up in the environment." }]);
        return;
      }
      const model = ai.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }]
          }
        ],
        generationConfig: {
          maxOutputTokens: 1000,
        },
      });

      const botText = result.response.text() || "I'm sorry, I couldn't process that. Please contact our support.";
      setMessages((prev) => [...prev, { role: "bot", text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages((prev) => [...prev, { role: "bot", text: "Oops! Something went wrong. Let's try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 bg-[#050505] border border-white/10 p-2 pr-6 rounded-full backdrop-blur-xl shadow-2xl group"
      >
        <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
          {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white fill-current" />}
        </div>
        <div className="text-left">
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">AI Assistant</p>
          <p className="text-xs font-medium text-white transition-colors group-hover:text-cyan-400">Design your journey</p>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, x: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, x: -50 }}
            className="absolute bottom-20 left-0 w-[400px] max-h-[600px] glass-dark rounded-[32px] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-white/5 border-b border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-glow/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-cyan-glow" />
              </div>
              <div>
                <h4 className="font-bold tracking-tight">NomadNest Assistant</h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-white/50 uppercase font-bold">Online</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4 custom-scrollbar min-h-[300px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-gold text-midnight font-medium" 
                      : "bg-white/5 text-white/80 border border-white/10"
                  }`}>
                    <div className="markdown-body">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-cyan-glow animate-bounce" />
                      <div className="w-1 h-1 rounded-full bg-cyan-glow animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1 h-1 rounded-full bg-cyan-glow animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me something..."
                  className="w-full bg-midnight/50 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-cyan-glow/50"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] text-center text-white/20 mt-3 uppercase tracking-widest font-bold flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-glow" />
                Powered by NomadNest AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
