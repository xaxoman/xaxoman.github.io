/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      // I dieci case study diventano guide. Le voci specifiche vanno prima:
      // Next applica il primo redirect che corrisponde.
      { source: "/case-studies/creazione-siti-web-crema-pmi-manifatturiera", destination: "/blog/sito-web-aziende-manifatturiere", statusCode: 301 },
      { source: "/case-studies/siti-internet-professionisti-crema-studio-legale-commercialista", destination: "/blog/sito-web-studio-legale-commercialista", statusCode: 301 },
      { source: "/case-studies/creazione-ecommerce-crema-negozio-retail-produttore", destination: "/blog/aprire-ecommerce-negozio-fisico", statusCode: 301 },
      { source: "/case-studies/sviluppo-gestionali-su-misura-crema-officina-logistica", destination: "/blog/gestionale-su-misura-vs-excel", statusCode: 301 },
      { source: "/case-studies/creazione-web-app-aziendali-crema-portale-clienti-b2b", destination: "/blog/portale-ordini-b2b", statusCode: 301 },
      { source: "/case-studies/rifacimento-sito-web-aziendale-crema-modernizzazione-performance", destination: "/blog/rifare-sito-senza-perdere-posizionamento", statusCode: 301 },
      { source: "/case-studies/consulente-ecommerce-strategia-vendita-online-crema", destination: "/blog/aumentare-conversioni-ecommerce", statusCode: 301 },
      { source: "/case-studies/posizionamento-seo-e-visibilita-google-crema-attivita-locali", destination: "/blog/seo-locale-google-maps-crema", statusCode: 301 },
      { source: "/case-studies/web-designer-freelance-vs-agenzia-crema", destination: "/blog/freelance-o-agenzia-web", statusCode: 301 },
      { source: "/case-studies/preventivo-costo-realizzazione-sito-internet-crema", destination: "/blog/quanto-costa-un-sito-web", statusCode: 301 },
      // Qualsiasi altro vecchio indirizzo finisce sull'indice del blog.
      { source: "/case-studies/:slug", destination: "/blog", statusCode: 301 },
      { source: "/case-studies", destination: "/blog", statusCode: 301 },
    ]
  },
}

export default nextConfig
