export const SITE_URL = 'https://noekmemorial.be';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/OG_image.jpg`;

const buildTitle = (title) => (title ? `${title} | Noek` : 'Noek');

export const createPageHead = ({ title, description, path, image = DEFAULT_OG_IMAGE }) => {
  const fullTitle = buildTitle(title);
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:site_name', content: 'Noek' },
      { property: 'og:locale', content: 'nl_BE' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    link: [{ rel: 'canonical', href: url }]
  };
};
