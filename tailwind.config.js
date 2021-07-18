module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active', 'hover'],
            fontWeight: ['active'],
            textDecoration: ['active'],
            borderWidth: ['hover', 'active'],
        },
    },
    plugins: [],
}
