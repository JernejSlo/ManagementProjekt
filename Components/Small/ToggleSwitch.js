import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import PropTypes from "prop-types";

const ToggleSwitch = ({ isEnabled, onToggle }) => {
    return (
        <View>
            <Switch
                trackColor={{ false: "#767577", true: "#efefef" }}
                thumbColor={isEnabled ? "#5bf097" : "#f4f3f4"}
                onValueChange={onToggle}
                value={isEnabled}
            />
        </View>
    );
};
ToggleSwitch.propTypes = {
    isEnabled: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default ToggleSwitch;
