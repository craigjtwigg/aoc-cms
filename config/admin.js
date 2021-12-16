module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '01df0c5f33dff6d306c530fc05ff06fa'),
  },
});
