import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.reset();

    userLogin(email, password)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.log('ERROR', error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary ">Login</button>
            </div>
          </form>
          <p className="text-sm text-center">
            Dont't Have an Account?
            <Link to={'/register'} className="text-blue-500 ml-2 underline">
              Register
            </Link>
          </p>
          <div className="flex justify-center py-3">
            <button className="px-3 py-1 bg-slate-300 font-semibold">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
