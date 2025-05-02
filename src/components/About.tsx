
import React from 'react';

const About = () => {
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
        
        {/* Testimonial */}
        <div className="mt-24 bg-garra-sand p-8 md:p-12 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-garra-navy">O Que Dizem Nossos Clientes</h3>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-4 text-garra-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl italic mb-6">
              "O Garra Azul oferece uma experiência gastronômica única. Os pratos são meticulosamente preparados, 
              o ambiente é acolhedor, e o atendimento é impecável. O 'Garra Azul Frutos do Mar' é simplesmente divino!"
            </p>
            <div>
              <p className="font-semibold text-garra-navy">Maria Silva</p>
              <p className="text-sm">Cliente frequente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

