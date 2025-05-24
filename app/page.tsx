import Image from "next/image"
import { Phone, MapPin, Check, Star, ArrowRight, Users, Palmtree, Sparkles, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-cormorant font-bold">
            <span className="text-green-700">Chácara</span>
            <span>Serra Negra</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#caracteristicas" className="text-sm font-medium hover:text-green-700 transition-colors">
              Características
            </a>
            <a href="#galeria" className="text-sm font-medium hover:text-green-700 transition-colors">
              Galeria
            </a>
            <a href="#localizacao" className="text-sm font-medium hover:text-green-700 transition-colors">
              Localização
            </a>
            <a href="#potencial" className="text-sm font-medium hover:text-green-700 transition-colors">
              Potencial
            </a>
          </nav>
          <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
            <a
              href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noreferrer"
            >
              <Phone className="h-4 w-4" />
              <span>(11) 99199-8980</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[80vh] w-full">
            <Image
              src="/images/chacara-dia-frente.png"
              alt="Vista frontal da chácara durante o dia"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <Badge className="bg-green-600 hover:bg-green-700 mb-4 text-white">Oportunidade Exclusiva</Badge>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow max-w-4xl mx-auto leading-tight">
                  Propriedade de Luxo em Serra Negra
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-shadow font-light">
                  Uma exclusiva chácara com 5.000m² de área total e 1.000m² de área construída em localização
                  privilegiada, perfeita para residência ou empreendimento
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-green-700 hover:bg-green-800 text-white hover-scale">
                    <a
                      href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Agendar Visita
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="bg-white/20 border-white text-white hover:bg-white/20 hover:text-white hover-scale"
                  >
                    <a href="https://wa.me/5511991998980" target="_blank" rel="noreferrer">
                      Conversar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-8 border-b md:border-b-0 md:border-r border-gray-200 hover-scale">
                <Home className="h-12 w-12 text-green-700 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Arquitetura Exclusiva</h3>
                <p className="text-gray-600">
                  Acabamento em alto padrão com ardósia, lareira em pedras e detalhes personalizados
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 border-b md:border-b-0 md:border-r border-gray-200 hover-scale">
                <MapPin className="h-12 w-12 text-green-700 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Localização Privilegiada</h3>
                <p className="text-gray-600">
                  A 10 minutos de Serra Negra e próxima a diversas cidades turísticas da região
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 hover-scale">
                <Palmtree className="h-12 w-12 text-green-700 mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Área de Lazer Completa</h3>
                <p className="text-gray-600">Piscina semi-olímpica, churrasqueira, salão de jogos e ampla área verde</p>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section id="caracteristicas" className="py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Características Exclusivas</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Uma Propriedade Única</h2>
              <p className="text-gray-600 text-xl">
                Descubra todos os detalhes que fazem desta chácara uma oportunidade imperdível para morar ou investir
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl hover-scale">
                <Image
                  src="/images/chacara-piscina-2.png"
                  alt="Vista da propriedade com piscina"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="space-y-10">
                  <div>
                    <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                      <span className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Home className="h-5 w-5 text-green-700" />
                      </span>
                      Residência Principal
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">5 suítes espaçosas com armários em madeira maciça</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">
                          3 amplas salas, incluindo sala de jantar e estar com lareira central
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">
                          Varanda confortável que circunda toda a casa com vista panorâmica
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">
                          Acabamento em alto padrão com ardósia no piso e portas em madeira maciça
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                      <span className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-green-700" />
                      </span>
                      Área de Lazer
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Piscina com dimensões próximas à semi-olímpica</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Churrasqueira coberta e sala de TV para entretenimento</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Salão de jogos com mesa de snooker profissional</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Dois vestiários completos próximos à área da piscina</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10">
                  <Button
                    asChild
                    className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 h-auto hover-scale"
                  >
                    <a
                      href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Solicitar Mais Informações
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de Fotos */}
        <section id="galeria" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Galeria de Fotos</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Conheça Cada Detalhe da Propriedade</h2>
              <p className="text-gray-600 text-xl">
                Imagens que capturam a beleza e o potencial desta chácara excepcional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg group hover-scale">
                <Image
                  src="/images/chacara-dia-frente.png"
                  alt="Fachada da casa durante o dia"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-semibold text-2xl">Fachada Principal</h3>
                    <p className="text-lg">Arquitetura elegante com ampla varanda</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg group hover-scale">
                <Image
                  src="/images/chacara-noite.png"
                  alt="Vista noturna da casa com iluminação"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-semibold text-2xl">Vista Noturna</h3>
                    <p className="text-lg">Iluminação especial que valoriza a arquitetura</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg group hover-scale">
                <Image
                  src="/images/chacara-piscina-1.png"
                  alt="Piscina com vista para a casa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-semibold text-2xl">Área da Piscina</h3>
                    <p className="text-lg">Piscina semi-olímpica com área de lazer</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg group md:col-span-2 lg:col-span-1 hover-scale">
                <Image
                  src="/images/chacara-piscina-2.png"
                  alt="Vista da piscina com montanhas ao fundo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-semibold text-2xl">Vista Panorâmica</h3>
                    <p className="text-lg">Paisagem deslumbrante com os morros da Mantiqueira</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg group md:col-span-2 hover-scale">
                <Image
                  src="/images/chacara-dia-frente.png"
                  alt="Vista panorâmica da propriedade"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="bg-white/20 border-white text-white hover:bg-white/20 hover:text-white text-lg px-8 py-6 h-auto"
                  >
                    <a
                      href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20ver%20mais%20fotos%20da%20Chácara%20em%20Serra%20Negra"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver Todas as Fotos
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Localização Estratégica</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">No Coração do Circuito das Águas Paulista</h2>
              <p className="text-gray-600 text-xl">
                Desfrute de fácil acesso às principais cidades turísticas da região
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-xl shadow-sm hover-scale">
                    <h3 className="text-3xl font-semibold mb-6 text-green-800">Acesso Privilegiado</h3>
                    <p className="text-gray-700 mb-6 text-lg">
                      Localizada na estrada principal Serra Negra-Lindoia, a propriedade oferece fácil acesso e está a
                      poucos minutos das principais cidades turísticas da região:
                    </p>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-700 font-semibold text-lg">10</span>
                        </div>
                        <div>
                          <span className="font-medium text-xl">10 minutos de Serra Negra</span>
                          <p className="text-gray-600">Cidade conhecida pelo turismo de compras e eventos</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-700 font-semibold text-lg">5</span>
                        </div>
                        <div>
                          <span className="font-medium text-xl">5 minutos de Lindoia</span>
                          <p className="text-gray-600">Famosa por suas águas minerais de qualidade</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-700 font-semibold text-lg">15</span>
                        </div>
                        <div>
                          <span className="font-medium text-xl">15 minutos de Águas de Lindoia</span>
                          <p className="text-gray-600">Destino turístico com balneários e hotéis de luxo</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm hover-scale">
                    <h3 className="text-3xl font-semibold mb-6 text-green-800">Benefícios da Região</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Star className="h-6 w-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Clima ameno e agradável durante todo o ano</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="h-6 w-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Proximidade com centros de compras e turismo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="h-6 w-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Região valorizada e em constante crescimento</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="h-6 w-6 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Segurança e tranquilidade para moradores e visitantes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-[550px] rounded-xl overflow-hidden shadow-xl hover-scale">
                  <div className="absolute inset-0 bg-stone-200 flex flex-col items-center justify-center p-8">
                    <MapPin className="h-20 w-20 text-green-700 mb-6" />
                    <h3 className="text-3xl font-semibold mb-4">Localização Estratégica</h3>
                    <p className="text-center max-w-md text-lg">
                      Estrada principal Serra Negra-Lindoia, com fácil acesso às principais cidades turísticas da região
                      e apenas 2 horas de São Paulo capital
                    </p>
                    <Button className="mt-8 bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 h-auto hover-scale">
                      <a
                        href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20localização%20da%20Chácara%20em%20Serra%20Negra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Saiba mais sobre a localização
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Potencial */}
        <section id="potencial" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">Múltiplas Possibilidades</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Potencial de Uso e Investimento</h2>
              <p className="text-gray-600 text-xl">
                Uma propriedade versátil que oferece diversas oportunidades de uso e retorno financeiro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover-scale">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Home className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Residência de Veraneio</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Ideal para grupos de amigos ou famílias que buscam um refúgio tranquilo com amplo espaço e área de
                  lazer completa para momentos inesquecíveis.
                </p>
                <a
                  href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20possibilidades%20de%20uso%20da%20Chácara%20em%20Serra%20Negra"
                  className="text-green-700 font-medium flex items-center gap-1 hover:underline text-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saiba mais <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover-scale">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Pousada de Luxo</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Estrutura perfeita para transformação em pousada de alto padrão, com suítes espaçosas e áreas de lazer
                  já estabelecidas para receber hóspedes exigentes.
                </p>
                <a
                  href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20possibilidades%20de%20uso%20da%20Chácara%20em%20Serra%20Negra"
                  className="text-green-700 font-medium flex items-center gap-1 hover:underline text-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saiba mais <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover-scale">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Clínica ou SPA</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Ambiente tranquilo e espaçoso, ideal para clínicas de repouso ou SPA com tratamentos de bem-estar em
                  meio à natureza e clima agradável da região.
                </p>
                <a
                  href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20possibilidades%20de%20uso%20da%20Chácara%20em%20Serra%20Negra"
                  className="text-green-700 font-medium flex items-center gap-1 hover:underline text-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saiba mais <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover-scale">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Palmtree className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Centro de Eventos</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Amplo espaço para realização de eventos, casamentos e celebrações em um ambiente natural e
                  sofisticado, com capacidade para grandes grupos.
                </p>
                <a
                  href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20possibilidades%20de%20uso%20da%20Chácara%20em%20Serra%20Negra"
                  className="text-green-700 font-medium flex items-center gap-1 hover:underline text-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Saiba mais <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2 hover-scale">
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  <div className="md:flex-1">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 mb-3">
                      Retorno de Investimento
                    </Badge>
                    <h3 className="text-3xl font-semibold mb-4">Valorização Garantida</h3>
                    <p className="text-gray-700 mb-6 text-lg">
                      Investir nesta propriedade significa adquirir um ativo de alto valor em uma região turística em
                      constante crescimento. A versatilidade do imóvel permite múltiplas fontes de receita e valorização
                      contínua ao longo dos anos.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Localização em área de crescente valorização imobiliária</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">
                          Potencial para geração de renda através de diversos modelos de negócio
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">Estrutura já estabelecida, reduzindo custos de implementação</span>
                      </li>
                    </ul>
                    <Button
                      asChild
                      className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 h-auto hover-scale"
                    >
                      <a
                        href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Conversar no WhatsApp
                      </a>
                    </Button>
                  </div>
                  <div className="hidden md:block h-64 w-1 bg-green-100 rounded-full mx-4"></div>
                  <div className="md:flex-1">
                    <div className="bg-green-50 p-8 rounded-xl">
                      <h4 className="text-2xl font-semibold mb-4 text-green-800">Depoimento</h4>
                      <p className="italic text-gray-700 mb-6 text-lg">
                        "A região de Serra Negra tem apresentado um crescimento constante no setor imobiliário e
                        turístico. Propriedades como esta, com localização privilegiada e infraestrutura completa, são
                        raras no mercado e tendem a valorizar significativamente nos próximos anos."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center">
                          <span className="font-semibold text-green-800 text-lg">ES</span>
                        </div>
                        <div>
                          <p className="font-medium text-lg">Eduardo Silva</p>
                          <p className="text-gray-600">Especialista em Imóveis de Luxo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-white text-green-800 hover:bg-gray-100 mb-4">Oportunidade Limitada</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Uma Oportunidade Única de Investimento</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Não perca a chance de adquirir esta propriedade exclusiva com localização privilegiada e inúmeras
              possibilidades. Entre em contato agora mesmo para agendar uma visita.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white text-green-700 hover:bg-green-50 border-white text-lg px-8 py-6 h-auto hover-scale"
              >
                <a
                  href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  <span>(11) 99199-8980</span>
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-green-800 hover:bg-green-900 border border-green-600 text-white text-lg px-8 py-6 h-auto hover-scale"
              >
                <a
                  href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  Conversar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 text-3xl font-cormorant font-bold mb-6">
                <span className="text-green-700">Chácara</span>
                <span>Serra Negra</span>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Uma propriedade exclusiva localizada no coração do Circuito das Águas Paulista, oferecendo luxo,
                conforto e inúmeras possibilidades de uso.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-green-700">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-700">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#caracteristicas" className="text-gray-600 hover:text-green-700 text-lg">
                    Características
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-gray-600 hover:text-green-700 text-lg">
                    Galeria
                  </a>
                </li>
                <li>
                  <a href="#localizacao" className="text-gray-600 hover:text-green-700 text-lg">
                    Localização
                  </a>
                </li>
                <li>
                  <a href="#potencial" className="text-gray-600 hover:text-green-700 text-lg">
                    Potencial
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">(11) 99199-8980</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Estrada Serra Negra-Lindoia, Serra Negra - SP</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-lg">
              © {new Date().getFullYear()} Chácara Serra Negra. Todos os direitos reservados.
            </div>
            <div className="mt-6 md:mt-0">
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="text-green-700 hover:text-green-800 hover:bg-green-50"
              >
                <a
                  href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-lg">(11) 99199-8980</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5511991998980?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20Chácara%20em%20Serra%20Negra"
        target="_blank"
        className="fixed bottom-6 right-6 btn-whatsapp p-3 rounded-full shadow-lg z-50 flex items-center justify-center transition-all hover:scale-110"
        aria-label="Contato via WhatsApp"
        rel="noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
