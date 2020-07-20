module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa:{
    name: "ToDos App",
    themeColor: "#af4c62",
    iconPath:{
      favicon32: 'img/app_icons/icon-32x32.png',
      favicon16: 'img/app_icons/icon-16x16.png'
    },
    manifestOptions:{
      background_color: "#eeeeee",
      icons:[
        {
          src:"img/app_icons/icon-192x192.png",
          sizes:"192x192",
          type:"image/png"
        },

        {
          src:"img/app_icons/icon-512x512.png",
          sizes:"512x512",
          type:"image/png"
        },
      
        {
          src:"img/app_icons/icon-192x192.png",
          sizes:"192x192",
          type:"image/png",
          purpose:"maskable"
        },
      
        {
          src:"img/app_icons/icon-512x512.png",
          sizes:"512x512",
          type:"image/png",
          purpose:"maskable"
        }],
    }
  }
};