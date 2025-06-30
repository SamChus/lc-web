import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "./FormField";

// Zod Schemas for each form
const RegisterSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  isMember: z.enum(["Yes", "No"]),
  branch: z.string().optional(),
  location: z.string().optional(),
  program: z.enum(["IAMS", "APOSTOLIC CONVENTION", "GOSHEN", "IMS"]),
});

const TestimoniesSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  testimony: z.string().min(1, "Testimony is required"),
  canShare: z.enum(["Yes", "No"]),
});

const RequestPrayerSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  prayerRequest: z.string().min(1, "Prayer Request is required"),
  urgency: z.enum(["Urgent", "Moderate", "Not Urgent"]),
});

const FirstTimeWorshipperSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  howHeard: z.enum(["Friend/Family", "Social Media", "Website", "Other"]),
  specialRequests: z.string().optional(),
});

// Types for form data
type RegisterFormData = z.infer<typeof RegisterSchema>;
type TestimoniesFormData = z.infer<typeof TestimoniesSchema>;
type RequestPrayerFormData = z.infer<typeof RequestPrayerSchema>;
type FirstTimeWorshipperFormData = z.infer<typeof FirstTimeWorshipperSchema>;

// Generic Form Props Interface
interface FormProps<T> {
  title: string;
  onSubmit: SubmitHandler<T>;
}

// Register Form Component
const RegisterForm: React.FC<FormProps<RegisterFormData>> = ({
  title,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  // result() // Removed because 'result' is not a function

  // const form_url =
  //   "https://docs.google.com/forms/d/e/1FAIpQLSeYQSt1AKHeHAuiWxId5AxU5PbrtPZrJ19_05L6HoZOW2JxIA/formResponse?usp=pp_url&entry.784470093=2025-04-01&entry.716985034=Samuel+Chukwuma&entry.1587691209=samuelchigo55@gmail.com&entry.512536604=0w19eu9w&entry.352506208=Yes&entry.1080948093=Ph+Branch&entry.1430947383=nil";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-center text-gray-700 mb-6">{title}</p>
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <FormField
              label="Full Name"
              placeholder="Full Name"
              name="fullName"
              register={register}
              error={errors.fullName?.message}
            />
          </div>
          <div className="flex-1">
            <FormField
              label="Email Address"
              placeholder="joyanyako@kol"
              type="email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <FormField
              label="Phone Number"
              placeholder="+234"
              name="phoneNumber"
              register={register}
              error={errors.phoneNumber?.message}
            />
          </div>
          <div className="flex-1">
            <FormField
              label="Are you a member of LightWorld City?"
              placeholder="Yes/No"
              options={["Yes/No", "Yes", "No"]}
              name="isMember"
              register={register}
              error={errors.isMember?.message}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <FormField
              label="If yes, what branch / campus?"
              placeholder="Select branch"
              options={[
                "Select branch",
                "Port Harcourt",
                "Umuahia",
                "Enugu",
                "Asaba",
                "Agbor",
                "Abakaliki",
              ]}
              name="branch"
              register={register}
              error={errors.branch?.message}
            />
          </div>
          <div className="flex-1">
            <FormField
              label="If no, kindly fill in where you are located"
              placeholder="City & State"
              name="location"
              register={register}
              error={errors.location?.message}
            />
          </div>
        </div>
        <div className="flex-1">
          <FormField
            label="Which program are you registering for?"
            placeholder="Select program"
            options={[
              "Select program",
              "IAMS",
              "APOSTOLIC CONVENTION",
              "GOSHEN",
              "IMS",
            ]}
            name="program"
            register={register}
            error={errors.program?.message}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Register Now
        </button>
      </div>
    </form>
  );
};

