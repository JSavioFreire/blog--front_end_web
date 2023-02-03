const writing = (write,set, i = 0) => {
    if (i < write.length) {
        set(write.slice(0, i + 1));
        setTimeout(() => writing(write,set, i + 1), 300);
    }
}
export default writing;