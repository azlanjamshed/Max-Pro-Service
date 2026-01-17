import { useForm } from "react-hook-form";

const GetInTouchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className="w-full bg-[#ECEFF1] py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#2E4A6B] text-center">
          GET IN TOUCH
        </h2>
        <div className="w-20 h-0.5 bg-blue-500 mx-auto mt-4 mb-10"></div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#FAFAF8] rounded-lg shadow-md p-8 space-y-6"
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#2E4A6B] mb-1">
                NAME
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-[#2E4A6B] mb-1">
                PHONE
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Phone is required" })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#2E4A6B] mb-1">
                EMAIL
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-semibold text-[#2E4A6B] mb-1">
                SERVICE INTEREST
              </label>
              <select
                {...register("service", {
                  required: "Please select a service",
                })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a service</option>
                <option value="cleaning">Cleaning Services</option>
                <option value="security">Security Services</option>
                <option value="both">Both</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.service.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-[#2E4A6B] mb-1">
              MESSAGE
            </label>
            <textarea
              rows="5"
              {...register("message", { required: "Message is required" })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#2E4A6B] text-white py-3 rounded-md font-semibold tracking-wide hover:bg-[#243B57] transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouchForm;
