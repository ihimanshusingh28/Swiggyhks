module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime:"automatic"}]
],
};
// We added this preset bcoz this help jsx to html 