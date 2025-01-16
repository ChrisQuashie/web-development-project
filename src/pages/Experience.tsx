import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ksu from '../assets/images/ksu_logo.png'
import credit_union from '../assets/images/memberfirst_logo.webp'
import bdo from '../assets/images/bdo_logo.png'
function Experience() {
    const experiences = [
        {
            id:1,
            icon:bdo,
            title: "Network Engineer",
            company_name: "BDO",
            date: "August 2024 - Present",
            points: [
                "Led organization-wide port security project on network switch interfaces to enforce access restrictions based on MAC address authentication.",
                "Configured and monitored Dedicated Internet Access IP addresses in SolarWinds using ICMP.",
                "Executed DNS updates to enable accurate domain resolution and ensure seamless network connectivity for newly constructed sites.",
                "Coordinated and executed hardware swaps and upgrades across remote branch locations, ensuring minimal downtime and seamless integration into existing network infrastructure.",
                "Provisioned cloud networking solutions, including Azure VNet, gateway/NSG, and WAN/VNet peering, within Azure and AWS.",
                "Designed and implemented network projects involving edge gateways, IDS/IPS, email filtering, and web content filtering solutions.",

            ]
        },
        {   
            id:2,
            icon:credit_union,
            title: "Network Admin",
            company_name: "MembersFirst Credit Union",
            date: "May 2021- Aug 2023",
            points: [
                "Configure and maintain network devices such as routers, switches, and servers, ensuring that they operate efficiently and securely.",
                "Led the IP phone system upgrade and migration project, including planning, deployment, and configuration of VoIP infrastructure.",
                "Addressed incoming firewall, ACL, and VPN requests and provide customer troubleshooting and support.",
                "Engineered and maintained virtual networks, ensuring seamless communication between virtual machines and the physical network infrastructure."
            ]
        },
    
        {
            id:3,
            icon: ksu,
            title: "Network Engineer",
            company_name: "Kennesaw State University",
            date: "Sept 2023- Jul 2024",
            points: [
                "Troubleshooting and diagnosing WAN and LAN connectivity problems, employing effective solutions to minimize downtime and maintain network integrity.",
                "Played a key role in the life cycle replacement project for KSU's enterprise network, overseeing the provisioning and deployment of over 800 switches and 200+ switch stacks..",
                "Performed firmware updates on network switches to ensure optimal performance, security, and compatibility with the latest features and technologies.",
                "Managed Cisco IOS in an enterprise-level network environment, configuring VLANs, port security protocols to, and establishing VPN connectivity to enhance secure communication within the network infrastructure."
            ]
        }
    ]
  return (
    <div className="px-8 py-6">
        <header className="flex flex-col gap-4">
        <p className="text-[gray]">WHAT I HAVE DONE SO FAR</p>
        <p className="text-4xl lg:text-5xl font-bold">Work Experience.</p>
      </header>
        <VerticalTimeline className="py-10 px-8">
            {experiences.map(data=>(
                <VerticalTimelineElement
                icon={<img className="rounded-full" src={data.icon} aria-label={data.title} alt={data.title} style={{ width: "100%", height: "100%" }} />}
                contentStyle={{ background: "rgb(90, 14, 123)", color: "#fff" }}
                key={data.id}>
                    <h1 className="font-bold text-3xl">{data.title}</h1>
                    <p className="text-gray-400">{data.company_name}</p>
                    {data.points.map((points, idx)=>(
                        <ul
                        className="list-disc"
                        key={idx}>
                            <li className="mb-2">{points}</li>
                        </ul>
                    ))}
                    <p className="text-[gray]">{data.date}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </div> 
  );
}

export default Experience;
