export const backgroundStyle = (url, backgroundAttributes, backgroundSize) => {
    return {
        background: `url(${url}) ${backgroundAttributes}`,
        backgroundSize: backgroundSize ? backgroundSize : 'cover',
    }
};

export default backgroundStyle;