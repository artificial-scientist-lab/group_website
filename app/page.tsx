"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type ReactNode } from "react";

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  image: string;
  links: { label: string; href: string }[];
};

type AlumniMember = {
  name: string;
  role: string;
  period: string;
  leftAt: string;
  current?: string;
  links?: { label: string; href: string }[];
  thesis?: {
    title: string;
    href: string;
    downloadName: string;
  };
};

type GroupPhoto = {
  date: string;
  image: string;
  names: string[];
};

type Paper = {
  date: string;
  title: string;
  venue: string;
  href: string;
};

type Project = {
  name: string;
  stars: number;
  description: string;
  href: string;
};

type CoreChallenge = {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
  };
  researchDetails?: {
    beforeImage?: ReactNode;
    afterImage?: ReactNode;
  };
  links?: { label: string; href: string }[];
};

type CookieChoice = "essential" | "all";

type CookieConsentRecord = {
  choice: CookieChoice;
  updatedAt: string;
  version: 1;
};

const teamMembers: TeamMember[] = [
  {
    name: "Mario Krenn",
    role: "Professor",
    focus: "Excited about the future of AI-augmented ideas and concepts in science, and in general about the acceleration of science and technology through artificial intelligence.",
    image: "/team/mario-krenn.png",
    links: [
      { label: "Website", href: "https://mariokrenn.wordpress.com/" },
      { label: "GitHub", href: "https://github.com/MarioKrenn6240" },
    ],
  },
  {
    name: "Michael Mergner",
    role: "Group Admin",
    focus: "",
    image: "/team/michael-mergner.jpg",
    links: [],
  },
  {
    name: "Marcello Armezzani",
    role: "PhD student",
    focus: "Fascinated by the innovations that AI can bring to the study of physics, both in its experimental applications and especially in its epistemological foundations. Other more or less related interests include: philosophy of science, postmodern novels, playing and (nowadays mostly) watching rugby.",
    image: "/team/marcello-armezzani.jpg",
    links: [],
  },
  {
    name: "Sören Arlt",
    role: "PhD student",
    focus: "I enjoy thinking about computer-inspired physics and other interesting things. I like going on adventures in nature as well as learning new skills (some can be useful, one is riding a unicycle).",
    image: "/team/soeren-arlt.jpeg",
    links: [
      { label: "GitHub", href: "https://github.com/soerenarlt" },
      { label: "X", href: "https://twitter.com/soerenarlt" },
    ],
  },
  {
    name: "Soham Basu",
    role: "PhD student",
    focus: "",
    image: "/team/soham-basu.svg",
    links: [],
  },
  {
    name: "Tareq Jaouni",
    role: "PhD student",
    focus: "Joint PhD student with Dr. Ebrahim Karimi's Structured Quantum Optics group at the University of Ottawa. Intrigued by what sort of novel ideas in physics can be concocted by an artificial scientist. Primary interests include food, cycling, coding, Pok\u00e9mon, reading out loud, and role-playing.",
    image: "/team/tareq-jaouni.jpg",
    links: [{ label: "GitHub", href: "https://github.com/TareqJ1000" }],
  },
  {
    name: "Jonathan Klimesch",
    role: "PhD student",
    focus: "Interpretable AI for scientific problem solving and structured knowledge systems.",
    image: "/team/jonathan-klimesch.jpg",
    links: [
      { label: "Website", href: "https://www.phylomatx.com/" },
      { label: "GitHub", href: "https://github.com/PhylomatX" },
    ],
  },
  {
    name: "Pontus Lindgren",
    role: "PhD student",
    focus: "",
    image: "/team/pontus-lindgren.svg",
    links: [],
  },
  {
    name: "Carlos Ruiz Gonz\u00e1lez",
    role: "PhD student",
    focus: "Always curious about unexpected phenomena and applications from Quantum Physics. Also interested in Social Sciences, Music, Cooking, Science Fiction, and, of course, Artificial Intelligence. At some point I expect to beat Mario at Go.",
    image: "/team/carlos-ruiz-gonzalez.jpg",
    links: [],
  },
  {
    name: "Carlo Wenig",
    role: "PhD student",
    focus: "",
    image: "/team/carlo-wenig.jpg",
    links: [],
  },
  {
    name: "Lalit Chaudhary",
    role: "Master student",
    focus: "",
    image: "/team/lalit-chaudhary.jpg",
    links: [],
  },
  {
    name: "Priya Kanagasabapathi",
    role: "Master student",
    focus: "Interpretable ML and deep learning for scientific applications.",
    image: "/team/priya-kanagasabapathi.jpeg",
    links: [{ label: "GitHub", href: "https://github.com/priya-ks1703" }],
  },
  {
    name: "Raphael Jontofsohn",
    role: "Bachelor student",
    focus: "",
    image: "/team/raphael-jontofsohn.jpg",
    links: [],
  },
  {
    name: "Laurin Sefa",
    role: "Bachelor student",
    focus: "",
    image: "/team/laurin-sefa.svg",
    links: [],
  },
];

const alumniMembers: AlumniMember[] = [
  {
    name: "Carla Rodriguez",
    role: "Postdoctoral researcher",
    period: "July 2022 - April 2025",
    leftAt: "2025-04",
    current: "Currently: AI Scientist at HHMI (Janelia, Washington DC)",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/carla-rodriguez-46398b183/" }],
  },
  {
    name: "Xuemei Gu",
    role: "Alexander-von-Humboldt Postdoctoral Fellow",
    period: "August 2022 - January 2025",
    leftAt: "2025-01",
    current: "Currently: Junior Research Group Leader (University of Jena)",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/xuemei-gu-11a51888/" }],
  },
  {
    name: "Lode Vermeulen",
    role: "External bachelor student",
    period: "March 2024 - July 2024",
    leftAt: "2024-07",
    thesis: {
      title: "Formal Verification of Mathematics Behind Quantum Optics Experiments",
      href: "/theses/lode-vermeulen-bachelor-thesis.pdf",
      downloadName: "lode-vermeulen-bachelor-thesis.pdf",
    },
  },
  {
    name: "Philipp S. Schmidt",
    role: "Master student",
    period: "March 2023 - March 2024",
    leftAt: "2024-03",
    current: "Currently: PhD student at University of Heidelberg",
    thesis: {
      title: "Interpretable Representations of Artificially Discovered Experiments in Quantum Optics via Virtual Reality",
      href: "/theses/philipp-s-schmidt-master-thesis.pdf",
      downloadName: "philipp-s-schmidt-master-thesis.pdf",
    },
  },
  {
    name: "Juilee Kulkarni",
    role: "Master student",
    period: "December 2021 - December 2022",
    leftAt: "2022-12",
    thesis: {
      title: "Prediction of future research trends in Optics using Semantic Analysis and Artificial Neural Networks",
      href: "/theses/juilee-kulkarni-master-thesis.pdf",
      downloadName: "juilee-kulkarni-master-thesis.pdf",
    },
  },
  {
    name: "Jan Petermann",
    role: "Bachelor student",
    period: "July 2022 - November 2022",
    leftAt: "2022-11",
    thesis: {
      title: "Digital Discovery of Experimental Setups for Creating Highly-Entangled Quantum States",
      href: "/theses/jan-petermann-bachelor-thesis.pdf",
      downloadName: "jan-petermann-bachelor-thesis.pdf",
    },
  },
];

