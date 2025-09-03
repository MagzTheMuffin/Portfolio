const projectData = [
  {
    id: 'PuzzleGame',
    title: 'Daily Date Puzzle',
    description: 'Puzzle game that refreshes every day, built for a website',
    image: `${process.env.PUBLIC_URL}/photos/wordle.webp`,
    summary:
      'I created this webiste to increase my front end skills. At the time, I had little knowledge of front end design and wanted to challenge myself to create a game on a website. I had also recently recieved a gift of an interesting board game and knew I had to create a prototype. In the future I plan to polish this website and add more puzzle games simular to the New York Times. This project was created with HTML, React, CSS and Javascript.',
    github: 'https://github.com/MagzTheMuffin/dategamepublic',
    video: '',
    pdf: '',
    presentation: ''
  },

  {
    id: 'CapstoneDesign',
    title: 'Engineering Capstone Project',
    description: 'Lightweight eyetracking solution with external calculation device',
    image: `${process.env.PUBLIC_URL}/photos/poster.webp`,
    summary:
      'This was my capstone engineering project that was carried out over 2 semesters. The idea is to research a problem from start to finish and create a working prototype that addresses this issue. Our team decided to create a lightweight eyetracking device that tackles high costs of current systems, while keeping the flexibility and portability high. For more incformation read through the final report and see the demo of the prototype.',
    github: '',
    video: `${process.env.PUBLIC_URL}/videos/ai.mp4`,
    pdf: `${process.env.PUBLIC_URL}/pdfs/final.pdf`,
    presentation: ''
  },

  {
    id: 'Path',
    title: 'Path',
    description: 'Unity Mobile Game',
    image: `${process.env.PUBLIC_URL}/photos/2.webp`,
    summary:
      'This is a mobile game I started when I decided to begin game development. I wanted to learn some basic pathfinding and how to use Unity. Now, the full gameplay loop is complete and I am revisiting it to add a song, ads and screen flexibility so it works on all devices. The final step is to release it on the appstore later this year.',
    github: '',
    video: `${process.env.PUBLIC_URL}/videos/Path.mp4`,
    pdf: '',
    presentation: ''
  },

  {
    id: 'HostageChess',
    title: 'Multiplayer Hostage Chess Game',
    description: 'Full-stack design of a chess game that can be played between computers',
    image: `${process.env.PUBLIC_URL}/photos/Chess.webp`,
    summary:
      'This was a full semester project that was completed in stages to teach about full stack development. The back-end involved creating the game rules of hostage chess from scratch in a C file, implementing swig to allow for Python scripts to read these. Front end involved Javascript for the chess board and higher level functions. HTML, CSS, and DOM were used for design and navigation. SQL was alos used to record game moves and implement total game history.',
    github: 'https://github.com/MagzTheMuffin/HostageChess',
    video: '',
    pdf: '',
    presentation: ''
  },

  {
    id: 'WirelessProject',
    title: 'Wireless Fall Detector',
    description:
      'Wireless solution for fall detection that communicates between the device, basestation, and any mobile device',
    image: `${process.env.PUBLIC_URL}/photos/WSN.webp`,
    summary:
      'Final project in my wireless sensor networks class. The user would have the device attached to them and sensing at all times. The prototype communicates between the device, basestation, and any mobile device',
    github: 'https://github.com/MagzTheMuffin/WSN',
    video: `${process.env.PUBLIC_URL}/videos/WSN.mp4`,
    pdf: '',
    presentation: `${process.env.PUBLIC_URL}/slides/WSN.pdf`
  },

  {
    id: 'PC',
    title: 'Program Counter',
    description: 'Program counter designed from transistor logic.',
    image: `${process.env.PUBLIC_URL}/photos/VLSI.webp`,
    summary:
      'This was the final project in my VLSI class. The focus was on understanding transistor logic and creating complex gates from them. In this project an 8-bit PC was designed with adder, mux, and register all design from transistors. The paper goes through power and size complexities and design choices that were made.',
    github: '',
    video: '',
    pdf: `${process.env.PUBLIC_URL}/pdfs/VLSI.pdf`,
    presentation: ''
  },

  {
    id: 'RTOS',
    title: 'RTOS Security Camera',
    description: 'motion detection with real time video streaming',
    image: `${process.env.PUBLIC_URL}/photos/RTOS.webp`,
    summary:
      'This was the final project in my real time operating systems class. The program works by detecting motion, and then displaying the video feed if detected. The feed is streamed and displed on the LCD board or on the users pc if it is connected. Most of the coding done by us was to configure the camera correctly to ensure streaming as basic operating structure was provided for this project.',
    github: 'https://github.com/MagzTheMuffin/RTOS',
    video: '',
    pdf: `${process.env.PUBLIC_URL}/pdfs/RTOS.pdf`,
    presentation: ''
  },

  {
    id: 'AIBenchmarking',
    title: 'AI training benchmarking',
    description: 'Showing the effect of trainging optimizers on training speed, and effeciency.',
    image: `${process.env.PUBLIC_URL}/photos/AI.webp`,
    summary:
      'Final project in advanced computer architecture class. Showing the effect of trainging optimizers on training speed, and effeciency. Code was ran on Google Colab for their high speed GPUs. The paper compares results to the base paper of ZeRO while measuring the expiremental results.',
    github: 'https://github.com/MagzTheMuffin/AIRuntimeComparison',
    video: '',
    pdf: `${process.env.PUBLIC_URL}/pdfs/ACA.pdf`,
    presentation: ''
  },

  {
    id: 'Voltmeter',
    title: 'Voltmeter',
    description: 'Voltmeter created with board and Microcontroller. With the use of C and ARM Assembly the voltmeter was programmed on board, to work with lab devices. Then integrated with 7 segment display for readings.',
    image: `${process.env.PUBLIC_URL}/photos/voltmeter.webp`,
    summary:
      'Final project in Microcontrollers class using C and assembly. ',
    github: 'https://github.com/MagzTheMuffin/voltmeter',
    video: '',
    pdf: `${process.env.PUBLIC_URL}/pdfs/Voltmeter.pdf`,
    presentation: ''
  },


  {
    id: 'KinderToy',
    title: 'Kinder Toy Design',
    description:
      'Runner-ups in a engineering compitiion between all second year students at the university of Guelph',
    image: `${process.env.PUBLIC_URL}/photos/Ghast.webp`,
    summary:
      'At the university guelphs all engineers take a design course each semester where they must solve a constrained problem from start to finish. In second year the challenge was to make a functional toy that fits into a large kinder egg. after a semester of work our design was awarded runner up in the design contest, which is between all students in the class for our design and presentation skills.',
    github: '',
    video: `${process.env.PUBLIC_URL}/videos/ghast.mp4`,
    pdf: '',
    presentation: `${process.env.PUBLIC_URL}/slides/MC.pdf`
  },

  {
    id: 'SolidWorksSewing',
    title: 'Sewing Machine Modeling',
    description:
      'Deconstruction and virtual modelling of a sewing machine with rendered animation of completed product.',
    image: `${process.env.PUBLIC_URL}/photos/sewing.webp`,
    summary:
      'We were given a physical retired sewing machine with the task of fully disabling, measuring and digitizing the parts. the final model was then constructed and animated for demonstration.',
    github: '',
    video: `${process.env.PUBLIC_URL}/videos/Sew.mp4`,
    pdf: '',
    presentation: ''
  },

  {
    id: 'TempSensor',
    title: 'FBGA tempature sensor',
    description: 'Internal chip tempature reader using logic gates',
    image: `${process.env.PUBLIC_URL}/photos/temp.webp`,
    summary:
      'Using FPGA and gate logic the board was programmed to read the internal tempature by extracting values using on board registers. We then compared this with a coarse grain approach by using two microblazes to extract and display the data.',
    github: 'https://github.com/MagzTheMuffin/RCStemp',
    video: '',
    pdf: `${process.env.PUBLIC_URL}/pdfs/RCS.pdf`,
    presentation: ''
  },

  {
    id: 'RISCVSim',
    title: 'RISC-V simulator',
    description: 'Simulator for simple assembly operations in python.',
    image: `${process.env.PUBLIC_URL}/photos/risc.webp`,
    summary:
      'Simple RISC-V instruction simulator made in python. Has variety of supported inputs, ',
    github: 'https://github.com/MagzTheMuffin/RISCVSim',
    video: '',
    pdf: '',
    presentation: ''
  },

  {
    id: 'Figmadesign',
    title: 'Foodbank website',
    description:
      'Paper prototyping, figma design, full development cycle of creating prototypes for stakeholders',
    image: `${process.env.PUBLIC_URL}/photos/donate.webp`,
    summary:
      'This class was all about prototyping, taking feedback and creating a website from a clients needs. Starting by hearing the needs of clients and stakeholders a paper prototyping session aws born. After reviewing feedback the figma design was created which can be viewed through the github link',
    github:
      'https://www.figma.com/proto/Ea2MrHnzroLVtSOKRWRvYd/CIS3750---Paper-Prototyping?node-id=656-31&p=f&t=tYrSGltZpwMDUWil-1&scaling=min-zoom&content-scaling=fixed&page-id=1669%3A162202&starting-point-node-id=628%3A35',
    video: '',
    pdf: '',
    presentation: ''
  }
];

export default projectData;
