import network_security from '../assets/images/icons8-cloud-network-96.png';
import coding from '../assets/images/icons8-coding-96.png';
import cloud from '../assets/images/icons8-public-cloud-96.png';
import analysis from '../assets/images/icons8-analysis-96.png';


function Services() {
  const services = [
    { id: 1, title: "Network Security", context: "I help forward-thinking businesses like yours strengthen their defenses, enhance operational security, and safeguard sensitive data by building robust, scalable network security solutions.", icon: network_security },
    { id: 2, title: "Programming & Scripting", context: "Through advanced programming and scripting, I help increase efficiency and boost profits by leveraging automation to streamline operations and using programming expertise to create interactive, user-friendly websites that engage customers and drive sales.", icon: coding },
    { id: 3, title: "Cloud & Virtualization", context: "My expertise in cloud and virtualization empowers businesses to modernize their IT infrastructure, enabling seamless scalability, efficient resource management, and improved reliability to support their growth and innovation.", icon: cloud },
    { id: 4, title: "Monitoring & Analysis", context: "By implementing cutting-edge monitoring and analysis tools, I help businesses gain real-time insights, identify potential issues proactively, and optimize performance to ensure seamless operations and informed decision-making", icon: analysis },
  ];

  return (
    <section id="services" className="min-h-screen px-5 lg:px-[100px] py-16 relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#A2D0F6] blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#A2D0F6] blur-3xl"></div>

      {/* Section Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">My Services</h1>
      </header>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card w-full max-w-[600px] h-[280px] bg-gray-800 px-8 py-8 border-4 rounded-lg border-transparent bg-gradient-to-tl 
                from-purple-600 to-purple-900 bg-clip-border shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col gap-4">
              {/* Decorative Icon Placeholder */}
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-700 to-purple-400 via-purple-300 rounded-full flex items-center justify-center">
                <img
                  className="w-8 h-8"
                  src={service.icon}
                  alt={`${service.title} icon`}
                  aria-label={`${service.title}`}
                />
              </div>
              {/* Service Title */}
              <p className="text-lg lg:text-xl font-bold text-white">{service.title}</p>
              {/* Service Description */}
              <p className="text-sm lg:text-base text-gray-300">{service.context}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
