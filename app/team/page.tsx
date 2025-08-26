"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { 
  Heart, 
  Stethoscope, 
  Award, 
  GraduationCap,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Users
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Metadata se maneja dinámicamente para Client Components

const teamMembers = [
  {
    name: "Dra. María González",
    role: "Directora Médica",
    specialization: "Medicina Interna y Geriatría",
    experience: "15 años de experiencia",
    description: "Especialista en cuidado geriátrico con amplia experiencia en medicina domiciliaria. Lidera nuestro equipo médico con dedicación y profesionalismo.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    certifications: ["Medicina Interna", "Geriatría", "Cuidados Paliativos"],
    languages: ["Español", "Inglés"]
  },
  {
    name: "Enf. Carlos Rodríguez",
    role: "Jefe de Enfermería",
    specialization: "Enfermería Domiciliaria",
    experience: "12 años de experiencia",
    description: "Enfermero registrado especializado en cuidados domiciliarios y post-operatorios. Coordina todos los servicios de enfermería del equipo.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    certifications: ["Enfermería Registrada", "Cuidados Intensivos", "Administración"],
    languages: ["Español", "Inglés"]
  },
  {
    name: "Lic. Ana Martínez",
    role: "Fisioterapeuta",
    specialization: "Rehabilitación Neurológica",
    experience: "10 años de experiencia",
    description: "Fisioterapeuta especializada en rehabilitación neurológica y geriátrica. Diseña programas personalizados de recuperación en el hogar.",
    image: "https://images.unsplash.com/photo-1594824475317-d3c8b2e4c3c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    certifications: ["Fisioterapia", "Rehabilitación Neurológica", "Terapia Manual"],
    languages: ["Español"]
  },
  {
    name: "Lic. Roberto Silva",
    role: "Psicólogo Clínico",
    specialization: "Psicología Geriátrica",
    experience: "8 años de experiencia",
    description: "Psicólogo especializado en apoyo emocional para pacientes y familias. Brinda terapia y acompañamiento psicológico integral.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    certifications: ["Psicología Clínica", "Terapia Familiar", "Psicología Geriátrica"],
    languages: ["Español", "Inglés"]
  },
  {
    name: "Enf. Laura Pérez",
    role: "Enfermera Especialista",
    specialization: "Cuidados Post-Operatorios",
    experience: "9 años de experiencia",
    description: "Enfermera especializada en cuidados post-operatorios y manejo de heridas. Experta en recuperación domiciliaria después de cirugías.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    certifications: ["Enfermería Quirúrgica", "Manejo de Heridas", "Cuidados Intensivos"],
    languages: ["Español"]
  },
  {
    name: "Lic. Diego Morales",
    role: "Terapeuta Ocupacional",
    specialization: "Adaptación Funcional",
    experience: "7 años de experiencia",
    description: "Terapeuta ocupacional enfocado en mejorar la independencia y calidad de vida de los pacientes a través de actividades terapéuticas.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    certifications: ["Terapia Ocupacional", "Adaptación del Hogar", "Tecnología Asistiva"],
    languages: ["Español", "Inglés"]
  }
];

const stats = [
  { number: "15+", label: "Profesionales Certificados" },
  { number: "50+", label: "Años de Experiencia Combinada" },
  { number: "500+", label: "Pacientes Atendidos" },
  { number: "98%", label: "Satisfacción del Cliente" }
];

const values = [
  {
    icon: Heart,
    title: "Compasión",
    description: "Tratamos a cada paciente con amor y respeto, como si fuera parte de nuestra familia."
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos comprometemos con los más altos estándares de calidad en todos nuestros servicios."
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Colaboramos estrechamente para brindar un cuidado integral y coordinado."
  },
  {
    icon: GraduationCap,
    title: "Formación Continua",
    description: "Mantenemos nuestros conocimientos actualizados con capacitación constante."
  }
];

