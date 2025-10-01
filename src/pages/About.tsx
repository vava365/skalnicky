import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">O nás pro Vás</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-mountain-green mb-4">O nás pro Vás</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Vážení přátelé, těší mne, že máte zájem o skalničky a vše co s nimi souvisí. 
              V roce 2000 byl založen jako první v České republice web určený pro skalničkáře, 
              pro něž v té době nebylo na internetu vůbec nic mimo zahraničních webů.
            </p>
            <p className="text-stone-dark leading-relaxed mb-4">
              Mojí snahou je, aby obsahem těchto stránek byly nejen skalničky, ale veškeré zajímavosti 
              a informace k tomu návazné. Stránky zpracovávám jako <strong>nekončící internetový časopis</strong>, 
              kdykoliv a komukoliv přístupný.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Autor webu</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Jmenuji se <strong>Martin Pilný</strong>. Třicet let jsem byl odborným píšícím redaktorem 
              v oblasti vědy, přírody a techniky v redakci ABC, později jsem byl šéfredaktorem v časopise 
              Chatař a chalupář.
            </p>
            <p className="text-stone-dark leading-relaxed mb-4">
              Mým velkým koníčkem je fotografování horské květeny a přes 40 let se zabývám pěstováním 
              skalniček z celého světa. Spolu se ženou jsme vytvořili spárovou skalku a suťoviště 
              se stovkami druhů skalniček, hajní partii a vřesoviště.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Právní ochrana stránek</h2>
            <p className="text-stone-dark leading-relaxed mb-4">
              Vše, co je uvedeno a zveřejněno na těchto webových stránkách, je chráněno autorským zákonem 
              č. 121/2000 Sb, ve znění pozdějších předpisů. Obsah je určen jen k osobnímu využití 
              tj. ke studiu, informaci nebo k náhledu.
            </p>
            <p className="text-stone-dark leading-relaxed">
              V případě citace v jiném díle, jste povinni uvést zdroj a autora informací.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Kontakt</h2>
            <div className="bg-mountain-mist/30 p-4 rounded-lg">
              <p className="text-stone-dark"><strong>E-mail:</strong> skalnicky@centrum.cz</p>
              <p className="text-stone-dark"><strong>Telefon:</strong> +420 603 314 292</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