const groupPhotos: GroupPhoto[] = [
  {
    date: "May 2025",
    image: "/group-pictures/may-2025.jpg",
    names: ["Tareq", "Marcello", "Sören", "Priya", "Jonathan", "Carlos", "Xuemei", "Carla", "Mario"],
  },
  {
    date: "October 2023",
    image: "/group-pictures/october-2023.jpg",
    names: ["Xuemei", "Sören", "Olek", "Carla", "Carlos", "Philipp", "Mario"],
  },
  {
    date: "July 2022",
    image: "/group-pictures/july-2022.jpg",
    names: ["Mario", "Carla", "Juilee", "Carlos", "Sören", "Jan", "Burak", "Tareq"],
  },
  {
    date: "March 2022",
    image: "/group-pictures/march-2022.jpg",
    names: ["Mario", "Carlos", "Juilee", "Sören"],
  },
];

const publications: Paper[] = [
  {
    date: "2026",
    title: "Meta-Designing Quantum Experiments with Language Models",
    venue: "Nature Machine Intelligence 8, 148",
    href: "https://www.nature.com/articles/s42256-025-01153-0",
  },
  {
    date: "2025",
    title: "Neural surrogates for designing gravitational wave detectors",
    venue: "arXiv:2511.19364",
    href: "https://arxiv.org/abs/2511.19364",
  },
  {
    date: "2025",
    title: "Analytical Fock Representation of Two-Mode Squeezing for Quantum Interference",
    venue: "arXiv:2511.16529",
    href: "https://arxiv.org/abs/2511.16529",
  },
  {
    date: "2025",
    title: "Towards autonomous quantum physics research using LLM agents with access to intelligent tools",
    venue: "arXiv:2511.11752",
    href: "https://arxiv.org/abs/2511.11752",
  },
  {
    date: "2025",
    title: "Automated Discovery of Non-local Photonic Gates",
    venue: "arXiv:2511.04648",
    href: "https://arxiv.org/abs/2511.04648",
  },
  {
    date: "2025",
    title: "Automated discovery of high-dimensional multipartite entanglement with photons that never interacted",
    venue: "arXiv:2510.10707",
    href: "https://arxiv.org/abs/2510.10707",
  },
  {
    date: "2025",
    title: "Quantum computing and artificial intelligence: status and perspectives",
    venue: "arXiv:2505.23860",
    href: "https://arxiv.org/abs/2505.23860",
  },
  {
    date: "2025",
    title: "Tutorial: Hong-Ou-Mandel interference with Structured Photons",
    venue: "Nanophotonics 14 (23), 4163",
    href: "https://www.degruyterbrill.com/document/doi/10.1515/nanoph-2025-0034/html",
  },
  {
    date: "2025",
    title: "Violation of Bell inequality with unentangled photons",
    venue: "Science Advances 11, eadr1794",
    href: "https://www.science.org/doi/10.1126/sciadv.adr1794",
  },
  {
    date: "2025",
    title: "Forecasting high-impact research topics via machine learning on evolving knowledge graphs",
    venue: "Machine Learning: Science and Technology 6 (2), 025041",
    href: "https://iopscience.iop.org/article/10.1088/2632-2153/add6ef",
  },
  {
    date: "2025",
    title: "Digital Discovery of interferometric Gravitational Wave Detectors",
    venue: "Phys. Rev. X 15, 021012",
    href: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.15.021012",
  },
  {
    date: "2025",
    title: "Discovering emergent connections in quantum physics research via dynamic word embeddings",
    venue: "Machine Learning: Science and Technology 6, 015029",
    href: "https://iopscience.iop.org/article/10.1088/2632-2153/adb00a",
  },
  {
    date: "2025",
    title: "Predicting atmospheric turbulence for secure quantum communications in free space",
    venue: "Optics Express 33 (5), 10759",
    href: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-33-5-10759&id=568775",
  },
  {
    date: "2024",
    title: "Generation and human-expert evaluation of interesting research ideas using knowledge graphs and large language models",
    venue: "arXiv:2405.17044",
    href: "https://arxiv.org/abs/2405.17044",
  },
  {
    date: "2024",
    title: "Automated discovery of experimental designs in super-resolution microscopy with XLuminA",
    venue: "Nature Comm. 15, 10658",
    href: "https://www.nature.com/articles/s41467-024-54696-y",
  },
  {
    date: "2024",
    title: "Entangling Independent Particles by Path Identity",
    venue: "Phys. Rev. Lett. 133, 233601",
    href: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.233601",
  },
  {
    date: "2024",
    title: "Emulating Multiparticle Emitters with Pair-Sources: Digital Discovery of a Quantum Optics Building Block",
    venue: "Quantum Science and Technology 10 (1), 015042",
    href: "https://iopscience.iop.org/article/10.1088/2058-9565/ad904f",
  },
  {
    date: "2024",
    title: "Virtual Reality for Understanding Artificial-Intelligence-driven Scientific Discovery with an Application in Quantum Optics",
    venue: "Machine Learning: Science and Technology 5 (3), 035045",
    href: "https://iopscience.iop.org/article/10.1088/2632-2153/ad5fdb",
  },
  {
    date: "2024",
    title: "Quantum interference between distant creation processes",
    venue: "Phys. Rev. Research 6, 013294",
    href: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.013294",
  },
  {
    date: "2024",
    title: "Deep Quantum Graph Dreaming: Deciphering Neural Network Insights into Quantum Experiments",
    venue: "Machine Learning: Science and Technology 5 (1), 015029",
    href: "https://iopscience.iop.org/article/10.1088/2632-2153/ad2628",
  },
  {
    date: "2023",
    title: "Experimental Solutions to the High-Dimensional Mean King's Problem",
    venue: "Optica Quantum 1 (2), 49",
    href: "https://doi.org/10.1364/OPTICAQ.502451",
  },
  {
    date: "2023",
    title: "Digital Discovery of 100 diverse Quantum Experiments with PyTheus",
    venue: "Quantum 7, 1204",
    href: "https://quantum-journal.org/papers/q-2023-12-12-1204/",
  },
  {
    date: "2023",
    title: "Forecasting the future of artificial intelligence with machine learning-based link prediction in an exponentially growing knowledge network",
    venue: "Nature Machine Intelligence 5 (11), 1326",
    href: "https://www.nature.com/articles/s42256-023-00735-0",
  },
  {
    date: "2023",
    title: "Roadmap on structured waves",
    venue: "Journal of Optics 25, 103001",
    href: "https://iopscience.iop.org/article/10.1088/2040-8986/acea92/meta",
  },
  {
    date: "2023",
    title: "Recent advances in the Self-Referencing Embedding Strings (SELFIES) library",
    venue: "Digital Discovery 2, 897",
    href: "https://pubs.rsc.org/en/content/articlelanding/2023/DD/D3DD00044C",
  },
  {
    date: "2023",
    title: "Multiphoton non-local quantum interference controlled by an undetected photon",
    venue: "Nature Communications 14, 1480",
    href: "https://www.nature.com/articles/s41467-023-37228-y",
  },
  {
    date: "2023",
    title: "On-chip quantum interference between the origins of a multi-photon state",
    venue: "Optica 10 (1), 105-109",
    href: "https://doi.org/10.1364/OPTICA.474750",
  },
  {
    date: "2023",
    title: "Artificial Intelligence and Machine Learning for Quantum Technologies",
    venue: "Phys. Rev. A 107, 010101",
    href: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.107.010101",
  },
  {
    date: "2022",
    title: "SELFIES and the future of molecular string representations",
    venue: "Cell Patterns 3 (10), 100588",
    href: "https://www.cell.com/patterns/fulltext/S2666-3899(22)00206-9",
  },
  {
    date: "2022",
    title: "On scientific understanding with artificial intelligence",
    venue: "Nature Review Physics 4, 761",
    href: "https://www.nature.com/articles/s42254-022-00518-3",
  },
  {
    date: "2022",
    title: "Design of quantum optical experiments with logic artificial intelligence",
    venue: "Quantum 6, 836",
    href: "https://quantum-journal.org/papers/q-2022-10-13-836/",
  },
  {
    date: "2022",
    title: "Curiosity in exploring chemical spaces: intrinsic rewards for molecular reinforcement learning",
    venue: "Machine Learning: Science and Technology 3 (3), 035008",
    href: "https://iopscience.iop.org/article/10.1088/2632-2153/ac7ddc",
  },
  {
    date: "2022",
    title: "Quantum indistinguishability by path identity and with undetected photons",
    venue: "Rev. Mod. Phys. 94, 025007",
    href: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.94.025007",
  },
  {
    date: "2022",
    title: "Learning interpretable representations of entanglement in quantum optics experiments using deep generative models",
    venue: "Nature Machine Intelligence 4, 544",
    href: "https://www.nature.com/articles/s42256-022-00493-5",
  },
  {
    date: "2022",
    title: "Experimental high-dimensional Greenberger-Horne-Zeilinger entanglement with superconducting transmon qutrits",
    venue: "Phys. Rev. Applied 17, 024062",
    href: "https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.17.024062",
  },
  {
    date: "2021",
    title: "Quantum Optical Experiments Modeled by Long Short-Term Memory",
    venue: "Photonics 8 (12), 535",
    href: "https://www.mdpi.com/2304-6732/8/12/535",
  },
  {
    date: "2021",
    title: "Conceptual understanding through efficient automated design of quantum optical experiments",
    venue: "Phys. Rev. X 11 (3), 031044",
    href: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.11.031044",
  },
  {
    date: "2021",
    title: "Deep Molecular Dreaming: Inverse machine learning for de-novo molecular design and interpretability with surjective representations",
    venue: "Machine Learning: Science and Technology 2 (3), 03LT02",
    href: "https://iopscience.iop.org/article/10.1088/2632-2153/ac09d6",
  },
  {
    date: "2021",
    title: "Quantum Computer-Aided design of Quantum Optics Hardware",
    venue: "Quantum Science and Technology 6 (3), 035010",
    href: "https://iopscience.iop.org/article/10.1088/2058-9565/abfc94",
  },
  {
    date: "2021",
    title: "Scientific intuition inspired by machine learning-generated hypotheses",
    venue: "Machine Learning: Science and Technology 2 (2), 025027",
    href: "https://iopscience.iop.org/article/10.1088/2632-2153/abda08/meta",
  },
  {
    date: "2021",
    title: "Beyond generative models: superfast traversal, optimization, novelty, exploration and discovery (STONED) algorithm for molecules using SELFIES",
    venue: "Chemical Sciences 12 (20), 7079",
    href: "https://pubs.rsc.org/en/content/articlelanding/2021/SC/D1SC00231G#!divAbstract",
  },
  {
    date: "2021",
    title: "Data-Driven Strategies for Accelerated Materials Design",
    venue: "Accounts of Chemical Research 54 (4), 849-860",
    href: "https://pubs.acs.org/doi/10.1021/acs.accounts.0c00785",
  },
];

