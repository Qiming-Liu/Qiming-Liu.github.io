import postcssGlobalData from '@csstools/postcss-global-data';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    // Share the @custom-media rules from app/index.css with every CSS file
    postcssGlobalData({ files: ['src/app/index.css'] }),
    postcssPresetEnv({
      stage: 1,
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    }),
  ],
};
