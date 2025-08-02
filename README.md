# 3D Portfolio Website

A modern, interactive 3D portfolio website built with React and Three.js, showcasing skills, projects, and experience through immersive 3D visualizations.

## 🌟 Features

- **3D Interactive Elements**: Immersive 3D models and animations using Three.js
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Tech Stack Visualization**: Interactive 3D balls displaying technology skills in a single optimized Canvas
- **Smooth Animations**: Fluid floating animations and hover effects
- **Modern UI/UX**: Clean, professional design with engaging interactions
- **Performance Optimized**: Single WebGL context prevents mobile browser crashes
- **Responsive Grid Layout**: Adaptive balls-per-row based on viewport width

## 🛠️ Tech Stack

- **Frontend**: React.js
- **3D Graphics**: Three.js, React Three Fiber
- **3D Components**: React Three Drei
- **Styling**: Tailwind CSS
- **Icons**: Technology logos as decals on 3D meshes
- **Performance**: Optimized rendering with demand-based frameloop

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd 3d-portfolio-main
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser to the local development URL

## 📁 Project Structure

```
src/
├── components/
│   ├── models/
│   │   └── tech_logos/
│   │       └── Ball.jsx          # 3D tech balls with single Canvas
│   ├── TitleHeader.jsx           # Section title component
│   └── Loader.jsx                # Canvas loading component
├── sections/
│   └── Tech.jsx                  # Skills section container
├── hoc/
│   └── SectionWrapper.jsx        # Higher-order component wrapper
├── constants/
│   └── index.js                  # Technologies data and configuration
└── assets/                       # Technology icons and 3D models
```

## 🎯 Key Components

### Tech Skills Section (`Tech.jsx`)
- Container for the 3D technology showcase
- Uses `TitleHeader` for section introduction
- Single Canvas approach for optimal performance

### 3D Tech Balls (`Ball.jsx`)
- **Single Canvas Architecture**: All balls rendered in one WebGL context
- **Responsive Grid System**: Adapts to different screen sizes
- **Individual Ball Component**: Icosahedron geometry with technology decals
- **Scene Management**: Calculates positions and spacing dynamically

### Responsive Breakpoints
- **Mobile** (< 8 viewport units): 2 balls per row
- **Small Tablet** (8-12 units): 3 balls per row  
- **Tablet** (12-16 units): 4 balls per row
- **Small Desktop** (16-20 units): 5 balls per row
- **Large Desktop** (20+ units): 6 balls per row

## 🔧 Configuration

### Adding New Technologies

Update the `technologies` array in `src/constants/index.js`:

```javascript
export const technologies = [
  {
    name: "React",
    icon: "./tech/reactjs.png",
  },
  {
    name: "JavaScript", 
    icon: "./tech/javascript.png",
  },
  // Add more technologies...
];
```

### Customizing 3D Elements

Modify parameters in `Ball.jsx`:

```javascript
// Float animation settings
<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>

// Mesh scaling and materials
<mesh castShadow receiveShadow scale={1.2}>
  <meshStandardMaterial color='#fff8eb' />

// Camera and lighting
camera={{ position: [0, 0, 15], fov: 50 }}
<ambientLight intensity={0.25} />
```

### Spacing Configuration

The component automatically adjusts spacing based on viewport:
- **Small/Medium devices**: Dynamic spacing with 0.8 multiplier
- **Large devices**: Reduced spacing with 0.6 multiplier to prevent overflow

## 📱 Mobile Optimization

### WebGL Context Management
- **Single Canvas**: Prevents WebGL context lost errors on mobile
- **Demand Rendering**: `frameloop='demand'` reduces battery usage
- **Optimized Controls**: Disabled zoom and pan for touch devices

### Performance Features
- Suspense boundaries with loading states
- Texture preloading with `<Preload all />`
- Efficient position calculations
- Responsive mesh scaling

## 🎨 Styling & UI

### Tailwind CSS Classes
- `h-96`: Fixed canvas container height
- `mt-16`: Consistent section spacing
- `flex flex-row flex-wrap justify-center gap-10`: Legacy grid layout (now handled by 3D positioning)

### 3D Visual Design
- **Icosahedron Geometry**: Modern geometric shape for tech icons
- **Decal Mapping**: Technology logos mapped onto 3D surfaces
- **Floating Animation**: Subtle movement for visual interest
- **Professional Lighting**: Ambient + directional light setup

## 🚀 Performance Optimization

### Single Canvas Benefits
- Reduces WebGL context creation overhead
- Prevents mobile browser crashes
- Enables better resource sharing
- Smoother animations across all elements

### Rendering Optimizations
- Demand-based frame updates
- Efficient texture loading
- Optimized geometry reuse
- Smart viewport-based calculations

## 🔧 Development Tips

### Debugging 3D Elements
- Use browser dev tools for Three.js debugging
- Check console for viewport width calculations
- Monitor WebGL context usage

### Adding Animations
- Modify `Float` component props for different effects
- Adjust mesh rotation and scale transforms
- Customize lighting for different moods

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/NewTech`)
3. Add new technologies or improve 3D effects
4. Test on multiple devices and screen sizes
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Three.js** - Powerful 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers and abstractions
- **Tailwind CSS** - Utility-first CSS framework
- Open source community for inspiration and resources

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [Add your deployment URL here]
📧 **Contact**: [Add your contact information]
