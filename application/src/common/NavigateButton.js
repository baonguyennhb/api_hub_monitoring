import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ buttonTitle, route, isReplaced }) => {
    const navigate = useNavigate();
    return (
        <Button
            type="link"
            style = {{
                "fontSize" : "16px",
                "fontWeight" : 600,
                "padding" : 0,
                "color": "black"
            }}
            onClick={() => {
                navigate(route, { replace: isReplaced })
            }}
        >
            {buttonTitle}
        </Button>
    )

}
export default NavigateButton;