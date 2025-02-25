import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Awesome Games by Nicanor</title>
        <meta
          name="description"
          content="Step into an immersive world of Exciting simple games and cinematic experiences."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://nicanor-games.nicanor.me" />
        <meta property="og:title" content="Games by Nicanor" />
        <meta
          property="og:description"
          content="Step into an immersive world of Exciting simple games and cinematic experiences."
        />
        <meta
          property="og:image"
          content="/images/games/tic-tac-toe.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="http://nicanor-games.nicanor.me" />
        <meta name="twitter:title" content="Games by Nicanor" />
        <meta
          name="twitter:description"
          content="Step into an immersive world of Exciting simple games and cinematic experiences."
        />
        <meta
          name="twitter:image"
          content="/images/games/tic-tac-toe.png"
        />
        <meta name="twitter:site" content="@NicanorTalksWeb" />
        <meta name="twitter:creator" content="@NicanorTalksWeb" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sticky Nav */}
      <header className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold tracking-wide">
            Nicanor
            <span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transform hover:scale-105 transition duration-300"
            >
              Games
            </span>
          </div>
          {/* <div className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#hero" className="hover:text-indigo-400 transition">
              Home
            </a>
            <a href="#games" className="hover:text-indigo-400 transition">
              Games
            </a>
            <a href="#ai-power" className="hover:text-indigo-400 transition">
              AI Power
            </a>
            <a href="#contact" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </div> */}
        </nav>
      </header>

      <main className="bg-gray-900 text-white">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/brick-breakout.jpg')",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* Left Vertical Text */}
          <div className="hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 -rotate-90 origin-left">
            <p className="text-orange-400 uppercase tracking-widest text-sm font-bold">
              Drop into Action
            </p>
          </div>

          {/* Main Hero Content */}
          <div className="relative z-10 max-w-5xl px-6 md:px-12 text-white">
            <div className="flex flex-col space-y-4">
              <p className="text-sm md:text-base uppercase tracking-wider text-orange-400 font-semibold">
                Ready to Elevate Your Game?
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Moves, Tactics, Triumph:
                <br className="hidden md:block" />
                Master Them All
              </h1>
              <p className="max-w-xl text-gray-300 md:text-lg">
                From the cunning complexities of <strong>Checkers</strong> and{' '}
                <strong>Chess</strong> to the puzzle-solving thrill of{' '}
                <strong>2048</strong> and tile-sliding challenges, every move can
                shift the entire match. Suit up, strategize, and show your opponents
                what true mastery looks like. Whether you're bouncing bricks in{' '}
                <strong>Brick Breakout</strong> or outsmarting rivals in{' '}
                <strong>Tic-Tac-Toe</strong>, the path to victory is yours to forge.
              </p>

              {/* Gamified CTA Button */}
              <div>
                <a
                  href="#games"
                  className="inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Right Thumbnails */}
          <div className="hidden md:flex absolute bottom-6 right-6 space-x-3">
            <img
              src="/images/lion_chess.gif"
              alt="Thumbnail 1"
              className="w-60 h-200 object-cover rounded-md shadow-lg hover:shadow-2xl transition"
            />
            <img
              src="/images/man_bricks_breaking.jpg"
              alt="Thumbnail 1"
              className="w-60 h-200 object-cover rounded-md shadow-lg hover:shadow-2xl transition"
            />
            <img
              src="/images/lion_tiger.jpg"
              alt="Thumbnail 2"
              className="w-60 h-200 object-cover rounded-md shadow-lg hover:shadow-2xl transition"
            />
          </div>
        </section>

        {/* Featured / Popular Games Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Featured
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Large Feature Card: Brick Breakout */}
              <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/man_bricks_breaking.jpg')",
                  }}
                ></div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold">Brick Breakout: Smash &amp; Break</h3>
                  <p className="text-gray-300">
                    Break bricks, rack up high scores, reach battle mode levels and conquer the arcade in this fast-paced lives to outpace existence
                  </p>
                  <a
                    href="https://brick-breakout.nicanor.me"
                    className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 px-6 py-2 rounded-full text-white font-bold transition transform hover:scale-105"
                  >
                    Play Brick Breakout
                  </a>
                </div>
              </div>

              {/* Popular Games List */}
              <div className="space-y-4">
                {/* Card 1: Checkers */}
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-left p-4 hover:shadow-2xl transition">
                  <div
                    className="h-20 w-full md:w-28 bg-cover bg-center rounded-lg mb-4 md:mb-0 md:mr-4"
                    style={{ backgroundImage: "url('/images/checkers.jpg')" }}
                  ></div>
                  <div className="flex-1 text-left md:text-left mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold">Checkers</h4>
                    <p className="text-gray-400 text-sm">
                      Classic strategy reimagined with modern twists.
                    </p>
                  </div>
                  <a
                    href="https://checkers.nicanor.me"
                    className="inline-block bg-gradient-to-r h-fit w-fit from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 px-4 py-2 rounded-full text-white font-bold shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    Play Checkers
                  </a>
                </div>

                {/* Card 2: Chess */}
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-left p-4 hover:shadow-2xl transition">
                  <div
                    className="h-20 w-full md:w-28 bg-cover bg-center rounded-lg mb-4 md:mb-0 md:mr-4"
                    style={{ backgroundImage: "url('/images/lion_tiger.jpg')" }}
                  ></div>
                  <div className="flex-1 text-left md:text-left mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold">Chess</h4>
                    <p className="text-gray-400 text-sm">
                      Master the art of strategy and outwit your opponent.
                    </p>
                  </div>
                  <a
                    href="https://chess.nicanor.me"
                    className="inline-block bg-gradient-to-r h-fit from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-full text-white font-bold shadow-xl transform hover:scale-105 transition duration-300"
                  >
                    Play Chess
                  </a>
                </div>

                {/* Card 3: Tic Tac Toe */}
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-left p-4 hover:shadow-2xl transition">
                  <div
                    className="h-20 w-full md:w-28 bg-cover bg-center rounded-lg mb-4 md:mb-0 md:mr-4"
                    style={{ backgroundImage: "url('/images/tic_tac_desert.jpg')" }}
                  ></div>
                  <div className="flex-1 text-left md:text-left mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold">Tic Tac Toe</h4>
                    <p className="text-gray-400 text-sm">
                      A timeless classic with a competitive twist.
                    </p>
                  </div>
                  <a
                    href="https://tic-tac-toe.games.nicanor.me"
                    className="inline-block bg-gradient-to-r h-fit from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-4 py-2 rounded-full text-white font-bold shadow-xl transform hover:rotate-2 transition duration-300"
                  >
                    Play Tic Tac Toe
                  </a>
                </div>

                {/* Card 4: Sliding Tile (2048) */}
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-left p-4 hover:shadow-2xl transition">
                  <div
                    className="h-20 w-full md:w-28 bg-cover bg-center rounded-lg mb-4 md:mb-0 md:mr-4"
                    style={{ backgroundImage: "url('/images/tile_wall.jpg')" }}
                  ></div>
                  <div className="flex-1 text-left md:text-left mb-4 md:mb-0">
                    <h4 className="text-lg font-semibold">Sliding Tile (2048)</h4>
                    <p className="text-gray-400 text-sm">
                      Slide, merge, and conquer to reach the ultimate score.
                    </p>
                  </div>
                  <a
                    href="https://tile-sliding.games.nicanor.me"
                    className="inline-block bg-gradient-to-r h-fit from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-full text-white font-bold shadow-md transform hover:scale-110 transition duration-300"
                  >
                    Play Sliding Tile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section id="philosophy" className="py-16 px-4 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            {/* Left Side: Video and Image Thumbnails */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0">
              <img
                src="/images/lion_chess.gif"
                alt="Philosophy in Action"
                className="w-full rounded-lg shadow-lg mb-6"
              />
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/images/tile_wall.jpg"
                  alt="Inspiration 2"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="/images/lion_tiger.jpg"
                  alt="Inspiration 1"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="/images/brick-breakout.jpg"
                  alt="Inspiration 3"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-4">
                The Philosophy
              </h2>
              <h3 className="text-2xl font-semibold mb-6">
                Where Innovation Meets Play
              </h3>
              <p className="mb-4 text-lg text-gray-300">
                My journey in game development is fueled by a passion to push creative boundaries and solve problems like levels in a game. Leveraging AI isn’t just a technical advantage—it’s the spark that transforms raw ideas into immersive experiences.
              </p>
              <p className="mb-4 text-lg text-gray-300">
                I’m continuously leveling up my tech skills and sharing every step along the way. All my learning is open source on my GitHub repo, so you can join me as I train, deploy, and refine LLM models and other cutting-edge technologies. Together, we’re exploring how AI can revolutionize app development and empower humanity in the most positive ways.
              </p>
              <p className="mb-6 text-lg text-gray-300">
                Dive into this adventure where every challenge is a boss level waiting to be conquered, and every solution is a power-up on our path to creating game-changing products.
              </p>
              <a
                href="https://github.com/Nicanor008/Game-Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img src="images/icons/github-mark.svg" alt="github" width="24" className="mr-2" />
                Enter the Dev Dungeon
              </a>
            </div>
          </div>
        </section>

        {/* All Games */}
        <section id="games" className="py-16 px-4 bg-gray-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              All Games
            </h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              Discover the games I’ve developed—each crafted with a blend of creativity, strategy, and AI-driven innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Checkers */}
              <GameCard
                title="Checkers"
                description="Experience a strategic twist on the classic board game where every move is a calculated play. Classic tactics meet modern design in this reinvented challenge."
                link="https://checkers.nicanor.me"
                bgUrl="/images/games/checkers.png"
                btnStyle="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              />
              {/* Tic Tac Toe */}
              <GameCard
                title="Tic Tac Toe"
                description="Revisit the simple yet competitive realm of Tic Tac Toe—reimagined with sleek visuals and smart AI moves that elevate this timeless classic into a modern battle of wits."
                link="https://tic-tac-toe.games.nicanor.me"
                bgUrl="/images/games/tic-tac-toe.png"
                btnStyle="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              />
              {/* Brick Breakout */}
              <GameCard
                title="Brick Breakout"
                description="Dive into a retro arcade challenge where breaking bricks becomes an art form. Every smash is a burst of energy and precision in a vibrant, high-score chase."
                link="https://brick-breakout.nicanor.me"
                bgUrl="/images/games/brick-breakout.png"
                btnStyle="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
              />
              {/* Sliding Tile */}
              <GameCard
                title="Sliding Tile"
                description="Unleash your puzzle-solving prowess in this dynamic tile-sliding game. Merge numbers, strategize each move, and aim for that coveted 2048 score in a test of speed and wit."
                link="https://tile-sliding.games.nicanor.me"
                bgUrl="/images/games/tile-sliding.png"
                btnStyle="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600"
              />
            </div>
          </div>
        </section>

        {/* AI Power Section */}
        <section
          id="ai-power"
          className="py-16 px-4 relative"
          style={{
            backgroundImage: "url('/images/gamified_savannah_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply"
          }}
        >
          <div className="absolute inset-0 z-0 bg-black opacity-30"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Accelerating Game Development with AI
            </h2>
            <p className="max-w-3xl mx-auto mb-6 text-lg text-white">
              The intersection of generative AI and game development is reshaping the creative landscape. I have been exploring this frontier using a suite of advanced tools—including <strong>Grok 3</strong>, <strong>ChatGPT o3-mini-high</strong>, <strong>DeepSeek R1</strong>, and a locally managed instance of <strong>Ollama</strong>. These models empower me to rapidly prototype ideas, refine gameplay mechanics, and push the boundaries of interactive storytelling.
            </p>
            <p className="max-w-3xl mx-auto mb-6 text-lg text-white">
              Each tool offers its own unique edge—Grok 3 fuels innovative strategies, ChatGPT o3-mini-high elevates creative dialogue, DeepSeek R1 dives deep into data-driven insights, and Ollama provides local control and flexibility. This experimentation not only enriches my development process but also drives forward my vision of melding art, technology, and immersive play.
            </p>
            <p className="max-w-3xl mx-auto text-lg text-white">
              With generative AI and LLM models at the heart of my workflow, I'm continuously learning and evolving. Every experiment contributes to crafting more engaging, dynamic games and showcases how AI can serve as a powerful ally in designing the next generation of interactive experiences.
            </p>
          </div>
        </section>

        {/* About & CTA */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">About Nicanor</h3>
              <p className="text-gray-300 leading-relaxed">
                I’m a passionate software engineer, merging cutting-edge AI with
                creative storytelling to craft experiences that captivate and
                challenge. My journey involves exploring new techniques,
                collaborating with diverse teams, and continually refining the
                art of play.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether it’s reimagining classics like Checkers or building
                fast-paced arcade titles, I strive to deliver fun, immersive
                worlds that push the boundaries of technology and imagination.
              </p>
            </div>
            <div
              className="h-64 md:h-120 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage:
                  "url('/images/nicanor_site.png')",
              }}
            ></div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-gray-950">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Work Together</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Let's collaborate on a project where creativity and innovation collide! Whether you're looking to harness the power of AI or navigate the intricate puzzle of problem-solving, I'm here to join forces with you. As AI and gaming continue to redefine our world, there's never been a better time to transform bold ideas into groundbreaking products. Imagine a space where every challenge is just another level to conquer and every solution unlocks a new adventure. Together, we can craft experiences that not only push the boundaries of technology but also spark the imagination—creating game-changing innovations that are as engaging as they are effective.
            </p>
          </div>
          <div className="max-w-xl mx-auto text-center">
            <a
              href="https://nicanor.me/"
              target="_blank"
              className="inline-block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-xl transform hover:scale-105 transition duration-300"
            >
              Enter nicanor.me
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}{" "}
            Nicanor
            <span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transform hover:scale-105 transition duration-300"
            >
              Games
            </span>. All rights reserved
          </p>
          <div className="flex space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/nicanor-korir"  // Update with your LinkedIn URL
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 transition"
            >
              <img src="images/icons/linkedin-blue.svg" alt="linkedin" width="24" />
            </a>
            {/* X (Twitter) Icon */}
            <a
              href="https://x.com/NicanorTalksWeb"  // Update with your X (Twitter) URL
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 transition"
            >
              <img src="images/icons/x-blue.svg" alt="X" width="24" />
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/nicanor008"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 transition"
            >
              <img src="images/icons/github-blue.svg" alt="linkedin" width="24" />
            </a>
            {/* Website (Home) Icon */}
            <a
              href="https://nicanor.me"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 transition"
            >
              <img src="images/icons/web-blue.svg" alt="nicanor.me" width="24" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

/**
 * Reusable Card Component for your personal games
 */
function GameCard({ title, description, link, bgUrl, btnStyle }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition">
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgUrl}')` }}
      ></div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          className={`inline-block ${btnStyle} px-4 py-2 rounded-full text-white font-bold transition transform hover:scale-105`}
        >
          Play Now &rarr;
        </a>
      </div>
    </div>
  );
}
