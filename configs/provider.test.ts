import dsvConfigs from './dsv.json';
import hmlConfigs from './hml.json';
import localConfigs from './local.json';
import prdConfigs from './prd.json';
import getConfigsProvider from './provider';
import testConfigs from './test.json';
import IConfigs from './types';

// Simple function that checks if configs matches the same keys
function checkKeysMatch(selectorFn : (configs : IConfigs)=> Object) {
    const configs = [localConfigs, dsvConfigs, hmlConfigs, prdConfigs, testConfigs];
    const data = configs.map(x => selectorFn(x as any as IConfigs));
    // Use local configs as base for compare
    const localKeys = Object.keys(data[0]);
    
    for(let i = 1; i < data.length; ++i) {
        const keys = Object.keys(data[i]);
        keys.forEach((key, keyIdx) => expect(localKeys[keyIdx]).toStrictEqual(key));
    }
}
describe('ConfigsProvider', ()=> {
    it('must equals the scheme between environment configs.', ()=> {
        // Check for root configs
        checkKeysMatch(conf => conf);
        {   
            // root->assets
            // root->assets->brands
            checkKeysMatch(conf => conf.assets);
            checkKeysMatch(conf => conf.assets.brands);
        }
        // root->brandNames
        checkKeysMatch(conf => conf.brandNames);
        {
            // root->productSetup
            // root->productSetup->permissionNames
            // root->productSetup->accessMaintenance
            // root->productSetup->accessMaintenance->features
            checkKeysMatch(conf => conf.productSetup);
            checkKeysMatch(conf => conf.productSetup.permissionNames);
            checkKeysMatch(conf => conf.productSetup.accessMaintenance);
            checkKeysMatch(conf => conf.productSetup.accessMaintenance.features);
        }
        // root->system
        checkKeysMatch(conf => conf.system);
    });
    it('must retrieves correctly configs.', async ()=> {
        const configs = await getConfigsProvider().get();
        // Lazy Object Compare
        expect(configs).toMatchObject(testConfigs);
    });
});