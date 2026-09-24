import { useState, useEffect, useRef } from "react";

// ─── Design Tokens ────────────────────────────────────────────────────────
const C = {
  primary: "#7C4DFF", primaryD: "#5C35CC", primaryL: "rgba(124,77,255,0.10)",
  primaryG: "linear-gradient(135deg,#7C4DFF 0%,#9575CD 100%)",
  success: "#39B54A", successL: "rgba(57,181,74,0.10)",
  successG: "linear-gradient(135deg,#39B54A 0%,#4DD865 100%)",
  danger: "#FC5872", dangerL: "rgba(252,88,114,0.10)",
  dangerG: "linear-gradient(135deg,#FC5872 0%,#FF8A9D 100%)",
  warning: "#F7C242", warningL: "rgba(247,194,66,0.10)",
  info: "#AE9AF0", infoG: "linear-gradient(135deg,#AE9AF0 0%,#8B6FE0 100%)",
  aiPink: "linear-gradient(135deg,#FF6B9D 0%,#FFA06B 100%)",
  aiBlue: "linear-gradient(135deg,#A8C5FF 0%,#6B9DFF 100%)",
  aiYellow: "linear-gradient(135deg,#FFD56B 0%,#FFA06B 100%)",
  bg: "#F7F8FA", white: "#FFFFFF",
  t1: "#333333", t2: "#666666", t3: "#999999", t4: "#CCCCCC",
  border: "#E5E5E5", divider: "#F0F0F0",
  card: "0 8px 24px rgba(50,38,92,0.065)", cardSm: "0 2px 10px rgba(50,38,92,0.055)",
};
const sans: React.CSSProperties = { fontFamily: "'Inter',-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif" };

// ─── Shared UI ────────────────────────────────────────────────────────────
function StatusBar({ dark = false }: { dark?: boolean }) {
  const ink = dark ? "rgba(255,255,255,.94)" : C.t1;
  const muted = dark ? "rgba(255,255,255,.78)" : C.t2;
  return <div aria-label="状态栏" style={{ height: 44, minHeight: 44, padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", color: ink, fontSize: 10, fontWeight: 700, letterSpacing: ".01em" }}>
    <span>9:41</span>
    <Row style={{ gap: 7, color: muted }}>
      <span aria-hidden="true" style={{ display: "flex", alignItems: "flex-end", gap: 1, height: 10 }}>{[4,6,8,10].map(h => <i key={h} style={{ width: 2, height: h, borderRadius: 2, background: ink, display: "block" }}/>)}</span>
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true"><path d="M1 3.5C4.3.3 9.7.3 13 3.5M3.5 6C5.9 3.8 8.1 3.8 10.5 6M6.2 8.5a1.1 1.1 0 0 1 1.6 0" stroke={ink} strokeWidth="1.5" strokeLinecap="round"/></svg>
      <span style={{ width: 19, height: 9, border: `1.5px solid ${ink}`, borderRadius: 3, display: "inline-flex", alignItems: "center", padding: 1 }}><span style={{ width: "78%", height: "100%", borderRadius: 1.5, background: ink }}/></span>
    </Row>
  </div>;
}

function TopNav({ title, onBack, right, gradient = false }:
  { title: string; onBack?: () => void; right?: React.ReactNode; gradient?: boolean }) {
  return (
    <div style={{ flexShrink: 0, background: gradient ? C.primaryG : "rgba(255,255,255,.72)", backdropFilter: gradient ? "none" : "blur(18px) saturate(130%)", WebkitBackdropFilter: gradient ? "none" : "blur(18px) saturate(130%)", boxShadow: gradient ? "none" : "0 4px 16px rgba(44,30,84,.035)" }}>
      <StatusBar dark={gradient}/>
      <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
        <div style={{ width: 44 }}>
          {onBack && <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: gradient ? "rgba(255,255,255,0.9)" : C.primary, padding: 4 }}>
            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"><path d="M8 1L1 7.5L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>}
        </div>
        <span style={{ fontSize: 17, fontWeight: 700, color: gradient ? "#fff" : C.t1 }}>{title}</span>
        <div style={{ width: 44, display: "flex", justifyContent: "flex-end" }}>{right}</div>
      </div>
    </div>
  );
}

function Card({ children, style, onClick, className }: { children: React.ReactNode; style?: React.CSSProperties; onClick?: () => void; className?: string }) {
  return <div className={className} onClick={onClick} style={{ background: "rgba(255,255,255,.94)", borderRadius: 18, boxShadow: C.card, ...style }}>{children}</div>;
}

function Row({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return <div className={className} style={{ display: "flex", alignItems: "center", ...style }}>{children}</div>;
}

function Chip({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return <button onClick={onClick} style={{ padding: "7px 14px", borderRadius: 999, border: "none", cursor: "pointer",
    background: active ? C.primaryG : "rgba(255,255,255,.7)", color: active ? "#fff" : C.t2, fontSize: 12, fontWeight: active ? 700 : 500, boxShadow: active ? "0 5px 12px rgba(92,53,204,.16)" : "none" }}>{label}</button>;
}

function Toggle({ on }: { on: boolean }) {
  return <div style={{ width: 50, height: 28, borderRadius: 14, background: on ? C.primary : C.border, position: "relative", flexShrink: 0 }}>
    <div style={{ width: 22, height: 22, borderRadius: 11, background: "#fff", position: "absolute", top: 3,
      left: on ? 25 : 3, boxShadow: "0 1px 4px rgba(0,0,0,0.2)", transition: "left 0.2s" }}/></div>;
}

function IconBox({ emoji, color, size = 40 }: { emoji: string; color: string; size?: number }) {
  const iconMap: Record<string, "wallet"|"receipt"|"chart"|"calendar"|"location"|"spark"|"crown"|"settings"|"user"|"help"|"shield"|"bell"|"globe"|"brush"|"lock"|"phone"|"mail"|"fingerprint"|"trash"|"refresh"|"info"|"message"|"link"> = {
    "🍱": "receipt", "💼": "wallet", "🚕": "location", "🎵": "spark", "📊": "chart", "🤖": "spark", "💰": "wallet", "📝": "receipt", "🎨": "brush", "✨": "crown", "👑": "crown", "⭐": "spark", "🔑": "lock", "🔐": "shield", "🔒": "lock", "🔔": "bell", "📱": "phone", "✉️": "mail", "💬": "message", "ℹ️": "info", "⚙️": "settings", "💳": "wallet", "📅": "calendar", "📒": "receipt", "📜": "receipt", "🧾": "receipt", "↻": "refresh", "⌫": "trash", "👆": "fingerprint", "🏠": "location", "💊": "bell", "📚": "receipt", "✈️": "location", "🛍️": "wallet", "🌐": "globe", "🌙": "spark", "⏰": "bell", "🎲": "chart", "✍️": "brush", "🖼️": "brush", "🎭": "spark", "🌈": "spark", "💎": "crown", "🖌️": "brush", "📢": "bell", "🎯": "spark", "🔗": "link", "🏦": "wallet", "💵": "wallet", "📁": "receipt", "📦": "receipt", "✅": "shield", "💙": "spark", "💚": "spark"
  };
  return <div style={{ width: size, height: size, borderRadius: size * 0.28, background: `${color}18`,
    display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.5, flexShrink: 0 }}>{iconMap[emoji] ? <LineIcon name={iconMap[emoji]} color={color} size={size * .48}/> : <span style={{ width: size * .24, height: size * .24, borderRadius: "50%", background: color }}/>}</div>;
}

function LineIcon({ name, color = C.primary, size = 20 }: { name: "menu"|"home"|"search"|"calendar"|"receipt"|"spark"|"crown"|"user"|"plus"|"check"|"cloud"|"sun"|"location"|"clock"|"wallet"|"chart"|"settings"|"help"|"shield"|"bell"|"globe"|"brush"|"lock"|"phone"|"mail"|"fingerprint"|"trash"|"refresh"|"info"|"message"|"link"; color?: string; size?: number }) {
  const common = { stroke: color, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  const paths: Record<string, React.ReactNode> = {
    menu: <><path {...common} d="M4 7h16M4 12h12M4 17h8"/></>, home: <><path {...common} d="m3.5 10.5 8.5-7 8.5 7v9a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 19.5v-9Z"/><path {...common} d="M9 21v-6h6v6"/></>, search: <><circle {...common} cx="10.5" cy="10.5" r="5.5"/><path {...common} d="m15 15 4 4"/></>,
    calendar: <><rect {...common} x="4" y="5" width="16" height="15" rx="3"/><path {...common} d="M8 3v4M16 3v4M4 10h16"/></>, receipt: <><path {...common} d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path {...common} d="M9 8h6M9 12h6M9 16h3"/></>,
    spark: <><path {...common} d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"/><path {...common} d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></>, crown: <><path {...common} d="m4 7 4 4 4-7 4 7 4-4-2 12H6L4 7Z"/><path {...common} d="M6 16h12"/></>,
    user: <><circle {...common} cx="12" cy="8" r="3.5"/><path {...common} d="M5 20c.8-3.2 3.2-5 7-5s6.2 1.8 7 5"/></>, plus: <path {...common} d="M12 5v14M5 12h14"/>, check: <path {...common} d="m5 12 4.2 4.2L19 6.5"/>, cloud: <><path {...common} d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.1 9.2 4.5 4.5 0 0 0 7 18Z"/></>,
    sun: <><circle {...common} cx="12" cy="12" r="4"/><path {...common} d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></>,
    location: <><path {...common} d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle {...common} cx="12" cy="10" r="2"/></>, clock: <><circle {...common} cx="12" cy="12" r="8"/><path {...common} d="M12 7v5l3 2"/></>,
    wallet: <><path {...common} d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v14H6.5A2.5 2.5 0 0 1 4 16.5v-9Z"/><path {...common} d="M18 10h2v4h-2"/><circle cx="16" cy="12" r=".8" fill={color}/></>, chart: <><path {...common} d="M5 19V11M12 19V5M19 19v-6"/><path {...common} d="M3 19h18"/></>, settings: <><path {...common} d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9h-.2a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1A1.7 1.7 0 0 1 7.7 3.3l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2A1.7 1.7 0 0 0 17 3.4l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/><circle {...common} cx="12" cy="10.5" r="3"/></>, help: <><circle {...common} cx="12" cy="12" r="8"/><path {...common} d="M9.7 9a2.5 2.5 0 1 1 4.1 2c-1.5 1.1-1.8 1.5-1.8 3"/><path {...common} d="M12 17h.01"/></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3Z"/><path {...common} d="m9 12 2 2 4-4"/></>, lock: <><rect {...common} x="5" y="10" width="14" height="10" rx="2"/><path {...common} d="M8 10V7a4 4 0 0 1 8 0v3"/></>, bell: <><path {...common} d="M6 16h12l-1.5-2.5V10a4.5 4.5 0 0 0-9 0v3.5L6 16Z"/><path {...common} d="M10 19h4"/></>, globe: <><circle {...common} cx="12" cy="12" r="8"/><path {...common} d="M4 12h16M12 4c2 2.1 3 4.8 3 8s-1 5.9-3 8c-2-2.1-3-4.8-3-8s1-5.9 3-8Z"/></>, brush: <><path {...common} d="m14 4 6 6-9.5 9.5H4V13L14 4Z"/><path {...common} d="m12 6 6 6"/><path {...common} d="M4 20c1.6-2 3.5-2.4 5-1"/></>,
    phone: <><rect {...common} x="7" y="3" width="10" height="18" rx="2.5"/><path {...common} d="M10 6h4M11 18h2"/></>, mail: <><rect {...common} x="3" y="5" width="18" height="14" rx="2"/><path {...common} d="m4 7 8 6 8-6"/></>, fingerprint: <><path {...common} d="M8 10a4 4 0 0 1 8 0c0 5-1.2 8-3 10M6 9a6 6 0 0 1 12 0c0 2.2-.1 4-.5 5.6M10 11c0 3-.3 5.6-1.5 7.5M12 8a2 2 0 0 1 2 2c0 4-.7 7-2 9.5"/></>, trash: <><path {...common} d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/></>, refresh: <><path {...common} d="M20 7v5h-5M4 17v-5h5"/><path {...common} d="M6.2 8a7 7 0 0 1 11.4-1.5L20 9M4 15l2.4 2.4A7 7 0 0 0 18 16"/></>, info: <><circle {...common} cx="12" cy="12" r="8"/><path {...common} d="M12 11v5M12 8h.01"/></>, message: <><path {...common} d="M4 5h16v12H9l-5 4V5Z"/><path {...common} d="M8 9h8M8 13h5"/></>, link: <><path {...common} d="M9.5 14.5 8 16a3.5 3.5 0 0 1-5-5l2.5-2.5a3.5 3.5 0 0 1 5 0"/><path {...common} d="m14.5 9.5 1.5-1.5a3.5 3.5 0 0 1 5 5L18.5 15.5a3.5 3.5 0 0 1-5 0"/><path {...common} d="m8.5 12 7-7"/></>
  };
  // 不同 SVG 的 path 边界不同（例如 bell/user 的绘制区域比 gear 小），
  // 用视觉缩放把内容归一到相近的占用面积，避免同尺寸图标看起来忽大忽小。
  const visualScale: Partial<Record<string, number>> = {
    bell: 1.18, user: 1.18, phone: 1.12, fingerprint: 1.12,
    clock: 1.08, info: 1.08, help: 1.08, spark: 1.06, crown: 1.05,
  };
  const scale = visualScale[name] ?? 1;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><g transform={`translate(12 12) scale(${scale}) translate(-12 -12)`}>{paths[name] ?? paths.help}</g></svg>;
}

function SocialIcon({ name, size = 24 }: { name: "wechat" | "moments" | "qq"; size?: number }) {
  const stroke = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  if (name === "wechat") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path {...stroke} d="M3.2 11.8c0-3 2.8-5.3 6.3-5.3s6.3 2.3 6.3 5.3-2.8 5.3-6.3 5.3c-.7 0-1.4-.1-2-.3L5 18.5l.7-2.3c-1.5-1-2.5-2.5-2.5-4.4Z"/><path {...stroke} d="M11.2 14.1c.4 2.4 2.7 4.1 5.5 4.1.6 0 1.2-.1 1.7-.2l2.2 1.2-.5-1.9c.9-.8 1.4-1.8 1.4-3 0-2.6-2.4-4.6-5.4-4.6-.6 0-1.2.1-1.7.2"/><circle cx="7.2" cy="11.5" r=".85" fill="currentColor"/><circle cx="11" cy="11.5" r=".85" fill="currentColor"/><circle cx="15.4" cy="14.1" r=".75" fill="currentColor"/><circle cx="18.4" cy="14.1" r=".75" fill="currentColor"/></svg>;
  if (name === "moments") return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.1 13.4 7l3.3-2.1-1.5 3.8 4-.1-3.2 2.3 3.2 2.3-4-.1 1.5 3.8-3.3-2.1L12 20.7l-1.4-3.9-3.3 2.1 1.5-3.8-4 .1L8 12.9l-3.2-2.3 4 .1-1.5-3.8L10.6 9 12 3.1Z" fill="currentColor"/><circle cx="12" cy="12" r="2.3" fill="rgba(124,77,255,.95)"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>;
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8c-3.1 0-5.3 2.4-5.3 5.8v5.8l-2 3.3h4.3l1.5 2.7h3l1.5-2.7h4.3l-2-3.3V8.6c0-3.4-2.2-5.8-5.3-5.8Z" fill="currentColor"/><path d="M7.9 11.1h.01M16.1 11.1h.01" stroke="rgba(124,77,255,.95)" strokeWidth="1.8" strokeLinecap="round"/><path d="M9.4 14.2c1.4 1 3.8 1 5.2 0" stroke="rgba(124,77,255,.95)" strokeWidth="1.2" strokeLinecap="round"/></svg>;
}

function Chevron() {
  return <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
    <path d="M1 1l5 5-5 5" stroke={C.t4} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function SettingRow({ icon, bg, label, value, toggle }: { icon: string; bg: string; label: string; value?: string; toggle?: boolean }) {
  const iconColor = bg.includes("252,88,114") ? C.danger : bg.includes("57,181,74") ? C.success : bg.includes("247,194,66") ? C.warning : C.primary;
  return <div data-setting-row style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr) auto", alignItems: "center", columnGap: 12, minHeight: 62, padding: "10px 6px", borderBottom: `1px solid ${C.divider}`, margin: "0 12px" }}>
    <IconBox emoji={icon} color={iconColor} size={36}/>
    <p style={{ display: "block", minWidth: 0, fontSize: 14, lineHeight: "20px", fontWeight: 650, color: C.t1, whiteSpace: "nowrap" }}>{label}</p>
    {toggle !== undefined ? <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}><Toggle on={toggle}/></div> : <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 10, minWidth: 8 }}>{value ? <p style={{ display: "block", fontSize: 12, lineHeight: "18px", color: C.t3, whiteSpace: "nowrap" }}>{value}</p> : null}<Chevron/></div>}
  </div>;
}

function TabBar({ active, onNav, visible = true }: { active: string; onNav: (s: string) => void; visible?: boolean }) {
  const tabs = [
    { k: "p02", l: "首页", icon: "home" as const },
    { k: "p04", l: "AI", icon: "spark" as const },
    { k: "p05", l: "我的", icon: "user" as const },
  ] as const;
  return <div style={{ display: "flex", position: "relative", zIndex: 20,
    background: "rgba(255,255,255,.84)", backdropFilter: "blur(22px) saturate(140%)", WebkitBackdropFilter: "blur(22px) saturate(140%)",
    borderTop: "1px solid rgba(255,255,255,.72)", padding: "7px 10px 12px", flexShrink: 0, ...sans,
    transform: visible ? "translateY(0)" : "translateY(120%)", opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none", transition: "transform .25s ease, opacity .2s ease" }}>
    {tabs.map(t => {
      const a = t.k === active;
      const isAI = t.k === "p04";
      return <button key={t.k} onClick={() => onNav(t.k)} aria-label={t.l} style={{ flex: 1, height: 52, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, borderRadius: 16, background: "transparent", border: "none", boxShadow: "none", cursor: "pointer" }}>
        <span className={a ? "tab-icon-active" : ""}><TabIcon name={isAI ? "spark" : t.icon} active={a}/></span>
        <span style={{ fontSize: 10, fontWeight: a ? 700 : 500, color: a ? C.primary : C.t3 }}>{t.l}</span>
      </button>;
    })}
  </div>;
}

function TabIcon({ name, active }: { name: "home" | "user" | "spark"; active: boolean }) {
  if (!active) return <LineIcon name={name} color={C.t3} size={25}/>;
  return <span style={{ position: "relative", display: "inline-flex", width: 25, height: 25 }}>
    <LineIcon name={name} color={C.primary} size={25}/>
    <span style={{ position: "absolute", inset: 0, clipPath: "inset(0 0 48% 42%)" }}><LineIcon name={name} color="#FF6B9D" size={25}/></span>
  </span>;
}

function ShareSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  if (!open) return null;
  const options = [["微信", "wechat"], ["朋友圈", "moments"], ["QQ", "qq"], ["复制链接", "copy"]] as const;
  const copy = async () => {
    try { await navigator.clipboard?.writeText(window.location.href); } catch {}
    setCopied(true);
    window.setTimeout(() => { setCopied(false); onClose(); }, 850);
  };
  return <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 90, background: "rgba(24,18,45,.38)", display: "flex", alignItems: "flex-end" }}>
    <div onClick={e => e.stopPropagation()} style={{ width: "100%", background: C.white, borderRadius: "24px 24px 0 0", padding: "12px 18px calc(18px + env(safe-area-inset-bottom))", boxShadow: "0 -12px 34px rgba(30,20,65,.18)" }}>
      <div style={{ width: 42, height: 4, borderRadius: 99, background: C.border, margin: "0 auto 18px" }}/>
      <p style={{ textAlign: "center", fontSize: 15, fontWeight: 800, color: C.t1, marginBottom: 18 }}>{copied ? "链接已复制" : "分享到"}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
        {options.map(([label, icon]) => <button key={label} onClick={label === "复制链接" ? copy : onClose} style={{ border: "none", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", color: label === "微信" ? "#19B955" : label === "朋友圈" ? "#31B86A" : label === "QQ" ? "#2684FF" : C.primary }}>
          <span style={{ width: 50, height: 50, borderRadius: 18, display: "grid", placeItems: "center", background: "rgba(255,255,255,.62)", border:"1px solid rgba(124,77,255,.08)", fontSize: 21, fontWeight: 800 }}>{icon === "copy" ? <span>↗</span> : <SocialIcon name={icon} size={25}/>}</span>
          <span style={{ fontSize: 11 }}>{label}</span>
        </button>)}
      </div>
    </div>
  </div>;
}

function Scroll({ children, onScroll }: { children: React.ReactNode; onScroll?: React.UIEventHandler<HTMLDivElement> }) {
  return <div data-copy-scroll onScroll={onScroll} style={{ flex: 1, overflowY: "auto" }}>{children}</div>;
}

const P = { p: "14px 16px", gap: 12 };

function HomeDrawer({ close, nav }: { close: () => void; nav: (s: string) => void }) {
  const links = [["chart","统计分析","p14"],["receipt","账单导入","p13"],["calendar","账单日历","p08"],["calendar","日程日历","p08-todo"],["spark","我的笔记","p39"],["crown","签到中心","p40"]] as const;
  const touchStart = useRef<number | null>(null);
  return <div style={{ position: "absolute", inset: 0, zIndex: 50, background: "rgba(34,27,56,.26)", display: "flex" }} onClick={close}>
    <aside onClick={e => e.stopPropagation()} style={{ width: "88%", maxWidth: 340, height: "100%", background: C.white, boxShadow: "12px 0 34px rgba(35,27,64,.16)", display: "flex", flexDirection: "column", animation: "fadeSlideUp .22s ease-out" }}>
      <div style={{ padding: "18px 16px 15px", background: C.primaryG, color: "#fff" }} onTouchStart={e => { touchStart.current = e.touches[0]?.clientX ?? null; }} onTouchEnd={e => { const start = touchStart.current; const end = e.changedTouches[0]?.clientX ?? start; if (start !== null && end !== null && end - start < -55) close(); touchStart.current = null; }}>
        <Row style={{ justifyContent: "space-between", marginBottom: 18 }}><span style={{ fontSize: 13, color: "rgba(255,255,255,.72)" }}>你好，iPink</span><Row style={{ gap: 6 }}><button onClick={() => { nav("p32"); close(); }} aria-label="消息中心" style={{ position:"relative", width: 36, height: 36, borderRadius: 12, border: "none", color: "#fff", background: "rgba(255,255,255,.14)", cursor: "pointer", display:"grid", placeItems:"center", flexShrink:0 }}><LineIcon name="bell" color="#fff" size={18}/><span style={{position:"absolute",right:5,top:5,width:6,height:6,borderRadius:9,background:C.danger,border:"1px solid rgba(255,255,255,.8)"}}/></button><button onClick={() => { nav("p24"); close(); }} aria-label="设置" style={{ width: 36, height: 36, borderRadius: 12, border: "none", color: "#fff", background: "rgba(255,255,255,.14)", cursor: "pointer", display:"grid", placeItems:"center", flexShrink:0 }}><LineIcon name="settings" color="#fff" size={18}/></button></Row></Row>
        <Row style={{ gap: 11 }}><img src="https://api.dicebear.com/9.x/notionists/svg?seed=Koko&backgroundColor=f0e9ff" alt="iPink 头像" style={{ width: 42, height: 42, borderRadius: 15, objectFit: "cover", border: "2px solid rgba(255,255,255,.5)" }}/><div><p style={{ fontSize: 16, fontWeight: 800 }}>清新生活账本</p><p style={{ fontSize: 11, color: "rgba(255,255,255,.65)", marginTop: 3 }}>9月 · 正在记录生活</p></div></Row>
      </div>
      <button onClick={() => { nav("p31"); close(); }} style={{ margin: "14px 16px 4px", padding: "15px 14px", border: "none", borderRadius: 16, background: "linear-gradient(110deg,#7050E8 0%,#9C78F2 58%,#D6B7FF 100%)", color: "#fff", display: "flex", alignItems: "center", gap: 10, textAlign: "left", cursor: "pointer", boxShadow: "0 7px 18px rgba(112,80,232,.2)" }}>
        <span style={{ width: 36, height: 36, borderRadius: 12, display: "grid", placeItems: "center", background: "rgba(255,255,255,.2)" }}><LineIcon name="spark" color="#fff" size={19}/></span>
        <span style={{ flex: 1 }}><span style={{ display: "block", fontSize: 14, fontWeight: 800 }}>会员中心</span><span style={{ display: "block", marginTop: 3, fontSize: 10, color: "rgba(255,255,255,.78)" }}>解锁更多智能记账权益</span></span><span style={{ fontSize: 20 }}>›</span>
      </button>
      <div style={{ padding: "16px 12px", flex: 1, overflowY: "auto" }}>
        <p style={{ padding: "0 10px 8px", fontSize: 11, color: C.t3, fontWeight: 700, letterSpacing: ".08em" }}>常用功能</p>
        {links.map(([icon, label, target]) => <button key={label} onClick={() => { if (target) nav(target); close(); }} style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "9px 8px", border: "none", borderRadius: 12, background: "transparent", cursor: "pointer", color: C.t1, textAlign: "left" }}><span style={{ width: 28, height: 28, borderRadius: 9, background: C.primaryL, display: "grid", placeItems: "center" }}><LineIcon name={icon} size={15}/></span><span style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{label}</span><Chevron/></button>)}
        <div style={{ height: 1, background: C.divider, margin: "12px 10px" }}/>
        <div style={{ margin: "0 8px", padding: 14, borderRadius: 14, background: "#F7F4FF" }}><p style={{ color: C.primary, fontSize: 12, fontWeight: 700 }}>本月已坚持记账 8 天</p><p style={{ color: C.t3, fontSize: 11, marginTop: 5 }}>再坚持 2 天，解锁「生活观察家」</p></div>
      </div>
    </aside>
  </div>;
}

