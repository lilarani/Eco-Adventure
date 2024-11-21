import { useState } from 'react';

const Detail = ({ detail }) => {
  const {
    title,
    image,
    category,
    shortDescription: description,
    availability,
    location,
    duration,
    cost,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures: features,
    maxGroupSize: size,
    specialInstructions,
  } = detail;

  const [showModal, setShowModal] = useState(false);

  const handleTalkWithExpart = () => {
    const currentTiem = new Date();
    const currentHour = currentTiem.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      window.open('https://meet.google.com/', '_blank');
    } else {
      setShowModal(true);
    }
  };
  return (
    <div
      className="flex flex-col md:flex-row gap-10 
      container mx-auto my-24"
    >
      <div>
        <img className="w-[500px] h-[500px]" src={image} alt="" />

        <div className="flex justify-center mt-7">
          <button
            onClick={handleTalkWithExpart}
            className="bg-sky-400 px-3 py-1 font-bold text-base"
          >
            Talk with Expert
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="font-semibold text-base">{description}</p>
        <div className="flex gap-3">
          <p className="font-bold text-base">
            Category: <span className="font-semibold">{category}</span>
          </p>
          <p className="bg-sky-200 px-3 rounded-full">{availability}</p>
        </div>
        <p className="font-bold text-base">
          Place: <span className="font-semibold">{location}</span>
        </p>
        <p className="font-bold text-base">
          Duration: <span className="font-semibold">{duration}</span>
        </p>
        <p className="font-bold text-base">
          Cost: <span className="font-semibold">${cost}</span>
        </p>
        <p className="font-bold text-base">
          Adventure Level:
          <span className="font-semibold"> {adventureLevel}</span>
        </p>
        <div className="flex gap-2">
          <p className="font-bold text-base">Included Items: </p>

          {includedItems.map((item, index) => (
            <p className="text-base font-semibold" key={index}>
              {item} |
            </p>
          ))}
        </div>

        <div className="flex gap-2">
          <p className="font-bold text-base">Eco-Friendly Features: </p>
          {features.map((item, index) => (
            <p className="text-base font-semibold" key={index}>
              {item} |
            </p>
          ))}
        </div>

        <p className="font-bold text-base">
          Max Group Size:{' '}
          <span className="text-base font-semibold">{size} </span>
        </p>

        <div>
          <h2 className="text-base font-bold"> special Instructions:</h2>
          {specialInstructions.map((item, index) => (
            <p className="text-base font-semibold" key={index}>
              {item} |
            </p>
          ))}
        </div>
      </div>

      {/* modal  */}

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Consultation Time</h2>
            <p>
              Sorry, experts are only available between{' '}
              <strong>10:00 AM</strong> and <strong>8:00 PM</strong>. Please try
              again during this time.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-sky-400 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
