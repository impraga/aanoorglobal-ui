import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { SwitchTransition, Transition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

import TransitionContext from '../../../context/TransitionContext'

const TransitionComponent = ({ children }) => {
  const location = useLocation()
  const { toggleCompleted } = useContext(TransitionContext)
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={0}
        // onEnter={(node) => {
        //   toggleCompleted(false)
        //   gsap.set(node, { autoAlpha: 0, scale: 1.0002, yPercent: 20 })
        //   gsap
        //     .timeline({
        //       paused: true,
        //       onComplete: () => toggleCompleted(true)
        //     })
        //     .to(node, { autoAlpha: 1, yPercent: 0, duration: 0.2 })
        //     .to(node, { scale: 1, duration: 0.2 })
        //     .play()
        // }}
        // onExit={(node) => {
        //   gsap
        //     .timeline({ paused: true })
        //     .to(node, { scale: 1, duration: 0.2 })
        //     .to(node, { yPercent: -20, autoAlpha: 0, duration: 0.2 })
        //     .play()
        // }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  )
}
TransitionComponent.propTypes = {
  children: PropTypes.PropTypes.shape()
}

TransitionComponent.defaultProps = {
  children: {}
}

export default TransitionComponent
