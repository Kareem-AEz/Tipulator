export default function TextInput({ number, setNumber, children }) {
  // verifying input
  function handleInput(e) {
    const value = Number(e.target.value);
    isFinite(value) ? setNumber(value) : "";
  }

  return (
    <input
      className="input--text"
      type="text"
      placeholder={children}
      value={number}
      onChange={(e) => handleInput(e)}
    />
  );
}
