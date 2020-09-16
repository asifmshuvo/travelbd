const path = require('path');

const compose = plugins => ({
    webpack(config, options) {

        // Explicitly ignore `.flow` files because GraphiQL, for whatever
        // insane reason, ships `.flow` files that get picked up by Webpack
        // and Next.js
        //
        // > https://github.com/apollographql/apollo-client-devtools/pull/59/files
        config.plugins.push(new options.webpack.IgnorePlugin(/\.flow$/))

        if (options.isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }

        const builtInLoader = config.module.rules.find((rule) => {
            if (rule.oneOf) {
                return (
                    rule.oneOf.find((deepRule) => {
                        if (deepRule.test && deepRule.test.toString().includes('/a^/')) {
                            return true;
                        }
                        return false;
                    }) !== undefined
                );
            }
            return false;
        });

        if (typeof builtInLoader !== 'undefined') {
            config.module.rules.push({
                oneOf: [
                    ...builtInLoader.oneOf.filter((rule) => {
                        return (rule.test && rule.test.toString().includes('/a^/')) !== true;
                    }),
                ],
            });
        }

        config.resolve.alias['@'] = path.resolve(__dirname);



        return plugins.reduce((config, plugin) => {
            if (plugin instanceof Array) {
                const [_plugin, ...args] = plugin
                plugin = _plugin(...args)
            }
            if (plugin instanceof Function) {
                plugin = plugin()
            }
            if (plugin && plugin.webpack instanceof Function) {
                return plugin.webpack(config, options)
            }
            return config
        }, config)
    },

    webpackDevMiddleware(config) {
        return plugins.reduce((config, plugin) => {
            if (plugin instanceof Array) {
                const [_plugin, ...args] = plugin
                plugin = _plugin(...args)
            }
            if (plugin instanceof Function) {
                plugin = plugin()
            }
            if (plugin && plugin.webpackDevMiddleware instanceof Function) {
                return plugin.webpackDevMiddleware(config)
            }
            return config
        }, config)
    },
})

const withBundleAnalyzer = require('@next/bundle-analyzer')
const withLess = require('@zeit/next-less')

// // fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = file => { }
// }
const nextConfig = {
    target: 'serverless',
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            // '/about': { page: '/about' },
            // '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
        }
    }
}

module.exports = {
    ...compose([
        [
            withBundleAnalyzer,
            {
                enabled: process.env.ANALYZE === 'true',
            },
        ],
        [
            withLess,
            {
                lessLoaderOptions: {
                    javascriptEnabled: true
                }
            }
        ]
    ]),
    ...nextConfig
}

