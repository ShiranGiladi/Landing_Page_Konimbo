"use client";

import { useState } from "react";
import { submitContact } from "../actions";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default function ContactForm() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(STATUS.LOADING);
    setErrMsg("");

    const formData = new FormData(e.target);
    try {
      const result = await submitContact(formData);

      if (result.success) {
        setStatus(STATUS.SUCCESS);
        e.target.reset();
      } else {
        setStatus(STATUS.ERROR);
        setErrMsg(result.error);
      }
    } catch {
      setStatus(STATUS.ERROR);
      setErrMsg("שגיאה זמנית, נסה שוב");
    }
  }

  const isLoading = status === STATUS.LOADING;

  if (status === STATUS.SUCCESS) {
    return (
      <div className="flex flex-col items-center text-center gap-4 py-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white"
          style={{ background: "var(--success)" }}
        >
          ✓
        </div>
        <h2
          className="text-3xl"
          style={{
            fontFamily: "'DM Serif Display', serif",
            color: "var(--ink)",
          }}
        >
          הודעה נשלחה בהצלחה!
        </h2>
        <p
          className="text-sm leading-relaxed max-w-xs"
          style={{ color: "var(--ink-soft)" }}
        >
          תודה על פנייתך. נחזור אליך בהקדם האפשרי.
        </p>
        <button
          onClick={() => setStatus(STATUS.IDLE)}
          className="rounded-lg font-semibold text-white transition-colors mt-4 hover:opacity-90"
          style={{
            background: "var(--accent)",
            padding: "0.75rem 2rem",
            display: "block",
            width: "100%",
          }}
        >
          שלח הודעה נוספת
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-10 text-right">
        <h2
          className="text-3xl"
          style={{
            fontFamily: "'DM Serif Display', serif",
            color: "var(--ink)",
            marginBottom: "0.75rem",
          }}
        >
          שלח הודעה
        </h2>
        <p
          className="text-xs"
          style={{
            color: "var(--ink-soft)",
            marginBottom: "0.45rem",
          }}
        >
          *כל השדות הן חובה
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="text-xs font-semibold tracking-wide"
            style={{ color: "var(--ink)" }}
          >
            שם מלא
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="ישראל ישראלי"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all disabled:opacity-50"
            style={{
              border: "1.5px solid var(--border)",
              color: "var(--ink)",
              fontFamily: "'DM Sans', sans-serif",
              padding: "0.3rem",
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-xs font-semibold tracking-wide"
            style={{ color: "var(--ink)" }}
          >
            אימייל
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="israel@example.com"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all disabled:opacity-50"
            style={{
              border: "1.5px solid var(--border)",
              color: "var(--ink)",
              fontFamily: "'DM Sans', sans-serif",
              padding: "0.3rem",
            }}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="text-xs font-semibold tracking-wide"
            style={{ color: "var(--ink)" }}
          >
            הודעה
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="הכנס כאן את ההודעה שלך"
            required
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-y disabled:opacity-50"
            style={{
              border: "1.5px solid var(--border)",
              color: "var(--ink)",
              fontFamily: "'DM Sans', sans-serif",
              minHeight: "120px",
              padding: "0.3rem",
            }}
          />
        </div>

        {status === STATUS.ERROR && (
          <div
            className="px-4 py-3 rounded-xl text-sm leading-relaxed"
            style={{
              background: "#fdecea",
              border: "1px solid #f5c6c6",
              color: "var(--error)",
            }}
          >
            <strong>משהו השתבש.</strong> {errMsg || "Please try again."}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-xl font-semibold text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90"
          style={{
            background: "var(--accent)",
            fontFamily: "'DM Sans', sans-serif",
            padding: "0.75rem 2rem",
            display: "block",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          {isLoading ? "שולח…" : "שלח הודעה"}
        </button>
      </form>
    </>
  );
}
