"use client";

import { useState } from "react";

export default function PropertyInquiryForm() {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  const [success, setSuccess] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-yellow-500"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
        className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-yellow-500"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-yellow-500"
      />

      <textarea
        rows={5}
        placeholder="Tell us about your interest in this property..."
        value={formData.message}
        onChange={(e) =>
          setFormData({
            ...formData,
            message: e.target.value,
          })
        }
        className="w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 outline-none transition focus:border-yellow-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-yellow-500 px-6 py-4 font-medium text-black transition hover:bg-yellow-400 disabled:opacity-50"
      >
        {loading
          ? "Sending..."
          : "Request Information"}
      </button>

      {success && (
        <p className="text-sm text-green-400">
          Inquiry submitted successfully.
        </p>
      )}
    </form>
  );
}