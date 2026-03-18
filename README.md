# Raj Bharati - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

Live link https://rajbharati2705.github.io/portfolio/

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations** - Enhanced user experience with Framer Motion
- **Modern UI** - Clean and professional design with Tailwind CSS
- **Fast Performance** - Built with Vite for lightning-fast development and builds
- **Type-Safe** - Built with TypeScript for better code quality

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
https://github.com/rajbharati2705/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📤 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📝 Customization

### Update Personal Information

Edit the content in the following component files:
- `src/components/Hero.tsx` - Name, title, contact info
- `src/components/About.tsx` - About me section
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project details and links
- `src/components/Skills.tsx` - Technical skills
- `src/components/Education.tsx` - Education details
- `src/components/Contact.tsx` - Contact information

### Update Colors

Modify colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6', // Change to your preferred color
      secondary: '#1E40AF',
    },
  },
}
```

## 📱 Sections

- **Hero** - Introduction with name and contact links
- **About** - Brief introduction and background
- **Experience** - Professional work experience
- **Projects** - Portfolio projects with descriptions
- **Skills** - Technical skills organized by category
- **Education** - Educational background
- **Contact** - Contact information and social links

- Email: rajbharati2705@gmail.com
- LinkedIn: [Raj Bharati](https://www.linkedin.com/in/raj-bharati)
- GitHub: [rajbharati2705](https://github.com/rajbharati2705)

---

Made with ❤️ by Raj Bharati
