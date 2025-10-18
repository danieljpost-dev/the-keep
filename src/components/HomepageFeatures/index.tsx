import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Find and attend public conventions',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We want a toolset that convention hosts can use to run RPG conventions that can eliminate the pains of registration and schedule management
      </>
    ),
  },
  {
    title: 'Connect with players',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We want a way to for people to connect at conventions. The little blocks of time at the table can be magical, exciting adventures you build with people you just met.
      </>
    ),
  },
  {
    title: 'Mange your Home Table',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The Keyholders are six adults – between us we own several businesses, have a gaggle of children, full time jobs, volunteer responsibilities and one of us plays in a rock band. Point is, we have a lot going on and our calendars are a mess. We would love to play every Thursday, but it just doesn&apos;t work. So we send emails, arties manage their home games too? Your home game is basically a private event so it makes some sense. We think putting all your gaming stuff in one place could be pretty useful.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