// Testimonies Form Component
const TestimoniesForm: React.FC<FormProps<TestimoniesFormData>> = ({
  title,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestimoniesFormData>({
    resolver: zodResolver(TestimoniesSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-center text-gray-700 mb-6">{title}</p>
      <div className="space-y-4">
        <FormField
          label="Full Name"
          placeholder="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName?.message}
        />
        <FormField
          label="Email Address"
          placeholder="your.email@example.com"
          type="email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <FormField
          label="Your Testimony"
          placeholder="Share your testimony here..."
          type="textarea"
          rows={5}
          name="testimony"
          register={register}
          error={errors.testimony?.message}
        />
        <FormField
          label="Can we share your testimony publicly?"
          placeholder="Yes/No"
          options={["Yes/No", "Yes", "No"]}
          name="canShare"
          register={register}
          error={errors.canShare?.message}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit Testimony
        </button>
      </div>
    </form>
  );
};

// Request Prayer Form Component
const RequestPrayerForm: React.FC<FormProps<RequestPrayerFormData>> = ({
  title,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestPrayerFormData>({
    resolver: zodResolver(RequestPrayerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-center text-gray-700 mb-6">{title}</p>
      <div className="space-y-4">
        <FormField
          label="Full Name (Optional)"
          placeholder="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName?.message}
        />
        <FormField
          label="Email Address (Optional)"
          placeholder="your.email@example.com"
          type="email"
          name="email"
          register={register}
          error={errors.email?.message}
        />
        <FormField
          label="Prayer Request"
          placeholder="Share your prayer request here..."
          type="textarea"
          rows={5}
          name="prayerRequest"
          register={register}
          error={errors.prayerRequest?.message}
        />
        <FormField
          label="Urgency"
          placeholder="Select urgency"
          options={["Select urgency", "Urgent", "Moderate", "Not Urgent"]}
          name="urgency"
          register={register}
          error={errors.urgency?.message}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit Prayer Request
        </button>
      </div>
    </form>
  );
};

// First Time Worshipper Form Component
const FirstTimeWorshipperForm: React.FC<
  FormProps<FirstTimeWorshipperFormData>
> = ({ title, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstTimeWorshipperFormData>({
    resolver: zodResolver(FirstTimeWorshipperSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-center text-gray-700 mb-6">{title}</p>
      <div className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <FormField
              label="Full Name"
              placeholder="Full Name"
              name="fullName"
              register={register}
              error={errors.fullName?.message}
            />
          </div>
          <div className="flex-1">
            <FormField
              label="Email Address"
              placeholder="your.email@example.com"
              type="email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
          </div>
        </div>
        <FormField
          label="Phone Number"
          placeholder="+234"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber?.message}
        />
        <FormField
          label="How did you hear about us?"
          placeholder="Select an option"
          options={[
            "Select an option",
            "Friend/Family",
            "Social Media",
            "Website",
            "Other",
          ]}
          name="howHeard"
          register={register}
          error={errors.howHeard?.message}
        />
        <FormField
          label="Any special requests or needs?"
          placeholder="Let us know if you have any special requests..."
          type="textarea"
          rows={3}
          name="specialRequests"
          register={register}
          error={errors.specialRequests?.message}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

// Main App Component with Tabs
const ProgramForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Register");

  const tabs: string[] = [
    "Register",
    "Testimonies",
    "Request Prayer",
    "First Time Worshipper",
  ];

  const handleSubmit = (formName: string) => (data: any) => {
    console.log(`${formName} submitted!`, data);
    alert(`${formName} submitted!`);
  };

  return (
    <div className="">
      {/* Header Section with Black Background */}

      {/* Form Container */}
      <div className="mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Please provide your details
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-3 px-4 text-sm font-medium rounded-t-lg transition-all duration-200 border-b-2 ${
                  activeTab === tab
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="w-full">
            <div className="transition-all duration-300 ease-in-out">
              {activeTab === "Register" && (
                <div className="animate-fadeIn">
                  <RegisterForm
                    title="Welcome! Thank you for your interest. Please fill out the form below with accurate details."
                    onSubmit={handleSubmit("Register Form")}
                  />
                </div>
              )}
              {activeTab === "Testimonies" && (
                <div className="animate-fadeIn">
                  <TestimoniesForm
                    title="Share your testimony with us! We'd love to hear how God has worked in your life."
                    onSubmit={handleSubmit("Testimonies Form")}
                  />
                </div>
              )}
              {activeTab === "Request Prayer" && (
                <div className="animate-fadeIn">
                  <RequestPrayerForm
                    title="We're here to pray for you! Please provide your prayer request details below."
                    onSubmit={handleSubmit("Request Prayer Form")}
                  />
                </div>
              )}
              {activeTab === "First Time Worshipper" && (
                <div className="animate-fadeIn">
                  <FirstTimeWorshipperForm
                    title="Welcome, first-time worshipper! We're excited to have you with us. Please fill out the form below."
                    onSubmit={handleSubmit("First Time Worshipper Form")}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramForm;
