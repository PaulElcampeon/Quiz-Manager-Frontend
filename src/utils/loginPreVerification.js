const verify = ({username, password}) => {
    const valid = username.length > 0 && password.length > 0
    return valid;
}

export default verify;