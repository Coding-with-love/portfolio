
import profileImgLarge from 'assets/connor.jpeg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/connor.jpeg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import { Link } from 'components/Link';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="hello world! " start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hi! I&apos;m Connor Love, a first-year Computer Science student at Kent State University with a 4.0 GPA, passionate about technology and creativity. I&apos;m from Medina, Ohio, and have been honing my skills in web development and graphic design for years. I&apos;m also a freelance web developer, eager to take on exciting projects.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      The best part about what I do is the mix of problem-solving and creative expression. I love bringing ideas to life, whether it&apos;s through building websites, coding apps, or creating impactful designs. It&apos;s a thrill to see something functional and visually engaging come together—like turning a concept into reality.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Over the years, I&apos;ve developed proficiency in multiple coding languages, including HTML, CSS, React.js, Next.js, Three.js, Java, PHP, SQL, SWIFT, TypeScript, and Python. On top of that, I&apos;m skilled in tools like Photoshop, Illustrator, and After Effects, which help me add unique design elements to my work. My background also includes working with C++ and MATLAB, showcasing a strong technical foundation.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;m always learning, striving to stay at the forefront of technology and design trends. Whether it&apos;s during my studies, freelancing, or past roles like my internship with Modern Telecom, I push myself to grow and create fresh, innovative solutions.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My portfolio is a reflection of my journey—from early projects to advanced builds. Each piece tells a story of how I&apos;ve evolved as a developer and designer, highlighting my passion for creating meaningful digital experiences.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Feel free to explore the tools and software I use on the <Link href="/uses">Uses page</Link>, and let&apos;s connect if you&apos;re interested in collaborations, freelance opportunities, or just want to chat about tech and design!
    </Text>

  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me at Homecoming"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >

                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
