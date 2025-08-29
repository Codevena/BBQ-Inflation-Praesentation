const fs = require('fs');
const path = require('path');

// Emoji to Lucide icon mapping
const emojiMap = {
  '📊': 'BarChart3',
  '🔍': 'Search',
  '📈': 'TrendingUp',
  '📉': 'TrendingDown',
  '💰': 'DollarSign',
  '🏠': 'Home',
  '💳': 'CreditCard',
  '🎯': 'Target',
  '🛡️': 'Shield',
  '💡': 'Lightbulb',
  '🌍': 'Globe',
  '🇩🇪': 'Flag',
  '🇺🇸': 'Flag',
  '🇪🇺': 'Flag',
  '🇬🇧': 'Flag',
  '🇯🇵': 'Flag',
  '🇨🇳': 'Flag',
  '🇹🇷': 'Flag',
  '🇦🇷': 'Flag',
  '⚡': 'Zap',
  '🏭': 'Factory',
  '🛢️': 'Fuel',
  '🌾': 'Wheat',
  '🚗': 'Car',
  '🏘️': 'Building',
  '🔥': 'Flame',
  '❄️': 'Snowflake',
  '🌡️': 'Thermometer',
  '📱': 'Smartphone',
  '💻': 'Laptop',
  '🎮': 'Gamepad2',
  '🎵': 'Music',
  '🎬': 'Film',
  '📚': 'BookOpen',
  '🎓': 'GraduationCap',
  '🏥': 'Hospital',
  '💊': 'Pill',
  '🍔': 'UtensilsCrossed',
  '🍕': 'Pizza',
  '☕': 'Coffee',
  '🍺': 'Beer',
  '✈️': 'Plane',
  '🚂': 'Train',
  '🚌': 'Bus',
  '🚕': 'Car',
  '⛽': 'Fuel',
  '🏪': 'Store',
  '🛍️': 'ShoppingBag',
  '💸': 'Banknote',
  '📋': 'ClipboardList',
  '🛒': 'ShoppingCart',
  '🔗': 'Link',
  '🎪': 'Tent',
  '🎨': 'Palette',
  '🎭': 'Drama',
  '🎲': 'Dice1',
  '🃏': 'Spade',
  '🎰': 'DollarSign',
  '🎳': 'Circle'
};

// Import statements to add
const imports = [
  'BarChart3', 'Search', 'TrendingUp', 'TrendingDown', 'DollarSign', 'Home', 
  'CreditCard', 'Target', 'Shield', 'Lightbulb', 'Globe', 'Flag', 'Zap', 
  'Factory', 'Fuel', 'Wheat', 'Car', 'Building', 'Flame', 'Snowflake', 
  'Thermometer', 'Smartphone', 'Laptop', 'Gamepad2', 'Music', 'Film', 
  'BookOpen', 'GraduationCap', 'Hospital', 'Pill', 'UtensilsCrossed', 
  'Pizza', 'Coffee', 'Beer', 'Plane', 'Train', 'Bus', 'Store', 
  'ShoppingBag', 'Banknote', 'ClipboardList', 'ShoppingCart', 'Link', 
  'Tent', 'Palette', 'Drama', 'Dice1', 'Spade', 'Circle'
];

function replaceEmojisInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Add imports if not already present
  if (content.includes('lucide-react') === false && Object.keys(emojiMap).some(emoji => content.includes(emoji))) {
    const importLine = `import { ${imports.join(', ')} } from 'lucide-react';`;
    content = content.replace(
      /import.*from.*['"]lucide-react['"];?/,
      importLine
    );
    if (!content.includes('lucide-react')) {
      content = content.replace(
        /(import.*from.*['"][^'"]*['"];?\n)/,
        `$1${importLine}\n`
      );
    }
    modified = true;
  }
  
  // Replace emojis
  for (const [emoji, iconName] of Object.entries(emojiMap)) {
    if (content.includes(emoji)) {
      // Replace in JSX
      content = content.replace(
        new RegExp(`<div className="text-4xl[^"]*">${emoji}</div>`, 'g'),
        `<${iconName} size={48} className="text-cyan-400 mx-auto" />`
      );
      content = content.replace(
        new RegExp(`<div className="text-3xl[^"]*">${emoji}</div>`, 'g'),
        `<${iconName} size={36} className="text-cyan-400 mx-auto" />`
      );
      content = content.replace(
        new RegExp(`<div className="text-2xl[^"]*">${emoji}</div>`, 'g'),
        `<${iconName} size={24} className="text-cyan-400 mx-auto" />`
      );
      
      // Replace in titles
      content = content.replace(
        new RegExp(`${emoji}\\s*([^<]+)`, 'g'),
        `<${iconName} size={28} className="text-cyan-400" /> $1`
      );
      
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

// Process all component files
const componentsDir = './src/components';
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

files.forEach(file => {
  replaceEmojisInFile(path.join(componentsDir, file));
});

console.log('Emoji replacement complete!');