// ─── P02: 首页 (Home) ─────────────────────────────────────────────────────
function P02({ nav }: { nav: (s: string) => void }) {
  const [drawer, setDrawer] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollTop = useRef(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const top = e.currentTarget.scrollTop;
    if (top < 12) setNavVisible(true);
    else if (top > lastScrollTop.current + 4) setNavVisible(false);
    else if (top < lastScrollTop.current - 4) setNavVisible(true);
    lastScrollTop.current = top;
  };
  const bills = [
    { icon: "🍱", t: "午餐外卖", n: "美团外卖", a: -38.5, c: "#FF6B9D" },
    { icon: "💼", t: "9月工资", n: "招商银行", a: 20000, c: C.success },
    { icon: "🚕", t: "滴滴打车", n: "公司→家", a: -42, c: C.primary },
    { icon: "🎵", t: "网易云会员", n: "黑胶会员", a: -15, c: C.warning },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(180deg, rgba(124,77,255,.24) 0%, rgba(149,117,205,.12) 34%, rgba(247,248,250,0) 66%, #F7F8FA 100%)" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 15, pointerEvents: "none" }}><StatusBar/></div>
      <div style={{ position: "absolute", top: 44, left: 0, right: 0, zIndex: 15, minHeight: 56, padding: "8px 16px 8px", background: "transparent", border: "none", boxShadow: "none", opacity: navVisible ? 1 : 0, transform: navVisible ? "translateY(0)" : "translateY(-16px)", transition: "all .25s ease", display: "flex", justifyContent: "center", pointerEvents: navVisible ? "auto" : "none" }}>
          <button onClick={() => setDrawer(true)} aria-label="打开侧边栏" style={{ width: 40, height: 40, borderRadius: 14, background: "transparent", border: "none", boxShadow: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", left: 16 }}>
            <LineIcon name="menu" color={C.t2} size={19}/>
          </button>
          <div aria-label="当前月份" style={{ height: 40, padding: "0 14px", display: "flex", alignItems: "center", gap: 7, background: "transparent", border: "none", boxShadow: "none", color: C.t1, fontSize: 14, fontWeight: 700 }}>
            2025-09
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke={C.t3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <Row style={{position:"absolute",right:14,gap:4}}><button onClick={()=>nav("p07")} aria-label="搜索账单" style={{width:32,height:32,border:"none",borderRadius:11,background:"rgba(255,255,255,.38)",display:"grid",placeItems:"center",cursor:"pointer"}}><LineIcon name="search" color={C.t2} size={16}/></button><button onClick={()=>nav("p07")} aria-label="账单记录" style={{width:32,height:32,border:"none",borderRadius:11,background:"rgba(255,255,255,.38)",display:"grid",placeItems:"center",cursor:"pointer"}}><LineIcon name="receipt" color={C.t2} size={16}/></button><button onClick={()=>nav("p08")} aria-label="打开日历" style={{width:32,height:32,border:"none",borderRadius:11,background:"rgba(255,255,255,.38)",display:"grid",placeItems:"center",cursor:"pointer"}}><LineIcon name="calendar" color={C.t2} size={16}/></button></Row>
      </div>
      <Scroll onScroll={handleScroll}>
        <div style={{ padding: "112px 16px 116px", display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Today / todo first */}
          <Card style={{ padding: "16px 16px 14px", border: "1px solid rgba(124,77,255,.10)", boxShadow: "0 8px 22px rgba(79,57,146,.08)" }}>
            <Row style={{ justifyContent: "space-between", marginBottom: 12 }}><div><p style={{ fontSize: 16, fontWeight: 800, color: C.t1 }}>今天，周一</p><p style={{ fontSize: 11, color: C.t3, marginTop: 3 }}>9月8日 · 3 件事待完成</p></div><button onClick={() => nav("p23")} style={{ width: 32, height: 32, borderRadius: 11, border: "none", background: C.primaryL, display: "grid", placeItems: "center", cursor: "pointer" }}><LineIcon name="plus" size={17}/></button></Row>
            {[['10:00','还信用卡','今天到期',C.danger],['18:30','买菜回家','附近菜场',C.primary],['20:00','健身 30 分钟','健康计划',C.success]].map(([time,title,sub,color],i) => <div key={title as string} onClick={() => nav("p22")} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", cursor: "pointer", borderTop: i ? `1px solid ${C.divider}` : "none" }}><span style={{ width: 37, color: color as string, fontSize: 11, fontWeight: 700 }}>{time}</span><span style={{ width: 8, height: 8, borderRadius: 99, background: color as string }}/><div style={{ flex: 1 }}><p style={{ fontSize: 13, color: C.t1, fontWeight: 650 }}>{title}</p><p style={{ fontSize: 10, color: C.t3, marginTop: 2 }}>{sub}</p></div><Chevron/></div>)}
            <button onClick={() => nav("p22")} style={{ width: "100%", marginTop: 7, padding: "8px", color: C.primary, fontSize: 12, fontWeight: 700, border: "none", background: "transparent", cursor: "pointer" }}>查看全部待办</button>
          </Card>
          {/* Hero */}
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: `0 8px 30px rgba(124,77,255,0.28)`, order: -1 }}>
            <div style={{ background: C.primaryG, padding: "22px 22px 18px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -24, right: -24, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }}/>
              <button onClick={() => nav("p10")} aria-label="切换默认账本" style={{ position: "absolute", top: 14, right: 16, border: "none", background: "rgba(255,255,255,.14)", color: "rgba(255,255,255,.9)", borderRadius: 12, padding: "6px 9px", fontSize: 10, cursor: "pointer" }}><Row style={{gap:5}}><LineIcon name="wallet" color="rgba(255,255,255,.9)" size={14}/><span>默认账本</span><span>›</span></Row></button>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, marginBottom: 6 }}>本月支出</p>
              <Row style={{ alignItems: "baseline", gap: 3 }}>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 22 }}>¥</span>
                <span style={{ color: "#fff", fontSize: 38, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>4,561.50</span>
              </Row>
              <Row style={{ gap: 32, marginTop: 16 }}>
                {[["本月收入","¥23,600"],["本月结余","¥19,038"]].map(([l,v]) => (
                  <div key={l}><p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginBottom: 3 }}>{l}</p>
                    <p style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{v}</p></div>
                ))}
              </Row>
            </div>
            <div style={{ display: "none" }} />
          </div>

          {/* Primary action: keep accounting visible in the home flow */}
          <button onClick={() => nav("p03")} aria-label="记一笔" style={{ width: "100%", border: "none", borderRadius: 18, padding: "14px 16px",
            background: C.white, boxShadow: "0 6px 18px rgba(79,57,146,.10)", display: "flex", alignItems: "center", gap: 12,
            cursor: "pointer", textAlign: "left" }}>
            <span style={{ width: 44, height: 44, borderRadius: 15, background: C.primaryG, display: "grid", placeItems: "center",
              boxShadow: "0 6px 14px rgba(124,77,255,.25)", flexShrink: 0 }}><LineIcon name="plus" color="#fff" size={23}/></span>
            <span style={{ flex: 1 }}><span style={{ display: "block", fontSize: 15, fontWeight: 800, color: C.t1 }}>记一笔</span>
              <span style={{ display: "block", fontSize: 11, color: C.t3, marginTop: 3 }}>快速记录今天的支出或收入</span></span>
            <span style={{ color: C.primary, fontSize: 22, lineHeight: 1 }}>›</span>
          </button>

          {/* Bill list */}
          <Card style={{ overflow: "hidden" }}>
            <Row style={{ justifyContent: "space-between", padding: "12px 18px", borderBottom: `1px solid ${C.divider}` }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: C.t3 }}>09-08 周日</span>
              <Row style={{ gap: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.success }}>+¥20,000</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.danger }}>-¥95.50</span>
              </Row>
            </Row>
            {bills.map((b, i) => (
              <div key={i} onClick={() => nav("p06")} style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 18px",
                borderBottom: i < bills.length-1 ? `1px solid ${C.divider}` : "none", cursor: "pointer" }}>
                <IconBox emoji={b.icon} color={b.c} size={42}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.t1, marginBottom: 3 }}>{b.t}</p>
                  <p style={{ fontSize: 12, color: C.t3 }}>{b.n}</p>
                </div>
                <span style={{ fontSize: 15, fontWeight: 700, color: b.a > 0 ? C.success : C.t1, flexShrink: 0 }}>
                  {b.a > 0 ? "+" : "-"}¥{Math.abs(b.a).toFixed(2)}
                </span>
              </div>
            ))}
          </Card>

          {/* Todo card */}
          <Card style={{ padding: "16px 18px", display: "none" }}>
            <Row style={{ justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: C.t1 }}>待办</span>
              <button onClick={() => nav("p22")} style={{ background: "none", border: "none", cursor: "pointer",
                fontSize: 13, color: C.primary, fontWeight: 600 }}>+ 添加</button>
            </Row>
            {[["买菜回家","未完成","高"," #FC5872"],["健身30分钟","已完成","中"," #F7C242"],["还信用卡","未完成","高"," #FC5872"]].map(([t,s,p,c],i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10,
                borderBottom: i < 2 ? `1px solid ${C.divider}` : "none", marginBottom: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", border: `2px solid ${s==="已完成" ? C.success : C.border}`,
                  background: s==="已完成" ? C.success : "none", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {s==="已完成" && <span style={{ color: "#fff", fontSize: 12, lineHeight: 1 }}>✓</span>}
                </div>
                <span style={{ flex: 1, fontSize: 13, color: s==="已完成" ? C.t3 : C.t1,
                  textDecoration: s==="已完成" ? "line-through" : "none" }}>{t}</span>
                <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8,
                  background: `${c.trim()}18`, color: c.trim() }}>{p}</span>
              </div>
            ))}
            <p onClick={() => nav("p22")} style={{ textAlign: "center", fontSize: 13, color: C.primary,
              fontWeight: 600, cursor: "pointer", marginTop: 4 }}>管理更多 &gt;</p>
          </Card>

          {/* Quick actions */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[["📊","查看统计",C.primary,"p14"],["🤖","AI解读","#FF6B9D","p04"]].map(item => (
              <button key={item[1]} onClick={() => nav(item[3])}
                style={{ padding: "14px 16px", borderRadius: 14, border: "none", cursor: "pointer",
                  background: C.white, boxShadow: C.cardSm, display: "flex", alignItems: "center", gap: 10 }}>
                <IconBox emoji={item[0]} color={item[2]} size={36}/>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.t1 }}>{item[1]}</span>
              </button>
            ))}
          </div>
        </div>
      </Scroll>

      <TabBar active="p02" onNav={nav} visible={navVisible}/>
      {drawer && <HomeDrawer close={() => setDrawer(false)} nav={nav}/>} 
    </div>
  );
}

// ─── P03: 记账入口 (Billing Entry) ────────────────────────────────────────
function P03({ nav }: { nav: (s: string) => void }) {
  const [type, setType] = useState<"out"|"in">("out");
  const [amount, setAmount] = useState("0.00");
  const [cat, setCat] = useState("餐饮");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [billTitle, setBillTitle] = useState("");
  const [address, setAddress] = useState("");
  const [remark, setRemark] = useState("");
  const [receiptAdded, setReceiptAdded] = useState(false);
  const cats = [
    { e:"🍱",l:"餐饮",c:"#FF6B9D"}, { e:"🛍️",l:"购物",c:C.warning},
    { e:"🚕",l:"交通",c:C.primary}, { e:"🏠",l:"住房",c:"#00AA90"},
    { e:"🎵",l:"娱乐",c:"#AE9AF0"}, { e:"💊",l:"医疗",c:C.success},
    { e:"📚",l:"教育",c:"#6B9DFF"}, { e:"✈️",l:"旅行",c:C.danger},
    { e:"🐾",l:"宠物",c:"#D88BFF"}, { e:"🏃",l:"运动",c:"#38B86B"},
    { e:"📱",l:"数码",c:"#5B8DEF"}, { e:"🎁",l:"礼物",c:"#FF8B63"},
    { e:"🧴",l:"日用",c:"#5DB6A3"}, { e:"📦",l:"其他",c:"#8C8C9A"},
  ];
  const keys = ["1","2","3","4","5","6","7","8","9",".","0","⌫"];
  const tap = (k: string) => {
    if (k === "⌫") { setAmount(a => a.length > 1 ? a.slice(0,-1) : "0"); return; }
    if (k === "." && amount.includes(".")) return;
    setAmount(a => a === "0" && k !== "." ? k : a + k);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="记一笔" onBack={() => nav("p02")}
        right={<button onClick={() => nav("p04")} aria-label="切换到AI记账" style={{ border:"none", background:"transparent", color:C.primary, fontSize:10, fontWeight:750, cursor:"pointer", padding: "4px 0" }}>AI记账</button>}/>

      <Scroll>
      {/* Type toggle */}
      <div style={{ padding: "10px 16px 7px", background: C.bg }}>
        <Row style={{ background: C.primaryL, borderRadius: 30, padding: 3, boxShadow: "inset 0 0 0 1px rgba(124,77,255,.05)" }}>
          {([["out","支出","#FC5872"],["in","收入",C.success]] as const).map(([k,l,c]) => (
            <button key={k} onClick={() => setType(k)} style={{ flex: 1, padding: "8px 0", borderRadius: 26,
              border: "none", cursor: "pointer",
              background: type===k ? C.white : "transparent",
              color: type===k ? c : C.t3, fontSize: 14, fontWeight: 700, boxShadow: type===k ? "0 2px 7px rgba(57,35,120,.08)" : "none" }}>{l}</button>
          ))}
        </Row>
      </div>

      {/* Amount display */}
      <div style={{ margin: "0 16px 8px", padding: "12px 20px 14px", textAlign: "center", background: C.white, borderRadius: 16, boxShadow: "0 4px 16px rgba(70,52,126,.05)" }}>
        <Row style={{ justifyContent: "center", alignItems: "baseline", gap: 4 }}>
          <span style={{ fontSize: 28, color: type==="out" ? C.danger : C.success }}>¥</span>
          <span style={{ fontSize: 46, fontWeight: 800, color: type==="out" ? C.danger : C.success,
            letterSpacing: "-0.04em", lineHeight: 1 }}>{amount}</span>
        </Row>
      </div>

      {/* Category grid */}
      <div style={{ margin: "0 16px 8px", padding: "9px 11px 8px", borderRadius: 16, background: C.white, boxShadow: "0 4px 16px rgba(70,52,126,.04)" }}>
        <div style={{ height: 174, overflowY: "auto", overflowX: "hidden", overscrollBehavior: "contain", scrollbarWidth: "thin", padding: "1px 2px 3px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 6 }}>
            {cats.map(c => (
              <button key={c.l} onClick={() => setCat(c.l)}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                  minHeight: 54, padding: "6px 4px", borderRadius: 11, border: `1px solid ${cat===c.l ? c.c : "transparent"}`,
                  background: cat===c.l ? `${c.c}12` : C.bg, cursor: "pointer" }}>
                <span style={{ fontSize: 20, lineHeight: 1 }}>{c.e}</span>
                <span style={{ fontSize: 10, color: cat===c.l ? c.c : C.t2, fontWeight: cat===c.l ? 600 : 400, whiteSpace: "nowrap" }}>{c.l}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div style={{ padding: "2px 16px 8px", display: "grid", gridTemplateColumns:"1fr 1fr", gap: 7 }}>
        {[["支付方式","招商银行"],["关联账本","默认账本"],["付款日期","2025-09-08"],["支付时间","12:45"]].map(([l,v]) => (
          <Row key={l} style={{ height: 40, padding: "0 10px", background: C.bg, borderRadius: 11,
            justifyContent: "space-between", border: `1px solid rgba(124,77,255,.10)`, boxShadow: "0 2px 8px rgba(70,52,126,.03)" }}>
            <span style={{ fontSize: 13, color: C.t3 }}>{l}</span>
            <Row style={{ gap: 7 }}><LineIcon name={l==="支付方式"?"wallet":l==="关联账本"?"receipt":l==="付款日期"?"calendar":"clock"} color={C.primary} size={15}/><span style={{ fontSize: 13, color: C.t1 }}>{v}</span><Chevron/></Row>
          </Row>
        ))}
      </div>

      <button onClick={()=>setDetailsOpen(v=>!v)} style={{ margin:"2px 16px 8px", height:34, border:"none", background:"transparent", color:C.t1, display:"grid", gridTemplateColumns:"1fr auto 1fr", alignItems:"center", gap:10, padding:0, cursor:"pointer", width:"calc(100% - 32px)" }}><span style={{height:1, width:"100%", background:C.divider}}/><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:7,fontSize:14,fontWeight:800,whiteSpace:"nowrap",lineHeight:1}}><span style={{width:22,height:22,borderRadius:7,background:C.primaryL,display:"grid",placeItems:"center",flexShrink:0}}><LineIcon name="spark" color={C.primary} size={14}/></span><span>详细信息</span><span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:18,height:18,color:C.primary,fontSize:18,transform:detailsOpen?"rotate(180deg)":"none",transition:"transform .2s",lineHeight:1}}>⌄</span></span><span style={{height:1, width:"100%", background:C.divider}}/></button>
      {detailsOpen && <div style={{ padding: "2px 16px 10px", display: "flex", flexDirection: "column", gap: 8 }}><input value={billTitle} onChange={e=>setBillTitle(e.target.value)} placeholder="账单标题（选填）" maxLength={20} style={{ height: 42, border:`1px solid ${C.border}`, borderRadius:12, background:C.bg, padding:"0 12px", outline:"none", fontSize:12 }}/><input value={address} onChange={e=>setAddress(e.target.value)} placeholder="地址（选填）" style={{ height: 42, border:`1px solid ${C.border}`, borderRadius:12, background:C.bg, padding:"0 12px", outline:"none", fontSize:12 }}/><div style={{ position:"relative" }}><textarea value={remark} onChange={e=>setRemark(e.target.value.slice(0,30))} placeholder="备注（最多 30 字）" rows={2} style={{ width:"100%", boxSizing:"border-box", border:`1px solid ${C.border}`, borderRadius:12, background:C.bg, padding:"10px 12px 20px", outline:"none", resize:"none", fontSize:12 }}/><span style={{ position:"absolute", right:10, bottom:7, fontSize:9, color:C.t4 }}>{remark.length}/30</span></div><Row style={{ gap:8 }}><button onClick={()=>setReceiptAdded(true)} style={{ flex:1, minHeight:68, border:`1px dashed ${receiptAdded?C.primary:C.border}`, borderRadius:12, background:receiptAdded?C.primaryL:C.bg, color:receiptAdded?C.primary:C.t3, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:receiptAdded?"flex-start":"center", padding:receiptAdded?"8px 10px":"0 12px", gap:9, fontSize:11 }}>{receiptAdded ? <><span style={{ width:52, height:48, borderRadius:9, background:"linear-gradient(145deg,#fff,rgba(124,77,255,.12))", display:"grid", placeItems:"center", flexShrink:0 }}><LineIcon name="receipt" color={C.primary} size={23}/></span><span style={{ flex:1, textAlign:"left" }}><span style={{ display:"block", fontSize:11, fontWeight:700, color:C.t1 }}>小票预览</span><span style={{ display:"block", marginTop:3, fontSize:10, color:C.primary }}>点击重新上传</span></span><LineIcon name="refresh" color={C.primary} size={16}/></> : <><LineIcon name="plus" color={C.t3} size={16}/><span>拍照 / 相册添加小票</span></>}</button></Row></div>}

      {/* Save */}
      <div style={{ padding: "0 16px 8px" }}>
        <button style={{ width:"100%", height: 44, borderRadius: 14, background: C.primaryG,
          border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
          boxShadow: `0 4px 14px rgba(124,77,255,0.3)` }}>保存账单</button>
      </div>
      </Scroll>

      {/* Numeric keyboard */}
      <div style={{ background: C.bg, borderTop: `1px solid ${C.border}`, padding: "8px 16px",
        display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, flexShrink: 0 }}>
        {keys.map(k => (
          <button key={k} onClick={() => tap(k)} style={{ height: 38, borderRadius: 11,
            background: k === "⌫" ? C.primaryL : C.white,
            color: k === "⌫" ? C.primary : C.t1, border: "none", cursor: "pointer",
            fontSize: k === "⌫" ? 18 : 22, fontWeight: 600,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>{k}</button>
        ))}
      </div>
    </div>
  );
}

// ─── P04: AI 助手 (AI Hub) ────────────────────────────────────────────────
function P04({ nav }: { nav: (s: string) => void }) {
  const cards = [
    { title: "AI 快速记账", sub: "拍照 / 语音识别账单", cost:"智能提取金额与分类", icon: "spark" as const, bg: C.primaryG, s: "p03" },
    { title: "AI 图片生成", sub: "文字转图片", cost:"约 20–40 积分", icon: "brush" as const, bg: C.aiPink, s: "p18" },
    { title: "AI 文字生成", sub: "智能文案", cost:"约 2–6 积分", icon: "receipt" as const, bg: C.aiBlue, s: "p19" },
    { title: "决策助手", sub: "选择辅助", cost:"约 5–12 积分", icon: "chart" as const, bg: C.aiYellow, s: "p20" },
    { title: "智能提醒", sub: "定时任务", cost:"会员免费", icon: "bell" as const, bg: C.infoG, s: "p21" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(180deg, rgba(124,77,255,.24) 0%, rgba(149,117,205,.12) 34%, rgba(247,248,250,0) 66%, #F7F8FA 100%)" }}>
      <div style={{ background: "transparent", padding: "0 16px 20px", flexShrink: 0 }}><StatusBar/>
        <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent:"space-between" }}>
          <Row style={{ gap: 10 }}>
            <span style={{ width: 38, height: 38, borderRadius: 13, display: "grid", placeItems: "center", background: "linear-gradient(135deg, rgba(124,77,255,.16), rgba(255,107,157,.18))", border: "1px solid rgba(124,77,255,.12)" }}><LineIcon name="spark" color={C.primary} size={20}/></span>
            <span style={{ fontSize: 18, fontWeight: 800, color: C.t1 }}>AI 助手</span>
          </Row>
          <button onClick={()=>nav("p43")} style={{border:"1px solid rgba(124,77,255,.14)",borderRadius:12,padding:"7px 10px",background:"rgba(255,255,255,.56)",color:C.primary,fontSize:10,fontWeight:750,cursor:"pointer"}}>✦ 368 积分</button>
        </div>
        <p style={{ color: C.t3, fontSize: 13 }}>智能财务分析 · 创意生成</p>
      </div>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {cards.map(c => (
              <button key={c.title} onClick={() => nav(c.s)} style={{ padding: "22px 18px", borderRadius: 20,
                border: "none", cursor: "pointer", background: c.bg, textAlign: "left",
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)", gridColumn: c.title === "AI 快速记账" ? "1 / -1" : "auto" }}>
                <div style={{ width: 42, height: 42, borderRadius: 14, display: "grid", placeItems: "center", background: "rgba(255,255,255,.2)", marginBottom: 12 }}><LineIcon name={c.icon} color="#fff" size={24}/></div>
                <p style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 5 }}>{c.title}</p>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>{c.sub}</p><p style={{marginTop:8,fontSize:9,color:"rgba(255,255,255,.7)"}}>{c.cost}</p>
              </button>
            ))}
          </div>

          {/* Quick AI analysis */}
          <Card style={{ padding: "16px 18px", cursor: "pointer" }} onClick={() => nav("p18")}>
            <Row style={{ gap: 14, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: C.primaryL,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}><LineIcon name="spark" color={C.primary} size={22}/></div>
              <div><p style={{ fontSize: 15, fontWeight: 700, color: C.t1, marginBottom: 3 }}>AI 月度财务分析</p>
                <p style={{ fontSize: 12, color: C.t3 }}>基于你的账单数据智能生成</p></div>
            </Row>
            <div style={{ background: C.bg, borderRadius: 12, padding: "12px 14px" }}>
              <p style={{ fontSize: 13, color: C.t2, lineHeight: 1.7 }}>
                "本月餐饮支出占32%，比上月增加8%。建议控制外卖频率，每月可节省约¥400..."
              </p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); nav("p18"); }} style={{ marginTop: 12, width: "100%",
              padding: "10px 0", borderRadius: 12, background: C.primaryG, color: "#fff",
              border: "none", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>查看完整报告</button>
          </Card>

          {/* Recent history */}
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 12 }}>最近使用</p>
            {[["🎨","AI图片生成","3分钟前",C.aiPink,"p18"],["✍️","账单备注生成","昨天",C.aiBlue,"p19"]].map(([ic,t,time,bg,s]) => (
              <div key={t as string} onClick={() => nav(s as string)}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0",
                  borderBottom: `1px solid ${C.divider}`, cursor: "pointer" }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: bg as string,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}><LineIcon name={ic === "🎨" ? "brush" : "receipt"} color="#fff" size={20}/></div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.t1 }}>{t}</p>
                  <p style={{ fontSize: 11, color: C.t3 }}>{time}</p>
                </div>
                <Chevron/>
              </div>
            ))}
          </div>
        </div>
      </Scroll>
      <TabBar active="p04" onNav={nav}/>
    </div>
  );
}

// ─── P05: 个人中心 (Profile) ──────────────────────────────────────────────
function P05({ nav }: { nav: (s: string) => void }) {
  const menu = [
    { icon:"👑",l:"会员中心",c:C.primary,s:"p31"}, { icon:"💼",l:"账本管理",c:C.primary,s:"p10"}, { icon:"📒",l:"账单分类",c:C.info,s:"p11"},
    { icon:"📊",l:"统计分析",c:C.primary,s:"p14"}, { icon:"💰",l:"资产管理",c:C.success,s:"p15"}, { icon:"📝",l:"账单记录",c:C.warning,s:"p07"},
    { icon:"⚙️",l:"设置",c:C.t2,s:"p24"}, { icon:"📝",l:"我的笔记",c:C.primary,s:"p39"}, { icon:"🎯",l:"签到中心",c:C.warning,s:"p40"}, { icon:"🔗",l:"我的邀请码",c:C.primary,s:"p42"}, { icon:"🧾",l:"我的订单",c:C.primary,s:"p44"}, { icon:"🌐",l:"数据中心",c:C.success,s:"p47"},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(180deg, rgba(124,77,255,.24) 0%, rgba(149,117,205,.12) 34%, rgba(247,248,250,0) 66%, #F7F8FA 100%)" }}>
      <div style={{ background: "transparent", padding: "0 18px 24px", position: "relative", overflow: "hidden", flexShrink: 0 }}><StatusBar/>
        <div style={{ position: "absolute", top:-40,right:-40, width:160,height:160,borderRadius:"50%",background:"rgba(124,77,255,0.08)" }}/>
        <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: C.t2, fontSize: 13 }}>个人中心</span>
          <button onClick={() => nav("p32")} aria-label="消息中心" style={{ position:"relative", border: "none", background: "transparent", padding: 6, cursor: "pointer", color: C.t2 }}><LineIcon name="bell" color={C.t2} size={21}/><span style={{position:"absolute",right:4,top:4,width:7,height:7,borderRadius:9,background:C.danger,border:"2px solid rgba(247,248,250,.9)"}}/></button>
        </div>
        <div onClick={() => nav("p26")} style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
          <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Koko&backgroundColor=f0e9ff" alt="iPink 头像" style={{ width: 60, height: 60, borderRadius: 20, objectFit: "cover", border: "2.5px solid rgba(124,77,255,.22)" }}/>
          <div style={{ flex: 1 }}>
            <Row style={{ gap: 8, marginBottom: 5 }}>
              <span style={{ fontSize: 20, fontWeight: 800, color: C.t1 }}>iPink</span>
              <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: C.primaryL, color: C.primary }}>✨ 会员</span>
            </Row>
            <p style={{ fontSize: 12, color: C.t3 }}>ipink@ilive.live</p>
          </div>
          <Chevron />
        </div>
      </div>
      <Scroll>
        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12, paddingBottom: 90 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: -2 }}>
            {[["138","消费笔数",C.primary,"p07"],["24","已收藏",C.warning,"p09"],["¥68k","净资产",C.success,"p15"]].map(([v,l,c,target]) => (
              <Card key={l} onClick={() => nav(target)} style={{ padding: "13px 8px 11px", textAlign: "center" as any, background: "rgba(255,255,255,.54)", border: "none", boxShadow: "none", cursor: "pointer" }}>
                <p style={{ fontSize: 20, fontWeight: 800, color: c as string, marginBottom: 5 }}>{v}</p>
                <p style={{ fontSize: 10, color: C.t3 }}>{l}</p>
              </Card>
            ))}
          </div>
          <Card style={{ padding: "15px 16px", display: "flex" as any, alignItems: "center", gap: 14, background: "linear-gradient(180deg, rgba(255,255,255,.54) 0%, rgba(255,255,255,.78) 48%, #fff 100%)", border: "none", boxShadow: "none" }}>
            <div style={{ width: 50, height: 50, borderRadius: 17, background: C.primaryL, display: "grid", placeItems: "center" }}><LineIcon name="wallet" color={C.primary} size={24}/></div>
            <div style={{ flex: 1 }}><Row style={{ justifyContent: "space-between" }}><p style={{ fontSize: 14, fontWeight: 750, color: C.t1 }}>本月预算</p><button onClick={() => nav("p24")} style={{ border: "none", background: "transparent", padding: 0, color: C.primary, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>前往设置 ›</button></Row><div style={{ height: 6, borderRadius: 99, background: "rgba(124,77,255,.08)", overflow: "hidden", margin: "9px 0 6px" }}><div style={{ height: "100%", width: "0%", borderRadius: 99, background: C.primary }}/></div><p style={{ fontSize: 11, color: C.t3 }}>已用 - · 还可用 -</p></div>
          </Card>
          <Card style={{ overflow: "hidden", boxShadow: "0 3px 12px rgba(35,27,64,.06)" }}>
            {menu.map((item, i) => (
              <div key={item.l} onClick={() => item.s && nav(item.s)}
                style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 18px",
                  margin: i > 0 ? "0 16px" : "0", paddingLeft: i > 0 ? 2 : 18, paddingRight: i > 0 ? 2 : 18,
                  borderTop: i > 0 ? `1px solid ${C.divider}` : "none", cursor: item.s ? "pointer" : "default" }}>
                <IconBox emoji={item.icon} color={item.c} size={36}/>
                <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: C.t1 }}>{item.l}</span>
                {(item as any).badge && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8,
                  background: C.primaryL, color: C.primary, fontWeight: 600 }}>{(item as any).badge}</span>}
                <Chevron/>
              </div>
            ))}
          </Card>
        </div>
      </Scroll>
      <TabBar active="p05" onNav={nav}/>
    </div>
  );
}

