import { defineUserConfig ,defaultTheme} from 'vuepress'

export default defineUserConfig({
  lang: 'es-ES',
  title: 'Mi Rincon - Documentacion',
  description: 'Repositorio de Documentacion',
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    colorMode: 'light',
    lastUpdated: false,

    sidebar: [
      {
        text: 'Ingreso al Sistema',
        link: "/ingreso/",
      },
      {
        text: "Educadores",
        link: "/main/",
        collapsible: true,
        children: [
            "/main/trabajos",
            "/main/miformacion",
            "/main/inscripciones",
        ],
      },
      /*
      {
        title: "Inscripciones",
        path: "/doc/main/inscripciones/",
        collapsable: false,
      },*/ {
        text: "Eventos",
        link: "/eventos/",
        collapsible: true,
        children: [
          "/eventos/creacion",
          "/eventos/administrar",
          "/eventos/autorizar",
        ],
      },
    ]

  }),


  
})