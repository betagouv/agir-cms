export default ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "import-export-entries": {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::article.article",
          draft: {
            url: env("FRONT_URL") + "/article/previsualisation/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::quizz.quizz",
          draft: {
            url: env("FRONT_URL") + "/agir/quiz/previsualisation/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
      ],
    },
  },
});
