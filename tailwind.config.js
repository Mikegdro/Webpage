export default {
    theme: {
        extend: {
            fontFamily: {
                custom: ['Poppins']
            },
            keyframes: {
                animation: {
                    blob: "blob 1s infinite"
                },
                blob: {
                    "0%": {
                        tranform: "scale(1)"
                    },
                    "33%": {
                        transform: "scale(1.2)"
                    },
                    "66%": {
                        tranform: "scale(0.8)"
                    },
                    "100%": {
                        transform: "scale(1)"
                    }
                }
            }
        }
    }
}