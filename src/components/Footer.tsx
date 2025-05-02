import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-garra-navy text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-4">Garra Azul</h3>
            <p className="mb-4">Uma experiência única em gastronomia de frutos do mar.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/restaurantegarraazul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-garra-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-garra-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>(48) 9125-1018</li>
              <li>contato@garraazul.com.br</li>
              <li>R. Dep. Fernando Viégas, 20 - Ponta das Canas, Florianópolis - SC, 88054-700</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li>Todos os dias: 11h às 23h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Restaurante Garra Azul. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-400">
            <Link to="/politica-de-privacidade" className="hover:text-garra-gold transition-colors">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-garra-gold transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
