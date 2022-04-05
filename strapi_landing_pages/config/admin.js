module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '547801e530686d05f6c67808ad26382f'),
  },
});
