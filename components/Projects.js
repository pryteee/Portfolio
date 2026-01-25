'use client';
import { useRef, useEffect } from 'react';
import { Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  const projects = [
    {
      title: 'API-Reliability-Analyzer',
      tagline: 'Track, analyze, and improve API stability',
      description: 'Python-based tool to monitor and evaluate the performance and uptime of APIs. Tracks response times, detects unstable endpoints, and logs detailed metrics for analysis. Features automated reporting, CSV/Pandas-based data processing, and visualization of API reliability trends. Helps improve API stability and informs decision-making for developers and stakeholders.',
      image: 'https://images.pexels.com/photos/10816120/pexels-photo-10816120.jpeg',
      tags: ['Python', 'FastAPI', 'Uvicorn', 'HTTP APIs'],
      github: 'https://github.com/pryteee/API-Reliability-Analyzer'
    },
    {
      title: 'Predictive Risk ML Pipeline',
      tagline: 'End-to-end ML pipeline for actionable student risk assessment',
      description: 'Built a complete machine learning pipeline capable of processing student data, performing feature engineering, training a predictive model, and exposing real-time predictions through a scalable REST API. The pipeline includes automated data validation, model serialization, and containerized deployment to ensure consistency and reliability across environments. The system delivers actionable risk assessments, enabling timely interventions for students at risk of dropping out.',
      image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/8711195/cover_image/retina_1708x683/unnamed-f01e6ca9886bcfaaae4f80b6fa51970f.png',
      tags: ['Python', 'LightGBM', 'Pandas', 'FastAPI','Docker'],
      github: 'https://github.com/pryteee/Predictive-Risk-ML-Pipeline'
    },
    {
      title: 'Local Scanner',
      tagline: 'Discover devices and ports safely.',
      description: 'A Python-based tool that scans a host machine and private network to identify open ports, running services, connected devices, and local web servers. The tool focuses on safe, owner-only scanning and generates structured reports for visibility and analysis.',
      image: 'https://pentest-tools.com/images/illustrations/tool-pages/website-scanner/showcase-illustration-3.svg',
      tags: ['Python'],
      github: 'https://github.com/pryteee/local_scanner'
    }
  ];

  const skills = ['Python', 'Next.js', 'TensorFlow', 'Nmap', 'Kali', 'Git'];      

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: leftPanelRef.current,
      pinSpacing: false
    });

    const projectCards = containerRef.current?.querySelectorAll('.project-card');
    if (projectCards) {
      projectCards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
        position: 'relative',
        display: 'flex'
      }}>
      
      {/* LEFT SIDEBAR  */}
      <div 
        ref={leftPanelRef}
        style={{
          width: '40%',
          height: '100vh',
          padding: '80px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          borderRadius: '0 20px 20px 0',
          overflow: 'hidden'
        }}>
        
        {/* Grid Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          zIndex: -1
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(60, 60, 60, 0.7) 1.5px, transparent 1.5px),
              radial-gradient(circle at 1px 1px, rgba(80, 80, 80, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px, 40px 40px',
            backgroundPosition: '0 0, 10px 10px'
          }} />
        </div>

        <div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #fff 0%, #667eea 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.2
          }}>
            Pritirekha Panda
          </h2>

          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.3
          }}>
            Building intelligent, data-driven <br/>solutions 
          </h3>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '30px',
            maxWidth: '500px'
          }}>
            A curated set of academic and personal projects demonstrating
            practical implementation, analytical thinking, and effective use
            of modern development tools.
          </p>

          <div>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '15px'
            }}>
              TOOLS & TECHNOLOGIES
            </h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {skills.map((skill, idx) => (
                <span key={idx} style={{
                  padding: '6px 0',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.7)',
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{
                    width: '4px',
                    height: '4px',
                    background: '#667eea',
                    borderRadius: '50%'
                  }}/>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          width: '100%',
          maxWidth: '350px',
          margin: '0 auto'
        }}>
          <img 
            src="/character.png" 
            alt="Character"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 30px rgba(102, 126, 234, 0.3))'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* RIGHT SIDE PROJECTS */}
      <div 
        ref={rightPanelRef}
        style={{
          width: '60%',
          padding: '80px 60px',
          minHeight: '100vh'
        }}>
        
        {/* Projects */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '120px',
          paddingBottom: '100px'
        }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card"
              style={{
                opacity: 0,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
              
              <div style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'stretch' 
              }}>
                {/* FULL PROJECT IMAGE */}
              <div style={{
                flex: 1,
                minHeight: '500px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                backgroundImage: `url(${project.image})`, 
                backgroundSize: 'cover',                   
                backgroundPosition: 'center',              
                backgroundRepeat: 'no-repeat'              
              }}>
              </div>

                {/* PROJECT DETAILS */}
                <div style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '20px 0'
                }}>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                    color: 'white',
                    lineHeight: 1.2
                  }}>
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p style={{
                    fontSize: '1.3rem',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '25px',
                    fontWeight: '500',
                    fontStyle: 'italic'
                  }}>
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p style={{
                    fontSize: '1.05rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.8,
                    marginBottom: '30px'
                  }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '30px'
                  }}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} style={{
                        background: 'rgba(102, 126, 234, 0.1)',
                        color: '#8892ff',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(102, 126, 234, 0.2)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a href={project.github} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255,255,255,0.1)',
                    alignSelf: 'flex-start'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    <Github size={20} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}




