import { services, clientResults, approach, site } from './data'

interface WebMCPTool {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  execute: (params: Record<string, unknown>) => Promise<unknown>
}

/**
 * Registers site tools via the WebMCP API (Chrome experimental).
 * See: https://webmachinelearning.github.io/webmcp/
 */
export function registerWebMCP() {
  const nav = navigator as Navigator & {
    modelContext?: {
      provideContext: (ctx: { tools: WebMCPTool[] }) => Promise<void>
    }
  }

  if (!nav.modelContext) {
    console.log('[Trublue] WebMCP not available in this browser.')
    return
  }

  const tools: WebMCPTool[] = [
    {
      name: 'get_services',
      description:
        'List all operations consulting services offered by Trublue Solution, including descriptions and deliverables for each.',
      inputSchema: {
        type: 'object',
        properties: {},
        required: [],
      },
      execute: async () => ({
        provider: site.legalName,
        services: services.map((s) => ({
          name: s.title,
          description: s.description,
          deliverables: s.deliverables,
        })),
      }),
    },
    {
      name: 'get_case_studies',
      description:
        'List verified client results from Trublue Solution engagements across logistics, restaurant, and legal industries.',
      inputSchema: {
        type: 'object',
        properties: {},
        required: [],
      },
      execute: async () => ({
        provider: site.legalName,
        clientResults: clientResults.map((cr) => ({
          client: cr.client,
          industry: cr.industry,
          summary: cr.summary,
          situation: cr.situation,
          whatWeDid: cr.whatWeDid,
          outcomes: cr.outcomes,
        })),
      }),
    },
    {
      name: 'get_contact_info',
      description:
        'Get contact information for Trublue Solution including email, phone, and location. Use this when a user wants to request an operations assessment.',
      inputSchema: {
        type: 'object',
        properties: {},
        required: [],
      },
      execute: async () => ({
        provider: site.legalName,
        email: site.email,
        phone: site.phone,
        location: site.location,
        assessmentUrl: `mailto:${site.email}?subject=Operations%20Assessment%20Request`,
      }),
    },
    {
      name: 'get_approach',
      description:
        "Get Trublue Solution's 4-step operations methodology: Document AS-IS, Build measurement, Fix the system, Leave it self-sustaining.",
      inputSchema: {
        type: 'object',
        properties: {},
        required: [],
      },
      execute: async () => ({
        provider: site.legalName,
        methodology: approach.map((step) => ({
          step: step.step,
          title: step.title,
          description: step.description,
        })),
      }),
    },
    {
      name: 'request_assessment',
      description:
        'Generate a mailto link for requesting a free operations assessment from Trublue Solution.',
      inputSchema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: "The requester's name (optional)",
          },
          company: {
            type: 'string',
            description: "The requester's company name (optional)",
          },
        },
        required: [],
      },
      execute: async (params: Record<string, unknown>) => {
        const name = params.name || ''
        const company = params.company || ''
        const subject = encodeURIComponent(
          `Operations Assessment Request${company ? ` — ${company}` : ''}`
        )
        const body = encodeURIComponent(
          `Hi Jimmy,\n\nI'd like to request a free operations assessment.${
            name ? `\n\n— ${name}` : ''
          }${company ? `\n${company}` : ''}`
        )
        return {
          mailto: `mailto:${site.email}?subject=${subject}&body=${body}`,
          provider: site.legalName,
        }
      },
    },
  ]

  nav.modelContext
    .provideContext({ tools })
    .then(() => console.log('[Trublue] WebMCP tools registered:', tools.map((t) => t.name).join(', ')))
    .catch((err: Error) => console.warn('[Trublue] WebMCP registration failed:', err.message))
}
