export interface _System {
    debug: boolean;
    environment: 'local' | 'test' | 'dsv' | 'hml' | 'prd';
    version: string;
}
export default interface Configs {
    system: _System;
}