// ─── P06: 账单详情 (Bill Details) ─────────────────────────────────────────
function P06({ nav }: { nav: (s: string) => void }) {
  const rows = [["分类","🍱 餐饮"],["账户","💳 招商银行"],["账本","📒 默认账本"],
    ["日期","2025年09月08日"],["时间","12:45"],["标题","午餐外卖"],["地址","上海市静安区"],["备注","美团 · 麦当劳套餐"]];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="账单详情" onBack={() => nav("p02")}
        right={<button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: C.primary }}>✏️</button>}/>
      <Scroll>
        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ borderRadius: 20, background: C.dangerG, padding: "32px 22px", textAlign: "center",
            boxShadow: `0 8px 24px rgba(252,88,114,0.3)` }}>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, marginBottom: 10 }}>支出</p>
            <p style={{ color: "#fff", fontSize: 48, fontWeight: 800, letterSpacing: "-0.04em" }}>¥38.50</p>
          </div>
          <Card style={{ overflow: "hidden" }}>
            {rows.map(([l,v], i) => (
              <Row key={l} style={{ justifyContent: "space-between", padding: "13px 18px",
                borderBottom: i < rows.length-1 ? `1px solid ${C.divider}` : "none" }}>
                <span style={{ fontSize: 13, color: C.t3 }}>{l}</span>
                <span style={{ fontSize: 13, color: C.t1, fontWeight: 500 }}>{v}</span>
              </Row>
            ))}
          </Card>
          <Card style={{padding:14}}><Row style={{justifyContent:"space-between",marginBottom:10}}><span style={{fontSize:13,fontWeight:700,color:C.t1}}>小票与附件</span><span style={{fontSize:10,color:C.t3}}>1 张</span></Row><div style={{height:96,borderRadius:13,background:"linear-gradient(135deg,#FFF3F7,#F3EEFF)",border:`1px solid ${C.divider}`,display:"grid",placeItems:"center"}}><div style={{textAlign:"center"}}><LineIcon name="receipt" color={C.primary} size={26}/><p style={{marginTop:5,fontSize:10,color:C.t3}}>消费小票.jpg</p></div></div></Card>
          <Row style={{ gap: 12 }}>
            <button style={{ flex: 1, height: 48, borderRadius: 14, background: C.white,
              border: `2px solid ${C.danger}`, color: C.danger, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>删除</button>
            <button style={{ flex: 1, height: 48, borderRadius: 14, background: C.primaryG,
              border: "none", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer",
              boxShadow: `0 4px 14px rgba(124,77,255,0.3)` }}>编辑</button>
          </Row>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P07: 账单搜索 (Bill Search) ──────────────────────────────────────────
function P07({ nav }: { nav: (s: string) => void }) {
  const [q, setQ] = useState("");
  const [f, setF] = useState("全部");
  const [focused, setFocused] = useState(false);
  const results = [
    { icon:"🍱",t:"午餐外卖",n:"美团外卖",a:-38.5,d:"09-08",c:"#FF6B9D"},
    { icon:"🛍️",t:"京东购物",n:"家电商品",a:-1299,d:"09-07",c:C.warning},
    { icon:"🚕",t:"滴滴打车",n:"公司→家",a:-42,d:"09-06",c:C.primary},
  ];
  const visibleResults = results.filter(r => {
    const hit = !q.trim() || `${r.t} ${r.n} ${r.d}`.toLowerCase().includes(q.trim().toLowerCase());
    const typeHit = f === "全部" || (f === "支出" && r.a < 0) || (f === "收入" && r.a > 0);
    return hit && typeHit;
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="搜索账单" onBack={() => nav("p02")}/>
      <div style={{ padding: "10px 16px 12px", background: C.white, borderBottom: `1px solid ${C.divider}`, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, height: 52, background: "linear-gradient(135deg,#FFFFFF 0%,#F8F5FF 100%)",
          borderRadius: 18, padding: "0 12px", marginBottom: 10, border: `1px solid ${focused || q ? C.primary+"66" : "rgba(124,77,255,.12)"}`,
          boxShadow: focused || q ? `0 0 0 3px ${C.primaryL}, 0 8px 22px rgba(124,77,255,.12)` : "0 6px 18px rgba(49,34,91,.07)" }}>
          <span style={{ width: 32, height: 32, borderRadius: 11, background: focused || q ? C.primaryL : "rgba(124,77,255,.08)", display: "grid", placeItems: "center", flexShrink: 0 }}><LineIcon name="search" color={focused || q ? C.primary : C.t2} size={17}/></span>
          <input value={q} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={e => setQ(e.target.value)} placeholder="搜索名称、商户或备注"
            style={{ flex: 1, background: "none", border: "none", outline: "none",
              fontSize: 14, color: C.t1 }}/>
          {q && <button aria-label="清除搜索" onClick={() => setQ("")} style={{ width: 22, height: 22, border: "none", borderRadius: "50%", background: C.border, color: C.white, cursor: "pointer", lineHeight: 1 }}>×</button>}
        </div>
        <div style={{ display: "flex", gap: 8, paddingBottom: 12, overflowX: "auto" }}>
          {["全部","支出","收入","本月","本年"].map(l => <Chip key={l} label={l} active={f===l} onClick={() => setF(l)}/>)}
        </div>
        {!q && <Row style={{ gap: 7, paddingBottom: 2, overflowX: "auto" }}><span style={{ flexShrink: 0, fontSize: 10, color: C.t4 }}>最近搜索</span>{["午餐外卖","工资","打车"].map(word => <button key={word} onClick={() => setQ(word)} style={{ flexShrink: 0, padding: "5px 10px", border: `1px solid ${C.border}`, borderRadius: 999, background: C.white, color: C.t2, fontSize: 10, cursor: "pointer" }}>{word}</button>)}</Row>}
      </div>
      <Scroll>
        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          <Row style={{ justifyContent: "space-between", padding: "0 2px 2px" }}><p style={{ fontSize: 11, color: C.t3 }}>{q ? `“${q}”的搜索结果` : "最近账单"}</p><span style={{ fontSize: 10, color: C.t4 }}>{visibleResults.length} 条</span></Row>
          {visibleResults.length > 0 ? visibleResults.map((r, i) => (
            <Card key={i} style={{ padding: "14px 18px", cursor: "pointer" }} onClick={() => nav("p06")}>
              <Row style={{ gap: 12 }}>
                <IconBox emoji={r.icon} color={r.c} size={42}/>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.t1, marginBottom: 3 }}>{r.t}</p>
                  <p style={{ fontSize: 12, color: C.t3 }}>{r.n} · {r.d}</p>
                </div>
                <span style={{ fontSize: 15, fontWeight: 700, color: r.a > 0 ? C.success : C.t1 }}>
                  {r.a > 0 ? "+" : "-"}¥{Math.abs(r.a)}</span>
              </Row>
            </Card>
          )) : (
            <div style={{ textAlign: "center", padding: "60px 0", color: C.t3 }}>
              <span style={{ width: 56, height: 56, margin: "0 auto 14px", borderRadius: 18, background: C.primaryL, display: "grid", placeItems: "center" }}><LineIcon name="search" color={C.primary} size={25}/></span>
              <p style={{ fontSize: 14, color: C.t2 }}>没有找到相关账单</p>
              <p style={{ marginTop: 6, fontSize: 11 }}>试试其他关键词或筛选条件</p>
            </div>
          )}
        </div>
      </Scroll>
    </div>
  );
}

// ─── P08: 账单日历 (Bill Calendar) ───────────────────────────────────────
function P08({ nav, initialType = "bill" }: { nav: (s: string) => void; initialType?: "bill" | "todo" }) {
  const [sel, setSel] = useState(8);
  const [calendarType, setCalendarType] = useState<"bill" | "todo" | "all">(initialType);
  const [calendarView, setCalendarView] = useState<"week" | "month">("week");
  const days = ["日","一","二","三","四","五","六"];
  const bills: Record<number, { e: number; i: number }> = { 1:{e:120,i:0}, 3:{e:299,i:0}, 5:{e:0,i:23600},
    7:{e:42,i:0}, 8:{e:95.5,i:0}, 10:{e:360,i:0}, 12:{e:15,i:0}, 14:{e:89,i:0}, 18:{e:168,i:0} };
  const todoDays = new Set([8, 9, 11, 14, 19, 23]);
  const visibleDates: Array<number | null> = calendarView === "week"
    ? [8, 9, 10, 11, 12, 13, 14]
    : [null, ...Array.from({ length: 30 }, (_, i) => i + 1)];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title={calendarType === "todo" ? "日程日历" : calendarType === "all" ? "日历" : "账单日历"} onBack={() => nav("p02")}
        right={<button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: C.primary }}>今天</button>}/>
      <Scroll>
        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ borderRadius: 18, background: C.primaryG, padding: "16px 18px", boxShadow: "0 8px 22px rgba(124,77,255,.22)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,.09)", right: -25, top: -32 }}/>
            <Row style={{ justifyContent: "space-between", position: "relative" }}><div><p style={{ fontSize: 13, color: "rgba(255,255,255,.72)" }}>9 月账单日历</p><p style={{ fontSize: 22, color: "#fff", fontWeight: 800, marginTop: 4 }}>花得明白，过得从容</p></div><div style={{ width: 42, height: 42, borderRadius: 14, background: "rgba(255,255,255,.16)", display: "grid", placeItems: "center" }}><LineIcon name="calendar" color="#fff" size={22}/></div></Row>
            <Row style={{ gap: 26, marginTop: 16, position: "relative" }}><div><p style={{ fontSize: 10, color: "rgba(255,255,255,.58)" }}>本月支出</p><p style={{ fontSize: 15, color: "#fff", fontWeight: 750, marginTop: 2 }}>¥4,561.50</p></div><div><p style={{ fontSize: 10, color: "rgba(255,255,255,.58)" }}>记账天数</p><p style={{ fontSize: 15, color: "#fff", fontWeight: 750, marginTop: 2 }}>8 天</p></div><div><p style={{ fontSize: 10, color: "rgba(255,255,255,.58)" }}>日均支出</p><p style={{ fontSize: 15, color: "#fff", fontWeight: 750, marginTop: 2 }}>¥570</p></div></Row>
          </div>
          {/* Calendar controls */}
          <Row style={{ justifyContent: "space-between", padding: "0 2px", gap: 10 }}>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M6 1L1 6l5 5" stroke={C.t2} strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ textAlign: "center", flex: 1 }}><span style={{ fontSize: 16, fontWeight: 800, color: C.t1 }}>2025年9月</span><p style={{ fontSize: 10, color: C.t3, marginTop: 2 }}>{calendarView === "week" ? "9月8日—14日" : "点击日期查看详情"}</p></div>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Chevron/>
            </button>
          </Row>
          <Row style={{ background: "rgba(124,77,255,.08)", borderRadius: 12, padding: 3, gap: 3 }}>
            {([['week','周视图'],['month','月视图']] as const).map(([key,label]) => <button key={key} onClick={() => setCalendarView(key)} style={{ flex: 1, padding: "8px 0", border: "none", borderRadius: 9, background: calendarView === key ? C.white : "transparent", color: calendarView === key ? C.primary : C.t3, boxShadow: calendarView === key ? "0 2px 8px rgba(64,45,110,.08)" : "none", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{label}</button>)}
          </Row>
          {/* Calendar */}
          <Card style={{ padding: "15px 13px 12px", boxShadow: "0 4px 18px rgba(31,24,55,.06)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", marginBottom: 11 }}>
              {(calendarView === "week" ? ["一","二","三","四","五","六","日"] : days).map((d, i) => <div key={`${d}-${i}`} style={{ textAlign: "center", fontSize: 11, color: calendarView === "week" ? (i > 4 ? C.danger : C.t3) : (i === 0 || i === 6 ? C.danger : C.t3), fontWeight: 700 }}>{d}</div>)}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "5px 2px" }}>
              {visibleDates.map((d) => {
                if (!d) return <div key="blank"/>;
                const b = bills[d]; const isSel = d === sel; const isToday = d === 8;
                return (
                  <div key={d} onClick={() => setSel(d)}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: 43, padding: "6px 2px 4px",
                      borderRadius: 13, background: isSel ? C.primaryG : isToday ? C.primaryL : "transparent", boxShadow: isSel ? "0 5px 12px rgba(124,77,255,.25)" : "none", cursor: "pointer" }}>
                    <span style={{ fontSize: 13, fontWeight: isSel || isToday ? 800 : 600, color: isSel ? "#fff" : isToday ? C.primary : C.t1 }}>{d}</span>
                    {(b || todoDays.has(d)) && <div style={{ display: "flex", gap: 3, marginTop: 4 }}>
                      {(b?.e ?? 0) > 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", background: isSel ? "rgba(255,255,255,0.75)" : C.danger }}/>} 
                      {(b?.i ?? 0) > 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", background: isSel ? "rgba(255,255,255,0.75)" : C.success }}/>} 
                      {todoDays.has(d) && <div style={{ width: 4, height: 4, borderRadius: "50%", background: isSel ? "#fff" : C.warning }}/>} 
                    </div>}
                  </div>
                );
              })}
            </div>
          </Card>
          <Row style={{ justifyContent: "center", gap: 16, fontSize: 10, color: C.t3 }}><Row style={{ gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: 9, background: C.danger }}/>支出账单</Row><Row style={{ gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: 9, background: C.success }}/>收入账单</Row><Row style={{ gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: 9, background: C.warning }}/>日程待办</Row></Row>
          <Row style={{ background: C.primaryL, borderRadius: 14, padding: 4, gap: 4 }}>
            {([["bill","账单"],["todo","日程"],["all","全部"]] as const).map(([key, label]) => <button key={key} onClick={() => setCalendarType(key)} style={{ flex: 1, padding: "9px 0", border: "none", borderRadius: 10, background: calendarType === key ? C.white : "transparent", color: calendarType === key ? C.primary : C.t3, fontSize: 13, fontWeight: calendarType === key ? 700 : 500, cursor: "pointer", boxShadow: calendarType === key ? C.cardSm : "none" }}>{label}</button>)}
          </Row>
          {/* Summary */}
          <Card style={{ padding: "16px 18px", border: `1px solid ${C.primaryL}`, display: calendarType === "todo" ? "none" : "block" }}>
            <Row style={{ justifyContent: "space-between", marginBottom: 14 }}><div><p style={{ fontSize: 16, fontWeight: 800, color: C.t1 }}>9月{sel}日 · {sel === 8 ? "周一" : "账单明细"}</p><p style={{ fontSize: 11, color: C.t3, marginTop: 3 }}>{sel === 8 ? "记录了 3 笔消费" : "查看当天收支情况"}</p></div><span style={{ padding: "5px 9px", borderRadius: 10, background: C.primaryL, color: C.primary, fontSize: 10, fontWeight: 700 }}>已记账</span></Row>
            <Row style={{ justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: C.t3 }}>支出合计</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: C.danger }}>-¥95.50</span>
            </Row>
            <Row style={{ justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ fontSize: 13, color: C.t3 }}>收入合计</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: C.success }}>+¥20,000.00</span>
            </Row>
            <div style={{ borderTop: `1px solid ${C.divider}`, paddingTop: 12 }}>
              {[["🍱","午餐外卖","餐饮",-38.5,"#FF6B9D"],["🚕","滴滴打车","交通",-42,C.primary],["💼","9月工资","收入",20000,C.success]].map(([e,t,n,a,c]) => (
                <Row key={t as string} style={{ gap: 10, paddingBottom: 10 }}>
                  <IconBox emoji={e as string} color={c as string} size={34}/>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: C.t1 }}>{t}</p>
                    <p style={{ fontSize: 11, color: C.t3 }}>{n}</p>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: (a as number) > 0 ? C.success : C.t1 }}>
                    {(a as number) > 0 ? "+" : "-"}¥{Math.abs(a as number)}</span>
                </Row>
              ))}
            </div>
          </Card>
          <Card style={{ padding: "16px 18px", display: calendarType === "bill" ? "none" : "block" }}>
            <Row style={{ justifyContent: "space-between", marginBottom: 14 }}><div><p style={{ fontSize: 16, fontWeight: 800, color: C.t1 }}>9月{sel}日 · 日程待办</p><p style={{ fontSize: 11, color: C.t3, marginTop: 3 }}>待办用暖黄色与账单区分</p></div><button onClick={() => nav("p23")} style={{ padding: "7px 10px", borderRadius: 10, border: "none", background: C.warningL, color: "#B77B00", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>＋ 添加待办</button></Row>
            {[['10:00','还信用卡','今天到期',C.danger],['20:00','健身 30 分钟','健康计划',C.success]].map(([time, title, sub, color]) => <div key={title} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 0", borderTop: `1px solid ${C.divider}` }}><span style={{ width: 42, color: color as string, fontSize: 11, fontWeight: 700 }}>{time}</span><span style={{ width: 8, height: 8, borderRadius: 99, background: color as string }}/><div style={{ flex: 1 }}><p style={{ fontSize: 13, fontWeight: 650, color: C.t1 }}>{title}</p><p style={{ marginTop: 2, fontSize: 10, color: C.t3 }}>{sub}</p></div><Chevron/></div>)}
          </Card>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P09: 账单收藏 (Bill Favorites) ──────────────────────────────────────
function P09({ nav }: { nav: (s: string) => void }) {
  const items = [
    { icon:"🍱",t:"午餐外卖",n:"美团外卖",a:-38.5,c:"#FF6B9D"},
    { icon:"💊",t:"复合维生素",n:"健康支出",a:-89,c:C.success},
    { icon:"🎵",t:"网易云会员",n:"订阅费用",a:-15,c:C.warning},
    { icon:"💼",t:"9月工资",n:"招商银行",a:20000,c:C.primary},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="我的收藏" onBack={() => nav("p05")}
        right={<button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: C.primary }}>编辑</button>}/>
      <div style={{ padding: "12px 16px", background: C.white, borderBottom: `1px solid ${C.divider}`, flexShrink: 0 }}>
        <Row style={{ gap: 8 }}>
          {["全部","支出","收入"].map(l => <Chip key={l} label={l} active={l==="全部"}/>)}
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map((item, i) => (
            <Card key={i} style={{ padding: "14px 18px", cursor: "pointer" }} onClick={() => nav("p06")}>
              <Row style={{ gap: 12 }}>
                <span style={{ fontSize: 20, color: C.warning }}>★</span>
                <IconBox emoji={item.icon} color={item.c} size={40}/>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.t1, marginBottom: 3 }}>{item.t}</p>
                  <p style={{ fontSize: 12, color: C.t3 }}>{item.n}</p>
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: item.a > 0 ? C.success : C.t1 }}>
                  {item.a > 0 ? "+" : "-"}¥{Math.abs(item.a)}</span>
              </Row>
            </Card>
          ))}
        </div>
      </Scroll>
    </div>
  );
}

// ─── P10: 账本管理 (Ledger Management) ───────────────────────────────────
function P10({ nav }: { nav: (s: string) => void }) {
  const ledgers = [
    { icon:"📒",name:"默认账本",count:138,def:true,color:C.primary},
    { icon:"🏠",name:"家庭账本",count:56,def:false,color:"#FF6B9D"},
    { icon:"💼",name:"工作账本",count:24,def:false,color:C.success},
    { icon:"✈️",name:"旅行账本",count:12,def:false,color:C.warning},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="账本管理" onBack={() => nav("p05")}
        right={<button onClick={() => nav("p48")} aria-label="新增账本" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: C.primary }}>＋</button>}/>
      <Scroll>
        <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
          {ledgers.map(l => (
            <Card key={l.name} style={{ padding: "18px 18px" }}>
              <Row style={{ justifyContent: "space-between", marginBottom: 14 }}>
                <Row style={{ gap: 12 }}>
                  <IconBox emoji={l.icon} color={l.color} size={44}/>
                  <div>
                    <Row style={{ gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: C.t1 }}>{l.name}</span>
                      {l.def && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8,
                        background: C.primaryL, color: C.primary }}>默认</span>}
                    </Row>
                    <span style={{ fontSize: 12, color: C.t3 }}>{l.count} 笔账单</span>
                  </div>
                </Row>
                <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: C.t3 }}>⋯</button>
              </Row>
              <div style={{ height: 1, background: C.divider, marginBottom: 12 }}/>
              <Row style={{ justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, color: C.danger }}>支出 ¥4,561</span>
                <span style={{ fontSize: 13, color: C.success }}>收入 ¥23,600</span>
                <span style={{ fontSize: 13, color: C.primary }}>结余 ¥19,038</span>
              </Row>
            </Card>
          ))}
        </div>
      </Scroll>
      <button onClick={() => nav("p48")} aria-label="新增账本" style={{ position: "absolute", bottom: 24, right: 20, width: 52, height: 52, borderRadius: "50%",
        background: C.primaryG, border: "none", cursor: "pointer", color: "#fff", fontSize: 24,
        boxShadow: `0 6px 20px rgba(124,77,255,0.4)`, zIndex: 10 }}>+</button>
    </div>
  );
}

// ─── P11: 分类管理 (Category Management) ─────────────────────────────────
function P11({ nav }: { nav: (s: string) => void }) {
  const [type, setType] = useState<"out"|"in">("out");
  const cats = [
    { e:"🍱",l:"餐饮",c:"#FF6B9D",n:45}, { e:"🛍️",l:"购物",c:C.warning,n:32},
    { e:"🚕",l:"交通",c:C.primary,n:28}, { e:"🏠",l:"住房",c:"#00AA90",n:12},
    { e:"🎵",l:"娱乐",c:"#AE9AF0",n:18}, { e:"💊",l:"医疗",c:C.success,n:6},
    { e:"📚",l:"教育",c:"#6B9DFF",n:9}, { e:"✈️",l:"旅行",c:C.danger,n:3},
    { e:"💡",l:"水电",c:C.warning,n:2}, { e:"🐶",l:"宠物",c:"#FF6B9D",n:7},
    { e:"🎁",l:"礼物",c:"#AE9AF0",n:4}, { e:"➕",l:"添加",c:C.t3,n:0},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="分类管理" onBack={() => nav("p05")}
        right={<button onClick={() => nav("p49")} aria-label="新增分类" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 22, color: C.primary }}>＋</button>}/>
      <div style={{ padding: "12px 16px", background: C.white, borderBottom: `1px solid ${C.divider}`, flexShrink: 0 }}>
        <Row style={{ background: C.primaryL, borderRadius: 26, padding: 3 }}>
          {([["out","支出"],["in","收入"]] as const).map(([k,l]) => (
            <button key={k} onClick={() => setType(k)} style={{ flex: 1, padding: "8px 0", borderRadius: 22,
              border: "none", cursor: "pointer",
              background: type===k ? C.white : "transparent",
              color: type===k ? (k==="out" ? C.danger : C.success) : C.t3,
              fontSize: 14, fontWeight: 600, boxShadow: type===k ? C.cardSm : "none" }}>{l}</button>
          ))}
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {cats.map(c => (
              <div key={c.l} style={{ display: "flex", flexDirection: "column", alignItems: "center",
                padding: "14px 6px", background: C.white, borderRadius: 14, boxShadow: C.cardSm, gap: 6, cursor: "pointer" }}>
                <IconBox emoji={c.e} color={c.c} size={44}/>
                <span style={{ fontSize: 12, color: C.t1, fontWeight: 600 }}>{c.l}</span>
                {c.n > 0 && <span style={{ fontSize: 10, color: C.t3 }}>{c.n}次</span>}
              </div>
            ))}
          </div>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P12: 账户管理 (Account Management) ──────────────────────────────────
function P12({ nav }: { nav: (s: string) => void }) {
  const accounts = [
    { icon:"🏦",name:"招商银行",num:"**** 1234",bal:"¥45,328.60",bg:"linear-gradient(135deg,#667EEA 0%,#764BA2 100%)"},
    { icon:"💚",name:"微信钱包",num:"已绑定",bal:"¥2,340.00",bg:"linear-gradient(135deg,#2AAE67 0%,#69D99F 100%)"},
    { icon:"💙",name:"支付宝",num:"已绑定",bal:"¥8,920.00",bg:"linear-gradient(135deg,#00A0E9 0%,#00C8FF 100%)"},
    { icon:"💵",name:"现金",num:"—",bal:"¥1,200.00",bg:"linear-gradient(135deg,#F7C242 0%,#FFA06B 100%)"},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="账户管理" onBack={() => nav("p05")}
        right={<button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: C.primary }}>+</button>}/>
      <div style={{ padding: "12px 16px", background: C.white, borderBottom: `1px solid ${C.divider}`, flexShrink: 0 }}>
        <Row style={{ gap: 8, overflowX: "auto" }}>
          {["全部","银行卡","支付宝","微信","现金","信用卡"].map((l,i) => <Chip key={l} label={l} active={i===0}/>)}
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {accounts.map(a => (
            <div key={a.name} style={{ borderRadius: 20, background: a.bg, padding: "22px 22px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)", cursor: "pointer" }}>
              <Row style={{ justifyContent: "space-between", marginBottom: 20 }}>
                <span style={{ fontSize: 28 }}>{a.icon}</span>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>余额</span>
              </Row>
              <p style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{a.name}</p>
              <Row style={{ justifyContent: "space-between", alignItems: "flex-end" }}>
                <span style={{ color: "#fff", fontSize: 30, fontWeight: 800, letterSpacing: "-0.03em" }}>{a.bal}</span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>{a.num}</span>
              </Row>
            </div>
          ))}
          {/* Total */}
          <Card style={{ padding: "16px 18px" }}>
            <Row style={{ justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: C.t1 }}>资产汇总</span>
              <span onClick={() => nav("p15")} style={{ fontSize: 13, color: C.primary, cursor: "pointer" }}>查看详情 &gt;</span>
            </Row>
            <p style={{ fontSize: 28, fontWeight: 800, color: C.primary }}>¥57,788.60</p>
            <p style={{ fontSize: 12, color: C.t3, marginTop: 4 }}>4个账户 · 净资产 ¥68,000</p>
          </Card>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P48/P49: 新增账本与新增分类 ─────────────────────────────────────────
function P48({ nav }: { nav: (s: string) => void }) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("💼");
  const icons = ["💼", "🏠", "✈️", "🎯", "📒", "💰"];
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:C.bg }}><TopNav title="新增账本" onBack={() => nav("p10")} right={<button onClick={() => name.trim() && nav("p10")} style={{ border:"none", background:"transparent", color:name.trim()?C.primary:C.t4, fontSize:13, fontWeight:750, cursor:name.trim()?"pointer":"default" }}>保存</button>}/><Scroll><div style={{ padding:16, display:"flex", flexDirection:"column", gap:16 }}><Card style={{ padding:18 }}><p style={{fontSize:13,fontWeight:750,color:C.t1}}>账本信息</p><div style={{marginTop:12,padding:"0 13px",height:48,borderRadius:13,background:C.bg,border:`1px solid ${C.border}`,display:"flex",alignItems:"center"}}><LineIcon name="receipt" color={C.primary} size={18}/><input value={name} onChange={e=>setName(e.target.value)} placeholder="输入账本名称" style={{marginLeft:9,flex:1,border:"none",outline:"none",background:"transparent",fontSize:14,color:C.t1}}/></div><p style={{marginTop:16,fontSize:12,fontWeight:700,color:C.t1}}>选择图标</p><div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:8,marginTop:9}}>{icons.map(i=><button key={i} onClick={()=>setIcon(i)} style={{height:44,borderRadius:12,border:icon===i?`1.5px solid ${C.primary}`:"1px solid transparent",background:icon===i?C.primaryL:C.bg,fontSize:20,cursor:"pointer"}}>{i}</button>)}</div></Card><Card style={{padding:16,background:"linear-gradient(135deg,rgba(124,77,255,.1),rgba(255,255,255,.8))"}}><Row style={{gap:10}}><IconBox emoji={icon} color={C.primary} size={38}/><div><p style={{fontSize:13,fontWeight:750,color:C.t1}}>{name || "新账本"}</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>用于独立记录一类消费</p></div></Row></Card><button onClick={()=>name.trim()&&nav("p10")} disabled={!name.trim()} style={{height:46,border:"none",borderRadius:14,background:name.trim()?C.primaryG:C.border,color:"#fff",fontSize:14,fontWeight:800,cursor:name.trim()?"pointer":"default"}}>创建账本</button></div></Scroll></div>;
}

function P49({ nav }: { nav: (s: string) => void }) {
  const [type, setType] = useState<"out"|"in">("out"); const [name, setName] = useState(""); const [icon, setIcon] = useState("🍱");
  const icons = ["🍱", "🛍️", "🚕", "🏠", "🎵", "💊", "📚", "🐾"];
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:C.bg }}><TopNav title="新增分类" onBack={() => nav("p11")} right={<button onClick={() => name.trim() && nav("p11")} style={{border:"none",background:"transparent",color:name.trim()?C.primary:C.t4,fontSize:13,fontWeight:750,cursor:name.trim()?"pointer":"default"}}>保存</button>}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:16}}><Row style={{background:C.primaryL,borderRadius:24,padding:3}}>{([["out","支出"],["in","收入"]] as const).map(([k,l])=><button key={k} onClick={()=>setType(k)} style={{flex:1,height:38,border:"none",borderRadius:20,background:type===k?C.white:"transparent",color:type===k?(k==="out"?C.danger:C.success):C.t3,fontSize:13,fontWeight:750,cursor:"pointer"}}>{l}</button>)}</Row><Card style={{padding:18}}><p style={{fontSize:13,fontWeight:750,color:C.t1}}>分类信息</p><div style={{marginTop:12,padding:"0 13px",height:48,borderRadius:13,background:C.bg,border:`1px solid ${C.border}`,display:"flex",alignItems:"center"}}><LineIcon name="receipt" color={C.primary} size={18}/><input value={name} onChange={e=>setName(e.target.value)} placeholder="输入分类名称" style={{marginLeft:9,flex:1,border:"none",outline:"none",background:"transparent",fontSize:14}}/></div><p style={{marginTop:16,fontSize:12,fontWeight:700,color:C.t1}}>选择图标</p><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginTop:9}}>{icons.map(i=><button key={i} onClick={()=>setIcon(i)} style={{height:52,borderRadius:14,border:icon===i?`1.5px solid ${C.primary}`:"1px solid transparent",background:icon===i?C.primaryL:C.bg,fontSize:23,cursor:"pointer"}}>{i}</button>)}</div></Card><button onClick={()=>name.trim()&&nav("p11")} disabled={!name.trim()} style={{height:46,border:"none",borderRadius:14,background:name.trim()?C.primaryG:C.border,color:"#fff",fontSize:14,fontWeight:800,cursor:name.trim()?"pointer":"default"}}>创建分类</button></div></Scroll></div>;
}

