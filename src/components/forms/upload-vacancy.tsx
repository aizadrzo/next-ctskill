"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FileUpload } from "@/components/ui/file-upload";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronRight } from "lucide-react";

const uploadVacancySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  telephone: z.string().min(1, "Telephone number is required"),
  company: z.string().min(1, "Company is required"),
  yourRole: z.string().min(1, "Your role is required"),
  jobDetailsFile: z.any().refine((files) => files && files.length > 0, {
    message: "Please upload job details",
  }),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type UploadVacancyData = z.infer<typeof uploadVacancySchema>;

interface UploadVacancyProps {
  className?: string;
}

export function UploadVacancy({ className }: UploadVacancyProps) {
  const form = useForm<UploadVacancyData>({
    resolver: zodResolver(uploadVacancySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      company: "",
      yourRole: "",
      jobDetailsFile: null,
      agreeToPrivacy: false,
    },
  });

  const handleSubmit = (data: UploadVacancyData) => {
    // Handle form submission internally
    console.log("Vacancy Upload submitted:", data);

    // Here you can add your form submission logic:
    // - Send data to API endpoint
    // - Show success message
    // - Handle errors
    // - Redirect user

    // Reset form after successful submission
    form.reset();
  };

  const handleFileSelect = (files: File[]) => {
    form.setValue("jobDetailsFile", files);
  };

  return (
    <div
      className={`bg-neutral-white-100 border border-neutral-black-30 rounded-lg p-10 ${className}`}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="border-b border-primary-120 pb-4">
            <h3 className="text-xl font-semibold text-neutral-black-100">
              Upload vacancy
            </h3>
          </div>
          <p className="text-base text-neutral-black-100">
            Got a role to fill? Upload the job details here and we'll help you
            secure the best talent available.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      FIRST NAME*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-9 bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      LAST NAME*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-9 bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      EMAIL*
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="h-9 bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      TELEPHONE NUMBER*
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...field}
                        className="h-9 bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Company and Role Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      COMPANY*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-9 bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="yourRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      YOUR ROLE*
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="h-9 bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-1"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* File Upload Field */}
            <FormField
              control={form.control}
              name="jobDetailsFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold text-neutral-black-50">
                    UPLOAD JOB DETAILS*
                  </FormLabel>
                  <FormControl>
                    <FileUpload
                      onFileSelect={handleFileSelect}
                      accept={{
                        "application/pdf": [".pdf"],
                        "application/msword": [".doc"],
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                          [".docx"],
                      }}
                      maxFiles={1}
                      maxSize={5 * 1024 * 1024} // 5MB
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="agreeToPrivacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-xs font-normal text-neutral-black-100">
                        By submitting I agree to the privacy policy.*
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                variant="default"
                size="lg"
                type="submit"
                className="h-10 bg-primary-100 text-neutral-white-100 px-4 pr-1"
              >
                <span>Submit</span>
                <div className="p-2 bg-neutral-white-100 rounded-md">
                  <ChevronRight className="h-4 w-4" color="#450932" />
                </div>
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
