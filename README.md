# BuildBotAI – AI-Powered PC Build Recommender

BuildBotAI is a Next.js-based web application that helps users find optimal PC builds using a chatbot-style interface. It integrates a graph database (Neo4j) for compatibility-based recommendations and includes features such as 3D PC previews and downloadable quotations.

# Features

- AI Chatbot for collecting user requirements
- Graph-based compatibility scoring using Neo4j
- Dynamic PC part recommendations
- Downloadable PDF quotations with jsPDF
- Responsive UI with Tailwind CSS and glassmorphism

# Tech Stack

- Frontend : Next.js 13+, React, Tailwind CSS, Framer Motion
- Backend : FastAPI (hosted separately)
- Database : Neo4j Aura Cloud (Graph DB)
- 3D Viewer : React Three Fiber
- PDF Generation : jsPDF, autoTable

## 📁 Project Structure
/app          # App router pages (chatbot, layout, home)
components/   # UI components (BuildCard, PC3DViewer, etc.)
lib/          # Utility files (pdf generation)
public/       # Static assets including 3D model
styles/       # Global styles and Tailwind config