// ─── P13: 账单导入 (Bill Import) ──────────────────────────────────────────
function P13({ nav }: { nav: (s: string) => void }) {
  const methods = [
    { icon:"📁",t:"文件导入",d:"支持 CSV、Excel 格式",bg:C.white,c:C.primary},
    { icon:"💙",t:"支付宝账单",d:"从支付宝APP导入",bg:"linear-gradient(109.6deg,#E6F7FF 0%,#fff 100%)",c:"#00A0E9"},
    { icon:"💚",t:"微信账单",d:"从微信APP导入",bg:"linear-gradient(109.6deg,#E8F8EB 0%,#fff 100%)",c:"#2AAE67"},
    { icon:"📊",t:"CSV 模板",d:"下载模板后填写导入",bg:C.white,c:C.warning},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="导入账单" onBack={() => nav("p05")}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {methods.map(m => (
            <div key={m.t} style={{ borderRadius: 16, background: m.bg, padding: "18px 18px",
              boxShadow: C.cardSm, display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${m.c}18`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>{m.icon}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: C.t1, marginBottom: 4 }}>{m.t}</p>
                <p style={{ fontSize: 12, color: C.t3 }}>{m.d}</p>
              </div>
              <Chevron/>
            </div>
          ))}
          <div style={{ borderRadius: 14, background: "#FFF9E6", border: `1px solid ${C.warning}`, padding: "16px 16px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>⚠️ 导入说明</p>
            {["1. 账单文件大小不超过 10MB","2. 支持多账本分类导入","3. 重复账单将自动过滤","4. 导入前请备份原有数据"].map(t => (
              <p key={t} style={{ fontSize: 13, color: C.t2, lineHeight: 1.8 }}>{t}</p>
            ))}
          </div>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P14: 统计分析 (Bill Statistics) ─────────────────────────────────────
function P14({ nav }: { nav: (s: string) => void }) {
  const [shareOpen, setShareOpen] = useState(false);
  const cats = [
    { name:"餐饮",pct:32,amt:1459,color:C.primary},{ name:"购物",pct:24,amt:1094,color:"#FF6B9D"},
    { name:"住房",pct:20,amt:912,color:C.warning},{ name:"交通",pct:12,amt:547,color:C.success},
    { name:"娱乐",pct:8,amt:365,color:C.info},{ name:"其他",pct:4,amt:182,color:C.t4},
  ];
  let cum = 0;
  const conic = cats.map(d => { const s = cum; cum += d.pct; return `${d.color} ${s}% ${cum}%`; }).join(",");
  const bars = [89,113,84,66,128,73,92,106,87,113,100,84,46];
  const maxB = Math.max(...bars);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="统计分析" onBack={() => nav("p05")}
        right={<button onClick={() => setShareOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: C.primary }}>分享</button>}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Period */}
          <Row style={{ justifyContent: "space-between" }}>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M6 1L1 6l5 5" stroke={C.t2} strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <span style={{ fontSize: 16, fontWeight: 700, color: C.t1 }}>2025年9月</span>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Chevron/></button>
          </Row>
          {/* 3-col */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[["支出","¥4,561",C.danger,"linear-gradient(109.6deg,#FFEBEE 30%,#fff 100%)"],
              ["收入","¥23,600",C.success,"linear-gradient(109.6deg,#E8F8EB 30%,#fff 100%)"],
              ["结余","¥19,038",C.primary,"#fff"]].map(([l,v,c,bg]) => (
              <div key={l} style={{ padding: "14px 12px 12px", borderRadius: 14, background: bg as string, boxShadow: C.cardSm }}>
                <p style={{ fontSize: 17, fontWeight: 800, color: c as string, marginBottom: 5 }}>{v}</p>
                <p style={{ fontSize: 11, color: C.t3 }}>{l}</p>
              </div>
            ))}
          </div>
          {/* Bar chart */}
          <Card style={{ padding: "16px 18px" }}>
            <Row style={{ justifyContent: "space-between", marginBottom: 14 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: C.t1 }}>近13个月支出</p>
            </Row>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 80 }}>
              {bars.map((v, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
                  <div style={{ width: "100%", borderRadius: "3px 3px 0 0",
                    background: i === bars.length-1 ? C.primary : `${C.primary}60`,
                    height: `${(v/maxB)*100}%`, minHeight: 4 }}/>
                </div>
              ))}
            </div>
            <Row style={{ marginTop: 6, borderTop: `1px solid ${C.divider}`, paddingTop: 6 }}>
              {"9,10,11,12,1,2,3,4,5,6,7,8,9".split(",").map((m,i) => (
                <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 9, color: C.t4 }}>{m}</div>
              ))}
            </Row>
          </Card>
          {/* Pie */}
          <Card style={{ padding: "16px 18px" }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: C.t1, marginBottom: 14 }}>支出分类</p>
            <Row style={{ alignItems: "center", gap: 20 }}>
              <div style={{ position: "relative", width: 90, height: 90, flexShrink: 0 }}>
                <div style={{ width: 90, height: 90, borderRadius: "50%", background: `conic-gradient(${conic})` }}/>
                <div style={{ position: "absolute", inset: 20, borderRadius: "50%", background: C.white }}/>
              </div>
              <div style={{ flex: 1 }}>
                {cats.map(d => (
                  <Row key={d.name} style={{ gap: 8, marginBottom: 7 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color, flexShrink: 0 }}/>
                    <span style={{ flex: 1, fontSize: 12, color: C.t2 }}>{d.name}</span>
                    <div style={{ width: 48, height: 4, borderRadius: 2, background: C.bg, overflow: "hidden" }}>
                      <div style={{ width: `${d.pct}%`, height: "100%", borderRadius: 2, background: d.color }}/></div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: C.t1, width: 28, textAlign: "right" }}>{d.pct}%</span>
                  </Row>
                ))}
              </div>
            </Row>
          </Card>
          {/* Table */}
          <Card style={{ overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
              padding: "10px 14px", background: C.bg, borderBottom: `1px solid ${C.divider}` }}>
              {["日期","支出","收入","结余"].map(h => <span key={h} style={{ fontSize: 12, color: C.t3, fontWeight: 600, textAlign: "center" }}>{h}</span>)}
            </div>
            {[["09-08","¥95.50","¥20,000","¥19,904"],["09-07","¥42.00","—","—"],
              ["09-06","¥168.00","—","—"],["09-05","¥15.00","—","—"]].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                padding: "10px 14px", borderBottom: i < 3 ? `1px solid ${C.divider}` : "none" }}>
                {row.map((cell, j) => (
                  <span key={j} style={{ fontSize: 12, textAlign: "center", fontWeight: j>0 ? 600 : 400,
                    color: j===1 ? C.danger : j===2&&cell!=="—" ? C.success : j===3&&cell!=="—" ? C.primary : C.t2 }}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </Card>
        </div>
      </Scroll>
      <ShareSheet open={shareOpen} onClose={() => setShareOpen(false)}/>
    </div>
  );
}

// ShareSheet is rendered by P14 through the shared overlay layer.
// ─── P15: 资产分析 (Asset Analysis) ──────────────────────────────────────
function P15({ nav }: { nav: (s: string) => void }) {
  const [tab, setTab] = useState<"asset"|"debt">("asset");
  const assets = [
    { icon:"🏦",name:"银行存款",amt:"¥45,328",c:C.primary},{ icon:"💙",name:"支付宝",amt:"¥8,920",c:"#00A0E9"},
    { icon:"💚",name:"微信钱包",amt:"¥2,340",c:"#2AAE67"},{ icon:"💵",name:"现金",amt:"¥1,200",c:C.warning},
    { icon:"💳",name:"信用卡",amt:"-¥10,200",c:C.danger},{ icon:"📦",name:"其他",amt:"¥200",c:C.t3},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="资产分析" onBack={() => nav("p05")}/>
      <div style={{ padding: "0 16px", background: C.white, borderBottom: `1px solid ${C.divider}`, flexShrink: 0 }}>
        <Row>
          {([["asset","资产"],["debt","负债"]] as const).map(([k,l]) => (
            <button key={k} onClick={() => setTab(k)} style={{ flex: 1, padding: "14px 0", background: "none",
              border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700,
              color: tab===k ? C.primary : C.t3,
              borderBottom: tab===k ? `3px solid ${C.primary}` : "3px solid transparent" }}>{l}</button>
          ))}
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ borderRadius: 20, background: tab==="asset" ? C.primaryG : C.dangerG,
            padding: "24px 22px", boxShadow: `0 8px 30px rgba(124,77,255,0.28)` }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 8 }}>{tab==="asset" ? "总资产" : "总负债"}</p>
            <p style={{ color: "#fff", fontSize: 40, fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 12 }}>
              {tab==="asset" ? "¥57,988" : "¥10,200"}</p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>净资产 ¥68,000 · 负债率 15%</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {assets.slice(0, tab==="asset" ? 6 : 2).map(a => (
              <Card key={a.name} style={{ padding: "16px 16px" }}>
                <IconBox emoji={a.icon} color={a.c} size={40}/>
                <p style={{ fontSize: 12, color: C.t3, marginTop: 12, marginBottom: 6 }}>{a.name}</p>
                <p style={{ fontSize: 18, fontWeight: 800, color: a.amt.startsWith("-") ? C.danger : C.t1 }}>{a.amt}</p>
              </Card>
            ))}
          </div>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P16: 还款计划 (Repayment Plan) ──────────────────────────────────────
function P16({ nav }: { nav: (s: string) => void }) {
  const items = [
    { icon:"💳",name:"招商信用卡",due:"09-25",amt:"¥3,280",paid:false,days:17},
    { icon:"🏦",name:"花呗",due:"09-09",amt:"¥1,200",paid:false,days:1},
    { icon:"💚",name:"微信分期",due:"09-15",amt:"¥860",paid:false,days:7},
    { icon:"✅",name:"建设银行卡",due:"08-20",amt:"¥2,100",paid:true,days:0},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="还款计划" onBack={() => nav("p15")}
        right={<button onClick={() => nav("p17")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: C.primary }}>历史</button>}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <Row style={{ justifyContent: "space-between" }}>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M6 1L1 6l5 5" stroke={C.t2} strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <span style={{ fontSize: 16, fontWeight: 700, color: C.t1 }}>2025年9月</span>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: C.bg, border: `1px solid ${C.border}`,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Chevron/></button>
          </Row>
          {/* Summary */}
          <div style={{ borderRadius: 20, background: C.aiPink, padding: "20px 22px",
            boxShadow: "0 6px 20px rgba(255,107,157,0.3)" }}>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, marginBottom: 8 }}>本月待还</p>
            <p style={{ color: "#fff", fontSize: 36, fontWeight: 900, letterSpacing: "-0.04em" }}>¥5,340.00</p>
          </div>
          {/* List */}
          <p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>待还款项</p>
          {items.filter(x => !x.paid).map(item => (
            <Card key={item.name} style={{ padding: "16px 18px" }}>
              <Row style={{ justifyContent: "space-between", marginBottom: 12 }}>
                <Row style={{ gap: 10 }}>
                  <IconBox emoji={item.icon} color={C.danger} size={40}/>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 3 }}>{item.name}</p>
                    <p style={{ fontSize: 12, color: C.t3 }}>还款日 {item.due}</p>
                  </div>
                </Row>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: C.danger }}>{item.amt}</p>
                  <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 8,
                    background: item.days <= 3 ? C.dangerL : C.warningL,
                    color: item.days <= 3 ? C.danger : C.warning }}>还有{item.days}天</span>
                </div>
              </Row>
              <div style={{ height: 5, background: C.bg, borderRadius: 3, overflow: "hidden", marginBottom: 10 }}>
                <div style={{ width: `${100 - (item.days / 30) * 100}%`, height: "100%", borderRadius: 3, background: item.days <= 3 ? C.danger : C.primary }}/>
              </div>
              <button style={{ width: "100%", padding: "10px 0", borderRadius: 10, background: C.primaryG,
                border: "none", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>标记已还款</button>
            </Card>
          ))}
          <p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>已还款项</p>
          {items.filter(x => x.paid).map(item => (
            <Card key={item.name} style={{ padding: "14px 18px", opacity: 0.7 }}>
              <Row style={{ justifyContent: "space-between" }}>
                <Row style={{ gap: 10 }}>
                  <IconBox emoji={item.icon} color={C.success} size={36}/>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: C.t1 }}>{item.name}</p>
                    <p style={{ fontSize: 12, color: C.t3 }}>已于 {item.due} 还款</p>
                  </div>
                </Row>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: C.success }}>{item.amt}</p>
                  <span style={{ fontSize: 10, background: C.successL, color: C.success, padding: "2px 8px", borderRadius: 8 }}>已完成</span>
                </div>
              </Row>
            </Card>
          ))}
        </div>
      </Scroll>
    </div>
  );
}

// ─── P17: 还款历史 (Repayment History) ───────────────────────────────────
function P17({ nav }: { nav: (s: string) => void }) {
  const history = [
    { month:"2025年9月", items:[
      { name:"建设银行卡",amt:"¥2,100",date:"09-20",method:"银行转账"},
      { name:"花呗",amt:"¥1,200",date:"09-09",method:"支付宝"},
    ]},
    { month:"2025年8月", items:[
      { name:"招商信用卡",amt:"¥3,280",date:"08-25",method:"银行转账"},
      { name:"微信分期",amt:"¥860",date:"08-15",method:"微信支付"},
    ]},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="还款历史" onBack={() => nav("p16")}
        right={<button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: C.primary }}>筛选</button>}/>
      <div style={{ padding: "12px 16px", background: C.white, borderBottom: `1px solid ${C.divider}`, flexShrink: 0 }}>
        <Row style={{ gap: 8 }}>
          {["全部","信用卡","贷款","其他"].map((l,i) => <Chip key={l} label={l} active={i===0}/>)}
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16 }}>
          {history.map(g => (
            <div key={g.month} style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 12,
                paddingBottom: 10, borderBottom: `2px solid ${C.border}` }}>{g.month}</p>
              {g.items.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 4 }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: C.success, flexShrink: 0 }}/>
                    {i < g.items.length-1 && <div style={{ width: 2, background: C.border, flex: 1, marginTop: 4 }}/>}
                  </div>
                  <Card style={{ flex: 1, padding: "14px 16px" }}>
                    <Row style={{ justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>{item.name}</span>
                      <span style={{ fontSize: 16, fontWeight: 800, color: C.success }}>{item.amt}</span>
                    </Row>
                    <Row style={{ justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: C.t3 }}>{item.date}</span>
                      <span style={{ fontSize: 12, color: C.t2 }}>{item.method}</span>
                    </Row>
                  </Card>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Scroll>
    </div>
  );
}

// ─── P18: AI 图片生成 ─────────────────────────────────────────────────────
function P18({ nav }: { nav: (s: string) => void }) {
  const [style, setStyle] = useState("写实");
  const [size, setSize] = useState("1:1");
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [share, setShare] = useState(false);
  const styles = [["写实","🎨"],["插画","🖼️"],["动漫","🎭"],["抽象","🌈"],["3D渲染","💎"],["油画","🖌️"]];
  const generate = () => { setLoading(true); setTimeout(() => { setLoading(false); setGenerated(true); }, 2000); };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg, position: "relative" }}>
      <div style={{ background: C.aiPink, padding: "0 16px", flexShrink: 0 }}><StatusBar dark/>
        <Row style={{ height: 56, justifyContent: "space-between" }}>
          <button onClick={() => nav("p04")} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}>
            <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
              <path d="M8 1L1 7.5L8 14" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <span style={{ color: "#fff", fontSize: 17, fontWeight: 700 }}>AI 图片生成</span>
          <button onClick={()=>nav("p43")} style={{border:"none",borderRadius:9,padding:"5px 8px",background:"rgba(255,255,255,.18)",color:"#fff",fontSize:10,cursor:"pointer"}}>368 积分</button>
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <Card style={{ padding: "16px 18px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>描述你想要的图片</p>
            <textarea value={prompt} onChange={e => setPrompt(e.target.value.slice(0, 500))} placeholder="例如：一个可爱的小猫咪在秋天的公园里玩耍..." rows={4}
              style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10,
                padding: "10px 12px", fontSize: 13, lineHeight: 1.7, resize: "none", outline: "none", boxSizing: "border-box" }}/>
            <p style={{ textAlign: "right", fontSize: 11, color: C.t3, marginTop: 4 }}>{prompt.length}/500</p>
          </Card>
          {/* Size */}
          <Card style={{ padding: "16px 18px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>尺寸</p>
            <Row style={{ gap: 8 }}>
              {[["1:1","正方形"],["16:9","横版"],["9:16","竖版"]].map(([k,l]) => (
                <button key={k} onClick={() => setSize(k)} style={{ flex: 1, padding: "10px 0", borderRadius: 10,
                  border: `2px solid ${size===k ? C.primary : C.border}`,
                  background: size===k ? C.primaryL : C.white,
                  color: size===k ? C.primary : C.t2, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                  {k}<br/><span style={{ fontSize: 10, fontWeight: 400 }}>{l}</span>
                </button>
              ))}
            </Row>
          </Card>
          {/* Style */}
          <Card style={{ padding: "16px 18px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>风格</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {styles.map(([l,ic]) => (
                <button key={l} onClick={() => setStyle(l)} style={{ padding: "12px 8px", borderRadius: 10,
                  border: `2px solid ${style===l ? C.primary : C.border}`,
                  background: style===l ? C.primaryL : C.white,
                  cursor: "pointer", textAlign: "center" }}>
                  <div style={{ marginBottom: 4 }}><IconBox emoji={ic} color={style===l ? C.primary : C.t3} size={28}/></div>
                  <div style={{ fontSize: 11, color: style===l ? C.primary : C.t2, fontWeight: style===l ? 600 : 400 }}>{l}</div>
                </button>
              ))}
            </div>
          </Card>
          {/* Result */}
          {generated && (
            <Card style={{ padding: "16px 18px" }}>
              <div style={{ height: 200, borderRadius: 12, background: "linear-gradient(135deg,#E8D5FF 0%,#B8A3FF 100%)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <span style={{ width:64,height:64,borderRadius:20,background:"rgba(255,255,255,.42)",display:"grid",placeItems:"center" }}><LineIcon name="brush" color={C.primary} size={30}/></span>
              </div>
              <Row style={{ gap: 8 }}>
                {[["下载",C.primaryG,"#fff"],["分享",C.white,C.primary],["重新生成",C.bg,C.t2]].map(([l,bg,c]) => (
                  <button key={l} onClick={() => l === "分享" ? setShare(true) : l === "重新生成" ? generate() : undefined} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: bg===C.white ? `1px solid ${C.border}` : "none",
                    background: bg as string, color: c as string, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{l}</button>
                ))}
              </Row>
            </Card>
          )}
          <button onClick={generate} style={{ width: "100%", padding: "14px 0", borderRadius: 14,
            background: loading ? `${C.primary}80` : C.aiPink, border: "none",
            color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 6px 20px rgba(255,107,157,0.3)" }}>
            {loading ? "⏳ 生成中..." : "✨ 开始生成"}
          </button>
          {/* History grid */}
          <p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>生成历史</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {["#E8D5FF","#D5E8FF","#D5FFE8","#FFE8D5","#FFD5E8","#E8FFD5"].map((c,i) => (
              <div key={i} style={{ height: 90, borderRadius: 12, background: `linear-gradient(135deg,${c} 0%,#fff 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
                <LineIcon name={(["brush","spark","globe","user","spark","crown"] as const)[i]} color={C.primary} size={23}/>
              </div>
            ))}
          </div>
          <div style={{ height: 16 }}/>
        </div>
      </Scroll>
      <ShareSheet open={share} onClose={() => setShare(false)}/>
    </div>
  );
}

// ─── P19: AI 文字生成 ─────────────────────────────────────────────────────
function P19({ nav }: { nav: (s: string) => void }) {
  const [scene, setScene] = useState(0);
  const [wstyle, setWstyle] = useState("专业");
  const [keywords, setKeywords] = useState("");
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);
  const scenes = [["📝","账单备注","生成账单备注"],["✍️","日记","每日日记"],["📢","通知","创建通知"],
    ["💬","社媒","社交内容"],["✉️","邮件","专业邮件"],["🎯","自定义","自由创作"]];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <div style={{ background: C.aiBlue, padding: "0 16px", flexShrink: 0 }}><StatusBar dark/>
        <Row style={{ height: 56, justifyContent: "space-between" }}>
          <button onClick={() => nav("p04")} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}>
            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"><path d="M8 1L1 7.5L8 14" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <span style={{ color: "#fff", fontSize: 17, fontWeight: 700 }}>AI 文字生成</span>
          <button onClick={()=>nav("p43")} style={{border:"none",borderRadius:9,padding:"5px 8px",background:"rgba(255,255,255,.18)",color:"#fff",fontSize:10,cursor:"pointer"}}>368 积分</button>
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <Card style={{ padding: "16px 18px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>选择场景</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {scenes.map(([ic,t,d], i) => (
                <button key={t} onClick={() => setScene(i)} style={{ padding: "12px", borderRadius: 12,
                  border: `2px solid ${scene===i ? C.primary : C.border}`,
                  background: scene===i ? C.primaryL : C.white,
                  cursor: "pointer", textAlign: "left" }}>
                  <div style={{ marginBottom: 6 }}><IconBox emoji={ic} color={scene===i ? C.primary : C.t3} size={28}/></div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: scene===i ? C.primary : C.t1, marginBottom: 2 }}>{t}</p>
                  <p style={{ fontSize: 11, color: C.t3 }}>{d}</p>
                </button>
              ))}
            </div>
          </Card>
          <Card style={{ padding: "16px 18px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>关键词</p>
            <input value={keywords} onChange={e=>setKeywords(e.target.value)} placeholder="输入关键词，用逗号分隔" style={{ width: "100%", height: 44,
              background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, padding: "0 12px",
              fontSize: 13, outline: "none", boxSizing: "border-box" }}/>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginTop: 12, marginBottom: 8 }}>写作风格</p>
            <Row style={{ gap: 8, flexWrap: "wrap" }}>
              {["专业","轻松","幽默","正式","创意"].map(l => (
                <button key={l} onClick={() => setWstyle(l)} style={{ padding: "6px 12px", borderRadius: 20,
                  border: `1px solid ${wstyle===l ? C.primary : C.border}`,
                  background: wstyle===l ? C.primaryL : C.white,
                  color: wstyle===l ? C.primary : C.t2, fontSize: 12, cursor: "pointer" }}>{l}</button>
              ))}
            </Row>
          </Card>
          {generated && (
            <Card style={{ padding: "16px 18px" }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>生成结果</p>
              <div style={{ background: C.bg, borderRadius: 10, padding: "12px 14px", marginBottom: 12 }}>
                <p style={{ fontSize: 13, color: C.t2, lineHeight: 1.8 }}>
                  今天在美团外卖点了麦当劳套餐，花费¥38.50。虽然价格稍贵，但节省了午休时间，让我能专注工作。下次可以考虑提前自备午餐，既健康又省钱。
                </p>
              </div>
              <Row style={{ gap: 8 }}>
                <button onClick={async()=>{try{await navigator.clipboard?.writeText("今天的生活记录与消费复盘");}catch{} setCopied(true);setTimeout(()=>setCopied(false),900);}} style={{ flex: 1, padding: "10px 0", borderRadius: 10, background: C.primaryG,
                  border: "none", color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>{copied?"已复制":"复制"}</button>
                <button onClick={()=>{setGenerated(false);setTimeout(()=>setGenerated(true),350);}} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: `1px solid ${C.border}`,
                  background: C.white, color: C.t2, fontSize: 12, cursor: "pointer" }}>重新生成</button>
              </Row>
            </Card>
          )}
          <button onClick={() => setGenerated(true)} style={{ width: "100%", padding: "14px 0", borderRadius: 14,
            background: C.aiBlue, border: "none", color: "#fff", fontSize: 15, fontWeight: 700,
            cursor: "pointer", boxShadow: "0 6px 20px rgba(107,157,255,0.3)" }}>✨ 生成文字</button>
          <div style={{ height: 16 }}/>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P20: AI 决策助手 ─────────────────────────────────────────────────────
function P20({ nav }: { nav: (s: string) => void }) {
  const [decided, setDecided] = useState(false);
  const [options, setOptions] = useState([["买iPhone 16","价格贵但性能好，生态完善"],["买小米15","性价比高，安卓生态灵活"]]);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <div style={{ background: C.aiYellow, padding: "0 16px", flexShrink: 0 }}><StatusBar dark/>
        <Row style={{ height: 56, justifyContent: "space-between" }}>
          <button onClick={() => nav("p04")} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}>
            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"><path d="M8 1L1 7.5L8 14" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <span style={{ color: "#fff", fontSize: 17, fontWeight: 700 }}>决策助手</span>
          <button onClick={()=>nav("p43")} style={{border:"none",borderRadius:9,padding:"5px 8px",background:"rgba(255,255,255,.18)",color:"#fff",fontSize:10,cursor:"pointer"}}>368 积分</button>
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <Card style={{ padding: "16px 18px" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 10 }}>你的问题</p>
            <textarea placeholder="你需要帮助做什么决策？" rows={3} defaultValue="换手机：买iPhone 16还是小米15？"
              style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10,
                padding: "10px 12px", fontSize: 13, lineHeight: 1.7, resize: "none", outline: "none", boxSizing: "border-box" }}/>
          </Card>
          <Card style={{ padding: "16px 18px" }}>
            <Row style={{ justifyContent: "space-between", marginBottom: 12 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>选项</p>
              <button onClick={()=>options.length<10&&setOptions(v=>[...v,[`新选项 ${v.length+1}`,"点击后补充优缺点"]])} style={{ width: 28, height: 28, borderRadius: "50%", background: C.primaryL, border:"none",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: C.primary, fontSize: 18 }}>+</button>
            </Row>
            {options.map(([name, desc], i) => (
              <Row key={i} style={{ gap: 10, marginBottom: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.primaryL,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: C.primary, flexShrink: 0 }}>{i+1}</div>
                <div style={{ flex: 1, background: C.bg, borderRadius: 10, padding: "10px 12px" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: C.t1, marginBottom: 2 }}>{name}</p>
                  <p style={{ fontSize: 11, color: C.t3 }}>{desc}</p>
                </div>
                {options.length>2&&<button onClick={()=>setOptions(v=>v.filter((_,x)=>x!==i))} aria-label={`删除${name}`} style={{ border:"none",background:"transparent",color:C.t4,cursor:"pointer" }}>×</button>}
              </Row>
            ))}
          </Card>
          {decided && (
            <div>
              <div style={{ borderRadius: 16, background: "linear-gradient(135deg,#E8F8EB 0%,#fff 100%)",
                border: `2px solid ${C.success}`, padding: "20px 18px", marginBottom: 12,
                boxShadow: `0 6px 20px rgba(57,181,74,0.15)` }}>
                <span style={{ background: C.success, color: "#fff", fontSize: 11, padding: "3px 10px",
                  borderRadius: 20, fontWeight: 600, display: "inline-block", marginBottom: 10 }}>✓ 推荐选择</span>
                <p style={{ fontSize: 18, fontWeight: 800, color: C.success, marginBottom: 10 }}>买 iPhone 16</p>
                <p style={{ fontSize: 13, color: C.t2, lineHeight: 1.7 }}>
                  综合你的使用场景和预算考量，iPhone 16 的生态体验和长期保值率更适合你的需求。虽然初始成本较高，但5年综合使用成本相差不大。
                </p>
              </div>
              {options.map(([name], i) => (
                <Card key={i} style={{ padding: "14px 16px", marginBottom: 10 }}>
                  <Row style={{ gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.primaryL,
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: C.primary, fontWeight: 700 }}>{i+1}</div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>{name}</p>
                  </Row>
                  <p style={{ fontSize: 12, color: C.t3, lineHeight: 1.6, marginBottom: 10 }}>
                    {i===0 ? "优势：系统稳定、摄影领先、生态完善 / 劣势：价格偏高、自定义受限" : "优势：性价比高、充电速度快 / 劣势：系统更新周期短、部分应用适配差"}
                  </p>
                  <div style={{ height: 5, background: C.bg, borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: i===0 ? "82%" : "68%", height: "100%", borderRadius: 3, background: C.primary }}/>
                  </div>
                  <p style={{ fontSize: 11, color: C.t3, marginTop: 4 }}>综合评分 {i===0 ? "82" : "68"}/100</p>
                </Card>
              ))}
            </div>
          )}
          <button onClick={() => setDecided(true)} style={{ width: "100%", padding: "14px 0", borderRadius: 14,
            background: C.aiYellow, border: "none", color: "#fff", fontSize: 15, fontWeight: 700,
            cursor: "pointer", boxShadow: "0 6px 20px rgba(247,194,66,0.4)" }}><LineIcon name="chart" color="#fff" size={18}/> AI 分析决策</button>
          <div style={{ height: 16 }}/>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P21: 智能提醒 (Smart Reminders) ─────────────────────────────────────
function P21({ nav }: { nav: (s: string) => void }) {
  const [filter,setFilter]=useState("全部");
  const [reminders,setReminders] = useState([
    { icon:"💳",t:"信用卡还款",d:"招商银行 · 每月25日",time:"09:00",on:true,c:C.danger,type:"还款提醒"},
    { icon:"📊",t:"月度记账",d:"每月最后一天提醒",time:"20:00",on:true,c:C.primary,type:"账单提醒"},
    { icon:"💊",t:"吃药提醒",d:"每天上午",time:"08:30",on:false,c:C.success,type:"自定义"},
    { icon:"💰",t:"基金定投",d:"每周五",time:"10:00",on:true,c:C.warning,type:"自定义"},
  ]);
  const visibleReminders=filter==="全部"?reminders:reminders.filter(r=>r.type===filter);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <div style={{ background: C.infoG, padding: "0 16px", flexShrink: 0 }}><StatusBar dark/>
        <Row style={{ height: 56, justifyContent: "space-between" }}>
          <button onClick={() => nav("p04")} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff" }}>
            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"><path d="M8 1L1 7.5L8 14" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          <span style={{ color: "#fff", fontSize: 17, fontWeight: 700 }}>智能提醒</span>
          <Row style={{gap:5}}><button onClick={()=>nav("p43")} style={{border:"none",borderRadius:9,padding:"5px 7px",background:"rgba(255,255,255,.18)",color:"#fff",fontSize:9,cursor:"pointer"}}>会员免费</button><button onClick={()=>nav("p23")} style={{ color: "rgba(255,255,255,0.9)", fontSize: 20, cursor: "pointer",border:"none",background:"transparent" }}>+</button></Row>
        </Row>
        <Row style={{ gap: 8, paddingBottom: 14, overflowX: "auto" }}>
          {["全部","账单提醒","还款提醒","自定义"].map((l) => (
            <button key={l} onClick={()=>setFilter(l)} style={{ padding: "6px 14px", borderRadius: 999, border: "none", cursor: "pointer",
              background: filter===l ? "#fff" : "rgba(255,255,255,0.2)",
              color: filter===l ? C.info : "#fff", fontSize: 12, fontWeight: filter===l ? 600 : 400, flexShrink: 0 }}>{l}</button>
          ))}
        </Row>
      </div>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          {visibleReminders.map((r) => {
            const i=reminders.findIndex(x=>x.t===r.t);
            return (
            <Card key={i} style={{ padding: "16px 18px" }}>
              <Row style={{ justifyContent: "space-between", marginBottom: 10 }}>
                <Row style={{ gap: 12 }}>
                  <IconBox emoji={r.icon} color={r.c} size={42}/>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 3 }}>{r.t}</p>
                    <p style={{ fontSize: 12, color: C.t3 }}>{r.d}</p>
                  </div>
                </Row>
                <div onClick={()=>setReminders(v=>v.map((x,idx)=>idx===i?{...x,on:!x.on}:x))} style={{cursor:"pointer"}}><Toggle on={r.on}/></div>
              </Row>
              <Row style={{ justifyContent: "space-between", paddingTop: 10, borderTop: `1px solid ${C.divider}` }}>
                <span style={{ fontSize: 12, color: C.t3, display:"inline-flex", alignItems:"center", gap:5 }}><LineIcon name="clock" color={C.t3} size={14}/>重复</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: C.t2 }}>{r.time}</span>
              </Row>
              {r.on && <p style={{ fontSize: 11, color: C.primary, marginTop: 6 }}>下次提醒：明天 {r.time}</p>}
            </Card>
          )})}
        </div>
      </Scroll>
    </div>
  );
}

