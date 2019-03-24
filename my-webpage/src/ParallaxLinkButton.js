
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Button from '@material-ui/core/Button'
import ParallaxButton from './ParallaxButton';


class ParallaxLinkButton extends ParallaxButton {


    render() {
        const {
            history,
            location,
            match,
            staticContext,
            to,
            onClick,
            // ⬆ filtering out props that `button` doesn’t know what to do with.
            ...rest
        } = this.props
        return (
            <div
                {...rest}
                onClick={(event) => {
                    onClick && onClick(event)
                    history.push(to)
                }}
            >

                    <ParallaxButton></ParallaxButton>

            </div>

        )

    }

}

ParallaxLinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(ParallaxLinkButton)