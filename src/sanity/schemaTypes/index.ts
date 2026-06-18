import { type SchemaTypeDefinition } from "sanity";
import { HomeProjectType } from "./HomeProjectType";
import { OfficeProjectType } from "./OfficeProjecttype";
import { ClientType } from "./ClientTypes";
import { WebsiteSettingsType } from "./WebsiteSettings";
import { InteriorTeamType } from "./interiorTeamType";
import { LeadType } from "./LeadType";
import { BlogSchemtype } from "./BlogSchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    HomeProjectType,
    OfficeProjectType,
    BlogSchemtype,
    ClientType,
    WebsiteSettingsType,
    InteriorTeamType,
    LeadType,
  ],
};
