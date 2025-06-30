export const getEngineeringViewModel = () => {


    type EngineeringSection = {
        organisation: string;
        summary?: string;
        highlights?: {
          title: string;
          description: string;
        }[];
    }

    const engineeringExperience: EngineeringSection = {
        organisation: 'Compare the Market',
        summary:
            'Software Engineering Apprentice contributing to full-stack development, testing, and architecture in a large-scale Node.js environment.',
        highlights: [
        {
            title: 'PII Masking in Analytics',
            description:
                'Implemented dynamic masking using Nunjucks macros and feature flags to ensure privacy compliance across product journeys.',
        },
        {
            title: 'MVC ViewModel Architecture',
            description: 'Worked within an MVC pattern using Express controllers, shared view models, and SSR templates with Nunjucks.',
        },
        {
            title: 'Testing Refactors',
            description: 'Refactored Playwright tests, improved snapshot strategy, and introduced targeted unit tests for speed and clarity.',
        },
        {
            title: 'Design System Integration',
            description:
                'Pulled down and built the Web UI design system locally to test style changes in isolation using a local CDN override.',
        },
        {
            title: 'Stakeholder Collaboration',
            description:
                'Worked closely with PMs to scope features, understand product decisions, and challenge assumptions around validation logic.',
        },
    ],
    }
    return {
        pageTitle: 'Engineering',
        engineeringExperience
    };
  };