import React, { useState, ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "./FormField";

// Zod Schemas for each form
const RegisterSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  isMember: z.enum(['Yes', 'No']),
  branch: z.string().optional(),
  location: z.string().optional(),
});

const TestimoniesSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  testimony: z.string().min(1, 'Testimony is required'),
  canShare: z.enum(['Yes', 'No']),
});

const RequestPrayerSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email('Invalid email address').optional(),
  prayerRequest: z.string().min(1, 'Prayer Request is required'),
  urgency: z.enum(['Urgent', 'Moderate', 'Not Urgent']),
});

const FirstTimeWorshipperSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phoneNumber: z.string().min(1, 'Phone Number is required'),
  howHeard: z.enum(['Friend/Family', 'Social Media', 'Website', 'Other']),
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
              placeholder="joyanyako@kol"
              type="email"
              name="email"
              register={register}
              error={errors.email?.message}
            />
          </div>
        </div>
        <div className="flex space-x-4">
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
        <div className="flex space-x-4">
          <div className="flex-1">
            <FormField
              label="If yes, what branch / campus?"
              placeholder="Select branch"
              options={["Select branch"]}
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
    <div className="p-4">
      <div className="">
      <h1 className="text-2xl font-bold text-center mb-6">Forms</h1>

      <div className="flex justify-around border-b mb-6">
        {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 text-sm font-medium ${
          activeTab === tab
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-600"
          } hover:text-purple-600 transition-colors`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
        ))}
      </div>

      <div className="max-w-full sm:w-[600px] mx-auto h-auto sm:h-[500px]">
        <div className="transition-opacity duration-300">
        {activeTab === "Register" && (
          <RegisterForm
          title="Welcome! Thank you for your interest in IAMS 2025. Please fill out the form below with accurate details."
          onSubmit={handleSubmit("Register Form")}
          />
        )}
        {activeTab === "Testimonies" && (
          <TestimoniesForm
          title="Share your testimony with us! We’d love to hear how God has worked in your life."
          onSubmit={handleSubmit("Testimonies Form")}
          />
        )}
        {activeTab === "Request Prayer" && (
          <RequestPrayerForm
          title="We’re here to pray for you! Please provide your prayer request details below."
          onSubmit={handleSubmit("Request Prayer Form")}
          />
        )}
        {activeTab === "First Time Worshipper" && (
          <FirstTimeWorshipperForm
          title="Welcome, first-time worshipper! We’re excited to have you with us. Please fill out the form below."
          onSubmit={handleSubmit("First Time Worshipper Form")}
          />
        )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProgramForm;
