import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Navigation } from "./components/Navigation";

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
        helpful: 0,
      },
      {
        id: "perm_2",
        name: "Adrian Cruz",
        comment:
          "Great communicator and very reliable when it comes to deadlines. The final output was polished and production-ready.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Adrian+Cruz&background=0D9488&color=fff&bold=true",
        isPermanent: true,
        helpful: 0,
      },
      {
        id: "perm_3",
        name: "Lea Santiago",
        comment:
          "Strong frontend execution. The UI feels premium and the interactions are smooth across both desktop and mobile.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Lea+Santiago&background=0F766E&color=fff&bold=true",
        isPermanent: true,
        helpful: 0,
      },
      {
        id: "perm_4",
        name: "Mark Villanueva",
        comment:
          "I appreciate the clean code structure and attention to detail. Easy to collaborate with and open to feedback.",
        rating: 4,
        avatar: "https://ui-avatars.com/api/?name=Mark+Villanueva&background=155E75&color=fff&bold=true",
        isPermanent: true,
        helpful: 0,
      },
      {
        id: "perm_5",
        name: "Rica Mendoza",
        comment:
          "Handled both design and implementation really well. The overall user experience is modern and consistent.",
        rating: 5,
        avatar: "https://ui-avatars.com/api/?name=Rica+Mendoza&background=0E7490&color=fff&bold=true",
        isPermanent: true,
        helpful: 0,
      },
      {
        id: "perm_6",
        name: "Noel Ramos",
        comment:
          "Very good engineering mindset. Prioritizes maintainability, performance, and practical solutions.",
        rating: 4,
        avatar: "https://ui-avatars.com/api/?name=Noel+Ramos&background=134E4A&color=fff&bold=true",
        isPermanent: true,
        helpful: 0,
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
    highlights: [
      { label: "Projects Built", value: "10+" },
      { label: "Tech Stack", value: "12+" },
      { label: "Uptime Focus", value: "99.9%" },
      { label: "Code Quality", value: "Clean" },
    ],
    focusTags: ["Frontend", "Backend", "Networks", "Automation"],
    certifications: [
      {
        title: "Introduction to IoT",
        issuer: "Cisco Networking Academy",
        year: "2025",
        file: "/Introduction_to_IoT_certificate_francispascua0327-gmail-com_79729818-215a-40f2-8e69-136253e0a0ad.pdf",
      },
      {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        year: "2024",
        file: "/Introduction_to_Cybersecurity_certificate_francispascua0327-gmail-com_870c863f-d038-4a4d-84d5-6454baf04b1c.pdf",
      },
      {
        title: "Discovering Entrepreneurship",
        issuer: "Cisco Networking Academy",
        year: "2024",
        file: "/Discovering_Entrepreneurship_certificate_francispascua0327-gmail-com_c747fa2a-d429-4bc4-8a07-1d77889479da.pdf",
      },
      {
        title: "C++ Essentials 1",
        issuer: "Cisco Networking Academy",
        year: "2024",
        file: "/C--_Essentials_1_certificate_francispascua0327-gmail-com_a7c873b3-d1a7-4bf9-8233-787668d2f24f.pdf",
      },
      {
        title: "Introduction to Modern AI",
        issuer: "Cisco Networking Academy",
        year: "2025",
        file: "/Introduction_to_Modern_AI_certificate_francispascua0327-gmail-com_158193e2-c492-4348-a36e-45e86a443334.pdf",
      },
    ],
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
      category: "Frontend",
    },
    {
      name: "CSS",
      logo: "https://cdn.simpleicons.org/css/1572B6",
      desc: "Modern styling and responsive layouts.",
      category: "Frontend",
    },
    {
      name: "React.js",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
      desc: "Building dynamic user interfaces.",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      desc: "Functional logic for web apps.",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      desc: "Responsive modern design.",
      category: "Frontend",
    },
    {
      name: "shadcn/ui",
      logo: "https://ui.shadcn.com/favicon.ico",
      desc: "Accessible, reusable React UI components.",
      category: "Tools",
    },
    {
      name: "DaisyUI",
      logo: "https://cdn.simpleicons.org/daisyui/5A0EF8",
      desc: "Component classes built on top of Tailwind CSS.",
      category: "Tools",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.simpleicons.org/bootstrap/7952B3",
      desc: "Fast responsive UI framework and utility components.",
      category: "Tools",
    },
    {
      name: "GitHub",
      logo: "https://cdn.simpleicons.org/github/white",
      desc: "Version control management.",
      category: "Tools",
    },
    {
      name: "Supabase",
      logo: "https://cdn.simpleicons.org/supabase/3ECF8E",
      desc: "Backend-as-a-service with auth and database.",
      category: "Backend",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      desc: "Building robust backend applications.",
      category: "Backend",
    },
    {
      name: "Python",
      logo: "https://cdn.simpleicons.org/python/3776AB",
      desc: "Automation, scripting, and data tools.",
      category: "Backend",
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
  const handleEditReview = (id, comment) =>
    setReviews(
      reviews.map((r) => (r.id === id ? { ...r, comment } : r))
    );
  const handleVoteHelpful = (id) =>
    setReviews(
      reviews.map((r) =>
        r.id === id ? { ...r, helpful: (r.helpful || 0) + 1 } : r
      )
    );

  return (
    <Router>
      <div className="min-h-screen text-gray-100 selection:bg-cyan-400/30 overflow-x-hidden">
        <div className="background-atmosphere" />
        <div className="grain-overlay" />
        <div className="pointer-events-none fixed inset-x-0 top-0 z-20 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl bg-teal-400/20" />
        </div>
        <Navigation />

        <main className="relative z-40 pt-28 md:pt-24 px-2 md:px-4">
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
                <ReviewsList
                  reviews={reviews}
                  onDelete={handleDeleteReview}
                  onEdit={handleEditReview}
                  onVoteHelpful={handleVoteHelpful}
                />
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
