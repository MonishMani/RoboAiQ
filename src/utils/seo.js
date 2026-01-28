/**
 * SEO Utility Functions
 * 
 * PURPOSE: Helper functions for managing meta tags and SEO
 * 
 * USAGE:
 * import { setMetaTags, setPageTitle } from '@/utils/seo';
 * 
 * useEffect(() => {
 *   setPageTitle('Programs - RoboAiQ');
 *   setMetaTags({
 *     description: '...',
 *     ogImage: '...',
 *   });
 * }, []);
 */

/**
 * Set page title and update meta tag
 */
export function setPageTitle(title) {
  document.title = title;
  
  // Update Open Graph title
  updateMetaTag('property', 'og:title', title);
  
  // Update Twitter title
  updateMetaTag('name', 'twitter:title', title);
}

/**
 * Set meta description
 */
export function setMetaDescription(description) {
  updateMetaTag('name', 'description', description);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('name', 'twitter:description', description);
}

/**
 * Set Open Graph image
 */
export function setOGImage(imageUrl) {
  updateMetaTag('property', 'og:image', imageUrl);
  updateMetaTag('name', 'twitter:image', imageUrl);
}

/**
 * Set canonical URL
 */
export function setCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = url;
}

/**
 * Update meta tag or create if doesn't exist
 */
function updateMetaTag(type, name, content) {
  let tag = document.querySelector(`meta[${type}="${name}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(type, name);
    document.head.appendChild(tag);
  }
  
  tag.content = content;
}

/**
 * Comprehensive meta tags setter
 */
export function setMetaTags({
  title,
  description,
  ogImage,
  ogUrl,
  canonical,
  twitterCard = 'summary_large_image',
  twitterCreator = '@roboaiq',
  type = 'website',
}) {
  if (title) setPageTitle(title);
  if (description) setMetaDescription(description);
  if (ogImage) setOGImage(ogImage);
  if (canonical) setCanonical(canonical);
  if (ogUrl) updateMetaTag('property', 'og:url', ogUrl);
  
  updateMetaTag('name', 'twitter:card', twitterCard);
  updateMetaTag('name', 'twitter:creator', twitterCreator);
  updateMetaTag('property', 'og:type', type);
}

/**
 * Structured Data JSON-LD Helper
 */
export function setStructuredData(data) {
  let script = document.querySelector('script[type="application/ld+json"]');
  
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(data);
}

/**
 * Generate JSON-LD for Organization
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'RoboAiQ',
    'url': 'https://roboaiq.com',
    'logo': 'https://roboaiq.com/assets/images/logo-roboaiq.jpeg',
    'description': 'Intelligent Robotics & AI Education for Kids',
    'sameAs': [
      'https://www.facebook.com/roboaiq',
      'https://www.linkedin.com/company/roboaiq',
      'https://www.instagram.com/roboaiq',
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN',
    },
  };
}

/**
 * Generate JSON-LD for Course
 */
export function getCourseSchema({
  name,
  description,
  image,
  url,
  provider = 'RoboAiQ',
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': name,
    'description': description,
    'image': image,
    'url': url,
    'provider': {
      '@type': 'Organization',
      'name': provider,
      'url': 'https://roboaiq.com',
    },
  };
}

/**
 * Generate JSON-LD for BreadcrumbList
 */
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}
