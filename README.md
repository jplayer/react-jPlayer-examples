# react-jPlayer-examples
Examples for react-jPlayer and react-jPlaylist

### Run jPlayer/jPlaylist Examples
#### NPM examples (Audio/Video/Live/Multiple)

1. `git clone https://github.com/jPlayer/react-jPlayer-examples.git`

2. For the jPlayer examples: `cd jPlayers/[projectName]` OR for the jPlaylist examples: `cd jPlaylists/[projectName]`

3. `npm install`

4. `npm run dev`

5. open http://localhost:8080/ in your browser

#### UMD example
These examples are just to show how to use react-jPlayer without npm or even webpack.
They just include the .css and .js files from `/dist/` directly into the .html file so they can be run in the browser directly.
These examples include the .css and .js files from the `node_modules` in the .html file just for ease of use but you can just copy the files manually to your project and include them instead if you don't want to use npm at all.

1. `git clone https://github.com/jPlayer/react-jPlayer-examples.git`

2. For the jPlayer example: `cd jPlayers/UMDPlayer` OR for the jPlaylist example: `cd jPlaylists/UMDPlaylist`

3. `npm install`

4. `npm run dist`

5. open `public/index.html`
