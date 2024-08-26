import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-10 text-white">
      <div className="presentation h-[25rem] flex justify-center items-center">
        <h1 className="text-5xl font-extrabold  text-center">Présentation</h1>
      </div>

      <div className="flex flex-col mx-3 items-center gap-[1rem] w-auto md:w-[60%] mx-0">

        {/* <h1 className="text-5xl">Qui sommes nous ⁉️⁉️</h1> */}

        <p className="text-[20px] mt-10 leading-8 text-center">Le Groupe Envol Technology représente le département technologie du Groupe Envol Afrique : Cinq structures
          régionales en Afrique de l’Ouest constituées par GMI (Groupe Malien d’Informatique basée au Mali),
          Envol technology CI (basé en cote d'ivoire), ENVOL Tunisie un Centre R&D (Recherche et Développement),
          Verbeba Mali SA , et AFT Mali ( atlantic Future Technology Mali ).
        </p>

        <p className="text-[17px] leading-6 text-center">Envol Technology est un acteur spécialisé dans les domaines des télécommunications, de l’Informatique,
          sécurité des systèmes, conception/construction de plateformes innovantes ainsi la distribution et la
          revente de produits TIC (VAR: Value Added Reseller).
        </p>

      </div>

      <img className="object-contain" src="http://www.envoltechnology.com/images/2018/04/10/envol_diagrammes3.png" alt="" />

    </main>
  );
}
