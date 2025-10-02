---

# 🚀 Personal Portfolio Website

A modern, responsive **portfolio website** built with **React, TypeScript, TailwindCSS, and shadcn/ui**.
It showcases my projects, skills, and contact details in an interactive and visually appealing way.

---

## ✨ Features

* ⚡ **Fast & Responsive** — Works smoothly across devices.
* 🎨 **Modern UI/UX** — Built with TailwindCSS and shadcn/ui components.
* 🌌 **Unique Design** — Includes glowing particles, custom cursor, and animated scroll effects.
* 📂 **Projects Showcase** — Highlights my featured work with tech stack badges.
* 📞 **Contact Form** — Integrated form with email functionality (via EmailJS).
* 🖼️ **Dynamic Sections** — About, Skills, Work, and Contact with smooth animations.

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Styling:** TailwindCSS, shadcn/ui
* **Icons:** Lucide React
* **Animation:** Framer Motion, Intersection Observer API
* **Deployment:** Vercel / Netlify (recommended)

---

## 📂 Project Structure

```bash
src/
 ├── assets/              # Images & static assets
 ├── components/
 │   ├── sections/        # Main sections (About, Skills, Work, Contact)
 │   ├── ui/              # Reusable UI components
 │   ├── Hero.tsx         # Hero section
 │   ├── Navbar.tsx       # Navigation bar
 │   └── ParticleBackground.tsx # Animated particles
 ├── hooks/               # Custom hooks
 ├── pages/               # Pages (if needed in future)
 ├── App.tsx              # Main App component
 ├── main.tsx             # Entry point
 └── index.css            # Global styles
```

---

## ⚙️ Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

---

## 📬 Contact Form Setup (EmailJS)

This project uses [EmailJS](https://www.emailjs.com/) for sending form submissions.

1. Create an EmailJS account.
2. Add a new service (Gmail/Outlook/etc.).
3. Create a template (e.g., `template_portfolio`).
4. Add your `service_id`, `template_id`, and `public_key` to your environment variables.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```


## 📝 License

This project is open-source under the [MIT License](LICENSE).

---
