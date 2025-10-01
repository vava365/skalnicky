import { Link } from "react-router-dom";

const YearInAlpinum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Rok v alpinu</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-mountain-green mb-4">Zajímavý počin plzeňských skalničkářů</h2>
            <h3 className="text-2xl font-semibold text-mountain-dark mb-6">ROK V ALPÍNU</h3>
            
            <p className="text-stone-dark leading-relaxed mb-4">
              Když se mi dostala do ruky knížka <strong>ROK V ALPÍNU</strong>, přemýšlel jsem, 
              kam ji mezi skalničkářskou literaturu zařadit. Počte si v ní totiž nejen začínající, 
              ale i hodně pokročilý skalničkář.
            </p>

            <p className="text-stone-dark leading-relaxed mb-4">
              <strong>Knihu vydal Alpinum klub Plzeň.</strong> Klub, který bez ohledu na současnou situaci 
              ve společnosti a ve světě, má stále dost aktivních členů, kteří se zapojují do činnosti, 
              zvláště při pořádání výstav skalniček v Plzni.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">O knize</h2>
            <div className="bg-mountain-mist/30 p-6 rounded-lg space-y-4">
              <p className="text-stone-dark leading-relaxed">
                Kniha má <strong>250 stran</strong>, je celobarevná, plná krásných fotografií rostlin i skalek. 
                Skvělá pro inspiraci každého skalničkáře.
              </p>
              <p className="text-stone-dark leading-relaxed">
                Obsah se drží názvu - je rozdělena podle měsíců. Co jak roste v lednu, co je zajímavé v únoru, 
                jaké krásky potěší v březnu atd. Jelikož se jedná o první díl této publikace, 
                obsah končí v červnu a zahrnuje tím nejkrásnější období ve skalce.
              </p>
              <p className="text-stone-dark leading-relaxed">
                Alpinum klub Plzeň již připravuje druhý díl, zahrnující období od července do prosince.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Obsah knihy</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Skupina odborníků, nejen z klubu, sestavila tuto knihu formou zajímavých článků a informací 
              o různých rostlinách, o stavbě skalek. Nechybí pěstitelské rady a mnoho dalších témat.
            </p>
            <p className="text-stone-dark leading-relaxed mb-4">
              Je na konci Rejstřík rostlin, o kterých je v kapitolách psáno. Podobně je přehledný obsah v úvodu knihy. 
              Snadno tak lze najít téma, které nás zajímá.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Jak knihu získat</h2>
            <div className="bg-alpine-green/10 p-6 rounded-lg border-l-4 border-alpine-green">
              <p className="text-stone-dark leading-relaxed mb-2">
                Kniha původně určená jen členům klubu, byla vydána ve větším nákladu a může si ji objednat 
                kterýkoliv zájemce v republice.
              </p>
              <p className="text-stone-dark leading-relaxed mb-2">
                <strong>Cena:</strong> 250,- Kč + poštovné a balné
              </p>
              <p className="text-stone-dark leading-relaxed">
                <strong>Objednávky:</strong> horoda@seznam.cz
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default YearInAlpinum;
