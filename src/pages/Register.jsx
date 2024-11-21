import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = password => {
    let hasUppercase = false;
    let hasLowercase = false;

    for (const char of password) {
      if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        hasUppercase = true;
      }
      if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        hasLowercase = true;
      }
    }
    // Check for conditions
    if (!hasUppercase) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!hasLowercase) {
      return 'Password must contain at least one lowercase letter';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }

    return '';
  };

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    // Validate password
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }
    setPasswordError('');

    createNewUser(email, password)
      .then(result => {
        updateUserProfile(name, photo)
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate('/');
            toast.success(`Registration Successful!`);
          })
          .catch(error => {
            toast.error('ERROR', error.message);
            toast.error('Profile update failed');
          });
      })
      .catch(error => {
        toast.log('ERROR', error.message);
        toast.error(`Registration Failed: ${error.message}`);
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                className="btn bg-green-800 text-white
              "
              >
                Register
              </button>
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
