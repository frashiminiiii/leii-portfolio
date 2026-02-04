import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { MouseGlow } from "./components/MouseGlow";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { ReviewsList } from "./pages/ReviewsList";
import { ReviewForm } from "./pages/ReviewForm";
import { Contact } from "./pages/Contact";

export default function App() {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("fp_portfolio_reviews");
    const localReviews = saved ? JSON.parse(saved) : [];
    const permanentReviews = [
      {
        id: "perm_1",
        name: "Jasmine Magnaye",
        comment:
          "Highly professional and skilled engineer. Francis has a keen eye for detail and delivers high-quality work on time.",
        rating: 5,
        avatar:
          "https://ui-avatars.com/api/?name=Jasmine+Magnaye&background=0D9488&color=fff&bold=true",
        isPermanent: true,
      },
    ];
    return [...permanentReviews, ...localReviews];
  });

  useEffect(() => {
    const toSave = reviews.filter((r) => !r.isPermanent);
    localStorage.setItem("fp_portfolio_reviews", JSON.stringify(toSave));
  }, [reviews]);

  const profile = {
    name: "Francis Pascua",
    title: "Full Stack Developer & Network Engineer",
    education: "BS in Computer Engineering",
    major: "Network Administration",
    profileImage:
      "src/assets/profile.jpg",
    quote: "Winning is a bonus, learning is the ultimate goal.",
    about:
      "I am Francis, a dedicated Computer Engineering student with a strong focus on Full Stack Development and Network Systems. My expertise lies in building scalable web applications while ensuring high-availability network infrastructures. I am passionate about clean code, efficient algorithms, and the seamless integration of software and hardware. I am always updating my skills with new technologies to provide innovative solutions to complex engineering problems.",
    contact: {
      email: "francispascua0327@gmail.com",
      phone: "+63 912 345 6789",
    },
  };

  const skills = [
    {
      name: "React.js",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      desc: "Building dynamic user interfaces.",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      desc: "Functional logic for web apps.",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      desc: "Responsive modern design.",
    },
    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github/white",
      desc: "Version control management.",
    },
  ];

  const projects = [
    {
      id: 2,
      title: "Smart Inventory",
      tech: ["React", "Firebase"],
      desc: "IoT system for hardware tracking using dynamic QR codes. Designed for warehouse efficiency.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    },
    {
      id: 3,
      title: "E-Commerce Hub",
      tech: ["Next.js", "Stripe"],
      desc: "Scalable online store with real-time stock management and secure checkout.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200",
    },
    {
      id: 4,
      title: "Market Tracker",
      tech: ["API", "Chart.js"],
      desc: "Live market data dashboard for cryptocurrencies with interactive charting.",
      image:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200",
    },
  ];

  const handleAddReview = (newReview) => setReviews([newReview, ...reviews]);
  const handleDeleteReview = (id) =>
    setReviews(reviews.filter((r) => r.id !== id));

  return (
    <Router>
      <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-teal-500/30 overflow-x-hidden">
        <MouseGlow />
        <Navigation />

        <main className="pt-20 pb-16 relative z-40">
          <Routes>
            <Route path="/" element={<Home profile={profile} />} />
            <Route path="/about" element={<About profile={profile} />} />
            <Route path="/skills" element={<Skills skills={skills} />} />
            <Route
              path="/projects"
              element={<Projects projects={projects} />}
            />
            <Route
              path="/reviews"
              element={
                <ReviewsList reviews={reviews} onDelete={handleDeleteReview} />
              }
            />
            <Route
              path="/reviews/new"
              element={<ReviewForm onAdd={handleAddReview} />}
            />
            <Route path="/contact" element={<Contact profile={profile} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <footer className="py-12 border-t border-gray-900 text-center flex flex-col items-center gap-3 relative z-40">
          <div className="text-lg font-black uppercase tracking-tighter">
            FRANCIS PASCUA <span className="text-teal-500">/</span> ENGINEER
          </div>
          <p className="text-teal-400 font-black italic text-sm tracking-widest uppercase opacity-80">
            "Rise even when the world tells you to stay down."
          </p>
        </footer>
      </div>
    </Router>
  );
}
