const projectData = [
    
    {
      id: 'PuzzleGame',
      title: 'Daily Date Puzzle',
      description: 'Puzzle game that refreshes every day, built for a website',
      image: '/photos/wordle.png',
      summary: 'I created this webiste to increase my front end skills. At the time, I had little knowledge of front end design and wanted to challenge myself to create a game on a website. I had also recently recieved a gift of an interesting board game and knew I had to create a prototype. In the future I plan to polish this website and add more puzzle games simular to the New York Times. This project was created with HTML, React, CSS and Javascript.',
      github: 'https://github.com/MagzTheMuffin/dategamepublic',
      video: ' ',
      pdf: ' ',
      presentation: ' '
    },
    
    {
      id: 'CapstoneDesign',
      title: 'Engineering Capstone Project',
      description: 'Lightweight eyetracking solution with external calculation device',
      image: '/photos/poster.png',
      summary: 'This was my capstone engineering project that was carried out over 2 semesters. The idea is to research a problem from start to finish and create a working prototype that addresses this issue. Our team decided to create a lightweight eyetracking device that tackles high costs of current systems, while keeping the flexibility and portability high. For more incformation read through the final report and see the demo of the prototype. ',
      github: ' ',
      video: '/videos/ai.mp4',
      pdf: '/pdfs/final.pdf',
      presentation: ' '
    },
    
    {
      id: 'Path',
      title: 'Path',
      description: 'Unity Mobile Game',
      image: '/photos/2.png',
      summary: 'This is a mobile game I started when I decided to begin game development. I wanted to learn some basic pathfinding and how to use Unity. Now, the full gameplay loop is complete and I am revisiting it to add a song, ads and screen flexibility so it works on all devices. The final step is to release it on the appstore later this year.',
      github: ' ',
      video: '/videos/Path.mp4',
      pdf: ' ',
      presentation: ' '
    },
    
    {
      id: 'HostageChess',
      title: 'Multiplayer Hostage Chess Game',
      description: 'Full-stack design of a chess game that can be played between computers',
      image: '/photos/chess.png',
      summary: 'This was a full semester project that was completed in stages to teach about full stack development. The back-end involved creating the game rules of hostage chess from scratch in a C file, implementing swig to allow for Python scripts to read these. Front end involved Javascript for the chess board and higher level functions. HTML, CSS, and DOM were used for design and navigation. SQL was alos used to record game moves and implement total game history.',
      github: 'https://github.com/MagzTheMuffin/HostageChess',
      video: ' ',
      pdf: ' ',
      presentation: ' '
    },
    
    {
      id: 'WirelessProject',
      title: 'Wireless Fall Detector',
      description: 'Wireless solution for fall detection that communicates between the device, basestation, and any mobile device',
      image: '/photos/WSN.png',
      summary: 'Final project in my wireless sensor networks class. The user would have the device attached to them and sensing at all times. The prototype communicates between the device, basestation, and any mobile device',
      github: 'https://github.com/MagzTheMuffin/WSN',
      video: '/videos/WSN.mp4',
      pdf: '',
      presentation: '/slides/WSN.pdf'
    },
    
    {
      id: 'PC',
      title: 'Program Counter',
      description: 'Program counter designed from transistor logic.',
      image: '/photos/VLSI.png',
      summary: 'This was the final project in my VLSI class. The focus was on understanding transistor logic and creating complex gates from them. In this project an 8-bit PC was designed with adder, mux, and register all design from transistors. The paper goes through power and size complexities and design choices that were made.',
      github: ' ',
      video: ' ',
      pdf: '/pdfs/VLSI.pdf',
      presentation: ' '
    },
  
    {
      id: 'RTOS',
      title: 'RTOS Security Camera',
      description: 'motion detection with real time video streaming',
      image: '/photos/RTOS.png',
      summary: 'This was the final project in my real time operating systems class. The program works by detecting motion, and then displaying the video feed if detected. The feed is streamed and displed on the LCD board or on the users pc if it is connected. Most of the coding done by us was to configure the camera correctly to ensure streaming as basic operating structure was provided for this project.',
      github: 'https://github.com/MagzTheMuffin/RTOS',
      video: ' ',
      pdf: '/pdfs/RTOS.pdf',
      presentation: ' '
    },
  
    {
      id: 'AIBenchmarking',
      title: 'AI training benchmarking',
      description: 'Showing the effect of trainging optimizers on training speed, and effeciency.',
      image: '/photos/AI.png',
      summary: 'Final project in advanced computer architecture class. Showing the effect of trainging optimizers on training speed, and effeciency. Code was ran on Google Colab for their high speed GPUs. The paper compares results to the base paper of ZeRO while measuring the expiremental results.',
      github: 'https://github.com/MagzTheMuffin/AIRuntimeComparison',
      video: ' ',
      pdf: '/pdfs/ACA.pdf',
      presentation: ' '
    },
  
    {
      id: 'KinderToy',
      title: 'Kinder Toy Design',
      description: 'Runner-ups in a engineering compitiion between all second year students at the university of Guelph',
      image: '/photos/Ghast.png',
      summary: 'At the university guelphs all engineers take a design course each semester where they must solve a constrained problem from start to finish. In second year the challenge was to make a functional toy that fits into a large kinder egg. after a semester of work our design was awarded runner up in the design contest, which is between all students in the class for our design and presentation skills.',
      github: ' ',
      video: '/videos/ghast.mp4',
      pdf: ' ',
      presentation: '/slides/MC.pdf'
    },
  
  
    {
      id: 'SolidWorksSewing',
      title: 'Sewing Machine Modeling',
      description: 'Deconstruction and virtual modelling of a sewing machine with rendered animation of completed product.',
      image: '/photos/sewing.png',
      summary: 'We were given a physical retired sewing machine with the task of fully disabling, measuring and digitizing the parts. the final model was then constructed and animated for demonstration.',
      github: ' ',
      video: '/videos/Sew.mp4',
      pdf: ' ',
      presentation: ' '
    },
  
    
    {
      id: 'TempSensor',
      title: 'FBGA tempature sensor',
      description: 'Internal chip tempature reader using logic gates',
      image: '/photos/temp.png',
      summary: 'Using FPGA and gate logic the board was programmed to read the internal tempature by extracting values using on board registers. We then compared this with a coarse grain approach by using two microblazes to extract and display the data.',
      github: 'https://github.com/MagzTheMuffin/RCStemp',
      video: ' ',
      pdf: '/pdfs/RCS.pdf',
      presentation: ' '
    },
  
    {
      id: 'RISCVSim',
      title: 'RISC-V simulator',
      description: 'Simulator for simple assembly operations in python.',
      image: '/photos/risc.png',
      summary: 'Simple RISC-V instruction simulator made in python. Has variety of supported inputs, ',
      github: 'https://github.com/MagzTheMuffin/RISCVSim',
      video: ' ',
      pdf: ' ',
      presentation: ' '
    },
  
    
    {
      id: 'Figmadesign',
      title: 'Foodbank website',
      description: 'Paper prototyping, figma design, full development cycle of creating prototypes for stakeholders',
      image: '/photos/donate.png',
      summary: 'This class was all about prototyping, taking feedback and creating a website from a clients needs. Starting by hearing the needs of clients and stakeholders a paper prototyping session aws born. After reviewing feedback the figma design was created which can be viewed through the github link',
      github: 'https://www.figma.com/proto/Ea2MrHnzroLVtSOKRWRvYd/CIS3750---Paper-Prototyping?node-id=656-31&p=f&t=tYrSGltZpwMDUWil-1&scaling=min-zoom&content-scaling=fixed&page-id=1669%3A162202&starting-point-node-id=628%3A35',
      video: ' ',
      pdf: ' ',
      presentation: ' '
    },
  
  

  ];

export default projectData;