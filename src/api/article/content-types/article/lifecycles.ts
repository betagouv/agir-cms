import { errors } from "@strapi/utils";
const { ApplicationError } = errors;

export default {
  async beforeCreate(event) {
    const missingRelations = await strapi
      .service("api::custom.validation")
      .checkRequiredRelationsCreate(event);
    if (missingRelations.length > 0)
      throw new ApplicationError(
        "Il manque une ou des relation(s) : " + missingRelations.join(", ")
      );
  },
  async beforeUpdate(event) {
    if (!event.params.data.id) return;

    const missingRelations = await strapi
      .service("api::custom.validation")
      .checkRequiredRelationsUpdate(event);

    if (missingRelations.length > 0)
      throw new ApplicationError(
        "Il manque une ou des relation(s) : " + missingRelations.join(", ")
      );
  },
};
