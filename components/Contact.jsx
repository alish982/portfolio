"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { profile, projectTypes, budgetRanges } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  projectType: projectTypes[0],
  // budget: budgetRanges[0],
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) {
    errors.message = "Please add a short message.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please share a few more details (20+ characters).";
  }
  return errors;
}

const fieldClass =
  "w-full rounded-md border border-hairline-light dark:border-hairline-dark bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-brass placeholder:text-muted-light dark:placeholder:text-muted-dark";

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error();
      }

      setStatus("success");
      setValues(initialForm);
    } catch {
      setStatus("error");
    }
  };
  return (
    <section
      id="contact"
      className="section-px py-24 md:py-32 border-t border-hairline-light dark:border-hairline-dark"
    >
      <div className="mx-auto max-w-content grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Have a project in mind?"
            description="Tell me a little about it and I'll reply within one business day."
          />
          <Reveal delay={0.1} className="mt-10 space-y-3 text-sm">
            <p className="text-muted-light dark:text-muted-dark">
              Prefer email?
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-display text-xl hover:text-brass transition-colors"
            >
              {profile.email}
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="Jordan Blake"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    className={fieldClass}
                    placeholder="jordan@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="New product dashboard rebuild"
                  aria-invalid={!!errors.subject}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium"
                  >
                    Project type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={values.projectType}
                    onChange={handleChange}
                    className={`${fieldClass} appearance-none`}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div>
                  <label htmlFor="budget" className="mb-2 block text-sm font-medium">
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={values.budget}
                    onChange={handleChange}
                    className={`${fieldClass} appearance-none`}
                  >
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div> */}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Tell me about your timeline, goals, and anything else useful."
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-5">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p
                      key="success"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400"
                    >
                      <CheckCircle2 size={16} /> Message sent — I&apos;ll be in
                      touch soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm text-red-500"
                    >
                      <AlertCircle size={16} /> Something went wrong — please
                      try again.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
