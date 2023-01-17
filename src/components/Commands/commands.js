/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nSan.D\nFrom Calcutta\nFull Stack Dev\n---\n"
            }
        },
        // twitter: {
        //     description: 'Opens my Twitter Handle.',
        //     usage: 'twitter',
        //     fn: () => {
        //         window.open('https://twitter.com/_asheeshh', '_blank')
        //         return "opening twitter handle..."
        //     }
        // },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/SANKARAMDAS', '_blank')
                return "opening github account..."
            }
        },
        // discord: {
        //     description: 'Opens my Discord Account.',
        //     usage: 'discord',
        //     fn: () => {
        //         window.open('https://discordapp.com/users/784363251940458516', '_blank')
        //         return "opening discord account..."
        //     }
        // },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 100%
                    hindi            - 100%
                    bengali            - 100%
                    gen-z-langauge   - 00%
                    flutter           - 60%
                    javascript       - 60%
                    Bootstrap       - 60%
                    html5            - 90%
                    css3             - 80%
                    react             - 60%
                    next             - 10%[Started learning]
                    web 3.0(solidity,Polygon)   - 10% - [learning]
                    Spring Boot      - 10% - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 50%
                    studying         - 10%
                    overthinking     - 100%
                    social-skills    - 50%
                    making-playlists - 100%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'gsearch'                      | 'Search engine base on google-api'         | 'react'
                    'opensea-blockchain-clone'     | 'Opensea-blockchain-clone website'  | 'react-solidity-hardhat'
                    'NFT-digital-marketplace'      | 'NFT website'         | 'react-solidity-hardhat'
                    'AI-Radio'                     | 'AI-Radio-Allen API'         | 'flutter'
                    'covid19-tracker'              | 'Covid19-tracker-app(India as well as world)'         | 'flutter'
                    'bmi_calculator'                  | 'Bmi_calculator'         | 'flutter'
                    'Realtime-Weather-App-on-ReactJs' | 'Realtime-Weather-App-on-ReactJs'         | 'react'
                    'freeChat2_app'                   | 'Chat App'         | 'flutter'
                    'flutter_weather_app '  | 'Weather app'    | 'Flutter'\n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Intellij Idea, Atom, Visual Studio Code\n
                    Tool  : Postman, MongoDB, STS\n
                   
                `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/SANKARAMDAS", '_blank')
                return "opening repository..."
            }
        },
        // spotify: {
        //     description: 'Get info about my recently played song.',
        //     usage: 'spotify',
        //     fn: async () => {
        //         const item = await getnp()
        //         return `
        //             Now Playing/Recently Played\n
        //             ---\n
        //             Song: ${item.song}\n
        //             Artist: ${item.artist}\n---\n
        //         `
        //     }
        // }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}