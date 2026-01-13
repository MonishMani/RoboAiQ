import './GlowButton.css';

export default function GlowButton({ children, onClick, className = '', variant = 'primary' }) {
  return (
    <button
      className={`glow-button glow-button-${variant} ${className}`}
      onClick={onClick}
    >
      <span className="glow-button-text">{children}</span>
      <span className="glow-button-glow"></span>
    </button>
  );
}
