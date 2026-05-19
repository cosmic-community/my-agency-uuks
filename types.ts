export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    short_description?: string;
    full_description?: string;
    icon?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    photo?: CosmicImage;
    linkedin_url?: string;
    twitter_url?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    description?: string;
    featured_image?: CosmicImage;
    gallery?: CosmicImage[];
    services_used?: Service[];
    results?: string;
    project_url?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_role?: string;
    company?: string;
    quote?: string;
    photo?: CosmicImage;
    rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}