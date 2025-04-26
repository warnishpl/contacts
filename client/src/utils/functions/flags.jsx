const flags = {};

const modules = import.meta.glob('../../assets/flags/*.png', { eager: true });

for (const path in modules) {
  const fileName = path.split('/').pop().replace('.png', '');
  flags[fileName] = modules[path].default;
}

export default flags;