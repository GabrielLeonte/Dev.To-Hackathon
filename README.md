# We Help App

## About

We help is a platform that connects local citizens and volunteers, with the goal of helping them getting necessary products from local markets with the help of volunteers

### How it works

This application has the backend built in NodeJS using Sequelize as ORM Manager, ExpressJS as handle server for Twilio API, and Socket.IO as client handle server.
The frontend is entirely built in VueJS, CSS and Bulma.

### How it works for the local citizens

A local citizen can call the free phone number provided by local authority, and say his requirements, with some contact data like his name, street, etc. 2-3 volunteers would have to forward his requirements to the volunteers from the field, with, who have a local budget and maybe a car. The field volunteer will receive through SMS Volunteer Delivery System, the contact data (contact name, phone number) + a little description, and his mission would be to contact the local citizen and provide his requirements right to his door.

## Features

- Unique Code Register System
- Simple Reseting Password System
- Friendly and Clean User Interface
- Specific environment variables using `.env` file
- Socket.IO Anti Abuse System
- Real Time Data Update
- Custom Inbound Call Message and Custom Call Recording Length
- Simple Anti Errors System
- 95% OOP Backend Arhitecture
- SMS Volunteer Delivery System
- SQLite3 as database for a quick deploy action

## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)

### Twilio Account Settings

This application should give you a ready-made starting point for writing your
own appointment reminder application. Before we begin, we need to collect
all the config values we need to run the application:

| Config&nbsp;Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account&nbsp;Sid  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).                                                         |
| Auth&nbsp;Token   | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).                                                         |
| Phone&nbsp;number | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone https://github.com/GabrielLeonte/Dev.To-Hackathon Dev.To Hackathon
cd Dev.To Hackathon
```

2. Install dependencies

```bash
npm install
```

3. Create `./Server/.env` file with your own data

```
// Server Port
PORT=3000

// Sqlite3 database path (if you're using a folder like i do, make sure that it exists)
DB_PATH="./database/database.sqlite" 

// JSON Web Token Secret
ACCOUNT_SECRET="Aloha-This-Is-A-Twilio-Project-Muahahahahah--It-Will-Be-The-Best"

// Record Action Settings
MAXCALLLENGTH=180000
CALL_MESSAGE="Hello tell us your requirements and something about you"

// the number provided by twilio (this is the number that will be available to call)
OPEN_PHONE_NUMBER="+18554101733"

// Twilio Auth (get them from twilio account)
accountSid="AC0............................"
authToken="ec5............................"

// SMS Data e.g: +40 - RO, +1 USA (just make sure that this is working by manualy testing it)
COUNTRY_PREFIX="+1"

// Volunteers types Number Arrays (minim one valid phone number)
SHOPPINGS=["+18554101733"]
FOOD_DELIVERY=["+18554101733"]
HUMAN_HELP=["+18554101733"]
PHARMACY_SHOPPINGS=["+18554101733"]
BASIC_FOOD=["+18554101733"]
OTHER=["+18554101733"]
```

See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

4. Run the application

```bash
./start.bat
```

Alternatively, you can use this command to start the server on a linux machine. (not tested)

```bash
./start.sh
```

5. Navigate to [http://localhost:3000](http://localhost:8080)

That's it!

## Resources

- [GitHub's repository template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) functionality
- [Ilustrations from Undraw.co](https://undraw.co/illustrations)
- [Bulma Framework](https://bulma.io/)

## Contributing

This template is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

[Visit the project on GitHub](https://github.com/GabrielLeonte/Dev.To-Hackathon)

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is. Also no warranty on my English(terrible i know)

[twilio]: https://www.twilio.com
