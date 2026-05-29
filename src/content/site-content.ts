export const profile = {
  name: "K B Chandrashekaran",
  role: "Assistant Program Mentor, Embedded Systems",
  company: "Inunity Pvt Ltd",
  startedOn: "21 July 2025",
  location: "Dindigul, Tamil Nadu, India",
  email: "chandrabala171@gmail.com",
  phone: "+91 8951088256",
  linkedin: "https://linkedin.com/in/k-b-chandrashekaran-642a1a357",
  github: "https://github.com/KBC171",
  instagram: "https://www.instagram.com/k._b_.c?igsh=ZXMzeTBleGN3Y3lo",
  tagline:
    "Engineer focused on embedded systems, IoT, VLSI workflows, and innovation-led product development.",
  intro:
    "This portfolio now runs on a fully technical visual system. The experience is built around signals, circuits, telemetry, architecture, and engineering execution instead of photography, character assets, or decorative scenes.",
  availability:
    "Available for embedded systems, IoT, FPGA, VLSI, and hardware-software integration roles.",
};

export const aboutDetails = {
  hometown: "Dindigul",
  currentBase: "Tamil Nadu, India",
  languages: [
    "English",
    "Tamil",
    "Kannada",
    "Telugu",
    "Assamese",
    "Malayalam",
    "Bengali",
  ],
  values: [
    "Clear systems thinking",
    "Practical engineering",
    "Verification before claims",
    "Learning through building",
  ],
  notes: [
    "Rooted in a multilingual environment and comfortable moving between technical, academic, and mentoring roles.",
    "Approaches engineering through architecture first: understand the system, identify the bottleneck, and optimize the signal path.",
    "Strong interest in practical innovation across embedded systems, IoT deployment, verification-heavy design, and hardware-led problem solving.",
  ],
};

export const experience = [
  {
    title: "Assistant Program Mentor, Embedded Systems",
    organization: "Inunity Pvt Ltd",
    period: "Jul 2025 - Present",
    location: "India",
    summary:
      "Mentoring learners in embedded systems while bridging hardware concepts with implementation discipline.",
    achievements: [
      "Support students through embedded systems concepts, workflows, and practical execution.",
      "Translate technical topics into structured teaching sequences.",
      "Operate as the present-day anchor role for the portfolio narrative.",
    ],
    tools: ["Embedded systems", "Mentoring", "Hardware foundations", "Problem-solving"],
  },
  {
    title: "Class Representative",
    organization: "Assam University",
    period: "Jun 2023 - Jun 2025",
    location: "Silchar, India",
    summary:
      "Led communication, represented student concerns, and coordinated feedback across the class.",
    achievements: [
      "Managed event and administration communication for classmates.",
      "Built and organized student feedback through surveys and discussions.",
      "Maintained an open communication loop between students and the institution.",
    ],
    tools: ["Leadership", "Communication", "Coordination", "Data collection"],
  },
  {
    title: "Intern",
    organization: "Assam University",
    period: "Nov 2024",
    location: "Silchar, India",
    summary:
      "Completed hands-on training in the ASIC design flow using 180nm technology.",
    achievements: [
      "Designed and simulated CMOS logic gates including inverter, NAND, and NOR.",
      "Reached high verification accuracy through SPICE-based validation.",
    ],
    tools: ["ASIC flow", "Cadence", "SPICE", "CMOS logic"],
  },
  {
    title: "FPGA Design Intern",
    organization: "NIT Silchar",
    period: "Jun 2024 - Jul 2024",
    location: "Silchar, India",
    summary:
      "Worked on high-speed data acquisition using Xilinx FPGA workflows.",
    achievements: [
      "Engineered data acquisition logic using FPGA systems.",
      "Optimized Verilog implementation to reduce latency.",
    ],
    tools: ["Verilog", "Vivado", "FPGA", "Latency optimization"],
  },
];

