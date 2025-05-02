
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-garra-navy mb-8">Política de Privacidade</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">1. Coleta de Informações</h2>
            <p className="text-gray-700 mb-4">
              O Restaurante Garra Azul coleta apenas as informações necessárias para proporcionar uma melhor experiência aos nossos clientes, como nome e informações de contato quando você faz uma reserva.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">2. Uso das Informações</h2>
            <p className="text-gray-700 mb-4">
              As informações coletadas são utilizadas exclusivamente para processar reservas, responder a suas solicitações e melhorar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">3. Proteção de Dados</h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado ou alteração.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">4. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Nosso site pode usar cookies para melhorar sua experiência de navegação. Você pode optar por desativar os cookies nas configurações do seu navegador.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
