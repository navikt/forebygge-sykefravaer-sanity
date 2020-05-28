// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import vihjelperderemed from './viHjelperDereMed'
import radElement from './rad-element'
import digitaleTjenester from './digitaleTjenester'
import alertstripe from './alertstripe'
import oppfolgingFraNavArbeidslivssenter from './oppfolgingFraNavArbeidslivssenter'
import helseIArbeid from './helseIArbeid';
import iaAvtalen from './iaAvtalen';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    vihjelperderemed,
    digitaleTjenester,
    oppfolgingFraNavArbeidslivssenter,
    helseIArbeid,
    iaAvtalen,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    alertstripe,
    radElement,
    blockContent,
  ])
})
