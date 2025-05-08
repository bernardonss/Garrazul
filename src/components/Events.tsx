
import React from 'react';
import { Cake, PartyPopper, Utensils } from 'lucide-react';

const Events = () => {
  const events = [
    {
      icon: <Cake className="w-10 h-10 text-garra-gold" />,
      title: "Casamentos",
      description: "Um espaço perfeito para seu dia especial, com vista privilegiada para o mar e atendimento personalizado."
    },
    {
      icon: <PartyPopper className="w-10 h-10 text-garra-gold" />,
      title: "Formaturas",
      description: "Celebre sua conquista acadêmica em um ambiente único e sofisticado, com cardápio especial para grupos."
    },
    {
      icon: <Utensils className="w-10 h-10 text-garra-gold" />,
      title: "Jantares Executivos",
      description: "Ambiente ideal para reuniões corporativas e jantares de negócios, com serviço discreto e profissional."
    }
  ];

  return (
    <section id="events" className="section-padding bg-garra-sand">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-garra-navy mb-2">Eventos</h2>
          <div className="w-24 h-1 bg-garra-gold mx-auto"></div>
          <p className="mt-4 text-gray-700">Realize seu evento especial no Garra Azul</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {event.icon}
              </div>
              <h3 className="text-xl font-semibold text-garra-navy mb-3 text-center">{event.title}</h3>
              <p className="text-gray-700 text-center">{event.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-garra-navy mb-4 text-center">Personalize seu Evento</h3>
          <p className="text-center mb-6">
            Nosso espaço versátil e nossa equipe experiente estão prontos para tornar seu evento inesquecível. 
            Oferecemos pacotes personalizados para casamentos, formaturas e jantares executivos para empresas.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/554891251018?text=Ol%C3%A1%2C%20Garra%20Azul!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20evento%20no%20seu%20restaurante.%20Por%20favor%2C%20me%20informe%20sobre%20os%20pacotes%20dispon%C3%ADveis%20e%20os%20pre%C3%A7os.%20Obrigado!"
              className="bg-garra-navy text-white py-3 px-6 rounded-md hover:bg-garra-navy/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicite um orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
