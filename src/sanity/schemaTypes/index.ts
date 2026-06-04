import { type SchemaTypeDefinition } from 'sanity'
import { HomeProjectType } from './HomeProjectType'
import { OfficeProjectType } from './OfficeProjecttype'
import { ClientType } from './ClientTypes'
import { WebsiteSettingsType } from './WebsiteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [HomeProjectType , OfficeProjectType , ClientType , WebsiteSettingsType],
}
