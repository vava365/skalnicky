import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import alpineFlowers from "@/assets/alpine-flowers.jpg";
import czechFlag from "@/assets/czech-flag.jpg";
import rockGarden from "@/assets/rock-garden.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-accent/20">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-alpine-green/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-alpine-orange/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header with Title and Flag */}
      <header className="relative border-b-4 border-alpine-orange p-6 bg-white/80 backdrop-blur-sm shadow-xl">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-alpine-green bg-clip-text text-transparent mb-3">
                www.skalničky.cz
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Stránky určené všem pěstitelům a milovníkům skalniček, cibulovin, 
                alpínek, bylinných, travinatých, stepních a bajinných rostlin a 
                zakrslých okrasných dřevin...
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-czech-blue to-czech-red rounded-full blur-md opacity-50"></div>
            <img 
              src={czechFlag} 
              alt="Czech Flag" 
              className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto p-8 relative z-10">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Orange Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-alpine-orange via-orange-400 to-amber-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-alpine-orange to-orange-400 rounded-xl p-8 text-alpine-orange-foreground shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                  <p className="italic leading-relaxed text-lg font-medium">
                    <strong className="block text-xl mb-2">Obejmi pohledem oblaka,</strong>
                    <strong className="block">vypěstuj květinu,</strong><br/>
                    <strong className="block">zasaď strom</strong><br/>
                    <strong className="block">a pohlaď kámen.</strong><br/>
                    <strong className="block">Vysoko ve skalách</strong><br/>
                    <strong className="block">ochutnej pramen.</strong><br/>
                    <strong className="block text-xl mt-2">Poznáš, že žiješ...</strong>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a href="/vystavy">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Výstavy a akce</div>
                      <div className="text-xs opacity-80">Exhibitions & Events</div>
                    </div>
                  </Button>
                </a>
                <a href="/rostliny">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Zajímavé rostliny</div>
                      <div className="text-xs opacity-80">Interesting Plants</div>
                    </div>
                  </Button>
                </a>
                <a href="/zacatecnici">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Nejen pro začátečníky</div>
                      <div className="text-xs opacity-80">Not Just for Beginners</div>
                    </div>
                  </Button>
                </a>
                <a href="/inspirace">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Skalky pro inspiraci</div>
                      <div className="text-xs opacity-80">Rock Gardens for Inspiration</div>
                    </div>
                  </Button>
                </a>
                <a href="/zajimavosti">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Může vás zajímat</div>
                      <div className="text-xs opacity-80">You Might Be Interested</div>
                    </div>
                  </Button>
                </a>
                <a href="/hory">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Ze světa hor</div>
                      <div className="text-xs opacity-80">From the World of Mountains</div>
                    </div>
                  </Button>
                </a>
                <a href="/pestit">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Adresy pěstitelů</div>
                      <div className="text-xs opacity-80">Growers' Addresses</div>
                    </div>
                  </Button>
                </a>
                <a href="/klub">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">Adresy klubů</div>
                      <div className="text-xs opacity-80">Club Addresses</div>
                    </div>
                  </Button>
                </a>
                <a href="/onas">
                  <Button variant="outline" className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-lg backdrop-blur-sm">
                    <div>
                      <div className="font-semibold text-base">O nás pro Vás</div>
                      <div className="text-xs opacity-80">About Us for You</div>
                    </div>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Center Green Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-alpine-green via-green-500 to-emerald-600 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-alpine-green to-green-500 rounded-xl p-8 text-alpine-green-foreground shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="relative overflow-hidden rounded-xl shadow-2xl mb-6 group">
                  <img 
                    src={alpineFlowers} 
                    alt="Alpine flowers in rock garden" 
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                  <p className="text-sm leading-relaxed mb-4">
                    Krokusy, nebo také šafrány, jsou především jedny z prvních jarních květů v zahradě. Tak proč o nich je zmínka právě nyní na podzim? Protože právě nyní je můžete údělat velkou jarní podívanou.
                  </p>
                  <Button variant="outline" className="bg-white/20 border-white/30 text-alpine-green-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200">
                    Jakou?
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <div className="relative overflow-hidden rounded-xl shadow-2xl mb-6 group">
                  <img 
                    src={rockGarden}
                    alt="Rock garden landscape" 
                    className="w-full h-32 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  <p className="text-sm">
                    Poznali byste odkud je tato fotografie? Z přírody nebo ze zahrady? 
                    Prozradí vám to <strong>naše galerie</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Orange Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-alpine-orange via-orange-400 to-amber-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-alpine-orange to-orange-400 rounded-xl p-8 text-alpine-orange-foreground shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  Vážení přátelé, dobrý den
                </h3>
                <p className="text-sm leading-relaxed mb-6 bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                  (či noc), je hezké, že máte zájem o skalničky a vše, co s nimi souvisí. 
                  Otevřeli jste některou webové stránky pro české i slovenské pěstitele skalniček.
                </p>
                
                <Card className="mb-6 bg-white/20 border-white/30 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-center mb-3 text-xl">Poslední aktualizace</h4>
                    <p className="text-lg font-bold text-center mb-2">19.9.2025</p>
                    <p className="text-sm leading-relaxed">
                      Jen pro zajímavost: provoz těchto stránek pro skalničkáře byl zahájen 1.3.2000
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="bg-white/20 rounded-xl p-6 border border-white/30 backdrop-blur-sm shadow-lg hover:bg-white/30 transition-all duration-200">
                  <h4 className="font-bold mb-3 text-lg">Sdělení pro zájemce o výměnu semen skalniček</h4>
                  <a href="/vystavy">
                    <Button variant="outline" className="bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200">
                      Jak na to?
                    </Button>
                  </a>
                </div>

                <div className="bg-white/20 rounded-xl p-6 border border-white/30 backdrop-blur-sm shadow-lg hover:bg-white/30 transition-all duration-200">
                  <h4 className="font-bold mb-3 text-lg">Alpinum klub Plzeň</h4>
                  <p className="text-sm mb-4 leading-relaxed">
                    vydal novou knihu pro skalničkáře. Více informací o knize
                  </p>
                  <a href="/rok-v-alpinu">
                    <Button variant="outline" className="bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200">
                      ROK V ALPÍNU
                    </Button>
                  </a>
                </div>

                <div className="bg-white/20 rounded-xl p-6 border border-white/30 backdrop-blur-sm shadow-lg hover:bg-white/30 transition-all duration-200">
                  <h4 className="font-bold mb-3 text-lg">LEXIKON SKALNIČEK</h4>
                  <p className="text-sm mb-4 leading-relaxed">
                    Představujeme vám rozsáhlý lexikon v neobvyklém provedení.
                  </p>
                  <a href="/lexikon">
                    <Button variant="outline" className="bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 hover:scale-105 transition-all duration-200">
                      Více o něm zde
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;