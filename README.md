# bourbon_journal_frontend

This React app utilizes Redux and allows users to journal the flavor profiles and tasting of different whiskeys. Data can persisted with a Ruby on Rails backend and SQLite3 database.

## Usage

To use SoodSoure, download a zipped file from Github (https://github.com/tmtarpinian/bourbon_journal_frontend).

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

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

Special thanks to David T. Miller for the use of his header/footer designs, which I incorporated into my navbar. Find the repo for his bootstrap theme here: https://github.com/StartBootstrap/startbootstrap-freelancer.

I also adopted his masthead from his landing page theme here: https://github.com/StartBootstrap/startbootstrap-landing-page.

Photo of whiskey glass by Joost Crop https://unsplash.com/@smallcamerabigpictures

Picture of casks by Daniel Norris https://unsplash.com/@danielnorris

Gold background by pinkzebra https://pixabay.com/users/pinkzebra-1836151/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1123653



1. install serializers
2. run new seed data
3. ensure associations are correct
4. make "new" categories?
    A. Make a Create New Button on the bottom of the index view
    B. This should be last?
5. update create bourbons to 
    A. have a drop down of all categories with all ids
    B. hidden form field with parent_id
    C. Make sure new fetch returns
6. Make Categories View that shows all bourbons for that category
7. Add a NavLink to each Category card, incorporating their ID and creating a Restful route
8. Fix the cards