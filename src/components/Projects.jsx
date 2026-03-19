import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, FileText, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Edge AI Vision Pipeline on a Zybo Z7-20",
    className: "Edge AI Architectures",
    description: "The project is currently being developed and is not yet completed as it is part of a senior independent study course. The project will implements a complete on-device inference system that runs a compact convolutional neural network directly on a Xilinx Zynq-7000 (Zybo Z7-20) development board paired with a Pcam camera module. Guided by the course's emphasis on hardware-software co-design, a state-of-the-art model is compressed so that it fits within the board's 256 KB of BRAM and 1 GB of external DDR while meeting a strict 5 mW power envelope. Throughout the work, model-compression techniques are applied, specialized neural-processor mappings are evaluated, and an end-to-end Edge-AI deployment workflow is followed—from dataset curation and training on a workstation, through cross-compilation, to on-board validation. The system demonstrates how constraints on memory, compute, and energy shape both model architecture and system design, providing a reproducible reference for TinyML applications on resource-constrained FPGA-CPU platforms.",
    techStack: ["Xilinx Zynq-7000", "Zybo Z7-20", "Pcam Camera Module", "FPGA Design", "Vivado", "MATLAB"],
    image: "/images/Projects/engs192Project_Generated.png"
  },
  {
    title: "Human Motion Classifier with a Convolutional Neural Network",
    className: "Microprocessors & Embedded Systems",
    description: "A Tiny-ML human-activity-recognition system classifies stationary, walking, running and spinning from 3-axis accelerometer data (25 Hz, 1 000 samples x 3 axes) that are loaded with Python/NumPy and trained in TensorFlow 2 using a compact 1-D-CNN-dense model. The network is quant-aware-converted to a ≤ 30 KB TensorFlow Lite file and deployed on an STM32L432KC Nucleo board via STM32CubeMX and X-CUBE-AI, which generate the HAL-based C wrappers needed for inference. A double-buffered ISR captures a 1-second window of 26 samples every second, and the main loop runs the TFLite model in ~14 ms, meeting the real-time deadline. Classification results and confidence scores are streamed over UART, delivering a complete edge-AI solution on a Cortex-M4 device. Validation testing shows > 95 % accuracy across all four classes, with confusion matrices confirming reliable detection of the spinning activity. The full source code and trained model are publicly available on GitHub for reproducibility and further development.",
    techStack: ["Python", "NumPy", "TensorFlow", "STM32L432KC", "STM32CubeMX", "X-CUBE-AI", "GNU-Arm-Embedded", "VS Code", "SEGGER J-Link"],
    githubUrl: "https://github.com/brandoc713/engs62-humanMotionClassifier",
    image: "/images/Projects/engs62-humanMotion-bd.png", // e.g. "/images/Projects/portfolio.png"
  },
  {
    title: "Project EOS MAV",
    className: "Thayer Engineering Capstone Project (Design & Completion)",
    description: "This project developed a fixed wing uncrewed aerial vehicle (UAV) demonstrator to show how polymer selective laser sintering (SLS) can enable enhanced UAV designs and reduce supply chain delays for critical parts. The airframe was divided into standardized modules with repeatable mechanical and electrical interfaces, enabling rapid assembly and targeted replacement of damaged sections instead of requiring depot level repairs. The modular approach supported rapid reconfiguration and spare on demand manufacturing from controlled digital part files, shifting logistics from shipping physical spares to producing parts near the point of use.",
    techStack: ["Solidworks", "Supply Chain Agile", "Stakeholder-Focused", "Interdisciplinary Systems Engineering"],
    image: "/images/Projects/projectEOSMav.png",
  },
  {
    title: "Cross-Modal Face Retrieval: Matching Hand-Drawn Sketches to Photographs via Metric Learning",
    className: "Principles of Machine Learning",
    description: "This study addresses the cross-modal retrieval problem of linking hand-drawn facial sketches to their corresponding photographs. Using the CUHK Face Sketch Database (CUFS), a Siamese network built on a ResNet-50 backbone was implemented. Because the dataset is limited (131 identities) and the visual domain gap between sketches and photos is large, a “batch-hard” triplet-loss training scheme and a staged layer-freezing strategy were employed to maximize the utility of the data. The resulting model achieves a Rank-10 accuracy of 58.6 % on a 29-identity test set—substantially higher than random chance (34.5 %) and a contrastive-loss baseline. Experiments identify input normalization and the metric-learning (triplet-loss) strategy as the two most critical factors for aligning sketch and photo feature spaces, demonstrating that a disciplined deep-learning pipeline can reliably bridge the sketch-to-photo domain gap even with modest data.",
    techStack: ["Python", "TensorFlow", "PyTorch", "ResNet-50", "Triplet-Loss", "Contrastive-Loss"],
    githubUrl: "https://github.com/ewute/engs106-sketch-landmark/tree/main",
    livePDF: "/Reports/ENGS106_FinalProjectReport.pdf",
    image: "/images/Projects/engs106-poster.png",
  },
  {
    title: "Sensor Controlled \"Duck\" Car",
    className: "Control Theory",
    description: "Invovlving the development of a sensor-controlled Duck car designed to detect and maintain a calibrated distance from obstacles, the project utilized Proportional-Derivative (PD) control theory to achieve precise motion control. Using MATLAB's SISOTOOL, the calculated the controller's poles and zeros to optimize system stability and performance. The PD controller was then implemented using analog components on a breadboard, which was housed on the car's chassis. The integration of sensors allowed the car to dynamically adjust its position relative to obstacles,, demonstrating the practical application of control theory in a real-world system.",
    techStack: ["MATLAB", "Control Theory"],
    livePDF: "/Reports/engs26DuckCarReport.pdf",
    image: "/images/Projects/duckCar.png",
  },
  {
    title: "Analog Heart Rate Monitor",
    className: "Electronics: Introduction to Linear and Digital Circuits",
    description: "Designed and constructed a heart rate monitor capable of detecting and measuring heartbeats within the 60-100 BPM range. The project applied theoretical knowledge from lectures to create a functional circuit using resistors, capacitors, and integrated circuits. Component values were carefully calculated and extensively simulated using PSpice to ensure accuracy and optimal performance before implementing the actual circuit. This project demonstrated expertise in analog signal processing, circuit design, and simulation tools, culminating in a precise and reliable heart rate monitoring system.",
    techStack: ["MATLAB", "PSpice", "Analog Circuits", "Signal Processing"],
    livePDF: "/Reports/engs32AnalogHeartRateMonitorReport.pdf",
    image: "/images/Projects/engs32-schematic.png"
  },
  {
    title: "Thermal Segregation of GeAl Eutectic Systems",
    className: "Materials Science & Engineering",
    description: "Eutectic alloys, traditionally used for solder, are being investigated as high-energy-density fibers for solar-thermal storage because they can absorb heat with minimal temperature rise. In this study a simple germanium-aluminum (Ge-Al) eutectic served as a model system: the alloy was melted inside a glass rod, hand-drawn into thin fibers, and then solidified using two cooling routes—rapid water quenching and slow air cooling. Microscopic measurements of the resulting lamellar (eutectic) spacing revealed that the quenching process dominates microstructural refinement: water-quenched fibers exhibited lamellae roughly three times finer than those cooled in air, while mechanical deformation during drawing had negligible influence on lamella width. These results indicate that cooling rate is the primary lever for tailoring eutectic structure fineness in fibers, a critical factor for optimizing their thermal-storage performance and suggests a straightforward processing control for future solar-energy storage applications.",
    techStack: ["Materials Science", "Microscopy", "Eutectic Alloys", "Thermal Segregation", "Microstructural Analysis"],
    livePDF: "/Reports/ENGS24Report(Eutectic).pdf",
    image: "/images/Projects/engs24-eutectic.png",
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const handleLiveClick = (event, url) => {
    if (!url) return;

    const isPdf = url.toLowerCase().endsWith('.pdf');

    if (isPdf) {
      event.preventDefault();
      setPdfUrl(url);
      setIsPdfOpen(true);
    }
  };

  const closePdfViewer = () => {
    setIsPdfOpen(false);
    setPdfUrl(null);
  };

  useEffect(() => {
    if (!isPdfOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closePdfViewer();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isPdfOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(
        ".projects-header",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="flex items-center gap-6 mb-16 projects-header">
        <h3 className="text-brand-text whitespace-nowrap">Key <span className="rosewhite-gradient-text">Projects</span></h3>
        <div className="h-[1px] w-full max-w-2xl bg-brand-rosewhite-border"></div>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
        {projects.map((project, index) => (
          <div key={index} className="project-card portfolio-card rounded-xl p-6 md:p-8 flex flex-col h-full group transition-transform duration-500 hover:-translate-y-2">

            {/* Project Image */}
            <div className="w-full h-48 md:h-64 rounded-lg bg-gradient-to-br from-brand-bg to-[#111] border border-brand-rosewhite/10 mb-6 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-rosewhite/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <span className="text-brand-text/20 font-stats opacity-50 group-hover:scale-110 transition-transform duration-700">Image Placeholder</span>
              )}
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-stats text-brand-surface text-sm mb-2">{project.className}</p>
                <h4 className="text-2xl text-brand-text group-hover:text-brand-rosewhite transition-colors">{project.title}</h4>
              </div>
              <div className="flex gap-4">
                {project.githubUrl && <a href={project.githubUrl} className="text-brand-text/70 hover:text-brand-rosewhite transition-colors"><Github size={20} /></a>}
                {project.livePDF && (
                  <a
                    href={project.livePDF}
                    className="text-brand-text/70 hover:text-brand-rosewhite transition-colors"
                    onClick={(e) => handleLiveClick(e, project.livePDF)}
                    aria-label={project.livePDF.toLowerCase().endsWith('.pdf') ? 'Open PDF preview' : 'Open live link'}
                  >
                    {project.livePDF.toLowerCase().endsWith('.pdf') ? <FileText size={20} /> : <ExternalLink size={20} />}
                  </a>
                )}
              </div>
            </div>

            <p className="text-brand-text/80 mb-6 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-3 font-stats text-sm text-brand-text/60">
              {project.techStack.map((tech, i) => (
                <li key={i} className="px-3 py-1 rounded bg-white/5 border border-white/5 whitespace-nowrap">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {isPdfOpen && pdfUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-[95vw] h-[90vh] max-w-5xl rounded-xl bg-brand-bg border border-brand-rosewhite/20 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-brand-rosewhite/20">
              <p className="text-sm font-stats text-brand-text/80 truncate">Document preview</p>
              <button
                type="button"
                onClick={closePdfViewer}
                className="px-3 py-1 rounded-md text-xs font-stats bg-brand-rosewhite/10 text-brand-text hover:bg-brand-rosewhite/20 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="flex-1 bg-black/60">
              <iframe
                title="Project PDF preview"
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