export default function TeamPage() {
  useEffect(() => {
    document.title = "Nuestro Equipo - Alivio Vital Home Care";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conoce a nuestro equipo de profesionales certificados en cuidado domiciliario. Enfermeras, terapeutas y cuidadores con experiencia y dedicación.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-beige-50 via-white to-blue-light/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-serene/10 to-beige-400/10 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-beige-500/10 to-blue-light/10 rounded-full translate-x-24 translate-y-24"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-serene/10 to-beige-400/10 rounded-full text-sm font-medium text-blue-serene border border-blue-serene/20">
              <Users className="w-4 h-4 mr-2" />
              Nuestro Equipo
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark leading-tight">
              Profesionales <span className="text-gradient">comprometidos</span>
            </h1>
            
            <p className="text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
              Conoce a nuestro equipo de profesionales certificados y experimentados, 
              dedicados a brindar el mejor cuidado domiciliario con calidez humana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-primary">
                  Contáctanos
                </Button>
              </Link>
              <Link href="/services">
                <Button className="btn-secondary">
                  Nuestros Servicios
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-beige-50 to-white rounded-2xl border border-beige-200"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-dark/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-beige-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Conoce a nuestros <span className="text-gradient">profesionales</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Cada miembro de nuestro equipo está certificado, capacitado y 
              comprometido con brindar el mejor cuidado posible.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-serene font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-sm text-neutral-dark/60">
                      {member.specialization}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-beige-500">
                    <Clock className="w-4 h-4" />
                    <span>{member.experience}</span>
                  </div>
                  
                  <p className="text-neutral-dark/70 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-dark mb-2">Certificaciones:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.certifications.map((cert, certIndex) => (
                          <span
                            key={certIndex}
                            className="px-2 py-1 bg-blue-serene/10 text-blue-serene text-xs rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-dark mb-2">Idiomas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.languages.map((lang, langIndex) => (
                          <span
                            key={langIndex}
                            className="px-2 py-1 bg-beige-400/10 text-beige-500 text-xs rounded-full"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Nuestros <span className="text-gradient">valores</span>
            </h2>
            <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen la calidad 
              de nuestro cuidado.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4 p-6 bg-gradient-to-br from-beige-50 to-white rounded-2xl border border-beige-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-serene to-beige-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark">{value.title}</h3>
                  <p className="text-neutral-dark/70">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-20 bg-gradient-to-br from-blue-light/5 to-beige-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
                  Certificaciones y <span className="text-gradient">capacitación continua</span>
                </h2>
                <p className="text-lg text-neutral-dark/70">
                  Nuestro equipo mantiene las más altas credenciales profesionales 
                  y se capacita constantemente para brindar el mejor cuidado.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-serene to-blue-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Certificaciones Profesionales</h3>
                    <p className="text-neutral-dark/70">Todos nuestros profesionales cuentan con certificaciones vigentes y reconocidas en sus áreas de especialización.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-beige-500 to-beige-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Capacitación Continua</h3>
                    <p className="text-neutral-dark/70">Participamos regularmente en programas de educación continua para mantenernos actualizados con las mejores prácticas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-light to-beige-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-2">Experiencia Comprobada</h3>
                    <p className="text-neutral-dark/70">Nuestro equipo cuenta con años de experiencia en cuidado domiciliario y atención médica especializada.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Equipo de profesionales en capacitación"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-serene/20 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-beige-400 to-beige-500 rounded-2xl rotate-12 opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-light to-blue-serene rounded-xl -rotate-12 opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-serene to-beige-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Quieres conocer más sobre nuestro equipo?
            </h2>
            <p className="text-xl opacity-90">
              Contáctanos para conocer más sobre nuestros profesionales y 
              cómo pueden ayudarte a ti y a tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-serene hover:bg-white/90 px-8 py-3">
                  Contáctanos
                </Button>
              </Link>
              <a 
                href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20equipo%20de%20Alivio%20Vital%20Home%20Care."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-serene px-8 py-3">
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}