const publicationsByYear = publications.reduce<Array<{ year: string; papers: Paper[] }>>((groups, paper) => {
  const previousGroup = groups[groups.length - 1];

  if (!previousGroup || previousGroup.year !== paper.date) {
    groups.push({ year: paper.date, papers: [paper] });
    return groups;
  }

  previousGroup.papers.push(paper);
  return groups;
}, []);

const publicationAuthorsByTitle: Record<string, string> = {
  "Meta-Designing Quantum Experiments with Language Models": "Arlt, Duan, Li, Xie, Wu, Krenn",
  "Neural surrogates for designing gravitational wave detectors": "Ruiz-Gonzalez, Arlt, Lehner, Berzins, Drori, Adhikari, Brandstetter, Krenn",
  "Analytical Fock Representation of Two-Mode Squeezing for Quantum Interference": "Gu, Ruiz-Gonzalez, Krenn",
  "Towards autonomous quantum physics research using LLM agents with access to intelligent tools": "Arlt, Gu, Krenn",
  "Automated Discovery of Non-local Photonic Gates": "Arlt, Krenn, Gu",
  "Automated discovery of high-dimensional multipartite entanglement with photons that never interacted": "Arlt, Krenn, Gu",
  "Quantum computing and artificial intelligence: status and perspectives": "Acampora, Ambainis, Ares, Banchi, Bhardwaj, Binosi, Briggs, Calarco, Dunjko, Eisert, Ezratty, Erker, Fedele, Gil-Fuster, Garttner, Granath, Heyl, Kerenidis, Klusch, Frisk Kockum, Kueng, Krenn, Lassig, Macaluso, Maniscalco, Marquardt, Michielsen, Munoz-Gil, Mussig, Poulsen Nautrup, van Nieuwenburg, Orus, Schmiedmayer, Schmitt, Slusallek, Vicentini, Weitenberg, Wilhelm",
  "Tutorial: Hong-Ou-Mandel interference with Structured Photons": "Jaouni, Gu, Krenn, D'Errico, Karimi",
  "Violation of Bell inequality with unentangled photons": "Wang, Hou, Qian, Chen, Krenn, Aspelmeyer, Zeilinger, Zhu, Ma",
  "Forecasting high-impact research topics via machine learning on evolving knowledge graphs": "Gu, Krenn",
  "Digital Discovery of interferometric Gravitational Wave Detectors": "Krenn, Drori, Adhikari",
  "Discovering emergent connections in quantum physics research via dynamic word embeddings": "Frohnert, Gu, Krenn, van Nieuwenburg",
  "Predicting atmospheric turbulence for secure quantum communications in free space": "Jaouni, Scarfe, Bouchard, Krenn, Heshami, Di Colandrea, Karimi",
  "Generation and human-expert evaluation of interesting research ideas using knowledge graphs and large language models": "Gu, Krenn",
  "Automated discovery of experimental designs in super-resolution microscopy with XLuminA": "Rodriguez, Arlt, Moeckl, Krenn",
  "Entangling Independent Particles by Path Identity": "Wang, Hou, Qian, Chen, Krenn, Zhu, Ma",
  "Emulating Multiparticle Emitters with Pair-Sources: Digital Discovery of a Quantum Optics Building Block": "Arlt, Ruiz-Gonzalez, Krenn",
  "Virtual Reality for Understanding Artificial-Intelligence-driven Scientific Discovery with an Application in Quantum Optics": "Schmidt, Arlt, Ruiz-Gonzalez, Gu, Rodriguez, Krenn",
  "Quantum interference between distant creation processes": "Pseiner, Erhard, Krenn",
  "Deep Quantum Graph Dreaming: Deciphering Neural Network Insights into Quantum Experiments": "Jaouni, Arlt, Ruiz-Gonzalez, Karimi, Gu, Krenn",
  "Experimental Solutions to the High-Dimensional Mean King's Problem": "Jaouni, Gao, Arlt, Krenn, Karimi",
  "Digital Discovery of 100 diverse Quantum Experiments with PyTheus": "Ruiz-Gonzalez, Arlt, Petermann, Sayyad, Jaouni, Karimi, Tischler, Gu, Krenn",
  "Forecasting the future of artificial intelligence with machine learning-based link prediction in an exponentially growing knowledge network": "Krenn, Buffoni, Coutinho, Eppel, Foster, Gritsevskiy, Lee, Lu, Moutinho, Sanjabi, Sonthalia, Tran, Valente, Xie, Yu, Kopp",
  "Roadmap on structured waves": "Bliokh, Karimi, Padgett, Alonso, Dennis, Dudley, Forbes, Zahedpour, Hancock, Milchberg, Rotter, Nori, Ozdemir, Bender, Cao, Corkum, Hernandez-Garcia, Ren, Kivshar, Silveirinha, Engheta, Rauschenbeutel, Schneeweiss, Volz, Leykam, Smirnova, Rong, Wang, Hasman, Picardi, Zayats, Rodriguez-Fortuno, Yang, Ren, Khanikaev, Alu, Brasselet, Shats, Verbeeck, Schattschneider, Sarenac, Cory, Pushin, Birk, Gorlach, Kaminer, Cardano, Marrucci, Krenn, Marquardt",
  "Recent advances in the Self-Referencing Embedding Strings (SELFIES) library": "Lo, Pollice, Nigam, White, Krenn, Aspuru-Guzik",
  "Multiphoton non-local quantum interference controlled by an undetected photon": "Qian, Wang, Chen, Hou, Krenn, Zhu, Ma",
  "On-chip quantum interference between the origins of a multi-photon state": "Feng, Zhang, Liu, Cheng, Guo, Dai, Guo, Krenn, Ren",
  "Artificial Intelligence and Machine Learning for Quantum Technologies": "Krenn, Landgraf, Foesel, Marquardt",
  "SELFIES and the future of molecular string representations": "Krenn, Ai, Barthel, Carson, Frei, Frey, Friederich, Gaudin, Gayle, Jablonka, Lameiro, Lemm, Lo, Moosavi, Napoles-Duarte, Nigam, Pollice, Rajan, Schatzschneider, Schwaller, Skreta, Smit, Strieth-Kalthoff, Sun, Tom, von Rudorff, Wang, White, Young, Yu, Aspuru-Guzik",
  "On scientific understanding with artificial intelligence": "Krenn, Pollice, Guo, Aldeghi, Cervera-Lierta, Friederich, dos Passos Gomes, Haese, Jinich, Nigam, Yao, Aspuru-Guzik",
  "Design of quantum optical experiments with logic artificial intelligence": "Cervera-Lierta, Krenn, Aspuru-Guzik",
  "Curiosity in exploring chemical spaces: intrinsic rewards for molecular reinforcement learning": "Thiede, Krenn, Nigam, Aspuru-Guzik",
  "Quantum indistinguishability by path identity and with undetected photons": "Hochrainer, Lahiri, Erhard, Krenn, Zeilinger",
  "Learning interpretable representations of entanglement in quantum optics experiments using deep generative models": "Flam-Shepherd, Wu, Gu, Cervera-Lierta, Krenn, Aspuru-Guzik",
  "Experimental high-dimensional Greenberger-Horne-Zeilinger entanglement with superconducting transmon qutrits": "Cervera-Lierta, Krenn, Aspuru-Guzik, Galda",
  "Quantum Optical Experiments Modeled by Long Short-Term Memory": "Adler, Erhard, Krenn, Brandstetter, Kofler, Hochreiter",
  "Conceptual understanding through efficient automated design of quantum optical experiments": "Krenn, Kottmann, Tischler, Aspuru-Guzik",
  "Deep Molecular Dreaming: Inverse machine learning for de-novo molecular design and interpretability with surjective representations": "Shen, Krenn, Eppel, Aspuru-Guzik",
  "Quantum Computer-Aided design of Quantum Optics Hardware": "Kottmann, Krenn, Kyaw, Alperin-Lea, Aspuru-Guzik",
  "Scientific intuition inspired by machine learning-generated hypotheses": "Friederich, Krenn, Tamblyn, Aspuru-Guzik",
  "Beyond generative models: superfast traversal, optimization, novelty, exploration and discovery (STONED) algorithm for molecules using SELFIES": "Nigam, Pollice, Krenn, dos Passos Gomes, Aspuru-Guzik",
  "Data-Driven Strategies for Accelerated Materials Design": "Pollice, dos Passos Gomes, Aldeghi, Hickman, Krenn, Lavigne, Lindner-D'Addario, Nigam, Ser, Yao, Aspuru-Guzik",
};

