import { ImCross } from 'react-icons/im';
import { useNavigate, Link } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-center items-center mt-28 ">
      <div className="card bg-base-100 w-[600px] shadow-xl ">
        <div className="flex justify-center items-center ">
          <ImCross className="w-96 text-red" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-5xl text-red-600">Not Found</h2>
          <div className="card-actions">
            <Link className="btn bg-green-800 text-white mt-4">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
