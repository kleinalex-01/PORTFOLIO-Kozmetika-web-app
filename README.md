# 🌸 Healthy Skin Kozmetika - Beauty Salon Website

A modern, responsive website for Healthy Skin Kozmetika, a professional beauty salon located in Tihany, Hungary. Built with React, TypeScript, and modern web technologies to provide an elegant and user-friendly experience for clients seeking premium cosmetic services.

## 🎯 Project Overview

This website serves as the digital presence for Healthy Skin Kozmetika, offering:
- **Service showcase** with detailed descriptions and pricing
- **Professional image gallery** with advanced zoom and navigation features
- **Contact system** with integrated phone/email functionality
- **Mobile-first responsive design** optimized for all devices
- **Progressive Web App (PWA)** capabilities for app-like experience

## ✨ Key Features

### 🎨 **Modern Design**
- Elegant beige/pink color scheme reflecting the beauty industry
- Premium Google Fonts (Playfair Display + Poppins) for professional typography
- Smooth animations and transitions throughout the interface
- Custom styling with salon-specific branding

### 📱 **Responsive & Mobile-Optimized**
- Bootstrap 5 grid system for perfect responsiveness
- Mobile-first navigation with smooth collapse animations
- Touch-friendly interface elements
- Optimized button layouts for mobile forms

### 🛠️ **Advanced Functionality**
- **Interactive Price Gallery**: Full-screen image viewer with zoom, pan, and swipe navigation
- **Smart Navigation**: Auto-closing mobile menu on link selection
- **Contact Integration**: Direct phone calling and email composition
- **Nested Routing**: Comprehensive service categorization with 8 specialized sections

### 🚀 **Progressive Web App (PWA)**
- Web app manifest for installable experience
- Custom app icons using salon logo
- Offline-ready architecture
- App shortcuts for quick navigation

## 🏗️ Technical Architecture

### **Frontend Stack**
- **React 18** - Modern component-based architecture
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing with nested routes
- **Bootstrap 5** - Responsive CSS framework
- **Vite** - Fast development and build tooling

### **Key Technologies**
```javascript
// Core Dependencies
"react": "^18.3.1"
"typescript": "~5.6.2" 
"react-router-dom": "^6.x"
"bootstrap": "^5.3.3"
"vite": "^6.0.0"
```

### **Project Structure**
```
src/
├── components/
│   ├── services/          # Service category components
│   │   ├── Arckezelesek.tsx
│   │   ├── Gyantazas.tsx
│   │   ├── Mikrotus.tsx
│   │   └── ... (8 total)
│   ├── Navbar.tsx         # Navigation with mobile optimization
│   ├── Footer.tsx         # Contact info and branding
│   ├── Home.tsx           # Landing page with video hero
│   ├── Arak.tsx           # Interactive price gallery
│   ├── Kapcsolat.tsx      # Contact form and info
│   └── Szolgaltatasok.tsx # Services overview
├── assets/
│   └── szalon-logo.jpg    # Brand assets
└── App.css               # Custom styling and themes
```

## 🎯 Service Categories

The website showcases 8 comprehensive service categories:

1. **🌟 Arckezelések** - Facial treatments and skincare
2. **💫 Mikrotű** - Microneedling and skin rejuvenation  
3. **🕯️ Gyantázás** - Professional waxing services
4. **👁️ Műszempilla** - Eyelash extensions and treatments
5. **💄 Smink** - Professional makeup services
6. **💅 Műköröm** - Nail art and manicure services
7. **⚡ Lézeres** - Laser treatments and therapies
8. **✨ Egyéb** - Additional beauty services

## 🌐 Live Features

### **Navigation Excellence**
- Smooth mobile navbar with auto-close functionality
- Breadcrumb navigation for service pages
- Active page highlighting
- Responsive menu optimization

### **Contact Integration**
- **Direct calling**: `tel:+36306345853` links
- **Email integration**: Pre-filled mailto forms
- **Contact form**: Real-time form handling with validation
- **Location display**: Full address with contact icons

### **User Experience**
- **Loading states**: Button feedback during form submission
- **Error handling**: Graceful error messages and fallbacks
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Optimized images and lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd szalon-weboldal

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands
```bash
npm run dev          # Start dev server with HMR
npm run build        # Production build
npm run lint         # ESLint code checking
npm run preview      # Preview production build
```

## 📱 PWA Installation

Users can install the website as a Progressive Web App:

1. **Mobile**: "Add to Home Screen" option in browser menu
2. **Desktop**: Install prompt in address bar
3. **Features**: Offline functionality, app-like experience, salon branding

## 🎨 Design System

### **Color Palette**
```css
--primary: #e8d5d3      /* Salon pink */
--secondary: #dcc7c5    /* Light beige */
--accent: #8b5a5c       /* Dark rose */
--text: #6d4c4e         /* Warm brown */
--background: #f7f3f0   /* Cream base */
```

### **Typography**
- **Headings**: Playfair Display (elegant serif)
- **Body**: Poppins (modern sans-serif)
- **Weights**: 300-700 for design flexibility

## 📞 Contact Information

**Healthy Skin Kozmetika**
- 📍 Address: 8237 Tihany, Aranyház u. 18
- 📞 Phone: [06 30 634 58 53](tel:+36306345853)
- ✉️ Email: [soroslilla20@gmail.com](mailto:soroslilla20@gmail.com)

## 🛠️ Built With

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite](https://vitejs.dev/) - Build Tool
- [Bootstrap](https://getbootstrap.com/) - CSS Framework
- [React Router](https://reactrouter.com/) - Client-side Routing
- [Google Fonts](https://fonts.google.com/) - Typography

## 📄 License

This project is developed for Healthy Skin Kozmetika. All rights reserved.

---

*Crafted with ❤️ for the beauty industry - delivering professional web experiences that reflect the quality of salon services.*
