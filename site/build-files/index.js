const path = require('path');

const Files = require('nonplain').default;

const {
  FILES_DATA,
  FILES_ROOT,
  getEleventyNavigation,
  getPermalinkFromFile,
  markdownLinksToHTML,
} = require('./helpers');

/*
 * Folders under `files/` to leave out of the build. Content stays in the
 * repo; remove an entry here to publish it again.
 */
const HIDDEN_FOLDERS = ['research'];

function isHidden(filepath) {
  const rel = path.relative(FILES_ROOT, filepath);
  return HIDDEN_FOLDERS.some((folder) => rel === folder || rel.startsWith(folder + path.sep));
}

function buildFiles() {
  /* Hack for easy logging */
  const print = console.log.bind(console);

  print('Building files...');

  /* Load all files into Files instance using glob */
  const files = new Files().load(path.join(FILES_ROOT, '/**/*.md'), {
    filterFilepaths: (filepath) => !isHidden(filepath),
  });

  /* Transform the files as necessary for the 11ty build */
  files.transform(({ body, metadata }) => {
    print(' ├ ', metadata.title, ':', path.join(metadata.file.dir, metadata.file.base));

    /* Convert all links to HTML */
    const newBody = markdownLinksToHTML({ content: body, file: metadata.file });

    /* Add a valid permalink and navigation data for each file */
    /*
     * Frontmatter wins for `permalink`, but `eleventyNavigation` is merged
     * (frontmatter keys override the computed key/parent/order/title) so a
     * page can set e.g. `order` without losing its computed key.
     */
    const newMetadata = {
      ...metadata,
      eleventyNavigation: getEleventyNavigation(metadata),
      permalink: metadata.permalink || getPermalinkFromFile(metadata.file),
    };

    return {
      body: newBody,
      metadata: newMetadata,
    };
  });

  /* Export Files instance to JSON where 11ty can use it */
  files.export2JSON(FILES_DATA);

  print('Done!', '\n');
}

module.exports = buildFiles;
