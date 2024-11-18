import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
    e.target.reset();

    createNewUser(email, password)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch(error => {
        console.log('ERROR', error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h2 className="text-center">Register your Account</h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary ">Register</button>
            </div>
          </form>
          <p className="text-sm text-center">
            Already Have an Account?
            <Link to={'/login'} className="text-blue-500 ml-2 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
