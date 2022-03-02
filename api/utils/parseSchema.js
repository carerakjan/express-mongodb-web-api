module.exports = (schema) => Object.values(schema.paths).map(
    ({ path, instance, isRequired, defaultValue }) => path.startsWith('_')
        ? null
        : ({ path, instance, isRequired, ...(defaultValue && { defaultValue }) })
).filter(Boolean);
