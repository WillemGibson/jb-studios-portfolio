/* eslint-disable react/prop-types */
export default function MenuToggleButton({ onClick, isOpen }) {
  return (
    <button className="toggle-button fixed z-20 top-2 right-2" onClick={onClick}>
      {isOpen ? (
        <span className="close-icon text-4xl text-black">✖</span>
      ) : (
        <span className="menu-icon text-6xl text-white">☰</span>
      )}
    </button>
  );
}