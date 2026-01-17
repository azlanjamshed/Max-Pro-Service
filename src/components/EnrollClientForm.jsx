import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";

const EnrollClientForm = () => {
  const { register, control, watch, handleSubmit } = useForm({
    defaultValues: {
      sites: [{}],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sites",
  });

  const singleSite = watch("singleSite");
  const rateType = watch("rateType");

  const onSubmit = (data) => {
    console.log("ADMIN FORM DATA:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow space-y-12"
    >
      {/* ================= CLIENT ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Add Client</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            {...register("clientName")}
            placeholder="Client Name"
            className="input"
          />
          <input {...register("abn")} placeholder="ABN" className="input" />
          <input {...register("phone")} placeholder="Phone" className="input" />
          <input {...register("email")} placeholder="Email" className="input" />
          <input
            {...register("billingAddress")}
            placeholder="Billing Address"
            className="input"
          />
          <input
            {...register("remittanceEmail")}
            placeholder="Remittance Email"
            className="input"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Upload Contract (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            {...register("contract")}
          />
        </div>

        <div className="mt-6 flex gap-6">
          <label>
            <input type="radio" value="yes" {...register("singleSite")} />{" "}
            Single Site
          </label>
          <label>
            <input type="radio" value="no" {...register("singleSite")} />{" "}
            Multiple Sites
          </label>
        </div>
      </section>

      {/* ================= SITES ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Sites</h2>

        {fields.map((field, index) => (
          <div key={field.id} className="border p-6 rounded-lg mb-6 space-y-4">
            <h3 className="font-semibold">Site {index + 1}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register(`sites.${index}.name`)}
                placeholder="Site Name"
                className="input"
              />
              <input
                {...register(`sites.${index}.address`)}
                placeholder="Site Address"
                className="input"
              />
              <input
                {...register(`sites.${index}.phone`)}
                placeholder="Site Phone"
                className="input"
              />
              <input
                {...register(`sites.${index}.email`)}
                placeholder="Site Email"
                className="input"
              />
              <input
                type="date"
                {...register(`sites.${index}.startDate`)}
                className="input"
              />
              <input
                type="date"
                {...register(`sites.${index}.endDate`)}
                className="input"
              />
              <input
                {...register(`sites.${index}.contactName`)}
                placeholder="Contact Person"
                className="input"
              />
              <input
                {...register(`sites.${index}.contactMobile`)}
                placeholder="Contact Mobile"
                className="input"
              />
              <input
                {...register(`sites.${index}.contactEmail`)}
                placeholder="Contact Email"
                className="input"
              />
            </div>

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500"
              >
                Remove Site
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => append({})}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Site
        </button>
      </section>

      {/* ================= BILLING ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Billing</h2>

        <select {...register("billingFrequency")} className="input w-60">
          <option value="">Select Frequency</option>
          <option>Weekly</option>
          <option>Fortnightly</option>
          <option>Monthly</option>
        </select>
      </section>

      {/* ================= RATE ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Rate Structure</h2>

        <div className="flex gap-6 mb-6">
          <label>
            <input type="radio" value="flat" {...register("rateType")} /> Flat
          </label>
          <label>
            <input type="radio" value="hourly" {...register("rateType")} />{" "}
            Hourly
          </label>
          <label>
            <input type="radio" value="variable" {...register("rateType")} />{" "}
            Variable
          </label>
        </div>

        {rateType === "flat" && (
          <input
            {...register("flatRate")}
            placeholder="Flat Rate $"
            className="input w-60"
          />
        )}

        {rateType === "hourly" && (
          <div className="flex gap-4">
            <input
              {...register("hourlyRate")}
              placeholder="Rate $"
              className="input"
            />
            <input
              {...register("hours")}
              placeholder="Hours"
              className="input"
            />
          </div>
        )}

        {rateType === "variable" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Mon–Fri Day $"
              {...register("mfDay")}
              className="input"
            />
            <input
              placeholder="Mon–Fri Night $"
              {...register("mfNight")}
              className="input"
            />
            <input
              placeholder="Saturday $"
              {...register("sat")}
              className="input"
            />
            <input
              placeholder="Sunday $"
              {...register("sun")}
              className="input"
            />
            <input
              placeholder="Public Holiday $"
              {...register("ph")}
              className="input"
            />
          </div>
        )}
      </section>

      {/* ================= SUBMIT ================= */}
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white rounded text-lg"
      >
        Submit Client
      </button>
    </form>
  );
};

export default EnrollClientForm;
