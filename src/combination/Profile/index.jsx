import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import DecoderText from 'components/DecoderText';
import Image from 'components/Image';
import Section from 'components/Section';
import ProfileImg from 'assets/profile.jpg';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './index.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <Heading
      className={classNames('profile__title', `profile__title--${status}`)}
      level={3}
      id={titleId}
    >
      <DecoderText text="Hi there" start={status !== 'exited'} delay={500} />
    </Heading>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      I'm a full stack developer and an open-source contributor to the cross-platform
      terminal Tabby and Microsoft's DefinitelyTyped. I have built CI/CD pipelines for
      front-end and back-end, and run web apps in Docker with Grafana monitoring.
    </Text>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      I love coding. In my spare time I build Decky Loader plugins that make the Steam
      Deck do more, like DeckyGCM and CreamDeck.
    </Text>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
            </div>
            <div className="profile__column">
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  delay={100}
                  srcSet={`${ProfileImg} 480w, ${ProfileImg} 960w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
