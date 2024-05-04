// Import default App css
import "../../App.css"

// Login function JSX to render HTML
const Login = () => {
  return (
    <section className="main-content" id="login">
      {/* HEADER TAG */}
      <h3 className="login-header">Login</h3>
      {/* LOGIN FORM */}
      <div className="form-container">
        <form>
          <div>
            <label>Username</label>
            <input type="email" id="formGroupInput1" placeholder="user@internet.com"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="formGroupInput2" placeholder="Password"></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

// Export function to be imported 
export default Login;
