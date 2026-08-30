import React, { useState, useRef, useEffect } from "react";
import "./ChatBot.css";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  chips?: string[];
}

const QUICK_PROMPTS = [
  "Explain FractalDB Spacetime",
  "How does MinhAI run in <2GB VRAM?",
  "What is the Intent Manifesto?",
  "Tell me about Fluid substrate",
  "Deploy Enterprise UniBi ERP"
];

const BOT_KNOWLEDGE_BASE: Record<string, string> = {
  fractaldb: `FractalDB is i2c's Layer 6 Spacetime database. It replaces traditional linear SQL/NoSQL with Lamport-clock branchable spacetime graphs, enabling deterministic state travel, sub-8ms conflict resolution, and zero-downtime schema evolution.`,
  minhai: `MinhAI is an edge-native cognitive SLM reasoning core engineered to execute completely offline in <2GB VRAM under strict grammar constraints (ADR-001 ZK verified), making it ideal for mobile, embedded, and high-security enterprise environments.`,
  manifesto: `The Intent Manifesto asserts that hand-written code and informal prose specs are obsolete. In the i2c Vibe paradigm, business intent codified in ULSX is the sole source of truth, and executable code is merely a locked, verified build artifact.`,
  fluid: `Fluid is a next-generation repository and resource substrate for AI-first software work. It maintains Git-compatible workflows while advancing toward Fluid-native particles, graph-shaped history, FastCDC chunking, and BLAKE3 cryptographic immutability.`,
  unibi: `UniBi is i2c's enterprise ERP & Continuous Business Intelligence platform. It combines automated ledger reconciliation, supply chain radar, and real-time operational risk forecasting with sub-second OLAP queries.`,
  default: `I am the i2c AI Specialist. I can provide in-depth specifications on any of our 36 enterprise platforms, 7-layer machine-native substrate, Lamport spacetime persistence, or private edge AI runtimes.`
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "Hello! Welcome to i2c Inc. Global Portal. I am your AI Architecture Specialist. How can I assist your enterprise today?",
      time: "Just now",
      chips: QUICK_PROMPTS
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal("");
    setIsTyping(true);

    // Simulate AI thinking and reply
    setTimeout(() => {
      const lower = query.toLowerCase();
      let replyText = BOT_KNOWLEDGE_BASE.default;

      if (lower.includes("fractal") || lower.includes("spacetime") || lower.includes("database")) {
        replyText = BOT_KNOWLEDGE_BASE.fractaldb;
      } else if (lower.includes("minh") || lower.includes("vram") || lower.includes("edge")) {
        replyText = BOT_KNOWLEDGE_BASE.minhai;
      } else if (lower.includes("manifesto") || lower.includes("vibe") || lower.includes("intent")) {
        replyText = BOT_KNOWLEDGE_BASE.manifesto;
      } else if (lower.includes("fluid") || lower.includes("cas") || lower.includes("storage")) {
        replyText = BOT_KNOWLEDGE_BASE.fluid;
      } else if (lower.includes("unibi") || lower.includes("erp") || lower.includes("finance")) {
        replyText = BOT_KNOWLEDGE_BASE.unibi;
      } else if (lower.includes("contact") || lower.includes("demo") || lower.includes("briefing")) {
        replyText = `You can connect directly with our engineering team at contact@i2cw.com or visit our Vietnam & US offices. We provide tailored technical briefings and enterprise cluster deployments.`;
      }

      const botReply: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <div className="floating-chatbot-root">
      {/* Floating Launcher Button */}
      <button
        className={`chatbot-launcher-btn ${isOpen ? "is-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant Chat"
        title="i2c AI Assistant"
      >
        <span className="launcher-pulse-ring"></span>
        <div className="launcher-icon-wrap">
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-sparkles"></i>
          )}
        </div>
        {!isOpen && (
          <span className="launcher-badge-text">
            <span>AI Assist</span>
          </span>
        )}
      </button>

      {/* Floating Chat Dialog Window */}
      {isOpen && (
        <div className="chatbot-dialog-window glass-panel" role="dialog" aria-label="AI Chat Assistant">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-profile">
              <div className="bot-avatar-frame">
                <i className="fa-solid fa-brain text-blue"></i>
                <span className="bot-status-online"></span>
              </div>
              <div className="bot-header-meta">
                <h4 className="bot-name">i2c AI Specialist</h4>
                <span className="bot-role">MinhAI Engine &bull; Online</span>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button
                className="chatbot-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="chatbot-messages-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message-row ${msg.sender}`}>
                {msg.sender === "bot" && (
                  <div className="msg-avatar">
                    <i className="fa-solid fa-microchip"></i>
                  </div>
                )}
                <div className="msg-content-wrap">
                  <div className="msg-bubble">
                    <p className="msg-text">{msg.text}</p>
                  </div>
                  <span className="msg-time">{msg.time}</span>

                  {/* Suggestion Chips */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="msg-chips-container">
                      {msg.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          className="msg-chip-btn"
                          onClick={() => handleSendMessage(chip)}
                        >
                          <i className="fa-solid fa-bolt"></i>
                          <span>{chip}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row bot is-typing-row">
                <div className="msg-avatar">
                  <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="typing-dots-bubble">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            className="chatbot-footer-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              className="chatbot-input-field"
              placeholder="Ask about products, architecture, or SLA..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={!inputVal.trim()}
              aria-label="Send message"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
          <div className="chatbot-footnote">
            <span>Verified ADR-001 ZK Knowledge Model</span>
          </div>
        </div>
      )}
    </div>
  );
}