module.exports = (schema) => Object.values(schema.paths).map(
    ({ path, instance, isRequired }) => path.startsWith('_')
        ? null
        : ({ path, instance, isRequired })
).filter(Boolean);
