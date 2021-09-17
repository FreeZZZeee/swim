export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Бассейн ПНИПУ',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'},
      {name: "msapplication-TileColor", content: "#ffffff"},
      {name: "msapplication-TileImage", content: "/favicon/ms-icon-144x144.png"},
      {name: "theme-color", content: "#ffffff"}
    ],
    link: [
      {rel: "apple-touch-icon", sizes: "57x57", href: "/favicon/apple-icon-57x57.png"},
      {rel: "apple-touch-icon", sizes: "60x60", href: "/favicon/apple-icon-60x60.png"},
      {rel: "apple-touch-icon", sizes: "72x72", href: "/favicon/apple-icon-72x72.png"},
      {rel: "apple-touch-icon", sizes: "76x76", href: "/favicon/apple-icon-76x76.png"},
      {rel: "apple-touch-icon", sizes: "114x114", href: "/favicon/apple-icon-114x114.png"},
      {rel: "apple-touch-icon", sizes: "120x120", href: "/favicon/apple-icon-120x120.png"},
      {rel: "apple-touch-icon", sizes: "144x144", href: "/favicon/apple-icon-144x144.png"},
      {rel: "apple-touch-icon", sizes: "152x152", href: "/favicon/apple-icon-152x152.png"},
      {rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-icon-180x180.png"},
      {rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/android-icon-192x192.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon/favicon-96x96.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png"},
      {rel: "manifest", href: "/favicon/manifest.json"},
      {rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.css', media: 'all'},
      {rel: 'stylesheet', type: "text/css", href: '/css/style.css', media: 'all'},
      {rel: 'stylesheet', href: '/css/font-awesome.css'},
      {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Pacifico', type: 'text/css'},
      {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'},
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Roboto+Condensed:400,700italic,700,400italic,300italic,300',
        type: 'text/css'
      },
      {rel: 'stylesheet', href: '/css/lightbox.css'},
    ],
    script: [
      // {
      //   innerHTML: `addEventListener(\`load\`, function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1);}`,
      //   type: 'application/x-javascript',
      //   charset: 'utf-8',
      // },
      {src: '/js/jquery-1.11.1.min.js'},
      {src: '/js/bootstrap.js'},
      // {src: '/js/SmoothScroll.min.js'},
      // {src: '/js/responsiveslides.min.js', body: true},
      {src: '/js/lightbox-plus-jquery.min.js', body: true},
      {src: '/js/move-top.js', type: 'text/javascript', body: true},
      {src: '/js/easing.js', type: 'text/javascript', body: true},
  //     {
  //       innerHTML: `jQuery(document).ready(function($) {
	// 	$(\`.scroll\`).click(function(event){
	// 		event.preventDefault();
	// 		$(\`html,body\`).animate({scrollTop:$(this.hash).offset().top},1000);
	// 	});
	// });`,
  //       type: 'text/javascript',
  //       charset: 'utf-8',
  //       body: true
  //     },
      {
        innerHTML: `$(document).ready(function() {
\t\t\t/*
\t\t\t\tvar defaults = {
\t\t\t\tcontainerID: 'toTop', // fading element id
\t\t\t\tcontainerHoverID: 'toTopHover', // fading element hover id
\t\t\t\tscrollSpeed: 1200,
\t\t\t\teasingType: 'linear'
\t\t\t\t};
\t\t\t*/
\t\t\t\t\t\t\t\t
\t\t\t$().UItoTop({ easingType: \`easeOutQuart\` });
\t\t\t\t\t\t\t\t
\t\t\t});`,
        type: 'text/javascript',
        charset: 'utf-8',
        body: true
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // {modules: true}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-scroll.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: true,
    extractCSS: true,
    loaders: {
      css: {
        modules: true
      },
    },
  }
}
