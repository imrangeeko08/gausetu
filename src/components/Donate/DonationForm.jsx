"use client";
import { useState } from "react";
import Image from "next/image";

const DonationForm = () => {
    const [form, setForm] = useState({
        fullName: "",
        mobile: "",
        email: "",
        amount: "",
        transactionId: "",
        note: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Donation Data:", form);
    };

    return (
        <section className="w-full flex flex-col items-center py-10 px-4 md:px-10">
            {/* Main Container */}
            <div className=" bg-gray-50 rounded-2xl shadow-sm w-full  flex flex-col lg:flex-row gap-6 p-6 md:p-10">
                {/* Left - Form */}
                <div className="flex-1 w-1/2">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                        🙏 Complete Your Donation Details
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Thank you for supporting GauSetu. Please help us verify your
                        donation and send you a heartfelt receipt.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Your Full Name*
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Enter Your Full Name Here"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Your Mobile No.*
                            </label>
                            <input
                                type="text"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                placeholder="Enter Your WhatsApp Mobile Number Here"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Your Email Address*
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email Address Here"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Your Donation Amount*
                            </label>
                            <input
                                type="number"
                                name="amount"
                                value={form.amount}
                                onChange={handleChange}
                                placeholder="Please enter the donation amount here"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Your Transaction ID*
                            </label>
                            <input
                                type="text"
                                name="transactionId"
                                value={form.transactionId}
                                onChange={handleChange}
                                placeholder="Enter Your Transaction ID Here"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                Personal Note
                            </label>
                            <textarea
                                name="note"
                                value={form.note}
                                onChange={handleChange}
                                placeholder="Short description of the seva or donation"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                rows="3"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
                        >
                            Confirm Donation
                        </button>
                    </form>
                </div>

                {/* Right - QR Code */}
                <div className="w-1/2 flex-1 rounded-xl flex flex-col items-center justify-center p-6">
                    <h3 className="text-lg sm:text-[24px] font-semibold mb-2">Scan to Donate Instantly</h3>
                    <p className="text-[#696969] text-center text-sm sm:text-base mx-auto mb-4">
                        Use any UPI app (PhonePe, Google Pay, Paytm, etc.) to scan this code
                        and support Shree Nath Gaushala.
                    </p>
                    <div className="rounded-xl py-6 w-full mb-4 bg-white p-6">
                        <div className="relative w-full h-[550px]">
                            <Image
                                src="/images/qr-code.svg"
                                alt="Donation QR Code"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed text-center">
                        ⚠️ <span className="font-semibold">Note:</span> Please complete your
                        donation via UPI before submitting this form. If the{" "}
                        <span className="font-semibold">Transaction ID</span> is not
                        submitted, our team will manually verify based on amount and time.
                        Receipt will only be issued after{" "}
                        <span className="font-semibold">verification</span>. No refunds for
                        incorrect or failed UPI transactions.
                    </p>
                </div>
            </div>

            {/* Footer Message */}
            <div className="text-center mt-10 max-w-4xl">
                <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
                    Your Seva, Their Shelter — Because Every Drop of Kindness Counts
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    At GauSetu, every donation is more than just money — it’s a bowl of
                    fresh fodder, a life-saving medicine, or a warm space for a Gaumata to
                    rest.
                    <br />
                    When you give with love, you’re not just helping cows — you’re becoming
                    part of a centuries-old dharmic responsibility, once shouldered by our
                    ancestors and now carried forward by us all.
                </p>
                <p className="text-gray-800 font-medium">
                    Your kindness becomes their care. Your support becomes our strength.
                </p>
            </div>
        </section>
    );
};

export default DonationForm;
