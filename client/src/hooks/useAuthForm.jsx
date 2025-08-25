import { useState } from "react";

export default function useAuthForm(submitForm, initialFields = {}) {
  const [formData, setFormData] = useState(initialFields);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    setError("");

    try {
      await submitForm(formData);
    } catch (err) {
      setError(err?.message || "Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
}