export const projects = [
  {
    name: "Op-Amp Aspect Ratio Optimization",
    category: "VLSI + MATLAB",
    summary:
      "A GUI-driven tool that automated transistor sizing and reduced manual calculation time.",
    details: [
      "Integrated machine learning to predict optimal parameters.",
      "Validated results with Cadence Virtuoso.",
      "Structured around precision, verification, and analog design efficiency.",
    ],
    metrics: ["40% faster sizing workflow", "25% improved design accuracy"],
  },
  {
    name: "IoT-Based Smart Agriculture System",
    category: "IoT",
    summary:
      "A soil monitoring system using moisture and temperature sensors with cloud logging.",
    details: [
      "Built remote farm monitoring through sensor networks and ESP8266.",
      "Logged data to ThingSpeak for real-time visibility.",
      "Designed as a telemetry-first project with practical field use.",
    ],
    metrics: ["Real-time monitoring", "Remote farm visibility"],
  },
  {
    name: "FPGA-Based Digital Signal Processor",
    category: "FPGA + DSP",
    summary:
      "A noise-filtering DSP implemented in Verilog using Xilinx tooling.",
    details: [
      "Built hardware logic for filtering unwanted signal noise.",
      "Positioned in the portfolio as a noise-to-signal engineering module.",
    ],
    metrics: ["90% noise reduction", "Hardware-accelerated filtering"],
  },
  {
    name: "Patient Vitals Monitoring Station",
    category: "Embedded + Health Monitoring",
    summary:
      "A stationary monitoring system for heart rate, SpO2, and temperature with cloud sync.",
    details: [
      "Measured vitals with low error margin against clinical devices.",
      "Sent live data to ThingSpeak and Blynk through cloud APIs.",
      "Focused on embedded sensing, data reliability, and remote monitoring access.",
    ],
    metrics: ["<5% error margin", "Cloud-connected monitoring"],
  },
];

export const education = {
  degree: "Bachelor of Technology in Electronics and Communication Engineering",
  institution: "Assam University, Silchar",
  expected: "2025",
  preUniversity: "Sarvajna PU College, Gulbarga, Karnataka",
  certifications: [
    "VLSI Design, Assam University, 2024",
    "FPGA Design, NIT Silchar, 2024",
    "MATLAB for Engineers, NIT Silchar, 2024",
    "C Programming, Assam University, 2022",
  ],
  training: [
    "VLSI Design Workshop, Entuple Technologies, 2023",
    "IoT and Embedded Systems, NIT Silchar, 2022",
    "Cadence Virtuoso Tool Training, Assam University, 2023",
  ],
  accomplishment:
    "Led a six-member motorcycle expedition from Silchar to Bum La Pass, coordinating route planning, safety protocols, and mechanical support for high-altitude conditions.",
};

export const quickFacts = [
  { label: "Current Role", value: "Assistant Program Mentor" },
  { label: "Focus", value: "Embedded Systems, IoT, FPGA, VLSI" },
  { label: "Execution", value: "System Design + Verification + Mentoring" },
  { label: "Theme", value: "Innovation + Circuits + Telemetry" },
];

export const toolchains = [
  {
    name: "Cadence Flow",
    tools: ["Cadence Virtuoso", "SPICE", "LTspice", "CMOS Logic"],
    focus: "Analog design, schematic capture, sizing, verification",
  },
  {
    name: "Digital + FPGA",
    tools: ["Vivado", "Verilog", "FPGA", "DSP Logic"],
    focus: "RTL design, synthesis, timing, latency-oriented implementation",
  },
  {
    name: "Embedded + IoT",
    tools: ["Arduino", "Raspberry Pi", "ESP8266", "ThingSpeak", "Blynk"],
    focus: "Sensor interfacing, real-time data flow, cloud-connected devices",
  },
  {
    name: "Linux + Dev Workflow",
    tools: ["Linux", "Terminal", "Python", "MATLAB", "Networking"],
    focus: "Automation, simulation support, scripting, engineering workflow control",
  },
];

export const terminalSnapshots = [
  {
    title: "Linux Bring-up",
    prompt: "chandra@lab:~$",
    lines: [
      "ssh fpga-node.local",
      "screen /dev/ttyUSB0 115200",
      "dmesg | tail -n 20",
      "python sensor_stream.py --log telemetry.csv",
    ],
  },
  {
    title: "Cadence Verification",
    prompt: "eda@workstation:~/vlsi$",
    lines: [
      "virtuoso &",
      "run_spice inverter_tb.scs",
      "check_gain_phase opamp_report.txt",
      "archive results/verified_180nm",
    ],
  },
  {
    title: "FPGA Iteration",
    prompt: "rtl@build-box:~/vivado$",
    lines: [
      "vivado -mode batch -source build.tcl",
      "report_timing_summary",
      "report_utilization",
      "write_bitstream dsp_filter.bit",
    ],
  },
];

export const domainTracks = [
  {
    name: "IoT Systems",
    points: ["Sensor acquisition", "Cloud telemetry", "Remote monitoring", "Field-ready deployment"],
  },
  {
    name: "VLSI Design",
    points: ["CMOS logic", "Sizing accuracy", "SPICE validation", "Virtuoso verification"],
  },
  {
    name: "Embedded Systems",
    points: ["Microcontroller workflows", "Peripheral control", "Real-time behavior", "Practical debugging"],
  },
  {
    name: "FPGA + DSP",
    points: ["Verilog design", "Latency reduction", "Signal filtering", "Hardware acceleration"],
  },
];

export const workflowStages = [
  "Problem definition",
  "System architecture",
  "Simulation or prototyping",
  "Verification and tuning",
  "Deployment-oriented refinement",
];
