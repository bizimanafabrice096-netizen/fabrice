/* =========================================================
   BIZIMANA ADVANCED PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

  menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

  });


  navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("open");

    });

  });

}


/* =========================================================
   COURSE DATABASE
   ========================================================= */

const courses = {

  networking: {

    icon: "🌐",

    tag: "CORE NETWORKING",

    title: "Networking & Internet Technology",

    description:
      "A complete learning roadmap for understanding computer networks, Internet communication and network infrastructure.",

    modules: [

      "Networking Fundamentals",

      "OSI Reference Model",

      "TCP/IP Model",

      "IPv4 Addressing",

      "IPv6 Fundamentals",

      "Subnetting",

      "Ethernet & LAN",

      "WAN Technologies",

      "Switching Fundamentals",

      "Routing Fundamentals",

      "VLAN Concepts",

      "DHCP",

      "DNS",

      "Network Troubleshooting",

      "Network Design",

      "Practical Network Labs"

    ]

  },


  wireless: {

    icon: "📡",

    tag: "WIRELESS NETWORKING",

    title: "Wireless Networking",

    description:
      "Learn how wireless networks are designed, deployed, secured and maintained.",

    modules: [

      "Wireless Networking Fundamentals",

      "Wi-Fi Architecture",

      "IEEE 802.11 Concepts",

      "Access Points",

      "SSID Configuration",

      "Wireless Authentication",

      "Wireless Security",

      "Channel Planning",

      "Signal & Coverage Concepts",

      "Point-to-Point Wireless",

      "Outdoor Wireless",

      "Wireless Troubleshooting",

      "Wireless Network Design",

      "Practical Wi-Fi Labs"

    ]

  },


  cctv: {

    icon: "📹",

    tag: "SURVEILLANCE",

    title: "CCTV & IP Camera Systems",

    description:
      "Understand modern CCTV architecture, IP cameras, NVR/DVR systems and surveillance networking.",

    modules: [

      "CCTV Fundamentals",

      "Analog CCTV",

      "IP Cameras",

      "Camera Resolution",

      "Camera Placement",

      "NVR Systems",

      "DVR Systems",

      "PoE Technology",

      "IP Addressing for Cameras",

      "Network CCTV",

      "Remote Monitoring",

      "Storage Planning",

      "CCTV Troubleshooting",

      "Surveillance Network Design",

      "Practical CCTV Projects"

    ]

  },


  python: {

    icon: "🐍",

    tag: "PROGRAMMING",

    title: "Python Programming",

    description:
      "Develop Python programming skills and apply them to IT automation and networking tasks.",

    modules: [

      "Python Fundamentals",

      "Variables & Data Types",

      "Operators",

      "Conditions",

      "Loops",

      "Functions",

      "Modules",

      "Lists & Dictionaries",

      "File Handling",

      "Error Handling",

      "Object-Oriented Programming",

      "Networking with Python",

      "Automation",

      "IT Utility Development",

      "Python Projects"

    ]

  },


  cpp: {

    icon: "⚙️",

    tag: "PROGRAMMING",

    title: "C / C++ Programming",

    description:
      "Build strong programming foundations with C and C++ including algorithms, OOP and data structures.",

    modules: [

      "Programming Fundamentals",

      "Variables & Data Types",

      "Operators",

      "Conditions",

      "Loops",

      "Functions",

      "Arrays",

      "Strings",

      "Pointers",

      "Memory Concepts",

      "Classes & Objects",

      "Inheritance",

      "Polymorphism",

      "Data Structures",

      "Algorithms",

      "C++ Projects"

    ]

  },


  cybersecurity: {

    icon: "🔐",

    tag: "SECURITY",

    title: "Cybersecurity Fundamentals",

    description:
      "Learn defensive cybersecurity principles for protecting systems and networks.",

    modules: [

      "Cybersecurity Fundamentals",

      "Security Concepts",

      "Threats & Vulnerabilities",

      "Authentication",

      "Access Control",

      "Passwords & Credentials",

      "Firewalls",

      "Network Segmentation",

      "Secure Configuration",

      "Logging",

      "Monitoring",

      "Incident Basics",

      "Security Awareness",

      "Network Defense",

      "Security Projects"

    ]

  },


  linux: {

    icon: "🐧",

    tag: "SYSTEMS",

    title: "Linux & System Administration",

    description:
      "Learn Linux administration, command-line operations, system management and network services.",

    modules: [

      "Linux Fundamentals",

      "Terminal Commands",

      "Filesystem",

      "Files & Directories",

      "Users & Groups",

      "Permissions",

      "Processes",

      "Package Management",

      "Networking Commands",

      "Services",

      "Logs",

      "System Troubleshooting",

      "Server Fundamentals",

      "Linux Networking",

      "Administration Labs"

    ]

  },


  wireshark: {

    icon: "🔎",

    tag: "NETWORK ANALYSIS",

    title: "Wireshark & Network Analysis",

    description:
      "Learn packet capture and protocol analysis for network troubleshooting and technical learning.",

    modules: [

      "Packet Capture Fundamentals",

      "Wireshark Interface",

      "Capture Filters",

      "Display Filters",

      "Ethernet Frames",

      "ARP Analysis",

      "ICMP Analysis",

      "TCP Analysis",

      "UDP Analysis",

      "DNS Analysis",

      "HTTP Concepts",

      "Network Troubleshooting",

      "Traffic Analysis",

      "Protocol Investigation",

      "Analysis Labs"

    ]

  },


  web: {

    icon: "💻",

    tag: "WEB TECHNOLOGY",

    title: "Internet & Web Technologies",

    description:
      "Understand the technologies behind Internet communication and modern websites.",

    modules: [

      "Internet Architecture",

      "Client & Server",

      "HTTP",

      "HTTPS",

      "DNS",

      "Domains",

      "URLs",

      "Web Servers",

      "APIs",

      "Hosting",

      "HTML",

      "CSS",

      "JavaScript",

      "Web Security",

      "Web Projects"

    ]

  },


  iot: {

    icon: "🤖",

    tag: "EMERGING TECHNOLOGY",

    title: "IoT & Connected Systems",

    description:
      "Explore connected devices, sensors, communication and automation systems.",

    modules: [

      "IoT Fundamentals",

      "Connected Devices",

      "Sensors",

      "Actuators",

      "Device Communication",

      "IP Connectivity",

      "MQTT Concepts",

      "Data Collection",

      "Automation",

      "Edge Computing",

      "Cloud Concepts",

      "IoT Security",

      "Smart Systems",

      "IoT Architecture",

      "IoT Projects"

    ]

  }

};


/* =========================================================
   OPEN DEEP COURSE
   ========================================================= */

function openCourse(courseName) {

  const course = courses[courseName];

  if (!course) {
    return;
  }


  const modal =
    document.getElementById("courseModal");

  const icon =
    document.getElementById("modalIcon");

  const tag =
    document.getElementById("modalTag");

  const title =
    document.getElementById("modalTitle");

  const description =
    document.getElementById("modalDescription");

  const modules =
    document.getElementById("modalModules");


  icon.textContent = course.icon;

  tag.textContent = course.tag;

  title.textContent = course.title;

  description