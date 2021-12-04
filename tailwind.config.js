module.exports = {
    purge: [
        './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active', 'hover'],
            textColor: ['active', 'hover'],
            fontWeight: ['active'],
            textDecoration: ['active'],
            borderWidth: ['hover', 'active'],
        },
    },
    plugins: [],
}
