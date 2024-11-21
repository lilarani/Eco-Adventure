const Faq = () => {
  return (
    <div className="container mx-auto">
      <div className="p-4 bg-base-100 rounded-none">
        <h1 className="text-3xl font-bold text-center mb-6 rounded-none">
          Eco Adventure FAQ
        </h1>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-none">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-xl font-medium rounded-none">
            What is Eco Adventure?
          </div>
          <div className="collapse-content rounded-none">
            <p>
              Eco Adventure is a platform for exploring sustainable adventures
              and eco-friendly activities.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-none">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium rounded-none">
            How can I book an adventure?
          </div>
          <div className="collapse-content rounded-none">
            <p>
              You can book adventures directly from our website by selecting
              your desired activity and date.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-none">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium rounded-none">
            Is Eco Adventure safe for families?
          </div>
          <div className="collapse-content rounded-none">
            <p>
              Yes, we prioritize safety and offer activities suitable for all
              age groups, including families with children.
            </p>
          </div>
        </div>

        {/* New Questions */}
        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-none">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium rounded-none">
            What types of activities are available?
          </div>
          <div className="collapse-content rounded-none">
            <p>
              We offer hiking, cycling, kayaking, wildlife tours, and many other
              eco-friendly activities.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-none">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium rounded-none">
            Do I need special equipment for adventures?
          </div>
          <div className="collapse-content rounded-none">
            <p>
              Some activities may require specific equipment, but we provide
              rental options for your convenience.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-none">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium rounded-none">
            How can I cancel or reschedule my booking?
          </div>
          <div className="collapse-content rounded-none">
            <p>
              You can manage your bookings through your account dashboard or
              contact our support team for assistance.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 rounded-none">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium rounded-none">
            What is your refund policy?
          </div>
          <div className="collapse-content rounded-none">
            <p>
              We offer a full refund if cancellations are made at least 48 hours
              before the scheduled activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
