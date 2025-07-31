import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Star,
  ArrowRight,
  Download,
  MapPin,
  Code,
  Palette,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThreeBackground from "@/components/ThreeBackground";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const roles = [
    "AI & ML Enthusiast",
    "Data Science Student",
    "Machine Learning Engineer",
    "Python Developer",
  ];

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true });
  const projectsInView = useInView(projectsRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Resume Parsing System",
      description:
        "Developed a scalable NLP-based system that processes up to 1000 resumes and ranks them based on job roles. Features bulk resume uploading (ZIP) and outputs ranked CSV for HR filtering.",
      tech: ["Python", "NLP", "Pandas", "Scikit-learn"],
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      link: "https://github.com/Sanjeev-1695/resume-parsing-system",
      featured: true,
    },
    {
      title: "AI-based Symptom Checker with Ayurvedic Remedies",
      description:
        "Built a hybrid AI system integrating Groq API for disease prediction and rule-based decision trees for remedy recommendation. Created custom dataset of 70 diseases.",
      tech: ["Python", "Groq API", "Machine Learning", "TensorFlow"],
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      link: "https://github.com/Sanjeev-1695/Home-remedy-recommendation-system",
      featured: true,
    },
    {
      title: "LieDetect.ai",
      description:
        "Advanced lie detection system that analyzes and scores conversations to determine truthfulness. Built using Gemini AI with a multi-agent architecture featuring 3 specialized agents for comprehensive analysis.",
      tech: ["Python", "Gemini AI", "Multi-Agent System", "NLP"],
      image: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      link: "https://github.com/Sanjeev-1695/Liedetect.ai",
      featured: false,
    },
  ];

  const skills = [
    { name: "Machine Learning & AI", icon: Code, level: 90 },
    { name: "Data Analysis & Visualization", icon: Palette, level: 85 },
    { name: "Python Programming", icon: Rocket, level: 95 },
    { name: "NLP & Deep Learning", icon: Code, level: 80 },
  ];

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <ThreeBackground />
      {/* Neon cursor effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-50"
        animate={{ x: mousePosition.x - 24, y: mousePosition.y - 24 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-cyan-400 rounded-full opacity-20 blur-lg neon-glow" />
        <div className="absolute inset-3 bg-cyan-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute inset-4 border border-cyan-400 rounded-full animate-ping" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full glass-effect border-b border-cyan-500/30 z-40 neon-glow"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold neon-text"
          >
            Portfolio
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Projects", "Contact"].map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() =>
                  scrollToSection(
                    item === "About"
                      ? aboutRef
                      : item === "Projects"
                        ? projectsRef
                        : contactRef,
                  )
                }
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
          {/* Enhanced animated background */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float neon-glow" />
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float neon-glow-pink"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse neon-glow-green" />

          {/* Animated dots pattern */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto mb-8 relative">
              {/* Outer rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full cyberpunk-border p-2 neon-glow"
              >
                <div className="w-full h-full rounded-full bg-background/20 backdrop-blur-xl flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-pink-500 to-green-400 relative overflow-hidden hologram"
                    whileHover={{ scale: 1.2, rotateY: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Hologram scan effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient-x" />
                    {/* Neon pulse rings */}
                    <div className="absolute inset-2 rounded-full border border-cyan-400/50 animate-pulse neon-glow" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Secondary ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-primary/20 border-dashed"
              />

              {/* Floating dots around avatar */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full"
                  style={{
                    top: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                    left: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Hello, I'm
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Sanjeev Reddy
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            4th year B.Tech student specializing in AI & ML with hands-on
            experience in data-driven projects, NLP, and machine learning.
            Passionate about leveraging technology to solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-primary/90 hover:via-purple-500 hover:to-pink-500 text-primary-foreground px-8 py-3 text-lg group overflow-hidden shadow-2xl shadow-primary/25"
              onClick={() => scrollToSection(projectsRef)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg group relative overflow-hidden border-2 border-primary/50 hover:border-primary bg-background/80 backdrop-blur-lg hover:bg-primary/10 shadow-xl"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Sanjeev_Reddy_Resume.pdf";
                link.download = "Sanjeev_Reddy_Velagala_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center">
                Download Resume
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/Sanjeev-1695"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sanjeev-reddy-velagala"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:sanjeew1944@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Passionate about AI/ML and Data Science
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                As a Computer Science undergraduate specializing in AI and ML, I
                have hands-on experience in data-driven projects involving NLP,
                predictive modeling, and chatbot development.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                I'm proficient in Python, machine learning libraries, and data
                analysis tools. With strong analytical thinking and
                problem-solving skills, I strive to create impactful AI
                solutions.
              </p>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-2" />
                <span>SRM University, Chennai</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <skill.icon className="w-5 h-5 mr-3 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={aboutInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my passion for innovative
              solutions and attention to detail.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group ${project.featured ? "md:col-span-2" : ""}`}
              >
                <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div
                    className={`h-64 ${project.featured ? "md:h-80" : ""} relative overflow-hidden`}
                    style={{ background: project.image }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      {project.featured && (
                        <div className="flex items-center bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm">
                          <Star className="w-4 h-4 mr-1" />
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-lg hover:bg-primary hover:text-primary-foreground border border-border/50 hover:border-primary shadow-lg"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Let's Create Something Amazing
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's discuss how we can bring your ideas to life.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg group"
              >
                Get In Touch
                <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                                className="px-8 py-3 text-lg relative overflow-hidden border-2 border-primary/50 hover:border-primary bg-background/80 backdrop-blur-lg hover:bg-primary/10 shadow-xl group"
                onClick={() =>
                  window.open(
                    "https://calendly.com/sanjeew1944/30min",
                    "_blank",
                  )
                }
              >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Schedule a Call</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Sanjeev Reddy Velagala. Crafted with passion for AI & ML.
            </div>
            <div className="flex items-center space-x-6">
              <motion.a
                href="https://github.com/Sanjeev-1695"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sanjeev-reddy-velagala"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:sanjeew1944@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
