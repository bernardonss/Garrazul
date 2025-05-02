
import React from 'react';

const Location = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-garra-navy mb-2">Localização</h2>
          <div className="w-24 h-1 bg-garra-gold mx-auto"></div>
          <p className="mt-4 text-gray-700">Venha nos visitar e descubra a experiência Garra Azul</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.4974108924814!2d-48.49289102582207!3d-27.432205841538462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527475c64cc5f7b%3A0x2da4544c1cfa367c!2sR.%20Dep.%20Fernando%20Vi%C3%A9gas%2C%2020%20-%20Ponta%20das%20Canas%2C%20Florian%C3%B3polis%20-%20SC%2C%2088054-700!5e0!3m2!1spt-BR!2sbr!4v1714038276625!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Garra Azul"
            ></iframe>
          </div>
          
          <div className="space-y-8">
            <div className="bg-garra-sand p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-garra-navy mb-4">Como Chegar</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-garra-navy">Endereço:</p>
                  <p>R. Dep. Fernando Viégas, 20 - Ponta das Canas, Florianópolis - SC, 88054-700</p>
                </div>
                
                <div>
                  <p className="font-semibold text-garra-navy">Transporte Público:</p>
                  <p>Linhas de ônibus disponíveis na região de Ponta das Canas</p>
                </div>
                
                <div>
                  <p className="font-semibold text-garra-navy">Estacionamento:</p>
                  <p>Estacionamento próximo (consulte disponibilidade local)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-garra-navy p-6 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-semibold mb-4">Horário de Funcionamento</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Todos os dias: 11 às 23h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
