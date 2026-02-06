# 🚀 Ansh Singh - Portfolio Website
![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark theme, and a fully functional contact form.
## ✨ Features
- 🎨 **Modern UI/UX** - Clean, dark-themed design with gradient accents
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📧 **Working Contact Form** - Integrated with Formspree
- 🔗 **Social Links** - GitHub, LinkedIn, Twitter integration
- ��� **Downloadable Resume** - One-click CV download
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🌙 **Dark Theme** - Easy on the eyes
## 🛠️ Tech Stack
| Technology | Purpose |
|------------|---------|
| React 18 | Frontend Framework |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Vite | Build Tool |
| Formspree | Contact Form Backend |
| Lucide React | Icons |
## 📁 Project Structure
```
portfolio/
├── public/
│   └── Ansh_Singh_Resume.pdf    # Your resume file
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Hero.tsx             # Hero section with intro
│   │   ├── About.tsx            # About me section
│   │   ├── Skills.tsx           # Skills & technologies
│   │   ├── Projects.tsx         # Portfolio projects
│   │   ├── Contact.tsx          # Contact form
│   │   └── Footer.tsx           # Footer with links
│   ├── utils/
│   │   └── cn.ts                # Utility functions
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```
## 🚀 Getting Started
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/anshsingh-4766/portfolio.git
   cd portfolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Add your resume**
   - Create a `public` folder in the root directory
   - Add your resume as `Ansh_Singh_Resume.pdf`
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Open in browser**
   ```
   http://localhost:5173
   ```
## 📦 Build for Production
```bash
npm run build
```
The build output will be in the `dist` folder.
## 🌐 Deployment
### Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
### Deploy to Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect settings
5. Click "Deploy"
### Deploy to GitHub Pages
1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```
## ⚙️ Customization
### Update Personal Info
- **Name & Title**: Edit `src/components/Hero.tsx`
- **About Me**: Edit `src/components/About.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`
### Update Social Links
All social links are in these files:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
### Change Colors
Edit `tailwind.config.js` to customize the color scheme.
### Update Contact Form
The contact form uses [Formspree](https://formspree.io/). To use your own:
1. Create an account at Formspree
2. Create a new form
3. Replace the form ID in `src/components/Contact.tsx`
## 📸 Screenshots
### Hero Section
![Hero](https://via.placeholder.com/800x400?text=Hero+Section)
### Skills Section
![Skills](https://via.placeholder.com/800x400?text=Skills+Section)
### Projects Section
![Projects](https://via.placeholder.com/800x400?text=Projects+Section)
### Contact Section
![Contact](https://via.placeholder.com/800x400?text=Contact+Section)
## 🤝 Connect with Me
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anshsingh-4766)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ansh-singh-6a2940334/)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/anshsingh4766)
## 📄 License
This project is open source and available under the [MIT License](LICENSE).
## 🙏 Acknowledgments
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Formspree](https://formspree.io/)
- [Vite](https://vitejs.dev/)
---
<p align="center">
  Made with ❤️ by <a href="https://github.com/anshsingh-4766">Ansh Singh</a>
</p>
