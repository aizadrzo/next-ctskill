"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronRight } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  telephone: z.string().min(1, "Telephone number is required"),
  company: z.string().optional(),
  howCanWeHelp: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

export function ContactForm({ onSubmit, className }: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      company: "",
      howCanWeHelp: "",
      message: "",
      agreeToPrivacy: false,
    },
  });

  const handleSubmit = (data: ContactFormData) => {
    onSubmit?.(data);
    form.reset();
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
              Get in touch with us
            </h3>
          </div>
          <p className="text-base text-neutral-black-100">
            Use this form to send us a message, and we'll get back to you
            shortly.
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

            {/* Additional Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      COMPANY
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
                name="howCanWeHelp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-semibold text-neutral-black-50">
                      HOW CAN WE HELP?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-9 w-full bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-1">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-neutral-white-100 border-neutral-black-30">
                        <SelectItem value="apprenticeships">
                          Apprenticeships
                        </SelectItem>
                        <SelectItem value="online-courses">
                          Online Courses
                        </SelectItem>
                        <SelectItem value="recruitment">Recruitment</SelectItem>
                        <SelectItem value="general-inquiry">
                          General Inquiry
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-semibold text-neutral-black-50">
                    MESSAGE*
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      {...field}
                      className="bg-neutral-white-100 border-neutral-black-30 rounded px-4 py-2"
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
                size="md"
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
