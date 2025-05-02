
import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-garra-navy mb-8">Termos de Uso</h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 mb-4">
              Ao acessar e usar o site do Restaurante Garra Azul, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">2. Uso do Site</h2>
            <p className="text-gray-700 mb-4">
              O conteúdo deste site é apenas para fins informativos. O Restaurante Garra Azul reserva-se o direito de modificar ou descontinuar, temporária ou permanentemente, o site ou qualquer parte dele sem aviso prévio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">3. Propriedade Intelectual</h2>
            <p className="text-gray-700 mb-4">
              Todo o conteúdo presente neste site, incluindo textos, imagens, logos e design, são de propriedade do Restaurante Garra Azul e protegidos por leis de direitos autorais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-garra-navy mb-4">4. Modificações dos Termos</h2>
            <p className="text-gray-700 mb-4">
              O Restaurante Garra Azul reserva-se o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
