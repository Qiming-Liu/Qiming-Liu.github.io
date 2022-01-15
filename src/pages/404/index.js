import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import { reflow } from 'utils/transition';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './index.css';

function NotFound() {
  return (
    <section className="page-404">
      <Helmet>
        <title tag="title">404 | Not Found</title>
        <meta name="description" content="404 page not found. This page doesn't exist" />
      </Helmet>
      <Transition appear in={true} timeout={0} onEnter={reflow}>
        {status => (
          <Fragment>
            <div className="page-404__details">
              <div className="page-404__text">
                <Heading
                  className={classNames('page-404__title', `page-404__title--${status}`)}
                  level={0}
                >
                  404
                </Heading>
                <Heading
                  aria-hidden
                  className={classNames(
                    'page-404__subheading',
                    `page-404__subheading--${status}`
                  )}
                  as="h2"
                  level={3}
                >
                  <DecoderText
                    text="Error: Redacted"
                    start={status !== 'exited'}
                    delay={300}
                  />
                </Heading>
                <Text
                  className={classNames(
                    'page-404__description',
                    `page-404__description--${status}`
                  )}
                >
                  This page is coming soon.
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={classNames(
                    'page-404__button',
                    `page-404__button--${status}`
                  )}
                  href="/"
                  icon="chevronRight"
                >
                  Back to homepage
                </Button>
              </div>
            </div>
          </Fragment>
        )}
      </Transition>
    </section>
  );
}

export default NotFound;
