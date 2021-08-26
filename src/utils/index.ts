const getCurrentTime = () => {
    const data = new Date();
    data.setHours(data.getHours() - 3);

    return data;
}

export default { getCurrentTime }