import { Link } from "react-router-dom";

const Exhibitions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Výstavy a akce</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-mountain-green mb-2">Výstavy a akce</h2>
            <h3 className="text-xl text-mountain-dark mb-4">v České a Slovenské republice v roce 2025</h3>
            <p className="text-stone-dark leading-relaxed mb-4">
              Většina výstav v roce 2025 úspěšně proběhla. <strong>Ještě jste zváni Klubem skalničkářů Praha na podzimní výstavu v Praze.</strong>
              Termíny výstav v roce 2026 zde budou tradičně zveřejňovány postupně, podle sdělení od vystavovatelů.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Tradiční akce výměny semen 2025 - 2026</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Informace pro všechny minulé i nové dárce semen do výměny pro rok 2025 - 2026. 
              Noví dárci jsou vítáni, budou mít obdobně přednostní výběr jako ti každoroční.
            </p>
            <p className="text-stone-dark leading-relaxed mb-4">
              Jako každý rok připravujeme tradiční výměnu semen skalniček. Určena je pro všechny skalničkáře v ČR, 
              bez ohledu na to, zda jsou členy skalničkářských klubů.
            </p>
            <div className="bg-mountain-mist/30 p-4 rounded-lg space-y-2">
              <p className="text-stone-dark"><strong>1.</strong> Semena rostlin (dobře vyčistěná - suchá) zasílejte jen v papírových sáčcích označených pouze celým latinským názvem, tj. rod + druh.</p>
              <p className="text-stone-dark"><strong>2.</strong> Z dodaných semen utvořte seznam. Ideální je poslat jej elektronicky, třeba jako příloha k e-mailu.</p>
              <p className="text-stone-dark"><strong>3.</strong> Semena rostlin zasílejte prosím od konce září do začátku listopadu. Po domluvě i jinak.</p>
            </div>
            <p className="text-stone-dark leading-relaxed mt-4">
              <strong>Adresa pro zasílání:</strong><br/>
              Manželé Pospíšilovi<br/>
              Palackého nám. číslo 14<br/>
              665 01 Rosice u Brna
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">PRAHA - 8.9. - 19.9.2025</h2>
            <p className="text-stone-dark leading-relaxed">
              <strong>Tradiční podzimní výstava skalniček</strong> spojená s prodejem rostlin, 
              ve výstavním areálu vedle Faustova domu u kostela sv. Jana Nepomuckého na Karlově náměstí - Moráni v Praze.
            </p>
            <p className="text-stone-dark leading-relaxed mt-2">
              <strong>Spojení:</strong> metro B - stanice Karlovo náměstí, nebo tramvaje č.: 2, 3, 7, 10, 16, 18, 24 - stanice Karlovo náměstí - Moráň.
            </p>
            <p className="text-stone-dark leading-relaxed mt-2">
              Otevřeno denně od 9 do 18 hodin. Výstavu pořádá Klub skalničkářů Praha.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
