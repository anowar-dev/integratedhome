"use client";
import React, { useState } from "react";






type AlertType = "success" | "error";
interface Alert {
    type: AlertType;
    message: string;
}

interface FormDataState {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
}

const GetInTouchSection: React.FC = () => {
    // State for managing the alert.
    const [alert, setAlert] = useState<Alert | null>(null);
    // State for managing the form data.
    const [formData, setFormData] = useState<FormDataState>({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    // Loading state to show a spinner or disable the submit button.
    const [loading, setLoading] = useState<boolean>(false);

    // Handle input changes for controlled fields.
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Clear any previous alert.
        setAlert(null);
        // Set loading state to true.
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Set success alert and clear the form state.
                setAlert({
                    type: "success",
                    message: "Your message was sent successfully!",
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                });
            } else {
                setAlert({
                    type: "error",
                    message: "There was an error sending your message.",
                });
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setAlert({
                type: "error",
                message: "There was an error sending your message.",
            });
        } finally {
            // Turn off the loading state after the request is done.
            setLoading(false);
            // Optionally, auto-hide the alert after 5 seconds.
            setTimeout(() => setAlert(null), 5000);
        }
    };

    return (
        <section className="py-16 bg-secondary overflow-hidden" id="get-in-touch">
            <div className="container mx-auto px-4">
                {/* Section Title and Subtitle */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Get in touch about your next project
                    </h2>
                    <p className="text-lg text-light">
                        The team at integratedhome. can provide expert tailored controls solutions
                        for your building.
                        <br />
                        Send us a message here or give us a call!
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-light mb-2">
                                {/* // eslint-disable-next-line react/no-unescaped-entities */}
                                Whats your name? <span className="text-red-600 font-extrabold text-2xl">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-light mb-2">
                                Your email? <span className="text-red-600 font-extrabold text-2xl">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-light mb-2">
                                Best number to call you?
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-light mb-2">
                                Company name?
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Enter your company name"
                                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-light mb-2">
                                Let us know how to make your building work? <span className="text-red-600 font-extrabold text-2xl">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Describe your requirements..."
                                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full bg-primary text-secondary p-3 rounded font-semibold transition-colors ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"
                                    }`}
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </form>

                    {/* Alert Message */}
                    {alert && (
                        <div
                            className={`mt-4 p-4 rounded text-center font-medium ${alert.type === "success"
                                ? "bg-green-200 text-green-800"
                                : "bg-red-200 text-red-800"
                                }`}
                        >
                            {alert.message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;
