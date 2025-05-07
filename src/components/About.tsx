
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";

const About = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "O Garra Azul oferece uma experiência gastronômica única. Os pratos são meticulosamente preparados, o ambiente é acolhedor, e o atendimento é impecável. O 'Garra Azul Frutos do Mar' é simplesmente divino!",
      author: "Maria Silva",
      role: "Cliente frequente",
      link: ""
    },
    {
      text: "O restaurante conta com uma parceria de estacionamento que proporciona sossego ao cliente por 25,00. O ambiente é muito limpo, banheiro impecável. O restaurante é organizado e com um atendimento espetacular. A Garçonete Jéssica sempre atenciosa e alegre conosco. Pedimos um combo com camarão, iscas de peixe e batata frita. Combo muito gostoso que alimenta muito bem 4pessoas por 165,00. A praia é sensacional, com um mar calmo e natureza abundante, excelente pra levar crianças. Com certeza voltaremos ao restaurante quando visitarmos ponta das Canas, experiência incrível! Muito obrigado equipe",
      author: "Alex Balardim",
      role: "Cliente satisfeito",
      link: "https://maps.app.goo.gl/vnH46VhDS1w3eqjF9"
    },
    {
      text: "Restaurante na Praia de Ponta das Canas, tem ambiente interno climatizado e mesas na areia. Indico prato de garopa grelhada a belle muniere. Serve muito bem 2 pessoas. Tem estacionamento com valet que vale muito pela comodidade, pois na rua geralmente não existe vagas disponíveis.",
      author: "Patricia Kersch",
      role: "Cliente satisfeita",
      link: "https://maps.app.goo.gl/pmnqoijSpDwZ3Hgk8"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-garra-navy mb-2">Nossa História</h2>
          <div className="w-24 h-1 bg-garra-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              O <span className="font-semibold text-garra-navy">Garra Azul</span> abriu suas portas pela primeira vez em 2012, 
              na encantadora praia de Ponta das Canas, no norte da ilha de Florianópolis. Fundado por um casal de manezinhos, 
              nascidos e criados na Ilha da Magia, o restaurante surgiu do desejo de compartilhar a culinária local com 
              autenticidade e carinho, em um ambiente acolhedor à beira-mar.
            </p>
            <p className="text-lg">
              O nome <span className="font-semibold text-garra-navy">Garra Azul</span> é uma homenagem a um pequeno habitante 
              das areias e águas cristalinas da região: o siri de garras azuis, símbolo da força e da beleza natural da ilha. 
              Assim como esse curioso crustáceo, o restaurante carrega consigo a essência do mar, oferecendo pratos preparados 
              com ingredientes frescos e sabores que remetem às tradições catarinenses.
            </p>
            <p className="text-lg">
              Desde sua inauguração, o <span className="font-semibold text-garra-navy">Garra Azul</span> conquistou o coração 
              de moradores e turistas, tornando-se um ponto de encontro para quem busca uma experiência gastronômica especial, 
              acompanhada pela brisa suave e pelo cenário paradisíaco de Ponta das Canas.
            </p>
            <p className="text-lg">
              Com o compromisso de oferecer sempre o melhor, o <span className="font-semibold text-garra-navy">Garra Azul</span> 
              continua escrevendo sua história, levando o sabor da ilha a cada cliente que cruza suas portas. Venha nos visitar 
              e descubra o que torna esse lugar tão especial!
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/4.png" 
              alt="Chef do restaurante Garra Azul" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 bg-garra-gold p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-semibold text-xl">11+ anos de história</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-garra-navy mb-2">O Que Dizem Nossos Clientes</h3>
            <div className="w-16 h-1 bg-garra-gold mx-auto"></div>
          </div>
          
          <div className="relative">
            <Card className="bg-garra-sand p-8 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <svg className="w-10 h-10 text-garra-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="text-center transition-opacity duration-300">
                {testimonials[activeTestimonial].link ? (
                  <a 
                    href={testimonials[activeTestimonial].link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <p className="text-lg italic mb-6">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <div>
                      <p className="font-semibold text-garra-navy">{testimonials[activeTestimonial].author}</p>
                      <p className="text-sm flex items-center justify-center gap-1">
                        {testimonials[activeTestimonial].role}
                        {testimonials[activeTestimonial].link && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-garra-gold">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                        )}
                      </p>
                    </div>
                  </a>
                ) : (
                  <>
                    <p className="text-lg italic mb-6">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <div>
                      <p className="font-semibold text-garra-navy">{testimonials[activeTestimonial].author}</p>
                      <p className="text-sm">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </>
                )}
              </div>
              
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-4 mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-garra-gold hover:text-white transition-colors"
                    aria-label="Depoimento anterior"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === activeTestimonial ? 'bg-garra-gold' : 'bg-gray-300'
                        }`}
                        aria-label={`Depoimento ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-garra-gold hover:text-white transition-colors"
                    aria-label="Próximo depoimento"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
