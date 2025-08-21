"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

// Form Data Type
interface FormData {
  name: string;
  email: string;
  userType: string;
  message: string;
}

// Errors Type
interface FormErrors {
  name?: string;
  email?: string;
  userType?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    userType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const userTypeOptions = [
    { value: "prospective-teacher", label: "Prospective Teacher" },
    { value: "parent", label: "Parent" },
    { value: "student", label: "Student" },
    { value: "existing-user", label: "Existing User" },
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData?.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData?.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData?.userType) {
      newErrors.userType = "Please select your user type";
    }

    if (!formData?.message?.trim()) {
      newErrors.message = "Message is required";
    } else if (formData?.message?.length > 500) {
      newErrors.message = "Message must be 500 characters or less";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        userType: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const messageCharacterCount = formData?.message?.length;
  const isMessageLimitExceeded = messageCharacterCount > 500;

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg border border-border p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground mb-6">
          {"Thank you for contacting us. We'll get back to you within 24 hours."}
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground">
          {"Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData?.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("name", e.target.value)
          }
          error={errors?.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          value={formData?.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("email", e.target.value)
          }
          error={errors?.email}
          required
        />

        <Select
          label="I am a..."
          placeholder="Select your user type"
          options={userTypeOptions}
          value={formData?.userType}
          onChange={(value) => handleInputChange("userType", value.toString())}
          error={errors?.userType}
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            placeholder="Tell us how we can help you..."
            value={formData?.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("message", e.target.value)
            }
            rows={6}
            className={`w-full px-3 py-2 border rounded-lg resize-none transition-smooth focus:outline-none focus:ring-2 focus:ring-ring ${errors?.message
              ? "border-error focus:border-error"
              : "border-border focus:border-primary"
              }`}
          />
          <div className="flex justify-between items-center text-xs">
            <span
              className={`${errors?.message ? "text-error" : "text-muted-foreground"
                }`}
            >
              {errors?.message || ""}
            </span>
            <span
              className={`${isMessageLimitExceeded
                ? "text-error"
                : "text-muted-foreground"
                }`}
            >
              {messageCharacterCount}/500
            </span>
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