const githubProjects: Project[] = [
  {
    name: "PyTheus",
    stars: 194,
    description: "Inverse-design framework for quantum optical experiments.",
    href: "https://github.com/artificial-scientist-lab/PyTheus",
  },
  {
    name: "FutureOfAIviaAI",
    stars: 83,
    description: "Predicting the future of AI research using network prediction.",
    href: "https://github.com/artificial-scientist-lab/FutureOfAIviaAI",
  },
  {
    name: "XLuminA",
    stars: 57,
    description: "Auto-differentiating discovery framework for super-resolution microscopy.",
    href: "https://github.com/artificial-scientist-lab/XLuminA",
  },
  {
    name: "Impact4Cast",
    stars: 48,
    description: "Forecasting high-impact research topics from evolving knowledge graphs.",
    href: "https://github.com/artificial-scientist-lab/Impact4Cast",
  },
  {
    name: "SciMuse",
    stars: 33,
    description: "LLM + knowledge graph pipeline for scientific idea generation.",
    href: "https://github.com/artificial-scientist-lab/SciMuse",
  },
  {
    name: "GWDetectorZoo",
    stars: 25,
    description: "AI-driven exploration of gravitational wave detector designs.",
    href: "https://github.com/artificial-scientist-lab/GWDetectorZoo",
  },
  {
    name: "Differometor",
    stars: 14,
    description: "Differentiable interferometer simulator for detector design.",
    href: "https://github.com/artificial-scientist-lab/Differometor",
  },
  {
    name: "ai-mandel",
    stars: 11,
    description: "Prototype AI physicist with LLM agents and domain tools.",
    href: "https://github.com/artificial-scientist-lab/ai-mandel",
  },
];

