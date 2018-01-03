# React UI Starter Kit

### Understanding the Folder Structure

    .
    ├── README.md                     // documentation file
    ├── devServer.js                  // development server
    ├── index.html                    // main html file
    ├── package.json                  // dependencies
    ├── src                           // source code
    │   ├── App.js                    // main Component
    │   ├── config.js                 // app config
    │   ├── data                      // redux files
    │   │   ├── create.js             // redux main file
    │   │   ├── dumms                 // dummy datas
    │   │   └── modules               // redux reducer, constant actions
    │   ├── index.js                  // main application file
    │   ├── ui                        // ui codes
    │   │   ├── apps                  // main components (referring by routes)
    │   │   ├── audio                 // audio files
    │   │   ├── common                // common components
    │   │   ├── img                   // image files
    │   │   ├── less                  // global less files
    │   │   ├── modules               // educational modules, main assets for us
    │   │   └── svg                   // svg files
    │   ├── urls.js                   // common urls
    │   └── utils                     // utilities
    │       ├── genUrl.js             // url generation for parametric urls
    │       ├── handleAudio.js        // audio management for modules
    │       └── handleImage.js        // basic image management for images
    ├── webpack.config.common.js      // common webpack config
    ├── webpack.config.dev.js         // webpack dev config
    └── webpack.config.prod.js        // webpack prod config


### Requirements

* Node 7+



##### Install Required Packages:

    $ brew install node


### Building the Project

##### Clone the repository and:

    $ git clone git@bitbucket.org:smart-education/authoring-player.git
    $ cd authoring-ui

##### install requirements

    $ npm install

##### To run the project, Follow the following command:

    $ npm start
