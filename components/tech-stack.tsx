export default function TechStack() {
  return (
    <section id="tech-stack" className="text-white">
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

      {/* PROGRAMMING LANGUAGES */}
      <div className="tech-category">
        <h3>PROGRAMMING LANGUAGES</h3>

        <div className="tech-subcategory">
          <h4>Experienced:</h4>
          <div className="tech-list">
            <span className="tech-badge bg-cyan-900/30 text-cyan-300 border border-cyan-800">TypeScript</span>
            <span className="tech-badge bg-yellow-900/30 text-yellow-300 border border-yellow-800">JavaScript</span>
            <span className="tech-badge bg-purple-900/30 text-purple-300 border border-purple-800">C++</span>
            <span className="tech-badge bg-orange-900/30 text-orange-300 border border-orange-800">Java</span>
          </div>
        </div>

        <div className="tech-subcategory">
          <h4>Familiar:</h4>
          <div className="tech-list">
            <span className="tech-badge bg-cyan-900/30 text-cyan-300 border border-cyan-800">SQL</span>
            <span className="tech-badge bg-gray-900/30 text-gray-300 border border-gray-800">Solidity</span>
          </div>
        </div>
      </div>

      {/* TOOLS & FRAMEWORKS */}
      <div className="tech-category">
        <h3>TOOLS & FRAMEWORKS</h3>

        <div className="tech-subcategory">
          <h4>Experienced:</h4>
          <div className="tech-list">
            <span className="tech-badge bg-cyan-900/30 text-cyan-300 border border-cyan-800">React.js</span>
            <span className="tech-badge bg-green-900/30 text-green-300 border border-green-800">Node.js</span>
            <span className="tech-badge bg-green-900/30 text-green-300 border border-green-800">Express.js</span>
            <span className="tech-badge bg-green-900/30 text-green-300 border border-green-800">MongoDB</span>
            <span className="tech-badge bg-pink-900/30 text-pink-300 border border-pink-800">GraphQL</span>
            <span className="tech-badge bg-cyan-900/30 text-cyan-300 border border-cyan-800">Next.js</span>
            <span className="tech-badge bg-gray-900/30 text-gray-300 border border-gray-800">Hardhat</span>
            <span className="tech-badge bg-gray-900/30 text-gray-300 border border-gray-800">Solidity</span>
            <span className="tech-badge bg-green-900/30 text-green-300 border border-blue-800">Socket.io</span>
          </div>
        </div>
      </div>

      {/* VERSION CONTROL SYSTEM */}
      <div className="tech-category">
        <h3>VERSION CONTROL SYSTEM</h3>

        <div className="tech-list">
          <span className="tech-badge bg-orange-900/30 text-orange-300 border border-orange-800">Git</span>
          <span className="tech-badge bg-purple-900/30 text-purple-300 border border-purple-800">GitHub</span>
        </div>
      </div>
    </section>
  )
}

