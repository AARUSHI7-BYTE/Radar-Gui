# ASR Radar Block Monitoring System

A React-based interactive GUI that visualizes the architecture of an Airport Surveillance Radar (ASR) system. The application provides a block-diagram interface where every radar component is represented as an interactive node connected through real-time flow connections.

---

## 📌 Features

- Interactive Radar Block Diagram
- Clickable radar modules
- React Flow based visualization
- Custom Button Nodes
- Custom Label Nodes
- Smooth and Straight Connections
- Zoom In / Zoom Out support
- Responsive layout
- Dark themed control blocks
- Disabled state for inactive modules
- Modular project structure

---

## 🛠️ Tech Stack

- React.js
- React Flow
- JavaScript (ES6)
- Tailwind CSS
- Vite

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── CenterPanel.jsx
│   ├── ButtonNode.jsx
│   ├── LabelNode.jsx
│   ├── nodes.js
│   ├── edges.js
│
├── App.jsx
├── main.jsx
│
public/
└── connections.svg
```

---

## 📷 Radar Layout

The GUI contains the following radar blocks:

- Antenna
- PSR Channel
- MSSR Channel
- Rotary Joint
- Encoder Box
- FER-A
- FER-B
- SSTX
- PRSU
- EXCITER-A
- EXCITER-B
- IFDC
- MSG
- UPC
- WGM
- SP
- RC
- Centroider
- Tracker
- RM

Each block is represented using custom React Flow nodes.

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/asr-radar.git
```

Move into the project

```bash
cd asr-radar
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

---

## 📦 Dependencies

```json
react
react-dom
reactflow
tailwindcss
vite
```

---

## 🚀 Usage

- Open the application in your browser.
- Navigate through the radar block diagram.
- Click on individual blocks to trigger actions.
- Zoom in and out for better visualization.
- View the complete connection flow between radar components.

---

## 🎯 Future Improvements

- Live radar status monitoring
- Backend API integration
- Real-time health monitoring
- Fault indication using colors
- Authentication system
- Dynamic node updates
- Database integration
- Alarm and notification system
- SVG-based radar visualization

---

## 📖 Learning Outcomes

This project demonstrates:

- React component architecture
- React Flow customization
- Custom Nodes
- Custom Edge Routing
- Interactive UI Design
- State Management
- Component Reusability
- Tailwind CSS styling
- Large-scale diagram visualization

---

## 📄 License

This project is developed for educational and learning purposes.
