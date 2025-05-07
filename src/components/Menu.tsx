
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("entradas");
  
  const menuCategories = [
    { id: "entradas", name: "Entradas" },
    { id: "principais", name: "Pratos Principais" },
    { id: "sobremesas", name: "Sobremesas" },
    { id: "bebidas", name: "Bebidas" },
  ];
  
  const menuItems = {
    entradas: [
      {
        name: "Camarões Empanados",
        description: "Camarões empanados em uma crosta crocante de ervas, servidos com molho aioli de limão",
        price: "R$ 45,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        name: "Carpaccio de Polvo",
        description: "Finas fatias de polvo marinado em azeite e limão, acompanhado de alcaparras e rúcula",
        price: "R$ 52,00",
        featured: true,
        image: "https://images.unsplash.com/photo-1605209971703-84f9e323be25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        name: "Bruschetta do Mar",
        description: "Tomates frescos, alho, manjericão e cubos de peixe branco sobre pão italiano tostado",
        price: "R$ 38,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1572695044752-fde956b33d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
    principais: [
      {
        name: "Garra Azul Frutos do Mar",
        description: "Nosso prato signature: lagosta, camarões, lulas e mexilhões salteados em manteiga de ervas e vinho branco",
        price: "R$ 145,00",
        featured: true,
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        name: "Filé de Robalo Grelhado",
        description: "Filé de robalo grelhado ao ponto, acompanhado de risoto de limão siciliano e aspargos",
        price: "R$ 98,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1633436374961-09b92742047b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        name: "Linguini com Frutos do Mar",
        description: "Massa fresca ao molho de tomate e vinho branco com camarões, lulas e mexilhões",
        price: "R$ 88,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
    sobremesas: [
      {
        name: "Crème Brûlée de Maracujá",
        description: "Creme de baunilha com toque de maracujá e cobertura caramelizada",
        price: "R$ 35,00",
        featured: true,
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        name: "Petit Gateau de Chocolate",
        description: "Bolo quente de chocolate com centro derretido, acompanhado de sorvete de creme",
        price: "R$ 38,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
    bebidas: [
      {
        name: "Caipirinha de Frutas",
        description: "Cachaça premium com frutas da estação (limão, maracujá ou frutas vermelhas)",
        price: "R$ 28,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        name: "Água Tônica Especial",
        description: "Água tônica premium com espuma de gengibre e fatia de limão siciliano",
        price: "R$ 22,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        name: "Vinho Branco da Casa",
        description: "Taça de vinho branco selecionado pelo sommelier, perfeito para acompanhar frutos do mar",
        price: "R$ 32,00",
        featured: false,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
  };
  
  return (
    <section id="menu" className="section-padding bg-garra-navy text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Nosso Cardápio</h2>
          <div className="w-24 h-1 bg-garra-gold mx-auto"></div>
          <p className="mt-4 text-garra-sand">Descubra nossa seleção de pratos preparados com os melhores ingredientes</p>
        </div>
        
        <Tabs 
          defaultValue="entradas" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-garra-navy/50 border border-garra-gold/30">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-white data-[state=active]:text-garra-gold data-[state=active]:bg-garra-navy/80"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {menuCategories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="mt-8 animate-fade-in"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {menuItems[category.id as keyof typeof menuItems].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border ${
                      item.featured ? 'border-garra-gold' : 'border-transparent'
                    }`}
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="h-48 md:h-full overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            {item.featured && (
                              <span className="bg-garra-gold text-white text-xs px-2 py-1 rounded">Chef's Choice</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                        </div>
                        <div className="text-garra-gold font-bold text-lg">{item.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
