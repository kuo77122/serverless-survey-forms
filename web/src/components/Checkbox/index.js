/**
 * @module Checkbox
 *
 *  {'type': 'checkbox',
 *   'label': 'I am checkbox question text',
 *   'data': [
 *       {'value': '1', 'label': 'checkbox label 1'},
 *       {'value': '2', 'label': 'checkbox label 2'},
 *       {'value': '3', 'label': 'checkbox label 3'},
 *       ...
 *   ]
 *  }
 **/

// CSS

/* eslint no-unused-vars: 0 */
import styles from './style.css';

import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import $ from 'jquery';

import Question from '../Question/index';

class Checkbox extends PureComponent {

    constructor(props) {
        super(props);
        const state = {};
        props.item.data.forEach((itm, idx) => {
            const inputID = `checkbox_${props.id}_${idx}`;
            state[inputID] = false;
        });
        this.state = state;
        this.state.feedback = {};
        this._onChangeHandle = this._onChangeHandle.bind(this);
        this._onChangeInput = this._onChangeInput.bind(this);
        this._feedback = this._feedback.bind(this);
    }
    componentDidMount() {
        $(this.refs.root).localize();
    }

    componentDidUpdate() {
        $(this.refs.root).localize();
    }

    render() {
        const { id, item } = this.props;
        return (
            <div ref="root" className="question">
                <Question
                    id={id}
                    text={item.label}
                    required={item.required}
                />
                <div className="checkboxGrp">
                    {this._renderCheckboxItem()}
                </div>
            </div>
        );
    }

    _renderCheckboxItem() {
        const { id, item } = this.props;
        const items = item.data.map((itm, idx) => {
            const inputID = `checkbox_${id}_${idx}`;
            const val = itm.value ? itm.value : itm.label;
            const label = itm.label;
            const input = itm.input;
            return (
                <div
                    className="checkboxItem"
                    key={idx}
                >
                    <input
                        id={inputID}
                        type="checkbox"
                        name={id}
                        value={val}
                        checked={this.state[inputID]}
                        onChange={this._onChangeHandle}
                        data-label={label}
                    />
                    <label htmlFor={inputID}>
                        {label}
                    </label>
                    {
                        input && this.state[inputID] ?
                            <input
                                type="text"
                                placeholder={input}
                                name={val}
                                onChange={this._onChangeInput}
                            /> : ''
                    }
                </div>
            );
        });
        return items;
    }

    _onChangeHandle(e) {
        const feedback = this.state.feedback;
        feedback[e.currentTarget.getAttribute('value')] = {};
        if (e.target.checked) {
            feedback[e.currentTarget.getAttribute('value')].label =
            e.currentTarget.getAttribute('data-label');
        } else {
            feedback[e.currentTarget.getAttribute('value')].label = false;
        }

        this.setState({
            [`${e.currentTarget.id}`]: !this.state[e.currentTarget.id],
            feedback
        }, () => {
            this._feedback();
        });
    }

    _onChangeInput(e) {
        const feedback = this.state.feedback;
        feedback[e.currentTarget.getAttribute('name')].input =
            e.currentTarget.value ? e.currentTarget.value : false;

        this.setState({
            feedback
        }, () => {
            this._feedback();
        });
    }

    _feedback() {
        let data = this.props.feedback[`Q${this.props.id}`].data;
        data = data.map((item) => {
            const updatedItem = {};
            // Value will be the same
            updatedItem.value = item.value;
            // Updated Label
            if (this.state.feedback[item.value] && this.state.feedback[item.value].label) {
                updatedItem.label = this.state.feedback[item.value].label;
            } else {
                updatedItem.label = ' ';
            }
            // Updated Input
            if (this.state.feedback[item.value] && this.state.feedback[item.value].input) {
                updatedItem.input = this.state.feedback[item.value].input;
            } else if (item.input) {
                updatedItem.input = ' ';
            }
            return updatedItem;
        });
        const updatedfeedback = {
            [`Q${this.props.id}`]: {
                type: 'checkbox',
                label: this.props.item.label,
                data: data
            }
        };
        this.props.onChangeHandle(updatedfeedback);
    }

}

Checkbox.PropTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onChangeHandle: PropTypes.func.isRequired
};

Checkbox.defaultProps = {};

export default Checkbox;
