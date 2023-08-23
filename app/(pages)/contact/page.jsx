const ContactPage = () => {
  return (
    <>
    <div className="text-center text-3xl p-5 m-5">
      <h1>This is Contact Page With 1 form section + header & footer section. This form section has input fields - name, email, website, message, and submit button.</h1>
        </div>
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
       
        <div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="url"
              placeholder="Website URL"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Message"
            ></textarea>
            <button
              type="submit"
              className="btn w-full bg-green-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
