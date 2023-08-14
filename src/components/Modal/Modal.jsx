import React, { useEffect } from 'react';
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { BackDrop, ModalWindow, Img } from './Modal.styled'

const Modal = ({ src, alt, popap }) => {
    useEffect(() => {
        window.addEventListener('keydown', clickEscape);
        return () => {
            window.removeEventListener('keydown', clickEscape);
        };
    }, []);

    const clickEscape = (event) => {
        if (event.code !== 'Escape') {
            return;
        }
        popap();
    }

    const clickModal = (event) => {
        if (event.target !== event.currentTarget) {
            return;
        }
        popap();
    }
        return createPortal(
            <BackDrop>
                <ModalWindow onClick={clickModal}>
                    <Img src={src} alt={alt}></Img>
                </ModalWindow>
            </BackDrop>,
        document.querySelector('#modal-root')
        );
};

Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    popap: PropTypes.func.isRequired,
};

export default Modal;