export const profile = {
  name: "Huynh Nguyen Phuc",
  lead: "I'm a research engineer at GraphicsMiner Lab in Ho Chi Minh City. I work on 3D generative models and on adapting world foundation models to medical imaging.",
  email: "nguyenphuchuynh.work@gmail.com",
  github: "https://github.com/HuynhNguyenPhuc",
  linkedin: "https://www.linkedin.com/in/phuchuynh0904",
};

const repo = (name) => `${profile.github}/${name}`;

export const research = [
  {
    title: "Single View X-Ray Novel View Synthesis with World Foundation Model",
    href: "https://www.nvidia.com/gtc/session-catalog/sessions/gtc26-p81204/",
    meta: "Poster, NVIDIA GTC 2026, San Jose. First author.",
    body: "Adapts NVIDIA Cosmos-Predict2 to generate new radiographic views from a single frontal chest X-ray, with the goal of reducing patient radiation exposure. The model trains on digitally reconstructed radiographs rendered from 771 TCIA CT volumes.",
  },
  {
    title: "360° Novel View Synthesis from Single Chest X-Ray Images via a World Foundation Model",
    href: repo("CosmosXRay360"),
    meta: "Manuscript, available on request. First author.",
    body: "Post-trains Cosmos-Predict2.5 with a rectified flow objective to turn one chest X-ray into a 360° sequence. It reaches 23.26 PSNR and 0.777 SSIM, 2.21 dB above the strongest baseline (SV-DRR).",
  },
  {
    title: "Generating 3D Models from Multimodal Descriptions",
    href: repo("Thesis-Project"),
    meta: "Bachelor thesis, Ho Chi Minh City University of Technology.",
    body: "Fine-tunes TRELLIS on the Houses3K dataset to generate textured 3D houses from text and images. LoRA with L2-SP regularization keeps fine-tuning stable, and knowledge distillation shrinks the model. The thesis also compares rectified flow with diffusion.",
  },
];

export const experience = [
  {
    title: "Research Engineer, GraphicsMiner Lab",
    meta: "June 2024 to present. Ho Chi Minh City, Vietnam.",
    bullets: [
      "Lead the lab's medical imaging research, adapting NVIDIA Cosmos world foundation models to the medical domain.",
      "Built a model optimization pipeline (TorchScript, ONNX, TensorRT) and a GPU inference service on NVIDIA Triton. Throughput rose 1.5× and latency fell 33%.",
      "Led an agentic pipeline that automates 3D asset modeling, texturing, rigging and animation, cutting a multi-stage manual workflow to under 10 minutes of inference. It runs on Google Kubernetes Engine.",
      "Led Document2Object, which parses document layouts with vision-language models and grounding detectors, then restores figures with one-step latent diffusion.",
    ],
  },
  {
    title: "B.Eng. in Computer Science, Ho Chi Minh City University of Technology",
    meta: "September 2021 to October 2025. Major GPA 3.8 out of 4.0.",
    body: "Specialized in applied artificial intelligence, image processing and computer vision.",
  },
];

export const projects = [
  { name: "CosmosXRay360", body: "Code for the 360° chest X-ray view synthesis paper." },
  { name: "Thesis-Project", body: "Code for the bachelor thesis on 3D generation from multimodal descriptions." },
  { name: "Model-Conversion", lang: "Python", body: "A toolkit for converting and optimizing deep learning models." },
  { name: "HCMUT_SSPS", lang: "JavaScript", body: "A smart printing service for HCMUT students." },
  { name: "3D-Rendering", lang: "C++", body: "Implementations of 3D rendering techniques." },
  { name: "HOG", lang: "Java", body: "Human detection with Histograms of Oriented Gradients." },
  { name: "Brain_Image_Captioning", lang: "Jupyter Notebook", body: "Image captioning for brain scans." },
  { name: "2048", lang: "C++", body: "The 2048 game." },
].map((p) => ({ ...p, href: repo(p.name) }));

export const honors = [
  { year: "2022", text: "Second prize, National Mathematical Olympiad for University Students (Algebra and Calculus)" },
  { year: "2022", text: "National finalist, ICPC Vietnam National Programming Contest" },
  { year: "2019 and 2020", text: "Third prize, Vietnam National Mathematical Olympiad" },
];
