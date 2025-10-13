import Image from "next/image";
import { PageHeader } from "@/components/marketing/page-header";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact Us" }];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />

      {/* Contact Form with Sidebar */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Reach Out to Us */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-100">
                  REACH OUT TO US
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-6 text-primary-100" />
                    <span className="text-base text-neutral-black-100">
                      0115 959 9544
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-6 text-primary-100" />
                    <span className="text-base text-neutral-black-100">
                      info@ctskills.co.uk
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-6 text-primary-100 mt-1" />
                    <span className="text-base text-neutral-black-100">
                      The Quadrant, Nuart Road
                      <br />
                      Beeston, Nottingham, NG9 2NH
                    </span>
                  </div>
                </div>
              </div>

              {/* Connect with Us */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-100">
                  CONNECT WITH US
                </h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">FB</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">LI</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">IG</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">YT</span>
                  </div>
                  <div className="w-8 h-8 bg-neutral-black-10 rounded flex items-center justify-center">
                    <span className="text-xs text-neutral-black-50">TT</span>
                  </div>
                </div>
              </div>

              {/* Visit Us */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary-100">
                  VISIT US
                </h3>
                <div className="w-full h-[307px] bg-neutral-black-10 rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/map-placeholder.png"
                    alt="Map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="text-sm font-medium text-neutral-black-100">
                      CT Skills
                    </div>
                    <div className="text-xs text-primary-100">
                      View larger map
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-white-100 border border-neutral-black-30 rounded-lg p-8 lg:p-10">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col gap-4">
                    <div className="border-b border-primary-120 pb-4">
                      <h3 className="text-xl lg:text-2xl font-semibold text-neutral-black-100">
                        Get in touch with us
                      </h3>
                    </div>
                    <p className="text-base text-neutral-black-100 mt-2">
                      Fill out the form below to contact us today.
                      Alternatively, you can call us or send an email. We're
                      also available for an online video call, so just let us
                      know what works best for you!
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-black-50">
                          FIRST NAME*
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-black-50">
                          LAST NAME*
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-black-50">
                          EMAIL*
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-black-50">
                          TELEPHONE NUMBER*
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100"
                        />
                      </div>
                    </div>

                    {/* Additional Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-black-50">
                          COMPANY
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-black-50">
                          HOW CAN WE HELP?
                        </label>
                        <select className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100">
                          <option>Select an option</option>
                          <option>Apprenticeships</option>
                          <option>Online Courses</option>
                          <option>Recruitment</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-black-50">
                        MESSAGE*
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 border border-neutral-black-30 rounded bg-neutral-white-100"
                      />
                    </div>

                    {/* Submit Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="privacy" />
                        <label
                          htmlFor="privacy"
                          className="text-sm text-neutral-black-100"
                        >
                          By submitting I agree to the privacy policy.*
                        </label>
                      </div>
                      <Button variant="default" size="md">
                        <span>Submit</span>
                        <div className="p-2 bg-neutral-white-100 rounded-md">
                          <ChevronRight className="h-4 w-4" color="#450932" />
                        </div>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
