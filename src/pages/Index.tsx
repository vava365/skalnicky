import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import alpineFlowers from "@/assets/alpine-flowers.jpg";
import czechFlag from "@/assets/czech-flag.jpg";
import rockGarden from "@/assets/rock-garden.jpg";

const Index = () => {
  const navigationItems = [
    { title: "Výstavy a akce", subtitle: "Exhibitions & Events" },
    { title: "Zajímavé rostliny", subtitle: "Interesting Plants" },
    { title: "Nejen pro začátečníky", subtitle: "Not Just for Beginners" },
    { title: "Skalky pro inspiraci", subtitle: "Rock Gardens for Inspiration" },
    { title: "Může vás zajímat", subtitle: "You Might Be Interested" },
    { title: "Ze světa hor", subtitle: "From the World of Mountains" },
    { title: "Adresy pěstitelů", subtitle: "Growers' Addresses" },
    { title: "Adresy klubů", subtitle: "Club Addresses" },
    { title: "O nás pro Vás", subtitle: "About Us for You" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header with Title and Flag */}
      <header className="border-b-4 border-alpine-orange p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary">www.skalničky.cz</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Stránky určené všem pěstitelům a milovníkům skalniček, cibulovin, 
                alpínek, bylinných, travinatých, stepních a bajinných rostlin a 
                zakrslých okrasných dřevin...
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={czechFlag} 
              alt="Czech Flag" 
              className="w-20 h-20 rounded-full object-cover border-4 border-czech-blue shadow-lg"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Orange Section */}
          <div className="bg-alpine-orange rounded-lg p-6 text-alpine-orange-foreground">
            <div className="text-center mb-6">
              <p className="italic leading-relaxed text-lg">
                <strong>Obejmi pohledem oblaka,</strong><br/>
                <strong>vypěstuj květinu,</strong><br/>
                <strong>zasaď strom</strong><br/>
                <strong>a pohlaď kámen.</strong><br/>
                <strong>Vysoko ve skalách</strong><br/>
                <strong>ochutnej pramen.</strong><br/>
                <strong>Poznáš, že žiješ...</strong>
              </p>
            </div>

            <div className="space-y-3">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30 transition-all duration-200"
                >
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-xs opacity-75">{item.subtitle}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Center Green Section */}
          <div className="bg-alpine-green rounded-lg p-6 text-alpine-green-foreground">
            <div className="text-center mb-6">
              <img 
                src={alpineFlowers} 
                alt="Alpine flowers in rock garden" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm leading-relaxed">
                Krokusy, nebo také šafrány, jsou především jedny z prvních jarních květů v zahradě. Tak proč o nich je zmínka právě nyní na podzim? Protože právě nyní je můžete údělat velkou jarní podívanou.
                <br/><br/>
                <Button variant="outline" className="mt-2 bg-white/20 border-white/30 text-alpine-green-foreground hover:bg-white/30">
                  Jakou?
                </Button>
              </p>
            </div>

            <div className="text-center">
              <img 
                src={rockGarden}
                alt="Rock garden landscape" 
                className="w-full rounded-lg shadow-lg mb-4 h-32 object-cover"
              />
              <p className="text-sm">
                Poznali byste odkud je tato fotografie? Z přírody nebo ze zahrady? 
                Prozradí vám to <strong>naše galerie</strong>.
              </p>
            </div>
          </div>

          {/* Right Orange Section */}
          <div className="bg-alpine-orange rounded-lg p-6 text-alpine-orange-foreground">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold mb-3">Vážení přátelé, dobrý den</h3>
              <p className="text-sm leading-relaxed mb-4">
                (či noc), je hezké, že máte zájem o skalničky a vše, co s nimi souvisí. 
                Otevřeli jste některou webové stránky pro české i slovenské pěstitele skalniček.
              </p>
              
              <Card className="mb-4 bg-white/20 border-white/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-center mb-2">Poslední aktualizace</h4>
                  <p className="text-xs text-center">19.9.2025</p>
                  <p className="text-sm mt-2">
                    Jen pro zajímavost: provoz těchto stránek pro skalničkáře byl zahájen 1.3.2000
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <h4 className="font-semibold mb-2">Sdělení pro zájemce o výměnu semen skalniček</h4>
                <Button variant="outline" className="bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30">
                  Jak na to?
                </Button>
              </div>

              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <h4 className="font-semibold mb-2">Alpinum klub Plzeň</h4>
                <p className="text-sm mb-3">
                  vydal novou knihu pro skalničkáře. Více informací o knize
                </p>
                <Button variant="outline" className="bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30">
                  ROK V ALPÍNU
                </Button>
              </div>

              <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                <h4 className="font-semibold mb-2">LEXIKON SKALNIČEK</h4>
                <p className="text-sm mb-3">
                  Představujeme vám rozsáhlý lexikon v neobvyklém provedení.
                </p>
                <Button variant="outline" className="bg-white/20 border-white/30 text-alpine-orange-foreground hover:bg-white/30">
                  Více o něm zde
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
