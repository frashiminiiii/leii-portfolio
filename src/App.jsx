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
          "/jasmina.jpg",
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
    profileImage: "/profile1.jpg",
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
      name: "HTML",
      logo: "https://cdn.simpleicons.org/html5/E34F26",
      desc: "Semantic and accessible web structure.",
    },
    {
      name: "CSS",
      logo: "https://cdn.simpleicons.org/css/1572B6",
      desc: "Modern styling and responsive layouts.",
    },
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
      name: "shadcn/ui",
      logo: "https://ui.shadcn.com/favicon.ico",
      desc: "Accessible, reusable React UI components.",
    },
    {
      name: "DaisyUI",
      logo: "https://cdn.simpleicons.org/daisyui/5A0EF8",
      desc: "Component classes built on top of Tailwind CSS.",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.simpleicons.org/bootstrap/7952B3",
      desc: "Fast responsive UI framework and utility components.",
    },
    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github/white",
      desc: "Version control management.",
    },
    {
      name: "Supabase",
      logo: "https://cdn.simpleicons.org/supabase/3ECF8E",
      desc: "Backend-as-a-service with auth and database.",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      desc: "Building robust backend applications.",
    },
    {
      name: "Python",
      logo: "https://cdn.simpleicons.org/python/3776AB",
      desc: "Automation, scripting, and data tools.",
    },
  ];

  const projects = [
    {
      id: 2,
      title: "LEII Task",
      tech: ["React", "Tailwind", "Vercel"],
      desc: "Task management web app for organizing daily work and improving productivity.",
      liveUrl: "https://leii-task.vercel.app",
      image: "/project-task.png",
    },
    {
      id: 3,
      title: "LEII Dash",
      tech: ["React", "Dashboard UI", "Vercel"],
      desc: "Interactive dashboard project focused on clean UI and real-time data presentation.",
      liveUrl: "https://leii-dash.vercel.app",
      image: "/project-dash.png",
    },
    {
      id: 4,
      title: "LEII Codes",
      tech: ["React", "Frontend", "Vercel"],
      desc: "Portfolio-style web project highlighting personal branding and modern web design.",
      liveUrl: "https://leii-codes-n36d.vercel.app",
      image: "/project-codes.png",
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

        <main className="relative z-40 pt-28 md:pt-24">
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
      </div>
    </Router>
  );
}
