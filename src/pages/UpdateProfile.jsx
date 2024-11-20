import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { updateEmail } from 'firebase/auth';

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    photoURL: user?.photoURL || '',
  });

  const updateUserEmail = email => {
    return updateEmail(auth.currentUser, email);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    if (!formData.name || !formData.photoURL || !formData.email) {
      toast.error('Name, email and Photo URL cannot be empty!');
      return;
    }

    updateUserProfile(formData.name, formData.photoURL)
      .then(() => {
        toast.success(`Profile updated successfully!`);
        setFormData({
          name: '',
          email: '',
          photoURL: '',
        });
      })
      .catch(error => {
        toast.error(`Failed to update profile!`);
      });

    updateUserEmail(formData.email)
      .then(() => {
        toast.error('email updated successfully');
      })
      .catch(error => {
        toast.error('Failed to update email');
      });
  };

  return (
    <div className="my-8 w-8/12 mx-auto">
      <div className="grid grid-cols-12 mt-3 gap-8">
        <div className="border-r-2 col-span-3">
          <img
            className="w-20 rounded-full"
            src={user && user?.photoURL}
            alt=""
          />
          <h2 className="font-bold text-lg">{user && user?.displayName}</h2>
          <p>{user && user?.email}</p>
        </div>

        <div className="col-span-9 space-y-3">
          <h2 className="font-bold text-xl">Update your Profile</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="border-2 p-2"
              type="text"
              placeholder="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              className="border-2 p-2"
              type="text"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="photoURL">Photo-URL</label>
            <input
              className="border-2 p-2"
              type="text"
              placeholder="photo-url"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleUpdate} className="px-3 py-1 bg-gray-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
