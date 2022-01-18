import './index.css';

import { Fragment, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import Footer from 'components/Footer';

const DisplacementSphere = lazy(() => import('pages/Home/DisplacementSphere'));

const Resume = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Resume | Qiming Liu</title>
      </Helmet>
      <Suspense fallback={null}>
        <DisplacementSphere />
      </Suspense>
      <Footer />
    </Fragment>
  );
};

export default Resume;
