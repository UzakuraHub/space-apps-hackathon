![hero](https://www.vaasa.fi/uploads/2020/09/fc28f6ce-untitled-v2__padwze2mdasotawlcjgrkzgrkyildbd-1024x576.png)

# Covid 19 Risk Calculate

| Information                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                 Figma                                                                                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| This is a space apps PWA to solve a challenge with many risks occurring with Covid-19 and it is intended to calculate the risks and provide tips on how to stay safe. Our solution consist of creating a progressive web app because it generates very light-weight mobile applications and can also be viewed across multiple devices so as to help more people about Covid 19 Risks with a single app.<br><br>The uzakura-team currently consists of 2 people working hard to keep this up and running, but we are also relying on alot of open-source projects! Checkout what we are trying to achieve | [![Figma Prototype](https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/50px-Figma-logo.svg.png)](https://www.figma.com/proto/eMY5pK7kBPjg6LbgJteidO/space-apps?node-id=14%3A251&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A83) |

**Check out** our [api repository](https://github.com/UzakuraHub/space-apps-hackathon-api) to have a glance on the source of our data and how we are compiling all resources provided by Nasa Apps.

# Installation

### Prerequesites

1. Download nodeJS using https://nodejs.
2. Global yarn installation with `npm install --global yarn`

### Project

1. Fork and clone the git repository
2. Run `yarn` to install the packages
3. In another window run `yarn run start`
4. Open your browser and navigate to `localhost:3000` (if it doesn't run right away.)
5. You should now see the login page now.

# Showcases (Live PWA Link)

Did you check out [the figma prototype](https://www.figma.com/proto/eMY5pK7kBPjg6LbgJteidO/space-apps?node-id=14%3A251&scaling=scale-down&page-id=0%3A1&starting-point-node-id=14%3A83)?
This is how far we managed with our solution [live link](https://covid-risk-space.netlify.app) and use the referenced prototype for guidance.

## List of routes of the Live PWA

| Routes                                                               | Descriptions                                                                                                      |
| :------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| [/login](https://covid-risk-space.netlify.app/login)                 | Log into a user account to view the risks at your location                                                        |
| [/register](https://covid-risk-space.netlify.app/register)           | Register for a new user account to start using the app                                                            |
| [/profileSetup](https://covid-risk-space.netlify.app/profileSetup)   | Complete your profile (location, language, etc...) for more personalized experience                               |
| [/dashboard](https://covid-risk-space.netlify.app/dashboard)         | Check the status of Covid at your location with a bunch of tips along the way                                     |
| [/warnings](https://covid-risk-space.netlify.app/warnings)           | See a list of recent and severe warnings about unusual and dangerous cases of Covid-19 at your location           |
| [/settings](https://covid-risk-space.netlify.app/settings)           | Personalize the app for your likings by tweaking it as you wish                                                   |
| [/newTrip](https://covid-risk-space.netlify.app/newTrip)             | Planning to change your location? Check the status at your destination about Covid-19 ahead of time to stay safe. |
| [/updateProfile](https://covid-risk-space.netlify.app/updateProfile) | Update your language and name at any point in time from the settings screen.                                      |

# Useful Sources Used:

> [JHU COVID-19 Dashboard—Center for systems science and engineering at JHU](https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)

> [COVID Data Tracker CDC:](https://covid.cdc.gov/covid-data-tracker/#vaccinations)

> [NASA-Earth Data—GIOVANNI](https://giovanni.sci.gsfc.nasa.gov/giovanni/)

> [NASA-SEDAC (Socioeconomic data and applications center)](https://sedac.ciesin.columbia.edu/data/sets/browse)

> [NASA-SEDAC—Current COVID-19 data](https://earthdata.nasa.gov/learn/articles/sedac-covid-19-viewer)

> [NASA Goddard Data/Info Services—DAAC](https://earthdata.nasa.gov/eosdis/daacs/gesdisc)

> [NASA-GLDAS](https://disc.gsfc.nasa.gov/datasets?page=1&keywords=GLDAS)

> [NASA-NLDAS (North American)](https://disc.gsfc.nasa.gov/datasets?page=1&keywords=NLDAS)

> [NASA-GMAO Products](https://gmao.gsfc.nasa.gov/GMAO_products/)

> https://uzakura.herokuapp.com/api

> https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest#ad1d0096-3390-462d-896c-5817101a7adf

> https://www.worldometers.info/coronavirus/

> https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series

> https://github.com/nytimes/covid-19-data

> https://github.com/ActiveConclusion/COVID19_mobility

> https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html

> https://github.com/pcm-dpc/COVID-19

> https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html

> https://info.gesundheitsministerium.at/

> https://www.mohfw.gov.in/

> https://covid19.ncdc.gov.ng/

> https://github.com/openZH/covid_19/

> https://coronavirus.data.gov.uk

> https://covid19.go.id

> https://datadashboard.health.gov.il/COVID-19/general

# Contributors ✨

Thanks goes to these wonderful people:

- Nsabimana Issa ([Github](https://github.com/mansurissa))
- Habiyaremye Ntwali Janvier ([Github](https://github.com/redjanvier))

# License

[MIT - 2021](./LICENSE)
