export const profile = {
  name: "Phuc Huynh",
  lead: "I'm a research engineer in Ho Chi Minh City, formerly at GraphicsMiner Vietnam. My interests are computer vision and graphics, medical imaging, generative models and world foundation models.",
  email: "nguyenphuchuynh.work@gmail.com",
  github: "https://github.com/HuynhNguyenPhuc",
  linkedin: "https://www.linkedin.com/in/phuchuynh0904",
};

const repo = (name) => `${profile.github}/${name}`;

export const research = [
  {
    title: "Single View X-Ray Novel View Synthesis with World Foundation Model",
    href: "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-p81204/",
    meta: "First-author poster, presented at NVIDIA GTC 2026, San Jose.",
    body: "Adapts NVIDIA Cosmos-Predict2 to generate new radiographic views from a single frontal chest X-ray, motivated by the longer-term goal of reducing reliance on higher-radiation CT. The model trains on digitally reconstructed radiographs rendered from 771 CT volumes.",
  },
  {
    title: "360° Novel View Synthesis from Single Chest X-Ray Images via a World Foundation Model",
    href: repo("CosmosXRay360"),
    meta: "First-author manuscript, unpublished; available upon request.",
    body: "Formulates 93-view synthesis as structured video generation. It post-trains Cosmos-Predict2.5 (2B) with a rectified flow objective on DRRs from 1,698 CT volumes, split by patient. It reaches 23.26 PSNR and 0.777 SSIM, 2.21 dB above the strongest baseline, SV-DRR (21.05 PSNR). Zero-shot Cosmos reaches only 7.49 PSNR.",
  },
  {
    title: "Generating 3D Models from Multimodal Descriptions",
    href: repo("My-Thesis"),
    meta: "Bachelor's thesis (2-person team), Ho Chi Minh City University of Technology. Advisor: Dr. Le Thanh Sach.",
    body: "Adapts the text-conditioned TRELLIS generator to Houses3K (3,000 models) with full fine-tuning, L2-SP and LoRA. Full fine-tuning cuts the Fréchet distance from 345.66 to 198.54, while LoRA preserves the pretrained CLIP score. Rectified flow beats diffusion with 25 versus 700 sampling steps. Knowledge distillation cuts inference from 8.99 s to 2.73 s per sample, at a cost in fidelity.",
  },
];

export const experience = [
  {
    title: "Research Engineer, GraphicsMiner Vietnam",
    meta: "June 2025 to October 2026. Research Intern, June 2024 to May 2025. Ho Chi Minh City, Vietnam.",
    bullets: [
      "Chest X-ray novel view synthesis (researcher): the two research outputs above, from adapting world foundation models to a medical domain.",
      "On-device single-instance object detection (lead researcher): given about 40 photos of one object, find it in live camera frames or report its absence, with no per-object training (YOLOE visual prompts with a DINOv3 verifier). It reaches an AUROC of 0.80 on BOP HOPE (28 objects), versus 0.57 for an on-device fine-tuned detector. It runs in an Android app with an INT8 model, enrolling an object in about 7 s and recognizing it at about 0.2 s per frame. Evaluation against lookalikes is ongoing.",
      "Autonomous 3D asset generation (primary developer): automates the pipeline from text or image prompts through modeling, texturing, rigging and animation, cutting per-model production time from weeks to under 10 minutes. The meshes fill the 3D library of Sant, GraphicsMiner's application, which holds 13,900+ models.",
      "Document2Object (primary developer): turns scanned archives (PDFs, comics, photos) into searchable people, artifacts and scenes. A vision-language model proposes a semantic tree for each page, and GroundingDINO localizes the objects inside it. It has processed 2,300+ inputs (about 2,900 pages) into 19,000+ searchable objects.",
    ],
  },
  {
    title: "Teaching Assistant (part-time), DeepViet",
    meta: "July 2026 to present. Computer Graphics and Physical AI.",
    body: "Assists with courses in computer graphics and physical AI at DeepViet, an AI community for students and engineers in Vietnam.",
  },
  {
    title: "B.E. in Computer Science, Ho Chi Minh City University of Technology",
    meta: "September 2021 to October 2025. Major GPA 3.8 out of 4.0 (Excellent).",
    body: "Specialized in applied artificial intelligence, image processing and computer vision.",
  },
];

export const projects = [
  { name: "DRR", lang: "Python", body: "A benchmarking suite for digitally reconstructed radiographs. It compares DRR renderers (Plastimatch, DiffDRR, PyTorch3D, DeepDRR) under one shared geometry." },
  { name: "DICOM-Cleaner", lang: "JavaScript", body: "A full-stack app that removes yellow and green annotations from ultrasound DICOM scans, using a FastAPI backend and OpenCV inpainting." },
  { name: "Model-Conversion", lang: "Python", body: "A toolkit for converting, optimizing and verifying deep learning models. Currently being rewritten from the ground up." },
  { name: "PDF-Table-Extractor", lang: "Python", body: "A script that extracts the tables of a PDF into one clean Markdown file." },
  { name: "Ray-Based-Rendering", lang: "C++", body: "A modular C++17 renderer covering ray casting, Whitted ray tracing, path tracing and volumetric rendering behind one camera, scene and integrator interface, with four interchangeable acceleration structures." },
  { name: "Reversi-Bot", lang: "Python", body: "Reversi agents built with Minimax and Deep Q-Learning." },
  { name: "HOG", lang: "Java", body: "Human detection with Histograms of Oriented Gradients." },
].map((p) => ({ ...p, href: repo(p.name) }));

export const honors = [
  { year: "2022", text: "Second prize, National Mathematical Olympiad for University Students (Algebra and Calculus)" },
  { year: "2022", text: "National finalist, ICPC Vietnam National Programming Contest" },
  { year: "2019, 2020", text: "Third prize, Vietnam National Mathematical Olympiad" },
];
