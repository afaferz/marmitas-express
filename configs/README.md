# DONT IMPORT JSON FILES INTO YOUR .TS or .TSX
JSON files config files is replaced at build time, this is a solution used to reduce build times onto CI.
To read the contents, use ConfigsProvider module inside project, they will give the correct data for your feature.
See a example:

    const configs = getConfigsProvider().get();
All keys must be the same per environment, the build tool can't see this differences, is your responsibility to implement the same key in all json files.
## Types
Remember, typescript isn't intelligent to know how your json is, in this case you must to document the JSON structure in a file called `types.ts` located inside configs folder.

## Dummy File
Don't touch on dummy file, they will be used at build time.
Any changes on this file will cause crash into whole application.