import React, { Component } from 'react'
import { TextInput, Animated, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'


class AnimatedInput extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
    };

    constructor(props) {
        super(props);

        const value = null;
        this.state = {
            width: null,
            value,
            focusedAnim: new Animated.Value(value ? 1 : 0),
        }

        // value ? 'hi' : 'bye';

        this.onLayout = this.onLayout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.inputRef = this.inputRef.bind(this);
        this.focus = this.focus.bind(this);
    }

    onLayout(ev) {
        console.log(ev.nativeEvent.layout.width);
        this.setState({
            width: ev.nativeEvent.layout.width,
        });
    }

    handleChange(ev) {
        this.setState({
          value: ev.nativeEvent.text,
        });
    
        const onChange = this.props.onChange;
        if (onChange) {
          onChange(ev);
        }
    }

    onFocus(ev) {
        this.onToggle(true);
    
        const onFocus = this.props.onFocus;
        if (onFocus) {
          onFocus(ev);
        }
    }

    onToggle(isActive) {
        this.isActive = isActive;
        Animated.timing(this.state.focusedAnim, {
          toValue: isActive ? 1 : 0,
        }).start();
    }

    onBlur(ev) {
        if (!this.state.value) {
          this.onToggle(false);
        }
    
        const onBlur = this.props.onBlurs;
        
        if (onBlur) {
            // 띄어쓰기 있는 것들 trimmed 시킨 값으로 state, props 변화 없이 변경
          this.refs.input.setNativeProps({
              text: onBlur(ev)
          });
        }
     }

     inputRef() {
         return this.refs.input;
     }

     focus() {
        this.inputRef().focus();
      }

    render() {
        return (
            <View
                style={{paddingTop: 20}}
                onLayout={this.onLayout}
            >
                <TextInput
                    ref="input"
                    style={styles.textInput}
                    value={this.state.value}
                    onChange={this.handleChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    clearButtonMode="while-editing"
                    secureTextEntry={this.props.isSecurity ? true : false}
                    { ...this.props }
                />
                <Animated.View
                style={[
                    styles.border,
                    {
                        width: this.state.focusedAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, this.state.width],
                    }),
                        backgroundColor: '#000',
                    },
                ]}
                />
            </View>
        )
    }
}

export default AnimatedInput