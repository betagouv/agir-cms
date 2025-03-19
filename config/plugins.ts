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
            url: env("FRONT_DEV_URL") + "/articles/previsualisation/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::kyc.kyc",
          draft: {
            url: env("BACK_DEV_URL") + "/kyc_preview/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::mission.mission",
          draft: {
            url: env("BACK_DEV_URL") + "/mission_preview/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::univers.univers",
          draft: {
            url: env("BACK_DEV_URL") + "/univers_preview/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::defi.defi",
          draft: {
            url: env("BACK_DEV_URL") + "/defi_preview/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::aide.aide",
          draft: {
            url: env("FRONT_DEV_URL") + "/aides/previsualisation/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::quizz.quizz",
          draft: {
            url: env("FRONT_DEV_URL") + "/agir/quiz/previsualisation/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::action-classique.action-classique",
          draft: {
            url:
              env("FRONT_DEV_URL") + "/actions/previsualisation/classique/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::action-simulateur.action-simulateur",
          draft: {
            url:
              env("FRONT_DEV_URL") +
              "/actions/previsualisation/simulateur/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::action-bilan.action-bilan",
          draft: {
            url: env("FRONT_DEV_URL") + "/actions/previsualisation/bilan/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
        {
          uid: "api::action-quizz.action-quizz",
          draft: {
            url: env("FRONT_DEV_URL") + "/actions/previsualisation/quizz/{id}",
            openTarget: "_blank",
            alwaysVisible: true,
          },
        },
      ],
    },
  },
});
