import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import './Statistics.scss';

const Statistics = ({ title, stats }) => {
  return (
    <Section title={title}>
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
