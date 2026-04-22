import React from "react";

const Offline: React.FC = () => {
  return (
    <div style={styles.container}>
        <img src="/icons/LOGO.png" alt="logo" />
      <p style={styles.text}>Vous êtes hors ligne</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: "150px",
    height: "auto",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#2f3238",
    fontFamily: "sans-serif",
  },
};

export default Offline;