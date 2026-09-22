"use client";

const SignUpForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Enter your Username</label>
        <input id="username" placeholder="Username..." />
        <label htmlFor="password">Enter your Password</label>
        <input id="password" placeholder="Password..." />
        <label htmlFor="Email">Enter your Email</label>
        <input id="email" placeholder="Email..." />
      </form>
    </div>
  );
};

export default SignUpForm;