const coreChallenges: CoreChallenge[] = [
  {
    title: "AI-designed experiments",
    text: "Experiments are our windows to the universe. Yet, the space of all possible experiments is enormously large. Did humans already find all useful experiments, or are there yet undiscovered but exceptional experimental ideas that can lead to new ways to explore the world?",
    image: {
      src: "/research/ai-designed-experiments-workflow.png",
      alt: "Diagram showing a workflow for AI-designed experiments with search space, physics simulator, objective function, and AI exploration.",
    },
    researchDetails: {
      beforeImage: (
        <>
          <p>
            Experiments are our windows to the universe. Yet, the space of all possible experiments is enormously
            large. Did humans already find all useful experiments, or are there yet undiscovered but exceptional
            experimental ideas that can lead to new ways to explore the world?
          </p>
          <p>
            We can split this question into four pillars: extremely large and complex search spaces, fast and
            reliable simulators, meaningful objective functions, and clever AI-exploration algorithms.
          </p>
        </>
      ),
      afterImage: (
        <>
          <p>
            <strong>AI-designed Quantum Experiments: </strong>
            We started using AI for the design of physics experiments in 2014, published in{" "}
            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.090405"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              2016
            </a>
            , where our first program Melvin discovered numerous new experiments for high-dimensional multipartite
            quantum entanglement, several of which were later built in laboratories:{" "}
            <a
              href="https://www.nature.com/articles/s41566-018-0257-6"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Nature Photonics 2018
            </a>
            ,{" "}
            <a
              href="https://www.nature.com/articles/nphoton.2016.12"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Nature Photonics 2016
            </a>
            , and{" "}
            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.119.180510"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Phys. Rev. Lett. 2017
            </a>
            . These solutions contained surprising results, and we were able to conceptually understand several of
            them, for example an entirely new way to create photonic quantum entanglement denoted as{" "}
            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.118.080401"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Entanglement by Path Identity
            </a>
            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.119.240403"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              new bridge between quantum optics and graph theory
            </a>{" "}
            that has led to the{" "}
            <a
              href="https://www.pnas.org/doi/10.1073/pnas.1815884116"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              discovery of new interference effects
            </a>
            .
          </p>
          <p>
            Since then we have developed many further methods.{" "}
            <a
              href="https://quantum-journal.org/papers/q-2023-12-12-1204/"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              PyTheus
            </a>{" "}
            (spearheaded by Carlos Ruiz Gonz\u00e1lez and S\u00f6ren Arlt) is an algorithm for designing vastly
            diverse quantum experiments, for quantum state generation, the
            design of single- and multi-photon transformations, and new communication protocols. One surprising new
            discovery, a new way to entangle independent photons, has been experimentally implemented by the
            experimental group of Xiaosong Ma in Nanjing, China, a former PhD colleague of Mario from Anton
            Zeilinger&apos;s lab:{" "}
            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.233601"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Phys. Rev. Lett. 2024
            </a>
            .
          </p>
          <p>
            <strong>AI-designed microscopes: </strong>
            Driven by human ingenuity and creativity, the discovery of super-resolution techniques, which circumvent
            the classical diffraction limit of light, represents a leap in optical microscopy. However, the vast
            space encompassing all possible experimental configurations suggests that some powerful concepts and
            techniques might have not been discovered yet, and might never be with a human-driven direct design
            approach. Thus, AI-based exploration techniques could provide enormous benefit, by exploring this space
            in a fast, unbiased way. We developed{" "}
            <a
              href="https://www.nature.com/articles/s41467-024-54696-y"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              XLuminA
            </a>{" "}
            (spearheaded by Carla Rodriguez), an open-source computational framework developed using
            JAX, a high-performance computing library in Python. XLuminA speeds up simulation by 4 orders of
            magnitude, which thus allows exploration of the space of possible microscope concepts much faster than
            before.
          </p>
          <p>
            <strong>AI-designed Gravitational Wave Detectors: </strong>
            Gravitational waves are created by some of the most extreme events in the universe, such as the
            collision of black holes or the explosion of stars. These ripples of space-time then propagate through
            space towards Earth. When they reach us, they are extremely faint signals. It took 100 years since
            their prediction by Einstein to detect them. That became possible in 2016 through the international
            LIGO collaboration. The experiment built by LIGO is an interferometric system based on
            Michelson&apos;s interferometer, designed by ingenious human scientists. The question is: did humans
            find the best way to measure gravitational waves, or do there exist new experiments that are practical
            and significantly more sensitive? Together with Rana Adhikari and Yehonathan Drori from the Caltech
            LIGO Lab, we explore this question using AI. We indeed discovered more than 50 blueprints that, at
            least theoretically,{" "}
            <a
              href="https://journals.aps.org/prx/abstract/10.1103/PhysRevX.15.021012"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              outperform the previous best-performing setups
            </a>
            . We spent months exploring the best-performing solutions, and while we were able to extract simple
            conceptual cores from some of them, we were not able to understand the big picture behind most of the
            solutions. This indicates an important challenge for the future of AI for scientific discovery.
          </p>
          <p>
            Similar to the microscopy case, we took the original simulator for gravitational-wave optics, Finesse,
            developed by the group of Andreas Freise, and reproduced the crucial core in JAX, which gave an
            enormous speed-up. The simulator,{" "}
            <a
              href="https://github.com/artificial-scientist-lab/Differometor"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Differometor
            </a>
            , has been developed by Jonathan Klimesch.
          </p>
        </>
      ),
    },
    links: [
      {
        label: "Digital Discovery of 100 diverse Quantum Experiments with PyTheus",
        href: "https://quantum-journal.org/papers/q-2023-12-12-1204/",
      },
      {
        label: "Automated discovery of experimental designs in super-resolution microscopy with XLuminA",
        href: "https://www.nature.com/articles/s41467-024-54696-y",
      },
      {
        label: "Digital Discovery of Interferometric Gravitational Wave Detectors",
        href: "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.15.021012",
      },
    ],
  },
  {
    title: "Understanding AI-solutions",
    text: "If an AI discovers solutions that are better than all human solutions, it needs to contain new tricks and ideas that we could learn from. Here are some examples where it worked successfully and where we made progress in simplifying the understanding:",
    image: {
      src: "/research/understanding-ai-solutions-metadesign.png",
      alt: "Diagram showing meta-designing a class of experiments with synthetic data, a language model, and generated general rules for designing experiments of arbitrary size.",
    },
    researchDetails: {
      beforeImage: (
        <p>
          If an AI discovers solutions that are better than all human solutions, it needs to contain new tricks and
          ideas that we could learn from. As scientists, we want to understand these new tricks and concepts
          discovered by the machine.
        </p>
      ),
      afterImage: (
        <>
          <p>
            The first time we faced this problem was in a case where our algorithm{" "}
            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.090405"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Melvin
            </a>{" "}
            discovered new high-dimensional multipartite entangled systems that seemed to be more strongly entangled
            than allowed. After analyzing the solutions for weeks, we found that it had discovered an entirely new
            way to generate quantum entanglement in photonics. We described this technique as{" "}
            <a
              href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.118.080401"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Entanglement by Path Identity
            </a>
            . In another instance, we investigated entanglement generation with{" "}
            <a
              href="https://quantum-journal.org/papers/q-2023-12-12-1204/"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              PyTheus
            </a>
            . We discovered that PyTheus invented a new trick to generate high-dimensional entanglement: it
            discovered a structure resembling a probabilistic multi-photon emitter just by building two-photon
            emitters. When we understood this technique, we were immediately able to generalize it to other
            situations. This new principle, spearheaded by Soeren Arlt, was published as{" "}
            <a
              href="https://iopscience.iop.org/article/10.1088/2058-9565/ad904f/meta"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Emulating multiparticle emitters with pair-sources: digital discovery of a quantum optics building block
            </a>
            .
          </p>
          <p>
            A crucial step is the idea of{" "}
            <a
              href="https://www.nature.com/articles/s42256-025-01153-0"
              target="_blank"
              rel="noreferrer"
              className="challenge-inline-link"
            >
              Meta-Design
            </a>{" "}
            (see pic above, pioneered by Soeren Arlt). Here, instead of designing solutions for individual
            questions and trying to understand them afterwards, we trained a language model that produces Python
            code. The produced Python code solves whole classes of questions at once. Beautifully, instead of
            having to analyze each solution independently, we can just look at the generated Python code, which
            contains the main principle of a generalizable solution.
          </p>
        </>
      ),
    },
    links: [
      {
        label: "Meta-designing quantum experiments with language models",
        href: "https://www.nature.com/articles/s42256-025-01153-0",
      },
      {
        label: "Emulating multiparticle emitters with pair-sources: digital discovery of a quantum optics building block",
        href: "https://iopscience.iop.org/article/10.1088/2058-9565/ad904f/meta",
      },
    ],
  },
  {
    title: "Scientific Ideas from AI",
    text: "How can we use millions of scientific papers to create personalized, interesting, and high-impact ideas?",
    image: {
      src: "/research/scientific-ideas-from-ai-scimuse.png",
      alt: "SciMuse diagram showing contributions from a large-scale knowledge graph, personalized research suggestions, expert evaluation, and scientific-interest prediction.",
    },
    links: [
      {
        label: "Forecasting the future of artificial intelligence with machine learning-based link prediction in an exponentially growing knowledge network",
        href: "https://www.nature.com/articles/s42256-023-00735-0",
      },
      {
        label: "Forecasting high-impact research topics via machine learning on evolving knowledge graphs",
        href: "https://iopscience.iop.org/article/10.1088/2632-2153/add6ef",
      },
      {
        label: "Interesting Scientific Idea Generation using Knowledge Graphs and LLMs: Evaluations with 100 Research Group Leaders",
        href: "https://arxiv.org/abs/2405.17044",
      },
    ],
  },
  {
    title: "Autonomous Science and Philosophical Implications",
    text: "How can we develop curious and creative artificial scientists, and what are the epistemic consequences, for example on scientific understanding?",
    links: [
      {
        label: "Towards autonomous quantum physics research using LLM agents with access to intelligent tools",
        href: "https://arxiv.org/abs/2511.11752",
      },
      {
        label: "On scientific understanding with artificial intelligence",
        href: "https://www.nature.com/articles/s42254-022-00518-3",
      },
    ],
  },
];

