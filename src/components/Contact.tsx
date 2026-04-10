import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Loader,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xqedzova", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "anshsingh4766@gmail.com", href: "mailto:anshsingh4766@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MapPin, label: "Location", value: "India", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/anshsingh-4766", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ansh-singh-6a2940334/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/anshsingh4766", label: "Twitter" },
  ];

  return (
    <section id="contact" className="pb-24 pt-20 sm:pt-24">
      <div className="section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Let’s Connect</h2>
          <p className="muted mx-auto mt-4 max-w-2xl">
            I am open to internship opportunities, freelance work, and meaningful collaborations.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-200 bg-white/85 p-7"
          >
            <h3 className="text-xl font-semibold text-slate-900">Contact Information</h3>
            <p className="mt-3 text-sm text-slate-600">Prefer direct communication? Reach out through the channels below.</p>

            <div className="mt-6 space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50/90 px-4 py-3 transition-colors hover:border-slate-900"
                >
                  <div className="rounded-full bg-slate-900 p-2 text-white">
                    <info.icon size={15} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{info.label}</p>
                    <p className="text-sm font-medium text-slate-800">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-300 bg-white p-3 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="glass-surface rounded-[2rem] p-7"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-slate-900"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-slate-900"
                />
              </div>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-slate-900"
              />

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your idea..."
                className="w-full resize-none rounded-[1.6rem] border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-slate-900"
              />

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  <CheckCircle size={16} />
                  Message sent successfully.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.01 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.99 }}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white ${
                  status === "sending" ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                {status === "sending" ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
