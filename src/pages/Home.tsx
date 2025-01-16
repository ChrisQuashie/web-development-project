import { useEffect, useState } from 'react';
import hero from '../assets/images/hero.png';
import { Typewriter } from 'react-simple-typewriter';
import document from '../assets/documents/Chris Q, Resume.pdf';

function Home() {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [downloadInProgress, setDownloadInProgress] = useState(false);

  useEffect(() => {
    // Animate experience count from 0 to 4
    let expInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(expInterval);
        return prev;
      });
    }, 200);

    // Animate clients count from 0 to 10
    let clientsInterval = setInterval(() => {
      setClients((prev) => {
        if (prev < 10) return prev + 1;
        clearInterval(clientsInterval);
        return prev;
      });
    }, 100);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(expInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  const handleDownloadClick = () => {
    setDownloadInProgress(true);

    // Timeout to simulate download process (you can remove this after actual download is triggered)
    setTimeout(() => {
      setDownloadInProgress(false); // Reset state after download starts
    }, 2000);
  };

  return (
    <section id="home" className="relative lg:h-screen px-5 py-5">
      {/** Blur stars */}
      <div className="absolute top-0 left-0 lg:w-64 lg:h-64 rounded-full bg-purple-400 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 lg:w-64 lg:h-64 rounded-full bg-purple-400 blur-3xl"></div>

      {/** Grid layout */}
      <div className="h-full grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-auto">
        {/** Grid1 */}
        <header className="flex flex-col gap-6 items-center justify-center h-full">
          <div className="lg:w-[400px] flex flex-col gap-5">
            <p className="text-xl font-md">Hi, I'm Chris Quashie 👋</p>
            <h1 className="text-4xl font-bold">
              I'm a{' '}
              <Typewriter
                words={['Network Engineer', 'Network Admin', 'Problem Solver']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-gray-400">
              Experienced in networks and security operations. Great expertise with designing, implementing, and maintaining robust network infrastructure.
            </p>
            <a download="Chris Quashie Resume" href={document} onClick={handleDownloadClick}>
              <button
                className={`w-48 h-14 ${downloadInProgress ? 'bg-gradient-to-r from-gray-400 to-gray-500 animate-pulse cursor-wait' : 'bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-105 transform transition duration-500 ease-in-out'} 
                            rounded-lg text-white font-semibold shadow-lg flex items-center justify-center space-x-3`}
              >
                {downloadInProgress ? (
                  <span className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                    <span>Downloading...</span>
                  </span>
                ) : (
                  <span>📄 Download Resume</span>
                )}
              </button>
            </a>
            <div className="flex gap-7">
              <div>
                <p>
                  <span className="text-4xl font-bold">{experience}</span>{' '}
                  <span>
                    years
                    <br />
                    Experience
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <span className="text-4xl font-bold">{clients}</span>{' '}
                  <span>
                    satisfied
                    <br />
                    clients
                  </span>
                </p>
              </div>
            </div>
          </div>
        </header>

        {/** Grid2 */}
        <div className="hidden lg:flex items-center justify-center h-full">
          <div
            className="ball_animation relative w-[450px] h-[450px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 
                          rounded-full flex items-center justify-center shadow-lg"
          >
            <div className="absolute w-[300px] h-[300px] bg-white rounded-full blur-xl opacity-40"></div>
            <img
              className="w-[320px] h-[380px] object-contain z-10"
              src={hero}
              alt="router"
              aria-label="icon of a modem router"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
