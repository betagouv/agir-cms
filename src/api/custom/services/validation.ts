/**
 * validation service
 */

export default () => ({
  checkRequiredRelationsUpdate: async (event) => {
    const requiredRelationAttributes = getRequiredRelationAttributes(event);
    const relationsToPopultate = requiredRelationAttributes.reduce(
      (obj, key) => {
        obj[key] = true;
        return obj;
      },
      {}
    );

    const entry = await strapi.entityService.findOne(
      "api::article.article",
      event.params.data.id,
      {
        populate: relationsToPopultate,
      }
    );
    const missingRelations = [];

    for (let relation of requiredRelationAttributes) {
      const missingRelation =
        event.params.data[relation]?.connect.length === 0 &&
        !entry[relation]?.id &&
        entry[relation].length === 0;

      const deleteLastRelation =
        event.params.data[relation]?.disconnect.length > 0 &&
        event.params.data[relation]?.connect.length === 0 &&
        (entry[relation].id || entry[relation].length === 1);

      if (missingRelation || deleteLastRelation) {
        missingRelations.push(relation);
      }
    }

    return missingRelations;
  },
  checkRequiredRelationsCreate: async (event) => {
    const requiredRelationAttributes = getRequiredRelationAttributes(event);
    const missingRelations = [];
    for (let relation of requiredRelationAttributes) {
      if (event.params.data[relation]?.connect.length === 0) {
        missingRelations.push(relation);
      }
    }
    return missingRelations;
  },
});

function getRequiredRelationAttributes(event) {
  const data = event.model.attributes;
  return Object.keys(data).reduce((result, key) => {
    if (data[key].type === "relation" && data[key].required === true) {
      result.push(key);
    }
    return result;
  }, []);
}
