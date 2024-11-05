'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
import portfolioImage from "@/assets/images/PortfolioMissionScreenshot.png"
import Image from "next/image";

// Example project data - you'll want to replace this with your actual data source
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A sci-fi themed developer portfolio inspired by LCARS, The Matrix, and Tron interfaces. Built with Next.js, Tailwind CSS, and Framer Motion.",
    image: portfolioImage,
    blogUrl: "/system-mainframe/mission-logs/portfolio-mission",
    githubUrl: "https://github.com/hbabb/portfolio-next",
    demoUrl: "https://heath-babb.tech",
  },
  // Add more projects as needed
];

export default function MissionLogs() {
  return (
    <div className="w-full p-6 space-y-8">
      <header className="mb-12">
        <h1 className="text-lcars-header font-lcars-bold text-lcars-gold mb-4 underline">Mission Logs</h1>
        <p className="text-lcars text-lcars-violetCreme font-lcars">
          Current mission records and technical appendices.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="bg-black border-2 border-lcars-lilac rounded-lcars-standard overflow-hidden hover:border-lcars-blue transition-colors duration-300"
          >
            <CardHeader className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover border-b-2 border-lcars-text"
              />
            </CardHeader>
            
            <CardContent className="p-6">
              <h2 className="text-lcars-title font-lcars text-lcars-text mb-4">
                {project.title}
              </h2>
              <p className="text-lcars text-lcars-violetCreme">
                {project.description}
              </p>
            </CardContent>

            <CardFooter className="flex flex-wrap gap-4 p-6 pt-0 items-center justify-center">
              <Button 
                className="bg-lcars-green hover:bg-lcars-blue text-black font-lcars rounded-lcars-button flex items-center gap-2"
                onClick={() => window.location.href = project.blogUrl}
              >
                <FileText size={18} />
                Mission Log
              </Button>
              
              {project.githubUrl && (
                <Button 
                  className="bg-lcars-red hover:bg-lcars-blue text-black font-lcars rounded-lcars-button flex items-center gap-2"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github size={18} />
                  Code
                </Button>
              )}
              
              {project.demoUrl && (
                <Button 
                  className="bg-lcars-sunflower hover:bg-lcars-blue text-black font-lcars rounded-lcars-button flex items-center gap-2"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  <ExternalLink size={18} />
                  Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}