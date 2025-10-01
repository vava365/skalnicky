import { Link } from "react-router-dom";

const Lexicon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Lexikon skalniček</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-mountain-green mb-4">Nová neobvyklá "kniha"</h2>
            <h3 className="text-2xl font-semibold text-mountain-dark mb-6">Lexikon skalniček</h3>
            
            <p className="text-stone-dark leading-relaxed mb-4">
              Chceme vám představit novou neobvyklou publikaci. Nejedná se o tištěnou knihu, ale elektronickou.
              Stačí ji ze zakoupeného CD disku načíst, nebo lépe, nainstalovat přímo do počítače.
            </p>

            <p className="text-stone-dark leading-relaxed mb-4">
              LEXIKON SKALNIČEK je velmi rozsáhlá databáze s údaji o všech dostupně známých, 
              ale také velmi málo známých druzích horských, stepních či hajních rostlin a cibulovin, 
              vhodných do vašich skalek.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Rozsah lexikonu</h2>
            <div className="bg-mountain-mist/30 p-6 rounded-lg">
              <p className="text-stone-dark font-bold mb-4">LEXIKON SKALNIČEK má 645 stran a obsahuje údaje o:</p>
              <ul className="space-y-2 text-stone-dark">
                <li className="flex items-center"><span className="text-alpine-green mr-2">✓</span> 1 406 rodech</li>
                <li className="flex items-center"><span className="text-alpine-green mr-2">✓</span> 13 128 druzích</li>
                <li className="flex items-center"><span className="text-alpine-green mr-2">✓</span> 738 subspéciích</li>
                <li className="flex items-center"><span className="text-alpine-green mr-2">✓</span> 600 varietách</li>
                <li className="flex items-center"><span className="text-alpine-green mr-2">✓</span> 3 626 synonymech rostlin</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Co lexikon obsahuje</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Při tak velkém množství druhů jsou každé rostlině věnovány sice jen dva řádky, 
              přesto vám dají mnoho základních informací ve formě zkratek.
            </p>
            <p className="text-stone-dark leading-relaxed mb-2">Každý uvedený druh obsahuje:</p>
            <ul className="space-y-2 text-stone-dark ml-4">
              <li>• Přesné botanické pojmenování</li>
              <li>• Zařazení rostliny podle jejích vlastností</li>
              <li>• Charakter růstu a vzrůstnosti</li>
              <li>• Výšku rostliny</li>
              <li>• Barvu květu a dobu kvetení</li>
              <li>• Barvu a charakteristiku listu</li>
              <li>• Areál výskytu a nadmořskou výšku</li>
              <li>• Doporučený substrát</li>
              <li>• Doporučenou expozici</li>
              <li>• Údaj o zvláštní péči</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Kniha také v tištěné podobě</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Lexikon je zpracován ve formátu .pdf tak, aby si jej zájemci podle svých možností vytiskli sami 
              na papír ve formátu A4 a nechali svázat.
            </p>
            <p className="text-stone-dark leading-relaxed italic">
              Autoři souhlasí s jednorázovým vytištěním Lexikonu, ovšem jen pro osobní potřebu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Jak knihu objednat</h2>
            <div className="bg-alpine-green/10 p-6 rounded-lg border-l-4 border-alpine-green space-y-3">
              <p className="text-stone-dark leading-relaxed">
                <strong>Cena CD:</strong> 150,- Kč<br/>
                <strong>S poštovným doporučeně:</strong> 200,- Kč celkem
              </p>
              <p className="text-stone-dark leading-relaxed">
                <strong>Objednávky:</strong> m.pilny@centrum.cz
              </p>
              <p className="text-stone-dark text-sm">
                Při objednávce více kusů najednou (do 5 ks) je poštovné stejné jako u 1 kusu. 
                Při objednávce nad 10 kusů je poštovné zdarma.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Lexicon;
