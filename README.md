# Bourbon Journal (frontend)

![Project Image](./src/bourbon.jpg)

> An app that allows bourbon enthusiasts to journal their tastings.

![forks badge](https://img.shields.io/github/forks/tmtarpinian/bourbon_journal_frontend)
![stars badge](https://img.shields.io/github/stars/tmtarpinian/bourbon_journal_frontend)


### Table of Contents


- [Description](#Description)
- [Deploy the App](#Deploy)
- [Contributing](#Contributing)
- [Acknowledgements](#Acknowledgements)
- [Code of Conduct](#Conduct)
- [Maintainers](#Maintainer(s))
- [License](#license)

---

## Description
This React app utilizes Redux and allows users to journal the flavor profiles and tasting of different whiskeys. Data can be persisted to a Postgresql database and fetched via [a Ruby on Rails API](https://github.com/tmtarpinian/bourbon_journal_backend).

### Technologies
- Ruby
- Rails
- Postgresql
- React
- Redux

## Deploy

To use Bourbon Journal, download a zipped file from Github (https://github.com/tmtarpinian/bourbon_journal_frontend).

Please have ruby, rails, node.js, and react installed prior to running this application.

After unzipping and saving the contents to the desired directory, and run 'npm install' to install all the packages required for this program.

From within that directory, run 'npm' in your terminal, then open 'localhost:3000' (or the listening port stated in your terminal) in a web browser.

Your default web browser should open or a prompt to open a web browser should allow you to then see the app. If not, open the index.html file in a web browser.

The close the program, exit your web browser and type 'contrl/command + C' in your terminal to exit react server.

If you would like to persist your data, download the backend counterpart to this app at (https://github.com/tmtarpinian/bourbon_journal_backend).

Upon download, unzip the contents to the desired directory, and run 'bundle install' to install all the gems required for the rails backend.

From within that directory, run 'rails s' in your terminal, then open 'localhost:3001' The react app running on localhost:3000 should now be able send get and post requests to the back end and persist data.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/tmtarpinian/bourbon_journal_frontend. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## Acknowledgements

Special thanks to David T. Miller for the use of his header/footer designs, which I incorporated into my navbar. [Find the repo for his bootstrap theme here](https://github.com/StartBootstrap/startbootstrap-freelancer).

I also adopted his masthead from [his landing page theme here](https://github.com/StartBootstrap/startbootstrap-landing-page).

Photo of whiskey glass by [Joost Crop]((https://unsplash.com/@smallcamerabigpictures) )

Picture of casks by [Daniel Norris](https://unsplash.com/@danielnorris)

Gold background by [pinkzebra](https://pixabay.com/users/pinkzebra-1836151/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1123653)

## Conduct
Everyone using and interacting in Garden Helper's code
bases, issue trackers, chat rooms and/or mailing lists is expected to follow the [Code of conduct](./CODE_OF_CONDUCT.md).

## Maintainer(s)
---

| ![tmtarpinian](./src/tmtarpinian.jpg)     |
| :------------- | 
|[@tmtarpinian](https://github.com/tmtarpinian) |

## License
Copyright © 2020 Trevor Tarpinian

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
