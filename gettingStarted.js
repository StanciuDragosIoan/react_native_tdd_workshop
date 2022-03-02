/*

    expo init myAwesomeTddProject

    //choose basic template

    cd myAwesomeTddProject

    yarn add jest enzyme @wojtekmaj/enzyme-adapter-react-17

    create setupTests.js file in the root of project

    paste the below inside:

        const Enzyme = require("enzyme");
        const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
        Enzyme.configure({ adapter: new Adapter() });

    create jest.config.js in the root of project

    paste the below inside:

        module.exports = {
            return {
                preset: "react-native",
                setupFiles: ["./setupTests.js"],
                transformIgnorePatterns: [
                "node_modules/(?!react-native|react-navigation)/",
                ],
            };
        };

    add "test" : "jest" script inside scripts in package.json



    if we get STUPID inotify error (watchman crawl failed), just run:

    watchman watch-del-all
    watchman shutdown-server



    if we get STUPID `It looks like you called `mount()` without a global document being loaded.` error,
    run:

    npm install --save-dev --save-exact jsdom jsdom-global

import 'jsdom-global/register'; //at the top of file , even  , before importing react

*/
