var package_path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
dojoConfig = {
  async: true,
  packages: [
    {
      name: "application",
      location: package_path + "/application",
      main: "Application"
    },
    {
      name: "ApplicationBase",
      location: package_path + "/ApplicationBase",
      main: "ApplicationBase"
    },
    {
      name: "config",
      location: package_path + "/config"
    },
    {
      name: "example",
      location: package_path + "/examples"
    }
  ]
};
if (location.search.match(/locale=([\w-]+)/)) {
  dojoConfig.locale = RegExp.$1;
}
