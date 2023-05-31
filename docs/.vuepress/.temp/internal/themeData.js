export const themeData = JSON.parse("{\"logo\":\"https://vuejs.org/images/logo.png\",\"colorMode\":\"light\",\"lastUpdated\":false,\"sidebar\":[{\"text\":\"Ingreso al Sistema\",\"link\":\"/ingreso/\"},{\"text\":\"Educadores\",\"link\":\"/main/\",\"collapsible\":true,\"children\":[\"/main/trabajos\",\"/main/miformacion\",\"/main/inscripciones\"]},{\"text\":\"Eventos\",\"link\":\"/eventos/\",\"collapsible\":true,\"children\":[\"/eventos/creacion\",\"/eventos/administrar\",\"/eventos/autorizar\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
