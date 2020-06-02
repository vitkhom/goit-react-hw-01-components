import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import './Statistics.scss';

const Statistics = ({ title, stats }) => {
  return (
    <Section title={title}>
      <ul className="stat-list">
        {stats.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
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
