/** JT monogram: a J and T sharing one stroke, inside a proof's tombstone (∎). */
export const Logo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <rect width="64" height="64" fill="var(--ink)" />
    <path fill="var(--paper)" d="M12 12h40v10H40v30H12V34h10v8h8V22H12z" />
  </svg>
);
