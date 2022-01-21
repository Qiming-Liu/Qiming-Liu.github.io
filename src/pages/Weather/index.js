import './index.css';

import { Fragment, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Footer from 'components/Footer';

import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectHeader,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'combination/ProjectLayout';

const DisplacementSphere = lazy(() => import('pages/Home/DisplacementSphere'));
const WeatherCard = lazy(() => import('combination/WeatherCard'));

const title = 'Weather Web Application';
const description =
  'You can input a city name to show the current weather in that city area and the forecast for the upcoming 3 days. I use www.weatherapi.com, which provides a free API to query weather data.';
const columns = ['React', 'Axios', 'WeatherAPI'];

const Weather = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Weather | Qiming Liu</title>
      </Helmet>
      <Suspense fallback={null}>
        <DisplacementSphere />
      </Suspense>
      <ProjectContainer className="weathera">
        <ProjectHeader title={title} description={description} columns={columns} />
        <ProjectSection first>
          <WeatherCard />
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Review</ProjectSectionHeading>
              <ProjectSectionText>What I learned from this project.</ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default Weather;
