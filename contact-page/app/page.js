import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* right panel: contact info */}
      <aside
        className="flex-1 flex items-center justify-center px-20 py-16"
        style={{ background: "var(--ink)" }}
      >
        <div className="max-w-sm">
          <span
            className="block text-sm font-semibold tracking-widest uppercase mb-5"
            style={{ color: "var(--accent-light)" }}
          >
            צור קשר
          </span>

          <h1
            className="mb-6 leading-none"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              color: "#fff",
            }}
          >
            בוא נדבר<span style={{ color: "var(--accent)" }}>.</span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#b0b0cc",
              marginBottom: "0.55rem",
            }}
          >
            יש לך שאלה? רוצה לשתף אותנו במשהו? נשמח לשמוע ממך. השאר לנו הודעה
            ונחזור אליך בהקדם.
          </p>

          <ul className="flex flex-col gap-5">
            {[
              { label: "אימייל", value: "hello@example.com" },
              { label: "טלפון", value: "050-000-0000" },
            ].map((item, i, arr) => (
              <li
                key={item.label}
                className="flex flex-col gap-1 pb-5"
                style={{
                  borderBottom:
                    i < arr.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "#7070a0" }}
                >
                  {item.label}
                </span>
                <span className="text-sm" style={{ color: "#d0d0e8" }}>
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* left panel: contact form */}
      <main
        className="flex-1 flex items-center justify-center py-16"
        style={{ background: "var(--surface)", padding: "3rem 2rem" }}
      >
        <div
          style={{
            background: "var(--surface-card)",
            boxShadow:
              "0 2px 4px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.08)",
            borderRadius: "1.25rem",
            padding: "3rem",
            width: "100%",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
