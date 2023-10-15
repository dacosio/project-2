const Wrapper = ({ children, label = "", ...rest }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxSizing: "border-box",
        gap: 20,
        ...rest
      }}
    >
      {children}
      <div style={{ marginTop: "8px", color: "#000" }}>{label}</div>
    </div>
  );
};

export default Wrapper;
