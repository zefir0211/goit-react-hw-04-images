import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { BackDrop, ModalWindow, Img } from './Modal.styled';

const Modal = ({ src, alt, popap }) => {
    const clickEscape = useCallback(
        event => {
            if (event.code !== 'Escape') {
                return;
            }
            popap();
        },
        [popap]
    );

    useEffect(() => {
        window.addEventListener('keydown', clickEscape);

        return () => {
            window.removeEventListener('keydown', clickEscape);
        };
    }, [clickEscape]);

    const clickModal = useCallback(
        event => {
            if (event.target !== event.currentTarget) {
                return;
            }
            popap();
        },
        [popap]
    );

    return createPortal(
        <BackDrop>
            <ModalWindow onClick={clickModal}>
                <Img src={src} alt={alt} />
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