const positionCallUrl = "https://mariokrenn.wordpress.com/wp-content/uploads/2025/05/callkrenn202505-1.pdf";
const cookieConsentStorageKey = "asl_cookie_consent_v1";
const cookieConsentMaxAgeMs = 1000 * 60 * 60 * 24 * 180;

export default function Home() {
  const [monthYear, setMonthYear] = useState("");
  const [cookieChoice, setCookieChoice] = useState<CookieChoice | null>(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const siteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    });

    const updateMonthYear = () => {
      setMonthYear(formatter.format(new Date()));
    };

    updateMonthYear();
    const intervalId = window.setInterval(updateMonthYear, 60 * 60 * 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(cookieConsentStorageKey);
    let nextChoice: CookieChoice | null = null;
    let nextShowCookieBanner = true;

    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<CookieConsentRecord>;
        const choice = parsed.choice;
        const hasValidChoice = choice === "essential" || choice === "all";
        const updatedAtMs = typeof parsed.updatedAt === "string" ? Date.parse(parsed.updatedAt) : Number.NaN;
        const isFresh = Number.isFinite(updatedAtMs) && Date.now() - updatedAtMs <= cookieConsentMaxAgeMs;

        if (hasValidChoice && isFresh) {
          nextChoice = choice;
          nextShowCookieBanner = false;
        } else {
          window.localStorage.removeItem(cookieConsentStorageKey);
        }
      } catch {
        // Ignore malformed storage and request a fresh choice.
        window.localStorage.removeItem(cookieConsentStorageKey);
      }
    }

    const frameId = window.requestAnimationFrame(() => {
      setCookieChoice(nextChoice);
      setShowCookieBanner(nextShowCookieBanner);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = siteRef.current;
    if (!root) {
      return;
    }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const layers = [
      { key: "--net1-pos", baseX: -30, baseY: 18, jitterX: 140, jitterY: 110 },
      { key: "--net2-pos", baseX: 140, baseY: -70, jitterX: 170, jitterY: 130 },
      { key: "--net3-pos", baseX: 54, baseY: 92, jitterX: 150, jitterY: 120 },
      { key: "--net4-pos", baseX: 12, baseY: 16, jitterX: 90, jitterY: 80 },
    ].map((layer) => ({
      ...layer,
      x: layer.baseX + randomInRange(-layer.jitterX * 0.45, layer.jitterX * 0.45),
      y: layer.baseY + randomInRange(-layer.jitterY * 0.45, layer.jitterY * 0.45),
      angle: randomInRange(0, Math.PI * 2),
      speed: randomInRange(5, 11),
      minSpeed: randomInRange(3, 5),
      maxSpeed: randomInRange(10, 14),
      turnRate: randomInRange(0.7, 1.5),
    }));

    const writePositions = () => {
      for (const layer of layers) {
        root.style.setProperty(layer.key, `${layer.x.toFixed(1)}px ${layer.y.toFixed(1)}px`);
      }
    };

    writePositions();

    let frameId = 0;
    let lastFrameTime = performance.now();

    const step = (now: number) => {
      const dt = Math.min((now - lastFrameTime) / 1000, 0.045);
      lastFrameTime = now;

      for (const layer of layers) {
        layer.angle += randomInRange(-1, 1) * layer.turnRate * dt;
        layer.speed = clamp(layer.speed + randomInRange(-2.2, 2.2) * dt, layer.minSpeed, layer.maxSpeed);

        layer.x += Math.cos(layer.angle) * layer.speed * dt;
        layer.y += Math.sin(layer.angle) * layer.speed * dt;

        const minX = layer.baseX - layer.jitterX;
        const maxX = layer.baseX + layer.jitterX;
        const minY = layer.baseY - layer.jitterY;
        const maxY = layer.baseY + layer.jitterY;

        if (layer.x < minX || layer.x > maxX) {
          layer.x = clamp(layer.x, minX, maxX);
          layer.angle = Math.PI - layer.angle + randomInRange(-0.28, 0.28);
        }

        if (layer.y < minY || layer.y > maxY) {
          layer.y = clamp(layer.y, minY, maxY);
          layer.angle = -layer.angle + randomInRange(-0.28, 0.28);
        }
      }

      writePositions();
      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const saveCookieChoice = (choice: CookieChoice) => {
    const record: CookieConsentRecord = {
      choice,
      updatedAt: new Date().toISOString(),
      version: 1,
    };

    window.localStorage.setItem(cookieConsentStorageKey, JSON.stringify(record));
    setCookieChoice(choice);
    setShowCookieBanner(false);
  };

  return (
    <div ref={siteRef} className="group-site">
      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <header className="journal-surface journal-hero">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.3em] sm:text-xs">
            Proceedings of Machine Learning in Science II • Tübingen
            {monthYear ? ` • ${monthYear}` : ""}
          </p>
          <h1 className="mt-4 text-center font-journal text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            Artificial Scientist Lab
          </h1>
          <p className="mt-4 text-center font-journal text-xl italic sm:text-2xl">
            AI for Conceptual Advances in Physics
          </p>
          <div className="hero-focus mt-8">
            <p className="section-lede">
              We are a research group at the University of Tübingen, developing intelligent algorithms for conceptual contributions in physics.
              Our work is organized around four pillars:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {coreChallenges.map((challenge) => (
                <article key={challenge.title} className="modern-card frontier-card flex h-full flex-col p-5">
                  <h3 className="text-center text-lg font-semibold">{challenge.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-90">{challenge.text}</p>
                  {challenge.links?.length ? (
                    <ul className="frontier-link-list text-xs">
                      {challenge.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="frontier-link"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </header>

        <main className="mt-10 space-y-10">
          <section className="journal-surface p-6 sm:p-8" id="team">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-kicker">Who are we?</p>
                <h2 className="section-title">Team Members</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article key={member.name} className="modern-card team-card flex h-full flex-col overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className={`team-card-image h-56 w-full ${
                      member.image.endsWith(".svg")
                        ? "team-card-image-placeholder object-contain p-5"
                        : "object-cover"
                    }`}
                  />
                  <div className="flex grow flex-col p-4">
                    <h3 className="text-base font-semibold leading-tight">{member.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] opacity-70">{member.role}</p>
                    {member.focus ? (
                      <p className="mt-3 text-sm leading-relaxed opacity-90">{member.focus}</p>
                    ) : null}
                    {member.links.length > 0 ? (
                      <div className="mt-auto flex flex-wrap gap-2 pt-3 text-xs">
                        {member.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="chip-link"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 border-t border-current/15 pt-6">
              <p className="section-kicker">Former Members</p>
              <h3 className="mt-1 font-journal text-3xl leading-none sm:text-4xl">Alumni</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[...alumniMembers]
                  .sort((a, b) => b.leftAt.localeCompare(a.leftAt) || a.name.localeCompare(b.name))
                  .map((alumnus) => (
                    <li key={alumnus.name} className="modern-card p-4">
                      <p className="text-sm font-semibold leading-relaxed">{alumnus.name}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-70">{alumnus.role}</p>
                      <p className="mt-3 text-sm leading-relaxed opacity-90">{alumnus.period}</p>
                      {alumnus.current ? (
                        <p className="mt-3 text-sm leading-relaxed opacity-90">{alumnus.current}</p>
                      ) : null}
                      {alumnus.thesis ? (
                        <p className="mt-3 text-sm leading-relaxed opacity-90">{`Thesis: ${alumnus.thesis.title}`}</p>
                      ) : null}
                      {alumnus.thesis ? (
                        <a
                          href={alumnus.thesis.href}
                          download={alumnus.thesis.downloadName}
                          className="chip-link mt-3 inline-flex text-xs leading-relaxed"
                        >
                          Download Thesis
                        </a>
                      ) : null}
                      {alumnus.links?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2 text-xs">
                          {alumnus.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="chip-link"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-current/15 pt-6">
              <p className="section-kicker">Archive</p>
              <h3 className="mt-1 font-journal text-3xl leading-none sm:text-4xl">Group Pictures</h3>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {groupPhotos.map((photo) => (
                  <article key={photo.date} className="modern-card overflow-hidden">
                    <a
                      href={photo.image}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open full-size group picture from ${photo.date}`}
                      className="block"
                    >
                      <img
                        src={photo.image}
                        alt={`Artificial Scientist Lab group picture from ${photo.date}`}
                        loading="lazy"
                        className="h-64 w-full object-cover sm:h-72"
                      />
                    </a>
                    <div className="p-4">
                      <p className="text-xs uppercase tracking-[0.18em] opacity-70">{photo.date}</p>
                      <p className="mt-3 text-sm leading-relaxed opacity-90">{photo.names.join(", ")}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="journal-surface p-6 sm:p-8" id="research">
            <p className="section-kicker">Research</p>
            <h2 className="section-title">The Science in the Artificial Scientist Lab</h2>
            <div className="mt-5 space-y-4">
              {coreChallenges.map((challenge) => (
                <article key={challenge.title} className="modern-card frontier-card flex flex-col p-5">
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>
                  {challenge.researchDetails?.beforeImage ? (
                    <div className="challenge-detail-copy mt-3">{challenge.researchDetails.beforeImage}</div>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed opacity-90">{challenge.text}</p>
                  )}
                  {challenge.image ? (
                    <figure className="challenge-figure mt-4">
                      <img
                        src={challenge.image.src}
                        alt={challenge.image.alt}
                        loading="lazy"
                        className="challenge-figure-image"
                      />
                    </figure>
                  ) : null}
                  {challenge.researchDetails?.afterImage ? (
                    <div className="challenge-detail-copy mt-4">{challenge.researchDetails.afterImage}</div>
                  ) : null}
                  {challenge.links?.length ? (
                    <ul className="frontier-link-list text-xs">
                      {challenge.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="frontier-link"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="journal-surface p-6 sm:p-8" id="publications">
            <p className="section-kicker">Papers</p>
            <h2 className="section-title">Publications</h2>
            <div className="mt-5 space-y-8">
              {publicationsByYear.map((yearGroup) => (
                <section
                  key={yearGroup.year}
                  className="border-t border-current/15 pt-6 first:border-t-0 first:pt-0"
                  aria-labelledby={`publications-${yearGroup.year}`}
                >
                  <h3 id={`publications-${yearGroup.year}`} className="font-journal text-3xl leading-none sm:text-4xl">
                    {yearGroup.year}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {yearGroup.papers.map((paper) => (
                      <li key={`${paper.date}-${paper.title}`} className="modern-card interactive-card overflow-hidden">
                        <a href={paper.href} target="_blank" rel="noreferrer" className="interactive-card-link block p-4">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">{`${paper.venue} (${paper.date})`}</p>
                          <p className="interactive-card-title mt-2 text-base leading-snug underline-offset-4">{paper.title}</p>
                          <p className="mt-2 text-sm leading-relaxed opacity-85">{publicationAuthorsByTitle[paper.title]}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className="journal-surface p-6 sm:p-8" id="repositories">
            <p className="section-kicker">Code</p>
            <h2 className="section-title">Open-Source Repositories</h2>
            <ul className="mt-5 space-y-3">
              {githubProjects.map((project) => (
                <li key={project.name} className="modern-card interactive-card overflow-hidden">
                  <a href={project.href} target="_blank" rel="noreferrer" className="interactive-card-link block p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="interactive-card-title text-base font-semibold underline-offset-4">{project.name}</p>
                      <span className="rounded-full border border-current/25 px-2 py-0.5 font-mono text-xs">* {project.stars}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">{project.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="journal-surface p-6 sm:p-8" id="positions">
            <div>
              <p className="section-kicker">Join Us</p>
              <h2 className="section-title">Post-doc, PhD, Master, and Bachelor Positions</h2>
            </div>
            <p className="section-lede">
              We welcome applicants and students who want to work on AI for physics discovery. Feel free to reach out to any of our team members if you are interested in a specific topic.
            </p>
            <a
              href={positionCallUrl}
              target="_blank"
              rel="noreferrer"
              className="chip-link mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Open Position Call
            </a>
          </section>
        </main>
      </div>
      {showCookieBanner ? (
        <aside className="cookie-banner" aria-label="Cookie preferences" aria-live="polite">
          <p className="cookie-banner-copy">
            We use essential cookies to keep this site working. Optional analytics and third-party cookies remain off unless you explicitly accept them. You can
            change this choice at any time.
          </p>
          <div className="cookie-banner-actions">
            <button type="button" className="cookie-banner-button" onClick={() => saveCookieChoice("essential")}>
              Essential only
            </button>
            <button type="button" className="cookie-banner-button cookie-banner-button-primary" onClick={() => saveCookieChoice("all")}>
              Accept all
            </button>
          </div>
        </aside>
      ) : cookieChoice ? (
        <button type="button" className="cookie-settings-toggle" onClick={() => setShowCookieBanner(true)}>
          Cookie settings
        </button>
      ) : null}
    </div>
  );
}
