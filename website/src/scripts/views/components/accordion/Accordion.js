import React from 'react';
import { connect } from 'react-redux';
import { accordionActions } from '../../../state/ducks/accordion';
import { getIsAccordionOpen } from '../../../state/ducks/accordion/selectors';

const mapStateToProps = (state) => ({
  isOpen: getIsAccordionOpen(state),
});

const actionCreators = {
  toggleAccordion: accordionActions.toggleAccordion,
};

const Accordion = ({ isOpen, toggleAccordion, ctaLabel }) => (
  <div>
    <button onClick={toggleAccordion}>
      {ctaLabel}
      {isOpen}
    </button>
    {isOpen && <div style={{ color: 'red', width: '100px', height: '100px' }}>Im totally open</div>}
  </div>
);

export default connect(mapStateToProps, actionCreators)(Accordion);
