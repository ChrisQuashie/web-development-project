import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ksu from '../assets/images/ksu_logo.png'
import credit_union from '../assets/images/credit_union_logo.png'
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
                "Validate and maintain internet access interfaces on remote site.",
                "Administered HPE, Cisco ASA/FTD devices for seamingless network operations",
                "Configure and optimized alerts in SolarWinds, Particularly for SDWAN circuit.",
                "Analyzed TCP/IP and associated protocols to ensure optimized network performance."
            ]
        },
        {   
            id:2,
            icon:credit_union,
            title: "Network Admin",
            company_name: "Credit Union",
            date: "May 2021- Aug 2023",
            points: [
                "Configure routers, switches, and servers to ensure efficient and secure network.",
                "Led IP phone system upgrade, planning and deploying VoIP infrastructure.",
                "Engineered virtual networks for seamless VM and physical networks",
                "Addressed firewal,l ACL, and VPN requests, providing technical support and solutions."
            ]
        },
    
        {
            id:3,
            icon: ksu,
            title: "Network Engineer",
            company_name: "Kennesaw State University",
            date: "Sept 2023- Jul 2024",
            points: [
                "Managed enterprice cisco ios configurations, implementing VLANS, VPN and PORT security.",
                "Led lifecyle replacement project, deploying 800+ switches and 200+ switch stacks across campus network",
                "Performed firmware upgrades on network switches.",
                "Diagnosed WAN/LAN connectivity issues deploying solutions to minimize downtime."
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
                            <li>{points}</li>
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
