
export default function AuthLayout({ children }) {
    return (
        <>
        <h1>Inner ReviewLayout</h1>
      {children}
      <h2 style= {{color:"red"}}>Inner body!</h2>
      </>
    );
  }
  