// ─── P22: 待办列表 (Todo List) ────────────────────────────────────────────
function P22({ nav }: { nav: (s: string) => void }) {
  const [filter, setFilter] = useState("全部");
  const [todos, setTodos] = useState([
    { t:"买菜回家",p:"高",c:"#FC5872",done:false,due:"今天"},
    { t:"健身30分钟",p:"中",c:"#F7C242",done:true,due:"今天"},
    { t:"还信用卡",p:"高",c:"#FC5872",done:false,due:"明天"},
    { t:"看书1小时",p:"低",c:C.primary,done:false,due:"本周"},
    { t:"整理衣柜",p:"低",c:C.primary,done:false,due:"本周"},
    { t:"回复工作邮件",p:"中",c:"#F7C242",done:true,due:"昨天"},
  ]);
  const visibleTodos = todos.filter(t => filter === "全部" || (filter === "进行中" && !t.done) || (filter === "已完成" && t.done));
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="待办清单" onBack={() => nav("p02")}
        right={<button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 13, color: C.primary }}>筛选</button>}/>
      <div style={{ padding: "12px 16px", background: C.white, borderBottom: `1px solid ${C.divider}`, flexShrink: 0 }}>
        <Row style={{ gap: 8, marginBottom: 12 }}>
          {["全部","进行中","已完成"].map(l => <Chip key={l} label={l} active={filter===l} onClick={() => setFilter(l)}/>)}
        </Row>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[[String(todos.filter(t=>!t.done).length),C.primary,"进行中"],[String(todos.filter(t=>t.done).length),C.success,"已完成"],[String(todos.length),C.t2,"全部"]].map(([v,c,l]) => (
            <div key={l} style={{ padding: "8px 10px", background: C.bg, borderRadius: 10, textAlign: "center" }}>
              <p style={{ fontSize: 18, fontWeight: 800, color: c as string }}>{v}</p>
              <p style={{ fontSize: 10, color: C.t3 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
      <Scroll>
        <div style={{ padding: "14px 16px", paddingBottom: 80 }}>
          {[["今天","today"],["明天","tomorrow"],["本周","week"]].map(([label]) => {
            const group = visibleTodos.filter(t => t.due===label);
            if (!group.length) return null;
            return (
              <div key={label} style={{ marginBottom: 20 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 10,
                  paddingBottom: 8, borderBottom: `2px solid ${C.border}` }}>{label}</p>
                {group.map((todo, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 16px",
                    background: C.white, borderRadius: 14, marginBottom: 8, boxShadow: C.cardSm }}>
                    <button aria-label={todo.done ? "标记为进行中" : "完成待办"} onClick={() => setTodos(v => v.map(x => x.t===todo.t ? {...x, done: !x.done} : x))} style={{ width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                      border: `2px solid ${todo.done ? C.success : C.border}`,
                      background: todo.done ? C.success : "none",
                      display: "grid", placeItems: "center", cursor: "pointer" }}>
                      {todo.done && <LineIcon name="check" color="#fff" size={14}/>} 
                    </button>
                    <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: todo.done ? C.t3 : C.t1,
                      textDecoration: todo.done ? "line-through" : "none" }}>{todo.t}</span>
                    <span style={{ fontSize: 11, padding: "4px 9px", borderRadius: 9,
                      background: `${todo.c}18`, color: todo.c }}>{todo.p}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </Scroll>
      {/* Quick add bar */}
      <div style={{ background: C.white, borderTop: `1px solid ${C.divider}`, padding: "10px 16px 18px",
        display: "flex", gap: 10, flexShrink: 0 }}>
        <button onClick={() => nav("p23")} style={{ flex: 1, height: 42, background: C.white, borderRadius: 21, display: "flex",
          alignItems: "center", padding: "0 16px", border: `1px solid ${C.border}`, cursor: "pointer", textAlign: "left" }}>
          <LineIcon name="plus" color={C.t4} size={16}/><span style={{ marginLeft: 8, fontSize: 13, color: C.t4 }}>快速添加待办...</span>
        </button>
        <button onClick={() => nav("p23")} style={{ width: 40, height: 40, borderRadius: "50%", background: C.primaryG,
          border: "none", cursor: "pointer", color: "#fff", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: `0 4px 14px rgba(124,77,255,0.3)` }}>+</button>
      </div>
    </div>
  );
}

// ─── P23: 添加待办 (Add Todo) ─────────────────────────────────────────────
function P23({ nav }: { nav: (s: string) => void }) {
  const [priority, setPriority] = useState("高");
  const [remind, setRemind] = useState(true);
  const [reminderChannels, setReminderChannels] = useState({ sms: false, wechat: true, system: true });
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("2025-09-08");
  const [time,setTime]=useState("10:00");
  const [scheduleMode,setScheduleMode]=useState<"once"|"weekly"|"interval"|"multi">("once");
  const [weekdays,setWeekdays]=useState<string[]>(["一"]);
  const [intervalDays,setIntervalDays]=useState(2);
  const [repeatRule,setRepeatRule]=useState("每天");
  const [endDate,setEndDate]=useState("2025-09-10");
  const [multiDateDraft,setMultiDateDraft]=useState("2025-09-08");
  const [multiDates,setMultiDates]=useState<string[]>(["2025-09-08"]);
  const save=()=>{ if(title.trim()) nav("p08"); };
  return (
    <div data-todo-form style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="新建待办" onBack={() => nav("p22")} right={<button onClick={save} style={{ background: "none", border: "none", cursor: title.trim()?"pointer":"default", fontSize: 13, color: title.trim()?C.primary:C.t4, fontWeight: 800 }}>保存</button>}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          <div>
            <Row style={{ gap: 7, marginBottom: 8 }}><LineIcon name="brush" color={C.primary} size={16}/><p style={{ fontSize: 13, fontWeight: 700, color: C.t1 }}>标题</p></Row>
            <input className="todo-input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="需要做什么？" style={{ width: "100%", height: 48, background: C.white,
              border: `2px solid ${C.border}`, borderRadius: 14, padding: "0 16px", fontSize: 15,
              outline: "none", boxSizing: "border-box" }}/>
          </div>
          <div>
            <Row style={{ gap: 7, marginBottom: 8 }}><LineIcon name="message" color={C.primary} size={16}/><p style={{ fontSize: 13, fontWeight: 700, color: C.t1 }}>描述（选填）</p></Row>
            <textarea className="todo-input" value={description} onChange={e=>setDescription(e.target.value)} placeholder="添加详情..." rows={3} style={{ width: "100%", background: C.white,
              border: `2px solid ${C.border}`, borderRadius: 14, padding: "12px 16px", fontSize: 13,
              lineHeight: 1.7, resize: "none", outline: "none", boxSizing: "border-box" }}/>
          </div>
          {/* Date & Time */}
          {[["📅","截止日期","选择截止日期"],["⏰","时间","设置时间"]].map(([ic,l,ph]) => (
            <div key={l} style={{ display: "block" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 8 }}>{l}</p>
              <Row className="todo-date" style={{ height: 48, background: C.white, border: `2px solid ${C.border}`,
                borderRadius: 14, padding: "0 16px", justifyContent: "space-between", cursor: "pointer" }}>
                <Row style={{ gap: 10 }}>
                  <LineIcon name={l === "截止日期" ? "calendar" : "clock"} color={C.primary} size={18}/>
                  {l === "截止日期" ? <input aria-label="选择日期" type="date" value={date} onChange={e=>setDate(e.target.value)} style={{ flex: 1, height: 40, border: "none", outline: "none", background: "transparent", color: C.t1, fontSize: 14 }}/> : <input aria-label="设置时间" type="time" value={time} onChange={e=>setTime(e.target.value)} style={{ flex: 1, height: 40, border: "none", outline: "none", background: "transparent", color: C.t1, fontSize: 14 }}/>} 
                </Row>
                <Chevron/>
              </Row>
            </div>
          ))}
          <div><p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 8 }}>时间安排</p><Row style={{ gap: 6, padding: 3, borderRadius: 12, background: C.primaryL }}>{([["once","一次性"],["weekly","每周重复"],["interval","间隔重复"],["multi","一次多天"]] as const).map(([key,label])=><button key={key} onClick={()=>setScheduleMode(key)} style={{ flex:1, padding:"8px 3px", border:"none", borderRadius:9, background:scheduleMode===key?C.white:"transparent", color:scheduleMode===key?C.primary:C.t3, fontSize:11, fontWeight:700, cursor:"pointer", boxShadow:scheduleMode===key?C.cardSm:"none" }}>{label}</button>)}</Row></div>
          {scheduleMode === "repeat" && <Card style={{ padding:"12px 14px", boxShadow:"none", border:`1px solid ${C.primaryL}` }}><p style={{ fontSize:11, color:C.t3, marginBottom:8 }}>重复频率</p><Row style={{ gap:6, flexWrap:"wrap" }}>{["每天","每周","每月","工作日"].map(rule=><button key={rule} onClick={()=>setRepeatRule(rule)} style={{ padding:"7px 11px", borderRadius:9, border:`1px solid ${repeatRule===rule?C.primary:C.border}`, background:repeatRule===rule?C.primaryL:C.white, color:repeatRule===rule?C.primary:C.t2, fontSize:11, cursor:"pointer" }}>{rule}</button>)}</Row></Card>}
          {scheduleMode === "range" && <Row style={{ gap:8 }}><label style={{ flex:1, fontSize:11, color:C.t3 }}>开始日期<input type="date" value={date} onChange={e=>setDate(e.target.value)} style={{ display:"block", marginTop:6, width:"100%", height:44, boxSizing:"border-box", background:C.white, border:`2px solid ${C.border}`, borderRadius:12, padding:"0 8px" }}/></label><label style={{ flex:1, fontSize:11, color:C.t3 }}>结束日期<input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)} style={{ display:"block", marginTop:6, width:"100%", height:44, boxSizing:"border-box", background:C.white, border:`2px solid ${C.border}`, borderRadius:12, padding:"0 8px" }}/></label></Row>}
          {scheduleMode === "weekly" && <Card style={{padding:"13px 14px",boxShadow:"none",border:`1px solid ${C.primaryL}`}}><p style={{fontSize:11,color:C.t3,marginBottom:9}}>每周重复 · 可多选</p><Row style={{gap:5}}>{["一","二","三","四","五","六","日"].map(day=><button key={day} onClick={()=>setWeekdays(v=>v.includes(day)?v.filter(x=>x!==day):[...v,day])} style={{width:31,height:31,border:"none",borderRadius:10,background:weekdays.includes(day)?C.primary:C.bg,color:weekdays.includes(day)?"#fff":C.t2,fontSize:11,fontWeight:700,cursor:"pointer"}}>{day}</button>)}</Row><p style={{marginTop:8,fontSize:10,color:C.t4}}>已选：{weekdays.length ? weekdays.join("、") : "请选择日期"}</p></Card>}
          {scheduleMode === "interval" && <Card style={{padding:"13px 14px",boxShadow:"none",border:`1px solid ${C.primaryL}`}}><p style={{fontSize:11,color:C.t3,marginBottom:9}}>间隔重复</p><Row style={{gap:8}}><label style={{flex:1,fontSize:10,color:C.t3}}>每<input type="number" min={1} max={365} value={intervalDays} onChange={e=>setIntervalDays(Math.max(1,Number(e.target.value)||1))} style={{display:"inline-block",width:54,height:34,margin:"0 5px",border:`1px solid ${C.border}`,borderRadius:9,textAlign:"center",color:C.primary,fontWeight:800}}/>天触发</label><span style={{fontSize:10,color:C.t4}}>从上方初始日期开始</span></Row></Card>}
          {scheduleMode === "multi" && <Card style={{padding:"13px 14px",boxShadow:"none",border:`1px solid ${C.primaryL}`}}><p style={{fontSize:11,color:C.t3,marginBottom:9}}>一次多天 · 逐日添加</p><Row style={{gap:7}}><input type="date" value={multiDateDraft} onChange={e=>setMultiDateDraft(e.target.value)} style={{flex:1,height:38,border:`1px solid ${C.border}`,borderRadius:10,padding:"0 8px",fontSize:11}}/><button onClick={()=>{if(!multiDates.includes(multiDateDraft))setMultiDates(v=>[...v,multiDateDraft])}} style={{height:38,padding:"0 12px",border:"none",borderRadius:10,background:C.primaryL,color:C.primary,fontSize:11,fontWeight:700,cursor:"pointer"}}>添加日期</button></Row><Row style={{gap:6,flexWrap:"wrap",marginTop:10}}>{multiDates.map(d=><span key={d} style={{padding:"5px 8px",borderRadius:8,background:C.primaryL,color:C.primary,fontSize:10}}>{d.slice(5)} <button onClick={()=>setMultiDates(v=>v.filter(x=>x!==d))} style={{border:"none",background:"transparent",color:C.primary,cursor:"pointer",padding:0}}>×</button></span>)}</Row></Card>}
          {/* Priority */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 8 }}>优先级</p>
            <Row style={{ gap: 8 }}>
              {[["高","#FC5872"],["中","#F7C242"],["低",C.primary]].map(([l,c]) => (
                <button className="todo-priority" key={l} onClick={() => setPriority(l)} style={{ flex: 1, height: 44, borderRadius: 13,
                  border: "none", background: priority===l ? `${c}16` : "rgba(255,255,255,.72)",
                  color: priority===l ? c : C.t2, fontSize: 13, fontWeight: priority===l ? 800 : 600, cursor: "pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
                  <LineIcon name={l === "高" ? "bell" : l === "中" ? "info" : "check"} color={priority===l ? c : C.t3} size={15}/> {l}
                </button>
              ))}
            </Row>
          </div>
          {/* Reminder channels */}
          <Card className="todo-reminder" style={{ padding: "13px 14px", boxShadow: "none" }}><Row style={{ justifyContent: "space-between", marginBottom: 5 }}><Row style={{ gap: 9 }}><span style={{ width: 30, height: 30, borderRadius: 10, background: C.primaryL, display: "grid", placeItems: "center" }}><LineIcon name="clock" color={C.primary} size={17}/></span><div><p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>提醒我</p><p style={{ marginTop: 2, fontSize: 10, color: C.t3 }}>总开关 · 开启后选择通知方式</p></div></Row><div onClick={() => setRemind(!remind)} style={{ cursor: "pointer" }}><Toggle on={remind}/></div></Row><p style={{ margin: "9px 0 2px 39px", fontSize: 10, color: C.t4 }}>通知方式</p>{[["sms","短信","AI 积分抵扣（约价值 0.10 元）","message"],["wechat","微信通知","服务号提醒","wechat"],["system","系统推送","设备通知栏","bell"]].map(([key,label,sub,icon],i)=><Row key={key} style={{ justifyContent: "space-between", marginLeft: 39, padding: "10px 0", borderTop: `1px solid ${C.divider}`, opacity: remind ? 1 : .45 }}><Row style={{ gap: 9 }}><span style={{ width: 28, height: 28, borderRadius: 9, background: i===0?C.warningL:C.primaryL, display: "grid", placeItems: "center" }}><LineIcon name={icon === "wechat" ? "message" : icon as any} color={i===0?C.warning:C.primary} size={15}/></span><div><p style={{ fontSize: 12, fontWeight: 650, color: C.t1 }}>{label}</p><p style={{ marginTop: 2, fontSize: 10, color: C.t3 }}>{sub}</p></div></Row><div onClick={() => remind && setReminderChannels(v => ({...v, [key]: !v[key as keyof typeof v]}))} style={{ cursor: remind ? "pointer" : "default" }}><Toggle on={reminderChannels[key as keyof typeof reminderChannels]}/></div></Row>)}</Card>
          <button onClick={save} disabled={!title.trim()} style={{ width: "100%", padding: "14px 0", borderRadius: 14, background: title.trim()?C.primaryG:C.border,
            border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 6px 20px rgba(124,77,255,0.3)` }}>保存待办</button>
          <div style={{ height: 8 }}/>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P24: 系统设置 (Settings Home) ────────────────────────────────────────
function P24({ nav }: { nav: (s: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="设置" onBack={() => nav("p05")}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { title:"个人设置", items:[
              { icon:"🔐",bg:"rgba(124,77,255,0.1)",l:"安全中心",s:"p27"},
            ]},
            { title:"通用设置", items:[
              { icon:"🌐",bg:"rgba(0,170,144,0.1)",l:"语言",v:"简体中文"},
              { icon:"📱",bg:"rgba(174,154,240,0.1)",l:"布局配置",s:"p05"},
              { icon:"💰",bg:"rgba(124,77,255,0.1)",l:"月度预算",s:"p35"},
            ]},
            { title:"应用与支持", items:[
              { icon:"🎨",bg:"rgba(124,77,255,0.1)",l:"主题设置",s:"p25"},
              { icon:"🔑",bg:"rgba(252,88,114,0.1)",l:"授权管理",s:"p27"},
              { icon:"💬",bg:"rgba(0,170,144,0.1)",l:"帮助与反馈",s:"p33"},
              { icon:"ℹ️",bg:"rgba(153,153,153,0.1)",l:"关于我们",s:"p34"},
            ]},
            { title:"推送通知", items:[
              { icon:"🔔",bg:"rgba(252,88,114,0.1)",l:"系统通知",toggle:true},
              { icon:"💰",bg:"rgba(247,194,66,0.1)",l:"账单提醒",toggle:true},
              { icon:"💳",bg:"rgba(124,77,255,0.1)",l:"还款提醒",toggle:true},
            ]},
            { title:"关于", items:[
              { icon:"ℹ️",bg:"rgba(153,153,153,0.1)",l:"版本号",v:"v2.0.0"},
              { icon:"↻",bg:"rgba(124,77,255,0.1)",l:"版本更新",v:"已是最新"},
              { icon:"⌫",bg:"rgba(174,154,240,0.1)",l:"清除缓存",v:"0 MB"},
              { icon:"📜",bg:"rgba(0,170,144,0.1)",l:"用户协议",s:"p37"},
              { icon:"🔒",bg:"rgba(124,77,255,0.1)",l:"隐私政策",s:"p37"},
            ]},
          ].map(group => (
            <div key={group.title}>
              <p style={{ fontSize: 12, fontWeight: 600, color: C.t3, marginBottom: 8,
                letterSpacing: "0.05em" }}>{group.title}</p>
              <Card style={{ overflow: "hidden" }}>
                {group.items.map((item, i) => (
                  <div key={item.l} onClick={() => (item as any).s && nav((item as any).s)}
                    style={{ cursor: (item as any).s ? "pointer" : "default" }}>
                    <SettingRow icon={item.icon} bg={item.bg} label={item.l}
                      value={(item as any).v} toggle={(item as any).toggle}/>
                  </div>
                ))}
              </Card>
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button onClick={() => nav("p28")} style={{ width: "100%", padding: "12px 0", border: "none", background: "transparent", color: C.primary, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>退出登录</button>
          </div>
          <div style={{ height: 8 }}/>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P25: 主题设置 (Theme Settings) ──────────────────────────────────────
function P25({ nav }: { nav: (s: string) => void }) {
  const [theme, setTheme] = useState(0);
  const [dark, setDark] = useState(false);
  const themes = [
    { name:"深紫简约",bg:"linear-gradient(135deg,#7C4DFF 0%,#9575CD 100%)"},
    { name:"夕阳橙",bg:"linear-gradient(135deg,#FF6B9D 0%,#FFA06B 100%)"},
    { name:"森林绿",bg:"linear-gradient(135deg,#39B54A 0%,#4DD865 100%)"},
    { name:"薰衣草",bg:"linear-gradient(135deg,#AE9AF0 0%,#8B6FE0 100%)"},
    { name:"玫瑰金",bg:"linear-gradient(135deg,#F7C242 0%,#FF8A9D 100%)"},
    { name:"海洋蓝",bg:"linear-gradient(135deg,#00AA90 0%,#00D4C4 100%)"},
    { name:"暗夜模式",bg:"linear-gradient(135deg,#2C3E50 0%,#34495E 100%)"},
    { name:"樱花粉",bg:"linear-gradient(135deg,#FFB6C1 0%,#FFD4E5 100%)"},
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="主题设置" onBack={() => nav("p24")}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Preview */}
          <div style={{ borderRadius: 20, background: themes[theme].bg, padding: "28px 22px",
            position: "relative", overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}>
            <div style={{ position: "absolute", top:-30,right:-30, width:120,height:120,borderRadius:"50%",background:"rgba(255,255,255,0.1)" }}/>
            <p style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 6, textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
              {themes[theme].name}
            </p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>当前主题预览</p>
            <div style={{ position: "absolute", top: 16, right: 16, padding: "5px 12px",
              background: "rgba(255,255,255,0.25)", backdropFilter: "blur(10px)", borderRadius: 999 }}>
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>✓ 已应用</span>
            </div>
          </div>
          {/* Grid */}
          <p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>选择主题</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {themes.map((t, i) => (
              <div key={i} onClick={() => setTheme(i)} style={{ borderRadius: 16, height: 90,
                background: t.bg, position: "relative", cursor: "pointer",
                boxShadow: theme===i ? "0 6px 20px rgba(0,0,0,0.2)" : C.cardSm,
                transform: theme===i ? "scale(1.02)" : "scale(1)", transition: "all 0.15s" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 14px 10px",
                  background: "linear-gradient(180deg,transparent 0%,rgba(0,0,0,0.3) 100%)", borderRadius: "0 0 16px 16px" }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 600, textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>{t.name}</span>
                </div>
                {theme===i && <div style={{ position: "absolute", top: 8, right: 8, width: 28, height: 28,
                  borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: C.primary, fontSize: 14 }}>✓</span>
                </div>}
              </div>
            ))}
          </div>
          {/* Dark mode */}
          <Row style={{ height: 52, background: C.white, border: `2px solid ${C.border}`,
            borderRadius: 14, padding: "0 16px", justifyContent: "space-between",
            boxShadow: C.cardSm }}>
            <Row style={{ gap: 10 }}>
              <span style={{ fontSize: 20 }}>🌙</span>
              <span style={{ fontSize: 14, fontWeight: 500, color: C.t1 }}>深色模式</span>
            </Row>
            <div onClick={() => setDark(!dark)} style={{ cursor: "pointer" }}><Toggle on={dark}/></div>
          </Row>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P26: 个人信息 (Personal Info) ────────────────────────────────────────
function P26({ nav }: { nav: (s: string) => void }) {
  const [gender, setGender] = useState("女");
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="个人信息" onBack={() => nav("p24")}
        right={<button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 15, color: C.primary, fontWeight: 700 }}>保存</button>}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Avatar */}
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: C.primaryL, margin: "0 auto",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, position: "relative",
              boxShadow: `0 4px 20px rgba(124,77,255,0.2)` }}>
              🌸
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 26, height: 26, borderRadius: "50%",
                background: C.primary, display: "flex", alignItems: "center", justifyContent: "center",
                border: "3px solid #fff", fontSize: 12 }}>📷</div>
            </div>
            <p style={{ fontSize: 13, color: C.primary, fontWeight: 600, marginTop: 10 }}>更换头像</p>
          </div>
          {/* Fields */}
          {[["昵称","iPink","输入昵称"],["生日","1996年8月","选择生日"]].map(([l,v,ph]) => (
            <div key={l}>
              <p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 8 }}>{l}</p>
              <input defaultValue={v} placeholder={ph} style={{ width: "100%", height: 48, background: C.white,
                border: `2px solid ${C.border}`, borderRadius: 14, padding: "0 16px", fontSize: 15,
                outline: "none", color: C.t1, boxSizing: "border-box" }}/>
            </div>
          ))}
          {/* Gender */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 8 }}>性别</p>
            <Row style={{ gap: 10 }}>
              {["男","女","保密"].map(g => (
                <button key={g} onClick={() => setGender(g)} style={{ flex: 1, height: 48, borderRadius: 12,
                  border: `2px solid ${gender===g ? C.primary : C.border}`,
                  background: gender===g ? C.primaryL : C.white,
                  color: gender===g ? C.primary : C.t2, fontSize: 14, fontWeight: gender===g ? 700 : 400, cursor: "pointer" }}>
                  {g==="男" ? "♂ 男" : g==="女" ? "♀ 女" : "— 保密"}
                </button>
              ))}
            </Row>
          </div>
          {/* Bio */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.t1, marginBottom: 8 }}>个人简介</p>
            <textarea placeholder="介绍一下你自己（选填）" rows={3} defaultValue="热爱生活，喜欢记账理财 💎"
              style={{ width: "100%", background: C.white, border: `2px solid ${C.border}`, borderRadius: 14,
                padding: "12px 16px", fontSize: 13, lineHeight: 1.7, resize: "none", outline: "none", boxSizing: "border-box" }}/>
            <p style={{ textAlign: "right", fontSize: 11, color: C.t3, marginTop: 4 }}>16/100</p>
          </div>
          <button style={{ width: "100%", padding: "14px 0", borderRadius: 14, background: C.primaryG,
            border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 6px 20px rgba(124,77,255,0.3)` }}>保存修改</button>
          <div style={{ height: 8 }}/>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P27: 安全设置 (Security Settings) ───────────────────────────────────
function P27({ nav }: { nav: (s: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="安全中心" onBack={() => nav("p24")}/>
      <Scroll>
        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { icon:"🔐",bg:"rgba(124,77,255,0.1)",t:"更换密码",d:"更新你的登录密码",status:"",s:"p38"},
            { icon:"📱",bg:"rgba(57,181,74,0.1)",t:"更换手机号",d:"当前 138****8888",status:"",s:"p38"},
            { icon:"✉️",bg:"rgba(247,194,66,0.1)",t:"更换邮箱",d:"当前 ipink@ilive.live",status:"",s:"p38"},
            { icon:"👆",bg:"rgba(57,181,74,0.1)",t:"指纹 / 面容ID",d:"快速安全登录",status:"已开启",on:true},
            { icon:"🔐",bg:"rgba(252,88,114,0.1)",t:"两步验证",d:"额外安全保障",status:"",on:false},
            { icon:"⌫",bg:"rgba(153,153,153,0.1)",t:"注销账号",d:"永久删除账号与云端数据",status:"",s:"p36"},
          ].map((item, i) => (
            <Card key={i} onClick={() => (item as any).s && nav((item as any).s)} style={{ padding: "16px 18px", cursor: (item as any).s ? "pointer" : "default" }}>
              <Row style={{ justifyContent: "space-between" }}>
                <Row style={{ gap: 12 }}>
                  <IconBox emoji={item.icon} color={item.bg.includes("252,88,114") ? C.danger : item.bg.includes("57,181,74") ? C.success : item.bg.includes("247,194,66") ? C.warning : C.primary} size={44}/>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.t1, marginBottom: 4 }}>{item.t}</p>
                    <p style={{ fontSize: 12, color: C.t3 }}>{item.d}</p>
                  </div>
                </Row>
                <Row style={{ gap: 8 }}>
                  {item.status && <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 8,
                    background: item.status==="已开启" ? C.successL : C.bg,
                    color: item.status==="已开启" ? C.success : C.t3 }}>{item.status}</span>}
                  {item.on !== undefined ? <Toggle on={item.on}/> : <Chevron/>}
                </Row>
              </Row>
            </Card>
          ))}
          {/* Tips */}
          <div style={{ borderRadius: 14, background: "#FFF9E6", border: `1px solid ${C.warning}`, padding: "16px 16px" }}>
            <Row style={{ gap: 8, marginBottom: 10 }}><LineIcon name="shield" color={C.warning} size={18}/><p style={{ fontSize: 14, fontWeight: 700, color: C.t1 }}>安全提示</p></Row>
            {["使用强密码（数字+字母+符号）","开启两步验证增加安全性","不要将密码分享给任何人","定期更新密码保持安全"].map(t => (
              <p key={t} style={{ fontSize: 12, color: C.t2, lineHeight: 1.9 }}>· {t}</p>
            ))}
          </div>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P28: 登录 (Login) ────────────────────────────────────────────────────
