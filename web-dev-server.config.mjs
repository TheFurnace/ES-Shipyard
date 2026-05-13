const mode = process.env.MODE || 'dev';
if (!['dev', 'prod'].includes(mode)) {
    throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

export default {
    nodeResolve: {exportConditions: mode === 'dev' ? ['development'] : []},
    concurrency: 10,
    nodeResolve: true,
    watch: true,
    // in a monorepo you need to set set the root dir to resolve modules
    rootDir: './.dist',
};
  