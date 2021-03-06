// asset is the singleton core for all IPA instances
// Injected to flyweight IPA class during calculation
// it provides recursion methods that calls the strategies
// provides generators for mockers
// offers cache when needed

import stategies from '../stategies/index.js';
import generators from './generators.js';
import dftConf from './defaultConfig.js';

const asset = {
    generators,
    recursions: {},
    cache: {},
    seed: null,
    init(genConfig, mockConfig = {}) { // flyWeight拼接
        this.generators.set(genConfig);
        this.cache = mockConfig;
        this.seed = dftConf.seed;
        if (genConfig.hasOwnProperty('seed')) {
            this.seed = genConfig.seed;
        }
    },
};

const getRecursion = (method) => {
    const execute = (template, ...params) => {
        let ret;
        for (let i = 0; i < stategies.length; i++) {
            const stategy = stategies[i];
            if (stategy.condition(template)) {
                ret = stategy[method](template, ...params, asset);
                break;
            }
        }
        return ret;
    };
    return execute;
};

asset.recursions.check = getRecursion('check');
asset.recursions.guarantee = getRecursion('guarantee');
asset.recursions.mock = getRecursion('mock');

export default asset;