function P28({ nav }: { nav: (s: string) => void }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState<"phone" | "password" | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const renderField = (label: string, value: string, setValue: (next: string) => void, name: "phone" | "password", type = "text") => {
    const active = focused === name || value.length > 0;
    return <div style={{ position: "relative", paddingTop: active ? 13 : 0, borderBottom: `1.5px solid ${focused === name ? "rgba(255,255,255,.96)" : "rgba(255,255,255,.52)"}`, transition: "all .2s" }}>
      <span style={{ position: "absolute", left: 0, top: active ? 0 : 15, color: active ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.75)", fontSize: active ? 11 : 16, transition: "all .2s", pointerEvents: "none" }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", minHeight: 54 }}>
        <input value={value} type={type} onChange={e => setValue(e.target.value)} onFocus={() => setFocused(name)} onBlur={() => setFocused(null)} aria-label={label} style={{ flex: 1, minWidth: 0, padding: active ? "7px 0 4px" : "15px 0 8px", background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 16, transition: "padding .2s" }}/>
        {name === "password" && <button type="button" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? "隐藏密码" : "显示密码"} style={{ border: "none", background: "transparent", color: "rgba(255,255,255,.72)", cursor: "pointer", padding: 4 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8"/>{showPassword && <path d="M4 4l16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>}</svg></button>}
      </div>
    </div>;
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "radial-gradient(circle at 18% 14%, rgba(211,194,255,.92), transparent 34%), radial-gradient(circle at 84% 32%, rgba(124,77,255,.86), transparent 42%), linear-gradient(145deg,#5C35CC 0%,#7C4DFF 48%,#B9A4F5 100%)" }}>
      <StatusBar dark/>
      <Scroll>
        <div style={{ minHeight: "100%", padding: "28px 28px 26px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Logo */}
          <div aria-label="ilive.live logo" style={{ width: 86, height: 86, borderRadius: 27, display: "grid", placeItems: "center", marginBottom: 20,
            background: "linear-gradient(145deg,#D8CCFF 0%,#8B63FF 48%,#4B2BB8 100%)", border: "1px solid rgba(255,255,255,.42)",
            boxShadow: "0 14px 30px rgba(45,20,126,.26)" }}>
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" aria-hidden="true">
              <path d="M20 14v28q0 6 6 6h19" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M39 39h11" stroke="rgba(255,255,255,.72)" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="45" cy="18" r="4" fill="#fff"/>
            </svg>
          </div>
          <p style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 6, letterSpacing: "-0.02em" }}>清新记账</p>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.78)", marginBottom: 48 }}>智能记账 · 财务自由</p>

          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 18 }}>
            {renderField("手机号或邮箱", phone, setPhone, "phone")}
            {renderField("密码", password, setPassword, "password", showPassword ? "text" : "password")}
            <div style={{ textAlign: "right" }}>
              <span onClick={() => nav("p30")} style={{ fontSize: 13, color: "rgba(255,255,255,.88)", cursor: "pointer", fontWeight: 600 }}>
                忘记密码？
              </span>
            </div>
            {/* Login btn */}
            <button onClick={() => agreed && nav("p02")} disabled={!agreed} style={{ width: "100%", height: 52, borderRadius: 16,
              background: agreed ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.28)", color: agreed ? "#fff" : "rgba(255,255,255,.5)",
              fontSize: 16, fontWeight: 700, cursor: agreed ? "pointer" : "not-allowed",
              boxShadow: agreed ? "0 10px 24px rgba(43,19,125,.16)" : "none", transition: "all .2s" }}>登录</button>

            <Row style={{ gap: 16, margin: "6px 0" }}>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.35)" }}/>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,.72)", flexShrink: 0 }}>其他方式登录</span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.35)" }}/>
            </Row>

            {/* Social */}
            <Row style={{ justifyContent: "center", gap: 30 }}>
              {(["wechat", "moments", "qq"] as const).map(name => <button key={name} aria-label={name === "wechat" ? "微信登录" : name === "moments" ? "微信朋友圈登录" : "QQ登录"} style={{ width: 54, height: 54, borderRadius: "50%", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.5)", display: "grid", placeItems: "center", cursor: "pointer" }}><SocialIcon name={name} size={27}/></button>)}
            </Row>
            <Row style={{ justifyContent: "center", gap: 24, display: "none" }}>
              {[["💚","#E8F8EB"],["🍎","#F0F0F0"],["💙","#E6F7FF"]].map(([ic,bg], i) => (
                <div key={i} style={{ width: 52, height: 52, borderRadius: "50%", background: bg,
                  border: `2px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24, cursor: "pointer" }}>{ic}</div>
              ))}
            </Row>

            <p style={{ textAlign: "center", fontSize: 14, color: "rgba(255,255,255,.78)" }}>
              还没有账户？
              <span onClick={() => nav("p29")} style={{ color: "#fff", fontWeight: 700, cursor: "pointer" }}> 立即注册</span>
            </p>
            <label style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,.78)", lineHeight: 1.7, cursor: "pointer" }}>
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ width: 16, height: 16, marginTop: 2, accentColor: "#fff", flexShrink: 0 }} />
              <span>我已阅读并同意 <button type="button" style={{ border: 0, padding: 0, background: "transparent", color: "#fff", font: "inherit", cursor: "pointer" }}>《用户协议》</button> 和 <button type="button" style={{ border: 0, padding: 0, background: "transparent", color: "#fff", font: "inherit", cursor: "pointer" }}>《隐私政策》</button></span>
            </label>
          </div>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P29: 注册 (Register) ─────────────────────────────────────────────────
function P29({ nav }: { nav: (s: string) => void }) {
  const [step, setStep] = useState(0);
  const steps = ["手机验证","密码设置","完善信息"];
  const reqs = [["至少8位字符",true],["包含大写字母",false],["包含小写字母",true],["包含数字",true]];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.bg }}>
      <TopNav title="创建账户" onBack={() => nav("p28")}/>
      <Scroll>
        <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Progress steps */}
          <div style={{ position: "relative", padding: "0 20px" }}>
            <div style={{ position: "absolute", top: 14, left: 44, right: 44, height: 2, background: C.border, zIndex: 1 }}>
              <div style={{ width: `${(step / 2) * 100}%`, height: "100%", background: C.primary, transition: "width 0.3s" }}/>
            </div>
            <Row style={{ justifyContent: "space-between", position: "relative", zIndex: 2 }}>
              {steps.map((s, i) => (
                <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 13, fontWeight: 700,
                    background: i < step ? C.success : i===step ? C.primary : C.border, color: "#fff" }}>
                    {i < step ? "✓" : i+1}
                  </div>
                  <span style={{ fontSize: 11, color: i===step ? C.primary : C.t3 }}>{s}</span>
                </div>
              ))}
            </Row>
          </div>

          {/* Step content */}
          {step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ height: 52, background: C.white, border: `1px solid ${C.border}`, borderRadius: 14,
                display: "flex", alignItems: "center", overflow: "hidden" }}>
                <div style={{ padding: "0 16px", borderRight: `1px solid ${C.border}`, fontSize: 14, color: C.t1 }}>+86</div>
                <input placeholder="手机号码" style={{ flex: 1, height: "100%", border: "none", outline: "none", padding: "0 16px", fontSize: 14 }}/>
              </div>
              <Row style={{ gap: 10 }}>
                <div style={{ flex: 1, height: 52, background: C.white, border: `1px solid ${C.border}`, borderRadius: 14,
                  display: "flex", alignItems: "center", padding: "0 16px" }}>
                  <input placeholder="验证码" style={{ flex: 1, border: "none", outline: "none", fontSize: 14 }}/>
                </div>
                <button style={{ height: 52, padding: "0 16px", borderRadius: 14, border: `1px solid ${C.primary}`,
                  background: C.primaryL, color: C.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>
                  发送验证码
                </button>
              </Row>
            </div>
          )}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["设置密码","确认密码"].map(ph => (
                <div key={ph} style={{ height: 52, background: C.white, border: `1px solid ${C.border}`, borderRadius: 14,
                  display: "flex", alignItems: "center", padding: "0 16px", gap: 10 }}>
                  <LineIcon name="lock" color={C.primary} size={18}/>
                  <input type="password" placeholder={ph} style={{ flex: 1, border: "none", outline: "none", fontSize: 14 }}/>
                  <LineIcon name="help" color={C.t3} size={17}/>
                </div>
              ))}
              <div style={{ background: C.bg, borderRadius: 12, padding: "12px 14px" }}>
                {reqs.map(([t,ok]) => (
                  <p key={t as string} style={{ fontSize: 12, color: (ok as boolean) ? C.success : C.t3,
                    lineHeight: 2, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: (ok as boolean) ? C.success : C.t4 }}>{(ok as boolean) ? "✓" : "○"}</span>{t}
                  </p>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input placeholder="昵称（选填）" style={{ height: 52, background: C.white, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: "0 16px", fontSize: 15, outline: "none" }}/>
              <Row style={{ gap: 10 }}>
                {["男","女","保密"].map(g => (
                  <button key={g} style={{ flex: 1, height: 48, borderRadius: 12,
                    border: `1px solid ${C.border}`, background: C.white, color: C.t2, fontSize: 14, cursor: "pointer" }}>{g}</button>
                ))}
              </Row>
            </div>
          )}

          <button onClick={() => step < 2 ? setStep(step+1) : nav("p02")}
            style={{ width: "100%", padding: "14px 0", borderRadius: 14, background: C.primaryG,
              border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
              boxShadow: `0 6px 20px rgba(124,77,255,0.3)` }}>
            {step < 2 ? "下一步" : "完成注册"}
          </button>

          {/* Agreement */}
          <Row style={{ gap: 10, alignItems: "flex-start" }}>
            <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${C.primary}`,
              background: C.primaryL, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, color: C.primary, flexShrink: 0, marginTop: 1 }}>✓</div>
            <p style={{ fontSize: 12, color: C.t3, lineHeight: 1.7, flex: 1 }}>
              我已阅读并同意 <span style={{ color: C.primary }}>《用户协议》</span> 和 <span style={{ color: C.primary }}>《隐私政策》</span>
            </p>
          </Row>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P30: 忘记密码 (Forgot Password) ─────────────────────────────────────
function P30({ nav }: { nav: (s: string) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: C.white }}>
      <TopNav title="重置密码" onBack={() => nav("p28")}/>
      <Scroll>
        <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Illustration */}
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ width: 100, height: 100, borderRadius: "50%", background: C.primaryL,
              margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>🔑</div>
            <p style={{ fontSize: 16, fontWeight: 700, color: C.t1, marginBottom: 8 }}>重置你的密码</p>
            <p style={{ fontSize: 13, color: C.t3, lineHeight: 1.7 }}>输入你的手机号，我们将发送<br/>验证码帮助你重置密码</p>
          </div>

          {/* Phone */}
          <div style={{ height: 52, background: C.white, border: `2px solid ${C.border}`, borderRadius: 14,
            display: "flex", alignItems: "center", overflow: "hidden" }}>
            <div style={{ padding: "0 16px", borderRight: `1px solid ${C.border}`, fontSize: 14, color: C.t1 }}>+86</div>
            <input placeholder="手机号码" style={{ flex: 1, height: "100%", border: "none", outline: "none", padding: "0 16px", fontSize: 14 }}/>
          </div>

          {/* Code */}
          <Row style={{ gap: 10 }}>
            <div style={{ flex: 1, height: 52, background: C.white, border: `2px solid ${C.border}`, borderRadius: 14,
              display: "flex", alignItems: "center", padding: "0 16px" }}>
              <input placeholder="短信验证码" style={{ flex: 1, border: "none", outline: "none", fontSize: 14 }}/>
            </div>
            <button style={{ height: 52, padding: "0 16px", borderRadius: 14, border: `2px solid ${C.primary}`,
              background: C.primaryL, color: C.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", flexShrink: 0 }}>
              发送验证码
            </button>
          </Row>

          {/* New password */}
          {["新密码","确认新密码"].map(ph => (
            <div key={ph} style={{ height: 52, background: C.white, border: `2px solid ${C.border}`, borderRadius: 14,
              display: "flex", alignItems: "center", padding: "0 16px", gap: 10 }}>
              <span>🔒</span>
              <input type="password" placeholder={ph} style={{ flex: 1, border: "none", outline: "none", fontSize: 14 }}/>
              <span style={{ color: C.t3, cursor: "pointer" }}>👁</span>
            </div>
          ))}

          <button style={{ width: "100%", padding: "14px 0", borderRadius: 14, background: C.primaryG,
            border: "none", color: "#fff", fontSize: 15, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 6px 20px rgba(124,77,255,0.3)` }}>重置密码</button>

          <p onClick={() => nav("p28")} style={{ textAlign: "center", fontSize: 14, color: C.primary,
            cursor: "pointer", fontWeight: 600 }}>← 返回登录</p>
        </div>
      </Scroll>
    </div>
  );
}

// ─── P32: 消息中心 (Message Center) ──────────────────────────────────────
function P32({ nav }: { nav: (s: string) => void }) {
  const [filter,setFilter]=useState<"全部"|"系统通知"|"待办通知">("全部");
  const [read,setRead]=useState<string[]>(["sync"]);
  const messages = [
    { id:"budget",type:"系统通知" as const,title:"月度预算提醒",body:"本月预算已使用 72%，建议查看大头支出并调整剩余额度。",time:"10:24",day:"今天",color:C.primary,icon:"bell" as const,target:"p35" },
    { id:"todo1",type:"待办通知" as const,title:"还信用卡",body:"该待办将在今天 18:00 到期，记得及时处理。",time:"09:30",day:"今天",color:C.warning,icon:"calendar" as const,target:"p22" },
    { id:"todo2",type:"待办通知" as const,title:"健身 30 分钟",body:"距离计划开始还有 30 分钟。",time:"08:00",day:"今天",color:C.success,icon:"clock" as const,target:"p22" },
    { id:"sync",type:"系统通知" as const,title:"账单同步完成",body:"已成功导入 12 条账单记录，可前往账单列表查看。",time:"昨天",day:"更早",color:C.success,icon:"receipt" as const,target:"p02" },
    { id:"member",type:"系统通知" as const,title:"会员权益更新",body:"会员中心新增 AI 智能解读权益。",time:"09-08",day:"更早",color:C.primary,icon:"crown" as const,target:"p31" },
  ];
  const shown=filter==="全部"?messages:messages.filter(m=>m.type===filter);
  const unread=messages.filter(m=>!read.includes(m.id)).length;
  const openMessage=(id:string,target:string)=>{setRead(v=>v.includes(id)?v:[...v,id]);nav(target);};
  return <div style={{ display:"flex",flexDirection:"column",height:"100%",background:"linear-gradient(180deg,rgba(124,77,255,.11),#F7F8FA 30%)" }}>
    <TopNav title="消息中心" onBack={()=>nav("p05")} right={<button onClick={()=>setRead(messages.map(m=>m.id))} style={{border:"none",background:"transparent",color:C.primary,fontSize:11,cursor:"pointer"}}>全部已读</button>}/>
    <div style={{padding:"12px 16px 10px",flexShrink:0}}><Row style={{justifyContent:"space-between",marginBottom:11}}><div><p style={{fontSize:18,fontWeight:850,color:C.t1}}>通知</p><p style={{marginTop:3,fontSize:11,color:C.t3}}>{unread?`${unread} 条未读消息`:"消息已全部读完"}</p></div><span style={{width:34,height:34,borderRadius:12,background:C.primaryL,display:"grid",placeItems:"center"}}><LineIcon name="bell" color={C.primary} size={18}/></span></Row><Row style={{padding:3,borderRadius:13,background:"rgba(124,77,255,.08)",gap:3}}>{(["全部","系统通知","待办通知"] as const).map(x=><button key={x} onClick={()=>setFilter(x)} style={{flex:1,height:34,border:"none",borderRadius:10,background:filter===x?C.white:"transparent",color:filter===x?C.primary:C.t3,fontSize:11,fontWeight:filter===x?750:500,cursor:"pointer",boxShadow:filter===x?"0 2px 8px rgba(48,32,84,.07)":"none"}}>{x}</button>)}</Row></div>
    <Scroll><div style={{padding:"2px 16px 22px"}}>{["今天","更早"].map(day=>{const group=shown.filter(m=>m.day===day);if(!group.length)return null;return <div key={day} style={{marginBottom:17}}><p style={{fontSize:11,fontWeight:700,color:C.t3,margin:"7px 2px 8px"}}>{day}</p><Card style={{overflow:"hidden",boxShadow:"0 4px 16px rgba(37,25,68,.05)"}}>{group.map((m,i)=>{const isUnread=!read.includes(m.id);return <button key={m.id} onClick={()=>openMessage(m.id,m.target)} style={{width:"100%",display:"flex",gap:12,padding:"14px 15px",border:"none",borderBottom:i===group.length-1?"none":`1px solid ${C.divider}`,background:isUnread?"rgba(124,77,255,.025)":C.white,textAlign:"left",cursor:"pointer"}}><span style={{width:40,height:40,borderRadius:13,background:`${m.color}16`,display:"grid",placeItems:"center",flexShrink:0}}><LineIcon name={m.icon} color={m.color} size={20}/></span><span style={{flex:1,minWidth:0}}><Row style={{justifyContent:"space-between",gap:8}}><span style={{fontSize:13,fontWeight:isUnread?800:650,color:C.t1}}>{m.title}</span><span style={{fontSize:10,color:C.t4,whiteSpace:"nowrap"}}>{m.time}</span></Row><p style={{marginTop:5,fontSize:11,color:C.t3,lineHeight:1.55}}>{m.body}</p><span style={{display:"inline-block",marginTop:7,padding:"3px 7px",borderRadius:7,background:`${m.color}12`,color:m.color,fontSize:9}}>{m.type}</span></span>{isUnread&&<span style={{width:7,height:7,borderRadius:9,background:C.primary,marginTop:5,flexShrink:0}}/>}</button>})}</Card></div>})}{!shown.length&&<div style={{padding:"70px 0",textAlign:"center"}}><LineIcon name="bell" color={C.t4} size={36}/><p style={{marginTop:12,fontSize:13,color:C.t3}}>暂无此类通知</p></div>}<p style={{textAlign:"center",fontSize:10,color:C.t4}}>仅展示最近 30 天消息</p></div></Scroll>
  </div>;
}

// ─── P31: 会员中心 (Membership Center) ───────────────────────────────────
function P31({ nav }: { nav: (s: string) => void }) {
  const [selected, setSelected] = useState("季卡");
  const plans = [
    { name:"月卡", price:"8.88", unit:"30 天", gift:"赠 100 AI 积分" },
    { name:"季卡", price:"18.88", unit:"90 天", gift:"赠 400 AI 积分", hot:true },
    { name:"年卡", price:"58.88", unit:"365 天", gift:"赠 1,500 AI 积分", best:true },
  ];
  const benefits = [["spark", "AI 智能解读", "每月 30 次"], ["chart", "高级统计", "无限使用"], ["wallet", "账单云同步", "多端同步"], ["receipt", "专属主题", "持续更新"]] as const;
  return <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "linear-gradient(180deg, rgba(124,77,255,.14) 0%, rgba(247,248,250,0) 46%, #F7F8FA 100%)" }}>
    <TopNav title="会员中心" onBack={() => nav("p05")}/>
    <Scroll><div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 14, paddingBottom: 30 }}>
      <div style={{ borderRadius: 22, padding: "24px 20px 20px", color: "#fff", background: "linear-gradient(135deg,#5C35CC 0%,#7C4DFF 48%,#B9A4F5 100%)", position: "relative", overflow: "hidden", boxShadow: "0 10px 26px rgba(92,53,204,.24)" }}>
        <div style={{ position: "absolute", width: 150, height: 150, borderRadius: "50%", right: -45, top: -55, background: "rgba(255,255,255,.12)" }}/>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,.72)" }}>当前会员状态</p><p style={{ marginTop: 5, fontSize: 28, fontWeight: 850 }}>普通用户</p><p style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,.76)" }}>新用户首月会员免费 · 开通后赠送 AI 积分</p>
        <button onClick={()=>nav("p43")} style={{ marginTop: 18, padding: "10px 16px", border: "none", borderRadius: 12, background: "#fff", color: C.primaryD, fontSize: 13, fontWeight: 800, cursor: "pointer" }}>查看 AI 计费 ›</button>
      </div>
      <div><Row style={{justifyContent:"space-between",margin:"2px 2px 9px"}}><span style={{fontSize:15,fontWeight:800,color:C.t1}}>选择套餐</span><span style={{fontSize:10,color:C.t3}}>到期自动恢复普通用户</span></Row><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>{plans.map(plan=>{const active=selected===plan.name;return <button key={plan.name} onClick={()=>setSelected(plan.name)} style={{position:"relative",minHeight:126,padding:"15px 8px 12px",borderRadius:16,border:active?`1.5px solid ${C.primary}`:`1px solid ${C.divider}`,background:active?"linear-gradient(180deg,rgba(124,77,255,.11),#fff)":C.white,boxShadow:active?"0 7px 18px rgba(92,53,204,.12)":"none",cursor:"pointer"}}>{plan.hot&&<span style={{position:"absolute",right:5,top:5,padding:"2px 5px",borderRadius:6,background:C.danger,color:"#fff",fontSize:8}}>热门</span>}{plan.best&&<span style={{position:"absolute",right:5,top:5,padding:"2px 5px",borderRadius:6,background:C.warning,color:"#7B5700",fontSize:8}}>最划算</span>}<p style={{fontSize:13,fontWeight:800,color:active?C.primary:C.t1}}>{plan.name}</p><p style={{marginTop:10,color:C.t1}}><span style={{fontSize:11}}>¥</span><span style={{fontSize:24,fontWeight:900}}>{plan.price}</span></p><p style={{marginTop:3,fontSize:9,color:C.t3}}>{plan.unit}</p><p style={{marginTop:9,fontSize:9,color:active?C.primary:C.t3}}>{plan.gift}</p></button>})}</div><button onClick={()=>nav("p46")} style={{marginTop:10,width:"100%",height:46,border:"none",borderRadius:14,background:C.primaryG,color:"#fff",fontSize:14,fontWeight:850,cursor:"pointer"}}>{selected === "月卡" ? "领取首月免费并继续" : `前往支付 · ${selected}`}</button></div>
      <Card style={{ padding: "16px", background: "rgba(255,255,255,.68)", border: "1px solid rgba(255,255,255,.8)", boxShadow: "none" }}><Row style={{ justifyContent: "space-between", marginBottom: 13 }}><span style={{ fontSize: 15, fontWeight: 800, color: C.t1 }}>会员权益</span><span style={{ fontSize: 11, color: C.primary }}>查看全部 ›</span></Row><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>{benefits.map(([icon, title, sub]) => <div key={title} style={{ display: "flex", alignItems: "center", gap: 9, padding: "10px 8px", borderRadius: 13, background: "rgba(124,77,255,.07)" }}><span style={{ width: 30, height: 30, borderRadius: 10, display: "grid", placeItems: "center", background: "rgba(124,77,255,.12)" }}><LineIcon name={icon} color={C.primary} size={16}/></span><div><p style={{ fontSize: 12, fontWeight: 700, color: C.t1 }}>{title}</p><p style={{ marginTop: 2, fontSize: 10, color: C.t3 }}>{sub}</p></div></div>)}</div></Card>
      <Card onClick={()=>nav("p43")} style={{ padding: "16px", background: "rgba(255,255,255,.68)", border: "1px solid rgba(255,255,255,.8)", boxShadow: "none", cursor:"pointer" }}><Row style={{gap:11}}><span style={{width:38,height:38,borderRadius:12,background:C.primaryL,display:"grid",placeItems:"center"}}><LineIcon name="spark" color={C.primary} size={19}/></span><div style={{flex:1}}><p style={{fontSize:14,fontWeight:800,color:C.t1}}>AI 积分与按量计费</p><p style={{marginTop:4,fontSize:10,color:C.t3}}>充值积分、包月方案或按 Token 使用</p></div><Chevron/></Row></Card>
      <p style={{ textAlign: "center", fontSize: 11, color: C.t4 }}>会员服务由 ilive.live 提供</p>
    </div></Scroll>
  </div>;
}

// ─── P43: AI 积分与计费 ──────────────────────────────────────────────────
function P43({ nav }: { nav: (s: string) => void }) {
  const [tab,setTab]=useState<"points"|"times">("points");
  const [selected,setSelected]=useState("500");
  const points=[{n:"100",p:"¥1.00"},{n:"500",p:"¥4.50",tag:"常用"},{n:"1,200",p:"¥9.90",tag:"多赠 200"}];
  const times=[{n:"月度 300 积分",p:"¥6.88"},{n:"月度 800 积分",p:"¥14.88",tag:"推荐"},{n:"月度 2,000 积分",p:"¥29.88",tag:"最划算"}];
  const packs=tab==="points"?points:times;
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:"linear-gradient(180deg,rgba(124,77,255,.13),#F7F8FA 42%)"}}><TopNav title="AI 积分与计费" onBack={()=>nav("p31")}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:14}}>
    <div style={{padding:"20px 18px",borderRadius:20,background:C.primaryG,color:"#fff"}}><p style={{fontSize:11,color:"rgba(255,255,255,.72)"}}>本月剩余 AI 积分</p><Row style={{alignItems:"baseline",gap:5,marginTop:5}}><span style={{fontSize:34,fontWeight:900}}>368</span><span style={{fontSize:12}}>积分</span></Row><Row style={{justifyContent:"space-between",marginTop:12,fontSize:10,color:"rgba(255,255,255,.72)"}}><span>本月已使用 132 积分</span><span>按 Token 实际扣减</span></Row></div>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between"}}><div><p style={{fontSize:14,fontWeight:800,color:C.t1}}>Token 按量计费</p><p style={{marginTop:4,fontSize:10,color:C.t3}}>按模型实际输入与输出 Token 扣除 AI 积分</p></div><span style={{padding:"4px 8px",borderRadius:9,background:C.successL,color:C.success,fontSize:9}}>用多少付多少</span></Row><div style={{marginTop:12,padding:"11px 12px",borderRadius:12,background:C.bg}}>{[["轻量对话","约 1–3 积分/次"],["账单深度分析","约 5–12 积分/次"],["图片生成","约 20–40 积分/次"]].map(([a,b],i)=><Row key={a} style={{justifyContent:"space-between",padding:i?"8px 0 0":"0",marginTop:i?8:0,borderTop:i?`1px solid ${C.divider}`:"none"}}><span style={{fontSize:11,color:C.t2}}>{a}</span><span style={{fontSize:11,color:C.t1,fontWeight:700}}>{b}</span></Row>)}</div></Card>
    <Row style={{padding:3,borderRadius:13,background:C.primaryL,gap:3}}>{([["points","充值积分"],["times","包月方案"]] as const).map(([k,l])=><button key={k} onClick={()=>{setTab(k);setSelected(k==="points"?"500":"月度 800 积分")}} style={{flex:1,height:36,border:"none",borderRadius:10,background:tab===k?C.white:"transparent",color:tab===k?C.primary:C.t3,fontSize:12,fontWeight:700,cursor:"pointer",boxShadow:tab===k?C.cardSm:"none"}}>{l}</button>)}</Row>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>{packs.map(pack=>{const active=selected===pack.n;return <button key={pack.n} onClick={()=>setSelected(pack.n)} style={{position:"relative",padding:"16px 6px 13px",borderRadius:15,border:active?`1.5px solid ${C.primary}`:`1px solid ${C.divider}`,background:active?C.primaryL:C.white,cursor:"pointer"}}>{pack.tag&&<span style={{position:"absolute",top:-7,left:"50%",transform:"translateX(-50%)",whiteSpace:"nowrap",padding:"2px 6px",borderRadius:8,background:C.primary,color:"#fff",fontSize:8}}>{pack.tag}</span>}<p style={{fontSize:17,fontWeight:850,color:active?C.primary:C.t1}}>{pack.n}</p><p style={{marginTop:6,fontSize:11,color:C.t3}}>{pack.p}</p></button>})}</div>
    <button onClick={()=>nav("p46")} style={{height:46,border:"none",borderRadius:14,background:C.primaryG,color:"#fff",fontSize:14,fontWeight:850,cursor:"pointer"}}>{`前往支付 · ${selected}${tab==="points"?"":" · 包月"}`}</button>
    <Card onClick={()=>nav("p45")} style={{padding:16,cursor:"pointer"}}><Row style={{justifyContent:"space-between"}}><div><p style={{fontSize:14,fontWeight:800,color:C.t1}}>积分明细</p><p style={{marginTop:4,fontSize:10,color:C.t3}}>查看积分新增与消耗记录</p></div><Chevron/></Row></Card>
    <Card style={{padding:16}}><Row style={{gap:10}}><LineIcon name="crown" color={C.warning} size={21}/><div><p style={{fontSize:13,fontWeight:750,color:C.t1}}>开通会员额外赠送 AI 积分</p><p style={{marginTop:4,fontSize:10,color:C.t3}}>月卡 100 · 季卡 400 · 年卡 1,500 积分</p></div></Row><button onClick={()=>nav("p31")} style={{marginTop:12,width:"100%",height:38,border:"none",borderRadius:11,background:C.warningL,color:"#9A6800",fontSize:11,fontWeight:750,cursor:"pointer"}}>查看会员套餐</button></Card>
    <p style={{textAlign:"center",fontSize:10,lineHeight:1.6,color:C.t4}}>积分仅用于 AI 服务消耗，不等同于成长经验或商城金币。具体消耗以实际模型与上下文长度为准。</p>
  </div></Scroll></div>;
}

// ─── P44: 我的订单 ───────────────────────────────────────────────────────
function P44({ nav }: { nav: (s: string) => void }) {
  const [filter, setFilter] = useState("全部");
  const orders = [
    { type:"会员", icon:"👑", title:"季卡会员", desc:"90 天会员 · 赠 400 AI 积分", amount:"¥18.88", status:"已完成", time:"2026-09-12 10:24", no:"IL202609120024" },
    { type:"AI 积分", icon:"💎", title:"AI 积分包 · 500", desc:"一次性充值，永久有效", amount:"¥4.50", status:"已完成", time:"2026-09-10 18:06", no:"IL202609100118" },
    { type:"AI 积分", icon:"✨", title:"月度 800 积分", desc:"每月自动到账 · 可取消续费", amount:"¥14.88", status:"待支付", time:"2026-09-08 09:30", no:"IL202609080007" },
  ];
  const shown = filter === "全部" ? orders : orders.filter(o => o.type === filter);
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:"linear-gradient(180deg,rgba(124,77,255,.12),#F7F8FA 40%)"}}><TopNav title="我的订单" onBack={()=>nav("p05")}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:12}}>
    <Row style={{gap:7}}>{["全部","会员","AI 积分"].map(x=><Chip key={x} label={x} active={filter===x} onClick={()=>setFilter(x)}/>)}</Row>
    {shown.map(o=><Card key={o.no} style={{padding:16}}><Row style={{gap:11}}><IconBox emoji={o.icon} color={o.type==="会员"?C.primary:C.warning} size={42}/><div style={{flex:1}}><Row style={{justifyContent:"space-between"}}><p style={{fontSize:14,fontWeight:800,color:C.t1}}>{o.title}</p><span style={{fontSize:15,fontWeight:850,color:C.t1}}>{o.amount}</span></Row><p style={{marginTop:4,fontSize:11,color:C.t3}}>{o.desc}</p><Row style={{justifyContent:"space-between",marginTop:10}}><span style={{fontSize:10,color:C.t4}}>{o.time} · {o.no}</span><span style={{fontSize:10,fontWeight:700,color:o.status==="已完成"?C.success:C.warning}}>{o.status}</span></Row></div></Row>{o.status==="待支付"&&<button onClick={()=>nav("p46")} style={{marginTop:12,width:"100%",height:34,border:"none",borderRadius:10,background:C.primaryL,color:C.primary,fontSize:11,fontWeight:700,cursor:"pointer"}}>去支付</button>}</Card>)}
    <p style={{textAlign:"center",fontSize:10,color:C.t4}}>订单由 ilive.live 安全保存，可在支付页面查看续费设置</p>
  </div></Scroll></div>;
}

// ─── P45: AI 积分明细 ────────────────────────────────────────────────────
function P45({ nav }: { nav: (s: string) => void }) {
  const [filter, setFilter] = useState("全部");
  const records = [
    { kind:"新增", title:"季卡会员赠送", sub:"会员权益到账", value:"+400", time:"今天 10:24", color:C.success },
    { kind:"消耗", title:"账单深度分析", sub:"Token 按量扣减", value:"-12", time:"今天 09:18", color:C.primary },
    { kind:"新增", title:"充值积分包", sub:"500 积分已到账", value:"+500", time:"9月10日 18:06", color:C.success },
    { kind:"消耗", title:"AI 图片生成", sub:"图像模型调用", value:"-30", time:"9月9日 14:20", color:C.primary },
  ];
  const shown = filter === "全部" ? records : records.filter(r=>r.kind===filter);
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:"linear-gradient(180deg,rgba(124,77,255,.12),#F7F8FA 42%)"}}><TopNav title="积分明细" onBack={()=>nav("p43")}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:14}}>
    <div style={{padding:"18px",borderRadius:20,background:C.primaryG,color:"#fff"}}><p style={{fontSize:11,color:"rgba(255,255,255,.7)"}}>当前积分余额</p><Row style={{alignItems:"baseline",gap:5,marginTop:4}}><span style={{fontSize:34,fontWeight:900}}>368</span><span style={{fontSize:12}}>积分</span></Row><p style={{marginTop:7,fontSize:10,color:"rgba(255,255,255,.72)"}}>新增与消耗都会在这里实时记录</p></div>
    <Row style={{gap:7}}>{["全部","新增","消耗"].map(x=><Chip key={x} label={x} active={filter===x} onClick={()=>setFilter(x)}/>)}</Row>
    <Card style={{padding:"2px 16px"}}>{shown.map((r,i)=><Row key={`${r.title}${i}`} style={{gap:11,padding:"14px 0",borderBottom:i===shown.length-1?"none":`1px solid ${C.divider}`}}><span style={{width:34,height:34,borderRadius:11,background:r.kind==="新增"?C.successL:C.primaryL,display:"grid",placeItems:"center"}}><LineIcon name={r.kind==="新增"?"plus":"spark"} color={r.color} size={17}/></span><div style={{flex:1}}><p style={{fontSize:13,fontWeight:750,color:C.t1}}>{r.title}</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>{r.sub} · {r.time}</p></div><span style={{fontSize:15,fontWeight:850,color:r.color}}>{r.value}</span></Row>)}</Card>
    <button onClick={()=>nav("p43")} style={{height:44,border:"none",borderRadius:13,background:C.primaryL,color:C.primary,fontSize:12,fontWeight:750,cursor:"pointer"}}>充值或开通包月方案</button>
  </div></Scroll></div>;
}

// ─── P46: 支付 ──────────────────────────────────────────────────────────
function P46({ nav }: { nav: (s: string) => void }) {
  const [method, setMethod] = useState("支付宝");
  const [auto, setAuto] = useState(false);
  const [paid, setPaid] = useState(false);
  const [product, setProduct] = useState<"trial"|"member"|"ai">("trial");
  const productMeta = {
    trial: { title:"会员首月体验", sub:"赠送 30 天会员 · AI 积分权益同步到账", price:"¥0.00", original:"原价 ¥8.88", action:"确认领取 ¥0.00" },
    member: { title:"会员季卡", sub:"90 天会员 · 赠送 400 AI 积分", price:"¥18.88", original:"", action:"确认支付 ¥18.88" },
    ai: { title:"AI 积分包 · 500", sub:"一次性充值，永久有效", price:"¥4.50", original:"", action:"确认支付 ¥4.50" },
  }[product];
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:C.bg}}><TopNav title="支付" onBack={()=>nav("p31")}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:14}}>
    <Row style={{gap:7}}>{[["trial","首月免费"],["member","会员套餐"],["ai","AI 积分"]].map(([k,l])=><Chip key={k} label={l} active={product===k} onClick={()=>{setProduct(k as "trial"|"member"|"ai");setPaid(false)}}/>)}</Row>
    <Card style={{padding:18}}><p style={{fontSize:11,color:C.t3}}>确认订单</p><Row style={{justifyContent:"space-between",marginTop:8}}><div><p style={{fontSize:18,fontWeight:850,color:C.t1}}>{productMeta.title}</p><p style={{marginTop:4,fontSize:11,color:C.t3}}>{productMeta.sub}</p></div><div style={{textAlign:"right"}}><span style={{fontSize:25,fontWeight:900,color:product==="trial"?C.success:C.primary}}>{productMeta.price}</span>{productMeta.original&&<p style={{marginTop:3,fontSize:10,color:C.t4,textDecoration:"line-through"}}>{productMeta.original}</p>}</div></Row>{product==="trial"&&<div style={{marginTop:14,padding:"10px 12px",borderRadius:11,background:C.successL,color:C.success,fontSize:11}}>新用户首月免费，体验期结束后可选择月卡、季卡或年卡</div>}</Card>
    <div><p style={{fontSize:12,fontWeight:750,color:C.t2,marginBottom:8}}>选择支付方式</p><Card style={{padding:"3px 16px"}}>{["支付宝","微信支付"].map(x=><button key={x} onClick={()=>setMethod(x)} style={{width:"100%",padding:"15px 0",border:"none",borderBottom:x==="支付宝"?`1px solid ${C.divider}`:"none",background:"transparent",display:"flex",alignItems:"center",gap:11,cursor:"pointer",textAlign:"left"}}><span style={{width:34,height:34,borderRadius:10,background:x==="支付宝"?"#E8F4FF":"#E9FAF0",display:"grid",placeItems:"center",color:x==="支付宝"?"#1677FF":C.success,fontWeight:900,fontSize:13}}>{x==="支付宝"?"支":"微"}</span><span style={{flex:1,fontSize:13,fontWeight:700,color:C.t1}}>{x}</span><span style={{width:18,height:18,borderRadius:99,border:`2px solid ${method===x?C.primary:C.border}`,display:"grid",placeItems:"center"}}>{method===x&&<span style={{width:9,height:9,borderRadius:99,background:C.primary}}/>}</span></button>)}</Card></div>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between"}}><div><p style={{fontSize:13,fontWeight:750,color:C.t1}}>自动续费</p><p style={{marginTop:4,fontSize:10,color:C.t3}}>到期前 3 天按原价续费，可随时关闭</p></div><button onClick={()=>setAuto(!auto)} aria-label="切换自动续费" style={{border:"none",background:"transparent",padding:0,cursor:"pointer"}}><Toggle on={auto}/></button></Row></Card>
    <button onClick={()=>setPaid(true)} style={{height:48,border:"none",borderRadius:14,background:paid?C.successG:C.primaryG,color:"#fff",fontSize:14,fontWeight:850,cursor:"pointer"}}>{paid?(product==="ai"?"支付成功 · 积分已到账":"支付成功 · 会员已生效"):productMeta.action}</button>
    {paid&&<button onClick={()=>nav("p44")} style={{height:40,border:`1px solid ${C.primaryL}`,borderRadius:12,background:"transparent",color:C.primary,fontSize:11,cursor:"pointer"}}>查看我的订单</button>}
    <p style={{textAlign:"center",fontSize:10,color:C.t4,lineHeight:1.6}}>仅支持支付宝与微信支付。支付成功后可在订单页管理自动续费。</p>
  </div></Scroll></div>;
}

// ─── P47: 数据中心 ──────────────────────────────────────────────────────
function P47({ nav }: { nav: (s: string) => void }) {
  const [sync, setSync] = useState(false);
  const [image, setImage] = useState(false);
  const [ads, setAds] = useState(false);
  const [backup, setBackup] = useState(true);
  const member = false;
  const [dataMsg, setDataMsg] = useState("");
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:"linear-gradient(180deg,rgba(57,181,74,.08),#F7F8FA 42%)"}}><TopNav title="数据中心" onBack={()=>nav("p05")}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:14}}>
    <div style={{padding:18,borderRadius:20,background:"linear-gradient(135deg,#3AAE63,#7C4DFF)",color:"#fff"}}><Row style={{gap:11}}><span style={{width:42,height:42,borderRadius:14,background:"rgba(255,255,255,.18)",display:"grid",placeItems:"center"}}><LineIcon name="globe" color="#fff" size={23}/></span><div><p style={{fontSize:16,fontWeight:850}}>数据中心</p><p style={{marginTop:4,fontSize:11,color:"rgba(255,255,255,.75)"}}>本地优先，云端可控</p></div></Row><p style={{marginTop:14,fontSize:11,lineHeight:1.65,color:"rgba(255,255,255,.82)"}}>默认数据存储在本地数据库。开启实时同步后，账单、待办与设置会加密备份到云端。</p></div>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between"}}><div><p style={{fontSize:14,fontWeight:800,color:C.t1}}>实时同步云端</p><p style={{marginTop:4,fontSize:10,color:C.t3}}>当前设备 · 最近同步 2 分钟前</p></div><button onClick={()=>setSync(!sync)} aria-label="切换实时同步" style={{border:"none",background:"transparent",padding:0,cursor:"pointer"}}><Toggle on={sync}/></button></Row><div style={{marginTop:13,height:7,borderRadius:7,background:C.divider,overflow:"hidden"}}><div style={{width:"38%",height:"100%",borderRadius:7,background:C.successG}}/></div><Row style={{justifyContent:"space-between",marginTop:6,fontSize:10,color:C.t3}}><span>本地 2.4 MB</span><span>云端 0.9 MB</span></Row><button onClick={()=>setSync(true)} style={{marginTop:12,width:"100%",height:36,border:"none",borderRadius:10,background:C.successL,color:C.success,fontSize:11,fontWeight:700,cursor:"pointer"}}>立即同步</button></Card>
    <div><Row style={{justifyContent:"space-between",marginBottom:8}}><p style={{fontSize:12,fontWeight:750,color:C.t2}}>会员专属权益</p>{!member&&<button onClick={()=>nav("p31")} style={{border:"none",background:"transparent",color:C.primary,fontSize:10,fontWeight:700,cursor:"pointer"}}>开通会员解锁 ›</button>}</Row><Card style={{padding:"2px 16px"}}>{[["账单添加图片","保存发票、收据和消费凭证",image], ["去除广告","记账与 AI 页面无广告干扰",ads], ["自动备份","每天凌晨自动保存一份快照",backup]].map(([title,sub,on],i)=><Row key={title as string} style={{gap:10,padding:"14px 0",borderBottom:i<2?`1px solid ${C.divider}`:"none",opacity:!member&&i<2?.58:1}}><span style={{width:32,height:32,borderRadius:10,background:C.primaryL,display:"grid",placeItems:"center"}}><LineIcon name={i===0?"receipt":i===1?"spark":"refresh"} color={C.primary} size={16}/></span><div style={{flex:1}}><p style={{fontSize:12,fontWeight:700,color:C.t1}}>{title as string}</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>{sub as string}{!member&&i<2?" · 会员专享":""}</p></div><button onClick={()=>{if(!member&&i<2){nav("p31");return;}i===0?setImage(!image):i===1?setAds(!ads):setBackup(!backup)}} style={{border:"none",background:"transparent",padding:0,cursor:"pointer"}}><Toggle on={on as boolean}/></button></Row>)}</Card></div>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between"}}><div><p style={{fontSize:13,fontWeight:750,color:C.t1}}>数据管理</p><p style={{marginTop:4,fontSize:10,color:C.t3}}>导出本地数据或从备份恢复</p></div><Chevron/></Row><Row style={{gap:8,marginTop:12}}><button onClick={()=>setDataMsg("已生成本地数据导出包（演示）")} style={{flex:1,height:36,border:`1px solid ${C.border}`,borderRadius:10,background:C.white,color:C.t2,fontSize:11,cursor:"pointer"}}>导出数据</button><button onClick={()=>setDataMsg("请选择备份文件（演示）")} style={{flex:1,height:36,border:`1px solid ${C.border}`,borderRadius:10,background:C.white,color:C.t2,fontSize:11,cursor:"pointer"}}>导入备份</button></Row>{dataMsg&&<p style={{marginTop:9,fontSize:10,color:C.success}}>{dataMsg}</p>}</Card>
    <p style={{textAlign:"center",fontSize:10,color:C.t4}}>云端数据采用加密传输与存储，你可以随时关闭同步并清除云端副本。</p>
  </div></Scroll></div>;
}

// ─── P33: 帮助与反馈 ─────────────────────────────────────────────────────
function P33({ nav }: { nav: (s: string) => void }) {
  const [kind, setKind] = useState("功能建议");
  const [content, setContent] = useState("");
  const [sent, setSent] = useState(false);
  const faqs = [["如何导入其他平台账单？","从首页侧边栏进入「账单导入」，选择平台并上传账单文件。"],["AI 会读取我的隐私数据吗？","AI 仅在你主动发起分析时使用已授权的账单信息。"],["月度预算如何计算？","预算按自然月统计，上月结余和大额支出会单独展示。"]];
  const [open, setOpen] = useState<number | null>(0);
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:C.bg }}><TopNav title="帮助与反馈" onBack={() => nav("p24")}/><Scroll><div style={{ padding:16, display:"flex", flexDirection:"column", gap:14 }}>
    <div style={{ padding:"18px", borderRadius:20, background:"linear-gradient(135deg,rgba(124,77,255,.14),rgba(255,255,255,.82))" }}><Row style={{ gap:12 }}><IconBox emoji="💬" color={C.primary} size={44}/><div><p style={{ fontSize:17, fontWeight:800, color:C.t1 }}>你好，需要什么帮助？</p><p style={{ marginTop:4, fontSize:12, color:C.t3 }}>先查看常见问题，也可以直接提交反馈</p></div></Row></div>
    <div><p style={{ fontSize:12, color:C.t3, fontWeight:700, marginBottom:8 }}>常见问题</p><Card style={{ overflow:"hidden", boxShadow:"0 3px 14px rgba(38,27,70,.05)" }}>{faqs.map(([q,a],i)=><button key={q} onClick={() => setOpen(open===i?null:i)} style={{ width:"100%", padding:"14px 16px", border:"none", borderBottom:i===faqs.length-1?"none":`1px solid ${C.divider}`, background:C.white, textAlign:"left", cursor:"pointer" }}><Row style={{ justifyContent:"space-between" }}><span style={{ fontSize:13, fontWeight:700, color:C.t1 }}>{q}</span><span style={{ color:C.primary, transform:open===i?"rotate(45deg)":"none", transition:"transform .2s" }}>＋</span></Row>{open===i&&<p style={{ marginTop:9, fontSize:12, lineHeight:1.65, color:C.t3 }}>{a}</p>}</button>)}</Card></div>
    <div><p style={{ fontSize:12, color:C.t3, fontWeight:700, marginBottom:8 }}>提交反馈</p><Card style={{ padding:16, boxShadow:"0 3px 14px rgba(38,27,70,.05)" }}><Row style={{ gap:7, overflowX:"auto", marginBottom:12 }}>{["功能建议","问题反馈","数据问题"].map(x=><Chip key={x} label={x} active={kind===x} onClick={()=>setKind(x)}/>)}</Row><textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="请描述遇到的问题或你的建议…" rows={5} style={{ width:"100%", resize:"none", boxSizing:"border-box", border:`1px solid ${C.border}`, borderRadius:13, padding:12, background:"#FBFAFF", outline:"none", fontSize:13, lineHeight:1.7 }}/><Row style={{ justifyContent:"space-between", marginTop:10 }}><button style={{ border:"none", background:C.primaryL, color:C.primary, borderRadius:10, padding:"8px 10px", fontSize:11, cursor:"pointer" }}>＋ 添加截图</button><span style={{ fontSize:10, color:C.t4 }}>{content.length}/500</span></Row></Card></div>
    <button onClick={()=>setSent(true)} disabled={!content.trim()} style={{ height:46, border:"none", borderRadius:14, background:content.trim()?C.primaryG:C.border, color:"#fff", fontWeight:800, cursor:content.trim()?"pointer":"default" }}>{sent?"已提交，感谢你的反馈":"提交反馈"}</button><p style={{ textAlign:"center", fontSize:11, color:C.t4 }}>客服邮箱 support@ilive.live</p>
  </div></Scroll></div>;
}

// ─── P34: 关于我们 ───────────────────────────────────────────────────────
function P34({ nav }: { nav: (s: string) => void }) {
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"linear-gradient(180deg,rgba(124,77,255,.15),#F7F8FA 48%)" }}><TopNav title="关于我们" onBack={() => nav("p24")}/><Scroll><div style={{ padding:"32px 18px", textAlign:"center" }}>
    <img src="/ilive-app-icon-1024.png" alt="ilive logo" style={{ width:82, height:82, borderRadius:24, boxShadow:"0 12px 26px rgba(92,53,204,.24)" }}/><h2 style={{ marginTop:14, fontSize:24, color:C.t1 }}>ilive</h2><p style={{ marginTop:4, fontSize:12, color:C.primary, letterSpacing:".12em" }}>记录生活，看见改变</p><p style={{ margin:"22px auto", maxWidth:300, fontSize:13, lineHeight:1.85, color:C.t2 }}>ilive 是围绕记账、日程与 AI 助手构建的个人生活记录工具。我们希望每一笔消费、每一个计划，都能成为理解生活的线索。</p>
    <Card style={{ overflow:"hidden", textAlign:"left", boxShadow:"0 3px 14px rgba(38,27,70,.05)" }}>{[["当前版本","v2.0.0"],["官方网站","ilive.live"],["联系邮箱","support@ilive.live"]].map(([a,b],i)=><Row key={a} style={{ padding:"14px 16px", borderBottom:i===2?"none":`1px solid ${C.divider}`, justifyContent:"space-between" }}><span style={{ fontSize:13, color:C.t2 }}>{a}</span><span style={{ fontSize:12, color:C.t3 }}>{b}</span></Row>)}</Card>
    <Row style={{ justifyContent:"center", gap:18, marginTop:22 }}><button onClick={()=>nav("p37")} style={{ border:"none", background:"transparent", color:C.primary, fontSize:12, cursor:"pointer" }}>用户协议</button><span style={{ color:C.t4 }}>·</span><button onClick={()=>nav("p37")} style={{ border:"none", background:"transparent", color:C.primary, fontSize:12, cursor:"pointer" }}>隐私政策</button></Row><p style={{ marginTop:28, fontSize:10, color:C.t4 }}>© 2026 ilive.live</p>
  </div></Scroll></div>;
}

// ─── P35: 月度预算 ───────────────────────────────────────────────────────
function P35({ nav }: { nav: (s: string) => void }) {
  const [budget, setBudget] = useState("8000");
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:C.bg }}><TopNav title="月度预算" onBack={()=>nav("p24")} right={<button style={{ border:"none", background:"transparent", color:C.primary, fontWeight:700, cursor:"pointer" }}>保存</button>}/><Scroll><div style={{ padding:16, display:"flex", flexDirection:"column", gap:14 }}>
    <div style={{ borderRadius:22, padding:"22px 20px", color:"#fff", background:C.primaryG, boxShadow:"0 10px 24px rgba(92,53,204,.22)" }}><p style={{ fontSize:12, opacity:.72 }}>本月预算</p><Row style={{ alignItems:"baseline", marginTop:8 }}><span style={{ fontSize:25, fontWeight:800 }}>¥</span><input value={budget} onChange={e=>setBudget(e.target.value.replace(/\D/g,""))} inputMode="numeric" aria-label="本月预算金额" style={{ width:"100%", border:"none", outline:"none", background:"transparent", color:"#fff", fontSize:40, fontWeight:850 }}/></Row><div style={{ height:7, borderRadius:10, background:"rgba(255,255,255,.18)", overflow:"hidden", marginTop:16 }}><div style={{ height:"100%", width:"57%", background:"#fff", borderRadius:10 }}/></div><Row style={{ justifyContent:"space-between", marginTop:7, fontSize:10, color:"rgba(255,255,255,.72)" }}><span>已用 ¥4,561.50</span><span>剩余 ¥3,438.50</span></Row></div>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8 }}>{[["上月结余","¥2,180",C.success],["上月消费","¥5,820",C.danger],["上月日均","¥187.7",C.primary]].map(([l,v,c])=><Card key={l as string} style={{ padding:"13px 8px", textAlign:"center", boxShadow:"0 3px 12px rgba(38,27,70,.05)" }}><p style={{ fontSize:10, color:C.t3 }}>{l}</p><p style={{ marginTop:7, fontSize:14, fontWeight:800, color:c as string }}>{v}</p></Card>)}</div>
    <Card style={{ padding:16, boxShadow:"0 3px 14px rgba(38,27,70,.05)" }}><Row style={{ justifyContent:"space-between" }}><div><p style={{ fontSize:15, fontWeight:800, color:C.t1 }}>大头分析</p><p style={{ marginTop:3, fontSize:10, color:C.t3 }}>参考上月占比设置更合理</p></div><span style={{ fontSize:11, color:C.primary }}>上月数据</span></Row>{[["餐饮","¥2,126","37%",C.danger],["居住","¥1,680","29%",C.primary],["交通","¥756","13%",C.warning]].map(([l,v,p,c])=><div key={l as string} style={{ marginTop:14 }}><Row style={{ justifyContent:"space-between", fontSize:12 }}><span style={{ color:C.t2 }}>{l}</span><span style={{ color:C.t1, fontWeight:700 }}>{v} · {p}</span></Row><div style={{ height:6, borderRadius:8, background:C.divider, marginTop:7, overflow:"hidden" }}><div style={{ width:p as string, height:"100%", background:c as string, borderRadius:8 }}/></div></div>)}</Card>
    <div style={{ padding:"13px 15px", borderRadius:14, background:"#FFF9E8", color:"#8C6A12", fontSize:11, lineHeight:1.6 }}>预算仅按月管理，不设置日预算。我们会根据月度进度给出柔性提醒。</div>
  </div></Scroll></div>;
}

// ─── P36: 注销账号 ───────────────────────────────────────────────────────
function P36({ nav }: { nav: (s: string) => void }) {
  const [checked, setChecked] = useState(false);
  const [confirm, setConfirm] = useState("");
  const ready = checked && confirm === "注销账号";
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:C.bg }}><TopNav title="注销账号" onBack={()=>nav("p27")}/><Scroll><div style={{ padding:16, display:"flex", flexDirection:"column", gap:14 }}><div style={{ padding:18, borderRadius:18, background:"rgba(252,88,114,.08)", border:"1px solid rgba(252,88,114,.18)" }}><p style={{ fontSize:16, fontWeight:800, color:C.danger }}>注销后无法恢复</p><p style={{ marginTop:8, fontSize:12, lineHeight:1.75, color:C.t2 }}>账号资料、云端账单、待办、AI 历史与会员权益将被永久删除。请先导出需要保留的数据。</p></div><Card style={{ padding:16, boxShadow:"0 3px 14px rgba(38,27,70,.05)" }}><p style={{ fontSize:13, fontWeight:800, color:C.t1, marginBottom:12 }}>注销前请确认</p>{["已完成账单数据导出","已取消自动续费服务","已理解注销不可撤销"].map(t=><Row key={t} style={{ gap:9, padding:"8px 0" }}><span style={{ width:18,height:18,borderRadius:6,background:C.primaryL,color:C.primary,display:"grid",placeItems:"center",fontSize:11 }}>✓</span><span style={{ fontSize:12,color:C.t2 }}>{t}</span></Row>)}</Card><label style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:12, color:C.t2, lineHeight:1.6 }}><input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.checked)} style={{ marginTop:3, accentColor:C.primary }}/>我已阅读并理解注销账号的后果</label><div><p style={{ fontSize:12,fontWeight:700,color:C.t2,marginBottom:7 }}>输入“注销账号”进行确认</p><input value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="注销账号" style={{ width:"100%",boxSizing:"border-box",height:46,border:`1px solid ${C.border}`,borderRadius:13,padding:"0 14px",outline:"none",fontSize:13 }}/></div><button disabled={!ready} style={{ height:46,border:"none",borderRadius:14,background:ready?C.t1:C.border,color:"#fff",fontWeight:800,cursor:ready?"pointer":"default" }}>确认注销</button></div></Scroll></div>;
}

// ─── P39: 我的笔记 ───────────────────────────────────────────────────────
function P39({ nav }: { nav: (s: string) => void }) {
  const notes = [
    { title: "本月复盘", body: "把固定支出和临时支出分开记录，月底再统一回顾。", date: "今天 09:20" },
    { title: "旅行预算", body: "下周出行预算控制在 ¥1,200 以内。", date: "09-06" },
  ];
  const [draft, setDraft] = useState("");
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:C.bg }}><TopNav title="我的笔记" onBack={()=>nav("p05")} right={<button onClick={()=>setDraft("")} style={{border:"none",background:"transparent",color:C.primary,fontSize:12,cursor:"pointer"}}>新建</button>}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:12}}>
    <Card style={{padding:14,background:"linear-gradient(135deg,rgba(124,77,255,.12),rgba(255,255,255,.9))"}}><p style={{fontSize:13,fontWeight:800,color:C.t1}}>随手记下灵感</p><textarea value={draft} onChange={e=>setDraft(e.target.value)} placeholder="写下今天的想法或提醒…" style={{marginTop:10,width:"100%",minHeight:68,resize:"none",border:"none",outline:"none",background:"transparent",fontSize:12,color:C.t1}}/><Row style={{justifyContent:"flex-end"}}><button disabled={!draft.trim()} onClick={()=>setDraft("")} style={{border:"none",borderRadius:9,padding:"7px 13px",background:draft.trim()?C.primary:C.border,color:"#fff",fontSize:11,cursor:draft.trim()?"pointer":"default"}}>保存笔记</button></Row></Card>
    {notes.map(note=><Card key={note.title} style={{padding:"14px 16px"}}><Row style={{justifyContent:"space-between",alignItems:"flex-start"}}><div><p style={{fontSize:14,fontWeight:750,color:C.t1}}>{note.title}</p><p style={{marginTop:7,fontSize:12,lineHeight:1.6,color:C.t2}}>{note.body}</p></div><LineIcon name="brush" color={C.primary} size={18}/></Row><p style={{marginTop:10,fontSize:10,color:C.t4}}>{note.date}</p></Card>)}
  </div></Scroll></div>;
}

// ─── P40: 签到中心与成长等级 ─────────────────────────────────────────────
function P40({ nav }: { nav: (s: string) => void }) {
  const levels = [
    ["Lv.1", "初来乍到", 0], ["Lv.2", "生活记录员", 100], ["Lv.3", "认真生活家", 300],
    ["Lv.4", "习惯养成者", 600], ["Lv.5", "账本达人", 1000], ["Lv.6", "生活观察家", 1500],
    ["Lv.7", "自律规划师", 2200], ["Lv.8", "财务掌舵人", 3000], ["Lv.9", "生活智囊", 4000], ["Lv.10", "人生记录大师", 5200],
  ] as const;
  const [exp, setExp] = useState(680);
  const [coins, setCoins] = useState(60);
  const [checked, setChecked] = useState(false);
  const [signedDays, setSignedDays] = useState<number[]>([1, 2, 3, 5, 6, 8, 10]);
  const levelIndex = Math.max(0, levels.findIndex(([, , min], i) => exp < (levels[i + 1]?.[2] ?? Infinity)));
  const current = levels[levelIndex];
  const next = levels[levelIndex + 1];
  const progress = next ? Math.min(100, Math.round(((exp - current[2]) / (next[2] - current[2])) * 100)) : 100;
  const checkIn = () => { if (!checked) { setChecked(true); setSignedDays(v => v.includes(12) ? v : [...v, 12]); setExp(v => v + 50); setCoins(v => v + 10); } };
  const publish = () => setExp(v => v + 30);
  return <div style={{ display:"flex", flexDirection:"column", height:"100%", background:"linear-gradient(180deg,rgba(124,77,255,.16),#F7F8FA 48%)" }}><TopNav title="签到中心" onBack={()=>nav("p05")} right={<button onClick={()=>nav("p41")} style={{border:"none",background:"transparent",color:C.primary,fontSize:11,fontWeight:700,cursor:"pointer"}}>金币商城</button>}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:13,paddingBottom:28}}>
    <div style={{padding:"20px 18px",borderRadius:22,background:C.primaryG,color:"#fff",boxShadow:"0 10px 24px rgba(92,53,204,.2)"}}><Row style={{justifyContent:"space-between",alignItems:"flex-start"}}><div><p style={{fontSize:11,color:"rgba(255,255,255,.72)"}}>当前等级</p><p style={{marginTop:5,fontSize:26,fontWeight:850}}>{current[0]} · {current[1]}</p></div><span style={{fontSize:25}}>✦</span></Row><Row style={{justifyContent:"space-between",marginTop:17,fontSize:11,color:"rgba(255,255,255,.78)"}}><span>经验值 {exp} XP</span><span>{next ? `距离 ${next[0]} 还差 ${next[2]-exp} XP` : "已达最高等级"}</span></Row><div style={{height:7,marginTop:8,borderRadius:99,background:"rgba(255,255,255,.2)",overflow:"hidden"}}><div style={{height:"100%",width:`${progress}%`,borderRadius:99,background:"#fff"}}/></div></div>
    <Row style={{gap:10}}><Card style={{flex:1,padding:"14px 12px",textAlign:"center",boxShadow:"none",background:"rgba(255,255,255,.72)"}}><p style={{fontSize:22,fontWeight:850,color:C.warning}}>{coins}</p><p style={{marginTop:4,fontSize:11,color:C.t3}}>金币</p></Card><Card style={{flex:1,padding:"14px 12px",textAlign:"center",boxShadow:"none",background:"rgba(255,255,255,.72)"}}><p style={{fontSize:22,fontWeight:850,color:C.success}}>+50</p><p style={{marginTop:4,fontSize:11,color:C.t3}}>签到经验</p></Card><button onClick={()=>nav("p41")} style={{flex:1,minHeight:65,border:"none",borderRadius:16,background:"rgba(255,255,255,.72)",color:C.primary,fontSize:12,fontWeight:750,cursor:"pointer"}}>金币商城<br/><span style={{fontSize:10,fontWeight:500,color:C.t3}}>兑换好礼 ›</span></button></Row>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between"}}><div><p style={{fontSize:15,fontWeight:800,color:C.t1}}>每日签到</p><p style={{marginTop:5,fontSize:11,color:C.t3}}>{checked ? "今日已签到，明天再来吧" : "签到得 50 XP + 10 金币"}</p></div><button onClick={checkIn} disabled={checked} style={{padding:"10px 16px",border:"none",borderRadius:12,background:checked?C.border:C.primaryG,color:"#fff",fontSize:12,fontWeight:750,cursor:checked?"default":"pointer"}}>{checked?"已签到":"立即签到"}</button></Row></Card>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between",marginBottom:12}}><div><p style={{fontSize:15,fontWeight:800,color:C.t1}}>签到日历</p><p style={{marginTop:4,fontSize:11,color:C.t3}}>2025 年 9 月 · 已签到 {signedDays.length} 天</p></div><LineIcon name="calendar" color={C.primary} size={20}/></Row><div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"7px 4px"}}>{["一","二","三","四","五","六","日"].map(d=><span key={d} style={{textAlign:"center",fontSize:10,color:C.t4,fontWeight:700}}>{d}</span>)}{Array.from({length:30},(_,i)=>i+1).map(day=>{const signed=signedDays.includes(day);const today=day===12;return <span key={day} style={{width:27,height:27,justifySelf:"center",display:"grid",placeItems:"center",borderRadius:10,background:signed?C.primaryG:today?C.primaryL:"transparent",color:signed?"#fff":today?C.primary:C.t2,fontSize:11,fontWeight:signed||today?800:500,border:today&&!signed?`1px solid ${C.primary}66`:"none"}}>{day}</span>;})}</div><Row style={{gap:14,marginTop:13,fontSize:10,color:C.t3}}><Row style={{gap:5}}><span style={{width:7,height:7,borderRadius:9,background:C.primary}}/>已签到</Row><Row style={{gap:5}}><span style={{width:7,height:7,borderRadius:9,border:`1px solid ${C.primary}`}}/>今天</Row><Row style={{gap:5}}><span style={{width:7,height:7,borderRadius:9,background:C.divider}}/>未签到</Row></Row></Card>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between",marginBottom:10}}><div><p style={{fontSize:15,fontWeight:800,color:C.t1}}>成长任务</p><p style={{marginTop:4,fontSize:11,color:C.t3}}>发布内容可获得 30 XP</p></div><button onClick={publish} style={{border:"none",borderRadius:10,padding:"7px 11px",background:C.primaryL,color:C.primary,fontSize:11,cursor:"pointer"}}>模拟发布 +30 XP</button></Row><div style={{height:1,background:C.divider,margin:"8px 0"}}/><Row style={{gap:10}}><IconBox emoji="📝" color={C.primary} size={34}/><div><p style={{fontSize:12,fontWeight:650,color:C.t1}}>发布一条内容</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>记账、笔记或 AI 分享均可累计经验</p></div></Row></Card>
    <div><p style={{fontSize:13,fontWeight:800,color:C.t1,margin:"3px 2px 9px"}}>10 级成长路线</p><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>{levels.map(([lv,name,min],i)=><div key={lv} style={{padding:"11px 12px",borderRadius:13,background:i===levelIndex?C.primaryL:C.white,border:i===levelIndex?`1px solid ${C.primary}44`:`1px solid ${C.divider}`}}><Row style={{justifyContent:"space-between"}}><span style={{fontSize:12,fontWeight:800,color:i<=levelIndex?C.primary:C.t2}}>{lv}</span><span style={{fontSize:10,color:C.t3}}>{min} XP</span></Row><p style={{marginTop:5,fontSize:11,color:C.t1}}>{name}</p></div>)}</div></div>
  </div></Scroll></div>;
}

// ─── P41: 金币商城 ───────────────────────────────────────────────────────
function P41({ nav }: { nav: (s: string) => void }) {
  const [coins, setCoins] = useState(60);
  const [cards, setCards] = useState(1);
  const exchange = () => { if (coins >= 100) { setCoins(v => v - 100); setCards(v => v + 1); } };
  const locked = [["1 QB", "兑换 1 QB"], ["1 元话费", "兑换 1 元话费"], ["专属主题皮肤", "个性化主题"]] as const;
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:C.bg}}><TopNav title="金币商城" onBack={()=>nav("p40")}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:14}}>
    <div style={{padding:"20px 18px",borderRadius:20,background:C.primaryG,color:"#fff"}}><p style={{fontSize:11,color:"rgba(255,255,255,.72)"}}>我的金币</p><Row style={{alignItems:"baseline",gap:5,marginTop:5}}><span style={{fontSize:32,fontWeight:850}}>{coins}</span><span style={{fontSize:12}}>金币</span></Row><p style={{marginTop:7,fontSize:10,color:"rgba(255,255,255,.75)"}}>签到和发布内容可获得金币与经验</p></div>
    <div><p style={{fontSize:13,fontWeight:800,color:C.t1,margin:"2px 2px 9px"}}>可兑换</p><Card style={{padding:16}}><Row style={{gap:12}}><span style={{width:44,height:44,borderRadius:14,background:C.warningL,display:"grid",placeItems:"center"}}><LineIcon name="refresh" color={C.warning} size={22}/></span><div style={{flex:1}}><p style={{fontSize:14,fontWeight:750,color:C.t1}}>补签卡</p><p style={{marginTop:4,fontSize:11,color:C.t3}}>补回一次漏签 · 100 金币</p></div><button onClick={exchange} disabled={coins<100} style={{border:"none",borderRadius:10,padding:"8px 11px",background:coins>=100?C.warningL:C.border,color:coins>=100?"#A16B00":C.t3,fontSize:11,cursor:coins>=100?"pointer":"default"}}>兑换</button></Row><p style={{marginTop:11,fontSize:10,color:C.t4}}>已拥有 {cards} 张</p></Card></div>
    <div><p style={{fontSize:13,fontWeight:800,color:C.t1,margin:"2px 2px 9px"}}>更多商品</p><Card style={{overflow:"hidden"}}>{locked.map(([name,sub],i)=><Row key={name} style={{padding:"14px 16px",borderBottom:i===locked.length-1?"none":`1px solid ${C.divider}`,gap:12,opacity:.58}}><span style={{width:34,height:34,borderRadius:11,background:C.primaryL,display:"grid",placeItems:"center"}}><LineIcon name={i===0?"crown":i===1?"phone":"brush"} color={C.primary} size={17}/></span><span style={{flex:1}}><span style={{display:"block",fontSize:13,color:C.t1}}>{name}</span><span style={{display:"block",marginTop:3,fontSize:10,color:C.t3}}>{sub}</span></span><span style={{fontSize:10,color:C.t3,textAlign:"right"}}>库存 0<br/>暂未开放</span></Row>)}</Card></div>
  </div></Scroll></div>;
}

// ─── P42: 我的邀请码 ─────────────────────────────────────────────────────
function P42({ nav }: { nav: (s: string) => void }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const code = "IPINK2026";
  const copy = async () => { try { await navigator.clipboard?.writeText(`https://ilive.live/invite/${code}`); } catch {} setCopied(true); window.setTimeout(() => setCopied(false), 1400); };
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:"linear-gradient(180deg,rgba(124,77,255,.14),#F7F8FA 52%)"}}><TopNav title="我的邀请码" onBack={()=>nav("p05")}/><Scroll><div className="invite-page-content" style={{padding:16,display:"flex",flexDirection:"column",gap:14}}>
    <Row style={{justifyContent:"space-between",padding:"0 2px"}}><div><p style={{fontSize:13,fontWeight:800,color:C.t1}}>邀请海报预览</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>保存后可直接分享到微信或朋友圈</p></div><span style={{padding:"5px 8px",borderRadius:9,background:C.primaryL,color:C.primary,fontSize:9,fontWeight:700}}>375 × 667</span></Row>
    <div style={{borderRadius:26,background:"linear-gradient(150deg,#5630C7 0%,#7C4DFF 48%,#B69BFF 100%)",color:"#fff",position:"relative",overflow:"hidden",boxShadow:"0 16px 34px rgba(92,53,204,.28)"}}><div style={{position:"absolute",width:210,height:210,borderRadius:"50%",right:-88,top:-78,background:"rgba(255,255,255,.12)"}}/><div style={{position:"absolute",width:150,height:150,borderRadius:"50%",left:-72,top:145,background:"rgba(255,255,255,.07)"}}/><div style={{position:"relative",padding:"21px 20px 18px"}}><Row style={{justifyContent:"space-between"}}><Row style={{gap:9}}><span style={{width:38,height:38,borderRadius:13,background:"rgba(255,255,255,.18)",display:"grid",placeItems:"center",fontSize:22,fontWeight:900}}>L</span><div><p style={{fontSize:15,fontWeight:850}}>清新记账</p><p style={{marginTop:2,fontSize:9,color:"rgba(255,255,255,.68)"}}>智能记账 · 轻松生活</p></div></Row><span style={{padding:"5px 9px",borderRadius:99,background:"rgba(255,255,255,.14)",fontSize:9}}>好友 iPink 邀请你</span></Row><p style={{marginTop:24,fontSize:25,fontWeight:900,lineHeight:1.28,letterSpacing:"-.02em"}}>把每一笔生活<br/>变成看得见的成长</p><p style={{marginTop:8,fontSize:11,color:"rgba(255,255,255,.75)"}}>记账、待办与 AI 洞察，一站式整理你的生活</p><Row style={{gap:7,marginTop:17,flexWrap:"wrap"}}>{[["crown","首月会员"],["spark","AI 体验积分"],["cloud","云端同步"]].map(([icon,label])=><span key={label} style={{padding:"7px 9px",borderRadius:10,background:"rgba(255,255,255,.13)",display:"inline-flex",alignItems:"center",gap:5,fontSize:9}}><LineIcon name={icon as any} color="#fff" size={13}/>{label}</span>)}</Row></div><div style={{position:"relative",margin:8,padding:"15px 16px",borderRadius:20,background:"rgba(255,255,255,.96)",color:C.t1}}><Row style={{gap:14}}><div style={{width:86,height:86,padding:6,borderRadius:13,background:"#fff",border:`1px solid ${C.divider}`,display:"grid",gridTemplateColumns:"repeat(15,1fr)",gap:1}}>{Array.from({length:225},(_,i)=>{const x=i%15,y=Math.floor(i/15);const finderCell=(ox,oy)=>{const dx=x-ox,dy=y-oy;return dx>=0&&dx<7&&dy>=0&&dy<7&&(dx===0||dx===6||dy===0||dy===6||(dx>=2&&dx<=4&&dy>=2&&dy<=4));};const inFinder=(x<7&&y<7)||(x>=8&&y<7)||(x<7&&y>=8);const on=finderCell(0,0)||finderCell(8,0)||finderCell(0,8)||(!inFinder&&((x*7+y*11+i)%5<2));return <i key={i} style={{background:on?"#241B39":"transparent",borderRadius:.5}}/>;})}</div><div style={{flex:1}}><p style={{fontSize:11,color:C.t3}}>扫码下载清新记账</p><p style={{marginTop:5,fontSize:14,fontWeight:850}}>领取首月会员与 AI 积分</p><div style={{marginTop:10,padding:"8px 10px",borderRadius:10,background:C.primaryL}}><p style={{fontSize:9,color:C.t3}}>邀请码</p><p style={{marginTop:2,fontSize:14,fontWeight:900,color:C.primary,letterSpacing:".08em"}}>{code}</p></div><p style={{marginTop:7,fontSize:9,color:C.t4}}>ilive.live/invite/{code}</p></div></Row></div></div>
    <Row style={{gap:10}}><button onClick={()=>setSaved(true)} style={{flex:1,height:48,border:"none",borderRadius:15,background:C.primaryG,color:"#fff",fontSize:13,fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:7,boxShadow:"0 7px 18px rgba(124,77,255,.22)"}}><LineIcon name={saved?"check":"brush"} color="#fff" size={16}/>{saved?"海报已保存":"保存海报"}</button><button onClick={copy} style={{flex:1,height:48,border:`1px solid ${C.primary}33`,borderRadius:15,background:"rgba(255,255,255,.86)",color:C.primary,fontSize:13,fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:7}}><LineIcon name={copied?"check":"link"} color={C.primary} size={16}/>{copied?"链接已复制":"复制链接"}</button></Row>
    <Card style={{padding:16}}><p style={{fontSize:13,fontWeight:800,color:C.t1}}>邀请奖励</p><Row style={{gap:10,marginTop:12}}><span style={{width:34,height:34,borderRadius:11,background:C.warningL,display:"grid",placeItems:"center"}}><LineIcon name="crown" color={C.warning} size={17}/></span><div><p style={{fontSize:12,color:C.t1}}>好友完成首次签到</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>你和好友各获得 50 XP + 20 金币</p></div></Row><div style={{height:1,background:C.divider,margin:"14px 0"}}/><Row style={{gap:8}}>{[["0","已邀请"],["0","已注册"],["0","已获得 XP"]].map(([v,l])=><div key={l} style={{flex:1,textAlign:"center",padding:"8px 4px",borderRadius:11,background:C.bg}}><p style={{fontSize:16,fontWeight:850,color:C.primary}}>{v}</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>{l}</p></div>)}</Row></Card>
    <Card style={{padding:16}}><Row style={{justifyContent:"space-between",marginBottom:11}}><div><p style={{fontSize:13,fontWeight:800,color:C.t1}}>好友可解锁的权益</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>邀请后双方都能获得更多智能能力</p></div><LineIcon name="spark" color={C.primary} size={20}/></Row>{[["crown","首月会员体验","新用户首月免费体验会员权益"],["spark","AI 智能助手","获得 AI 记账与分析体验积分"],["cloud","云端同步","会员可开启账单云端实时同步"]].map(([icon,title,sub],i)=><Row key={title} style={{gap:10,padding:"10px 0",borderTop:i?`1px solid ${C.divider}`:"none"}}><span style={{width:31,height:31,borderRadius:10,background:C.primaryL,display:"grid",placeItems:"center"}}><LineIcon name={icon as any} color={C.primary} size={16}/></span><div><p style={{fontSize:12,fontWeight:700,color:C.t1}}>{title}</p><p style={{marginTop:3,fontSize:10,color:C.t3}}>{sub}</p></div></Row>)}</Card>
  </div></Scroll></div>;
}

// ─── P37: 协议 WebView ───────────────────────────────────────────────────
function P37({ nav }: { nav: (s: string) => void }) {
  const [tab,setTab]=useState<"terms"|"privacy">("terms");
  return <div style={{ display:"flex",flexDirection:"column",height:"100%",background:C.white }}><TopNav title={tab==="terms"?"用户协议":"隐私政策"} onBack={()=>nav("p24")}/><Row style={{ margin:"10px 16px",padding:3,borderRadius:11,background:C.primaryL }}>{([["terms","用户协议"],["privacy","隐私政策"]] as const).map(([k,l])=><button key={k} onClick={()=>setTab(k)} style={{ flex:1,padding:"8px 0",border:"none",borderRadius:8,background:tab===k?C.white:"transparent",color:tab===k?C.primary:C.t3,fontWeight:700,cursor:"pointer",boxShadow:tab===k?C.cardSm:"none" }}>{l}</button>)}</Row><div style={{ margin:"0 12px 12px",flex:1,border:`1px solid ${C.divider}`,borderRadius:14,overflow:"hidden",background:C.bg }}><iframe title={tab==="terms"?"用户协议":"隐私政策"} src={`https://ilive.live/${tab}`} style={{ width:"100%",height:"100%",border:"none",background:C.white }}/></div></div>;
}

// ─── P38: 登录与验证信息 ─────────────────────────────────────────────────
function P38({ nav }: { nav: (s: string) => void }) {
  const [tab,setTab]=useState<"password"|"phone"|"email">("password");
  const meta={password:["更换密码","验证当前密码后设置新密码"],phone:["更换手机号","验证码将发送到当前手机号"],email:["更换邮箱","验证后用于登录与找回密码"]} as const;
  const fields=tab==="password"?["当前密码","新密码","确认新密码"]:tab==="phone"?["新手机号","短信验证码"]:["新邮箱","邮箱验证码"];
  return <div style={{display:"flex",flexDirection:"column",height:"100%",background:C.bg}}><TopNav title="登录与验证信息" onBack={()=>nav("p27")}/><Scroll><div style={{padding:16,display:"flex",flexDirection:"column",gap:14}}><Row style={{padding:3,borderRadius:12,background:C.primaryL,gap:3}}>{([["password","密码"],["phone","手机号"],["email","邮箱"]] as const).map(([k,l])=><button key={k} onClick={()=>setTab(k)} style={{flex:1,padding:"9px 0",border:"none",borderRadius:9,background:tab===k?C.white:"transparent",color:tab===k?C.primary:C.t3,fontSize:12,fontWeight:700,cursor:"pointer",boxShadow:tab===k?C.cardSm:"none"}}>{l}</button>)}</Row><Card style={{padding:"20px 16px",boxShadow:"0 3px 14px rgba(38,27,70,.05)"}}><Row style={{gap:12,marginBottom:20}}><IconBox emoji={tab==="phone"?"📱":tab==="email"?"✉️":"🔐"} color={C.primary} size={42}/><div><p style={{fontSize:16,fontWeight:800,color:C.t1}}>{meta[tab][0]}</p><p style={{fontSize:11,color:C.t3,marginTop:4}}>{meta[tab][1]}</p></div></Row>{fields.map((f,i)=><div key={f} style={{position:"relative",paddingTop:11,marginBottom:14,borderBottom:`1.5px solid ${C.border}`}}><label style={{position:"absolute",top:0,left:0,fontSize:10,color:C.t3}}>{f}</label><input type={tab==="password"?"password":"text"} placeholder={i===fields.length-1&&tab!=="password"?"请输入 6 位验证码":"请输入"} style={{width:"100%",boxSizing:"border-box",height:42,border:"none",outline:"none",background:"transparent",fontSize:14,color:C.t1}}/>{i===fields.length-1&&tab!=="password"&&<button style={{position:"absolute",right:0,bottom:9,border:"none",background:"transparent",color:C.primary,fontSize:11,cursor:"pointer"}}>发送验证码</button>}</div>)}<button style={{width:"100%",height:45,border:"none",borderRadius:13,background:C.primaryG,color:"#fff",fontWeight:800,cursor:"pointer"}}>确认更换</button></Card><p style={{padding:"0 4px",fontSize:11,lineHeight:1.65,color:C.t3}}>为了保护账号安全，更换后 24 小时内部分敏感操作可能受到限制。</p></div></Scroll></div>;
}

// ─── Screen Map ───────────────────────────────────────────────────────────
const ALL_SCREENS = [
  { id:"p02", label:"首页·待办", group:"核心页面" },
  { id:"p03", label:"记账入口", group:"核心页面" },
  { id:"p04", label:"AI 助手", group:"核心页面" },
  { id:"p05", label:"个人中心", group:"核心页面" },
  { id:"p06", label:"账单详情", group:"账单模块" },
  { id:"p07", label:"账单搜索", group:"账单模块" },
  { id:"p08", label:"账单日历", group:"账单模块" },
  { id:"p08-todo", label:"日程日历", group:"待办&任务" },
  { id:"p09", label:"账单收藏", group:"账单模块" },
  { id:"p10", label:"账本管理", group:"账单模块" },
  { id:"p11", label:"分类管理", group:"账单模块" },
  { id:"p13", label:"账单导入", group:"账单模块" },
  { id:"p14", label:"统计分析", group:"账单模块" },
  { id:"p15", label:"资产分析", group:"资产&分析" },
  { id:"p16", label:"还款计划", group:"资产&分析" },
  { id:"p17", label:"还款历史", group:"资产&分析" },
  { id:"p18", label:"AI 图片生成", group:"AI 功能" },
  { id:"p19", label:"AI 文字生成", group:"AI 功能" },
  { id:"p20", label:"AI 决策助手", group:"AI 功能" },
  { id:"p21", label:"智能提醒", group:"AI 功能" },
  { id:"p22", label:"待办列表", group:"待办&任务" },
  { id:"p23", label:"添加待办", group:"待办&任务" },
  { id:"p24", label:"设置", group:"设置&账户" },
  { id:"p25", label:"主题设置", group:"设置&账户" },
  { id:"p26", label:"个人信息", group:"设置&账户" },
  { id:"p27", label:"安全设置", group:"设置&账户" },
  { id:"p28", label:"登录", group:"设置&账户" },
  { id:"p29", label:"注册", group:"设置&账户" },
  { id:"p30", label:"忘记密码", group:"设置&账户" },
  { id:"p31", label:"会员中心", group:"设置&账户" },
  { id:"p32", label:"消息中心", group:"设置&账户" },
  { id:"p33", label:"帮助与反馈", group:"设置&账户" },
  { id:"p34", label:"关于我们", group:"设置&账户" },
  { id:"p35", label:"月度预算", group:"设置&账户" },
  { id:"p36", label:"注销账号", group:"设置&账户" },
  { id:"p37", label:"协议 WebView", group:"设置&账户" },
  { id:"p38", label:"登录与验证信息", group:"设置&账户" },
  { id:"p39", label:"我的笔记", group:"设置&账户" },
  { id:"p40", label:"签到中心", group:"设置&账户" },
  { id:"p41", label:"金币商城", group:"设置&账户" },
  { id:"p42", label:"我的邀请码", group:"设置&账户" },
    { id:"p43", label:"AI 积分与计费", group:"AI 功能" },
    { id:"p44", label:"我的订单", group:"设置&账户" },
    { id:"p45", label:"AI 积分明细", group:"AI 功能" },
    { id:"p46", label:"支付", group:"设置&账户" },
  { id:"p47", label:"数据中心", group:"设置&账户" },
  { id:"p48", label:"新增账本", group:"账单模块" },
  { id:"p49", label:"新增分类", group:"账单模块" },
];

function P08Todo({ nav }: { nav: (s: string) => void }) { return <P08 nav={nav} initialType="todo"/>; }

const COMPS: Record<string, React.FC<{ nav: (s: string) => void }>> = {
  p02: P02, p03: P03, p04: P04, p05: P05, p06: P06, p07: P07,
  p08: P08, "p08-todo": P08Todo, p09: P09, p10: P10, p11: P11, p13: P13,
  p14: P14, p15: P15, p16: P16, p17: P17, p18: P18, p19: P19,
  p20: P20, p21: P21, p22: P22, p23: P23, p24: P24, p25: P25,
  p26: P26, p27: P27, p28: P28, p29: P29, p30: P30, p31: P31, p32: P32,
  p33: P33, p34: P34, p35: P35, p36: P36, p37: P37, p38: P38, p39: P39, p40: P40, p41: P41, p42: P42, p43: P43, p44: P44, p45: P45, p46: P46, p47: P47, p48: P48, p49: P49,
};

// ─── Solo Mode (bare screen, for Figma "Copy design") ────────────────────
function SoloMode({ initialId }: { initialId: string }) {
  const [id, setId] = useState(initialId);
  const Comp = COMPS[id] ?? COMPS["p02"];
  const soloNav = (next: string) => {
    if (!COMPS[next]) return;
    const u = new URL(window.location.href);
    u.searchParams.set("s", next);
    window.history.pushState({}, "", u.toString());
    setId(next);
  };
  useEffect(() => {
    const onPop = () => {
      const id2 = new URLSearchParams(window.location.search).get("s") ?? initialId;
      if (COMPS[id2]) setId(id2);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [initialId]);
  return (
    <div data-copy-design-screen style={{ ...sans, width: "100vw", height: "auto", minWidth: 375, minHeight: 780, overflow: "visible",
      display: "flex", flexDirection: "column", background: C.white }}>
      <Comp nav={soloNav}/>
    </div>
  );
}

// ─── Design Export Mode (all screens on one 2.5× canvas) ────────────────
// Open with ?export=1. Each frame keeps the real 375px width but grows to
// 2.5× the normal viewport height so long pages can be copied in one pass.
function DesignExportMode() {
  const noopNav = (_next: string) => {};
  return (
    <div data-design-export style={{ ...sans, minWidth: 820, minHeight: "100vh", padding: "28px 32px 64px",
      background: "#E8EAF2", backgroundImage: "radial-gradient(#C8CADE 1.2px, transparent 1.2px)",
      backgroundSize: "24px 24px" }}>
      <div style={{ maxWidth: 782, margin: "0 auto 24px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
        <div>
          <p style={{ fontSize: 18, fontWeight: 850, color: C.t1 }}>清新记账 · 全页面设计导出</p>
          <p style={{ marginTop: 5, fontSize: 12, color: C.t3 }}>共 {ALL_SCREENS.length} 个页面 · 每个画布 375 × 1950（标准高度 2.5 倍）</p>
        </div>
        <span style={{ padding: "6px 10px", borderRadius: 999, background: "rgba(124,77,255,.12)", color: C.primary, fontSize: 11, fontWeight: 750 }}>Copy design 画布</span>
      </div>
      <div style={{ maxWidth: 782, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 375px)", gap: 28, alignItems: "start" }}>
        {ALL_SCREENS.map(screen => {
          const Comp = COMPS[screen.id];
          if (!Comp) return null;
          return (
            <section key={screen.id} style={{ width: 375 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 4px 8px" }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: C.t1 }}>{screen.id.replace("p", "Page ")} · {screen.label}</span>
                <span style={{ fontSize: 10, color: C.t4 }}>{screen.group}</span>
              </div>
              <div style={{ width: 375, height: 1950, overflow: "hidden", background: C.white, borderRadius: 18,
                boxShadow: "0 14px 34px rgba(38,27,70,.12)", border: "1px solid rgba(0,0,0,.06)", display: "flex", flexDirection: "column" }}>
                <Comp nav={noopNav}/>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────
export default function App() {
  // Solo mode: ?s=p02 renders a bare screen and fills Make's capture viewport.
  // Make may capture a viewport slightly larger than 375×780; using 100vw/100vh
  // prevents the extra right/bottom area from becoming blank Design layers.
  const params = new URLSearchParams(window.location.search);
  const soloId = params.get("s");
  if (params.get("export") === "1") {
    return <DesignExportMode/>;
  }
  if (soloId && COMPS[soloId]) {
    return <SoloMode initialId={soloId}/>;
  }

  const [current, setCurrent] = useState("p02");
  const [groupOpen, setGroupOpen] = useState<string | null>(null);
  const nav = (s: string) => setCurrent(s);
  const Comp = COMPS[current];
  const meta = ALL_SCREENS.find(s => s.id === current)!;
  const idx = ALL_SCREENS.findIndex(s => s.id === current);
  const groups = [...new Set(ALL_SCREENS.map(s => s.group))];

  const openSolo = (id: string) => {
    const u = new URL(window.location.href);
    u.searchParams.set("s", id);
    window.open(u.toString(), "_blank");
  };

  return (
    <div style={{ ...sans, minHeight: "100vh", background: "#E8EAF2",
      backgroundImage: "radial-gradient(#C8CADE 1.2px, transparent 1.2px)",
      backgroundSize: "24px 24px", display: "flex", alignItems: "flex-start",
      justifyContent: "center", padding: "100px 24px 48px" }}>

      {/* Top nav bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "10px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: C.primaryG,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>💎</div>
            <div>
              <span style={{ fontSize: 14, fontWeight: 800, color: C.t1 }}>清新记账 v2.0</span>
              <span style={{ fontSize: 11, color: C.t3, marginLeft: 8 }}>· 共{ALL_SCREENS.length}个页面</span>
            </div>
          </div>
          {/* Solo / Copy design button */}
          <button onClick={() => openSolo(current)}
            title="在新标签打开纯净画面，用于 Figma Copy design"
            style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6,
              padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${C.primary}`,
              background: C.primaryL, color: C.primary, fontSize: 12, fontWeight: 700, cursor: "pointer", flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="4" width="8" height="8" rx="1.5" stroke={C.primary} strokeWidth="1.5"/>
              <path d="M4 4V2.5A1.5 1.5 0 015.5 1H10.5A1.5 1.5 0 0112 2.5V7.5A1.5 1.5 0 0110.5 9H9" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Copy design 模式
          </button>
        </div>
        {/* Group tabs */}
        <div style={{ display: "flex", gap: 6, overflowX: "auto", flexWrap: "wrap" }}>
          {groups.map(g => {
            const screens = ALL_SCREENS.filter(s => s.group===g);
            const isActive = screens.some(s => s.id===current);
            return (
              <div key={g} style={{ position: "relative" }}>
                <button onClick={() => setGroupOpen(groupOpen===g ? null : g)}
                  style={{ padding: "5px 12px", borderRadius: 20, border: "none", cursor: "pointer",
                    background: isActive ? C.primary : C.bg,
                    color: isActive ? "#fff" : C.t2, fontSize: 12, fontWeight: 600 }}>
                  {g} {groupOpen===g ? "▲" : "▼"}
                </button>
                {groupOpen===g && (
                  <div style={{ position: "absolute", top: "100%", left: 0, zIndex: 300, marginTop: 4,
                    background: "#fff", borderRadius: 14, boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    padding: "8px 6px", display: "flex", flexDirection: "column", gap: 2, minWidth: 160 }}>
                    {screens.map(s => (
                      <div key={s.id} style={{ display: "flex", alignItems: "center" }}>
                        <button onClick={() => { setCurrent(s.id); setGroupOpen(null); }}
                          style={{ flex: 1, padding: "8px 12px", borderRadius: 10, border: "none", cursor: "pointer",
                            background: current===s.id ? C.primaryL : "transparent",
                            color: current===s.id ? C.primary : C.t1,
                            fontSize: 12, fontWeight: current===s.id ? 700 : 400, textAlign: "left" }}>
                          {s.id.replace("p","P")}. {s.label}
                        </button>
                        <button onClick={() => { openSolo(s.id); setGroupOpen(null); }}
                          title="Copy design 模式"
                          style={{ padding: "6px 8px", background: "none", border: "none", cursor: "pointer",
                            color: C.t4, fontSize: 12, borderRadius: 8, flexShrink: 0 }}>
                          ↗
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Screen area */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: C.t1 }}>{meta.id.replace("p","Page ")} · {meta.label}</p>
          <p style={{ fontSize: 11, color: C.t3, marginTop: 2 }}>{meta.group}</p>
        </div>

        {/* Screen */}
        <div style={{ width: 375, height: 780, background: C.white, borderRadius: 16, overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column",
          position: "relative" }}>
          <Comp nav={nav}/>
        </div>

        {/* Prev / Next */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {idx > 0 && <button onClick={() => setCurrent(ALL_SCREENS[idx-1].id)}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 20,
              border: "1px solid rgba(124,77,255,0.2)", background: "rgba(255,255,255,0.8)",
              color: C.primary, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>‹ 上一页</button>}
          <span style={{ fontSize: 11, color: C.t3 }}>{idx+1} / {ALL_SCREENS.length}</span>
          {idx < ALL_SCREENS.length-1 && <button onClick={() => setCurrent(ALL_SCREENS[idx+1].id)}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 20,
              border: "1px solid rgba(124,77,255,0.2)", background: "rgba(255,255,255,0.8)",
              color: C.primary, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>下一页 ›</button>}
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {groupOpen && <div style={{ position: "fixed", inset: 0, zIndex: 100 }} onClick={() => setGroupOpen(null)}/>}
    </div>
  );
}
