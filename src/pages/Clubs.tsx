import { Link } from "react-router-dom";

const Clubs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-mist via-stone-light to-alpine-green/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="text-alpine-orange hover:text-alpine-green transition-colors mb-6 inline-block">
          ← Zpět na hlavní stránku
        </Link>
        
        <h1 className="text-4xl font-bold text-mountain-green mb-6">Adresy klubů</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-mountain-green mb-4">Adresář klubů</h2>
            <p className="text-stone-dark leading-relaxed mb-6">
              V České republice i v zahraničí existuje celá řada klubů specializovaných na pěstování 
              horských, lučních, stepních a dalších rostlin. Tyto kluby sdružují nejen zahrádkáře amatéry, 
              ale také specialisty, zahradníky i pracovníky botanických zahrad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Česká republika</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-alpine-green pl-4">
                <h3 className="font-bold text-mountain-dark">PLZEŇ - Klub skalničkářů</h3>
                <p className="text-stone-dark">Předseda Karel Lumerding, tel: 737 184 462<br/>
                E-mail: lumeka@seznam.cz<br/>
                Web: www.skalnicky-plzen.cz</p>
              </div>
              
              <div className="border-l-4 border-alpine-orange pl-4">
                <h3 className="font-bold text-mountain-dark">PRAHA - Klub skalničkářů Praha SOLDANELLA</h3>
                <p className="text-stone-dark">Maříkova 5, 162 00 Praha 6<br/>
                Předseda: Ing. Vojtěch Holubec CSc.<br/>
                Web: www.skalnickari.cz</p>
              </div>

              <div className="border-l-4 border-alpine-green pl-4">
                <h3 className="font-bold text-mountain-dark">NEJDEK - Klub skalničkářů ERICA z.s.</h3>
                <p className="text-stone-dark">Předsedkyně: MUDr. Věra Procházková<br/>
                Web: www.erica-nejdek-skalnickari.cz</p>
              </div>

              <div className="border-l-4 border-alpine-orange pl-4">
                <h3 className="font-bold text-mountain-dark">OLOMOUC - Klub přátel skalek a bonsají PROTĚŽ</h3>
                <p className="text-stone-dark">Předseda Ing. Bohuslav Víša<br/>
                Mobil: 731 405 257</p>
              </div>

              <div className="border-l-4 border-alpine-green pl-4">
                <h3 className="font-bold text-mountain-dark">BRUNTÁL - Klub skalničkářů Campanula</h3>
                <p className="text-stone-dark">Předsedkyně Adéla Bendová<br/>
                Web: campanulabruntal.webnode.cz</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Slovenská republika</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-czech-blue pl-4">
                <h3 className="font-bold text-mountain-dark">BRATISLAVA - Klub skalničkárov</h3>
                <p className="text-stone-dark">Ing. Beáta Botlóová, Borekova 5, 821 06 Bratislava</p>
              </div>
              
              <div className="border-l-4 border-czech-blue pl-4">
                <h3 className="font-bold text-mountain-dark">TRENČÍN - Klub skalničkárov</h3>
                <p className="text-stone-dark">Hanzlíkovská ul. 83, 911 05 Trenčín</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-mountain-dark mb-4">Zahraniční kluby</h2>
            <div className="space-y-3">
              <p className="text-stone-dark"><strong>ANGLIE:</strong> The Alpine Garden Society (AGS) - www.alpinegardensociety.net</p>
              <p className="text-stone-dark"><strong>SKOTSKO:</strong> The Scottish Rock Garden Club (SRGC) - www.srgc.org.uk</p>
              <p className="text-stone-dark"><strong>USA:</strong> North American Rock Garden Society (NARGS) - www.nargs.org</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
