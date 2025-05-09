import { z, defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

const endpoints = defineCollection({
    loader: file("./src/data/endpoints.json"),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        url: z.string().url(),
        method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS']).default('GET'),
        expectedStatus: z.number().int().positive().default(200),
        description: z.string().optional(),
        headers: z.record(z.string()).optional(), // Optional: for custom headers
        body: z.any().optional(), // Optional: for request body (e.g., for POST requests)
    })
});

export const collections = { endpoints };
