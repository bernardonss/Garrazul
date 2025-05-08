import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

interface FormFields extends HTMLFormElement {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement & FormFields>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;
    const formData: ReservationData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: parseInt(form.guests) || 0,
      message: form.message
    };

    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || formData.guests <= 0) {
      setFormError('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    try {
      setFormError(null);
      setIsLoading(true);

      // Construir a mensagem para WhatsApp
      const whatsappMessage = `Olá, Garra Azul! Gostaria de fazer uma reserva.

Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Data: ${formData.date}
Horário: ${formData.time}
Número de pessoas: ${formData.guests}
${formData.message ? `Mensagem: ${formData.message}` : ''}`;

      // Abrir WhatsApp com os dados preenchidos
      const whatsappUrl = `https://wa.me/554891251018?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Reserva enviada!",
        description: "Seus dados foram enviados para o WhatsApp do restaurante. Aguarde a confirmação.",
      });

      // Limpar o formulário após o envio bem-sucedido
      form.reset();
      setIsLoading(false);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Erro ao fazer a reserva. Por favor, tente novamente.');
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : 'Erro ao fazer a reserva. Por favor, tente novamente.',
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-garra-sand">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-garra-navy mb-2">Reservas & Contato</h2>
          <div className="w-24 h-1 bg-garra-gold mx-auto"></div>
          <p className="mt-4 text-gray-700">Faça sua reserva e garanta uma experiência gastronômica inesquecível</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-garra-navy mb-6">Formulário de Reserva</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Nome</label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">Telefone</label>
                  <Input id="phone" placeholder="(00) 00000-0000" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="seu@email.com" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium">Data</label>
                  <Input id="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="block text-sm font-medium">Horário</label>
                  <Input id="time" type="time" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="guests" className="block text-sm font-medium">Número de pessoas</label>
                <Input id="guests" type="number" min="1" placeholder="2" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Mensagem (opcional)</label>
                <Textarea id="message" placeholder="Observações especiais ou preferências..." />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-garra-navy text-white hover:bg-garra-navy/90"
                disabled={isLoading}
              >
                {isLoading ? 'Enviando...' : 'Enviar Reserva'}
              </Button>
              {formError && (
                <p className="text-red-500 text-sm mt-2">{formError}</p>
              )}
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-semibold text-garra-navy mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-garra-navy">Endereço:</p>
                  <p>R. Dep. Fernando Viégas, 20 - Ponta das Canas, Florianópolis - SC, 88056-730</p>
                </div>
                
                <div>
                  <p className="font-semibold text-garra-navy">Telefone:</p>
                  <p> (48) 3091-0469 / (48) 9125-1018</p>
                </div>
                
                <div>
                  <p className="font-semibold text-garra-navy">Email:</p>
                  <p>restaurantegarraazul@gmail.com</p>
                </div>
                

              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-garra-navy mb-4">Reserva Rápida</h3>
              <p className="mb-6">Prefere fazer sua reserva pelo WhatsApp? Clique no botão abaixo:</p>
              
              <a 
                href="https://wa.me/554891251018?text=Olá,%20Garra%20Azul!%20Gostaria%20de%20reservar%20uma%20mesa%20para%20[data]%20às%20[horário]%20para%20[X]%20pessoas.%20Nome:%20[seu%20nome]." 
                className="flex items-center justify-center w-full bg-[#25D366] text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Reservar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
