import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css'
import { Fragment } from 'react';

const Backdrop = (props) => {
   return <div className = {classes.backdrop} onClick = {props.onClick}/>
}

const ModalOverlay = (props) => {
    return <div className = {classes.modal}>
        <div className = {classes.content}>{props.children}</div>
    </div>
}

const propertyElement = document.getElementById('overlays');

const Modal = (props) => {
    return(
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClick = {props.onClose}/>,propertyElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,propertyElement)}
        </Fragment>
    );
}

export default Modal;