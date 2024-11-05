'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) throw new Error('Failed to send message');
      
      setSubmitSuccess(true);
      reset(); // Clear form
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2">

      <main className="flex flex-col items-center justify-center my-auto max-w-7xl mx-4 p-8 rounded-lg bg-lcars-black border-4 border-lcars-lilac w-2/3 mt-20">

          <h1 className="text-4xl font-lcars-bold font-bold mb-6 text-lcars-orange">
            Communications Protocol
          </h1>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-lcars-tngC60/50 border-2 border-lcars-tngC61 rounded-lg text-white">
              Message sent successfully!
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-lcars-raC69/50 border-2 border-lcars-raC68 rounded-lg text-white">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            <div className="space-y-2">
              <label className="block text-lcars-gold font-lcars">
                Name
              </label>
              <input
                {...register("name")}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 bg-lcars-black border-2 ${
                  errors.name ? 'border-lcars-mars' : 'border-lcars-gray'
                } rounded-lg text-lcars-text font-lcars focus:border-lcars-amber focus:outline-none transition-colors`}
              />
              {errors.name && (
                <p className="text-lcars-raC68 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-lcars-gold font-lcars">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 bg-lcars-black border-2 ${
                  errors.email ? 'border-lcars-mars' : 'border-lcars-gray'
                } rounded-lg text-lcars-text font-lcars focus:border-lcars-amber focus:outline-none transition-colors`}
              />
              {errors.email && (
                <p className="text-lcars-raC68 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-lcars-gold font-lcars">
                Message
              </label>
              <textarea
                {...register("message")}
                disabled={isSubmitting}
                rows={6}
                className={`w-full px-4 py-2 bg-lcars-black border-2 ${
                  errors.message ? 'border-lcars-mars' : 'border-lcars-gray'
                } rounded-lg text-lcars-text font-lcars focus:border-lcars-amber focus:outline-none transition-colors`}
              />
              {errors.message && (
                <p className="text-lcars-raC68 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-full font-lcars bg-lcars-sunflower hover:bg-lcars-green text-black
                ${isSubmitting ? 'bg-lcars-gray' : 'bg-lcars-orange hover:bg-lcars-orange/70'}
                transition-colors duration-300`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-lcars-green rounded-full animate-ping" />
                  <span>Transmitting...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        
      </main>
    </div>
  );
}