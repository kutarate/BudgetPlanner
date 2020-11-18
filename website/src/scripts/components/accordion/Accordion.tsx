import React from 'react';
import { connect } from 'react-redux';
import { accordionActions } from '../../state/ducks/accordion';
import { getIsAccordionOpen } from '../../state/ducks/accordion/selectors';
import { AccordionCTA, AccordionWrapper } from '../../styles/Accordion/StyledAccordion';

interface AccordionProps {
  isOpen: boolean;
  toggleAccordion: () => void;
  ctaLabel: string;
}

const mapStateToProps = (state) => ({
  isOpen: getIsAccordionOpen(state),
});

const actionCreators = {
  toggleAccordion: accordionActions.toggleAccordion,
};

const Accordion = ({ isOpen, toggleAccordion, ctaLabel }: AccordionProps) => (
  <div>
    <AccordionCTA onClick={toggleAccordion}>
      {ctaLabel}
      {isOpen}
    </AccordionCTA>
    {isOpen && <AccordionWrapper>Im totally open</AccordionWrapper>}
  </div>
);

export default connect(mapStateToProps, actionCreators)(Accordion);
