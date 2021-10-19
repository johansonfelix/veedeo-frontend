<div id="top"></div>

[![github-follow][github-follow]][github-url]
[![demo][demo-badge]][demo]
[![website][github-pages]][github-pages-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/johansonfelix/coronavirus-tracker">
    <img src="src/images/veeedeo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Veedeo</h1>

  <p align="center">
    Simple Spring Boot application tracking the spread of the Coronavirus COVID-19 pandemic. Stay up-to-date with COVID-19 data summarized by country.
    <br />
    <a href="https://github.com/johansonfelix/coronavirus-tracker/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://covidtrackapplication.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/johansonfelix/coronavirus-tracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/johansonfelix/coronavirus-tracker/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://covidtrackapplication.herokuapp.com/)
Since the pandemic began, a great deal of information has circulated online and on social media about COVID-19. While the pandemic is a serious issue, there is a lot of misinformation and a lot of emotions associated with it. 

Coronavirus Tracker allows for one to look at the data rationally and to have the data speak for itself. The application tracks the total number of reported cases across the globe and the total number of cases reported per country and province.

The data is updated daily and can be exported from the application in various file formats. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Coronavirus Tracker was built with the following technologies:

* [Java](https://java.com/) with [Maven](https://maven.apache.org/)
* [Spring Boot](https://spring.io/)
* [Thymeleaf](https://thymeleaf.org/)

* Deployed on [Heroku](https://heroku.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To setup the application on your local environment: 

### Prerequisites

* Java 12
  ```sh
  java --version
  ```
 * Maven  
 
 * Compiler: Intellij (Personal Preference)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/johansonfelix/coronavirus-tracker.git
   ```
2. Run project from compiler

4. Open browser to localhost:8080

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<h3>Application uses pagination to display data</h3>
<img src="src/main/resources/static/images/screen2.png" width="50%">

<h3>Data can can also be filtered or searched</h3>
<img src="src/main/resources/static/images/screen3.png" width="50%">

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [] Add graphs and comparison mechanism
- [] Add reported number of deaths and recovered cases data

<h3>Disclaimer</h3>
<ol>
<li> Some state/values are saved in the Spring Service (bad practice). The application is simple and small which justifies my reason to have some state saved there.</li>
<li> The application does not have any tests at the moment</li>
<li> The data validity is not checked. The application is experimental - data may be incorrect. </li>
</ol>
See the [open issues](https://github.com/johansonfelix/coronavirus-tracker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! **Thanks again!**

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* [Johanson Felix](johansonfelix.github.io) - (felix.johanson@gmail.com) 
* [LinkedIn][license-url]</br>
* Project Link: [https://github.com/johansonfelix/coronavirus-tracker.git](https://github.com/johansonfelix/coronavirus-tracker.git)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [koushikkothagal](https://github.com/koushikkothagal)
* [CSSEGISandData](https://github.com/CSSEGISandData/COVID-19)
* [othneildrew](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[github-follow]:https://img.shields.io/badge/Follow-black.svg?style=for-the-badge&logo=github&color=555
[github-url]:https://github.com/johansonfelix
[github-pages]:https://img.shields.io/badge/-johansonfelix-red.svg?style=for-the-badge&color=red
[github-pages-url]:https://johansonfelix.github.io
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/johansonfelix/coronavirus-tracker/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/johansonfelix/coronavirus-tracker/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]:https://www.linkedin.com/in/johanson-felix-336a94186/
[product-screenshot]: src/main/resources/static/images/screen1.png
[demo]:https://covidtrackapplication.herokuapp.com/
[demo-badge]:https://img.shields.io/badge/-demo-green.svg?style=for-the-badge&color=green
