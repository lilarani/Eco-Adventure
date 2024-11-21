import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.config';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { userLogin, setUser, googleProvider } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  let location = useLocation();
  let visit = location.state;

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();

    userLogin(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('login success');
        navigate(visit ? visit : '/');
      })
      .catch(error => {
        toast.error('Failed login');
      });
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        toast.success(`Login successfully`);
        navigate(visit ? visit : '/');
      })
      .catch(error => {
        toast.error('ERROR', error.message);
      });
  };

  const handleForgetPassword = e => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error('Please provide a valid email address');
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        toast.success(`Password Reset email sent, please check your email`);
      });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen p-3">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-12 right-2"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
                </button>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label onClick={handleForgetPassword} className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-800 text-white">Login</button>
            </div>
          </form>
          <button
            onClick={loginWithGoogle}
            className="w-full py-1  bg-slate-100 font-semibold"
          >
            Login with Google
          </button>
          <p className="text-sm text-center mt-3">
            Dont't Have an Account?
            <Link to={'/register'} className="text-blue-500 ml-2 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
