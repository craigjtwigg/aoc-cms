
module.exports = ({ env }) => ({
  upload: {
    config: {
         providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
    },
  },
});

 

 