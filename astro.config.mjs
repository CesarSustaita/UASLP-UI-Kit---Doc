// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'UASLP UI Kit',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Getting Started',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Introducción', slug: 'guides/example' },
                ],
            },
            {
                label: 'Styles Guide',
                autogenerate: { directory: 'StylesGuide' },
            },
        ],
        customCss:[
            //Ruta alternativa al css personalizado
            './src/styles/uaslp-styles.css',
        ]
		}), 
	],
});