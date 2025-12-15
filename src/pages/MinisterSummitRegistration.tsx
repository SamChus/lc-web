import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "../components/FormField";

// Zod Schema for Minister Summit Registration
const MinisterSummitSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    ministry: z.string().optional(),
    location: z.string().optional(),
    yearsInMinistry: z.string().optional(),
    expectation: z.string().optional(),
});

type MinisterSummitFormData = z.infer<typeof MinisterSummitSchema>;

const MinisterSummitRegistration: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<MinisterSummitFormData>({
        resolver: zodResolver(MinisterSummitSchema),
    });

    const onSubmit: SubmitHandler<MinisterSummitFormData> = (data) => {
        console.log("Minister Summit Registration submitted!", data);
        alert("Thank you for registering for the Intentional Minister Summit!");
        reset();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9C1FDB] to-[#B22E7B] mb-4">
                        Intentional Ministers' Summit (IMS) 2026
                    </h1>
                    <p className="text-xl text-gray-700 mb-2">
                        Register Now for a Transformative Experience
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join us for powerful sessions, divine encounters, and strategic teachings
                        designed to equip and empower ministers for Kingdom impact.
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        Registration Form
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Personal Information Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Personal Information
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                    label="Full Name *"
                                    placeholder="Enter your full name"
                                    name="fullName"
                                    register={register}
                                    error={errors.fullName?.message}
                                />

                                <FormField
                                    label="Email Address *"
                                    placeholder="your.email@example.com"
                                    type="email"
                                    name="email"
                                    register={register}
                                    error={errors.email?.message}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <FormField
                                    label="Phone Number *"
                                    placeholder="+234"
                                    name="phoneNumber"
                                    register={register}
                                    error={errors.phoneNumber?.message}
                                />

                                <FormField
                                    label="Location / City"
                                    placeholder="City & State"
                                    name="location"
                                    register={register}
                                    error={errors.location?.message}
                                />
                            </div>
                        </div>

                        {/* Ministry Information Section */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
                                Ministry Information
                            </h3>

                            <FormField
                                label="Ministry / Church Name"
                                placeholder="Enter your ministry or church name"
                                name="ministry"
                                register={register}
                                error={errors.ministry?.message}
                            />

                            <FormField
                                label="Years in Ministry"
                                placeholder="How many years have you been in ministry?"
                                options={[
                                    "Select years",
                                    "Less than 1 year",
                                    "1-3 years",
                                    "4-7 years",
                                    "8-15 years",
                                    "More than 15 years"
                                ]}
                                name="yearsInMinistry"
                                register={register}
                                error={errors.yearsInMinistry?.message}
                            />

                            <FormField
                                label="What are your expectations for this summit?"
                                placeholder="Share what you hope to gain from attending..."
                                type="textarea"
                                rows={4}
                                name="expectation"
                                register={register}
                                error={errors.expectation?.message}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#9C1FDB] to-[#B22E7B] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-purple-300"
                        >
                            Register Now
                        </button>

                        {/* Additional Information */}
                        <p className="text-center text-sm text-gray-500 mt-4">
                            By registering, you agree to receive updates about the summit via email and SMS.
                        </p>
                    </form>
                </div>

                {/* Event Details Card */}
                <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Details</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                        <div>
                            <p className="font-semibold text-gray-700">Date:</p>
                            <p>To be announced</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Venue:</p>
                            <p>To be announced</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Time:</p>
                            <p>Full day event</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Contact:</p>
                            <p>info@lightworldcity.org</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinisterSummitRegistration;
